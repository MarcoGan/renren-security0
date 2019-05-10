package io.renren.modules.sys.service;

import com.baomidou.mybatisplus.service.IService;
import io.renren.common.utils.PageUtils;
import io.renren.modules.sys.entity.CardescripeEntity;

import java.util.Map;

/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-30 17:27:07
 */
public interface CardescripeService extends IService<CardescripeEntity> {

    PageUtils queryPage(Map<String, Object> params);
}

