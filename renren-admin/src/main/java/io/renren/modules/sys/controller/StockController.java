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

import io.renren.modules.sys.entity.StockEntity;
import io.renren.modules.sys.service.StockService;
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
@RequestMapping("sys/stock")
public class StockController {
    @Autowired
    private StockService stockService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    @RequiresPermissions("sys:stock:list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = stockService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    @RequiresPermissions("sys:stock:info")
    public R info(@PathVariable("id") Integer id){
        StockEntity stock = stockService.selectById(id);

        return R.ok().put("stock", stock);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    @RequiresPermissions("sys:stock:save")
    public R save(@RequestBody StockEntity stock){
        stockService.insert(stock);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    @RequiresPermissions("sys:stock:update")
    public R update(@RequestBody StockEntity stock){
        ValidatorUtils.validateEntity(stock);
        stockService.updateAllColumnById(stock);//全部更新
        
        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    @RequiresPermissions("sys:stock:delete")
    public R delete(@RequestBody Integer[] ids){
        stockService.deleteBatchIds(Arrays.asList(ids));

        return R.ok();
    }

}
