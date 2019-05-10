package io.renren.modules.sys.service.impl;

import org.springframework.stereotype.Service;

import java.util.List;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;

import io.renren.modules.sys.dao.ComponentDao;
import io.renren.modules.sys.entity.ComponentEntity;
import io.renren.modules.sys.service.ComponentService;


@Service("componentService")
public class ComponentServiceImpl extends ServiceImpl<ComponentDao, ComponentEntity> implements ComponentService {

	 /*@Override
	    public PageUtils queryPage(Map<String, Object> params) {
	        Page<ComponentEntity> page = this.selectPage(
	                new Query<ComponentEntity>(params).getPage(),
	                new EntityWrapper<ComponentEntity>()
	        );

	        return new PageUtils(page);
	    }*/
	
	@Override
	public List<ComponentEntity> calculateComponentQ() {
		return baseMapper.calculateComponentQ();
	}

	@Override
	public List<ComponentEntity> calculateComponentL() {
		// TODO Auto-generated method stub
		return baseMapper.calculateComponentL();
	}

	@Override
	public List<ComponentEntity> componetLastMonthA(String terminalId, String dateyear, String datemonth, String mixturetype) {
		// TODO Auto-generated method stub
		return baseMapper.componetLastMonthA(terminalId, dateyear,datemonth,mixturetype);
	}


}
