package io.renren.modules.sys.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.Query;

import io.renren.modules.sys.dao.CardescripeDao;
import io.renren.modules.sys.entity.CardescripeEntity;
import io.renren.modules.sys.service.CardescripeService;


@Service("cardescripeService")
public class CardescripeServiceImpl extends ServiceImpl<CardescripeDao, CardescripeEntity> implements CardescripeService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<CardescripeEntity> page = this.selectPage(
                new Query<CardescripeEntity>(params).getPage(),
                new EntityWrapper<CardescripeEntity>()
        );

        return new PageUtils(page);
    }

}
