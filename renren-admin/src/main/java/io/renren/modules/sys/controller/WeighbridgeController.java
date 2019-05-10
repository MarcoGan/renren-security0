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

import io.renren.modules.sys.entity.WeighbridgeEntity;
import io.renren.modules.sys.service.WeighbridgeService;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.R;



/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-30 14:44:11
 */
@RestController
@RequestMapping("sys/weighbridge")
public class WeighbridgeController {
    @Autowired
    private WeighbridgeService weighbridgeService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    @RequiresPermissions("sys:weighbridge:list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = weighbridgeService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{dataid}")
    @RequiresPermissions("sys:weighbridge:info")
    public R info(@PathVariable("dataid") Integer dataid){
        WeighbridgeEntity weighbridge = weighbridgeService.selectById(dataid);
        
        weighbridge.setPlaceIdList(weighbridge.getTerminalid());
        return R.ok().put("weighbridge", weighbridge);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    @RequiresPermissions("sys:weighbridge:save")
    public R save(@RequestBody WeighbridgeEntity weighbridge){
    	weighbridge.setTerminalid(weighbridge.getPlaceIdList());
        weighbridgeService.insert(weighbridge);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    @RequiresPermissions("sys:weighbridge:update")
    public R update(@RequestBody WeighbridgeEntity weighbridge){
        ValidatorUtils.validateEntity(weighbridge);
        weighbridge.setTerminalid(weighbridge.getPlaceIdList());
        weighbridgeService.updateAllColumnById(weighbridge);//全部更新
        
        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    @RequiresPermissions("sys:weighbridge:delete")
    public R delete(@RequestBody Integer[] dataids){
        weighbridgeService.deleteBatchIds(Arrays.asList(dataids));

        return R.ok();
    }

}
