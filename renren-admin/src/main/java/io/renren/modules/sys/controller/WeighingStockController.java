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

import io.renren.modules.sys.entity.WeighingStockEntity;
import io.renren.modules.sys.service.WeighingStockService;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.R;



/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2019-01-05 13:33:25
 */
@RestController
@RequestMapping("sys/weighingstock")
public class WeighingStockController {
    @Autowired
    private WeighingStockService weighingStockService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    @RequiresPermissions("sys:weighingstock:list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = weighingStockService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    @RequiresPermissions("sys:weighingstock:info")
    public R info(@PathVariable("id") Integer id){
        WeighingStockEntity weighingStock = weighingStockService.selectById(id);
        weighingStock.setPlaceIdList(weighingStock.getLocation());
        return R.ok().put("weighingStock", weighingStock);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    @RequiresPermissions("sys:weighingstock:save")
    public R save(@RequestBody WeighingStockEntity weighingStock){
    	weighingStock.setLocation(weighingStock.getPlaceIdList());
        weighingStockService.insert(weighingStock);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    @RequiresPermissions("sys:weighingstock:update")
    public R update(@RequestBody WeighingStockEntity weighingStock){
        ValidatorUtils.validateEntity(weighingStock);
        weighingStock.setLocation(weighingStock.getPlaceIdList());
        weighingStockService.updateAllColumnById(weighingStock);//全部更新
        
        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    @RequiresPermissions("sys:weighingstock:delete")
    public R delete(@RequestBody Integer[] ids){
        weighingStockService.deleteBatchIds(Arrays.asList(ids));

        return R.ok();
    }

}
