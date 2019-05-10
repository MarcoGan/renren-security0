package io.renren.modules.sys.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import io.renren.common.validator.ValidatorUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import io.renren.modules.sys.entity.WarehouseinRecordsEntity;
import io.renren.modules.sys.service.WarehouseinRecordsService;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.R;



/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-11-01 17:23:38
 */
@RestController
@RequestMapping("sys/warehouseinrecords")
public class WarehouseinRecordsController {
    @Autowired
    private WarehouseinRecordsService warehouseinRecordsService;
    
    /**
     * 导入excel
     */
    @PostMapping("/import")
    public R addUser(@RequestParam("file") MultipartFile file) {
        String fileName = file.getOriginalFilename();
        try {
        	warehouseinRecordsService.batchImport(fileName, file);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return R.ok();
    }

    /**
     * 获取合计
     */
    @RequestMapping(value = "/getCount", method = RequestMethod.POST)
    public Map<String, Object> getUnitPrice(@RequestParam(value = "startlogtime", required = false) String startlogtime,
    										@RequestParam(value = "endlogtime", required = false) String endlogtime){
    	/*获取所有成份价格*/
    	double TotalQuantity = warehouseinRecordsService.getTotalQuantity(startlogtime,endlogtime);
    	double TotalMoney = warehouseinRecordsService.getTotalMoney(startlogtime,endlogtime);
    	double TotalInvoiceNum = warehouseinRecordsService.getTotalInvoiceNum(startlogtime,endlogtime);
    	Map<String, Object> returnMap = new HashMap<String, Object>();
		returnMap.put("TotalQuantity", TotalQuantity);
		returnMap.put("TotalMoney", TotalMoney);
		returnMap.put("TotalInvoiceNum", TotalInvoiceNum);
		return returnMap;
    }
    /**
     * 列表
     */
    @RequestMapping("/list")
    @RequiresPermissions("sys:warehouseinrecords:list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = warehouseinRecordsService.queryPage(params);

        return R.ok().put("page", page);
    }


    /**
     * 信息
     */
    @RequestMapping("/info/{id}")
    @RequiresPermissions("sys:warehouseinrecords:info")
    public R info(@PathVariable("id") Integer id){
        WarehouseinRecordsEntity warehouseinRecords = warehouseinRecordsService.selectById(id);

        return R.ok().put("warehouseinRecords", warehouseinRecords);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    @RequiresPermissions("sys:warehouseinrecords:save")
    public R save(@RequestBody WarehouseinRecordsEntity warehouseinRecords){
        warehouseinRecordsService.insert(warehouseinRecords);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    @RequiresPermissions("sys:warehouseinrecords:update")
    public R update(@RequestBody WarehouseinRecordsEntity warehouseinRecords){
        ValidatorUtils.validateEntity(warehouseinRecords);
        warehouseinRecordsService.updateAllColumnById(warehouseinRecords);//全部更新
        
        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    @RequiresPermissions("sys:warehouseinrecords:delete")
    public R delete(@RequestBody Integer[] ids){
        warehouseinRecordsService.deleteBatchIds(Arrays.asList(ids));

        return R.ok();
    }

}
