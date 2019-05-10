package io.renren.modules.sys.controller;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import io.renren.common.validator.ValidatorUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.renren.modules.sys.entity.MaterialTypeEntity;
import io.renren.modules.sys.service.MaterialTypeService;
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
@RequestMapping("sys/materialtype")
public class MaterialTypeController {
    @Autowired
    private MaterialTypeService materialTypeService;

    /**
     * 列表
     */
    @RequestMapping("/list")
    @RequiresPermissions("sys:materialtype:list")
    public R list(@RequestParam Map<String, Object> params){
        PageUtils page = materialTypeService.queryPage(params);

        return R.ok().put("page", page);
    }
    
    /**
	 * 列表2
	 */
	@RequestMapping("/listall")
	@RequiresPermissions("sys:materialtype:list")
	public List<MaterialTypeEntity> list(){
		List<MaterialTypeEntity> typeList = materialTypeService.queryList();
		return typeList;
	}

    /**
     * 信息
     */
    @RequestMapping("/info/{materialtypeid}")
    @RequiresPermissions("sys:materialtype:info")
    public R info(@PathVariable("materialtypeid") Integer materialtypeid){
        MaterialTypeEntity materialType = materialTypeService.selectById(materialtypeid);

        return R.ok().put("materialType", materialType);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    @RequiresPermissions("sys:materialtype:save")
    public R save(@RequestBody MaterialTypeEntity materialType){
        materialTypeService.insert(materialType);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    @RequiresPermissions("sys:materialtype:update")
    public R update(@RequestBody MaterialTypeEntity materialType){
        ValidatorUtils.validateEntity(materialType);
        materialTypeService.updateAllColumnById(materialType);//全部更新
        
        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    @RequiresPermissions("sys:materialtype:delete")
    public R delete(@RequestBody Integer[] materialtypeids){
        materialTypeService.deleteBatchIds(Arrays.asList(materialtypeids));

        return R.ok();
    }

}
