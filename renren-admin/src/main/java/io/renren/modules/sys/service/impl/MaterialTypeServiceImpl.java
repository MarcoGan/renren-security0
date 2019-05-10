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

import io.renren.modules.sys.dao.MaterialTypeDao;
import io.renren.modules.sys.entity.MaterialTypeEntity;
import io.renren.modules.sys.service.MaterialTypeService;


@Service("materialTypeService")
public class MaterialTypeServiceImpl extends ServiceImpl<MaterialTypeDao, MaterialTypeEntity> implements MaterialTypeService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
    	String materialtypename = (String)params.get("materialtypename");
        Page<MaterialTypeEntity> page = this.selectPage(
                new Query<MaterialTypeEntity>(params).getPage(),
                new EntityWrapper<MaterialTypeEntity>()
                .like(StringUtils.isNotBlank(materialtypename),"materialtypename", materialtypename)
        );

        return new PageUtils(page);
    }

	@Override
	public List<MaterialTypeEntity> queryList() {
		List<MaterialTypeEntity> typeList =
				this.selectList(new EntityWrapper<MaterialTypeEntity>());
		
		for(MaterialTypeEntity materialTypeEntity : typeList){
			materialTypeEntity.setName(materialTypeEntity.getMaterialtypename());
		}
			return typeList;
	}

}
