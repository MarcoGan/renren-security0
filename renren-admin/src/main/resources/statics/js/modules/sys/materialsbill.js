window.onload = function(){
	var getdataa = [];
	var getdatab = [];
	var getdatac = [];
	var getdatad = [];
	var getdatae = [];
	var getdataf = [];
	var getdatag = [];
	var getdatah = [];
	var getdatai = [];
	var getdataj = [];
	var getdatak = [];
	var getdatal = [];
	var getdatam = [];
	var getdatan = [];
	var getdatao = [];
	var getdatap = [];
	var getdataq = [];
	var getulist=[];
	setTimeout('loadtable()', 200);
}
function search(){
	/*getUbitPrice();*/
	loadtable();
	var sum = 0;
	for(var i=0;i<getulist.length;i++){
		sum = sum + getulist[i];
	}
	if(sum == ""){
		//触发事件
		jumpBulletin();
	}
	/*alert($("#searchdate").val());*/
}
function jumpBulletin() {
	// 示范一个公告层
	layer
			.open({
				type : 1,
				title : false // 不显示标题栏
				,
				closeBtn : false,
				area : '300px;',
				shade : 0.8,
				id : 'LAY_layuipro' // 设定一个id，防止重复弹出
				,
				btn : [ '现在就去', '稍后片刻'],
				btnAlign : 'c',
				moveType : 1 // 拖拽模式，0或者1
				,
				content : '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">您要查询的该月份成分不含税单价还未录入，现在要去录入吗？</div>',
				btn1 : function(layero) {
//					alert(document.getElementById("year").innerText);
					vm.add()
					/*var btn = layero.find('.layui-layer-btn');
					btn.find('.layui-layer-btn0').attr({
						href : 'unitprice.html',
						target : '_blank'
					});*/
					layer.closeAll(); 
				}
			});
}
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
		add: function(event){
			vm.showList = false;
			vm.title = "新增";
			vm.unitprice = {};
//			$("#selected").val("WD2-3145-AMP-DD22");
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
							loadtable();
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
function loaddate(selected,searchdate,selectedtext){
	var str = searchdate.split('-');
	document.getElementById("year").innerText=str[0];
	document.getElementById("month").innerText=str[1];
	document.getElementById("place").innerText=selectedtext;
}
function loadtable(){
	var searchdate = $("#searchdate").val();
	var selected = $("#selected").val();
	getUbitPrice(searchdate,selected);
	queryLastMonthA(searchdate,selected);
	queryLastMonthB(searchdate,selected);
	queryLastMonthC(searchdate,selected);
	queryLastMonthD(searchdate,selected);
	queryLastMonthE(searchdate,selected);
	queryLastMonthF(searchdate,selected);
	queryLastMonthG(searchdate,selected);
	queryLastMonthH(searchdate,selected);
	queryLastMonthI(searchdate,selected);
	queryLastMonthJ(searchdate,selected);
	queryLastMonthK(searchdate,selected);
	queryLastMonthL(searchdate,selected);
	queryLastMonthM(searchdate,selected);
	queryLastMonthN(searchdate,selected);
	queryLastMonthO(searchdate,selected);
	queryLastMonthP(searchdate,selected);
	queryLastMonthQ(searchdate,selected);
	queryLastMonthR(searchdate,selected);
	queryLastMonthS();
}
function getUbitPrice(searchdate,selected){
	/*var searchdate = $("#searchdate").val();
	var selected = $("#selected").val();*/
	$.ajax({  
		type : "post",  
		url : baseURL +"sys/materialsbill/getUnitPrice",  
		data :{
			searchdate : searchdate,
			selected : selected
		},  
		async : false,  
		success : function(data){
			getulist = data.arrayprice;
		}
	});
}

function saveWa(){
	var saveDataAry=[];
	var searchdate = $("#searchdate").val();
	var selected = $("#selected").val();
	/*AC-10*/
	var id1  = document.getElementById("IDA").value;
	var limestoneWater1  = hs(document.getElementById("watercontentAA").value);
	var melonslicesWater1  = hs(document.getElementById("watercontentAB").value);
	var limestoneWaste1 = hs(document.getElementById("ashAA").value);
	var melonslicesWaste1 = hs(document.getElementById("ashAB").value);
	var data1={"id": id1, "site": selected, "month": searchdate, "materialtype":"AC-10", "limestoneWater":limestoneWater1,"limestoneWaste":limestoneWaste1,"melonslicesWater":melonslicesWater1,"melonslicesWaste":melonslicesWaste1,"millingMaterialWater":0,"millingMaterialWaste":0, "comminutionWater":0,"comminutionWaste":0,"highMaterial1Water":0,"highMaterial1Waste":0,"highMaterial2Water":0,"highMaterial2Waste":0,"woodFiber":0,"antistrippingAgent":0};  
	saveDataAry.push(data1);
	/*30%***AC-10*/
	var id2  = document.getElementById("IDB").value;
	var limestoneWater2  = hs(document.getElementById("watercontentBA").value);
	var melonslicesWater2  = hs(document.getElementById("watercontentBB").value);
	var millingMaterialWater2  = hs(document.getElementById("watercontentBC").value);
	var limestoneWaste2 = hs(document.getElementById("ashBA").value);
	var melonslicesWaste2 = hs(document.getElementById("ashBB").value);
	var millingMaterialWaste2 = hs(document.getElementById("ashBC").value);
	var data2={"id": id2, "site": selected, "month": searchdate, "materialtype":"30%***AC-10", "limestoneWater":limestoneWater2,"limestoneWaste":limestoneWaste2,"melonslicesWater":melonslicesWater2,"melonslicesWaste":melonslicesWaste2,"millingMaterialWater":millingMaterialWater2,"millingMaterialWaste":millingMaterialWaste2, "comminutionWater":0,"comminutionWaste":0,"highMaterial1Water":0,"highMaterial1Waste":0,"highMaterial2Water":0,"highMaterial2Waste":0,"woodFiber":0,"antistrippingAgent":0};  
	saveDataAry.push(data2);
	/*AC-13*/
	var id3  = document.getElementById("IDC").value;
	var limestoneWater3  = hs(document.getElementById("watercontentCA").value);
	var melonslicesWater3  = hs(document.getElementById("watercontentCB").value);
	var limestoneWaste3 = hs(document.getElementById("ashCA").value);
	var melonslicesWaste3 = hs(document.getElementById("ashCB").value);
	var data3={"id": id3, "site": selected, "month": searchdate, "materialtype":"AC-13", "limestoneWater":limestoneWater3,"limestoneWaste":limestoneWaste3,"melonslicesWater":melonslicesWater3,"melonslicesWaste":melonslicesWaste3,"millingMaterialWater":0,"millingMaterialWaste":0, "comminutionWater":0,"comminutionWaste":0,"highMaterial1Water":0,"highMaterial1Waste":0,"highMaterial2Water":0,"highMaterial2Waste":0,"woodFiber":0,"antistrippingAgent":0};  
	saveDataAry.push(data3);
	/*30%***AC-13*/
	var id4  = document.getElementById("IDD").value;
	var limestoneWater4  = hs(document.getElementById("watercontentDA").value);
	var melonslicesWater4  = hs(document.getElementById("watercontentDB").value);
	var millingMaterialWater4  = hs(document.getElementById("watercontentDC").value);
	var limestoneWaste4 = hs(document.getElementById("ashDA").value);
	var melonslicesWaste4 = hs(document.getElementById("ashDB").value);
	var millingMaterialWaste4 = hs(document.getElementById("ashDC").value);
	var data4={"id": id4, "site": selected, "month": searchdate, "materialtype":"30%***AC-13", "limestoneWater":limestoneWater4,"limestoneWaste":limestoneWaste4,"melonslicesWater":melonslicesWater4,"melonslicesWaste":melonslicesWaste4,"millingMaterialWater":millingMaterialWater4,"millingMaterialWaste":millingMaterialWaste4, "comminutionWater":0,"comminutionWaste":0,"highMaterial1Water":0,"highMaterial1Waste":0,"highMaterial2Water":0,"highMaterial2Waste":0,"woodFiber":0,"antistrippingAgent":0};  
	saveDataAry.push(data4);
	/*35%***AC-13*/
	var id5  = document.getElementById("IDK").value;
	var limestoneWater5  = hs(document.getElementById("watercontentKA").value);
	var melonslicesWater5  = hs(document.getElementById("watercontentKB").value);
	var millingMaterialWater5  = hs(document.getElementById("watercontentKC").value);
	var limestoneWaste5 = hs(document.getElementById("ashKA").value);
	var melonslicesWaste5 = hs(document.getElementById("ashKB").value);
	var millingMaterialWaste5 = hs(document.getElementById("ashKC").value);
	var data5={"id": id5, "site": selected, "month": searchdate, "materialtype":"35%***AC-13", "limestoneWater":limestoneWater5,"limestoneWaste":limestoneWaste5,"melonslicesWater":melonslicesWater5,"melonslicesWaste":melonslicesWaste5,"millingMaterialWater":millingMaterialWater5,"millingMaterialWaste":millingMaterialWaste5, "comminutionWater":0,"comminutionWaste":0,"highMaterial1Water":0,"highMaterial1Waste":0,"highMaterial2Water":0,"highMaterial2Waste":0,"woodFiber":0,"antistrippingAgent":0};  
	saveDataAry.push(data5);
	/*AC-16*/
	var id6  = document.getElementById("IDE").value;
	var limestoneWater6  = hs(document.getElementById("watercontentEA").value);
	var melonslicesWater6  = hs(document.getElementById("watercontentEB").value);
	var comminutionWater6  = hs(document.getElementById("watercontentEC").value);
	var limestoneWaste6 = hs(document.getElementById("ashEA").value);
	var melonslicesWaste6 = hs(document.getElementById("ashEB").value);
	var comminutionWaste6 = hs(document.getElementById("ashEC").value);
	var data6={"id": id6, "site": selected, "month": searchdate, "materialtype":"AC-16", "limestoneWater":limestoneWater6,"limestoneWaste":limestoneWaste6,"melonslicesWater":melonslicesWater6,"melonslicesWaste":melonslicesWaste6,"millingMaterialWater":0,"millingMaterialWaste":0, "comminutionWater":comminutionWater6,"comminutionWaste":comminutionWaste6,"highMaterial1Water":0,"highMaterial1Waste":0,"highMaterial2Water":0,"highMaterial2Waste":0,"woodFiber":0,"antistrippingAgent":0};  
	saveDataAry.push(data6);
	/*35%***AC-16*/
	var id7  = document.getElementById("IDF").value;
	var limestoneWater7  = hs(document.getElementById("watercontentFA").value);
	var melonslicesWater7  = hs(document.getElementById("watercontentFB").value);
	var comminutionWater7  = hs(document.getElementById("watercontentFC").value);
	var millingMaterialWater7  = hs(document.getElementById("watercontentFD").value);
	var limestoneWaste7 = hs(document.getElementById("ashFA").value);
	var melonslicesWaste7 = hs(document.getElementById("ashFB").value);
	var comminutionWaste7 = hs(document.getElementById("ashFC").value);
	var millingMaterialWaste7 = hs(document.getElementById("ashFD").value);
	var data7={"id": id7, "site": selected, "month": searchdate, "materialtype":"35%***AC-16", "limestoneWater":limestoneWater7,"limestoneWaste":limestoneWaste7,"melonslicesWater":melonslicesWater7,"melonslicesWaste":melonslicesWaste7,"millingMaterialWater":millingMaterialWater7,"millingMaterialWaste":millingMaterialWaste7, "comminutionWater":comminutionWater7,"comminutionWaste":comminutionWaste7,"highMaterial1Water":0,"highMaterial1Waste":0,"highMaterial2Water":0,"highMaterial2Waste":0,"woodFiber":0,"antistrippingAgent":0};  
	saveDataAry.push(data7);
	/*AC-20*/
	var id8  = document.getElementById("IDG").value;
	var limestoneWater8  = hs(document.getElementById("watercontentGA").value);
	var melonslicesWater8  = hs(document.getElementById("watercontentGB").value);
	var comminutionWater8  = hs(document.getElementById("watercontentGC").value);
	var limestoneWaste8 = hs(document.getElementById("ashGA").value);
	var melonslicesWaste8 = hs(document.getElementById("ashGB").value);
	var comminutionWaste8 = hs(document.getElementById("ashGC").value);
	var data8={"id": id8, "site": selected, "month": searchdate, "materialtype":"AC-20", "limestoneWater":limestoneWater8,"limestoneWaste":limestoneWaste8,"melonslicesWater":melonslicesWater8,"melonslicesWaste":melonslicesWaste8,"millingMaterialWater":0,"millingMaterialWaste":0, "comminutionWater":comminutionWater8,"comminutionWaste":comminutionWaste8,"highMaterial1Water":0,"highMaterial1Waste":0,"highMaterial2Water":0,"highMaterial2Waste":0,"woodFiber":0,"antistrippingAgent":0};  
	saveDataAry.push(data8);
	/*35%***AC-20*/
	var id9  = document.getElementById("IDH").value;
	var limestoneWater9  = hs(document.getElementById("watercontentHA").value);
	var melonslicesWater9  = hs(document.getElementById("watercontentHB").value);
	var comminutionWater9  = hs(document.getElementById("watercontentHC").value);
	var millingMaterialWater9  = hs(document.getElementById("watercontentHD").value);
	var limestoneWaste9 = hs(document.getElementById("ashHA").value);
	var melonslicesWaste9 = hs(document.getElementById("ashHB").value);
	var comminutionWaste9 = hs(document.getElementById("ashHC").value);
	var millingMaterialWaste9 = hs(document.getElementById("ashHD").value);
	var data9={"id": id9, "site": selected, "month": searchdate, "materialtype":"35%***AC-20", "limestoneWater":limestoneWater9,"limestoneWaste":limestoneWaste9,"melonslicesWater":melonslicesWater9,"melonslicesWaste":melonslicesWaste9,"millingMaterialWater":millingMaterialWater9,"millingMaterialWaste":millingMaterialWaste9, "comminutionWater":comminutionWater9,"comminutionWaste":comminutionWaste9,"highMaterial1Water":0,"highMaterial1Waste":0,"highMaterial2Water":0,"highMaterial2Waste":0,"woodFiber":0,"antistrippingAgent":0};  
	saveDataAry.push(data9);
	/*40%***AC-20*/
	var id10  = document.getElementById("IDL").value;
	var limestoneWater10  = hs(document.getElementById("watercontentLA").value);
	var melonslicesWater10  = hs(document.getElementById("watercontentLB").value);
	var comminutionWater10  = hs(document.getElementById("watercontentLC").value);
	var millingMaterialWater10  = hs(document.getElementById("watercontentLD").value);
	var limestoneWaste10 = hs(document.getElementById("ashLA").value);
	var melonslicesWaste10 = hs(document.getElementById("ashLB").value);
	var comminutionWaste10 = hs(document.getElementById("ashLC").value);
	var millingMaterialWaste10 = hs(document.getElementById("ashLD").value);
	var data10={"id": id10, "site": selected, "month": searchdate, "materialtype":"40%***AC-20", "limestoneWater":limestoneWater10,"limestoneWaste":limestoneWaste10,"melonslicesWater":melonslicesWater10,"melonslicesWaste":melonslicesWaste10,"millingMaterialWater":millingMaterialWater10,"millingMaterialWaste":millingMaterialWaste10, "comminutionWater":comminutionWater10,"comminutionWaste":comminutionWaste10,"highMaterial1Water":0,"highMaterial1Waste":0,"highMaterial2Water":0,"highMaterial2Waste":0,"woodFiber":0,"antistrippingAgent":0};  
	saveDataAry.push(data10);
	/*AC-25*/
	var id11  = document.getElementById("IDI").value;
	var limestoneWater11  = hs(document.getElementById("watercontentIA").value);
	var melonslicesWater11  = hs(document.getElementById("watercontentIB").value);
	var comminutionWater11  = hs(document.getElementById("watercontentIC").value);
	var limestoneWaste11 = hs(document.getElementById("ashIA").value);
	var melonslicesWaste11 = hs(document.getElementById("ashIB").value);
	var comminutionWaste11 = hs(document.getElementById("ashIC").value);
	var data11={"id": id11, "site": selected, "month": searchdate, "materialtype":"AC-25", "limestoneWater":limestoneWater11,"limestoneWaste":limestoneWaste11,"melonslicesWater":melonslicesWater11,"melonslicesWaste":melonslicesWaste11,"millingMaterialWater":0,"millingMaterialWaste":0, "comminutionWater":comminutionWater11,"comminutionWaste":comminutionWaste11,"highMaterial1Water":0,"highMaterial1Waste":0,"highMaterial2Water":0,"highMaterial2Waste":0,"woodFiber":0,"antistrippingAgent":0};  
	saveDataAry.push(data11);
	/*35%***AC-25*/
	var id12  = document.getElementById("IDJ").value;
	var limestoneWater12  = hs(document.getElementById("watercontentJA").value);
	var melonslicesWater12  = hs(document.getElementById("watercontentJB").value);
	var comminutionWater12  = hs(document.getElementById("watercontentJC").value);
	var millingMaterialWater12  = hs(document.getElementById("watercontentJD").value);
	var limestoneWaste12 = hs(document.getElementById("ashJA").value);
	var melonslicesWaste12 = hs(document.getElementById("ashJB").value);
	var comminutionWaste12 = hs(document.getElementById("ashJC").value);
	var millingMaterialWaste12 = hs(document.getElementById("ashJD").value);
	var data12={"id": id12, "site": selected, "month": searchdate, "materialtype":"35%***AC-25", "limestoneWater":limestoneWater12,"limestoneWaste":limestoneWaste12,"melonslicesWater":melonslicesWater12,"melonslicesWaste":melonslicesWaste12,"millingMaterialWater":millingMaterialWater12,"millingMaterialWaste":millingMaterialWaste12, "comminutionWater":comminutionWater12,"comminutionWaste":comminutionWaste12,"highMaterial1Water":0,"highMaterial1Waste":0,"highMaterial2Water":0,"highMaterial2Waste":0,"woodFiber":0,"antistrippingAgent":0};  
	saveDataAry.push(data12);
	/*40%***AC-25*/
	var id13  = document.getElementById("IDM").value;
	var limestoneWater13  = hs(document.getElementById("watercontentMA").value);
	var melonslicesWater13  = hs(document.getElementById("watercontentMB").value);
	var comminutionWater13  = hs(document.getElementById("watercontentMC").value);
	var millingMaterialWater13  = hs(document.getElementById("watercontentMD").value);
	var limestoneWaste13 = hs(document.getElementById("ashMA").value);
	var melonslicesWaste13 = hs(document.getElementById("ashMB").value);
	var comminutionWaste13 = hs(document.getElementById("ashMC").value);
	var millingMaterialWaste13 = hs(document.getElementById("ashMD").value);
	var data13={"id": id13, "site": selected, "month": searchdate, "materialtype":"40%***AC-25", "limestoneWater":limestoneWater13,"limestoneWaste":limestoneWaste13,"melonslicesWater":melonslicesWater13,"melonslicesWaste":melonslicesWaste13,"millingMaterialWater":millingMaterialWater13,"millingMaterialWaste":millingMaterialWaste13, "comminutionWater":comminutionWater13,"comminutionWaste":comminutionWaste13,"highMaterial1Water":0,"highMaterial1Waste":0,"highMaterial2Water":0,"highMaterial2Waste":0,"woodFiber":0,"antistrippingAgent":0};  
	saveDataAry.push(data13);
	/*SBS-13(玄武岩)*/
	var id14  = document.getElementById("IDN").value;
	var limestoneWater14  = hs(document.getElementById("watercontentNA").value);
	var highMaterial2Water14  = hs(document.getElementById("watercontentNB").value);
	var highMaterial1Water14  = hs(document.getElementById("watercontentNC").value);
	var limestoneWaste14 = hs(document.getElementById("ashNA").value);
	var highMaterial2Waste14 = hs(document.getElementById("ashNB").value);
	var highMaterial1Waste14 = hs(document.getElementById("ashNC").value);
	var antistrippingAgent14 = hs(document.getElementById("agentNE").value);
	var data14={"id": id14, "site": selected, "month": searchdate, "materialtype":"SBS-13(玄武岩)", "limestoneWater":limestoneWater14,"limestoneWaste":limestoneWaste14,"melonslicesWater":0,"melonslicesWaste":0,"millingMaterialWater":0,"millingMaterialWaste":0, "comminutionWater":0,"comminutionWaste":0,"highMaterial1Water":highMaterial1Water14,"highMaterial1Waste":highMaterial1Waste14,"highMaterial2Water":highMaterial2Water14,"highMaterial2Waste":highMaterial2Waste14,"woodFiber":0,"antistrippingAgent":antistrippingAgent14};  
	saveDataAry.push(data14);
	/*AC-13(玄武岩)*/
	var id15  = document.getElementById("IDO").value;
	var limestoneWater15  = hs(document.getElementById("watercontentOA").value);
	var highMaterial2Water15  = hs(document.getElementById("watercontentOB").value);
	var highMaterial1Water15  = hs(document.getElementById("watercontentOC").value);
	var limestoneWaste15 = hs(document.getElementById("ashOA").value);
	var highMaterial2Waste15 = hs(document.getElementById("ashOB").value);
	var highMaterial1Waste15 = hs(document.getElementById("ashOC").value);
	var antistrippingAgent15 = hs(document.getElementById("agentOE").value);
	var data15={"id": id15, "site": selected, "month": searchdate, "materialtype":"AC-13(玄武岩)", "limestoneWater":limestoneWater15,"limestoneWaste":limestoneWaste15,"melonslicesWater":0,"melonslicesWaste":0,"millingMaterialWater":0,"millingMaterialWaste":0, "comminutionWater":0,"comminutionWaste":0,"highMaterial1Water":highMaterial1Water15,"highMaterial1Waste":highMaterial1Waste15,"highMaterial2Water":highMaterial2Water15,"highMaterial2Waste":highMaterial2Waste15,"woodFiber":0,"antistrippingAgent":antistrippingAgent15};  
	saveDataAry.push(data15);
	/*SMA-13(改性沥青油)*/
	var id16  = document.getElementById("IDP").value;
	var limestoneWater16  = hs(document.getElementById("watercontentPA").value);
	var highMaterial2Water16  = hs(document.getElementById("watercontentPB").value);
	var highMaterial1Water16  = hs(document.getElementById("watercontentPC").value);
	var limestoneWaste16 = hs(document.getElementById("ashPA").value);
	var highMaterial2Waste16 = hs(document.getElementById("ashPB").value);
	var highMaterial1Waste16 = hs(document.getElementById("ashPC").value);
	var woodFiber16 = hs(document.getElementById("woodPE").value);
	var antistrippingAgent16 = hs(document.getElementById("agentPF").value);
	var data16={"id": id16, "site": selected, "month": searchdate, "materialtype":"SMA-13(改性沥青油)", "limestoneWater":limestoneWater16,"limestoneWaste":limestoneWaste16,"melonslicesWater":0,"melonslicesWaste":0,"millingMaterialWater":0,"millingMaterialWaste":0, "comminutionWater":0,"comminutionWaste":0,"highMaterial1Water":highMaterial1Water16,"highMaterial1Waste":highMaterial1Waste16,"highMaterial2Water":highMaterial2Water16,"highMaterial2Waste":highMaterial2Waste16,"woodFiber":woodFiber16,"antistrippingAgent":antistrippingAgent16};  
	saveDataAry.push(data16);
	/*SMA-13(70#沥青油)*/
	var id17  = document.getElementById("IDQ").value;
	var limestoneWater17  = hs(document.getElementById("watercontentQA").value);
	var highMaterial2Water17  = hs(document.getElementById("watercontentQB").value);
	var highMaterial1Water17  = hs(document.getElementById("watercontentQC").value);
	var limestoneWaste17 = hs(document.getElementById("ashQA").value);
	var highMaterial2Waste17 = hs(document.getElementById("ashQB").value);
	var highMaterial1Waste17 = hs(document.getElementById("ashQC").value);
	var woodFiber17 = hs(document.getElementById("woodQD").value);
	var antistrippingAgent17 = hs(document.getElementById("agentQE").value);
	var data17={"id": id17, "site": selected, "month": searchdate, "materialtype":"SMA-13(70#沥青油)", "limestoneWater":limestoneWater17,"limestoneWaste":limestoneWaste17,"melonslicesWater":0,"melonslicesWaste":0,"millingMaterialWater":0,"millingMaterialWaste":0, "comminutionWater":0,"comminutionWaste":0,"highMaterial1Water":highMaterial1Water17,"highMaterial1Waste":highMaterial1Waste17,"highMaterial2Water":highMaterial2Water17,"highMaterial2Waste":highMaterial2Waste17,"woodFiber":woodFiber17,"antistrippingAgent":antistrippingAgent17};  
	saveDataAry.push(data17);
	/*SBS-13(石灰岩)*/
	var id18  = document.getElementById("IDR").value;
	var limestoneWater18  = hs(document.getElementById("watercontentRA").value);
	var melonslicesWater18  = hs(document.getElementById("watercontentRB").value);
	var limestoneWaste18 = hs(document.getElementById("ashRA").value);
	var melonslicesWaste18 = hs(document.getElementById("ashRB").value);
	var antistrippingAgent18 = hs(document.getElementById("agentRE").value);
	var data18={"id": id18, "site": selected, "month": searchdate, "materialtype":"SBS-13(石灰岩)", "limestoneWater":limestoneWater18,"limestoneWaste":limestoneWaste18,"melonslicesWater":melonslicesWater18,"melonslicesWaste":melonslicesWaste18,"millingMaterialWater":0,"millingMaterialWaste":0, "comminutionWater":0,"comminutionWaste":0,"highMaterial1Water":0,"highMaterial1Waste":0,"highMaterial2Water":0,"highMaterial2Waste":0,"woodFiber":0,"antistrippingAgent":antistrippingAgent18};  
	saveDataAry.push(data18);
	
	$.ajax({  
		type : "post",  
		url : baseURL +"sys/waterwaste/savewa",  
		dataType:"json",
		contentType:"application/json",
		data : JSON.stringify(saveDataAry),
		async : false,  
		success : function(data){
			alert(data.msg);
			loadtable();
		}
	});
}

function suma(obj,a,b,c,d,e,f,g,h,i,j,k,l,m) {
	/*suma(this,watercontentAA,watercontentAB,ashAA,ashAB,sumAA,sumAB,totalwatercontentA,totalashA,sumA,priceAA,priceAB,toaltalpriceA)*/
	e.value = (hs(a.value) + hs(c.value)+hs(m[0])).toFixed(2);
	f.value = (hs(b.value) + hs(d.value)+hs(m[1])).toFixed(2);
	g.value = (hs(a.value) + hs(b.value)).toFixed(2);
	h.value = (hs(c.value) + hs(d.value)).toFixed(2);
	i.value = (hs(e.value) + hs(f.value)+ hs(m[2]) + hs(m[3])+6.8+0.5).toFixed(2);
	j.value = ((e.value) * getulist[0]/1000).toFixed(2);
	k.value = ((f.value) * getulist[2]/1000).toFixed(2);
	l.value = (hs(j.value) + hs(k.value) + hs(m[2]*getulist[6]/1000)+ hs(getulist[9]*6.80/1000)+ 
	hs(getulist[10]*0.50/1000)+ hs(m[3]*getulist[8]/1000)).toFixed(2);
}

function sumc(obj,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q) {
	/*sumc(watercontentEA a,watercontentEB b,watercontentEC c,ashEA d,ashEB e,ashEC f,sumEA g,sumEB h,sumEC i,totalwatercontentE j,totalashE k,sumE l,priceEA m,priceEB n,priceEC o,toaltalpriceE p,getdatae q)*/
	g.value = (hs(a.value) + hs(d.value)+hs(q[0])).toFixed(2);
	h.value = (hs(b.value) + hs(e.value)+hs(q[1])).toFixed(2);
	i.value = (hs(c.value) + hs(f.value)+hs(q[2])).toFixed(2);
	j.value = (hs(a.value) + hs(b.value)+ hs(c.value)).toFixed(2);
	k.value = (hs(d.value) + hs(e.value)+ hs(f.value)).toFixed(2);
	l.value = (hs(g.value) + hs(h.value)+ hs(i.value)+ hs(q[3]) + hs(q[4])+6.8+0.5).toFixed(2);
	m.value = ((g.value) * getulist[0]/1000).toFixed(2);
	n.value = ((h.value) * getulist[2]/1000).toFixed(2);
	o.value = ((i.value) * getulist[3]/1000).toFixed(2);
	p.value = (hs(m.value) + hs(n.value) + hs(o.value)+ hs(q[3]*getulist[6]/1000)+ hs(getulist[9]*6.80/1000)+ 
	hs(getulist[10]*0.50/1000)+ hs(q[4]*getulist[8]/1000)).toFixed(2);
}

function sumb(obj,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q) {
	/*sumb(this,watercontentBA,watercontentBB,watercontentBC,ashBA,ashBB,ashBC,sumBA,sumBB,sumBC,totalwatercontentB,totalashB,sumB,priceBA,priceBB,priceBC,toaltalpriceB)*/
	g.value = (hs(a.value) + hs(d.value)+hs(q[0])).toFixed(2);
	h.value = (hs(b.value) + hs(e.value)+hs(q[1])).toFixed(2);
	i.value = (hs(c.value) + hs(f.value)+hs(q[2])).toFixed(2);
	j.value = (hs(a.value) + hs(b.value)+ hs(c.value)).toFixed(2);
	k.value = (hs(d.value) + hs(e.value)+ hs(f.value)).toFixed(2);
	l.value = (hs(g.value) + hs(h.value)+ hs(i.value)+ hs(q[3]) + hs(q[4])+6.8+0.5).toFixed(2);
	m.value = ((g.value) * getulist[0]/1000).toFixed(2);
	n.value = ((h.value) * getulist[2]/1000).toFixed(2);
	o.value = ((i.value) * getulist[7]/1000).toFixed(2);
	p.value = (hs(m.value) + hs(n.value) + hs(o.value)+ hs(q[3]*getulist[6]/1000)+ hs(getulist[9]*6.80/1000)+ 
	hs(getulist[10]*0.50/1000)+ hs(q[4]*getulist[8]/1000)).toFixed(2);
}

function sumd(obj,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u) {
	/*sumc(this,watercontentFA a,watercontentFB b,watercontentFC c,watercontentFD d,ashFA e,ashFB f,ashFC g,ashFD h,sumFA i,sumFB j,sumFC k,sumFD l,totalwatercontentF m,totalashF n,sumF o,priceFA p,priceFB q,priceFC r,priceFD s,toaltalpriceF t)*/
	i.value = (hs(a.value) + hs(e.value)+hs(u[0])).toFixed(2);
	j.value = (hs(b.value) + hs(f.value)+hs(u[1])).toFixed(2);
	k.value = (hs(c.value) + hs(g.value)+hs(u[2])).toFixed(2);
	l.value = (hs(d.value) + hs(h.value)+hs(u[3])).toFixed(2);
	m.value = (hs(a.value) + hs(b.value)+ hs(c.value)+ hs(d.value)+ hs(u[3])).toFixed(2);
	n.value = (hs(e.value) + hs(f.value)+ hs(g.value)+ hs(h.value)+ hs(u[3])).toFixed(2);
	o.value = (hs(i.value) + hs(j.value)+ hs(k.value)+ hs(l.value)+  hs(u[4]) + hs(u[5])+6.8+0.5).toFixed(2);
	p.value = ((i.value) * getulist[0]/1000).toFixed(2);
	q.value = ((j.value) * getulist[2]/1000).toFixed(2);
	r.value = ((k.value) * getulist[3]/1000).toFixed(2);
	s.value = ((l.value) * getulist[7]/1000).toFixed(2);
	t.value = (hs(p.value) + hs(q.value) + hs(r.value)+ hs(s.value)+ hs(u[4]*getulist[6]/1000)+ hs(getulist[9]*6.80/1000)+ 
	hs(getulist[10]*0.50/1000)+ hs(u[5]*getulist[8]/1000)).toFixed(2);
}


function sume(obj,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u) {
	/*sume(watercontentNA a,watercontentNB b,watercontentNC c,ashNA d,ashNB e,ashNC f,agentNE g,agent2NE h,sumNA i,sumNB j,sumNC k,totalwatercontentN l,totalashN m,sumN n,priceNA o,priceNB p,priceNC q,priceNE r,toaltalpriceN s ,totalN t)*/
	i.value = (hs(a.value) + hs(d.value)+ hs(u[0])).toFixed(2);
	j.value = (hs(b.value) + hs(e.value)+ hs(u[1])).toFixed(2);
	k.value = (hs(c.value) + hs(f.value)+ hs(u[2])).toFixed(2);
	h.value = (hs(g.value)).toFixed(2);
	l.value = (hs(a.value) + hs(b.value) + hs(c.value)).toFixed(2);
	m.value = (hs(d.value) + hs(e.value) + hs(f.value)).toFixed(2);
	n.value = (hs(i.value)+hs(j.value)+hs(k.value)+hs(h.vlaue)+hs(u[3])+hs(u[4])+6.8+0.5);
	o.value = ((i.value)*getulist[0]/1000).toFixed(2);
	p.value = ((j.value)*getulist[4]/1000).toFixed(2);
	q.value = ((k.value)*getulist[5]/1000).toFixed(2);
	r.value = ((h.value)*getulist[11]/1000).toFixed(2);
	s.value = (hs(o.value) + hs(p.value) + hs(q.value) + hs(r.value) + hs(getulist[9]*6.80/1000)+ 
			hs(getulist[10]*0.50/1000)+ hs(u[3]*getulist[13]/1000)+ hs(u[4]*getulist[8]/1000)).toFixed(2);
	t.value =  (parseFloat(hs(u[0]).toFixed(2))
			   	+parseFloat(hs(u[1]).toFixed(2))
			   	+parseFloat(hs(u[2]).toFixed(2))
			   	+parseFloat(hs(u[3]).toFixed(2))
			   	+parseFloat(hs(u[4]).toFixed(2))
			   	+parseFloat(hs(g.value).toFixed(2))+6.80+0.50).toFixed(2);
}

function sumf(obj,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u) {
	/*suma(watercontentOA a,watercontentOB b,watercontentOC c,ashOA d,ashOB e,ashOC f,agentOE g,agent2OE h,sumOA i,sumOB j,sumOC k,totalwatercontentO l,totalashO m,sumO n,priceOA o,priceOB p,priceOC q,priceOE r,toaltalpriceO s ,toaltalO t)*/
	i.value = (hs(a.value) + hs(d.value)+ hs(u[0])).toFixed(2);
	j.value = (hs(b.value) + hs(e.value)+ hs(u[1])).toFixed(2);
	k.value = (hs(c.value) + hs(f.value)+ hs(u[2])).toFixed(2);
	h.value = (hs(g.value)).toFixed(2);
	l.value = (hs(a.value) + hs(b.value) + hs(c.value)).toFixed(2);
	m.value = (hs(d.value) + hs(e.value) + hs(f.value)).toFixed(2);
	n.value = (hs(i.value)+hs(j.value)+hs(k.value)+hs(h.vlaue)+hs(u[3])+hs(u[4])+6.8+0.5);
	o.value = ((i.value)*getulist[0]/1000).toFixed(2);
	p.value = ((j.value)*getulist[4]/1000).toFixed(2);
	q.value = ((k.value)*getulist[5]/1000).toFixed(2);
	r.value = ((h.value)*getulist[11]/1000).toFixed(2);
	s.value = (hs(o.value) + hs(p.value) + hs(q.value) + hs(r.value) + hs(u[3]*getulist[6]/1000) + hs(getulist[9]*6.80/1000)+ 
			hs(getulist[10]*0.50/1000)+ hs(u[4]*getulist[8]/1000)).toFixed(2);
	t.value =  (parseFloat(hs(u[0]).toFixed(2))
			+parseFloat(hs(u[1]).toFixed(2))
			+parseFloat(hs(u[2]).toFixed(2))
			+parseFloat(hs(u[3]).toFixed(2))
			+parseFloat(hs(u[4]).toFixed(2))
			+6.80+0.50 
			+parseFloat(hs(g.value).toFixed(2))).toFixed(2);
}

/*SMA-13(70#沥青油)*/
function sumg(obj,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x) {
	/*suma(watercontentQA a,watercontentQB b,watercontentQC c,ashQA d,ashQB e,ashQC f,woodQD g,wood2QD h,agentQE i,agent2QE j,sumQA k,sumQB l,sumQC m,totalwatercontentQ n,totalashQ o,sumQ p,priceQA q,priceQB r,priceQC s,priceQD t,priceQE u,toaltalpriceQ v ,toaltalQ w)*/
	k.value = (hs(a.value) + hs(d.value)+ hs(x[0])).toFixed(2);
	l.value = (hs(b.value) + hs(e.value)+ hs(x[1])).toFixed(2);
	m.value = (hs(c.value) + hs(f.value)+ hs(x[2])).toFixed(2);
	h.value = (hs(g.value)).toFixed(2);
	j.value = (hs(i.value)).toFixed(2);
	n.value = (hs(a.value) + hs(b.value) + hs(c.value)).toFixed(2);
	o.value = (hs(d.value) + hs(e.value) + hs(f.value)).toFixed(2);
	p.value = (hs(k.value)+hs(l.value)+hs(m.value)+hs(h.vlaue)+hs(x[3])+hs(x[4])+hs(j.value)+6.8+0.5);
	q.value = ((k.value)*getulist[0]/1000).toFixed(2);
	r.value = ((l.value)*getulist[4]/1000).toFixed(2);
	s.value = ((m.value)*getulist[5]/1000).toFixed(2);
	t.value = ((h.value)*getulist[12]/1000).toFixed(2);
	u.value = ((j.value)*getulist[11]/1000).toFixed(2);
	v.value = (hs(q.value) + hs(r.value) + hs(s.value) + hs(t.value) + hs(u.value) + hs(getulist[9]*6.80/1000)+ 
			hs(getulist[10]*0.50/1000)+ hs(x[3]*getulist[6]/1000)+hs(x[4]*getulist[8]/1000)).toFixed(2);
	w.value = (parseFloat(x[0].toFixed(2))
			+parseFloat(hs(x[1]).toFixed(2))
			+parseFloat(hs(x[2]).toFixed(2))
			+parseFloat(hs(x[3]).toFixed(2))
			+parseFloat(hs(x[4]).toFixed(2))
			+6.80+0.50 
			+ parseFloat(hs(g.value).toFixed(2))
			+ parseFloat(hs(i.value).toFixed(2))).toFixed(2);
}

/*SBS-13(石灰岩)*/
function sumh(obj,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q) {
	/*sumh(watercontentIA a,watercontentIB b,ashIA c,ashIB d,agentIE e,agent2IE f,sumIA g,sumIB h,totalwatercontentI i,totalashI j,sumI k,priceIA l,priceIB m,priceIE n,toaltalpriceI o ,totalI p)*/
	g.value = (hs(a.value) + hs(c.value)+ hs(q[0])).toFixed(2);
	h.value = (hs(b.value) + hs(d.value)+ hs(q[1])).toFixed(2);
	f.value = (hs(e.value)).toFixed(2);
	i.value = (hs(a.value) + hs(b.value)).toFixed(2);
	j.value = (hs(c.value) + hs(d.value)).toFixed(2);
	k.value = (hs(g.value)+hs(h.value)+hs(f.vlaue)+hs(q[2])+hs(q[3])+6.8+0.5);
	l.value = ((g.value)*getulist[0]/1000).toFixed(2);
	m.value = ((h.value)*getulist[2]/1000).toFixed(2);
	n.value = ((f.value)*getulist[11]/1000).toFixed(2);
	o.value = (hs(l.value) + hs(m.value) + hs(n.value) + hs(getulist[9]*6.80/1000)+ 
			hs(getulist[10]*0.50/1000)+ hs(q[2]*getulist[13]/1000)+ hs(q[3]*getulist[8]/1000)).toFixed(2);
	p.value =  (parseFloat(hs(q[0]).toFixed(2))
			+parseFloat(hs(q[1]).toFixed(2))
			+parseFloat(hs(q[2]).toFixed(2))
			+parseFloat(hs(q[3]).toFixed(2))
			+6.80+0.50
			+parseFloat(hs(e.value).toFixed(2))).toFixed(2);
}


function sumi(obj,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x) {
	/*sumi(watercontentPA a,watercontentPB b,watercontentPC c,ashPA d,ashPB e,ashPC f,woodPE g,wood2PE h,agentPF i,agent2PF j,sumPA k,sumPB l,sumPC m,totalwatercontentP n,totalashP o,sumP p,pricePA q,pricePB r,pricePC s,pricePE t,pricePF u,toaltalpriceP v ,totalP w)*/
	k.value = (hs(a.value) + hs(d.value)+ hs(x[0])).toFixed(2);
	l.value = (hs(b.value) + hs(e.value)+ hs(x[1])).toFixed(2);
	m.value = (hs(c.value) + hs(f.value)+ hs(x[2])).toFixed(2);
	h.value = (hs(g.value)).toFixed(2);
	j.value = (hs(i.value)).toFixed(2);
	n.value = (hs(a.value) + hs(b.value) + hs(c.value)).toFixed(2);
	o.value = (hs(d.value) + hs(e.value) + hs(f.value)).toFixed(2);
	p.value = (hs(k.value)+hs(l.value)+hs(m.value)+hs(h.vlaue)+hs(x[3])+hs(x[4])+hs(j.value)+6.8+0.5);
	q.value = ((k.value)*getulist[0]/1000).toFixed(2);
	r.value = ((l.value)*getulist[4]/1000).toFixed(2);
	s.value = ((m.value)*getulist[5]/1000).toFixed(2);
	t.value = ((h.value)*getulist[12]/1000).toFixed(2);
	u.value = ((j.value)*getulist[11]/1000).toFixed(2);
	v.value = (hs(q.value) + hs(r.value) + hs(s.value) + hs(t.value) + hs(u.value) + hs(getulist[9]*6.80/1000)+ 
			hs(getulist[10]*0.50/1000)+ hs(x[3]*getulist[13]/1000)+ hs(x[4]*getulist[8]/1000)).toFixed(2);
	/*z.value = (parseFloat(getdata[0].toFixed(2))+parseFloat(getdata[1].toFixed(2))+parseFloat(getdata[2].toFixed(2))+parseFloat(getdata[3].toFixed(2))+6.80+0.50 + parseFloat((hs(g.value)).toFixed(2))+ parseFloat((hs(i.value))+ parseFloat((hs(k.value)).toFixed(2))).toFixed(2);*/
	w.value = (parseFloat(hs(x[0]).toFixed(2))
			+parseFloat(hs(x[1]).toFixed(2))
			+parseFloat(hs(x[2]).toFixed(2))
			+parseFloat(hs(x[3]).toFixed(2))
			+parseFloat(hs(x[4]).toFixed(2))
			+6.80+0.50
			+parseFloat(hs(g.value).toFixed(2))
			+parseFloat(hs(i.value).toFixed(2))).toFixed(2);
}
/*function suma(obj) {
	var watercontentAA  = document.getElementById("watercontentAA");
	var watercontentAB  = document.getElementById("watercontentAB");
	var ashAA = document.getElementById("ashAA");
	var ashAB = document.getElementById("ashAB");
	var sumAA = document.getElementById("sumAA");
	var sumAB = document.getElementById("sumAB");
	var totalwatercontentA = document.getElementById("totalwatercontentA");
	var totalashA = document.getElementById("totalashA");
	var sumA = document.getElementById("sumA");
	var priceAA = document.getElementById("priceAA");
	var priceAB = document.getElementById("priceAB");
	var toaltalpriceA = document.getElementById("toaltalpriceA");
	sumAA.value = (hs(watercontentAA.value) + hs(ashAA.value)+hs(getdata[0])).toFixed(2);
	sumAB.value = (hs(watercontentAB.value) + hs(ashAB.value)+hs(getdata[1])).toFixed(2);
	totalwatercontentA.value = (hs(watercontentAA.value) + hs(watercontentAB.value)).toFixed(2);
	totalashA.value = (hs(ashAA.value) + hs(ashAB.value)).toFixed(2);
	sumA.value = (hs(sumAA.value) + hs(sumAB.value)+ hs(getdata[2]) + hs(getdata[3])+6.8+0.5).toFixed(2);
	priceAA.value = ((sumAA.value) * getulist[0]/1000).toFixed(2);
	priceAB.value = ((sumAB.value) * getulist[2]/1000).toFixed(2);
	toaltalpriceA.value = (hs(priceAA.value) + hs(priceAB.value) + hs(getdata[2]*getulist[6]/1000)+ hs(getulist[9]*6.80/1000)+ 
	hs(getulist[10]*0.50/1000)+ hs(getdata[3]*getulist[8]/1000)).toFixed(2);
}*/

/*function sumb(obj) {
	var watercontentBA  = document.getElementById("watercontentBA");
	var watercontentBB  = document.getElementById("watercontentBB");
	var watercontentBC  = document.getElementById("watercontentBC");
	var ashBA = document.getElementById("ashBA");
	var ashBB = document.getElementById("ashBB");
	var ashBC = document.getElementById("ashBC");
	var sumBA = document.getElementById("sumBA");
	var sumBB = document.getElementById("sumBB");
	var sumBC = document.getElementById("sumBC");
	var totalwatercontentB = document.getElementById("totalwatercontentB");
	var totalashB = document.getElementById("totalashB");
	var sumB = document.getElementById("sumB");
	var priceBA = document.getElementById("priceBA");
	var priceBB = document.getElementById("priceBB");
	var priceBC = document.getElementById("priceBC");
	var toaltalpriceB = document.getElementById("toaltalpriceB");
	sumBA.value = (hs(watercontentBA.value) + hs(ashBA.value)+hs(getdata[0])).toFixed(2);
	sumBB.value = (hs(watercontentBB.value) + hs(ashBB.value)+hs(getdata[1])).toFixed(2);
	sumBC.value = (hs(watercontentBC.value) + hs(ashBC.value)+hs(getdata[2])).toFixed(2);
	totalwatercontentB.value = (hs(watercontentBA.value) + hs(watercontentBB.value)+ hs(watercontentBC.value)).toFixed(2);
	totalashB.value = (hs(ashBA.value) + hs(ashBB.value)+ hs(ashBC.value)).toFixed(2);
	sumB.value = (hs(sumBA.value) + hs(sumBB.value)+ hs(sumBC.value)+ hs(getdata[2]) + hs(getdata[3])+6.8+0.5).toFixed(2);
	priceBA.value = ((sumBA.value) * getulist[0]/1000).toFixed(2);
	priceBB.value = ((sumBB.value) * getulist[2]/1000).toFixed(2);
	priceBC.value = ((sumBC.value) * getulist[2]/1000).toFixed(2);
	toaltalpriceB.value = (hs(priceBA.value) + hs(priceBB.value) + hs(priceBC.value)+ hs(getdata[2]*getulist[6]/1000)+ hs(getulist[9]*6.80/1000)+ 
	hs(getulist[10]*0.50/1000)+ hs(getdata[3]*getulist[8]/1000)).toFixed(2);
}*/

function hs(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
        return 0;
    }
    return f;
}
/*AC-10*/
function queryLastMonthA(searchdate,selected){
	/*var searchdate = $("#searchdate").val();
	var selected = $("#selected").val();*/
	/*var selectedtext = $("#selected").text();
	alert(selectedtext);*/
	var myselect=document.getElementById("selected");
	var index=myselect.selectedIndex;
	var selectedtext = myselect.options[index].text
	var mixturetype="AC-10";
	$.ajax({  
		type : "post",  
		url : baseURL +"sys/materialsbill/totalLastMonthA",  
		data : {
			searchdate : searchdate,
			selected : selected,
			mixturetype : mixturetype
		},  
		async : false,  
		success : function(data){
			getdataa = data.componetQA;
			var total = (parseFloat(getdataa[0].toFixed(2))+parseFloat(getdataa[1].toFixed(2))+parseFloat(getdataa[2].toFixed(2))+parseFloat(getdataa[3].toFixed(2))+6.80+0.50).toFixed(2);
			/*var totalprice =  (parseFloat(getdata[0].toFixed(2)*getulist[0]/1000)
							+ parseFloat(getdata[1].toFixed(2)*getulist[2]/1000)
							+ parseFloat(getdata[2].toFixed(2)*getulist[6]/1000)
							+ parseFloat(getulist[9]*6.80/1000)
							+ parseFloat(getulist[10]*0.50/1000)
							+ parseFloat(getdata[3]*getulist[8]/1000)).toFixed(2);*/
			var str= '';
			str += "<input type='text' id='IDA' style='display:none' /><form><table class='gridtable' >"+"<tr><th>"+"AC-10"+"</th><th>"+"原始用量按‰比例"+"</th><th>"+"含水率按‰比例"
			+"</th><th>"+"废灰按‰比例"+"</th><th>"+"实际用量按‰比例"+"</th><th>"+"不含税单价"+"</th><th>"+"不含税金额/元"+"</th></tr>";
			str += '<tr>';
			var tds1 = 	 '<td>' + "石粉" + '</td>'
		 			  	+'<td>' + getdataa[0].toFixed(2) + '</td>'
		 			  	+'<td>' + "<input type='text' id='watercontentAA' onkeyup='suma(this,watercontentAA,watercontentAB,ashAA,ashAB,sumAA,sumAB,totalwatercontentA,totalashA,sumA,priceAA,priceAB,toaltalpriceA,getdataa)'; style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
		 			  	+'<td>' + "<input type='text' id='ashAA' onkeyup='suma(this,watercontentAA,watercontentAB,ashAA,ashAB,sumAA,sumAB,totalwatercontentA,totalashA,sumA,priceAA,priceAB,toaltalpriceA,getdataa);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
		 			  	+'<td>' + "<input type='text' id='sumAA' style='border-width:0;text-align:center;'>" + '</td>'
	     				+'<td>' + getulist[0] + '</td>'                                                     
	     				+'<td>' + /*(getdata[0].toFixed(2)*getulist[0]/1000).toFixed(2)*/"<input type='text' id='priceAA' style='border-width:0;text-align:center;'>" + '</td>'
			str += tds1;
	     	str += '</tr>';
	     	str += '<tr>';
	     	var tds2 =   '<td>' + "瓜子片" + '</td>'
		 				+'<td>' + getdataa[1].toFixed(2) + '</td>'
		 				+'<td>' + "<input type='text' id='watercontentAB' onkeyup='suma(this,watercontentAA,watercontentAB,ashAA,ashAB,sumAA,sumAB,totalwatercontentA,totalashA,sumA,priceAA,priceAB,toaltalpriceA,getdataa);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
		 			  	+'<td>' + "<input type='text' id='ashAB' onkeyup='suma(this,watercontentAA,watercontentAB,ashAA,ashAB,sumAA,sumAB,totalwatercontentA,totalashA,sumA,priceAA,priceAB,toaltalpriceA,getdataa);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
		 			  	+'<td>' + "<input type='text' id='sumAB' style='border-width:0;text-align:center;'>" + '</td>'
	     				+'<td>' + getulist[2] + '</td>'
	     				+'<td>' + /*(getdata[1].toFixed(2)*getulist[2]/1000).toFixed(2)*/"<input type='text' id='priceAB' style='border-width:0;text-align:center;'>" + '</td>'
			str += tds2;
			str += '</tr>';
			str += '<tr>';
			var tds3 = 	 '<td>' + "70#沥青油" + '</td>'
		 			  	+'<td>' + getdataa[2].toFixed(2) + '</td>'
		 				+'<td>' + "" + '</td>'
		 			  	+'<td>' + "" + '</td>'
		 			  	+'<td>' + getdataa[2].toFixed(2) + '</td>'
	     				+'<td>' + getulist[6] + '</td>'
	     				+'<td>' + (getdataa[2].toFixed(2)*getulist[6]/1000).toFixed(2) + '</td>'
			str += tds3;
	     	str += '</tr>';
	     	str += '<tr>';
			var tds4 = 	 '<td>' + "乙烯焦油" + '</td>'
		 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
		 				+'<td>' + "" + '</td>'
		 			  	+'<td>' + "" + '</td>'
		 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
	     				+'<td>' + getulist[9] + '</td>'
	     				+'<td>' + (getulist[9]*6.80/1000).toFixed(2) + '</td>'
			str += tds4;
	     	str += '</tr>';
	     	str += '<tr>';
			var tds5 = 	 '<td>' + "燃料油" + '</td>'
		 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
		 				+'<td>' + "" + '</td>'
		 			  	+'<td>' + "" + '</td>'
		 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
	     				+'<td>' + getulist[10] + '</td>'
	     				+'<td>' + (getulist[10]*0.50/1000).toFixed(2) + '</td>'
			str += tds5;
	     	str += '</tr>';
	     	str += '<tr>';
			var tds6 = 	 '<td>' + "矿粉" + '</td>'
		 			  	+'<td>' + getdataa[3].toFixed(2) + '</td>'
		 				+'<td>' + "" + '</td>'
		 			  	+'<td>' + "" + '</td>'
		 			  	+'<td>' + getdataa[3].toFixed(2) + '</td>'
	     				+'<td>' + getulist[8] + '</td>'
	     				+'<td>' + (getdataa[3]*getulist[8]/1000).toFixed(2) + '</td>'
			str += tds6;
	     	str += '</tr>';
	     	str += '<tr>';
			var tds7 = 	 '<td>' + "合计" + '</td>'
		 			  	+'<td>' + total + '</td>'
		 				+'<td>' + "<input type='text' id='totalwatercontentA' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
		 			  	+'<td>' + "<input type='text' id='totalashA' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
		 			  	+'<td>' + "<input type='text' id='sumA' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
	     				+'<td>' + ""/*"<input type='text' id='searchdate' style='border-width:0;text-align:center;' placeholder='请输入'>"*/ + '</td>'
	     				+'<td>' + /*totalprice*/"<input type='text' id='toaltalpriceA' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
			str += tds7;
	     	str += '</tr>';
			str += '</table></form>';
			$('#divIdA').html(str);
			loaddate(selected,searchdate,selectedtext);
		}
	});
	//查询各类型含水率和废灰并赋值
	$.ajax({  
		type : "post",  
		url : baseURL +"sys/waterwaste/queryww",  
		data :{
			searchdate : searchdate,
			selected : selected,
			mixturetype : mixturetype
		},  
		async : false,  
		success : function(data){
			 var wwe = data.wwe;
			 if(wwe != null){
				document.getElementById("IDA").value = wwe.id;
				document.getElementById("watercontentAA").value = wwe.limestoneWater;
				document.getElementById("watercontentAB").value = wwe.melonslicesWater;
				document.getElementById("ashAA").value = wwe.limestoneWaste;
				document.getElementById("ashAB").value = wwe.melonslicesWaste;
			 }
			 suma(this,watercontentAA,watercontentAB,ashAA,ashAB,sumAA,sumAB,totalwatercontentA,totalashA,sumA,priceAA,priceAB,toaltalpriceA,getdataa);
		}
	});
}

/*30%***AC-10*/
function queryLastMonthB(searchdate,selected){
			var mixturetype="30%***AC-10";
			$.ajax({  
				type : "post",  
				url : baseURL +"sys/materialsbill/totalLastMonthB",  
				data : {
					searchdate : searchdate,
					selected : selected,
					mixturetype : mixturetype
				},  
				async : false,  
				success : function(data){
					getdatab = data.componetQB;
					var total = (parseFloat(getdatab[0].toFixed(2))+parseFloat(getdatab[1].toFixed(2))+parseFloat(getdatab[2].toFixed(2))+parseFloat(getdatab[3].toFixed(2))+parseFloat(getdatab[4].toFixed(2))+6.80+0.50).toFixed(2);
					/*var totalprice =  (parseFloat(getdata[0].toFixed(2)*getulist[0]/1000)
									+ parseFloat(getdata[1].toFixed(2)*getulist[2]/1000)
									+ parseFloat(getdata[2].toFixed(2)*getulist[7]/1000)
									+ parseFloat(getdata[3].toFixed(2)*getulist[6]/1000)
									+ parseFloat(getulist[9]*6.80/1000)
									+ parseFloat(getulist[10]*0.50/1000)
									+ parseFloat(getdata[4].toFixed(2)*getulist[8]/1000)).toFixed(2);*/
					var str= '';
					str += "<input type='text' id='IDB' style='display:none' /><form><table class='gridtable' >"+"<tr><th>"+"30%***AC-10"+"</th><th>"+"原始用量按‰比例"+"</th><th>"+"含水率按‰比例"
					+"</th><th>"+"废灰按‰比例"+"</th><th>"+"实际用量按‰比例"+"</th><th>"+"不含税单价"+"</th><th>"+"不含税金额/元"+"</th></tr>";
					str += '<tr>';
					var tds1 = 	'<td>' + "石粉" + '</td>'
					 			+'<td>' + getdatab[0].toFixed(2) + '</td>'
					 			+'<td>' + "<input type='text'  id='watercontentBA' onkeyup='sumb(this,watercontentBA,watercontentBB,watercontentBC,ashBA,ashBB,ashBC,sumBA,sumBB,sumBC,totalwatercontentB,totalashB,sumB,priceBA,priceBB,priceBC,toaltalpriceB,getdatab);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
				 			  	+'<td>' + "<input type='text'  id='ashBA' onkeyup='sumb(this,watercontentBA,watercontentBB,watercontentBC,ashBA,ashBB,ashBC,sumBA,sumBB,sumBC,totalwatercontentB,totalashB,sumB,priceBA,priceBB,priceBC,toaltalpriceB,getdatab);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
				 			  	+'<td>' + "<input type='text'  id='sumBA' style='border-width:0;text-align:center;'>" + '</td>'
				 			  	+'<td>' + getulist[0] + '</td>' 
				 			  	+'<td>' + "<input type='text'  id='priceBA' style='border-width:0;text-align:center;'>" + '</td>'
				    str += tds1;
				    str += '</tr>';
				    str += '<tr>';
				    var tds2 = '<td>' + "瓜子片" + '</td>'
					 			+'<td>' + getdatab[1].toFixed(2) + '</td>'
					 			+'<td>' + "<input type='text'  id='watercontentBB' onkeyup='sumb(this,watercontentBA,watercontentBB,watercontentBC,ashBA,ashBB,ashBC,sumBA,sumBB,sumBC,totalwatercontentB,totalashB,sumB,priceBA,priceBB,priceBC,toaltalpriceB,getdatab);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
				 			  	+'<td>' + "<input type='text'  id='ashBB' onkeyup='sumb(this,watercontentBA,watercontentBB,watercontentBC,ashBA,ashBB,ashBC,sumBA,sumBB,sumBC,totalwatercontentB,totalashB,sumB,priceBA,priceBB,priceBC,toaltalpriceB,getdatab);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
				 			  	+'<td>' + "<input type='text'  id='sumBB' style='border-width:0;text-align:center;'>" + '</td>'
				 			  	+'<td>' + getulist[2] + '</td>'
				 			  	+'<td>' + "<input type='text'  id='priceBB' style='border-width:0;text-align:center;'>" + '</td>'
				    str += tds2;
				    str += '</tr>';
					str += '<tr>';
				    var tds3 = '<td>' + "废旧沥青混凝土" + '</td>'
					 			+'<td>' + getdatab[2].toFixed(2) + '</td>'
					 			+'<td>' + "<input type='text'  id='watercontentBC' onkeyup='sumb(this,watercontentBA,watercontentBB,watercontentBC,ashBA,ashBB,ashBC,sumBA,sumBB,sumBC,totalwatercontentB,totalashB,sumB,priceBA,priceBB,priceBC,toaltalpriceB,getdatab);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
				 			  	+'<td>' + "<input type='text'  id='ashBC' onkeyup='sumb(this,watercontentBA,watercontentBB,watercontentBC,ashBA,ashBB,ashBC,sumBA,sumBB,sumBC,totalwatercontentB,totalashB,sumB,priceBA,priceBB,priceBC,toaltalpriceB,getdatab);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
				 			  	+'<td>' + "<input type='text'  id='sumBC' style='border-width:0;text-align:center;'>" + '</td>'
				 			  	+'<td>' + getulist[7] + '</td>'
				 			  	+'<td>' + "<input type='text'  id='priceBC' style='border-width:0;text-align:center;'>" + '</td>'
				    str += tds3;
					str += '</tr>';
					str += '<tr>';
				    var tds4 = '<td>' + "70#沥青油" + '</td>'
					 			+'<td>' + getdatab[3].toFixed(2) + '</td>'
					 			+'<td>' + "" + '</td>'
				 			  	+'<td>' + "" + '</td>'
				 			  	+'<td>' + getdatab[3].toFixed(2) + '</td>'
					 			+'<td>' + getulist[6] + '</td>'
					 			+'<td>' + (getdatab[3].toFixed(2)*getulist[6]/1000).toFixed(2) + '</td>'
				    str += tds4;
				    str += '</tr>';
				    str += '<tr>';
				    var tds5 = '<td>' + "乙烯焦油" + '</td>'
					 			+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
					 			+'<td>' + "" + '</td>'
				 			  	+'<td>' + "" + '</td>'
				 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
					 			+'<td>' + getulist[9] + '</td>'
					 			+'<td>' + (getulist[9]*6.80/1000).toFixed(2) + '</td>'
				    str += tds5;
				    str += '</tr>';
				    str += '<tr>';
				    var tds6 = '<td>' + "燃料油" + '</td>'
					 			+"<td style='background-color:#dedede'>" + "0.5" + '</td>'
					 			+'<td>' + "" + '</td>'
					 			+'<td>' + "" + '</td>'
					 			+"<td style='background-color:#dedede'>" + "0.5" + '</td>'
					 			+'<td>' + getulist[10] + '</td>'
					 			+'<td>' + (getulist[10]*0.5/1000).toFixed(2) + '</td>'
					str += tds6;
					str += '</tr>';
					str += '<tr>';
				    var tds7 = '<td>' + "矿粉" + '</td>'
					 			+'<td>' + getdatab[4].toFixed(2) + '</td>'
					 			+'<td>' + "" + '</td>'
				 			  	+'<td>' + "" + '</td>'
				 			  	+'<td>' + getdatab[4].toFixed(2) + '</td>'
					 			+'<td>' + getulist[8] + '</td>'
					 			+'<td>' + (getdatab[4].toFixed(2)*getulist[8]/1000).toFixed(2) + '</td>'
					str += tds7;
					str += '</tr>';
					str += '<tr>';
				    var tds8 = '<td>' + "合计" + '</td>'
					 			+'<td>' + total + '</td>'
					 			+'<td>' + "<input type='text'  id='totalwatercontentB' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
				 			  	+'<td>' + "<input type='text'  id='totalashB' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
				 			  	+'<td>' + "<input type='text'  id='sumB' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			+'<td>' + "" + '</td>'
					 			+'<td>' + /*totalprice*/"<input type='text'  id='toaltalpriceB' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					str += tds8;
					str += '</tr>';
				    str += '</table></form>';
				    $('#divIdB').html(str);
						}
					});
			//查询各类型含水率和废灰并赋值
			$.ajax({  
				type : "post",  
				url : baseURL +"sys/waterwaste/queryww",  
				data :{
					searchdate : searchdate,
					selected : selected,
					mixturetype : mixturetype
				},  
				async : false,  
				success : function(data){
					 var wwe = data.wwe;
					 if(wwe != null){
						document.getElementById("IDB").value = wwe.id;
						document.getElementById("watercontentBA").value = wwe.limestoneWater;
						document.getElementById("watercontentBB").value = wwe.limestoneWater;
						document.getElementById("watercontentBC").value = wwe.millingMaterialWater;
						document.getElementById("ashBA").value = wwe.limestoneWaste;
						document.getElementById("ashBB").value = wwe.limestoneWaste;
						document.getElementById("ashBC").value = wwe.millingMaterialWaste;
					 }
					 sumb(this,watercontentBA,watercontentBB,watercontentBC,ashBA,ashBB,ashBC,sumBA,sumBB,sumBC,totalwatercontentB,totalashB,sumB,priceBA,priceBB,priceBC,toaltalpriceB,getdatab);
				}
			});
}

/*AC-13*/
function queryLastMonthC(searchdate,selected){
			var mixturetype="AC-13";
			$.ajax({  
				type : "post",  
				url : baseURL +"sys/materialsbill/totalLastMonthA",  
				data : {
					searchdate : searchdate,
					selected : selected,
					mixturetype : mixturetype
				},  
				async : false,  
				success : function(data){
					getdatac = data.componetQA;
					var total = (parseFloat(getdatac[0].toFixed(2))+parseFloat(getdatac[1].toFixed(2))+parseFloat(getdatac[2].toFixed(2))+parseFloat(getdatac[3].toFixed(2))+6.80+0.50).toFixed(2);
					/*var totalprice =  (parseFloat(getdata[0].toFixed(2)*getulist[0]/1000)
									+ parseFloat(getdata[1].toFixed(2)*getulist[2]/1000)
									+ parseFloat(getdata[2].toFixed(2)*getulist[6]/1000)
									+ parseFloat(getulist[9]*6.80/1000)
									+ parseFloat(getulist[10]*0.50/1000)
									+ parseFloat(getdata[3]*getulist[8]/1000)).toFixed(2);*/
					var str= '';
					str += "<input type='text' id='IDC' style='display:none' /><form><table class='gridtable' >"+"<tr><th>"+"AC-13"+"</th><th>"+"原始用量按‰比例"+"</th><th>"+"含水率按‰比例"
					+"</th><th>"+"废灰按‰比例"+"</th><th>"+"实际用量按‰比例"+"</th><th>"+"不含税单价"+"</th><th>"+"不含税金额/元"+"</th></tr>";
					str += '<tr>';
					var tds1 = 	 '<td>' + "石粉" + '</td>'
	 			  	+'<td >' + getdatac[0].toFixed(2) + '</td>'
	 			  	+'<td>' + "<input type='text' id='watercontentCA' onkeyup='suma(this,watercontentCA,watercontentCB,ashCA,ashCB,sumCA,sumCB,totalwatercontentC,totalashC,sumC,priceCA,priceCB,toaltalpriceC,getdatac);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
	 			  	+'<td>' + "<input type='text' id='ashCA' onkeyup='suma(this,watercontentCA,watercontentCB,ashCA,ashCB,sumCA,sumCB,totalwatercontentC,totalashC,sumC,priceCA,priceCB,toaltalpriceC,getdatac);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
	 			  	+'<td>' + "<input type='text' id='sumCA' style='border-width:0;text-align:center;'>" + '</td>'
     				+'<td>' + getulist[0] + '</td>'                                                     
     				+'<td>' + /*(getdata[0].toFixed(2)*getulist[0]/1000).toFixed(2)*/"<input type='text' id='priceCA' style='border-width:0;text-align:center;'>" + '</td>'
					str += tds1;
			     	str += '</tr>';
			     	str += '<tr>';
			     	var tds2 =   '<td>' + "瓜子片" + '</td>'
				 				+'<td>' + getdatac[1].toFixed(2) + '</td>'
				 				+'<td>' + "<input type='text' id='watercontentCB' onkeyup='suma(this,watercontentCA,watercontentCB,ashCA,ashCB,sumCA,sumCB,totalwatercontentC,totalashC,sumC,priceCA,priceCB,toaltalpriceC,getdatac);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
				 			  	+'<td>' + "<input type='text' id='ashCB' onkeyup='suma(this,watercontentCA,watercontentCB,ashCA,ashCB,sumCA,sumCB,totalwatercontentC,totalashC,sumC,priceCA,priceCB,toaltalpriceC,getdatac);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
				 			  	+'<td>' + "<input type='text' id='sumCB' style='border-width:0;text-align:center;'>" + '</td>'
			     				+'<td>' + getulist[2] + '</td>'
			     				+'<td>' + /*(getdata[1].toFixed(2)*getulist[2]/1000).toFixed(2)*/"<input type='text' id='priceCB' style='border-width:0;text-align:center;'>" + '</td>'
					str += tds2;
					str += '</tr>';
					str += '<tr>';
					var tds3 = 	 '<td>' + "70#沥青油" + '</td>'
				 			  	+'<td>' + getdatac[2].toFixed(2) + '</td>'
				 				+'<td>' + "" + '</td>'
				 			  	+'<td>' + "" + '</td>'
				 			  	+'<td>' + getdatac[2].toFixed(2) + '</td>'
			     				+'<td>' + getulist[6] + '</td>'
			     				+'<td>' + (getdatac[2].toFixed(2)*getulist[6]/1000).toFixed(2) + '</td>'
					str += tds3;
			     	str += '</tr>';
			     	str += '<tr>';
					var tds4 = 	 '<td>' + "乙烯焦油" + '</td>'
				 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
				 				+'<td>' + "" + '</td>'
				 			  	+'<td>' + "" + '</td>'
				 			  	+'<td>' + "6.80" + '</td>'
			     				+'<td>' + getulist[9] + '</td>'
			     				+'<td>' + (getulist[9]*6.80/1000).toFixed(2) + '</td>'
					str += tds4;
			     	str += '</tr>';
			     	str += '<tr>';
					var tds5 = 	 '<td>' + "燃料油" + '</td>'
				 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
				 				+'<td>' + "" + '</td>'
				 			  	+'<td>' + "" + '</td>'
				 			  	+'<td>' + "0.50" + '</td>'
			     				+'<td>' + getulist[10] + '</td>'
			     				+'<td>' + (getulist[10]*0.50/1000).toFixed(2) + '</td>'
					str += tds5;
			     	str += '</tr>';
			     	str += '<tr>';
					var tds6 = 	 '<td>' + "矿粉" + '</td>'
				 			  	+'<td>' + getdatac[3].toFixed(2) + '</td>'
				 				+'<td>' + "" + '</td>'
				 			  	+'<td>' + "" + '</td>'
				 			  	+'<td>' + getdatac[3].toFixed(2) + '</td>'
			     				+'<td>' + getulist[8] + '</td>'
			     				+'<td>' + (getdatac[3]*getulist[8]/1000).toFixed(2) + '</td>'
					str += tds6;
			     	str += '</tr>';
			     	str += '<tr>';
					var tds7 = 	 '<td>' + "合计" + '</td>'
				 			  	+'<td>' + total + '</td>'
				 				+'<td>' + "<input type='text' id='totalwatercontentC' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
				 			  	+'<td>' + "<input type='text' id='totalashC' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
				 			  	+'<td>' + "<input type='text' id='sumC' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
			     				+'<td>' + ""/*"<input type='text' id='searchdate' style='border-width:0;text-align:center;' placeholder='请输入'>"*/ + '</td>'
			     				+'<td>' + /*totalprice*/"<input type='text' id='toaltalpriceC' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					str += tds7;
			     	str += '</tr>';
					str += '</table></form>';
					$('#divIdC').html(str);
				}
			});
			//查询各类型含水率和废灰并赋值
			$.ajax({  
				type : "post",  
				url : baseURL +"sys/waterwaste/queryww",  
				data :{
					searchdate : searchdate,
					selected : selected,
					mixturetype : mixturetype
				},  
				async : false,  
				success : function(data){
					 var wwe = data.wwe;
					 if(wwe != null){
						document.getElementById("IDC").value = wwe.id;
						document.getElementById("watercontentCA").value = wwe.limestoneWater;
						document.getElementById("watercontentCB").value = wwe.melonslicesWater;
						document.getElementById("ashCA").value = wwe.limestoneWaste;
						document.getElementById("ashCB").value = wwe.melonslicesWaste;
					 }
					 suma(this,watercontentCA,watercontentCB,ashCA,ashCB,sumCA,sumCB,totalwatercontentC,totalashC,sumC,priceCA,priceCB,toaltalpriceC,getdatac);
				}
			});
}

/*30%***AC-13*/
function queryLastMonthD(searchdate,selected){
			var mixturetype="30%***AC-13";
			$.ajax({  
				type : "post",  
				url : baseURL +"sys/materialsbill/totalLastMonthB",  
				data : {
					searchdate : searchdate,
					selected : selected,
					mixturetype : mixturetype
				},  
				async : false,  
				success : function(data){
					getdatad = data.componetQB;
					var total = (parseFloat(getdatad[0].toFixed(2))+parseFloat(getdatad[1].toFixed(2))+parseFloat(getdatad[2].toFixed(2))+parseFloat(getdatad[3].toFixed(2))+parseFloat(getdatad[4].toFixed(2))+6.80+0.50).toFixed(2);
					/*var totalprice =  (parseFloat(getdata[0].toFixed(2)*getulist[0]/1000)
									+ parseFloat(getdata[1].toFixed(2)*getulist[2]/1000)
									+ parseFloat(getdata[2].toFixed(2)*getulist[7]/1000)
									+ parseFloat(getdata[3].toFixed(2)*getulist[6]/1000)
									+ parseFloat(getulist[9]*6.80/1000)
									+ parseFloat(getulist[10]*0.50/1000)
									+ parseFloat(getdata[4].toFixed(2)*getulist[8]/1000)).toFixed(2);*/
					var str= '';
					str += "<input type='text' id='IDD' style='display:none' /><form><table class='gridtable' >"+"<tr><th>"+"30%***AC-13"+"</th><th>"+"原始用量按‰比例"+"</th><th>"+"含水率按‰比例"
					+"</th><th>"+"废灰按‰比例"+"</th><th>"+"实际用量按‰比例"+"</th><th>"+"不含税单价"+"</th><th>"+"不含税金额/元"+"</th></tr>";
					str += '<tr>';
					var tds1 = 	'<td>' + "石粉" + '</td>'
					 			+'<td>' + getdatad[0].toFixed(2) + '</td>'
					 			+'<td>' + "<input type='text' id='watercontentDA' onkeyup='sumb(this,watercontentDA,watercontentDB,watercontentDC,ashDA,ashDB,ashDC,sumDA,sumDB,sumDC,totalwatercontentD,totalashD,sumD,priceDA,priceDB,priceDC,toaltalpriceD,getdatad);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
				 			  	+'<td>' + "<input type='text' id='ashDA' onkeyup='sumb(this,watercontentDA,watercontentDB,watercontentDC,ashDA,ashDB,ashDC,sumDA,sumDB,sumDC,totalwatercontentD,totalashD,sumD,priceDA,priceDB,priceDC,toaltalpriceD,getdatad);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
				 			  	+'<td>' + "<input type='text' id='sumDA' style='border-width:0;text-align:center;'>" + '</td>'
				 			  	+'<td>' + getulist[0] + '</td>' 
				 			  	+'<td>' + "<input type='text' id='priceDA' style='border-width:0;text-align:center;'>" + '</td>'
				    str += tds1;
				    str += '</tr>';
				    str += '<tr>';
				    var tds2 = '<td>' + "瓜子片" + '</td>'
					 			+'<td>' + getdatad[1].toFixed(2) + '</td>'
					 			+'<td>' + "<input type='text' id='watercontentDB' onkeyup='sumb(this,watercontentDA,watercontentDB,watercontentDC,ashDA,ashDB,ashDC,sumDA,sumDB,sumDC,totalwatercontentD,totalashD,sumD,priceDA,priceDB,priceDC,toaltalpriceD,getdatad);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
				 			  	+'<td>' + "<input type='text' id='ashDB' onkeyup='sumb(this,watercontentDA,watercontentDB,watercontentDC,ashDA,ashDB,ashDC,sumDA,sumDB,sumDC,totalwatercontentD,totalashD,sumD,priceDA,priceDB,priceDC,toaltalpriceD,getdatad);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
				 			  	+'<td>' + "<input type='text' id='sumDB' style='border-width:0;text-align:center;'>" + '</td>'
				 			  	+'<td>' + getulist[2] + '</td>'
				 			  	+'<td>' + "<input type='text' id='priceDB' style='border-width:0;text-align:center;'>" + '</td>'
				    str += tds2;
				    str += '</tr>';
					str += '<tr>';
				    var tds3 = '<td>' + "废旧沥青混凝土" + '</td>'
					 			+'<td>' + getdatad[2].toFixed(2) + '</td>'
					 			+'<td>' + "<input type='text' id='watercontentDC' onkeyup='sumb(this,watercontentDA,watercontentDB,watercontentDC,ashDA,ashDB,ashDC,sumDA,sumDB,sumDC,totalwatercontentD,totalashD,sumD,priceDA,priceDB,priceDC,toaltalpriceD,getdatad);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
				 			  	+'<td>' + "<input type='text' id='ashDC' onkeyup='sumb(this,watercontentDA,watercontentDB,watercontentDC,ashDA,ashDB,ashDC,sumDA,sumDB,sumDC,totalwatercontentD,totalashD,sumD,priceDA,priceDB,priceDC,toaltalpriceD,getdatad);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
				 			  	+'<td>' + "<input type='text' id='sumDC' style='border-width:0;text-align:center;'>" + '</td>'
				 			  	+'<td>' + getulist[7] + '</td>'
				 			  	+'<td>' + "<input type='text' id='priceDC' style='border-width:0;text-align:center;'>" + '</td>'
				    str += tds3;
					str += '</tr>';
					str += '<tr>';
				    var tds4 = '<td>' + "70#沥青油" + '</td>'
					 			+'<td>' + getdatad[3].toFixed(2) + '</td>'
					 			+'<td>' + "" + '</td>'
				 			  	+'<td>' + "" + '</td>'
				 			  	+'<td>' + getdatad[3].toFixed(2) + '</td>'
					 			+'<td>' + getulist[6] + '</td>'
					 			+'<td>' + (getdatad[3].toFixed(2)*getulist[6]/1000).toFixed(2) + '</td>'
				    str += tds4;
				    str += '</tr>';
				    str += '<tr>';
				    var tds5 = '<td>' + "乙烯焦油" + '</td>'
					 			+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
					 			+'<td>' + "" + '</td>'
				 			  	+'<td>' + "" + '</td>'
				 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
					 			+'<td>' + getulist[9] + '</td>'
					 			+'<td>' + (getulist[9]*6.80/1000).toFixed(2) + '</td>'
				    str += tds5;
				    str += '</tr>';
				    str += '<tr>';
				    var tds6 = '<td>' + "燃料油" + '</td>'
					 			+"<td style='background-color:#dedede'>" + "0.5" + '</td>'
					 			+'<td>' + "" + '</td>'
					 			+'<td>' + "" + '</td>'
					 			+"<td style='background-color:#dedede'>" + "0.5" + '</td>'
					 			+'<td>' + getulist[10] + '</td>'
					 			+'<td>' + (getulist[10]*0.5/1000).toFixed(2) + '</td>'
					str += tds6;
					str += '</tr>';
					str += '<tr>';
				    var tds7 = '<td>' + "矿粉" + '</td>'
					 			+'<td>' + getdatad[4].toFixed(2) + '</td>'
					 			+'<td>' + "" + '</td>'
				 			  	+'<td>' + "" + '</td>'
				 			  	+'<td>' + getdatad[4].toFixed(2) + '</td>'
					 			+'<td>' + getulist[8] + '</td>'
					 			+'<td>' + (getdatad[4].toFixed(2)*getulist[8]/1000).toFixed(2) + '</td>'
					str += tds7;
					str += '</tr>';
					str += '<tr>';
				    var tds8 = '<td>' + "合计" + '</td>'
					 			+'<td>' + total + '</td>'
					 			+'<td>' + "<input type='text' id='totalwatercontentD' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
				 			  	+'<td>' + "<input type='text' id='totalashD' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
				 			  	+'<td>' + "<input type='text' id='sumD' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			+'<td>' + "" + '</td>'
					 			+'<td>' + /*totalprice*/"<input type='text' id='toaltalpriceD' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					str += tds8;
					str += '</tr>';
				    str += '</table></form>';
				    $('#divIdD').html(str);
						}
					})
					//查询各类型含水率和废灰并赋值
					$.ajax({  
						type : "post",  
						url : baseURL +"sys/waterwaste/queryww",  
						data :{
							searchdate : searchdate,
							selected : selected,
							mixturetype : mixturetype
						},  
						async : false,  
						success : function(data){
							 var wwe = data.wwe;
							 if(wwe != null){
								document.getElementById("IDD").value = wwe.id;
								document.getElementById("watercontentDA").value = wwe.limestoneWater;
								document.getElementById("watercontentDB").value = wwe.limestoneWaste;
								document.getElementById("watercontentDC").value = wwe.millingMaterialWater;
								document.getElementById("ashDA").value = wwe.melonslicesWater;
								document.getElementById("ashDB").value = wwe.melonslicesWaste;
								document.getElementById("ashDC").value = wwe.millingMaterialWaste;
							 }
							 sumb(this,watercontentDA,watercontentDB,watercontentDC,ashDA,ashDB,ashDC,sumDA,sumDB,sumDC,totalwatercontentD,totalashD,sumD,priceDA,priceDB,priceDC,toaltalpriceD,getdatad);
						}
					});
}

/*35%***AC-13*/
function queryLastMonthK(searchdate,selected){
				var mixturetype="35%***AC-13";
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/materialsbill/totalLastMonthB",  
					data : {
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						getdatak = data.componetQB;
						var total = (parseFloat(getdatak[0].toFixed(2))+parseFloat(getdatak[1].toFixed(2))+parseFloat(getdatak[2].toFixed(2))+parseFloat(getdatak[3].toFixed(2))+parseFloat(getdatak[4].toFixed(2))+6.80+0.50).toFixed(2);
						/*var totalprice =  (parseFloat(getdata[0].toFixed(2)*getulist[0]/1000)
										+ parseFloat(getdata[1].toFixed(2)*getulist[2]/1000)
										+ parseFloat(getdata[2].toFixed(2)*getulist[7]/1000)
										+ parseFloat(getdata[3].toFixed(2)*getulist[6]/1000)
										+ parseFloat(getulist[9]*6.80/1000)
										+ parseFloat(getulist[10]*0.50/1000)
										+ parseFloat(getdata[4].toFixed(2)*getulist[8]/1000)).toFixed(2);*/
						var str= '';
						str += "<input type='text' id='IDK' style='display:none' /><form><table class='gridtable' >"+"<tr><th>"+"35%***AC-13"+"</th><th>"+"原始用量按‰比例"+"</th><th>"+"含水率按‰比例"
						+"</th><th>"+"废灰按‰比例"+"</th><th>"+"实际用量按‰比例"+"</th><th>"+"不含税单价"+"</th><th>"+"不含税金额/元"+"</th></tr>";
						str += '<tr>';
						var tds1 = 	'<td>' + "石粉" + '</td>'
						 			+'<td>' + getdatak[0].toFixed(2) + '</td>'
						 			+'<td>' + "<input type='text' id='watercontentKA' onkeyup='sumb(this,watercontentKA,watercontentKB,watercontentKC,ashKA,ashKB,ashKC,sumKA,sumKB,sumKC,totalwatercontentK,totalashK,sumK,priceKA,priceKB,priceKC,toaltalpriceK,getdatak);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashKA' onkeyup='sumb(this,watercontentKA,watercontentKB,watercontentKC,ashKA,ashKB,ashKC,sumKA,sumKB,sumKC,totalwatercontentK,totalashK,sumK,priceKA,priceKB,priceKC,toaltalpriceK,getdatak);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumKA' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + getulist[0] + '</td>' 
					 			  	+'<td>' + "<input type='text' id='priceKA' style='border-width:0;text-align:center;'>" + '</td>'
					    str += tds1;
					    str += '</tr>';
					    str += '<tr>';
					    var tds2 = '<td>' + "瓜子片" + '</td>'
						 			+'<td>' + getdatak[1].toFixed(2) + '</td>'
						 			+'<td>' + "<input type='text' id='watercontentKB' onkeyup='sumb(this,watercontentKA,watercontentKB,watercontentKC,ashKA,ashKB,ashKC,sumKA,sumKB,sumKC,totalwatercontentK,totalashK,sumK,priceKA,priceKB,priceKC,toaltalpriceK,getdatak);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashKB' onkeyup='sumb(this,watercontentKA,watercontentKB,watercontentKC,ashKA,ashKB,ashKC,sumKA,sumKB,sumKC,totalwatercontentK,totalashK,sumK,priceKA,priceKB,priceKC,toaltalpriceK,getdatak);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumKB' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + getulist[2] + '</td>'
					 			  	+'<td>' + "<input type='text' id='priceKB' style='border-width:0;text-align:center;'>" + '</td>'
					    str += tds2;
					    str += '</tr>';
						str += '<tr>';
					    var tds3 = '<td>' + "废旧沥青混凝土" + '</td>'
						 			+'<td>' + getdatak[2].toFixed(2) + '</td>'
						 			+'<td>' + "<input type='text' id='watercontentKC' onkeyup='sumb(this,watercontentKA,watercontentKB,watercontentKC,ashKA,ashKB,ashKC,sumKA,sumKB,sumKC,totalwatercontentK,totalashK,sumK,priceKA,priceKB,priceKC,toaltalpriceK,getdatak);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashKC' onkeyup='sumb(this,watercontentKA,watercontentKB,watercontentKC,ashKA,ashKB,ashKC,sumKA,sumKB,sumKC,totalwatercontentK,totalashK,sumK,priceKA,priceKB,priceKC,toaltalpriceK,getdatak);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumKC' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + getulist[7] + '</td>'
					 			  	+'<td>' + "<input type='text' id='priceKC' style='border-width:0;text-align:center;'>" + '</td>'
					    str += tds3;
						str += '</tr>';
						str += '<tr>';
					    var tds4 = '<td>' + "70#沥青油" + '</td>'
						 			+'<td>' + getdatak[3].toFixed(2) + '</td>'
						 			+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + getdatak[3].toFixed(2) + '</td>'
						 			+'<td>' + getulist[6] + '</td>'
						 			+'<td>' + (getdatak[3].toFixed(2)*getulist[6]/1000).toFixed(2) + '</td>'
					    str += tds4;
					    str += '</tr>';
					    str += '<tr>';
					    var tds5 = '<td>' + "乙烯焦油" + '</td>'
						 			+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
						 			+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
						 			+'<td>' + getulist[9] + '</td>'
						 			+'<td>' + (getulist[9]*6.80/1000).toFixed(2) + '</td>'
					    str += tds5;
					    str += '</tr>';
					    str += '<tr>';
					    var tds6 = '<td>' + "燃料油" + '</td>'
						 			+"<td style='background-color:#dedede'>" + "0.5" + '</td>'
						 			+'<td>' + "" + '</td>'
						 			+'<td>' + "" + '</td>'
						 			+"<td style='background-color:#dedede'>" + "0.5" + '</td>'
						 			+'<td>' + getulist[10] + '</td>'
						 			+'<td>' + (getulist[10]*0.5/1000).toFixed(2) + '</td>'
						str += tds6;
						str += '</tr>';
						str += '<tr>';
					    var tds7 = '<td>' + "矿粉" + '</td>'
						 			+'<td>' + getdatak[4].toFixed(2) + '</td>'
						 			+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + getdatak[4].toFixed(2) + '</td>'
						 			+'<td>' + getulist[8] + '</td>'
						 			+'<td>' + (getdatak[4].toFixed(2)*getulist[8]/1000).toFixed(2) + '</td>'
						str += tds7;
						str += '</tr>';
						str += '<tr>';
					    var tds8 = '<td>' + "合计" + '</td>'
						 			+'<td>' + total + '</td>'
						 			+'<td>' + "<input type='text' id='totalwatercontentK' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalashK' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumK' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
						 			+'<td>' + "" + '</td>'
						 			+'<td>' + /*totalprice*/"<input type='text' id='toaltalpriceK' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds8;
						str += '</tr>';
					    str += '</table></form>';
					    $('#divIdK').html(str);
					    /*if(total>1000){
					    	$('#divIdK').html(str);
					    }else{
					    	document.getElementById("divIdK").style.display="none";
					    }*/
							}
						});
				//查询各类型含水率和废灰并赋值
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/waterwaste/queryww",  
					data :{
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						 var wwe = data.wwe;
						 if(wwe != null){
							document.getElementById("IDK").value = wwe.id;
							document.getElementById("watercontentKA").value = wwe.limestoneWater;
							document.getElementById("watercontentKB").value = wwe.melonslicesWater;
							document.getElementById("watercontentKC").value = wwe.millingMaterialWater;
							document.getElementById("ashKA").value = wwe.limestoneWaste;
							document.getElementById("ashKB").value = wwe.melonslicesWaste;
							document.getElementById("ashKC").value = wwe.millingMaterialWaste;
						 }
						 sumb(this,watercontentKA,watercontentKB,watercontentKC,ashKA,ashKB,ashKC,sumKA,sumKB,sumKC,totalwatercontentK,totalashK,sumK,priceKA,priceKB,priceKC,toaltalpriceK,getdatak);
					}
				});
}

/*AC-16*/
function queryLastMonthE(searchdate,selected){
				var mixturetype="AC-16";
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/materialsbill/totalLastMonthC",  
					data : {
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						getdatae = data.componetQC;
						var total = (parseFloat(getdatae[0].toFixed(2))+parseFloat(getdatae[1].toFixed(2))+parseFloat(getdatae[2].toFixed(2))+parseFloat(getdatae[3].toFixed(2))+parseFloat(getdatae[4].toFixed(2))+6.80+0.50).toFixed(2);
						/*var totalprice =  (parseFloat(getdata[0].toFixed(2)*getulist[0]/1000)
										+ parseFloat(getdata[1].toFixed(2)*getulist[2]/1000)
										+ parseFloat(getdata[2].toFixed(2)*getulist[6]/1000)
										+ parseFloat(getulist[9]*6.80/1000)
										+ parseFloat(getulist[10]*0.50/1000)
										+ parseFloat(getdata[3]*getulist[8]/1000)).toFixed(2);*/
						var str= '';
						str += "<input type='text' id='IDE' style='display:none' /><form><table class='gridtable' >"+"<tr><th>"+"AC-16"+"</th><th>"+"原始用量按‰比例"+"</th><th>"+"含水率按‰比例"
						+"</th><th>"+"废灰按‰比例"+"</th><th>"+"实际用量按‰比例"+"</th><th>"+"不含税单价"+"</th><th>"+"不含税金额/元"+"</th></tr>";
						str += '<tr>';
						var tds1 = 	 '<td>' + "石粉" + '</td>'
					 			  	+'<td>' + getdatae[0].toFixed(2) + '</td>'
					 			  	+'<td>' + "<input type='text' id='watercontentEA' onkeyup='sumc(this,watercontentEA,watercontentEB,watercontentEC,ashEA,ashEB,ashEC,sumEA,sumEB,sumEC,totalwatercontentE,totalashE,sumE,priceEA,priceEB,priceEC,toaltalpriceE,getdatae);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashEA' onkeyup='sumc(this,watercontentEA,watercontentEB,watercontentEC,ashEA,ashEB,ashEC,sumEA,sumEB,sumEC,totalwatercontentE,totalashE,sumE,priceEA,priceEB,priceEC,toaltalpriceE,getdatae);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumEA' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[0] + '</td>'                                                     
				     				+'<td>' +"<input type='text' id='priceEA' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds1;
				     	str += '</tr>';
				     	str += '<tr>';
				     	var tds2 =   '<td>' + "瓜子片" + '</td>'
					 				+'<td>' + getdatae[1].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentEB' onkeyup='sumc(this,watercontentEA,watercontentEB,watercontentEC,ashEA,ashEB,ashEC,sumEA,sumEB,sumEC,totalwatercontentE,totalashE,sumE,priceEA,priceEB,priceEC,toaltalpriceE,getdatae);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashEB' onkeyup='sumc(this,watercontentEA,watercontentEB,watercontentEC,ashEA,ashEB,ashEC,sumEA,sumEB,sumEC,totalwatercontentE,totalashE,sumE,priceEA,priceEB,priceEC,toaltalpriceE,getdatae);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumEB' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[2] + '</td>'
				     				+'<td>' +"<input type='text' id='priceEB' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds2;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =   '<td>' + "细碎" + '</td>'
					 				+'<td>' + getdatae[2].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentEC' onkeyup='sumc(this,watercontentEA,watercontentEB,watercontentEC,ashEA,ashEB,ashEC,sumEA,sumEB,sumEC,totalwatercontentE,totalashE,sumE,priceEA,priceEB,priceEC,toaltalpriceE,getdatae);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashEC' onkeyup='sumc(this,watercontentEA,watercontentEB,watercontentEC,ashEA,ashEB,ashEC,sumEA,sumEB,sumEC,totalwatercontentE,totalashE,sumE,priceEA,priceEB,priceEC,toaltalpriceE,getdatae);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumEC' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[3] + '</td>'
				     				+'<td>' +"<input type='text' id='priceEC' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
						var tds4 = 	 '<td>' + "70#沥青油" + '</td>'
					 			  	+'<td>' + getdatae[3].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + getdatae[3].toFixed(2) + '</td>'
				     				+'<td>' + getulist[6] + '</td>'
				     				+'<td>' + (getdatae[2].toFixed(2)*getulist[6]/1000).toFixed(2) + '</td>'
						str += tds4;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds5 = 	 '<td>' + "乙烯焦油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
				     				+'<td>' + getulist[9] + '</td>'
				     				+'<td>' + (getulist[9]*6.80/1000).toFixed(2) + '</td>'
						str += tds5;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds6 = 	 '<td>' + "燃料油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
					 			  	+'<td>' + "" + '</td>'
						 			+'<td>' + "" + '</td>'
						 			+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
				     				+'<td>' + getulist[10] + '</td>'
				     				+'<td>' + (getulist[10]*0.50/1000).toFixed(2) + '</td>'
						str += tds6;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds7 = 	 '<td>' + "矿粉" + '</td>'
					 			  	+'<td>' + getdatae[4].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + getdatae[4].toFixed(2) + '</td>'
				     				+'<td>' + getulist[8] + '</td>'
				     				+'<td>' + (getdatae[4]*getulist[8]/1000).toFixed(2) + '</td>'
						str += tds7;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds8 = 	 '<td>' + "合计" + '</td>'
					 			  	+'<td>' + total + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalwatercontentE' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalashE' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumE' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + ""/*"<input type='text' id='searchdate' style='border-width:0;text-align:center;' placeholder='请输入'>"*/ + '</td>'
				     				+'<td>' + /*totalprice*/"<input type='text' readonly='true' id='toaltalpriceE' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds8;
				     	str += '</tr>';
						str += '</table></form>';
						$('#divIdE').html(str);
					}
				});
				//查询各类型含水率和废灰并赋值
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/waterwaste/queryww",  
					data :{
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						 var wwe = data.wwe;
						 if(wwe != null){
							document.getElementById("IDE").value = wwe.id;
							document.getElementById("watercontentEA").value = wwe.limestoneWater;
							document.getElementById("watercontentEB").value = wwe.melonslicesWater;
							document.getElementById("watercontentEC").value = wwe.comminutionWater;
							document.getElementById("ashEA").value = wwe.limestoneWaste;
							document.getElementById("ashEB").value = wwe.melonslicesWaste;
							document.getElementById("ashEC").value = wwe.comminutionWaste;
						 }
						 sumc(this,watercontentEA,watercontentEB,watercontentEC,ashEA,ashEB,ashEC,sumEA,sumEB,sumEC,totalwatercontentE,totalashE,sumE,priceEA,priceEB,priceEC,toaltalpriceE,getdatae);
					}
				});
}

/*35%***AC-16*/
function queryLastMonthF(searchdate,selected){
				var mixturetype="35%***AC-16";
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/materialsbill/totalLastMonthD",  
					data : {
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						getdataf = data.componetQD;
						var total = (parseFloat(getdataf[0].toFixed(2))+parseFloat(getdataf[1].toFixed(2))+parseFloat(getdataf[2].toFixed(2))+parseFloat(getdataf[3].toFixed(2))+parseFloat(getdataf[4].toFixed(2))+6.80+0.50).toFixed(2);
						var str= '';
						str += "<input type='text' id='IDF' style='display:none' /><form><table class='gridtable' >"+"<tr><th>"+"35%***AC-16"+"</th><th>"+"原始用量按‰比例"+"</th><th>"+"含水率按‰比例"
						+"</th><th>"+"废灰按‰比例"+"</th><th>"+"实际用量按‰比例"+"</th><th>"+"不含税单价"+"</th><th>"+"不含税金额/元"+"</th></tr>";
						str += '<tr>';
						var tds1 = 	 '<td>' + "石粉" + '</td>'
					 			  	+'<td>' + getdataf[0].toFixed(2) + '</td>'
					 			  	+'<td>' + "<input type='text' id='watercontentFA' onkeyup='sumd(this,watercontentFA,watercontentFB,watercontentFC,watercontentFD,ashFA,ashFB,ashFC,ashFD,sumFA,sumFB,sumFC,sumFD,totalwatercontentF,totalashF,sumF,priceFA,priceFB,priceFC,priceFD,toaltalpriceF,getdataf);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashFA' onkeyup='sumd(this,watercontentFA,watercontentFB,watercontentFC,watercontentFD,ashFA,ashFB,ashFC,ashFD,sumFA,sumFB,sumFC,sumFD,totalwatercontentF,totalashF,sumF,priceFA,priceFB,priceFC,priceFD,toaltalpriceF,getdataf);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumFA' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[0] + '</td>'                                                     
				     				+'<td>' +"<input type='text' id='priceFA' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds1;
				     	str += '</tr>';
				     	str += '<tr>';
				     	var tds2 =   '<td>' + "瓜子片" + '</td>'
					 				+'<td>' + getdataf[1].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentFB' onkeyup='sumd(this,watercontentFA,watercontentFB,watercontentFC,watercontentFD,ashFA,ashFB,ashFC,ashFD,sumFA,sumFB,sumFC,sumFD,totalwatercontentF,totalashF,sumF,priceFA,priceFB,priceFC,priceFD,toaltalpriceF,getdataf);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashFB' onkeyup='sumd(this,watercontentFA,watercontentFB,watercontentFC,watercontentFD,ashFA,ashFB,ashFC,ashFD,sumFA,sumFB,sumFC,sumFD,totalwatercontentF,totalashF,sumF,priceFA,priceFB,priceFC,priceFD,toaltalpriceF,getdataf);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumFB' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[2] + '</td>'
				     				+'<td>' +"<input type='text' id='priceFB' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds2;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =   '<td>' + "细碎" + '</td>'
					 				+'<td>' + getdataf[2].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentFC' onkeyup='sumd(this,watercontentFA,watercontentFB,watercontentFC,watercontentFD,ashFA,ashFB,ashFC,ashFD,sumFA,sumFB,sumFC,sumFD,totalwatercontentF,totalashF,sumF,priceFA,priceFB,priceFC,priceFD,toaltalpriceF,getdataf);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashFC' onkeyup='sumd(this,watercontentFA,watercontentFB,watercontentFC,watercontentFD,ashFA,ashFB,ashFC,ashFD,sumFA,sumFB,sumFC,sumFD,totalwatercontentF,totalashF,sumF,priceFA,priceFB,priceFC,priceFD,toaltalpriceF,getdataf);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumFC' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[3] + '</td>'
				     				+'<td>' +"<input type='text' id='priceFC' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =   '<td>' + "废旧沥青混凝土" + '</td>'
					 				+'<td>' + getdataf[3].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentFD' onkeyup='sumd(this,watercontentFA,watercontentFB,watercontentFC,watercontentFD,ashFA,ashFB,ashFC,ashFD,sumFA,sumFB,sumFC,sumFD,totalwatercontentF,totalashF,sumF,priceFA,priceFB,priceFC,priceFD,toaltalpriceF,getdataf);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashFD' onkeyup='sumd(this,watercontentFA,watercontentFB,watercontentFC,watercontentFD,ashFA,ashFB,ashFC,ashFD,sumFA,sumFB,sumFC,sumFD,totalwatercontentF,totalashF,sumF,priceFA,priceFB,priceFC,priceFD,toaltalpriceF,getdataf);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumFD' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[7] + '</td>'
				     				+'<td>' +"<input type='text' id='priceFD' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
						var tds4 = 	 '<td>' + "70#沥青油" + '</td>'
					 			  	+'<td>' + getdataf[4].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + getdataf[4].toFixed(2) + '</td>'
				     				+'<td>' + getulist[6] + '</td>'
				     				+'<td>' + (getdataf[4].toFixed(2)*getulist[6]/1000).toFixed(2) + '</td>'
						str += tds4;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds5 = 	 '<td>' + "乙烯焦油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
				     				+'<td>' + getulist[9] + '</td>'
				     				+'<td>' + (getulist[9]*6.80/1000).toFixed(2) + '</td>'
						str += tds5;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds6 = 	 '<td>' + "燃料油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
					 			  	+'<td>' + "" + '</td>'
						 			+'<td>' + "" + '</td>'
						 			+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
				     				+'<td>' + getulist[10] + '</td>'
				     				+'<td>' + (getulist[10]*0.50/1000).toFixed(2) + '</td>'
						str += tds6;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds7 = 	 '<td>' + "矿粉" + '</td>'
					 			  	+'<td>' + getdataf[5].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + getdataf[5].toFixed(2) + '</td>'
				     				+'<td>' + getulist[8] + '</td>'
				     				+'<td>' + (getdataf[5]*getulist[8]/1000).toFixed(2) + '</td>'
						str += tds7;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds8 = 	 '<td>' + "合计" + '</td>'
					 			  	+'<td>' + total + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalwatercontentF' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalashF' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumF' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + ""/*"<input type='text' id='searchdate' style='border-width:0;text-align:center;' placeholder='请输入'>"*/ + '</td>'
				     				+'<td>' + /*totalprice*/"<input type='text' id='toaltalpriceF' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds8;
				     	str += '</tr>';
						str += '</table></form>';
					    $('#divIdF').html(str);
							}
						});
				//查询各类型含水率和废灰并赋值
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/waterwaste/queryww",  
					data :{
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						 var wwe = data.wwe;
						 if(wwe != null){
							document.getElementById("IDF").value = wwe.id;
							document.getElementById("watercontentFA").value = wwe.limestoneWater;
							document.getElementById("watercontentFB").value = wwe.melonslicesWater;
							document.getElementById("watercontentFC").value = wwe.comminutionWater;
							document.getElementById("watercontentFD").value = wwe.millingMaterialWater;
							document.getElementById("ashFA").value = wwe.limestoneWaste;
							document.getElementById("ashFB").value = wwe.melonslicesWaste;
							document.getElementById("ashFC").value = wwe.comminutionWaste;
							document.getElementById("ashFD").value = wwe.millingMaterialWaste;
						 }
						 sumd(this,watercontentFA,watercontentFB,watercontentFC,watercontentFD,ashFA,ashFB,ashFC,ashFD,sumFA,sumFB,sumFC,sumFD,totalwatercontentF,totalashF,sumF,priceFA,priceFB,priceFC,priceFD,toaltalpriceF,getdataf);
					}
				});
}

/*AC-20*/
function queryLastMonthG(searchdate,selected){
				var mixturetype="AC-20";
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/materialsbill/totalLastMonthC",  
					data : {
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						getdatag = data.componetQC;
						var total =(parseFloat(getdatag[0].toFixed(2))+parseFloat(getdatag[1].toFixed(2))+parseFloat(getdatag[2].toFixed(2))+parseFloat(getdatag[3].toFixed(2))+parseFloat(getdatag[4].toFixed(2))+6.80+0.50).toFixed(2);
						var str= '';
						str += "<input type='text' id='IDG' style='display:none' /><form><table class='gridtable' >"+"<tr><th>"+"AC-20"+"</th><th>"+"原始用量按‰比例"+"</th><th>"+"含水率按‰比例"
						+"</th><th>"+"废灰按‰比例"+"</th><th>"+"实际用量按‰比例"+"</th><th>"+"不含税单价"+"</th><th>"+"不含税金额/元"+"</th></tr>";
						str += '<tr>';
						var tds1 = 	 '<td>' + "石粉" + '</td>'
					 			  	+'<td>' + getdatag[0].toFixed(2) + '</td>'
					 			  	+'<td>' + "<input type='text' id='watercontentGA' onkeyup='sumc(this,watercontentGA,watercontentGB,watercontentGC,ashGA,ashGB,ashGC,sumGA,sumGB,sumGC,totalwatercontentG,totalashG,sumG,priceGA,priceGB,priceGC,toaltalpriceG,getdatag);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashGA' onkeyup='sumc(this,watercontentGA,watercontentGB,watercontentGC,ashGA,ashGB,ashGC,sumGA,sumGB,sumGC,totalwatercontentG,totalashG,sumG,priceGA,priceGB,priceGC,toaltalpriceG,getdatag);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumGA' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[0] + '</td>'                                                     
				     				+'<td>' +"<input type='text' id='priceGA' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds1;
				     	str += '</tr>';
				     	str += '<tr>';
				     	var tds2 =   '<td>' + "瓜子片" + '</td>'
					 				+'<td>' + getdatag[1].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentGB' onkeyup='sumc(this,watercontentGA,watercontentGB,watercontentGC,ashGA,ashGB,ashGC,sumGA,sumGB,sumGC,totalwatercontentG,totalashG,sumG,priceGA,priceGB,priceGC,toaltalpriceG,getdatag);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashGB' onkeyup='sumc(this,watercontentGA,watercontentGB,watercontentGC,ashGA,ashGB,ashGC,sumGA,sumGB,sumGC,totalwatercontentG,totalashG,sumG,priceGA,priceGB,priceGC,toaltalpriceG,getdatag);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumGB' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[2] + '</td>'
				     				+'<td>' +"<input type='text' id='priceGB' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds2;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =   '<td>' + "细碎" + '</td>'
					 				+'<td>' + getdatag[2].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentGC' onkeyup='sumc(this,watercontentGA,watercontentGB,watercontentGC,ashGA,ashGB,ashGC,sumGA,sumGB,sumGC,totalwatercontentG,totalashG,sumG,priceGA,priceGB,priceGC,toaltalpriceG,getdatag);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashGC' onkeyup='sumc(this,watercontentGA,watercontentGB,watercontentGC,ashGA,ashGB,ashGC,sumGA,sumGB,sumGC,totalwatercontentG,totalashG,sumG,priceGA,priceGB,priceGC,toaltalpriceG,getdatag);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumGC' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[3] + '</td>'
				     				+'<td>' +"<input type='text' id='priceGC' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
						var tds4 = 	 '<td>' + "70#沥青油" + '</td>'
					 			  	+'<td>' + getdatag[3].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + getdatag[3].toFixed(2) + '</td>'
				     				+'<td>' + getulist[6] + '</td>'
				     				+'<td>' + (getdatag[2].toFixed(2)*getulist[6]/1000).toFixed(2) + '</td>'
						str += tds4;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds5 = 	 '<td>' + "乙烯焦油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
				     				+'<td>' + getulist[9] + '</td>'
				     				+'<td>' + (getulist[9]*6.80/1000).toFixed(2) + '</td>'
						str += tds5;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds6 = 	 '<td>' + "燃料油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
					 			  	+'<td>' + "" + '</td>'
						 			+'<td>' + "" + '</td>'
						 			+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
				     				+'<td>' + getulist[10] + '</td>'
				     				+'<td>' + (getulist[10]*0.50/1000).toFixed(2) + '</td>'
						str += tds6;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds7 = 	 '<td>' + "矿粉" + '</td>'
					 			  	+'<td>' + getdatag[4].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + getdatag[4].toFixed(2) + '</td>'
				     				+'<td>' + getulist[8] + '</td>'
				     				+'<td>' + (getdatag[4]*getulist[8]/1000).toFixed(2) + '</td>'
						str += tds7;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds8 = 	 '<td>' + "合计" + '</td>'
					 			  	+'<td>' + total + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalwatercontentG' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalashG' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumG' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + ""/*"<input type='text' id='searchdate' style='border-width:0;text-align:center;' placeholder='请输入'>"*/ + '</td>'
				     				+'<td>' + /*totalprice*/"<input type='text' id='toaltalpriceG' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds8;
				     	str += '</tr>';
						str += '</table></form>';
						$('#divIdG').html(str);
					}
				});
				//查询各类型含水率和废灰并赋值
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/waterwaste/queryww",  
					data :{
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						 var wwe = data.wwe;
						 if(wwe != null){
							document.getElementById("IDG").value = wwe.id;
							document.getElementById("watercontentGA").value = wwe.limestoneWater;
							document.getElementById("watercontentGB").value = wwe.melonslicesWater;
							document.getElementById("watercontentGC").value = wwe.comminutionWater;
							document.getElementById("ashGA").value = wwe.limestoneWaste;
							document.getElementById("ashGB").value = wwe.melonslicesWaste;
							document.getElementById("ashGC").value = wwe.comminutionWaste;
						 }
						 sumc(this,watercontentGA,watercontentGB,watercontentGC,ashGA,ashGB,ashGC,sumGA,sumGB,sumGC,totalwatercontentG,totalashG,sumG,priceGA,priceGB,priceGC,toaltalpriceG,getdatag);
					}
				});
}

/*35%***AC-20*/
function queryLastMonthH(searchdate,selected){
				var mixturetype="35%***AC-20";
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/materialsbill/totalLastMonthD",  
					data : {
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						getdatah = data.componetQD;
						var total = (parseFloat(getdatah[0].toFixed(2))+parseFloat(getdatah[1].toFixed(2))+parseFloat(getdatah[2].toFixed(2))+parseFloat(getdatah[3].toFixed(2))+parseFloat(getdatah[4].toFixed(2))+6.80+0.50).toFixed(2);
						var str= '';
						str += "<input type='text' id='IDH' style='display:none' /><form><table class='gridtable' >"+"<tr><th>"+"35%***AC-20"+"</th><th>"+"原始用量按‰比例"+"</th><th>"+"含水率按‰比例"
						+"</th><th>"+"废灰按‰比例"+"</th><th>"+"实际用量按‰比例"+"</th><th>"+"不含税单价"+"</th><th>"+"不含税金额/元"+"</th></tr>";
						str += '<tr>';
						var tds1 = 	 '<td>' + "石粉" + '</td>'
					 			  	+'<td>' + getdatah[0].toFixed(2) + '</td>'
					 			  	+'<td>' + "<input type='text' id='watercontentHA' onkeyup='sumd(this,watercontentHA,watercontentHB,watercontentHC,watercontentHD,ashHA,ashHB,ashHC,ashHD,sumHA,sumHB,sumHC,sumHD,totalwatercontentH,totalashH,sumH,priceHA,priceHB,priceHC,priceHD,toaltalpriceH,getdatah);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashHA' onkeyup='sumd(this,watercontentHA,watercontentHB,watercontentHC,watercontentHD,ashHA,ashHB,ashHC,ashHD,sumHA,sumHB,sumHC,sumHD,totalwatercontentH,totalashH,sumH,priceHA,priceHB,priceHC,priceHD,toaltalpriceH,getdatah);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumHA' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[0] + '</td>'                                                     
				     				+'<td>' +"<input type='text' id='priceHA' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds1;
				     	str += '</tr>';
				     	str += '<tr>';
				     	var tds2 =   '<td>' + "瓜子片" + '</td>'
					 				+'<td>' + getdatah[1].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentHB' onkeyup='sumd(this,watercontentHA,watercontentHB,watercontentHC,watercontentHD,ashHA,ashHB,ashHC,ashHD,sumHA,sumHB,sumHC,sumHD,totalwatercontentH,totalashH,sumH,priceHA,priceHB,priceHC,priceHD,toaltalpriceH,getdatah);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashHB' onkeyup='sumd(this,watercontentHA,watercontentHB,watercontentHC,watercontentHD,ashHA,ashHB,ashHC,ashHD,sumHA,sumHB,sumHC,sumHD,totalwatercontentH,totalashH,sumH,priceHA,priceHB,priceHC,priceHD,toaltalpriceH,getdatah);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumHB' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[2] + '</td>'
				     				+'<td>' +"<input type='text' id='priceHB' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds2;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =   '<td>' + "细碎" + '</td>'
					 				+'<td>' + getdatah[2].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentHC' onkeyup='sumd(this,watercontentHA,watercontentHB,watercontentHC,watercontentHD,ashHA,ashHB,ashHC,ashHD,sumHA,sumHB,sumHC,sumHD,totalwatercontentH,totalashH,sumH,priceHA,priceHB,priceHC,priceHD,toaltalpriceH,getdatah);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashHC' onkeyup='sumd(this,watercontentHA,watercontentHB,watercontentHC,watercontentHD,ashHA,ashHB,ashHC,ashHD,sumHA,sumHB,sumHC,sumHD,totalwatercontentH,totalashH,sumH,priceHA,priceHB,priceHC,priceHD,toaltalpriceH,getdatah);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumHC' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[3] + '</td>'
				     				+'<td>' +"<input type='text' id='priceHC' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =   '<td>' + "废旧沥青混凝土" + '</td>'
					 				+'<td>' + getdatah[3].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentHD' onkeyup='sumd(this,watercontentHA,watercontentHB,watercontentHC,watercontentHD,ashHA,ashHB,ashHC,ashHD,sumHA,sumHB,sumHC,sumHD,totalwatercontentH,totalashH,sumH,priceHA,priceHB,priceHC,priceHD,toaltalpriceH,getdatah);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashHD' onkeyup='sumd(this,watercontentHA,watercontentHB,watercontentHC,watercontentHD,ashHA,ashHB,ashHC,ashHD,sumHA,sumHB,sumHC,sumHD,totalwatercontentH,totalashH,sumH,priceHA,priceHB,priceHC,priceHD,toaltalpriceH,getdatah);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumHD' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[7] + '</td>'
				     				+'<td>' +"<input type='text' id='priceHD' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
						var tds4 = 	 '<td>' + "70#沥青油" + '</td>'
					 			  	+'<td>' + getdatah[4].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + getdatah[4].toFixed(2) + '</td>'
				     				+'<td>' + getulist[6] + '</td>'
				     				+'<td>' + (getdatah[4].toFixed(2)*getulist[6]/1000).toFixed(2) + '</td>'
						str += tds4;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds5 = 	 '<td>' + "乙烯焦油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
				     				+'<td>' + getulist[9] + '</td>'
				     				+'<td>' + (getulist[9]*6.80/1000).toFixed(2) + '</td>'
						str += tds5;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds6 = 	 '<td>' + "燃料油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
					 			  	+'<td>' + "" + '</td>'
						 			+'<td>' + "" + '</td>'
						 			+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
				     				+'<td>' + getulist[10] + '</td>'
				     				+'<td>' + (getulist[10]*0.50/1000).toFixed(2) + '</td>'
						str += tds6;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds7 = 	 '<td>' + "矿粉" + '</td>'
					 			  	+'<td>' + getdatah[5].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + getdatah[5].toFixed(2) + '</td>'
				     				+'<td>' + getulist[8] + '</td>'
				     				+'<td>' + (getdatah[5]*getulist[8]/1000).toFixed(2) + '</td>'
						str += tds7;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds8 = 	 '<td>' + "合计" + '</td>'
					 			  	+'<td>' + total + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalwatercontentH' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalashH' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumH' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + ""/*"<input type='text' id='searchdate' style='border-width:0;text-align:center;' placeholder='请输入'>"*/ + '</td>'
				     				+'<td>' + /*totalprice*/"<input type='text' id='toaltalpriceH' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds8;
				     	str += '</tr>';
						str += '</table></form>';
					    $('#divIdH').html(str);
							}
						});
				//查询各类型含水率和废灰并赋值
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/waterwaste/queryww",  
					data :{
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						 var wwe = data.wwe;
						 if(wwe != null){
							document.getElementById("IDH").value = wwe.id;
							document.getElementById("watercontentHA").value = wwe.limestoneWater;
							document.getElementById("watercontentHB").value = wwe.melonslicesWater;
							document.getElementById("watercontentHC").value = wwe.comminutionWater;
							document.getElementById("watercontentHD").value = wwe.millingMaterialWater;
							document.getElementById("ashHA").value = wwe.limestoneWaste;
							document.getElementById("ashHB").value = wwe.melonslicesWaste;
							document.getElementById("ashHC").value = wwe.comminutionWaste;
							document.getElementById("ashHD").value = wwe.millingMaterialWaste;
						 }
						 sumd(this,watercontentHA,watercontentHB,watercontentHC,watercontentHD,ashHA,ashHB,ashHC,ashHD,sumHA,sumHB,sumHC,sumHD,totalwatercontentH,totalashH,sumH,priceHA,priceHB,priceHC,priceHD,toaltalpriceH,getdatah);
					}
				});
}

/*40%***AC-20*/
function queryLastMonthL(searchdate,selected){
				var mixturetype="40%***AC-20";
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/materialsbill/totalLastMonthD",  
					data : {
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						getdatal = data.componetQD;
						var total = (parseFloat(getdatal[0].toFixed(2))+parseFloat(getdatal[1].toFixed(2))+parseFloat(getdatal[2].toFixed(2))+parseFloat(getdatal[3].toFixed(2))+parseFloat(getdatal[4].toFixed(2))+6.80+0.50).toFixed(2);
						var str= '';
						str += "<input type='text' id='IDL' style='display:none' /><form><table class='gridtable' >"+"<tr><th>"+"40%***AC-20"+"</th><th>"+"原始用量按‰比例"+"</th><th>"+"含水率按‰比例"
						+"</th><th>"+"废灰按‰比例"+"</th><th>"+"实际用量按‰比例"+"</th><th>"+"不含税单价"+"</th><th>"+"不含税金额/元"+"</th></tr>";
						str += '<tr>';
						var tds1 = 	 '<td>' + "石粉" + '</td>'
					 			  	+'<td>' + getdatal[0].toFixed(2) + '</td>'
					 			  	+'<td>' + "<input type='text' id='watercontentLA' onkeyup='sumd(this,watercontentLA,watercontentLB,watercontentLC,watercontentLD,ashLA,ashLB,ashLC,ashLD,sumLA,sumLB,sumLC,sumLD,totalwatercontentL,totalashL,sumL,priceLA,priceLB,priceLC,priceLD,toaltalpriceL,getdatal);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashLA' onkeyup='sumd(this,watercontentLA,watercontentLB,watercontentLC,watercontentLD,ashLA,ashLB,ashLC,ashLD,sumLA,sumLB,sumLC,sumLD,totalwatercontentL,totalashL,sumL,priceLA,priceLB,priceLC,priceLD,toaltalpriceL,getdatal);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumLA' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[0] + '</td>'                                                     
				     				+'<td>' +"<input type='text' id='priceLA' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds1;
				     	str += '</tr>';
				     	str += '<tr>';
				     	var tds2 =   '<td>' + "瓜子片" + '</td>'
					 				+'<td>' + getdatal[1].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentLB' onkeyup='sumd(this,watercontentLA,watercontentLB,watercontentLC,watercontentLD,ashLA,ashLB,ashLC,ashLD,sumLA,sumLB,sumLC,sumLD,totalwatercontentL,totalashL,sumL,priceLA,priceLB,priceLC,priceLD,toaltalpriceL,getdatal);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashLB' onkeyup='sumd(this,watercontentLA,watercontentLB,watercontentLC,watercontentLD,ashLA,ashLB,ashLC,ashLD,sumLA,sumLB,sumLC,sumLD,totalwatercontentL,totalashL,sumL,priceLA,priceLB,priceLC,priceLD,toaltalpriceL,getdatal);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumLB' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[2] + '</td>'
				     				+'<td>' +"<input type='text' id='priceLB' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds2;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =   '<td>' + "细碎" + '</td>'
					 				+'<td>' + getdatal[2].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentLC' onkeyup='sumd(this,watercontentLA,watercontentLB,watercontentLC,watercontentLD,ashLA,ashLB,ashLC,ashLD,sumLA,sumLB,sumLC,sumLD,totalwatercontentL,totalashL,sumL,priceLA,priceLB,priceLC,priceLD,toaltalpriceL,getdatal);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashLC' onkeyup='sumd(this,watercontentLA,watercontentLB,watercontentLC,watercontentLD,ashLA,ashLB,ashLC,ashLD,sumLA,sumLB,sumLC,sumLD,totalwatercontentL,totalashL,sumL,priceLA,priceLB,priceLC,priceLD,toaltalpriceL,getdatal);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumLC' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[3] + '</td>'
				     				+'<td>' +"<input type='text' id='priceLC' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =   '<td>' + "废旧沥青混凝土" + '</td>'
					 				+'<td>' + getdatal[3].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentLD' onkeyup='sumd(this,watercontentLA,watercontentLB,watercontentLC,watercontentLD,ashLA,ashLB,ashLC,ashLD,sumLA,sumLB,sumLC,sumLD,totalwatercontentL,totalashL,sumL,priceLA,priceLB,priceLC,priceLD,toaltalpriceL,getdatal);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashLD' onkeyup='sumd(this,watercontentLA,watercontentLB,watercontentLC,watercontentLD,ashLA,ashLB,ashLC,ashLD,sumLA,sumLB,sumLC,sumLD,totalwatercontentL,totalashL,sumL,priceLA,priceLB,priceLC,priceLD,toaltalpriceL,getdatal);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumLD' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[7] + '</td>'
				     				+'<td>' +"<input type='text' id='priceLD' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
						var tds4 = 	 '<td>' + "70#沥青油" + '</td>'
					 			  	+'<td>' + getdatal[4].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + getdatal[4].toFixed(2) + '</td>'
				     				+'<td>' + getulist[6] + '</td>'
				     				+'<td>' + (getdatal[4].toFixed(2)*getulist[6]/1000).toFixed(2) + '</td>'
						str += tds4;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds5 = 	 '<td>' + "乙烯焦油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
				     				+'<td>' + getulist[9] + '</td>'
				     				+'<td>' + (getulist[9]*6.80/1000).toFixed(2) + '</td>'
						str += tds5;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds6 = 	 '<td>' + "燃料油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
					 			  	+'<td>' + "" + '</td>'
						 			+'<td>' + "" + '</td>'
						 			+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
				     				+'<td>' + getulist[10] + '</td>'
				     				+'<td>' + (getulist[10]*0.50/1000).toFixed(2) + '</td>'
						str += tds6;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds7 = 	 '<td>' + "矿粉" + '</td>'
					 			  	+'<td>' + getdatal[5].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + getdatal[5].toFixed(2) + '</td>'
				     				+'<td>' + getulist[8] + '</td>'
				     				+'<td>' + (getdatal[5]*getulist[8]/1000).toFixed(2) + '</td>'
						str += tds7;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds8 = 	 '<td>' + "合计" + '</td>'
					 			  	+'<td>' + total + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalwatercontentL' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalashL' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumL' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + ""/*"<input type='text' id='searchdate' style='border-width:0;text-align:center;' placeholder='请输入'>"*/ + '</td>'
				     				+'<td>' + /*totalprice*/"<input type='text' id='toaltalpriceL' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds8;
				     	str += '</tr>';
						str += '</table></form>';
					    $('#divIdL').html(str);
							}
						});
				//查询各类型含水率和废灰并赋值
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/waterwaste/queryww",  
					data :{
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						 var wwe = data.wwe;
						 if(wwe != null){
							document.getElementById("IDL").value = wwe.id;
							document.getElementById("watercontentLA").value = wwe.limestoneWater;
							document.getElementById("watercontentLB").value = wwe.melonslicesWater;
							document.getElementById("watercontentLC").value = wwe.comminutionWater;
							document.getElementById("watercontentLD").value = wwe.millingMaterialWater;
							document.getElementById("ashLA").value = wwe.limestoneWaste;
							document.getElementById("ashLB").value = wwe.melonslicesWaste;
							document.getElementById("ashLC").value = wwe.comminutionWaste;
							document.getElementById("ashLD").value = wwe.millingMaterialWaste;
						 }
						 sumd(this,watercontentLA,watercontentLB,watercontentLC,watercontentLD,ashLA,ashLB,ashLC,ashLD,sumLA,sumLB,sumLC,sumLD,totalwatercontentL,totalashL,sumL,priceLA,priceLB,priceLC,priceLD,toaltalpriceL,getdatal);
					}
				});
}

/*AC-25*/
function queryLastMonthI(searchdate,selected){
				var mixturetype="AC-25";
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/materialsbill/totalLastMonthC",  
					data : {
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						getdatai = data.componetQC;
						var total = (parseFloat(getdatai[0].toFixed(2))+parseFloat(getdatai[1].toFixed(2))+parseFloat(getdatai[2].toFixed(2))+parseFloat(getdatai[3].toFixed(2))+parseFloat(getdatai[4].toFixed(2))+6.80+0.50).toFixed(2);
						var str= '';
						str += "<input type='text' id='IDI' style='display:none' /><form><table class='gridtable' >"+"<tr><th>"+"AC-25"+"</th><th>"+"原始用量按‰比例"+"</th><th>"+"含水率按‰比例"
						+"</th><th>"+"废灰按‰比例"+"</th><th>"+"实际用量按‰比例"+"</th><th>"+"不含税单价"+"</th><th>"+"不含税金额/元"+"</th></tr>";
						str += '<tr>';
						var tds1 = 	 '<td>' + "石粉" + '</td>'
					 			  	+'<td>' + getdatai[0].toFixed(2) + '</td>'
					 			  	+'<td>' + "<input type='text' id='watercontentIA' onkeyup='sumc(this,watercontentIA,watercontentIB,watercontentIC,ashIA,ashIB,ashIC,sumIA,sumIB,sumIC,totalwatercontentI,totalashI,sumI,priceIA,priceIB,priceIC,toaltalpriceI,getdatai);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashIA' onkeyup='sumc(this,watercontentIA,watercontentIB,watercontentIC,ashIA,ashIB,ashIC,sumIA,sumIB,sumIC,totalwatercontentI,totalashI,sumI,priceIA,priceIB,priceIC,toaltalpriceI,getdatai);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumIA' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[0] + '</td>'                                                     
				     				+'<td>' +"<input type='text' id='priceIA' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds1;
				     	str += '</tr>';
				     	str += '<tr>';
				     	var tds2 =   '<td>' + "瓜子片" + '</td>'
					 				+'<td>' + getdatai[1].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentIB' onkeyup='sumc(this,watercontentIA,watercontentIB,watercontentIC,ashIA,ashIB,ashIC,sumIA,sumIB,sumIC,totalwatercontentI,totalashI,sumI,priceIA,priceIB,priceIC,toaltalpriceI,getdatai);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashIB' onkeyup='sumc(this,watercontentIA,watercontentIB,watercontentIC,ashIA,ashIB,ashIC,sumIA,sumIB,sumIC,totalwatercontentI,totalashI,sumI,priceIA,priceIB,priceIC,toaltalpriceI,getdatai);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumIB' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[2] + '</td>'
				     				+'<td>' +"<input type='text' id='priceIB' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds2;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =   '<td>' + "细碎" + '</td>'
					 				+'<td>' + getdatai[2].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentIC' onkeyup='sumc(this,watercontentIA,watercontentIB,watercontentIC,ashIA,ashIB,ashIC,sumIA,sumIB,sumIC,totalwatercontentI,totalashI,sumI,priceIA,priceIB,priceIC,toaltalpriceI,getdatai);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashIC' onkeyup='sumc(this,watercontentIA,watercontentIB,watercontentIC,ashIA,ashIB,ashIC,sumIA,sumIB,sumIC,totalwatercontentI,totalashI,sumI,priceIA,priceIB,priceIC,toaltalpriceI,getdatai);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumIC' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[3] + '</td>'
				     				+'<td>' +"<input type='text' id='priceIC' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
						var tds4 = 	 '<td>' + "70#沥青油" + '</td>'
					 			  	+'<td>' + getdatai[3].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + getdatai[3].toFixed(2) + '</td>'
				     				+'<td>' + getulist[6] + '</td>'
				     				+'<td>' + (getdatai[2].toFixed(2)*getulist[6]/1000).toFixed(2) + '</td>'
						str += tds4;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds5 = 	 '<td>' + "乙烯焦油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
				     				+'<td>' + getulist[9] + '</td>'
				     				+'<td>' + (getulist[9]*6.80/1000).toFixed(2) + '</td>'
						str += tds5;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds6 = 	 '<td>' + "燃料油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
					 			  	+'<td>' + "" + '</td>'
						 			+'<td>' + "" + '</td>'
						 			+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
				     				+'<td>' + getulist[10] + '</td>'
				     				+'<td>' + (getulist[10]*0.50/1000).toFixed(2) + '</td>'
						str += tds6;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds7 = 	 '<td>' + "矿粉" + '</td>'
					 			  	+'<td>' + getdatai[4].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + getdatai[4].toFixed(2) + '</td>'
				     				+'<td>' + getulist[8] + '</td>'
				     				+'<td>' + (getdatai[4]*getulist[8]/1000).toFixed(2) + '</td>'
						str += tds7;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds8 = 	 '<td>' + "合计" + '</td>'
					 			  	+'<td>' + total + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalwatercontentI' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalashI' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumI' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + ""/*"<input type='text' id='searchdate' style='border-width:0;text-align:center;' placeholder='请输入'>"*/ + '</td>'
				     				+'<td>' + /*totalprice*/"<input type='text' id='toaltalpriceI' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds8;
				     	str += '</tr>';
						str += '</table></form>';
						$('#divIdI').html(str);
					}
				});
				//查询各类型含水率和废灰并赋值
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/waterwaste/queryww",  
					data :{
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						 var wwe = data.wwe;
						 if(wwe != null){
							document.getElementById("IDI").value = wwe.id;
							document.getElementById("watercontentIA").value = wwe.limestoneWater;
							document.getElementById("watercontentIB").value = wwe.melonslicesWater;
							document.getElementById("watercontentIC").value = wwe.comminutionWater;
							document.getElementById("ashIA").value = wwe.limestoneWaste;
							document.getElementById("ashIB").value = wwe.melonslicesWaste;
							document.getElementById("ashIC").value = wwe.comminutionWaste;
						 }
						 sumc(this,watercontentIA,watercontentIB,watercontentIC,ashIA,ashIB,ashIC,sumIA,sumIB,sumIC,totalwatercontentI,totalashI,sumI,priceIA,priceIB,priceIC,toaltalpriceI,getdatai);
					}
				});
}

/*35%***AC-25*/
function queryLastMonthJ(searchdate,selected){
				var mixturetype="35%***AC-25";
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/materialsbill/totalLastMonthD",  
					data : {
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						getdataj = data.componetQD;
						var total = (parseFloat(getdataj[0].toFixed(2))+parseFloat(getdataj[1].toFixed(2))+parseFloat(getdataj[2].toFixed(2))+parseFloat(getdataj[3].toFixed(2))+parseFloat(getdataj[4].toFixed(2))+6.80+0.50).toFixed(2);
						var str= '';
						str += "<input type='text' id='IDJ' style='display:none' /><form><table class='gridtable' >"+"<tr><th>"+"35%***AC-25"+"</th><th>"+"原始用量按‰比例"+"</th><th>"+"含水率按‰比例"
						+"</th><th>"+"废灰按‰比例"+"</th><th>"+"实际用量按‰比例"+"</th><th>"+"不含税单价"+"</th><th>"+"不含税金额/元"+"</th></tr>";
						str += '<tr>';
						var tds1 = 	 '<td>' + "石粉" + '</td>'
					 			  	+'<td>' + getdataj[0].toFixed(2) + '</td>'
					 			  	+'<td>' + "<input type='text' id='watercontentJA' onkeyup='sumd(this,watercontentJA,watercontentJB,watercontentJC,watercontentJD,ashJA,ashJB,ashJC,ashJD,sumJA,sumJB,sumJC,sumJD,totalwatercontentJ,totalashJ,sumJ,priceJA,priceJB,priceJC,priceJD,toaltalpriceJ,getdataj);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashJA' onkeyup='sumd(this,watercontentJA,watercontentJB,watercontentJC,watercontentJD,ashJA,ashJB,ashJC,ashJD,sumJA,sumJB,sumJC,sumJD,totalwatercontentJ,totalashJ,sumJ,priceJA,priceJB,priceJC,priceJD,toaltalpriceJ,getdataj);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumJA' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[0] + '</td>'                                                     
				     				+'<td>' +"<input type='text' id='priceJA' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds1;
				     	str += '</tr>';
				     	str += '<tr>';
				     	var tds2 =   '<td>' + "瓜子片" + '</td>'
					 				+'<td>' + getdataj[1].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentJB' onkeyup='sumd(this,watercontentJA,watercontentJB,watercontentJC,watercontentJD,ashJA,ashJB,ashJC,ashJD,sumJA,sumJB,sumJC,sumJD,totalwatercontentJ,totalashJ,sumJ,priceJA,priceJB,priceJC,priceJD,toaltalpriceJ,getdataj);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashJB' onkeyup='sumd(this,watercontentJA,watercontentJB,watercontentJC,watercontentJD,ashJA,ashJB,ashJC,ashJD,sumJA,sumJB,sumJC,sumJD,totalwatercontentJ,totalashJ,sumJ,priceJA,priceJB,priceJC,priceJD,toaltalpriceJ,getdataj);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumJB' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[2] + '</td>'
				     				+'<td>' +"<input type='text' id='priceJB' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds2;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =   '<td>' + "细碎" + '</td>'
					 				+'<td>' + getdataj[2].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentJC' onkeyup='sumd(this,watercontentJA,watercontentJB,watercontentJC,watercontentJD,ashJA,ashJB,ashJC,ashJD,sumJA,sumJB,sumJC,sumJD,totalwatercontentJ,totalashJ,sumJ,priceJA,priceJB,priceJC,priceJD,toaltalpriceJ,getdataj);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashJC' onkeyup='sumd(this,watercontentJA,watercontentJB,watercontentJC,watercontentJD,ashJA,ashJB,ashJC,ashJD,sumJA,sumJB,sumJC,sumJD,totalwatercontentJ,totalashJ,sumJ,priceJA,priceJB,priceJC,priceJD,toaltalpriceJ,getdataj);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumJC' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[3] + '</td>'
				     				+'<td>' +"<input type='text' id='priceJC' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =   '<td>' + "废旧沥青混凝土" + '</td>'
					 				+'<td>' + getdataj[3].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentJD' onkeyup='sumd(this,watercontentJA,watercontentJB,watercontentJC,watercontentJD,ashJA,ashJB,ashJC,ashJD,sumJA,sumJB,sumJC,sumJD,totalwatercontentJ,totalashJ,sumJ,priceJA,priceJB,priceJC,priceJD,toaltalpriceJ,getdataj);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashJD' onkeyup='sumd(this,watercontentJA,watercontentJB,watercontentJC,watercontentJD,ashJA,ashJB,ashJC,ashJD,sumJA,sumJB,sumJC,sumJD,totalwatercontentJ,totalashJ,sumJ,priceJA,priceJB,priceJC,priceJD,toaltalpriceJ,getdataj);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumJD' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[7] + '</td>'
				     				+'<td>' +"<input type='text' id='priceJD' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
						var tds4 = 	 '<td>' + "70#沥青油" + '</td>'
					 			  	+'<td>' + getdataj[4].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + getdataj[4].toFixed(2) + '</td>'
				     				+'<td>' + getulist[6] + '</td>'
				     				+'<td>' + (getdataj[4].toFixed(2)*getulist[6]/1000).toFixed(2) + '</td>'
						str += tds4;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds5 = 	 '<td>' + "乙烯焦油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
				     				+'<td>' + getulist[9] + '</td>'
				     				+'<td>' + (getulist[9]*6.80/1000).toFixed(2) + '</td>'
						str += tds5;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds6 = 	 '<td>' + "燃料油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
					 			  	+'<td>' + "" + '</td>'
						 			+'<td>' + "" + '</td>'
						 			+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
				     				+'<td>' + getulist[10] + '</td>'
				     				+'<td>' + (getulist[10]*0.50/1000).toFixed(2) + '</td>'
						str += tds6;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds7 = 	 '<td>' + "矿粉" + '</td>'
					 			  	+'<td>' + getdataj[5].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + getdataj[5].toFixed(2) + '</td>'
				     				+'<td>' + getulist[8] + '</td>'
				     				+'<td>' + (getdataj[5]*getulist[8]/1000).toFixed(2) + '</td>'
						str += tds7;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds8 = 	 '<td>' + "合计" + '</td>'
					 			  	+'<td>' + total + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalwatercontentJ' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalashJ' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumJ' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + ""/*"<input type='text' id='searchdate' style='border-width:0;text-align:center;' placeholder='请输入'>"*/ + '</td>'
				     				+'<td>' + /*totalprice*/"<input type='text' id='toaltalpriceJ' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds8;
				     	str += '</tr>';
						str += '</table></form>';
					    $('#divIdJ').html(str);
							}
						});
				//查询各类型含水率和废灰并赋值
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/waterwaste/queryww",  
					data :{
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						 var wwe = data.wwe;
						 if(wwe != null){
							document.getElementById("IDJ").value = wwe.id;
							document.getElementById("watercontentJA").value = wwe.limestoneWater;
							document.getElementById("watercontentJB").value = wwe.melonslicesWater;
							document.getElementById("watercontentJC").value = wwe.comminutionWater;
							document.getElementById("watercontentJD").value = wwe.millingMaterialWater;
							document.getElementById("ashJA").value = wwe.limestoneWaste;
							document.getElementById("ashJB").value = wwe.melonslicesWaste;
							document.getElementById("ashJC").value = wwe.comminutionWaste;
							document.getElementById("ashJD").value = wwe.millingMaterialWaste;
						 }
						 sumd(this,watercontentJA,watercontentJB,watercontentJC,watercontentJD,ashJA,ashJB,ashJC,ashJD,sumJA,sumJB,sumJC,sumJD,totalwatercontentJ,totalashJ,sumJ,priceJA,priceJB,priceJC,priceJD,toaltalpriceJ,getdataj);
					}
				});
}

/*40%***AC-25*/
function queryLastMonthM(searchdate,selected){
				var mixturetype="40%***AC-25";
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/materialsbill/totalLastMonthD",  
					data : {
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						getdatam = data.componetQD;
						var total = (parseFloat(getdatam[0].toFixed(2))+parseFloat(getdatam[1].toFixed(2))+parseFloat(getdatam[2].toFixed(2))+parseFloat(getdatam[3].toFixed(2))+parseFloat(getdatam[4].toFixed(2))+6.80+0.50).toFixed(2);
						var str= '';
						str += "<input type='text' id='IDM' style='display:none' /><form><table class='gridtable' >"+"<tr><th>"+"40%***AC-25"+"</th><th>"+"原始用量按‰比例"+"</th><th>"+"含水率按‰比例"
						+"</th><th>"+"废灰按‰比例"+"</th><th>"+"实际用量按‰比例"+"</th><th>"+"不含税单价"+"</th><th>"+"不含税金额/元"+"</th></tr>";
						str += '<tr>';
						var tds1 = 	 '<td>' + "石粉" + '</td>'
					 			  	+'<td>' + getdatam[0].toFixed(2) + '</td>'
					 			  	+'<td>' + "<input type='text' id='watercontentMA' onkeyup='sumd(this,watercontentMA,watercontentMB,watercontentMC,watercontentMD,ashMA,ashMB,ashMC,ashMD,sumMA,sumMB,sumMC,sumMD,totalwatercontentM,totalashM,sumM,priceMA,priceMB,priceMC,priceMD,toaltalpriceM,getdatam);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashMA' onkeyup='sumd(this,watercontentMA,watercontentMB,watercontentMC,watercontentMD,ashMA,ashMB,ashMC,ashMD,sumMA,sumMB,sumMC,sumMD,totalwatercontentM,totalashM,sumM,priceMA,priceMB,priceMC,priceMD,toaltalpriceM,getdatam);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumMA' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[0] + '</td>'                                                     
				     				+'<td>' +"<input type='text' id='priceMA' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds1;
				     	str += '</tr>';
				     	str += '<tr>';
				     	var tds2 =   '<td>' + "瓜子片" + '</td>'
					 				+'<td>' + getdatam[1].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentMB' onkeyup='sumd(this,watercontentMA,watercontentMB,watercontentMC,watercontentMD,ashMA,ashMB,ashMC,ashMD,sumMA,sumMB,sumMC,sumMD,totalwatercontentM,totalashM,sumM,priceMA,priceMB,priceMC,priceMD,toaltalpriceM,getdatam);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashMB' onkeyup='sumd(this,watercontentMA,watercontentMB,watercontentMC,watercontentMD,ashMA,ashMB,ashMC,ashMD,sumMA,sumMB,sumMC,sumMD,totalwatercontentM,totalashM,sumM,priceMA,priceMB,priceMC,priceMD,toaltalpriceM,getdatam);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumMB' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[2] + '</td>'
				     				+'<td>' +"<input type='text' id='priceMB' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds2;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =   '<td>' + "细碎" + '</td>'
					 				+'<td>' + getdatam[2].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentMC' onkeyup='sumd(this,watercontentMA,watercontentMB,watercontentMC,watercontentMD,ashMA,ashMB,ashMC,ashMD,sumMA,sumMB,sumMC,sumMD,totalwatercontentM,totalashM,sumM,priceMA,priceMB,priceMC,priceMD,toaltalpriceM,getdatam);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashMC' onkeyup='sumd(this,watercontentMA,watercontentMB,watercontentMC,watercontentMD,ashMA,ashMB,ashMC,ashMD,sumMA,sumMB,sumMC,sumMD,totalwatercontentM,totalashM,sumM,priceMA,priceMB,priceMC,priceMD,toaltalpriceM,getdatam);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumMC' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[3] + '</td>'
				     				+'<td>' +"<input type='text' id='priceMC' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =   '<td>' + "废旧沥青混凝土" + '</td>'
					 				+'<td>' + getdatam[3].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentMD' onkeyup='sumd(this,watercontentMA,watercontentMB,watercontentMC,watercontentMD,ashMA,ashMB,ashMC,ashMD,sumMA,sumMB,sumMC,sumMD,totalwatercontentM,totalashM,sumM,priceMA,priceMB,priceMC,priceMD,toaltalpriceM,getdatam);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashMD' onkeyup='sumd(this,watercontentMA,watercontentMB,watercontentMC,watercontentMD,ashMA,ashMB,ashMC,ashMD,sumMA,sumMB,sumMC,sumMD,totalwatercontentM,totalashM,sumM,priceMA,priceMB,priceMC,priceMD,toaltalpriceM,getdatam);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumMD' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[7] + '</td>'
				     				+'<td>' +"<input type='text' id='priceMD' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
						var tds4 = 	 '<td>' + "70#沥青油" + '</td>'
					 			  	+'<td>' + getdatam[4].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + getdatam[4].toFixed(2) + '</td>'
				     				+'<td>' + getulist[6] + '</td>'
				     				+'<td>' + (getdatam[4].toFixed(2)*getulist[6]/1000).toFixed(2) + '</td>'
						str += tds4;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds5 = 	 '<td>' + "乙烯焦油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
				     				+'<td>' + getulist[9] + '</td>'
				     				+'<td>' + (getulist[9]*6.80/1000).toFixed(2) + '</td>'
						str += tds5;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds6 = 	 '<td>' + "燃料油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
					 			  	+'<td>' + "" + '</td>'
						 			+'<td>' + "" + '</td>'
						 			+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
				     				+'<td>' + getulist[10] + '</td>'
				     				+'<td>' + (getulist[10]*0.50/1000).toFixed(2) + '</td>'
						str += tds6;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds7 = 	 '<td>' + "矿粉" + '</td>'
					 			  	+'<td>' + getdatam[5].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + getdatam[5].toFixed(2) + '</td>'
				     				+'<td>' + getulist[8] + '</td>'
				     				+'<td>' + (getdatam[5]*getulist[8]/1000).toFixed(2) + '</td>'
						str += tds7;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds8 = 	 '<td>' + "合计" + '</td>'
					 			  	+'<td>' + total + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalwatercontentM' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalashM' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumM' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + ""/*"<input type='text' id='searchdate' style='border-width:0;text-align:center;' placeholder='请输入'>"*/ + '</td>'
				     				+'<td>' + /*totalprice*/"<input type='text' id='toaltalpriceM' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds8;
				     	str += '</tr>';
						str += '</table></form>';
					    $('#divIdM').html(str);
							}
						});
				//查询各类型含水率和废灰并赋值
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/waterwaste/queryww",  
					data :{
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						 var wwe = data.wwe;
						 if(wwe != null){
							document.getElementById("IDM").value = wwe.id;
							document.getElementById("watercontentMA").value = wwe.limestoneWater;
							document.getElementById("watercontentMB").value = wwe.melonslicesWater;
							document.getElementById("watercontentMC").value = wwe.comminutionWater;
							document.getElementById("watercontentMD").value = wwe.millingMaterialWater;
							document.getElementById("ashMA").value = wwe.limestoneWaste;
							document.getElementById("ashMB").value = wwe.melonslicesWaste;
							document.getElementById("ashMC").value = wwe.comminutionWaste;
							document.getElementById("ashMD").value = wwe.millingMaterialWaste;
						 }
						 sumd(this,watercontentMA,watercontentMB,watercontentMC,watercontentMD,ashMA,ashMB,ashMC,ashMD,sumMA,sumMB,sumMC,sumMD,totalwatercontentM,totalashM,sumM,priceMA,priceMB,priceMC,priceMD,toaltalpriceM,getdatam);
					}
				});
}


/*SBS-13(玄武岩)*/
function queryLastMonthN(searchdate,selected){
				var mixturetype="SBS-13(玄武岩)";
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/materialsbill/totalLastMonthE",  
					data : {
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						getdatan = data.componetQE;
						/*var total = parseFloat(getdata[0].toFixed(2))+parseFloat(getdata[1].toFixed(2))+parseFloat(getdata[2].toFixed(2))+parseFloat(getdata[3].toFixed(2))+parseFloat(getdata[4].toFixed(2))+6.80+0.50*/
						/*var totalprice =  (parseFloat(getdata[0].toFixed(2)*getulist[0]/1000)
										+ parseFloat(getdata[1].toFixed(2)*getulist[2]/1000)
										+ parseFloat(getdata[2].toFixed(2)*getulist[7]/1000)
										+ parseFloat(getdata[3].toFixed(2)*getulist[6]/1000)
										+ parseFloat(getulist[9]*6.80/1000)
										+ parseFloat(getulist[10]*0.50/1000)
										+ parseFloat(getdata[4].toFixed(2)*getulist[8]/1000)).toFixed(2);*/
						var str= '';
						str += "<input type='text' id='IDN' style='display:none' /><form><table class='gridtable' >"+"<tr><th>"+"SBS-13(玄武岩)"+"</th><th>"+"原始用量按‰比例"+"</th><th>"+"含水率按‰比例"
						+"</th><th>"+"废灰按‰比例"+"</th><th>"+"实际用量按‰比例"+"</th><th>"+"不含税单价"+"</th><th>"+"不含税金额/元"+"</th></tr>";
						str += '<tr>';
						var tds1 = 	 '<td>' + "石粉" + '</td>'
					 			  	+'<td>' + getdatan[0].toFixed(2) + '</td>'
					 			  	+'<td>' + "<input type='text' id='watercontentNA' onkeyup='sume(this,watercontentNA,watercontentNB,watercontentNC,ashNA,ashNB,ashNC,agentNE,agent2NE,sumNA,sumNB,sumNC,totalwatercontentN,totalashN,sumN,priceNA,priceNB,priceNC,priceNE,toaltalpriceN,totalN,getdatan);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashNA' onkeyup='sume(this,watercontentNA,watercontentNB,watercontentNC,ashNA,ashNB,ashNC,agentNE,agent2NE,sumNA,sumNB,sumNC,totalwatercontentN,totalashN,sumN,priceNA,priceNB,priceNC,priceNE,toaltalpriceN,totalN,getdatan);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumNA' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[0] + '</td>'                                                     
				     				+'<td>' +"<input type='text' id='priceNA' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds1;
				     	str += '</tr>';
				     	str += '<tr>';
				     	var tds2 =   '<td>' + "高料2#" + '</td>'
					 				+'<td>' + getdatan[1].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentNB' onkeyup='sume(this,watercontentNA,watercontentNB,watercontentNC,ashNA,ashNB,ashNC,agentNE,agent2NE,sumNA,sumNB,sumNC,totalwatercontentN,totalashN,sumN,priceNA,priceNB,priceNC,priceNE,toaltalpriceN,totalN,getdatan);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashNB' onkeyup='sume(this,watercontentNA,watercontentNB,watercontentNC,ashNA,ashNB,ashNC,agentNE,agent2NE,sumNA,sumNB,sumNC,totalwatercontentN,totalashN,sumN,priceNA,priceNB,priceNC,priceNE,toaltalpriceN,totalN,getdatan);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumNB' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[4] + '</td>'
				     				+'<td>' +"<input type='text' id='priceNB' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds2;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =   '<td>' + "高料1#" + '</td>'
					 				+'<td>' + getdatan[2].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentNC' onkeyup='sume(this,watercontentNA,watercontentNB,watercontentNC,ashNA,ashNB,ashNC,agentNE,agent2NE,sumNA,sumNB,sumNC,totalwatercontentN,totalashN,sumN,priceNA,priceNB,priceNC,priceNE,toaltalpriceN,totalN,getdatan);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashNC' onkeyup='sume(this,watercontentNA,watercontentNB,watercontentNC,ashNA,ashNB,ashNC,agentNE,agent2NE,sumNA,sumNB,sumNC,totalwatercontentN,totalashN,sumN,priceNA,priceNB,priceNC,priceNE,toaltalpriceN,totalN,getdatan);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumNC' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[5] + '</td>'
				     				+'<td>' +"<input type='text' id='priceNC' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =  '<td>' + "改性沥青油" + '</td>'
					 			  	+'<td>' + getdatan[3].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + getdatan[3].toFixed(2) + '</td>'
				     				+'<td>' + getulist[13] + '</td>'
				     				+'<td>' + (getdatan[3].toFixed(2)*getulist[13]/1000).toFixed(2) + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
						var tds4 = 	 '<td>' + "乙烯焦油" + '</td>'
									+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
				     				+'<td>' + getulist[9] + '</td>'
				     				+'<td>' + (getulist[9]*6.80/1000).toFixed(2) + '</td>'
						str += tds4;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds5 = 	 '<td>' + "燃料油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
				     				+'<td>' + getulist[10] + '</td>'
				     				+'<td>' + (getulist[10]*0.50/1000).toFixed(2) + '</td>'
						str += tds5;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds6 = 	 '<td>' + "矿粉" + '</td>'
									+'<td>' + getdatan[4].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
						 			+'<td>' + "" + '</td>'
						 			+'<td>' + getdatan[4].toFixed(2) + '</td>'
				     				+'<td>' + getulist[8] + '</td>'
				     				+'<td>' + (getdatan[4]*getulist[8]/1000).toFixed(2) + '</td>'
						str += tds6;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds7 = 	 '<td>' + "抗剥落剂" + '</td>'
									+'<td>' + "<input type='text' id='agentNE' onkeyup='sume(this,watercontentNA,watercontentNB,watercontentNC,ashNA,ashNB,ashNC,agentNE,agent2NE,sumNA,sumNB,sumNC,totalwatercontentN,totalashN,sumN,priceNA,priceNB,priceNC,priceNE,toaltalpriceN,totalN,getdatan);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "<input type='text' id='agent2NE' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[11] + '</td>'
				     				+'<td>' +"<input type='text' id='priceNE' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds7;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds8 = 	 '<td>' + "合计" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalN' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalwatercontentN' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalashN' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumN' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + ""/*"<input type='text' id='searchdate' style='border-width:0;text-align:center;' placeholder='请输入'>"*/ + '</td>'
				     				+'<td>' + /*totalprice*/"<input type='text' id='toaltalpriceN' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds8;
				     	str += '</tr>';
						str += '</table></form>';
					    $('#divIdN').html(str);
							}
						});
				//查询各类型含水率和废灰并赋值
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/waterwaste/queryww",  
					data :{
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						 var wwe = data.wwe;
						 if(wwe != null){
							document.getElementById("IDN").value = wwe.id;
							document.getElementById("watercontentNA").value = wwe.limestoneWater;
							document.getElementById("watercontentNB").value = wwe.highMaterial2Water;
							document.getElementById("watercontentNC").value = wwe.highMaterial1Water;
							document.getElementById("ashNA").value = wwe.limestoneWaste;
							document.getElementById("ashNB").value = wwe.highMaterial2Waste;
							document.getElementById("ashNC").value = wwe.highMaterial1Waste;
							document.getElementById("agentNE").value = wwe.antistrippingAgent;
						 }
						 sume(this,watercontentNA,watercontentNB,watercontentNC,ashNA,ashNB,ashNC,agentNE,agent2NE,sumNA,sumNB,sumNC,totalwatercontentN,totalashN,sumN,priceNA,priceNB,priceNC,priceNE,toaltalpriceN,totalN,getdatan);
					}
				});
}


/*AC-13(玄武岩)*/
function queryLastMonthO(searchdate,selected){
				var mixturetype="AC-13(玄武岩)";
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/materialsbill/totalLastMonthE",  
					data : {
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						getdatao = data.componetQE;
						/*var total = parseFloat(getdata[0].toFixed(2))+parseFloat(getdata[1].toFixed(2))+parseFloat(getdata[2].toFixed(2))+parseFloat(getdata[3].toFixed(2))+parseFloat(getdata[4].toFixed(2))+6.80+0.50*/
						/*var totalprice =  (parseFloat(getdata[0].toFixed(2)*getulist[0]/1000)
										+ parseFloat(getdata[1].toFixed(2)*getulist[2]/1000)
										+ parseFloat(getdata[2].toFixed(2)*getulist[7]/1000)
										+ parseFloat(getdata[3].toFixed(2)*getulist[6]/1000)
										+ parseFloat(getulist[9]*6.80/1000)
										+ parseFloat(getulist[10]*0.50/1000)
										+ parseFloat(getdata[4].toFixed(2)*getulist[8]/1000)).toFixed(2);*/
						var str= '';
						str += "<input type='text' id='IDO' style='display:none' /><form><table class='gridtable' >"+"<tr><th>"+"AC-13(玄武岩)"+"</th><th>"+"原始用量按‰比例"+"</th><th>"+"含水率按‰比例"
						+"</th><th>"+"废灰按‰比例"+"</th><th>"+"实际用量按‰比例"+"</th><th>"+"不含税单价"+"</th><th>"+"不含税金额/元"+"</th></tr>";
						str += '<tr>';
						var tds1 = 	 '<td>' + "石粉" + '</td>'
					 			  	+'<td>' + getdatao[0].toFixed(2) + '</td>'
					 			  	+'<td>' + "<input type='text' id='watercontentOA' onkeyup='sumf(this,watercontentOA,watercontentOB,watercontentOC,ashOA,ashOB,ashOC,agentOE,agent2OE,sumOA,sumOB,sumOC,totalwatercontentO,totalashO,sumO,priceOA,priceOB,priceOC,priceOE,toaltalpriceO,totalO,getdatao);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashOA' onkeyup='sumf(this,watercontentOA,watercontentOB,watercontentOC,ashOA,ashOB,ashOC,agentOE,agent2OE,sumOA,sumOB,sumOC,totalwatercontentO,totalashO,sumO,priceOA,priceOB,priceOC,priceOE,toaltalpriceO,totalO,getdatao);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumOA' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getdatao[0] + '</td>'                                                     
				     				+'<td>' +"<input type='text' id='priceOA' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds1;
				     	str += '</tr>';
				     	str += '<tr>';
				     	var tds2 =   '<td>' + "高料2#" + '</td>'
					 				+'<td>' + getdatao[1].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentOB' onkeyup='sumf(this,watercontentOA,watercontentOB,watercontentOC,ashOA,ashOB,ashOC,agentOE,agent2OE,sumOA,sumOB,sumOC,totalwatercontentO,totalashO,sumO,priceOA,priceOB,priceOC,priceOE,toaltalpriceO,totalO,getdatao);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashOB' onkeyup='sumf(this,watercontentOA,watercontentOB,watercontentOC,ashOA,ashOB,ashOC,agentOE,agent2OE,sumOA,sumOB,sumOC,totalwatercontentO,totalashO,sumO,priceOA,priceOB,priceOC,priceOE,toaltalpriceO,totalO,getdatao);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumOB' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[4] + '</td>'
				     				+'<td>' +"<input type='text' id='priceOB' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds2;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =   '<td>' + "高料1#" + '</td>'
					 				+'<td>' + getdatao[2].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentOC' onkeyup='sumf(this,watercontentOA,watercontentOB,watercontentOC,ashOA,ashOB,ashOC,agentOE,agent2OE,sumOA,sumOB,sumOC,totalwatercontentO,totalashO,sumO,priceOA,priceOB,priceOC,priceOE,toaltalpriceO,totalO,getdatao);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashOC' onkeyup='sumf(this,watercontentOA,watercontentOB,watercontentOC,ashOA,ashOB,ashOC,agentOE,agent2OE,sumOA,sumOB,sumOC,totalwatercontentO,totalashO,sumO,priceOA,priceOB,priceOC,priceOE,toaltalpriceO,totalO,getdatao);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumOC' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[5] + '</td>'
				     				+'<td>' +"<input type='text' id='priceOC' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =   '<td>' + "70#沥青油" + '</td>'
				     				+'<td>' + getdatao[3].toFixed(2) + '</td>'
					 				+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 				+'<td>' + getdatao[3].toFixed(2) + '</td>'
				     				+'<td>' + getulist[6] + '</td>'
				     				+'<td>' + (getdatao[3].toFixed(2)*getulist[6]/1000).toFixed(2) + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
						var tds4 = 	 '<td>' + "乙烯焦油" + '</td>'
									+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
				     				+'<td>' + getulist[9] + '</td>'
				     				+'<td>' + (getulist[9]*6.80/1000).toFixed(2) + '</td>'
						str += tds4;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds5 = 	 '<td>' + "燃料油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
				     				+'<td>' + getulist[10] + '</td>'
				     				+'<td>' + (getulist[10]*0.50/1000).toFixed(2) + '</td>'
						str += tds5;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds6 = 	 '<td>' + "矿粉" + '</td>'
									+'<td>' + getdatao[4].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
						 			+'<td>' + "" + '</td>'
						 			+'<td>' + getdatao[4].toFixed(2) + '</td>'
				     				+'<td>' + getulist[8] + '</td>'
				     				+'<td>' + (getdatao[4]*getulist[8]/1000).toFixed(2) + '</td>'
						str += tds6;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds7 = 	 '<td>' + "抗剥落剂" + '</td>'
									+'<td>' + "<input type='text' id='agentOE' onkeyup='sumf(this,watercontentOA,watercontentOB,watercontentOC,ashOA,ashOB,ashOC,agentOE,agent2OE,sumOA,sumOB,sumOC,totalwatercontentO,totalashO,sumO,priceOA,priceOB,priceOC,priceOE,toaltalpriceO,totalO,getdatao);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "<input type='text' id='agent2OE' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[11] + '</td>'
				     				+'<td>' +"<input type='text' id='priceOE' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds7;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds8 = 	 '<td>' + "合计" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalO' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalwatercontentO' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalashO' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumO' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + ""/*"<input type='text' id='searchdate' style='border-width:0;text-align:center;' placeholder='请输入'>"*/ + '</td>'
				     				+'<td>' + /*totalprice*/"<input type='text' id='toaltalpriceO' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds8;
				     	str += '</tr>';
						str += '</table></form>';
					    $('#divIdO').html(str);
							}
						});
				//查询各类型含水率和废灰并赋值
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/waterwaste/queryww",  
					data :{
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						 var wwe = data.wwe;
						 if(wwe != null){
							document.getElementById("IDO").value = wwe.id;
							document.getElementById("watercontentOA").value = wwe.limestoneWater;
							document.getElementById("watercontentOB").value = wwe.highMaterial2Water;
							document.getElementById("watercontentOC").value = wwe.highMaterial1Water;
							document.getElementById("ashOA").value = wwe.limestoneWaste;
							document.getElementById("ashOB").value = wwe.highMaterial2Waste;
							document.getElementById("ashOC").value = wwe.highMaterial1Waste;
							document.getElementById("agentOE").value = wwe.antistrippingAgent;
						 }
						 sumf(this,watercontentOA,watercontentOB,watercontentOC,ashOA,ashOB,ashOC,agentOE,agent2OE,sumOA,sumOB,sumOC,totalwatercontentO,totalashO,sumO,priceOA,priceOB,priceOC,priceOE,toaltalpriceO,totalO,getdatao);
					}
				});
}

/*SMA-13(改性沥青油)*/
function queryLastMonthP(searchdate,selected){
				var mixturetype="SMA-13(改性沥青油)";
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/materialsbill/totalLastMonthE",  
					data : {
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						getdatap = data.componetQE;
						/*var total = parseFloat(getdata[0].toFixed(2))+parseFloat(getdata[1].toFixed(2))+parseFloat(getdata[2].toFixed(2))+parseFloat(getdata[3].toFixed(2))+parseFloat(getdata[4].toFixed(2))+6.80+0.50*/
						/*var totalprice =  (parseFloat(getdata[0].toFixed(2)*getulist[0]/1000)
										+ parseFloat(getdata[1].toFixed(2)*getulist[2]/1000)
										+ parseFloat(getdata[2].toFixed(2)*getulist[7]/1000)
										+ parseFloat(getdata[3].toFixed(2)*getulist[6]/1000)
										+ parseFloat(getulist[9]*6.80/1000)
										+ parseFloat(getulist[10]*0.50/1000)
										+ parseFloat(getdata[4].toFixed(2)*getulist[8]/1000)).toFixed(2);*/
						var str= '';
						str += "<input type='text' id='IDP' style='display:none' /><form><table class='gridtable' >"+"<tr><th>"+"SMA-13(改性沥青油)"+"</th><th>"+"原始用量按‰比例"+"</th><th>"+"含水率按‰比例"
						+"</th><th>"+"废灰按‰比例"+"</th><th>"+"实际用量按‰比例"+"</th><th>"+"不含税单价"+"</th><th>"+"不含税金额/元"+"</th></tr>";
						str += '<tr>';
						var tds1 = 	 '<td>' + "石粉" + '</td>'
					 			  	+'<td>' + getdatap[0].toFixed(2) + '</td>'
					 			  	+'<td>' + "<input type='text' id='watercontentPA' onkeyup='sumi(this,watercontentPA,watercontentPB,watercontentPC,ashPA,ashPB,ashPC,woodPE,wood2PE,agentPF,agent2PF,sumPA,sumPB,sumPC,totalwatercontentP,totalashP,sumP,pricePA,pricePB,pricePC,pricePE,pricePF,toaltalpriceP,totalP,getdatap);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashPA' onkeyup='sumi(this,watercontentPA,watercontentPB,watercontentPC,ashPA,ashPB,ashPC,woodPE,wood2PE,agentPF,agent2PF,sumPA,sumPB,sumPC,totalwatercontentP,totalashP,sumP,pricePA,pricePB,pricePC,pricePE,pricePF,toaltalpriceP,totalP,getdatap);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumPA' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[0] + '</td>'                                                     
				     				+'<td>' +"<input type='text' id='pricePA' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds1;
				     	str += '</tr>';
				     	str += '<tr>';
				     	var tds2 =   '<td>' + "高料2#" + '</td>'
					 				+'<td>' + getdatap[1].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentPB' onkeyup='sumi(this,watercontentPA,watercontentPB,watercontentPC,ashPA,ashPB,ashPC,woodPE,wood2PE,agentPF,agent2PF,sumPA,sumPB,sumPC,totalwatercontentP,totalashP,sumP,pricePA,pricePB,pricePC,pricePE,pricePF,toaltalpriceP,totalP,getdatap);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashPB' onkeyup='sumi(this,watercontentPA,watercontentPB,watercontentPC,ashPA,ashPB,ashPC,woodPE,wood2PE,agentPF,agent2PF,sumPA,sumPB,sumPC,totalwatercontentP,totalashP,sumP,pricePA,pricePB,pricePC,pricePE,pricePF,toaltalpriceP,totalP,getdatap);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumPB' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[4] + '</td>'
				     				+'<td>' +"<input type='text' id='pricePB' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds2;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =   '<td>' + "高料1#" + '</td>'
					 				+'<td>' + getdatap[2].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentPC' onkeyup='sumi(this,watercontentPA,watercontentPB,watercontentPC,ashPA,ashPB,ashPC,woodPE,wood2PE,agentPF,agent2PF,sumPA,sumPB,sumPC,totalwatercontentP,totalashP,sumP,pricePA,pricePB,pricePC,pricePE,pricePF,toaltalpriceP,totalP,getdatap);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashPC' onkeyup='sumi(this,watercontentPA,watercontentPB,watercontentPC,ashPA,ashPB,ashPC,woodPE,wood2PE,agentPF,agent2PF,sumPA,sumPB,sumPC,totalwatercontentP,totalashP,sumP,pricePA,pricePB,pricePC,pricePE,pricePF,toaltalpriceP,totalP,getdatap);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumPC' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[5] + '</td>'
				     				+'<td>' +"<input type='text' id='pricePC' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =   '<td>' + "改性沥青油" + '</td>'
				     				+'<td>' + getdatap[3].toFixed(2) + '</td>'
					 				+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 				+'<td>' + getdatap[3].toFixed(2) + '</td>'
				     				+'<td>' + getulist[13] + '</td>'
				     				+'<td>' + (getdatap[3].toFixed(2)*getulist[13]/1000).toFixed(2) + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
						var tds4 = 	 '<td>' + "乙烯焦油" + '</td>'
									+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
				     				+'<td>' + getulist[9] + '</td>'
				     				+'<td>' + (getulist[9]*6.80/1000).toFixed(2) + '</td>'
						str += tds4;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds5 = 	 '<td>' + "燃料油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
				     				+'<td>' + getulist[10] + '</td>'
				     				+'<td>' + (getulist[10]*0.50/1000).toFixed(2) + '</td>'
						str += tds5;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds6 = 	 '<td>' + "矿粉" + '</td>'
									+'<td>' + getdatap[4].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
						 			+'<td>' + "" + '</td>'
						 			+'<td>' + getdatap[4].toFixed(2) + '</td>'
				     				+'<td>' + getulist[8] + '</td>'
				     				+'<td>' + (getdatap[4]*getulist[8]/1000).toFixed(2) + '</td>'
						str += tds6;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds7 = 	 '<td>' + "木制纤维" + '</td>'
									+'<td>' + "<input type='text' id='woodPE' onkeyup='sumi(this,watercontentPA,watercontentPB,watercontentPC,ashPA,ashPB,ashPC,woodPE,wood2PE,agentPF,agent2PF,sumPA,sumPB,sumPC,totalwatercontentP,totalashP,sumP,pricePA,pricePB,pricePC,pricePE,pricePF,toaltalpriceP,totalP,getdatap);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "<input type='text' id='wood2PE' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[12] + '</td>'
				     				+'<td>' +"<input type='text' id='pricePE' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds7;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds8 = 	 '<td>' + "抗剥落剂" + '</td>'
									+'<td>' + "<input type='text' id='agentPF' onkeyup='sumi(this,watercontentPA,watercontentPB,watercontentPC,ashPA,ashPB,ashPC,woodPE,wood2PE,agentPF,agent2PF,sumPA,sumPB,sumPC,totalwatercontentP,totalashP,sumP,pricePA,pricePB,pricePC,pricePE,pricePF,toaltalpriceP,totalP,getdatap);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "<input type='text' id='agent2PF' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[11] + '</td>'
				     				+'<td>' +"<input type='text' id='pricePF' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds8;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds8 = 	 '<td>' + "合计" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalP' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalwatercontentP' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalashP' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumP' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + ""/*"<input type='text' id='searchdate' style='border-width:0;text-align:center;' placeholder='请输入'>"*/ + '</td>'
				     				+'<td>' + /*totalprice*/"<input type='text' id='toaltalpriceP' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds8;
				     	str += '</tr>';
						str += '</table></form>';
					    $('#divIdP').html(str);
							}
						});
				//查询各类型含水率和废灰并赋值
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/waterwaste/queryww",  
					data :{
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						 var wwe = data.wwe;
						 if(wwe != null){
							document.getElementById("IDP").value = wwe.id;
							document.getElementById("watercontentPA").value = wwe.limestoneWater;
							document.getElementById("watercontentPB").value = wwe.highMaterial2Water;
							document.getElementById("watercontentPC").value = wwe.highMaterial1Water;
							document.getElementById("ashPA").value = wwe.limestoneWaste;
							document.getElementById("ashPB").value = wwe.highMaterial2Waste;
							document.getElementById("ashPC").value = wwe.highMaterial1Waste;
							document.getElementById("woodPE").value = wwe.woodFiber;
							document.getElementById("agentPF").value = wwe.antistrippingAgent;
						 }
						 sumi(this,watercontentPA,watercontentPB,watercontentPC,ashPA,ashPB,ashPC,woodPE,wood2PE,agentPF,agent2PF,sumPA,sumPB,sumPC,totalwatercontentP,totalashP,sumP,pricePA,pricePB,pricePC,pricePE,pricePF,toaltalpriceP,totalP,getdatap);
					}
				});
}


/*SMA-13(70#沥青油)*/
function queryLastMonthQ(searchdate,selected){
				var mixturetype="SMA-13(70#沥青油)";
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/materialsbill/totalLastMonthE",  
					data : {
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						getdataq = data.componetQE;
						/*var total = parseFloat(getdata[0].toFixed(2))+parseFloat(getdata[1].toFixed(2))+parseFloat(getdata[2].toFixed(2))+parseFloat(getdata[3].toFixed(2))+parseFloat(getdata[4].toFixed(2))+6.80+0.50*/
						/*var totalprice =  (parseFloat(getdata[0].toFixed(2)*getulist[0]/1000)
										+ parseFloat(getdata[1].toFixed(2)*getulist[2]/1000)
										+ parseFloat(getdata[2].toFixed(2)*getulist[7]/1000)
										+ parseFloat(getdata[3].toFixed(2)*getulist[6]/1000)
										+ parseFloat(getulist[9]*6.80/1000)
										+ parseFloat(getulist[10]*0.50/1000)
										+ parseFloat(getdata[4].toFixed(2)*getulist[8]/1000)).toFixed(2);*/
						var str= '';
						str += "<input type='text' id='IDQ' style='display:none' /><form><table class='gridtable' >"+"<tr><th>"+"SMA-13(70#沥青油)"+"</th><th>"+"原始用量按‰比例"+"</th><th>"+"含水率按‰比例"
						+"</th><th>"+"废灰按‰比例"+"</th><th>"+"实际用量按‰比例"+"</th><th>"+"不含税单价"+"</th><th>"+"不含税金额/元"+"</th></tr>";
						str += '<tr>';
						var tds1 = 	 '<td>' + "石粉" + '</td>'
					 			  	+'<td>' + getdataq[0].toFixed(2) + '</td>'
					 			  	+'<td>' + "<input type='text' id='watercontentQA' onkeyup='sumg(this,watercontentQA,watercontentQB,watercontentQC,ashQA,ashQB,ashQC,woodQD,wood2QD,agentQE,agent2QE,sumQA,sumQB,sumQC,totalwatercontentQ,totalashQ,sumQ,priceQA,priceQB,priceQC,priceQD,priceQE,toaltalpriceQ,totalQ,getdataq);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashQA' onkeyup='sumg(this,watercontentQA,watercontentQB,watercontentQC,ashQA,ashQB,ashQC,woodQD,wood2QD,agentQE,agent2QE,sumQA,sumQB,sumQC,totalwatercontentQ,totalashQ,sumQ,priceQA,priceQB,priceQC,priceQD,priceQE,toaltalpriceQ,totalQ,getdataq);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumQA' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[0] + '</td>'                                                     
				     				+'<td>' +"<input type='text' id='priceQA' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds1;
				     	str += '</tr>';
				     	str += '<tr>';
				     	var tds2 =   '<td>' + "高料2#" + '</td>'
					 				+'<td>' + getdataq[1].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentQB' onkeyup='sumg(this,watercontentQA,watercontentQB,watercontentQC,ashQA,ashQB,ashQC,woodQD,wood2QD,agentQE,agent2QE,sumQA,sumQB,sumQC,totalwatercontentQ,totalashQ,sumQ,priceQA,priceQB,priceQC,priceQD,priceQE,toaltalpriceQ,totalQ,getdataq);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashQB' onkeyup='sumg(this,watercontentQA,watercontentQB,watercontentQC,ashQA,ashQB,ashQC,woodQD,wood2QD,agentQE,agent2QE,sumQA,sumQB,sumQC,totalwatercontentQ,totalashQ,sumQ,priceQA,priceQB,priceQC,priceQD,priceQE,toaltalpriceQ,totalQ,getdataq);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumQB' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[4] + '</td>'
				     				+'<td>' +"<input type='text' id='priceQB' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds2;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =   '<td>' + "高料1#" + '</td>'
					 				+'<td>' + getdataq[2].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentQC' onkeyup='sumg(this,watercontentQA,watercontentQB,watercontentQC,ashQA,ashQB,ashQC,woodQD,wood2QD,agentQE,agent2QE,sumQA,sumQB,sumQC,totalwatercontentQ,totalashQ,sumQ,priceQA,priceQB,priceQC,priceQD,priceQE,toaltalpriceQ,totalQ,getdataq);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashQC' onkeyup='sumg(this,watercontentQA,watercontentQB,watercontentQC,ashQA,ashQB,ashQC,woodQD,wood2QD,agentQE,agent2QE,sumQA,sumQB,sumQC,totalwatercontentQ,totalashQ,sumQ,priceQA,priceQB,priceQC,priceQD,priceQE,toaltalpriceQ,totalQ,getdataq);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumQC' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[5] + '</td>'
				     				+'<td>' +"<input type='text' id='priceQC' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =   '<td>' + "70#沥青油" + '</td>'
				     				+'<td>' + getdataq[3].toFixed(2) + '</td>'
					 				+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 				+'<td>' + getdataq[3].toFixed(2) + '</td>'
				     				+'<td>' + getulist[6] + '</td>'
				     				+'<td>' + (getdataq[3].toFixed(2)*getulist[6]/1000).toFixed(2) + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
						var tds4 = 	 '<td>' + "乙烯焦油" + '</td>'
									+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
				     				+'<td>' + getulist[9] + '</td>'
				     				+'<td>' + (getulist[9]*6.80/1000).toFixed(2) + '</td>'
						str += tds4;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds5 = 	 '<td>' + "燃料油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
				     				+'<td>' + getulist[10] + '</td>'
				     				+'<td>' + (getulist[10]*0.50/1000).toFixed(2) + '</td>'
						str += tds5;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds6 = 	 '<td>' + "矿粉" + '</td>'
									+'<td>' + getdataq[4].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
						 			+'<td>' + "" + '</td>'
						 			+'<td>' + getdataq[4].toFixed(2) + '</td>'
				     				+'<td>' + getulist[8] + '</td>'
				     				+'<td>' + (getdataq[4]*getulist[8]/1000).toFixed(2) + '</td>'
						str += tds6;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds7 = 	 '<td>' + "木制纤维" + '</td>'
									+'<td>' + "<input type='text' id='woodQD' onkeyup='sumg(this,watercontentQA,watercontentQB,watercontentQC,ashQA,ashQB,ashQC,woodQD,wood2QD,agentQE,agent2QE,sumQA,sumQB,sumQC,totalwatercontentQ,totalashQ,sumQ,priceQA,priceQB,priceQC,priceQD,priceQE,toaltalpriceQ,totalQ,getdataq);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "<input type='text' id='wood2QD' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[12] + '</td>'
				     				+'<td>' +"<input type='text' id='priceQD' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds7;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds8 = 	 '<td>' + "抗剥落剂" + '</td>'
									+'<td>' + "<input type='text' id='agentQE' onkeyup='sumg(this,watercontentQA,watercontentQB,watercontentQC,ashQA,ashQB,ashQC,woodQD,wood2QD,agentQE,agent2QE,sumQA,sumQB,sumQC,totalwatercontentQ,totalashQ,sumQ,priceQA,priceQB,priceQC,priceQD,priceQE,toaltalpriceQ,totalQ,getdataq);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "<input type='text' id='agent2QE' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[11] + '</td>'
				     				+'<td>' +"<input type='text' id='priceQE' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds8;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds8 = 	 '<td>' + "合计" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalQ' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalwatercontentQ' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalashQ' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumQ' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + ""/*"<input type='text' id='searchdate' style='border-width:0;text-align:center;' placeholder='请输入'>"*/ + '</td>'
				     				+'<td>' + /*totalprice*/"<input type='text' id='toaltalpriceQ' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds8;
				     	str += '</tr>';
						str += '</table></form>';
					    $('#divIdQ').html(str);
							}
						});
				//查询各类型含水率和废灰并赋值
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/waterwaste/queryww",  
					data :{
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						 var wwe = data.wwe;
						 if(wwe != null){
							document.getElementById("IDQ").value = wwe.id;
							document.getElementById("watercontentQA").value = wwe.limestoneWater;
							document.getElementById("watercontentQB").value = wwe.highMaterial2Water;
							document.getElementById("watercontentQC").value = wwe.highMaterial1Water;
							document.getElementById("ashQA").value = wwe.limestoneWaste;
							document.getElementById("ashQB").value = wwe.highMaterial2Waste;
							document.getElementById("ashQC").value = wwe.highMaterial1Waste;
							document.getElementById("woodQD").value = wwe.woodFiber;
							document.getElementById("agentQE").value = wwe.antistrippingAgent;
						 }
						 sumg(this,watercontentQA,watercontentQB,watercontentQC,ashQA,ashQB,ashQC,woodQD,wood2QD,agentQE,agent2QE,sumQA,sumQB,sumQC,totalwatercontentQ,totalashQ,sumQ,priceQA,priceQB,priceQC,priceQD,priceQE,toaltalpriceQ,totalQ,getdataq);
					}
				});
}


/*SBS-13(石灰岩)*/
function queryLastMonthR(searchdate,selected){
				var mixturetype="SBS-13(石灰岩)";
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/materialsbill/totalLastMonthA",  
					data : {
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						getdatar = data.componetQA;
						/*var total = parseFloat(getdata[0].toFixed(2))+parseFloat(getdata[1].toFixed(2))+parseFloat(getdata[2].toFixed(2))+parseFloat(getdata[3].toFixed(2))+parseFloat(getdata[4].toFixed(2))+6.80+0.50*/
						/*var totalprice =  (parseFloat(getdata[0].toFixed(2)*getulist[0]/1000)
										+ parseFloat(getdata[1].toFixed(2)*getulist[2]/1000)
										+ parseFloat(getdata[2].toFixed(2)*getulist[7]/1000)
										+ parseFloat(getdata[3].toFixed(2)*getulist[6]/1000)
										+ parseFloat(getulist[9]*6.80/1000)
										+ parseFloat(getulist[10]*0.50/1000)
										+ parseFloat(getdata[4].toFixed(2)*getulist[8]/1000)).toFixed(2);*/
						var str= '';
						str += "<input type='text' id='IDR' style='display:none' /><form><table class='gridtable' >"+"<tr><th>"+"SBS-13(石灰岩)"+"</th><th>"+"原始用量按‰比例"+"</th><th>"+"含水率按‰比例"
						+"</th><th>"+"废灰按‰比例"+"</th><th>"+"实际用量按‰比例"+"</th><th>"+"不含税单价"+"</th><th>"+"不含税金额/元"+"</th></tr>";
						str += '<tr>';
						var tds1 = 	 '<td>' + "石粉" + '</td>'
					 			  	+'<td>' + getdatar[0].toFixed(2) + '</td>'
					 			  	+'<td>' + "<input type='text' id='watercontentRA' onkeyup='sumh(this,watercontentRA,watercontentRB,ashRA,ashRB,agentRE,agent2RE,sumRA,sumRB,totalwatercontentR,totalashR,sumR,priceRA,priceRB,priceRE,toaltalpriceR,totalR,getdatar);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashRA' onkeyup='sumh(this,watercontentRA,watercontentRB,ashRA,ashRB,agentRE,agent2RE,sumRA,sumRB,totalwatercontentR,totalashR,sumR,priceRA,priceRB,priceRE,toaltalpriceR,totalR,getdatar);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumRA' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[0] + '</td>'                                                     
				     				+'<td>' +"<input type='text' id='priceRA' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds1;
				     	str += '</tr>';
				     	str += '<tr>';
				     	var tds2 =   '<td>' + "瓜子片#" + '</td>'
					 				+'<td>' + getdatar[1].toFixed(2) + '</td>'
					 				+'<td>' + "<input type='text' id='watercontentRB' onkeyup='sumh(this,watercontentRA,watercontentRB,ashRA,ashRB,agentRE,agent2RE,sumRA,sumRB,totalwatercontentR,totalashR,sumR,priceRA,priceRB,priceRE,toaltalpriceR,totalR,getdatar);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='ashRB' onkeyup='sumh(this,watercontentRA,watercontentRB,ashRA,ashRB,agentRE,agent2RE,sumRA,sumRB,totalwatercontentR,totalashR,sumR,priceRA,priceRB,priceRE,toaltalpriceR,totalR,getdatar);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumRB' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[5] + '</td>'
				     				+'<td>' +"<input type='text' id='priceRB' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds2;
						str += '</tr>';
						str += '<tr>';
				     	var tds3 =  '<td>' + "改性沥青油" + '</td>'
				     				+'<td>' + getdatar[3].toFixed(2) + '</td>'
					 				+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 				+'<td>' + getdatar[3].toFixed(2) + '</td>'
				     				+'<td>' + getulist[13] + '</td>'
				     				+'<td>' + (getdatar[3].toFixed(2)*getulist[13]/1000).toFixed(2) + '</td>'
						str += tds3;
						str += '</tr>';
						str += '<tr>';
						var tds4 = 	 '<td>' + "乙烯焦油" + '</td>'
									+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "6.80" + '</td>'
				     				+'<td>' + getulist[9] + '</td>'
				     				+'<td>' + (getulist[9]*6.80/1000).toFixed(2) + '</td>'
						str += tds4;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds5 = 	 '<td>' + "燃料油" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+"<td style='background-color:#dedede'>" + "0.50" + '</td>'
				     				+'<td>' + getulist[10] + '</td>'
				     				+'<td>' + (getulist[10]*0.50/1000).toFixed(2) + '</td>'
						str += tds5;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds6 = 	 '<td>' + "矿粉" + '</td>'
									+'<td>' + getdatar[2].toFixed(2) + '</td>'
					 			  	+'<td>' + "" + '</td>'
						 			+'<td>' + "" + '</td>'
						 			+'<td>' + getdatar[2].toFixed(2) + '</td>'
				     				+'<td>' + getulist[8] + '</td>'
				     				+'<td>' + (getdatar[2]*getulist[8]/1000).toFixed(2) + '</td>'
						str += tds6;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds7 = 	 '<td>' + "抗剥落剂" + '</td>'
									+'<td>' + "<input type='text' id='agentRE' onkeyup='sumh(this,watercontentRA,watercontentRB,ashRA,ashRB,agentRE,agent2RE,sumRA,sumRB,totalwatercontentR,totalashR,sumR,priceRA,priceRB,priceRE,toaltalpriceR,totalR,getdatar);' style='border-width:0;text-align:center;' placeholder='请输入'>" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "" + '</td>'
					 			  	+'<td>' + "<input type='text' id='agent2RE' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + getulist[11] + '</td>'
				     				+'<td>' +"<input type='text' id='priceRE' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds7;
				     	str += '</tr>';
				     	str += '<tr>';
						var tds8 = 	 '<td>' + "合计" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalR' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalwatercontentR' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='totalashR' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
					 			  	+'<td>' + "<input type='text' id='sumR' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
				     				+'<td>' + ""/*"<input type='text' id='searchdate' style='border-width:0;text-align:center;' placeholder='请输入'>"*/ + '</td>'
				     				+'<td>' + /*totalprice*/"<input type='text' id='toaltalpriceR' readonly='true' style='border-width:0;text-align:center;'>" + '</td>'
						str += tds8;
				     	str += '</tr>';
						str += '</table></form>';
					    $('#divIdR').html(str);
							}
						});
				//查询各类型含水率和废灰并赋值
				$.ajax({  
					type : "post",  
					url : baseURL +"sys/waterwaste/queryww",  
					data :{
						searchdate : searchdate,
						selected : selected,
						mixturetype : mixturetype
					},  
					async : false,  
					success : function(data){
						 var wwe = data.wwe;
						 if(wwe != null){
							document.getElementById("IDR").value = wwe.id;
							document.getElementById("watercontentRA").value = wwe.limestoneWater;
							document.getElementById("watercontentRB").value = wwe.melonslicesWater;
							document.getElementById("ashRA").value = wwe.limestoneWaste;
							document.getElementById("ashRB").value = wwe.melonslicesWaste;
							document.getElementById("agentRE").value = wwe.antistrippingAgent;
						 }
						 sumh(this,watercontentRA,watercontentRB,ashRA,ashRB,agentRE,agent2RE,sumRA,sumRB,totalwatercontentR,totalashR,sumR,priceRA,priceRB,priceRE,toaltalpriceR,totalR,getdatar);
					}
				});
}

function queryLastMonthS(){
						var totalprice = (parseFloat((getulist[14]*8/1000).toFixed(2))+parseFloat((getulist[6]*400/1000).toFixed(2))).toFixed(2);
						var str= '';
						str += "<input type='text' id='IDR' style='display:none' /><form><table class='gridtable' >"+"<tr><th>"+"乳化沥青"+"</th><th>"+"实际用量按‰比例"+"</th><th>"+"不含税单价"+"</th><th>"+"不含税金额/元"+"</th></tr>";
						str += '<tr>';
						var tds1 = 	 '<td>' + "乳化剂" + '</td>'
					 			  	+'<td>' + "8.00" + '</td>'
				     				+'<td>' + getulist[14] + '</td>'                                                     
				     				+'<td>' + (getulist[14]*8/1000).toFixed(2)+ '</td>'
						str += tds1;
				     	str += '</tr>';
				     	str += '<tr>';
				     	var tds2 =   '<td>' + "70#沥青油" + '</td>'
					 				+'<td>' + "400.00" + '</td>'
				     				+'<td>' + getulist[6] + '</td>'
				     				+'<td>' + (getulist[6]*400/1000).toFixed(2) + '</td>'
						str += tds2;
						str += '</tr>';
				     	str += '<tr>';
						var tds3 = 	 '<td>' + "合计" + '</td>'
					 			  	+'<td>' + "408" + '</td>'
					 			  	+'<td>' + "" + '</td>'
				     				+'<td>' + totalprice + '</td>'
						str += tds3;
				     	str += '</tr>';
						str += '</table></form>';
					    $('#divIdS').html(str);
							}
$("#clear").click(function(){
	document.getElementById("searchdate").value=d.getFullYear() + '-' + lay.digit(d.getMonth());
	$("#selected").val("WD2-3145-AMP-DD22");
	var form = layui.form();
	form.render();
	search();
});

 function print1(){
	 var sourceDiv  = document.getElementById('image');
     var elements = sourceDiv.getElementsByTagName("input");
     for(i=0; i< elements.length; i++){

         if(elements[i].type == "text")
            {
                elements[i].setAttribute("value",elements[i].value);
            }
     }
$("#image").jqprint({             
	 debug: false, //如果是true则可以显示iframe查看效果（iframe默认高和宽都很小，可以再源码中调大），默认是false
     importCSS: true, //true表示引进原来的页面的css，默认是true。（如果是true，先会找$("link[media=print]")，若没有会去找$("link")中的css文件）
     printContainer: true, //表示如果原来选择的对象必须被纳入打印（注意：设置为false可能会打破你的CSS规则）。
     operaSupport: true  
	});
} 
  /*function print1(){
	var printBody = document.getElementById("image");
	var printBodyHTML="";
	var bodyHTML="";  */
	/* document.getElementById("button").style.display="none"; */
	  /*if(printBodyHTML==""){
	printBodyHTML = printBody.innerHTML;
	}
	if(bodyHTML==""){
	bodyHTML = document.body.innerHTML;
	}
	document.body.innerHTML = printBodyHTML;
	window.print();
	document.body.innerHTML = bodyHTML; 
	window.location.reload();*/
	/* document.getElementById("button").style.display="inline"; */
	  /*}  */
  laydate.render({
	  elem: '#priceMonth',
	  type: 'month',//指定元素
	  theme: '#17B3A3',
	  done: function(value){
			  vm.unitprice.priceMonth = value
	  }
	});
/*layui.use('form', function(){
	  var form = layui.form(); //只有执行了这一步，部分表单元素才会自动修饰成功
	  form.on('select(lay)', function(data){
		  vm.reload();
		  form.render();
	});
	});*/
  var d = new Date();
  laydate.render({
  	   elem: '#searchdate',
  	   type: 'month',//指定元素
  	   theme: '#17B3A3',
  	   value: d.getFullYear() + '-' + lay.digit(d.getMonth())
  		});
  layui.use('form', function(){
  	  var form = layui.form(); //只有执行了这一步，部分表单元素才会自动修饰成功
  	  form.on('select(lay)', function(data){
  		  /*vm.reload();*/
  		  form.render();
  	});
  	});