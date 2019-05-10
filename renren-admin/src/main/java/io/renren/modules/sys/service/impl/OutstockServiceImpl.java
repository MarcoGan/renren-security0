package io.renren.modules.sys.service.impl;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.Query;

import io.renren.modules.sys.dao.OutstockDao;
import io.renren.modules.sys.entity.OutstockEntity;
import io.renren.modules.sys.service.OutstockService;


@Service("outstockService")
public class OutstockServiceImpl extends ServiceImpl<OutstockDao, OutstockEntity> implements OutstockService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
    	String codename = (String)params.get("codename");
    	String startlogtime = (String)params.get("startlogtime");
    	String endlogtime = (String)params.get("endlogtime");
    	String selected = (String)params.get("selected");
    	if(StringUtils.isNotBlank(selected)){
    	if(selected.equals("全部")){
    		selected = "";
    	}
    	}
        Page<OutstockEntity> page = this.selectPage(
                new Query<OutstockEntity>(params).getPage(),
                new EntityWrapper<OutstockEntity>()
                .like(StringUtils.isNotBlank(codename),"codename", codename)
                .like(StringUtils.isNotBlank(selected),"remark", selected)
                .ge(StringUtils.isNotBlank(startlogtime),"outstockdate", startlogtime)
                .le(StringUtils.isNotBlank(endlogtime),"outstockdate", endlogtime)
        );
        return new PageUtils(page);
    }

}
