$(function () {
    $("#jqGrid").jqGrid({
        url: baseURL + 'sys/stock/list',
        datatype: "json",
        colModel: [			
			{ label: 'id', name: 'id', index: 'id', width: 50,hidden:true, key: true },
			{ label: '物料类型', name: 'codename', index: 'codeName', width: 80 }, 			
			{ label: '库存重量(t)', name: 'stockweight', index: 'stockWeight', width: 80 }, 
			/*{ label: '库存重量(t)', name: 'stockweight', index: 'stockWeight', width: 80,formatter: function(value, options, row){
				return value = value/1000  
				 }},*/
			{ label: '备注', name: 'remark', index: 'remark', width: 80 }			
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
			codename: null
		},
		showList: true,
		title: null,
		stock: {}
	},
	methods: {
		query: function () {
			vm.reload();
		},
		add: function(){
			vm.showList = false;
			vm.title = "新增";
			/*vm.stock = {};*/
			vm.roleList = {};
            vm.stock = {codename:null,roleIdList:[]};
			vm.getMaterialtype();
		},
		getMaterialtype: function(){
            //加载物料类型树
            $.get(baseURL + "sys/materialtype/listall", function(r){
                ztree = $.fn.zTree.init($("#materialtypeTree"), setting,r);
                var node = ztree.getNodeByParam("name", vm.stock.codename);
                if(node != null){
                    ztree.selectNode(node);

                    /*vm.weighbridge.codename = node.name;*/
                }
            })
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
			var url = vm.stock.id == null ? "sys/stock/save" : "sys/stock/update";
			$.ajax({
				type: "POST",
			    url: baseURL + url,
                contentType: "application/json",
			    data: JSON.stringify(vm.stock),
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
				    url: baseURL + "sys/stock/delete",
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
			$.get(baseURL + "sys/stock/info/"+id, function(r){
                vm.stock = r.stock;
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
                	vm.stock.codename = node[0].name;
                    layer.close(index);
                }
            });
        },
		reload: function (event) {
			vm.showList = true;
			var page = $("#jqGrid").jqGrid('getGridParam','page');
			var selected = $("#selected").val();
			$("#jqGrid").jqGrid('setGridParam',{ 
				postData:{'codename': vm.q.codename,
						  'selected': selected},
                page:page
            }).trigger("reloadGrid");
		}
	}
});

$("#clear").click(function(){
	vm.q.codename = null
	$("#selected").val("泉水");
	var form = layui.form();
	form.render();
	vm.reload();
});

layui.use('form', function(){
	  var form = layui.form(); //只有执行了这一步，部分表单元素才会自动修饰成功
	  form.on('select(lay)', function(data){
		  vm.reload();
		  form.render();
	});
	});