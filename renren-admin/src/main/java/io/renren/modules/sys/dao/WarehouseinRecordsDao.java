package io.renren.modules.sys.dao;

import io.renren.modules.sys.entity.WarehouseinRecordsEntity;

import org.apache.ibatis.annotations.Param;

import com.baomidou.mybatisplus.mapper.BaseMapper;

/**
 * 
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-11-01 17:23:38
 */
public interface WarehouseinRecordsDao extends BaseMapper<WarehouseinRecordsEntity> {
	int selectByWarehouseResord(String receiptNumber);
	int updateWarehouseByName(WarehouseinRecordsEntity warehouseinRecordsEntity);
	double getTotalQuantity(@Param("startlogtime")String startlogtime,@Param("endlogtime")String endlogtime);
	double getTotalMoney(@Param("startlogtime")String startlogtime,@Param("endlogtime")String endlogtime);
	double getTotalInvoiceNum(@Param("startlogtime")String startlogtime,@Param("endlogtime")String endlogtime);
}
