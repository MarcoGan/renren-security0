package io.renren.modules.sys.dao;

import io.renren.modules.sys.entity.WaterWasteEntity;

import org.apache.ibatis.annotations.Param;

import com.baomidou.mybatisplus.mapper.BaseMapper;

/**
 * 
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-10-25 15:38:16
 */
public interface WaterWasteDao extends BaseMapper<WaterWasteEntity> {
	
	WaterWasteEntity queryById(@Param("Id")int Id);
	
	int insertWWE(@Param("site")String site,@Param("month")String month,@Param("materialtype")String materialtype,@Param("limestoneWater")double limestoneWater,
			@Param("limestoneWaste")double limestoneWaste,@Param("melonslicesWater")double melonslicesWater,@Param("melonslicesWaste")double melonslicesWaste,@Param("millingMaterialWater")double millingMaterialWater,
			@Param("millingMaterialWaste")double millingMaterialWaste,@Param("comminutionWater")double comminutionWater,@Param("comminutionWaste")double comminutionWaste,@Param("highMaterial1Water")double highMaterial1Water,
			@Param("highMaterial1Waste")double highMaterial1Waste,@Param("highMaterial2Water")double highMaterial2Water,@Param("highMaterial2Waste")double highMaterial2Waste,@Param("woodFiber")double woodFiber,
			@Param("antistrippingAgent")double antistrippingAgent);
	
	int updateWWE(@Param("Id")int Id,@Param("site")String site,@Param("month")String month,@Param("materialtype")String materialtype,@Param("limestoneWater")double limestoneWater,
			@Param("limestoneWaste")double limestoneWaste,@Param("melonslicesWater")double melonslicesWater,@Param("melonslicesWaste")double melonslicesWaste,@Param("millingMaterialWater")double millingMaterialWater,
			@Param("millingMaterialWaste")double millingMaterialWaste,@Param("comminutionWater")double comminutionWater,@Param("comminutionWaste")double comminutionWaste,@Param("highMaterial1Water")double highMaterial1Water,
			@Param("highMaterial1Waste")double highMaterial1Waste,@Param("highMaterial2Water")double highMaterial2Water,@Param("highMaterial2Waste")double highMaterial2Waste,@Param("woodFiber")double woodFiber,
			@Param("antistrippingAgent")double antistrippingAgent);
	
	WaterWasteEntity queryBySSM(@Param("searchdate")String searchdate,@Param("terminalId")String terminalId,@Param("mixturetype")String mixturetype);
}
