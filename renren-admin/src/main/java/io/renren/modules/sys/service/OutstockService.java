package io.renren.modules.sys.service;

import com.baomidou.mybatisplus.service.IService;
import io.renren.common.utils.PageUtils;
import io.renren.modules.sys.entity.OutstockEntity;

import java.util.Map;

/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-30 14:44:12
 */
public interface OutstockService extends IService<OutstockEntity> {

    PageUtils queryPage(Map<String, Object> params);
}

