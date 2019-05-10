$(function () {
	vm.getAllTerminalid();
    $("#jqGrid").jqGrid({
        url: baseURL + 'sys/weighbridge/list',
        datatype: "json",
        colModel: [			
			{ label: 'dataid', name: 'dataid', index: 'dataId', width: 50,hidden:true, key: true },
			/*{ label: '地点', name: 'terminalid', index: 'terminalId', width: 80 },*/ 	
			{ label: '厂地', name: 'terminalid', index: 'terminalId', width: 80,formatter: function(value, options, row){
				for(var i=0;i<vm.place.length;i++){
					if(value == (vm.place[i].abbreviation)){
						return vm.place[i].place;
					}
				}
				return "未知厂地";
				/*if(value === "QS"){
					return "泉水";
				}else if(value === "LH"){
					return "六合";
				}else if(value ==="CS"){
					return "测试";
				}*/
				/*return value === "QS" ? 
						'泉水' : 
						'六合';*/
				} },
			{ label: '时间', name: 'logtime', index: 'logTime', width: 80 }, 			
			{ label: '物料类型', name: 'codename', index: 'codeName', width: 80 }, 			
			{ label: '重量(kg)', name: 'weight', index: 'weight', width: 80 }, 			
			{ label: '车牌号', name: 'carno', index: 'carNo', width: 80 }, 			
			/*{ label: '车辆进场或出场', name: 'inorout', index: 'inOrOut', width: 80 }*/	
			{ label: '车辆进厂或出厂', name: 'inorout', width: 60, formatter: function(value, options, row){
				return value === "0" ? 
					'<span class="label label-info">出厂</span>' : 
					'<span class="label label-success">进厂</span>';
			}}
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

var setting = {
	    data: {
	        simpleData: {
	            enable: true
	        },
	        key: {
	            url:"nourl"
	        }
	    }
	};

var ztree;

var vm = new Vue({
	el:'#rrapp',
	data:{
		q:{
			carno: null,
			startlogtime: null,
			endlogtime: null
		},
		showList: true,
		title: null,
		placelist:{},
		place:[],
		weighbridge: {
			codename:null,
			placeIdList:null
		}
	},
	methods: {
		query: function () {
			vm.reload();
		},
		add: function(){
			vm.showList = false;
			vm.title = "新增";
			/*vm.weighbridge = {};*/
			vm.roleList = {};
			vm.placelist = {};
            vm.weighbridge = {codename:null, placeIdList:null};
            this.getPlaceList();
            this.getAllTerminalid();
			vm.getMaterialtype();
		},
		getMaterialtype: function(){
            //加载物料类型树
            $.get(baseURL + "sys/materialtype/listall", function(r){
                ztree = $.fn.zTree.init($("#materialtypeTree"), setting,r);
                var node = ztree.getNodeByParam("name", vm.weighbridge.codename);
                if(node != null){
                    ztree.selectNode(node);

                    /*vm.weighbridge.codename = node.name;*/
                }
            })
        },
		update: function (event) {
			var dataid = getSelectedRow();
			if(dataid == null){
				return ;
			}
			vm.showList = false;
            vm.title = "修改";
            vm.getInfo(dataid)
            this.getAllTerminalid();
            this.getPlaceList();
		},
		saveOrUpdate: function (event) {
			var url = vm.weighbridge.dataid == null ? "sys/weighbridge/save" : "sys/weighbridge/update";
			$.ajax({
				type: "POST",
			    url: baseURL + url,
                contentType: "application/json",
			    data: JSON.stringify(vm.weighbridge),
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
			var dataids = getSelectedRows();
			if(dataids == null){
				return ;
			}
			
			confirm('确定要删除选中的记录？', function(){
				$.ajax({
					type: "POST",
				    url: baseURL + "sys/weighbridge/delete",
                    contentType: "application/json",
				    data: JSON.stringify(dataids),
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
		getInfo: function(dataid){
			$.get(baseURL + "sys/weighbridge/info/"+dataid, function(r){
                vm.weighbridge = r.weighbridge;
                vm.getMaterialtype();
            });
		},
		materialtypeTree: function(){
            layer.open({
                type: 1,
                offset: '50px',
                skin: 'layui-layer-molv',
                title: "选择物料类型",
                area: ['300px', '450px'],
                shade: 0,
                shadeClose: false,
                content: jQuery("#materialtypeLayer"),
                btn: ['确定', '取消'],
                btn1: function (index) {
                	var node = ztree.getSelectedNodes();
                	vm.weighbridge.codename = node[0].name;
                    layer.close(index);
                }
            });
        },
        getPlaceList: function(){
            $.get(baseURL + "sys/plantlocation/getPlace", function(r){
                vm.placelist = r.place;
            });
        },
        getAllTerminalid: function(){
        	$.ajax({
        		type:'post',
        		url: baseURL + 'sys/plantlocation/getPlace',
        		data:"",
        		dataType:'json',
        		async: false,
        		success:function(data) {
        			 vm.place = data.place;
        			/*for(var i=0;i<vm.place.length;i++){
        				$("#selected").append("<option value='"+ vm.place[i].abbreviation +"'>"+ vm.place[i].place +"</option>");
        			}*/
        		},
        		error:function(){     
        		}
        	});
        },
       /* loadSelect: function(){
        	$("#selected").empty();
        	$("#selected").append("<option value='全部' selected>全部</option>");
        	if(vm.place.length>0){
        	for(var i=0;i<vm.place.length;i++){
				$("#selected").append("<option value='"+ vm.place[i].abbreviation +"'>"+ vm.place[i].place +"</option>");
			}
        }},*/
        clear: function(){
        	vm.q.carno = null;
        	vm.q.startlogtime=null;
        	vm.q.endlogtime=null;
        	$("#selected").val("全部");
        	var form = layui.form();
        	form.render();
        	vm.reload();
        },
        option: function(){
        	/*vm.clear();*/
        	vm.getAllTerminalid();
        	/*var form = layui.form();
        	form.render();*/
        },
		reload: function (event) {
			vm.showList = true;
			var page = $("#jqGrid").jqGrid('getGridParam','page');
			var selected = $("#selected").val();
			this.getAllTerminalid();
			$("#jqGrid").jqGrid('setGridParam',{
				postData:{'carno': vm.q.carno,
						  'startlogtime': vm.q.startlogtime,
						  'endlogtime': vm.q.endlogtime,
						  'selected': selected},
                page:page
            }).trigger("reloadGrid");
		}
	}
});
/*$("#option").click(function(){
	vm.getAllTerminalid();
	var form = layui.form();
	 form.on('select(lay)', function(data){
		  vm.reload();
		  form.render();
	});
	alert(vm.place.toString());
})*/
/*
$("#clear").click(function(){
	vm.q.carno = null;
	vm.q.startlogtime=null;
	vm.q.endlogtime=null;
	$("#selected").val("全部");
	var form = layui.form();
	form.render();
	vm.reload();
});*/
/*var place;
function getAllTerminalid(){
	alert(1);
	$.ajax({
		type:'post',
		url: baseURL + 'sys/plantlocation/getPlace',
		data:"",
		dataType:'json',
		async: false,
		success:function(data) {
			 place = data.place;
			for(var i=0;i<place.length;i++){
				$("#selected").append("<option value='"+ place[i].abbreviation +"'>"+ place[i].place +"</option>");
			}
		},
		error:function(){     
		}
	});
}
*/
laydate.render({
	  elem: '#logtime',
	  type: 'datetime',//指定元素
	  theme: '#17B3A3',
	  calendar: true,
	  done: function(value){
			  vm.weighbridge.logtime = value
	  }
	});
laydate.render({
	   elem: '#startdate',
	   type: 'datetime',
	   theme: '#17B3A3',
	   calendar: true,
	   done: function(value){
				  vm.q.startlogtime = value
		  }
		});
laydate.render({
	   elem: '#enddate',
	   type: 'datetime',//指定元素
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