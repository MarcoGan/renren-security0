$(function () {
    $("#jqGrid").jqGrid({
        url: baseURL + 'sys/materialtype/list',
        datatype: "json",
        colModel: [			
			{ label: 'materialtypeid', name: 'materialtypeid', index: 'materialTypeId', width: 50,hidden:true, key: true },
			{ label: '物料名', name: 'materialtypename', index: 'materialTypeName', width: 80 }, 			
			/*{ label: '物料类型缩写/代号', name: 'codename', index: 'codeName', width: 80 },*/ 			
			{ label: '减重比列（%）', name: 'weightlosspercentage', index: 'weightLossPercentage', width: 80 }, 			
			{ label: '描述', name: 'description', index: 'description', width: 80 }			
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
			materialtypename: null
		},
		showList: true,
		title: null,
		materialType: {}
	},
	methods: {
		query: function () {
			vm.reload();
		},
		add: function(){
			vm.showList = false;
			vm.title = "新增";
			vm.materialType = {};
		},
		update: function (event) {
			var materialtypeid = getSelectedRow();
			if(materialtypeid == null){
				return ;
			}
			vm.showList = false;
            vm.title = "修改";
            
            vm.getInfo(materialtypeid)
		},
		saveOrUpdate: function (event) {
			var url = vm.materialType.materialtypeid == null ? "sys/materialtype/save" : "sys/materialtype/update";
			$.ajax({
				type: "POST",
			    url: baseURL + url,
                contentType: "application/json",
			    data: JSON.stringify(vm.materialType),
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
			var materialtypeids = getSelectedRows();
			if(materialtypeids == null){
				return ;
			}
			
			confirm('确定要删除选中的记录？', function(){
				$.ajax({
					type: "POST",
				    url: baseURL + "sys/materialtype/delete",
                    contentType: "application/json",
				    data: JSON.stringify(materialtypeids),
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
		getInfo: function(materialtypeid){
			$.get(baseURL + "sys/materialtype/info/"+materialtypeid, function(r){
                vm.materialType = r.materialType;
            });
		},
		reload: function (event) {
			vm.showList = true;
			var page = $("#jqGrid").jqGrid('getGridParam','page');
			$("#jqGrid").jqGrid('setGridParam',{ 
				postData:{'materialtypename': vm.q.materialtypename},
                page:page
            }).trigger("reloadGrid");
		}
	}
});

$("#clear").click(function(){
	vm.q.materialtypename = null
});