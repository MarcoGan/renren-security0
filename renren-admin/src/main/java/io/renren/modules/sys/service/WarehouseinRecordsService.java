package io.renren.modules.sys.service;

import com.baomidou.mybatisplus.service.IService;
import io.renren.common.utils.PageUtils;
import io.renren.modules.sys.entity.WarehouseinRecordsEntity;

import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-11-01 17:23:38
 */
public interface WarehouseinRecordsService extends IService<WarehouseinRecordsEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
    boolean batchImport(String fileName, MultipartFile file) throws Exception;
    
    double getTotalQuantity(String startlogtime,String endlogtime);
    
    double getTotalMoney(String startlogtime,String endlogtime);
    
    double getTotalInvoiceNum(String startlogtime,String endlogtime);

}

