package io.renren.modules.sys.service.impl;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.Query;

import io.renren.modules.sys.dao.PlantLocationDao;
import io.renren.modules.sys.entity.PlantLocationEntity;
import io.renren.modules.sys.service.PlantLocationService;


@Service("plantLocationService")
public class PlantLocationServiceImpl extends ServiceImpl<PlantLocationDao, PlantLocationEntity> implements PlantLocationService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<PlantLocationEntity> page = this.selectPage(
                new Query<PlantLocationEntity>(params).getPage(),
                new EntityWrapper<PlantLocationEntity>()
        );

        return new PageUtils(page);
    }

	/*@Override
	public List<PlantLocationEntity> getPlace() {
		return baseMapper.getPlace();
	}*/

}
