package io.renren.modules.sys.dao;

import io.renren.modules.sys.entity.StockEntity;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.baomidou.mybatisplus.mapper.BaseMapper;

/**
 * 
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-30 14:44:12
 */
public interface StockDao extends BaseMapper<StockEntity> {
	List<StockEntity> queryList();
	
	List<StockEntity> queryListL();
	
	void updateStockweight(@Param("codeName")String codeName, @Param("dataA")double dataA);
	
	void updateStockweightL(@Param("codeName")String codeName, @Param("dataA")double dataA);
}
