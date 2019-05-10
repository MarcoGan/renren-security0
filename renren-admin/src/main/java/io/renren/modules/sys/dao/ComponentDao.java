package io.renren.modules.sys.dao;

import io.renren.modules.sys.entity.ComponentEntity;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.baomidou.mybatisplus.mapper.BaseMapper;

/**
 * 
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-09-06 09:14:40
 */
public interface ComponentDao extends BaseMapper<ComponentEntity> {
	List<ComponentEntity> calculateComponentQ();
	List<ComponentEntity> calculateComponentL();
	List<ComponentEntity> componetLastMonthA(@Param("terminalId")String terminalId, @Param("dateyear")String dateyear, @Param("datemonth")String datemonth,@Param("mixturetype")String mixturetype);
}
