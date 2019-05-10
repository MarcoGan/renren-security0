package io.renren.modules.sys.service;

import com.baomidou.mybatisplus.service.IService;
import io.renren.common.utils.PageUtils;
import io.renren.modules.sys.entity.WeighingStockEntity;

import java.util.Map;

/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2019-01-05 13:33:25
 */
public interface WeighingStockService extends IService<WeighingStockEntity> {

    PageUtils queryPage(Map<String, Object> params);
}

