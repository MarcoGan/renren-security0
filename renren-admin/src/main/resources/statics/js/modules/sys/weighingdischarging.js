$(function () {
	vm.getPlaceList();
    $("#jqGrid").jqGrid({
        url: baseURL + 'sys/weighingdischarging/list',
        datatype: "json",
        colModel: [			
			{ label: 'id', name: 'id', index: 'id' ,hidden:true, key: true },
			{ label: '厂地', name: 'location', index: 'location', width: 50,formatter: function(value, options, row){
				for(var i=0;i<vm.placelist.length;i++){
					if(value == (vm.placelist[i].abbreviation)){
						return vm.placelist[i].place;
					}
				}
				return "未知厂地";
				} },
			{ label: '收货单位', name: 'consignee', index: 'consignee', width: 50 }, 			
			{ label: '发送时间', name: 'sendtime', index: 'sendtime', width: 120 } ,			
			{ label: '货名', name: 'cargoName', index: 'cargo_name', width: 50 }, 			
			{ label: '规格', name: 'specification', index: 'specification', width: 50 }, 			
			{ label: '车号', name: 'plateNumber', index: 'plate_number', width: 70 }, 			
			{ label: '毛重', name: 'grossWeight', index: 'gross_weight', width: 50 }, 			
			{ label: '皮重', name: 'tareWeight', index: 'tare_weight', width: 50 }, 			
			{ label: '净重', name: 'netWeight', index: 'net_weight', width: 50 }, 			
			{ label: '地点', name: 'site', index: 'site', width: 70 }, 			
			{ label: '备注', name: 'remark', index: 'remark', width: 50 }, 			
			{ label: '司磅员', name: 'weighman', index: 'weighman', width: 50 }, 			
			{ label: '磅单号', name: 'superintendent', index: 'superintendent', width: 50 }, 			
			{ label: '收货人', name: 'consigneeman', index: 'consigneeman', width: 50 },			
			{ label: '日期', name: 'dispatchDate', index: 'dispatch_date', width: 80 }
        ],
		viewrecords: true,
        height: 385,
        rowNum: 10,
		rowList : [10,30,50],
        rownumbers: true, 
        rownumWidth: 25, 
        autowidth:true,
        multiselect: true,
        pager: "#jqGridPager",
        jsonReader : {
            root: "page.list",
            page: "page.currPage",
            total: "page.totalPage",
            records: "page.totalCount"
        },
        prmNames : {
            page:"page", 
            rows:"limit", 
            order: "order"
        },
        gridComplete:function(){
        	//隐藏grid底部滚动条
        	$("#jqGrid").closest(".ui-jqgrid-bdiv").css({ "overflow-x" : "hidden" }); 
        }
    });
});

var vm = new Vue({
	el:'#rrapp',
	data:{
		q:{
			startlogtime: null,
			endlogtime: null
		},
		showList: true,
		title: null,
		place:null,
		placelist:{},
		weighingDischarging: {placeIdList:null}
	},
	methods: {
		query: function () {
			vm.reload();
		},
		add: function(){
			vm.showList = false;
			vm.title = "新增";
			vm.placelist = {};
			vm.weighingDischarging = {placeIdList:null};
			this.getPlaceList();
		},
		update: function (event) {
			var id = getSelectedRow();
			if(id == null){
				return ;
			}
			vm.showList = false;
            vm.title = "修改";
            vm.getInfo(id);
            this.getPlaceList();
		},
		saveOrUpdate: function (event) {
			var url = vm.weighingDischarging.id == null ? "sys/weighingdischarging/save" : "sys/weighingdischarging/update";
			$.ajax({
				type: "POST",
			    url: baseURL + url,
                contentType: "application/json",
			    data: JSON.stringify(vm.weighingDischarging),
			    success: function(r){
			    	if(r.code === 0){
						alert('操作成功', function(index){
							vm.reload();
						});
					}else{
						alert(r.msg);
					}
				}
			});
		},
		del: function (event) {
			var ids = getSelectedRows();
			if(ids == null){
				return ;
			}
			
			confirm('确定要删除选中的记录？', function(){
				$.ajax({
					type: "POST",
				    url: baseURL + "sys/weighingdischarging/delete",
                    contentType: "application/json",
				    data: JSON.stringify(ids),
				    success: function(r){
						if(r.code == 0){
							alert('操作成功', function(index){
								$("#jqGrid").trigger("reloadGrid");
							});
						}else{
							alert(r.msg);
						}
					}
				});
			});
		},
		getInfo: function(id){
			$.get(baseURL + "sys/weighingdischarging/info/"+id, function(r){
                vm.weighingDischarging = r.weighingDischarging;
            });
		},
		getPlaceList: function(){
	            $.get(baseURL + "sys/plantlocation/getPlace", function(r){
	                vm.placelist = r.place;
	            });
	        },
        clear: function(){
        	vm.q.startlogtime=null;
        	vm.q.endlogtime=null;
        	$("#selected").val("全部");
        	var form = layui.form();
        	form.render();
        	vm.reload();
        },
        option: function(){
        	vm.getPlaceList();
        },
		reload: function (event) {
			vm.showList = true;
			var page = $("#jqGrid").jqGrid('getGridParam','page');
			var selected = $("#selected").val();
			vm.getPlaceList();
			$("#jqGrid").jqGrid('setGridParam',{
				postData:{'startlogtime': vm.q.startlogtime,
					      'endlogtime': vm.q.endlogtime,
					      'selected': selected},
                page:page
            }).trigger("reloadGrid");
		}
	}
});

laydate.render({
	   elem: '#dispatchDate',
	   type: 'date',
	   theme: '#17B3A3',
	   done: function(value){
		  vm.weighingDischarging.dispatchDate = value
		  }
		});
laydate.render({
	   elem: '#sendtime',
	   type: 'datetime',
	   theme: '#17B3A3',
	   done: function(value){
		  vm.weighingDischarging.sendtime = value
		  }
		});
laydate.render({
	   elem: '#startdate',
	   type: 'date',
	   theme: '#17B3A3',
	   calendar: true,
	   done: function(value){
		   vm.q.startlogtime = value
		  }
		});
laydate.render({
	   elem: '#enddate',
	   type: 'date',//指定元素
	   theme: '#17B3A3',
	   calendar: true,
	   done: function(value){
			vm.q.endlogtime = value
			  }
		});
layui.use('form', function(){
		  var form = layui.form(); //只有执行了这一步，部分表单元素才会自动修饰成功
		  form.on('select(lay)', function(data){
			  vm.reload();
			  form.render();
		});
		});