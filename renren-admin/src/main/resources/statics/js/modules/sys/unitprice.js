$(function () {
    $("#jqGrid").jqGrid({
        url: baseURL + 'sys/unitprice/list',
        datatype: "json",
        colModel: [			
			{ label: 'id', name: 'id', index: 'id', width: 50,hidden:true, key: true },
			{ label: '地点', name: 'terminalid', index: 'Terminalid', width: 80 , formatter: function(value, options, row){
				return value === "WD2-3145-AMP-DD22" ? 
						'泉水' : 
						'六合';
				}},	
			{ label: '月份', name: 'priceMonth', index: 'price_month', width: 80 }, 			
			{ label: '石粉', name: 'priceA', index: 'price_a', width: 80 }, 			
			{ label: '米砂', name: 'priceB', index: 'price_b', width: 80 }, 			
			{ label: '瓜子片', name: 'priceC', index: 'price_c', width: 80 }, 			
			{ label: '细碎', name: 'priceD', index: 'price_d', width: 80 }, 			
			{ label: '玄武岩2#', name: 'priceE', index: 'price_e', width: 80 }, 			
			{ label: '玄武岩1#', name: 'priceF', index: 'price_f', width: 80 }, 			
			{ label: '沥青油', name: 'priceG', index: 'price_g', width: 80 }, 			
			{ label: '铣刨料', name: 'priceH', index: 'price_h', width: 80 }, 			
			{ label: '矿粉', name: 'priceI', index: 'price_i', width: 80 }, 			
			{ label: '乙烯焦油', name: 'priceJ', index: 'price_j', width: 80 }, 			
			{ label: '燃料油', name: 'priceK', index: 'price_k', width: 80 }, 			
			{ label: '抗剥落剂', name: 'priceL', index: 'price_l', width: 80 }, 			
			{ label: '木制纤维', name: 'priceM', index: 'price_m', width: 80 }, 			
			{ label: '改性沥青油', name: 'priceN', index: 'price_n', width: 80 }, 			
			{ label: '乳化剂', name: 'priceO', index: 'price_o', width: 80 }, 			
			{ label: '彩色沥青油', name: 'priceP', index: 'price_p', width: 80 }, 			
			{ label: '红色颜料', name: 'priceQ', index: 'price_q', width: 80 }			
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
			monthtime: null
		},
		showList: true,
		title: null,
		unitprice: {}
	},
	methods: {
		query: function () {
			vm.reload();
		},
		add: function(){
			vm.showList = false;
			vm.title = "新增";
			vm.unitprice = {};
		},
		update: function (event) {
			var id = getSelectedRow();
			if(id == null){
				return ;
			}
			vm.showList = false;
            vm.title = "修改";
            
            vm.getInfo(id)
		},
		saveOrUpdate: function (event) {
			var url = vm.unitprice.id == null ? "sys/unitprice/save" : "sys/unitprice/update";
			$.ajax({
				type: "POST",
			    url: baseURL + url,
                contentType: "application/json",
			    data: JSON.stringify(vm.unitprice),
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
				    url: baseURL + "sys/unitprice/delete",
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
			$.get(baseURL + "sys/unitprice/info/"+id, function(r){
                vm.unitprice = r.unitprice;
            });
		},
		reload: function (event) {
			vm.showList = true;
			var page = $("#jqGrid").jqGrid('getGridParam','page');
			var selected = $("#selected").val();
			$("#jqGrid").jqGrid('setGridParam',{
				postData:{'monthtime': vm.q.monthtime,
					  	  'selected': selected},
                page:page
            }).trigger("reloadGrid");
		}
	}
});

$("#clear").click(function(){
	vm.q.monthtime=null;
	$("#selected").val("WD2-3145-AMP-DD22");
	var form = layui.form();
	form.render();
	vm.reload();
});

laydate.render({
	  elem: '#priceMonth',
	  type: 'month',//指定元素
	  theme: '#17B3A3',
	  done: function(value){
			  vm.unitprice.priceMonth = value
	  }
	});
laydate.render({
	  elem: '#monthtime',
	  type: 'month',//指定元素
	  theme: '#17B3A3',
	  /*value: d.getFullYear() + '-' + lay.digit(d.getMonth()),*/
	  done: function(value){
			  vm.q.monthtime = value
	  }
	});
laydate.render({
	   elem: '#priceMonth',
	   type: 'month',//指定元素
	   theme: '#17B3A3',
	   done: function(value){
			  vm.q.monthtime = value
	  }
		});
layui.use('form', function(){
	  var form = layui.form(); //只有执行了这一步，部分表单元素才会自动修饰成功
	  form.on('select(lay)', function(data){
		  vm.reload();
		  form.render();
	});
	});