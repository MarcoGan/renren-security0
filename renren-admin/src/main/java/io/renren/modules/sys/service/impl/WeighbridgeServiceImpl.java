package io.renren.modules.sys.service.impl;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.Query;

import io.renren.modules.sys.dao.WeighbridgeDao;
import io.renren.modules.sys.entity.WeighbridgeEntity;
import io.renren.modules.sys.service.WeighbridgeService;


@Service("weighbridgeService")
public class WeighbridgeServiceImpl extends ServiceImpl<WeighbridgeDao, WeighbridgeEntity> implements WeighbridgeService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
    	String carno = (String)params.get("carno");
    	String startlogtime = (String)params.get("startlogtime");
    	String endlogtime = (String)params.get("endlogtime");
    	String selected = (String)params.get("selected");
    	if(StringUtils.isNotBlank(selected)){
    	if(selected.equals("全部")){
    		selected = "";
    	}
    	}
        Page<WeighbridgeEntity> page = this.selectPage(
                new Query<WeighbridgeEntity>(params).getPage(),
                new EntityWrapper<WeighbridgeEntity>()
                .like(StringUtils.isNotBlank(carno),"carno", carno)
                .like(StringUtils.isNotBlank(selected),"terminalId", selected)
                .ge(StringUtils.isNotBlank(startlogtime),"logtime", startlogtime)
                .le(StringUtils.isNotBlank(endlogtime),"logtime", endlogtime)
                
        );

        return new PageUtils(page);
    }

}
