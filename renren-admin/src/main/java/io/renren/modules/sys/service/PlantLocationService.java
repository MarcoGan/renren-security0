package io.renren.modules.sys.service;

import com.baomidou.mybatisplus.service.IService;
import io.renren.common.utils.PageUtils;
import io.renren.modules.sys.entity.MaterialTypeEntity;
import io.renren.modules.sys.entity.PlantLocationEntity;

import java.util.List;
import java.util.Map;

/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-11-19 10:12:36
 */
public interface PlantLocationService extends IService<PlantLocationEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   /* List<PlantLocationEntity> getPlace();*/
}

