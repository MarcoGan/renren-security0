package io.renren.modules.sys.service;

import com.baomidou.mybatisplus.service.IService;
import io.renren.common.utils.PageUtils;
import io.renren.modules.sys.entity.AmpmonInfoEntity;
import io.renren.modules.sys.entity.StockEntity;

import java.util.List;
import java.util.Map;

/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-30 14:44:12
 */
public interface StockService extends IService<StockEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
    List<StockEntity> queryList();
    List<StockEntity> queryListL();
    
    void updateStockweight(String codeName, double dataA);
    void updateStockweightL(String codeName, double dataA);
}

