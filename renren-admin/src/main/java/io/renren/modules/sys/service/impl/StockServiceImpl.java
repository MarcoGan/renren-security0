package io.renren.modules.sys.service.impl;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.Query;

import io.renren.modules.sys.dao.StockDao;
import io.renren.modules.sys.entity.StockEntity;
import io.renren.modules.sys.service.StockService;


@Service("stockService")
public class StockServiceImpl extends ServiceImpl<StockDao, StockEntity> implements StockService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
    	String codename = (String)params.get("codename");
    	String selected = (String)params.get("selected");
    	if(StringUtils.isBlank(selected)){
    		selected = "泉水";
    	}
        Page<StockEntity> page = this.selectPage(
                new Query<StockEntity>(params).getPage(),
                new EntityWrapper<StockEntity>() 
                .like(StringUtils.isNotBlank(codename),"codename", codename)
                .like(StringUtils.isNotBlank(selected),"remark", selected)
        );

        return new PageUtils(page);
    }

	@Override
	public List<StockEntity> queryList() {
		// TODO Auto-generated method stub
		return baseMapper.queryList();
	}

	@Override
	public List<StockEntity> queryListL() {
		// TODO Auto-generated method stub
		return baseMapper.queryListL();
	}

	
	@Override
	public void updateStockweight(String codeName, double dataA) {
		// TODO Auto-generated method stub
		 baseMapper.updateStockweight(codeName, dataA);
	}

	@Override
	public void updateStockweightL(String codeName, double dataA) {
		// TODO Auto-generated method stub
		baseMapper.updateStockweightL(codeName, dataA);
	}

	
}
