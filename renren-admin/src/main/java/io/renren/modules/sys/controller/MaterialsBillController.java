package io.renren.modules.sys.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import aj.org.objectweb.asm.Type;
import io.renren.modules.sys.entity.AmpmonInfoEntity;
import io.renren.modules.sys.entity.ComponentEntity;
import io.renren.modules.sys.entity.UnitpriceEntity;
import io.renren.modules.sys.service.AmpmonInfoService;
import io.renren.modules.sys.service.ComponentService;
import io.renren.modules.sys.service.UnitpriceService;
import io.renren.common.utils.GetFiledValues;



/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-30 14:44:11
 */
@RestController
@RequestMapping("sys/materialsbill")
public class MaterialsBillController {
    @Autowired
    private ComponentService componentService;
    @Autowired
    private AmpmonInfoService ampmonInfoService;
    @Autowired
    private UnitpriceService unitpirceService;
    @Autowired
    private GetFiledValues getFiledValues;
   
   /* @RequestMapping("/list")
    @RequiresPermissions("sys:weighbridge:list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = weighbridgeService.queryPage(params);

        return R.ok().put("page", page);
    }*/
    @RequestMapping(value = "/getUnitPrice", method = RequestMethod.POST)
    public Map<String, Object> getUnitPrice(@RequestParam(value = "searchdate", required = false) String searchdate,
			   								@RequestParam(value = "selected", required = false) String terminalId) throws Exception {
    	/*获取所有成份价格*/
		/*List<UnitpirceEntity> uList = unitpirceService.searchList();*/
    	List<UnitpriceEntity> uList = unitpirceService.getprice(searchdate,terminalId);
    	double[] arrayprice=new double[17];
    	Object[] arrayuList = null;
    	if(uList.size()!=0){
    	arrayuList = Arrays.copyOfRange(getFiledValues.getFiledValues(uList.get(0)),4,21);
    	for(int i = 0;i<arrayuList.length;i++){
    		arrayprice[i] =  Double.parseDouble(arrayuList[i].toString());
    	}
    	}
			/*arrayuList[i]=uList.get(i).getPrice();*/
		Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("arrayprice", arrayprice);
		return returnMap;
    }
    
    /*不带细碎，不带铣刨料*/
    @RequestMapping(value = "/totalLastMonthA", method = RequestMethod.POST)
	public Map<String, Object> countLastMonthA(@RequestParam(value = "searchdate", required = false) String searchdate,
											   @RequestParam(value = "selected", required = false) String terminalId,
											   @RequestParam(value = "mixturetype", required = false) String mixturetype) throws Exception {
    	
    	String[] Str1Array = searchdate.split("-");
    	String dateyear = Str1Array[0];
    	String datemonth = Str1Array[1];
    	/*System.out.println(Arrays.toString(Str1Array));
    	System.out.println(Str1Array[0]);
    	System.out.println(Str1Array[1]);*/
    	/*泉水上月AC-13生产总量统计*/
		List<AmpmonInfoEntity> ampQA = ampmonInfoService.countLastMonthA(terminalId, dateyear,datemonth,mixturetype);
		/*泉水上月AC-13成份使用量统计*/
		List<ComponentEntity> componetQA = componentService.componetLastMonthA(terminalId, dateyear,datemonth,mixturetype);
		
		
		double totalCount = 0;
		double[] arrayampQA=new double[12];  
		double[] arraycomponetQA=new double[6];
		double[] arrayLastMonthQA=new double[4];
		Object[] arraylistQA = Arrays.copyOfRange(getFiledValues.getFiledValues(ampQA.get(0)),4,16);
		Object[] arrayQA = Arrays.copyOfRange(getFiledValues.getFiledValues(componetQA.get(0)),3,9);
		for(int i=0;i<arraylistQA.length;i++){
			arrayampQA[i] = Double.parseDouble(arraylistQA[i].toString())/1000;
			}
		for(int i=0;i<arrayQA.length;i++){
			arraycomponetQA[i] = Double.parseDouble(arrayQA[i].toString());
			}
		
		totalCount = arraycomponetQA[0] + arraycomponetQA[2] + arrayampQA[8] + arrayampQA[9]+arrayampQA[10];
		if(totalCount!=0){
			arrayLastMonthQA[0] = (arraycomponetQA[0]/totalCount)*1000;
			arrayLastMonthQA[1] = (arraycomponetQA[2]/totalCount)*1000;
			arrayLastMonthQA[2] = (arrayampQA[8]/totalCount)*1000;
			arrayLastMonthQA[3] = ((arrayampQA[9]+arrayampQA[10])/totalCount)*1000;
		}else{
			arrayLastMonthQA = new double[4];
		}
		/*arraycomponetQA[0]+arraycomponetQA[2]+arrayampQA[8]+arrayampQA[9]+arrayampQA[10]*/
		Map<String, Object> returnMap = new HashMap<String, Object>();
		/*returnMap.put("ampQA", arrayampQA);*/
		returnMap.put("componetQA", arrayLastMonthQA);
		/*returnMap.put("statTodL", listL);*/
		return returnMap;
	}
    
   /* 不带细碎，带铣刨料*/
    @RequestMapping(value = "/totalLastMonthB", method = RequestMethod.POST)
	public Map<String, Object> countLastMonthB(@RequestParam(value = "searchdate", required = false) String searchdate,
											   @RequestParam(value = "selected", required = false) String terminalId,
											   @RequestParam(value = "mixturetype", required = false) String mixturetype) throws Exception {
    	
    	String[] Str1Array = searchdate.split("-");
    	String dateyear = Str1Array[0];
    	String datemonth = Str1Array[1];
    	/*泉水上月AC-13生产总量统计*/
		List<AmpmonInfoEntity> ampQA = ampmonInfoService.countLastMonthA(terminalId, dateyear,datemonth,mixturetype);
		/*泉水上月AC-13成份使用量统计*/
		List<ComponentEntity> componetQA = componentService.componetLastMonthA(terminalId, dateyear,datemonth,mixturetype);
		
		
		double totalCount = 0;
		double[] arrayampQB=new double[12];  
		double[] arraycomponetQB=new double[6];
		double[] arrayLastMonthQB=new double[5];
		Object[] arraylistQA = Arrays.copyOfRange(getFiledValues.getFiledValues(ampQA.get(0)),4,16);
		Object[] arrayQA = Arrays.copyOfRange(getFiledValues.getFiledValues(componetQA.get(0)),3,9);
		for(int i=0;i<arraylistQA.length;i++){
			arrayampQB[i] = Double.parseDouble(arraylistQA[i].toString())/1000;
			}
		for(int i=0;i<arrayQA.length;i++){
			arraycomponetQB[i] = Double.parseDouble(arrayQA[i].toString());
			}
		
		totalCount = arraycomponetQB[0] + arraycomponetQB[2] + arrayampQB[7] + arrayampQB[8]+arrayampQB[9]+arrayampQB[10];
		if(totalCount!=0){
			arrayLastMonthQB[0] = (arraycomponetQB[0]/totalCount)*1000;
			arrayLastMonthQB[1] = (arraycomponetQB[2]/totalCount)*1000;
			arrayLastMonthQB[2] = (arrayampQB[7]/totalCount)*1000;
			arrayLastMonthQB[3] = (arrayampQB[8]/totalCount)*1000;
			arrayLastMonthQB[4] = ((arrayampQB[9]+arrayampQB[10])/totalCount)*1000;
		}else{
			arrayLastMonthQB = new double[5];
		}
		/*arraycomponetQA[0]+arraycomponetQA[2]+arrayampQA[8]+arrayampQA[9]+arrayampQA[10]*/
		Map<String, Object> returnMap = new HashMap<String, Object>();
		/*returnMap.put("ampQA", arrayampQA);*/
		returnMap.put("componetQB", arrayLastMonthQB);
		/*returnMap.put("statTodL", listL);*/
		return returnMap;
	}
    
    /*带细碎,不带铣刨料*/
    @RequestMapping(value = "/totalLastMonthC", method = RequestMethod.POST)
	public Map<String, Object> countLastMonthC(@RequestParam(value = "searchdate", required = false) String searchdate,
											   @RequestParam(value = "selected", required = false) String terminalId,
											   @RequestParam(value = "mixturetype", required = false) String mixturetype) throws Exception {
    	
    	String[] Str1Array = searchdate.split("-");
    	String dateyear = Str1Array[0];
    	String datemonth = Str1Array[1];
    	/*泉水上月AC-13生产总量统计*/
		List<AmpmonInfoEntity> ampQC = ampmonInfoService.countLastMonthA(terminalId, dateyear,datemonth,mixturetype);
		/*泉水上月AC-13成份使用量统计*/
		List<ComponentEntity> componetQC = componentService.componetLastMonthA(terminalId, dateyear,datemonth,mixturetype);
		
		
		double totalCount = 0;
		double[] arrayampQC=new double[12];  
		double[] arraycomponetQC=new double[6];
		double[] arrayLastMonthQC=new double[5];
		Object[] arraylistQC = Arrays.copyOfRange(getFiledValues.getFiledValues(ampQC.get(0)),4,16);
		Object[] arrayQC = Arrays.copyOfRange(getFiledValues.getFiledValues(componetQC.get(0)),3,9);
		for(int i=0;i<arraylistQC.length;i++){
			arrayampQC[i] = Double.parseDouble(arraylistQC[i].toString())/1000;
			}
		for(int i=0;i<arrayQC.length;i++){
			arraycomponetQC[i] = Double.parseDouble(arrayQC[i].toString());
			}
		
		totalCount = arraycomponetQC[0] + arraycomponetQC[2] + arraycomponetQC[3] + arrayampQC[8]+arrayampQC[9]+arrayampQC[10];
		if(totalCount!=0){
			arrayLastMonthQC[0] = (arraycomponetQC[0]/totalCount)*1000;
			arrayLastMonthQC[1] = (arraycomponetQC[2]/totalCount)*1000;
			arrayLastMonthQC[2] = (arraycomponetQC[3]/totalCount)*1000;
			arrayLastMonthQC[3] = (arrayampQC[8]/totalCount)*1000;
			arrayLastMonthQC[4] = ((arrayampQC[9]+arrayampQC[10])/totalCount)*1000;
		}else{
			arrayLastMonthQC = new double[5];
		}
		/*arraycomponetQA[0]+arraycomponetQA[2]+arrayampQA[8]+arrayampQA[9]+arrayampQA[10]*/
		Map<String, Object> returnMap = new HashMap<String, Object>();
		/*returnMap.put("ampQA", arrayampQA);*/
		returnMap.put("componetQC", arrayLastMonthQC);
		/*returnMap.put("statTodL", listL);*/
		return returnMap;
	}
    
    
    /*带细碎,带铣刨料*/
    @RequestMapping(value = "/totalLastMonthD", method = RequestMethod.POST)
	public Map<String, Object> countLastMonthD(@RequestParam(value = "searchdate", required = false) String searchdate,
											   @RequestParam(value = "selected", required = false) String terminalId,
											   @RequestParam(value = "mixturetype", required = false) String mixturetype) throws Exception {
    	
    	String[] Str1Array = searchdate.split("-");
    	String dateyear = Str1Array[0];
    	String datemonth = Str1Array[1];
    	/*泉水上月AC-13生产总量统计*/
		List<AmpmonInfoEntity> ampQD = ampmonInfoService.countLastMonthA(terminalId, dateyear,datemonth,mixturetype);
		/*泉水上月AC-13成份使用量统计*/
		List<ComponentEntity> componetQD = componentService.componetLastMonthA(terminalId, dateyear,datemonth,mixturetype);
		
		
		double totalCount = 0;
		double[] arrayampQD=new double[12];  
		double[] arraycomponetQD=new double[6];
		double[] arrayLastMonthQD=new double[6];
		Object[] arraylistQD = Arrays.copyOfRange(getFiledValues.getFiledValues(ampQD.get(0)),4,16);
		Object[] arrayQD = Arrays.copyOfRange(getFiledValues.getFiledValues(componetQD.get(0)),3,9);
		for(int i=0;i<arraylistQD.length;i++){
			arrayampQD[i] = Double.parseDouble(arraylistQD[i].toString())/1000;
			}
		for(int i=0;i<arrayQD.length;i++){
			arraycomponetQD[i] = Double.parseDouble(arrayQD[i].toString());
			}
		
		totalCount = arraycomponetQD[0] + arraycomponetQD[2] + arraycomponetQD[3]  + arrayampQD[7] + arrayampQD[8]+arrayampQD[9]+arrayampQD[10];
		if(totalCount!=0){
			arrayLastMonthQD[0] = (arraycomponetQD[0]/totalCount)*1000;
			arrayLastMonthQD[1] = (arraycomponetQD[2]/totalCount)*1000;
			arrayLastMonthQD[2] = (arraycomponetQD[3]/totalCount)*1000;
			arrayLastMonthQD[3] = (arrayampQD[7]/totalCount)*1000;
			arrayLastMonthQD[4] = (arrayampQD[8]/totalCount)*1000;
			arrayLastMonthQD[5] = ((arrayampQD[9]+arrayampQD[10])/totalCount)*1000;
		}else{
			arrayLastMonthQD = new double[6];
		}
		/*arraycomponetQA[0]+arraycomponetQA[2]+arrayampQA[8]+arrayampQA[9]+arrayampQA[10]*/
		Map<String, Object> returnMap = new HashMap<String, Object>();
		/*returnMap.put("ampQA", arrayampQA);*/
		returnMap.put("componetQD", arrayLastMonthQD);
		/*returnMap.put("statTodL", listL);*/
		return returnMap;
	}

    
    /*带高料，沥青油*/
    @RequestMapping(value = "/totalLastMonthE", method = RequestMethod.POST)
	public Map<String, Object> countLastMonthE(@RequestParam(value = "searchdate", required = false) String searchdate,
											   @RequestParam(value = "selected", required = false) String terminalId,
											   @RequestParam(value = "mixturetype", required = false) String mixturetype) throws Exception {
    	
    	
    	String[] Str1Array = searchdate.split("-");
    	String dateyear = Str1Array[0];
    	String datemonth = Str1Array[1];
    	/*泉水上月AC-13生产总量统计*/
		List<AmpmonInfoEntity> ampQE = ampmonInfoService.countLastMonthA(terminalId, dateyear,datemonth,mixturetype);
		/*泉水上月AC-13成份使用量统计*/
		List<ComponentEntity> componetQE = componentService.componetLastMonthA(terminalId, dateyear,datemonth,mixturetype);
		
		
		double totalCount = 0;
		double[] arrayampQE=new double[12];  
		double[] arraycomponetQE=new double[6];
		double[] arrayLastMonthQE=new double[5];
		Object[] arraylistQE = Arrays.copyOfRange(getFiledValues.getFiledValues(ampQE.get(0)),4,16);
		Object[] arrayQE = Arrays.copyOfRange(getFiledValues.getFiledValues(componetQE.get(0)),3,9);
		for(int i=0;i<arraylistQE.length;i++){
			arrayampQE[i] = Double.parseDouble(arraylistQE[i].toString())/1000;
			}
		for(int i=0;i<arrayQE.length;i++){
			arraycomponetQE[i] = Double.parseDouble(arrayQE[i].toString());
			}
		
		totalCount = arraycomponetQE[0] + arraycomponetQE[4] + arraycomponetQE[5] + arrayampQE[8] + arrayampQE[9]+arrayampQE[10];
		if(totalCount!=0){
			arrayLastMonthQE[0] = (arraycomponetQE[0]/totalCount)*1000;
			arrayLastMonthQE[1] = (arraycomponetQE[4]/totalCount)*1000;
			arrayLastMonthQE[2] = (arraycomponetQE[5]/totalCount)*1000;
			arrayLastMonthQE[3] = (arrayampQE[8]/totalCount)*1000;
			arrayLastMonthQE[4] = ((arrayampQE[9]+arrayampQE[10])/totalCount)*1000;
		}else{
			arrayLastMonthQE = new double[5];
		}
		/*arraycomponetQA[0]+arraycomponetQA[2]+arrayampQA[8]+arrayampQA[9]+arrayampQA[10]*/
		Map<String, Object> returnMap = new HashMap<String, Object>();
		/*returnMap.put("ampQA", arrayampQA);*/
		returnMap.put("componetQE", arrayLastMonthQE);
		/*returnMap.put("statTodL", listL);*/
		return returnMap;
	}
    
}
