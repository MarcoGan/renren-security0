package io.renren.modules.sys.service;

import com.baomidou.mybatisplus.service.IService;
import io.renren.common.utils.PageUtils;
import io.renren.modules.sys.entity.WeighingDischargingEntity;

import java.util.Map;

/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-11-14 09:23:42
 */
public interface WeighingDischargingService extends IService<WeighingDischargingEntity> {

    PageUtils queryPage(Map<String, Object> params);
}

