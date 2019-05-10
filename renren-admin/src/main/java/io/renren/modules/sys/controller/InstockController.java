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

import io.renren.modules.sys.entity.InstockEntity;
import io.renren.modules.sys.service.InstockService;
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
@RequestMapping("sys/instock")
public class InstockController {
    @Autowired
    private InstockService instockService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    @RequiresPermissions("sys:instock:list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = instockService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    @RequiresPermissions("sys:instock:info")
    public R info(@PathVariable("id") Integer id){
        InstockEntity instock = instockService.selectById(id);

        return R.ok().put("instock", instock);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    @RequiresPermissions("sys:instock:save")
    public R save(@RequestBody InstockEntity instock){
        instockService.insert(instock);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    @RequiresPermissions("sys:instock:update")
    public R update(@RequestBody InstockEntity instock){
        ValidatorUtils.validateEntity(instock);
        instockService.updateAllColumnById(instock);//全部更新
        
        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    @RequiresPermissions("sys:instock:delete")
    public R delete(@RequestBody Integer[] ids){
        instockService.deleteBatchIds(Arrays.asList(ids));

        return R.ok();
    }

}
