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

import io.renren.modules.sys.entity.OutstockEntity;
import io.renren.modules.sys.service.OutstockService;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.R;



/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-30 14:44:12
 */
@RestController
@RequestMapping("sys/outstock")
public class OutstockController {
    @Autowired
    private OutstockService outstockService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    @RequiresPermissions("sys:outstock:list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = outstockService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    @RequiresPermissions("sys:outstock:info")
    public R info(@PathVariable("id") Integer id){
        OutstockEntity outstock = outstockService.selectById(id);

        return R.ok().put("outstock", outstock);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    @RequiresPermissions("sys:outstock:save")
    public R save(@RequestBody OutstockEntity outstock){
        outstockService.insert(outstock);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    @RequiresPermissions("sys:outstock:update")
    public R update(@RequestBody OutstockEntity outstock){
        ValidatorUtils.validateEntity(outstock);
        outstockService.updateAllColumnById(outstock);//全部更新
        
        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    @RequiresPermissions("sys:outstock:delete")
    public R delete(@RequestBody Integer[] ids){
        outstockService.deleteBatchIds(Arrays.asList(ids));

        return R.ok();
    }

}
