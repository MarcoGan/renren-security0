package io.renren.modules.job.task;

import io.renren.modules.sys.entity.AmpmonInfoEntity;
import io.renren.modules.sys.entity.ComponentEntity;
import io.renren.modules.sys.entity.MaterialTypeEntity;
import io.renren.modules.sys.entity.OutstockEntity;
import io.renren.modules.sys.entity.StockEntity;

/**
 * Copyright 2018 人人开源 http://www.renren.io
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import io.renren.modules.sys.entity.SysUserEntity;
import io.renren.modules.sys.service.AmpmonInfoService;
import io.renren.modules.sys.service.ComponentService;
import io.renren.modules.sys.service.MaterialTypeService;
import io.renren.modules.sys.service.OutstockService;
import io.renren.modules.sys.service.StockService;
import io.renren.modules.sys.service.SysUserService;
import org.apache.commons.lang.builder.ToStringBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * 测试定时任务(演示Demo，可删除)
 *
 * testTask为spring bean的名称
 *
 * @author Mark sunlightcs@gmail.com
 * @since 1.2.0 2016-11-28
 */
@Component("taskL")
public class TaskL {
	private Logger logger = LoggerFactory.getLogger(getClass());
	
	@Autowired
	private SysUserService sysUserService;
	@Autowired
	private AmpmonInfoService ampmonInfoService;
	@Autowired
	private ComponentService componentService;
	@Autowired
	private MaterialTypeService materialTypeService;
	@Autowired
	private OutstockService outstockService;
	@Autowired
	private StockService stockService;
	
	
	public void test(String params){
		logger.info("我是带参数的test方法，正在被执行，参数为：" + params);
		
		try {
			Thread.sleep(1000L);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		SysUserEntity user = sysUserService.selectById(1L);
		System.out.println(ToStringBuilder.reflectionToString(user));
		
	}
	
	
	public void test2(){
		logger.info("我是不带参数的test2方法，正在被执行");
	}
	
	
	/**
	 * 库存统计：
	 */
	public void calculateComponent(){
		
	/**
	 * 出库信息插入(石粉，米砂，瓜子片，玄武岩2#，玄武岩1#)
	 */
	List<ComponentEntity> calculateList = componentService.calculateComponentL();
	List<Double> listA = new ArrayList<>();
	listA.add(calculateList.get(0).getComponentA());
	listA.add(calculateList.get(0).getComponentB());
	listA.add(calculateList.get(0).getComponentC());
	listA.add(calculateList.get(0).getComponentD());
	listA.add(calculateList.get(0).getComponentE());
	listA.add(calculateList.get(0).getComponentF());
	List<MaterialTypeEntity> typeList = materialTypeService.queryList();
	OutstockEntity outstockEntityA = new OutstockEntity();
	for(int i = 0;i<listA.size();i++){
		 if(i==3){
             continue;//忽略i==3时的循环
         }
		outstockEntityA.setCodename(typeList.get(i).getMaterialtypename());
		outstockEntityA.setOutstockdate(new Date());
		outstockEntityA.setOutweight(listA.get(i));
		outstockEntityA.setRemark("六合");
		outstockService.insert(outstockEntityA);
	}
	
	/**
	 * 出库信息插入(沥青油，铣刨料，矿粉)
	 */
	List<AmpmonInfoEntity> ampList = ampmonInfoService.calculateComponentL();
	List<Double> listB = new ArrayList<>();
	listB.add(ampList.get(0).getAggregateh());
	listB.add(ampList.get(0).getPitchweight());
	listB.add(ampList.get(0).getPowder1());
	int t = -1;
	OutstockEntity outstockEntityB = new OutstockEntity();
	for(int i = 6;i<listB.size()+6;i++){
		t = t+1;
		outstockEntityB.setCodename(typeList.get(i).getMaterialtypename());
		outstockEntityB.setOutstockdate(new Date());
		outstockEntityB.setOutweight(listB.get(t)/1000);
		outstockEntityB.setRemark("六合");
		outstockService.insert(outstockEntityB);
	}
	
	/**
	 * 出库信息插入(细碎)
	 */
		double countTotal=0;
		double countA=0;
		double countB=0;
		double countC=0;
		double countD=0;
		double countE=0;
		/*冷料总*/
		for (int i=0;i<listA.size();i++){
			countA = countA+listA.get(i);
		}
		System.out.println("冷料总++++++++++："+countA);
		List<Double> listC = new ArrayList<>();
		listC.add(ampList.get(0).getAggregatea());
		listC.add(ampList.get(0).getAggregateb());
		listC.add(ampList.get(0).getAggregatec());
		listC.add(ampList.get(0).getAggregated());
		listC.add(ampList.get(0).getAggregatee());
		listC.add(ampList.get(0).getAggregatef());
		listC.add(ampList.get(0).getAggregateg());
		/*骨料总*/
		for (int i=0;i<listC.size();i++){
			countB = countB+listC.get(i)/1000;
		}
		System.out.println("骨料总++++++++++："+countB);
		List<Double> listD = new ArrayList<>();
		listD = listC;
		listD.add(ampList.get(0).getAggregateh());
		listD.add(ampList.get(0).getPitchweight());
		listD.add(ampList.get(0).getPowder1());
		listD.add(ampList.get(0).getPowder2());
		listD.add(ampList.get(0).getAdditiveweight());
		/*混合料总*/
		for (int i=0;i<listD.size();i++){
			countC = countC+listD.get(i)/1000;
		}
		System.out.println("混合料总++++++++++："+countC);
		/*铣刨料总*/
		countD = (listB.get(1))/1000;
		System.out.println("铣刨料总++++++++++："+countD);
		/*成分4总*/
		countE = listA.get(3);
		System.out.println("成分4总++++++++++："+countE);
		countTotal = countA -(countC+countB*0.02+ countD*0.05+countC*0.05)+countE;
		System.out.println("细碎出库++++++++++："+countTotal);
		OutstockEntity outstockEntityC = new OutstockEntity();
		outstockEntityC.setCodename(typeList.get(3).getMaterialtypename());
		outstockEntityC.setOutstockdate(new Date());
		outstockEntityC.setOutweight(countTotal);
		outstockEntityC.setRemark("六合");
		outstockService.insert(outstockEntityC);
		
		/**
		 * 计算库存
		 */
		
		/*石粉，米砂，瓜子片，玄武岩2#，玄武岩1#*/
		List<StockEntity> stockList = stockService.queryListL();
		for(int i = 0;i<stockList.size()-3;i++){
			 if(i==3){
	             continue;//忽略i==3时的循环
	         }
			stockService.updateStockweightL(stockList.get(i).getCodename(), stockList.get(i).getStockweight() - listA.get(i));
		}
		/*沥青油，铣刨料,矿粉*/
			stockService.updateStockweightL(stockList.get(6).getCodename(), stockList.get(6).getStockweight() - (listB.get(0))/1000);
			stockService.updateStockweightL(stockList.get(7).getCodename(), stockList.get(7).getStockweight() - (listB.get(1))/1000);
			stockService.updateStockweightL(stockList.get(8).getCodename(), stockList.get(8).getStockweight() - (listB.get(2))/1000);
		/*成分4*/
			BigDecimal bg = new BigDecimal(stockList.get(3).getStockweight() - countTotal);
			double d = bg.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
			stockService.updateStockweightL(stockList.get(3).getCodename(), d);
	}
	
}
