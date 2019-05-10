package io.renren.modules.sys.service.impl;

import org.springframework.stereotype.Service;
import org.apache.commons.lang.StringUtils;

import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.Query;

import io.renren.modules.sys.dao.UnitpriceDao;
import io.renren.modules.sys.entity.UnitpriceEntity;
import io.renren.modules.sys.service.UnitpriceService;


@Service("unitpriceService")
public class UnitpriceServiceImpl extends ServiceImpl<UnitpriceDao, UnitpriceEntity> implements UnitpriceService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
    	String monthtime = (String)params.get("monthtime");
    	String selected = (String)params.get("selected");
        Page<UnitpriceEntity> page = this.selectPage(
                new Query<UnitpriceEntity>(params).getPage(),
                new EntityWrapper<UnitpriceEntity>()
                .like(StringUtils.isNotBlank(monthtime),"price_month", monthtime)
                .like(StringUtils.isNotBlank(selected),"Terminalid", selected)
        );

        return new PageUtils(page);
    }
    
    @Override
	public List<UnitpriceEntity> getprice(String searchdate, String terminalId) {
		// TODO Auto-generated method stub
		return baseMapper.getprice(searchdate,terminalId);
	}
}
