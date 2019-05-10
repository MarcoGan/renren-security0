package io.renren.modules.sys.service;

import com.baomidou.mybatisplus.service.IService;
import io.renren.common.utils.PageUtils;
import io.renren.modules.sys.entity.WeighbridgeEntity;

import java.util.Map;

/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-30 14:44:11
 */
public interface WeighbridgeService extends IService<WeighbridgeEntity> {

    PageUtils queryPage(Map<String, Object> params);
}

