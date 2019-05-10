package io.renren.modules.sys.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import io.renren.common.validator.ValidatorUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import io.renren.modules.sys.entity.WaterWasteEntity;
import io.renren.modules.sys.service.WaterWasteService;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.R;



/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-10-25 15:38:16
 */
@RestController
@RequestMapping("sys/waterwaste")
public class WaterWasteController {
    @Autowired
    private WaterWasteService waterWasteService;
    
    
    /**
     * 保存含水率与废灰等数据
     */
    @RequestMapping(value = "/savewa", method = RequestMethod.POST)
    @ResponseBody
    public R saveWa(@RequestBody List<WaterWasteEntity> waandwa){
    	System.out.println("找到方法" + waandwa.get(0));
    	int influenceNum = 0;
    	for(int i=0;i < waandwa.size();i++){
    		WaterWasteEntity wwe = waandwa.get(i);
    		if(wwe.getId() == null){
    			int num = waterWasteService.insertWWE(wwe);
    			influenceNum = influenceNum+num;
    		}else if(waterWasteService.queryById(wwe.getId()) != null){
    			int num = waterWasteService.updateWWE(wwe);
    			influenceNum = influenceNum+num;
    		}else{
    			int num = waterWasteService.insertWWE(wwe);
    			influenceNum = influenceNum+num;
    		}
    	}
    	if (influenceNum == 18){
    		System.out.println(waandwa.toString());
    		return R.ok("保存成功");
//            string str = String.Format("保存成功PostAlbum：{0} {1:d}", input[0].AlbumName, input[0].Entered);
//            return Json(str);
        }else{
        	return R.ok("保存失败");
        }
    }
    
    /**
     * 根据地点、时间与物料类型查询含水率和废灰
     */
    @RequestMapping(value = "/queryww", method = RequestMethod.POST)
    public Map<String, Object> qureyBySMM(@RequestParam(value = "searchdate", required = false) String searchdate,
				@RequestParam(value = "selected", required = false) String terminalId,
				@RequestParam(value = "mixturetype", required = false) String mixturetype){
    	Map<String, Object> returnMap = new HashMap<String, Object>();
    	WaterWasteEntity wwe = waterWasteService.queryBySSM(searchdate, terminalId, mixturetype);
    	if(wwe != null){
    		returnMap.put("wwe", wwe);
    	}else{
    		returnMap.put("wwe", null);
    	}
		return returnMap;
        
    }

    /**
     * 列表
     */
    @RequestMapping("/list")
    @RequiresPermissions("sys:waterwaste:list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = waterWasteService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    @RequiresPermissions("sys:waterwaste:info")
    public R info(@PathVariable("id") Integer id){
        WaterWasteEntity waterWaste = waterWasteService.selectById(id);

        return R.ok().put("waterWaste", waterWaste);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    @RequiresPermissions("sys:waterwaste:save")
    public R save(@RequestBody WaterWasteEntity waterWaste){
        waterWasteService.insert(waterWaste);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    @RequiresPermissions("sys:waterwaste:update")
    public R update(@RequestBody WaterWasteEntity waterWaste){
        ValidatorUtils.validateEntity(waterWaste);
        waterWasteService.updateAllColumnById(waterWaste);//全部更新
        
        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    @RequiresPermissions("sys:waterwaste:delete")
    public R delete(@RequestBody Integer[] ids){
        waterWasteService.deleteBatchIds(Arrays.asList(ids));

        return R.ok();
    }

}
