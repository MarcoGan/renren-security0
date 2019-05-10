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

import io.renren.modules.sys.entity.PlantLocationEntity;
import io.renren.modules.sys.entity.SysRoleEntity;
import io.renren.modules.sys.service.PlantLocationService;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.R;



/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-11-19 10:12:36
 */
@RestController
@RequestMapping("sys/plantlocation")
public class PlantLocationController {
    @Autowired
    private PlantLocationService plantLocationService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    @RequiresPermissions("sys:plantlocation:list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = plantLocationService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    @RequiresPermissions("sys:plantlocation:info")
    public R info(@PathVariable("id") Integer id){
        PlantLocationEntity plantLocation = plantLocationService.selectById(id);

        return R.ok().put("plantLocation", plantLocation);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    @RequiresPermissions("sys:plantlocation:save")
    public R save(@RequestBody PlantLocationEntity plantLocation){
        plantLocationService.insert(plantLocation);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    @RequiresPermissions("sys:plantlocation:update")
    public R update(@RequestBody PlantLocationEntity plantLocation){
        ValidatorUtils.validateEntity(plantLocation);
        plantLocationService.updateAllColumnById(plantLocation);//全部更新
        
        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    @RequiresPermissions("sys:plantlocation:delete")
    public R delete(@RequestBody Integer[] ids){
        plantLocationService.deleteBatchIds(Arrays.asList(ids));

        return R.ok();
    }
    
    @RequestMapping("/getPlace")
	/*@RequiresPermissions("sys:role:select")*/
	public R select(){
		List<PlantLocationEntity> list = plantLocationService.selectList(null);
		return R.ok().put("place", list);
	}
    
   /* @RequestMapping(value = "/getPlace", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getTerminalId() throws Exception {
		
		Map<String, Object> returnMap = new HashMap<String, Object>();
		List<PlantLocationEntity> pageResult = plantLocationService.getPlace();
		returnMap.put("place", pageResult);
		return returnMap;
	}*/

}
