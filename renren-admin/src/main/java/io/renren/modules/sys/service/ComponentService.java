package io.renren.modules.sys.service;

import com.baomidou.mybatisplus.service.IService;
import io.renren.common.utils.PageUtils;
import io.renren.modules.sys.entity.ComponentEntity;

import java.util.List;
import java.util.Map;

/**
 * 
 *
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-09-06 09:14:40
 */
public interface ComponentService extends IService<ComponentEntity> {
	
	/*PageUtils queryPage(Map<String, Object> params);*/

	List<ComponentEntity> calculateComponentQ();
	List<ComponentEntity> calculateComponentL();
	List<ComponentEntity> componetLastMonthA(String terminalId, String dateyear, String datemonth, String mixturetype);

}

