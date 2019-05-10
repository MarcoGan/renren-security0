package io.renren.modules.sys.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.Query;

import io.renren.modules.sys.dao.WaterWasteDao;
import io.renren.modules.sys.entity.WaterWasteEntity;
import io.renren.modules.sys.service.WaterWasteService;


@Service("waterWasteService")
public class WaterWasteServiceImpl extends ServiceImpl<WaterWasteDao, WaterWasteEntity> implements WaterWasteService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<WaterWasteEntity> page = this.selectPage(
                new Query<WaterWasteEntity>(params).getPage(),
                new EntityWrapper<WaterWasteEntity>()
        );

        return new PageUtils(page);
    }

	@Override
	public WaterWasteEntity queryById(int Id) {
		// TODO Auto-generated method stub
		WaterWasteEntity wwe = baseMapper.queryById(Id);
		return wwe;
	}

	@Override
	public int insertWWE(WaterWasteEntity wwe) {
		int num = baseMapper.insertWWE(wwe.getSite(), wwe.getMonth(), wwe.getMaterialtype(),
				wwe.getLimestoneWater(), wwe.getLimestoneWaste(), wwe.getMelonslicesWater(), 
				wwe.getMelonslicesWaste(), wwe.getMillingMaterialWater(), wwe.getMillingMaterialWaste(), 
				wwe.getComminutionWater(), wwe.getComminutionWaste(), wwe.getHighMaterial1Water(), wwe.getHighMaterial1Waste(), 
				wwe.getHighMaterial2Water(), wwe.getHighMaterial2Waste(), wwe.getWoodFiber(), wwe.getAntistrippingAgent());
		return num;
		
	}

	@Override
	public int updateWWE(WaterWasteEntity wwe) {
		// TODO Auto-generated method stub
		int num = baseMapper.updateWWE(wwe.getId(),wwe.getSite(), wwe.getMonth(), wwe.getMaterialtype(),
				wwe.getLimestoneWater(), wwe.getLimestoneWaste(), wwe.getMelonslicesWater(), 
				wwe.getMelonslicesWaste(), wwe.getMillingMaterialWater(), wwe.getMillingMaterialWaste(), 
				wwe.getComminutionWater(), wwe.getComminutionWaste(), wwe.getHighMaterial1Water(), wwe.getHighMaterial1Waste(), 
				wwe.getHighMaterial2Water(), wwe.getHighMaterial2Waste(), wwe.getWoodFiber(), wwe.getAntistrippingAgent());
		return num;
		
	}

	@Override
	public WaterWasteEntity queryBySSM(String searchdate, String terminalId, String mixturetype) {
		WaterWasteEntity wwe = baseMapper.queryBySSM(searchdate, terminalId, mixturetype);
		return wwe;
	}

}
