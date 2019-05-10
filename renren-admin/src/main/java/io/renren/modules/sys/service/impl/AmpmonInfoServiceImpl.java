package io.renren.modules.sys.service.impl;

import org.springframework.stereotype.Service;

import java.util.List;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;

import io.renren.modules.sys.dao.AmpmonInfoDao;
import io.renren.modules.sys.entity.AmpmonInfoEntity;
import io.renren.modules.sys.service.AmpmonInfoService;


@Service("ampmonInfoService")
public class AmpmonInfoServiceImpl extends ServiceImpl<AmpmonInfoDao, AmpmonInfoEntity> implements AmpmonInfoService {

	@Override
	public List<AmpmonInfoEntity> calculateComponentQ() {
		// TODO Auto-generated method stub
		return baseMapper.calculateComponentQ();
	}

	@Override
	public List<AmpmonInfoEntity> calculateComponentL() {
		// TODO Auto-generated method stub
		return baseMapper.calculateComponentL();
	}

	@Override
	public List<AmpmonInfoEntity> countLastMonthA(String terminalId, String dateyear, String datemonth, String mixturetype) {
		// TODO Auto-generated method stub
		return baseMapper.countLastMonthA(terminalId,dateyear,datemonth,mixturetype);
	}

    /*@Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<AmpmonInfoEntity> page = this.selectPage(
                new Query<AmpmonInfoEntity>(params).getPage(),
                new EntityWrapper<AmpmonInfoEntity>()
        );

        return new PageUtils(page);
    }*/

}
