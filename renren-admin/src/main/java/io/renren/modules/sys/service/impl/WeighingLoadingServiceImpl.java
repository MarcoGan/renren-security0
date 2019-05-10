package io.renren.modules.sys.service.impl;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.Query;

import io.renren.modules.sys.dao.WeighingLoadingDao;
import io.renren.modules.sys.entity.WeighingLoadingEntity;
import io.renren.modules.sys.service.WeighingLoadingService;


@Service("weighingLoadingService")
public class WeighingLoadingServiceImpl extends ServiceImpl<WeighingLoadingDao, WeighingLoadingEntity> implements WeighingLoadingService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
    	String startlogtime = (String)params.get("startlogtime");
    	String endlogtime = (String)params.get("endlogtime");
    	String selected = (String)params.get("selected");
    	if(StringUtils.isNotBlank(selected)){
    	if(selected.equals("全部")){
    		selected = "";
    	}
    	}
        Page<WeighingLoadingEntity> page = this.selectPage(
                new Query<WeighingLoadingEntity>(params).getPage(),
                new EntityWrapper<WeighingLoadingEntity>()
                .like(StringUtils.isNotBlank(selected),"location", selected)
                .ge(StringUtils.isNotBlank(startlogtime),"dispatch_date", startlogtime)
                .le(StringUtils.isNotBlank(endlogtime),"dispatch_date", endlogtime)
        );

        return new PageUtils(page);
    }

}
