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

import io.renren.modules.sys.entity.WeighingLoadingEntity;
import io.renren.modules.sys.service.WeighingLoadingService;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.R;



/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2019-01-24 11:17:52
 */
@RestController
@RequestMapping("sys/weighingloading")
public class WeighingLoadingController {
    @Autowired
    private WeighingLoadingService weighingLoadingService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    @RequiresPermissions("sys:weighingloading:list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = weighingLoadingService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    @RequiresPermissions("sys:weighingloading:info")
    public R info(@PathVariable("id") Integer id){
        WeighingLoadingEntity weighingLoading = weighingLoadingService.selectById(id);
        weighingLoading.setPlaceIdList(weighingLoading.getLocation());
        return R.ok().put("weighingLoading", weighingLoading);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    @RequiresPermissions("sys:weighingloading:save")
    public R save(@RequestBody WeighingLoadingEntity weighingLoading){
    	weighingLoading.setLocation(weighingLoading.getPlaceIdList());
        weighingLoadingService.insert(weighingLoading);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    @RequiresPermissions("sys:weighingloading:update")
    public R update(@RequestBody WeighingLoadingEntity weighingLoading){
        ValidatorUtils.validateEntity(weighingLoading);
        weighingLoading.setLocation(weighingLoading.getPlaceIdList());
        weighingLoadingService.updateAllColumnById(weighingLoading);//全部更新
        
        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    @RequiresPermissions("sys:weighingloading:delete")
    public R delete(@RequestBody Integer[] ids){
        weighingLoadingService.deleteBatchIds(Arrays.asList(ids));

        return R.ok();
    }

}
