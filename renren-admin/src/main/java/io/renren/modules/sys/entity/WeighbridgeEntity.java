package io.renren.modules.sys.entity;

import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * 
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-30 14:44:11
 */
@TableName("weighbridge")
public class WeighbridgeEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 重量数据Id
	 */
	@TableId
	private Integer dataid;
	/**
	 * 终端Id
	 */
	private String terminalid;
	/**
	 * 时间
	 */
	private Date logtime;
	/**
	 * 厂地列表
	 */
	@TableField(exist=false)
	private String placeIdList;
	/**
	 * 物料类型
	 */
	private String codename;
	/**
	 * 重量
	 */
	private Double weight;
	/**
	 * 车牌号
	 */
	private String carno;
	/**
	 * 车辆进厂或出厂
	 */
	private String inorout;
	
	/**
	 * 设置：重量数据Id
	 */
	public void setDataid(Integer dataid) {
		this.dataid = dataid;
	}
	/**
	 * 获取：重量数据Id
	 */
	public Integer getDataid() {
		return dataid;
	}
	/**
	 * 设置：终端Id
	 */
	public void setTerminalid(String terminalid) {
		this.terminalid = terminalid;
	}
	/**
	 * 获取：终端Id
	 */
	public String getTerminalid() {
		return terminalid;
	}
	/**
	 * 设置：时间
	 */
	public void setLogtime(Date logtime) {
		this.logtime = logtime;
	}
	/**
	 * 获取：时间
	 */
	public Date getLogtime() {
		return logtime;
	}
	/**
	 * 设置：物料类型
	 */
	public void setCodename(String codename) {
		this.codename = codename;
	}
	/**
	 * 获取：物料类型
	 */
	public String getCodename() {
		return codename;
	}
	/**
	 * 设置：重量
	 */
	public void setWeight(Double weight) {
		this.weight = weight;
	}
	/**
	 * 获取：重量
	 */
	public Double getWeight() {
		return weight;
	}
	/**
	 * 设置：车牌号
	 */
	public void setCarno(String carno) {
		this.carno = carno;
	}
	/**
	 * 获取：车牌号
	 */
	public String getCarno() {
		return carno;
	}
	/**
	 * 设置：车辆进厂或出厂
	 */
	public void setInorout(String inorout) {
		this.inorout = inorout;
	}
	/**
	 * 获取：车辆进厂或出厂
	 */
	public String getInorout() {
		return inorout;
	}
	public String getPlaceIdList() {
		return placeIdList;
	}
	public void setPlaceIdList(String placeIdList) {
		this.placeIdList = placeIdList;
	}
}
