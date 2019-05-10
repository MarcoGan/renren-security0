package io.renren.modules.sys.service;

import com.baomidou.mybatisplus.service.IService;
import io.renren.common.utils.PageUtils;
import io.renren.modules.sys.entity.WeighingLoadingEntity;

import java.util.Map;

/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2019-01-24 11:17:52
 */
public interface WeighingLoadingService extends IService<WeighingLoadingEntity> {

    PageUtils queryPage(Map<String, Object> params);
}

