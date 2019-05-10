package io.renren.modules.sys.controller;

import java.util.Arrays;
import java.util.Map;

import io.renren.common.validator.ValidatorUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.renren.modules.sys.entity.WeighingDischargingEntity;
import io.renren.modules.sys.service.WeighingDischargingService;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.R;



/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-11-14 09:23:42
 */
@RestController
@RequestMapping("sys/weighingdischarging")
public class WeighingDischargingController {
    @Autowired
    private WeighingDischargingService weighingDischargingService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    @RequiresPermissions("sys:weighingdischarging:list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = weighingDischargingService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    @RequiresPermissions("sys:weighingdischarging:info")
    public R info(@PathVariable("id") Integer id){
        WeighingDischargingEntity weighingDischarging = weighingDischargingService.selectById(id);
        weighingDischarging.setPlaceIdList(weighingDischarging.getLocation());
        return R.ok().put("weighingDischarging", weighingDischarging);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    @RequiresPermissions("sys:weighingdischarging:save")
    public R save(@RequestBody WeighingDischargingEntity weighingDischarging){
    	weighingDischarging.setLocation(weighingDischarging.getPlaceIdList());
        weighingDischargingService.insert(weighingDischarging);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    @RequiresPermissions("sys:weighingdischarging:update")
    public R update(@RequestBody WeighingDischargingEntity weighingDischarging){
        ValidatorUtils.validateEntity(weighingDischarging);
        weighingDischarging.setLocation(weighingDischarging.getPlaceIdList());
        weighingDischargingService.updateAllColumnById(weighingDischarging);//全部更新
        
        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    @RequiresPermissions("sys:weighingdischarging:delete")
    public R delete(@RequestBody Integer[] ids){
        weighingDischargingService.deleteBatchIds(Arrays.asList(ids));

        return R.ok();
    }

}
