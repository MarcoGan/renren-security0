package io.renren.modules.sys.service;

import com.baomidou.mybatisplus.service.IService;
import io.renren.common.utils.PageUtils;
import io.renren.modules.sys.entity.WaterWasteEntity;

import java.util.Map;

import org.apache.ibatis.annotations.Param;

/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-10-25 15:38:16
 */
public interface WaterWasteService extends IService<WaterWasteEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
    WaterWasteEntity queryById(int Id);
    int insertWWE(WaterWasteEntity wwe);
    int updateWWE(WaterWasteEntity wwe);
    WaterWasteEntity queryBySSM(String searchdate,String terminalId,String mixturetype);
}

