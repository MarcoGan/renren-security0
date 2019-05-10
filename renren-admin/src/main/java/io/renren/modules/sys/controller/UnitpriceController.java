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

import io.renren.modules.sys.entity.UnitpriceEntity;
import io.renren.modules.sys.service.UnitpriceService;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.R;



/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-10-16 09:17:33
 */
@RestController
@RequestMapping("sys/unitprice")
public class UnitpriceController {
    @Autowired
    private UnitpriceService unitpriceService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    @RequiresPermissions("sys:unitprice:list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = unitpriceService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    @RequiresPermissions("sys:unitprice:info")
    public R info(@PathVariable("id") Integer id){
        UnitpriceEntity unitprice = unitpriceService.selectById(id);

        return R.ok().put("unitprice", unitprice);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    @RequiresPermissions("sys:unitprice:save")
    public R save(@RequestBody UnitpriceEntity unitprice){
        unitpriceService.insert(unitprice);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    @RequiresPermissions("sys:unitprice:update")
    public R update(@RequestBody UnitpriceEntity unitprice){
        ValidatorUtils.validateEntity(unitprice);
        unitpriceService.updateAllColumnById(unitprice);//全部更新
        
        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    @RequiresPermissions("sys:unitprice:delete")
    public R delete(@RequestBody Integer[] ids){
        unitpriceService.deleteBatchIds(Arrays.asList(ids));

        return R.ok();
    }

}
