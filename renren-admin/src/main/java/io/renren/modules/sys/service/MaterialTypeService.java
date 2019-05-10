package io.renren.modules.sys.service;

import com.baomidou.mybatisplus.service.IService;
import io.renren.common.utils.PageUtils;
import io.renren.modules.sys.entity.MaterialTypeEntity;

import java.util.List;
import java.util.Map;

/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-30 14:44:12
 */
public interface MaterialTypeService extends IService<MaterialTypeEntity> {

    PageUtils queryPage(Map<String, Object> params);

	List<MaterialTypeEntity> queryList();

}

