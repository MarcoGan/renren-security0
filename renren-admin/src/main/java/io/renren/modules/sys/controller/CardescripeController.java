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

import io.renren.modules.sys.entity.CardescripeEntity;
import io.renren.modules.sys.service.CardescripeService;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.R;



/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-30 17:27:07
 */
@RestController
@RequestMapping("sys/cardescripe")
public class CardescripeController {
    @Autowired
    private CardescripeService cardescripeService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    @RequiresPermissions("sys:cardescripe:list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = cardescripeService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{inoutid}")
    @RequiresPermissions("sys:cardescripe:info")
    public R info(@PathVariable("inoutid") Integer inoutid){
        CardescripeEntity cardescripe = cardescripeService.selectById(inoutid);

        return R.ok().put("cardescripe", cardescripe);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    @RequiresPermissions("sys:cardescripe:save")
    public R save(@RequestBody CardescripeEntity cardescripe){
        cardescripeService.insert(cardescripe);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    @RequiresPermissions("sys:cardescripe:update")
    public R update(@RequestBody CardescripeEntity cardescripe){
        ValidatorUtils.validateEntity(cardescripe);
        cardescripeService.updateAllColumnById(cardescripe);//全部更新
        
        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    @RequiresPermissions("sys:cardescripe:delete")
    public R delete(@RequestBody Integer[] inoutids){
        cardescripeService.deleteBatchIds(Arrays.asList(inoutids));

        return R.ok();
    }

}
