package io.renren.modules.sys.service;

import com.baomidou.mybatisplus.service.IService;
import io.renren.common.utils.PageUtils;
import io.renren.modules.sys.entity.UnitpriceEntity;

import java.util.List;
import java.util.Map;

/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-10-16 09:17:33
 */
public interface UnitpriceService extends IService<UnitpriceEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
    List<UnitpriceEntity> getprice(String searchdate,String terminalId);
}

