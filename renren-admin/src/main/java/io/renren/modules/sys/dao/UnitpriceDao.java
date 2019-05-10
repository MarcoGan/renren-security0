package io.renren.modules.sys.dao;

import io.renren.modules.sys.entity.UnitpriceEntity;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.baomidou.mybatisplus.mapper.BaseMapper;

/**
 * 
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-10-16 09:17:33
 */
public interface UnitpriceDao extends BaseMapper<UnitpriceEntity> {
	
	List<UnitpriceEntity> getprice(@Param("searchdate")String searchdate, @Param("terminalId")String terminalId);
}
