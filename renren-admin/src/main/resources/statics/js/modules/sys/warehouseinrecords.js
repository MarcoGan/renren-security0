$(function () {
    $("#jqGrid").jqGrid({
        url: baseURL + 'sys/warehouseinrecords/list',
        datatype: "json",
        colModel: [			
			{ label: 'id', name: 'id', index: 'id', width: 10,hidden:true, key: true },
			{ label: '日期', name: 'logtime', index: 'logtime', width: 80,formatter: function(value, options, row){
				return value.slice(0,11)
				}}, 			
			{ label: '审核标志', name: 'reviewSign', index: 'review_sign', width: 80 }, 			
			{ label: '单据编号', name: 'receiptNumber', index: 'receipt_number', width: 80 }, 			
			{ label: '供应商', name: 'supplier', index: 'supplier', width: 80 }, 			
			{ label: '摘要', name: 'digest', index: 'digest', width: 80 }, 			
			{ label: '收料仓库', name: 'warehouse', index: 'warehouse', width: 80 }, 			
			{ label: '物料长代码', name: 'materialCode', index: 'material_code', width: 80 }, 			
			{ label: '物料名称', name: 'materialName', index: 'material_name', width: 80 }, 			
			{ label: '规格型号', name: 'materialModel', index: 'material_model', width: 80 }, 			
			{ label: '单位', name: 'unit', index: 'unit', width: 80 }, 			
			{ label: '实收数量', name: 'receivedQuantity', index: 'received_quantity', width: 80 }, 			
			{ label: '单价', name: 'unitprice', index: 'unitprice', width: 80 }, 			
			{ label: '金额', name: 'money', index: 'money', width: 80 }, 			
			{ label: '开票数量', name: 'invoiceNum', index: 'invoice_num', width: 80 }, 			
			{ label: '备注', name: 'remark', index: 'remark', width: 80 }, 			
			{ label: '交货地点', name: 'deliveryPoints', index: 'delivery_points', width: 80 }, 			
			{ label: '部门', name: 'department', index: 'department', width: 80 }, 			
			{ label: '业务员', name: 'executive', index: 'executive', width: 80 }			
        ],
        footerrow:true,
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
        },
        gridComplete:completeMethod,
    });
});
function completeMethod(){
	var startlogtime = $("#startdate").val()
	var endlogtime = $("#enddate").val()
	$.ajax({  
		type : "post",  
		url : baseURL +"sys/warehouseinrecords/getCount",  
		data :{
			startlogtime : startlogtime,
			endlogtime : endlogtime
		},  
		async : false,  
		success : function(data){
			totalQuantity = data.TotalQuantity;
			TotalMoney = data.TotalMoney;
			TotalInvoiceNum = data.TotalInvoiceNum;
			/*var paidsum=$(this).getCol("receivedQuantity",false,"sum");  //声明一个常量通过getCol方法求你需要得出总计列的和。
*/		 	 $("#jqGrid").footerData("set",{"logtime":"总合计","receivedQuantity":totalQuantity,"money":TotalMoney,"invoiceNum":TotalInvoiceNum});  //根据你上面所写出对应的格式比如comm 对应最下面显示的就是合计
		}
	});
	 
    }
var vm = new Vue({
	el:'#rrapp',
	data:{
		q:{
			startlogtime: null,
			endlogtime: null
		},
		showList: true,
		title: null,
		warehouseinRecords: {}
	},
	methods: {
		query: function () {
			vm.reload();
		},
		add: function(){
			vm.showList = false;
			vm.title = "新增";
			vm.warehouseinRecords = {};
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
			var url = vm.warehouseinRecords.id == null ? "sys/warehouseinrecords/save" : "sys/warehouseinrecords/update";
			$.ajax({
				type: "POST",
			    url: baseURL + url,
                contentType: "application/json",
			    data: JSON.stringify(vm.warehouseinRecords),
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
				    url: baseURL + "sys/warehouseinrecords/delete",
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
			$.get(baseURL + "sys/warehouseinrecords/info/"+id, function(r){
                vm.warehouseinRecords = r.warehouseinRecords;
            });
		},
		reload: function (event) {
			vm.showList = true;
			var page = $("#jqGrid").jqGrid('getGridParam','page');
			$("#jqGrid").jqGrid('setGridParam',{
				postData:{'startlogtime': vm.q.startlogtime,
					  'endlogtime': vm.q.endlogtime
					  },
                page:page
            }).trigger("reloadGrid");
		}
	}
});

$("#clear").click(function(){
	vm.q.startlogtime=null;
	vm.q.endlogtime=null;
	vm.reload();
});

$("#upload").click(function(){
	var textfield = document.getElementById('textfield').value;
	if(textfield == ""){
		alert('请选择上传文件', function(index){
			vm.reload();
		});
	}else{
	$.ajax({
	    url: baseURL +"sys/warehouseinrecords/import",
	    type: 'POST',
	    cache: false,
	    data: new FormData($("#file_form")[0]),
	    processData: false,
	    contentType: false,
	    success: function (result) {
	    	alert('上传成功', function(index){
				vm.reload();
			});
	    },
	    error: function (err) {
	    }
	});
	}
	});

/*var d = new Date();
laydate.render({
	   elem: '#searchdate',
	   type: 'date',//指定元素
	   theme: '#17B3A3',
	   done: function(value){
			  vm.q.searchdate = value
	  }
	   value: d.getFullYear() + '-' + lay.digit(d.getMonth()+1 + '-' + lay.digit(d.getDate()))
		});*/
laydate.render({
	   elem: '#logtime',
	   type: 'date',
	   theme: '#17B3A3',
	   done: function(value){
		  vm.warehouseinRecords.logtime = value
		  }
		});

laydate.render({
	   elem: '#startdate',
	   type: 'date',
	   theme: '#17B3A3',
	   done: function(value){
		   vm.q.startlogtime = value
		  }
		});
	laydate.render({
	   elem: '#enddate',
	   type: 'date',//指定元素
	   theme: '#17B3A3',
	   done: function(value){
			vm.q.endlogtime = value
			  }
		});