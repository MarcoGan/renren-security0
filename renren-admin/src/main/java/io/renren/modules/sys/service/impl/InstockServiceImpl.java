package io.renren.modules.sys.service.impl;

import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.Query;

import io.renren.modules.sys.dao.InstockDao;
import io.renren.modules.sys.entity.InstockEntity;
import io.renren.modules.sys.service.InstockService;


@Service("instockService")
public class InstockServiceImpl extends ServiceImpl<InstockDao, InstockEntity> implements InstockService {

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
        Page<InstockEntity> page = this.selectPage(
                new Query<InstockEntity>(params).getPage(),
                new EntityWrapper<InstockEntity>()
                .like(StringUtils.isNotBlank(codename),"codename", codename)
                .like(StringUtils.isNotBlank(selected),"remark", selected)
                .ge(StringUtils.isNotBlank(startlogtime),"instockdate", startlogtime)
                .le(StringUtils.isNotBlank(endlogtime),"instockdate", endlogtime)
        );

        return new PageUtils(page);
    }

}
