package io.renren.modules.sys.service;

import com.baomidou.mybatisplus.service.IService;
import io.renren.common.utils.PageUtils;
import io.renren.modules.sys.entity.AmpmonInfoEntity;
import io.renren.modules.sys.entity.ComponentEntity;

import java.util.List;
import java.util.Map;

/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-09-06 09:14:57
 */
public interface AmpmonInfoService extends IService<AmpmonInfoEntity> {
	
	/*PageUtils queryPage(Map<String, Object> params);*/
	
	List<AmpmonInfoEntity> calculateComponentQ();
	List<AmpmonInfoEntity> calculateComponentL();
	List<AmpmonInfoEntity> countLastMonthA(String terminalId, String dateyear, String datemonth, String mixturetype);
}

