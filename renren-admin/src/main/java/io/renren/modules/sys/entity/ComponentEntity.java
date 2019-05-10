package io.renren.modules.sys.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;

import java.io.Serializable;
import java.util.Date;

/**
 * 
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-09-29 09:43:14
 */
@TableName("component")
public class ComponentEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 终端Id
	 */
	@TableId
	private String terminalid;
	/**
	 * 物料类型
	 */
	private String mixturetype;
	/**
	 * 成份1
	 */
	private Double componentA;
	/**
	 * 成份2
	 */
	private Double componentB;
	/**
	 * 成份3
	 */
	private Double componentC;
	/**
	 * 成份4
	 */
	private Double componentD;
	/**
	 * 成份5
	 */
	private Double componentE;
	/**
	 * 成份6
	 */
	private Double componentF;
	/**
	 * 时间
	 */
	private Date logtime;

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
	 * 设置：物料类型
	 */
	public void setMixturetype(String mixturetype) {
		this.mixturetype = mixturetype;
	}
	/**
	 * 获取：物料类型
	 */
	public String getMixturetype() {
		return mixturetype;
	}
	/**
	 * 设置：成份1
	 */
	public void setComponentA(Double componentA) {
		this.componentA = componentA;
	}
	/**
	 * 获取：成份1
	 */
	public Double getComponentA() {
		return componentA;
	}
	/**
	 * 设置：成份2
	 */
	public void setComponentB(Double componentB) {
		this.componentB = componentB;
	}
	/**
	 * 获取：成份2
	 */
	public Double getComponentB() {
		return componentB;
	}
	/**
	 * 设置：成份3
	 */
	public void setComponentC(Double componentC) {
		this.componentC = componentC;
	}
	/**
	 * 获取：成份3
	 */
	public Double getComponentC() {
		return componentC;
	}
	/**
	 * 设置：成份4
	 */
	public void setComponentD(Double componentD) {
		this.componentD = componentD;
	}
	/**
	 * 获取：成份4
	 */
	public Double getComponentD() {
		return componentD;
	}
	/**
	 * 设置：成份5
	 */
	public void setComponentE(Double componentE) {
		this.componentE = componentE;
	}
	/**
	 * 获取：成份5
	 */
	public Double getComponentE() {
		return componentE;
	}
	/**
	 * 设置：成份6
	 */
	public void setComponentF(Double componentF) {
		this.componentF = componentF;
	}
	/**
	 * 获取：成份6
	 */
	public Double getComponentF() {
		return componentF;
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
	@Override
	public String toString() {
		return "ComponentEntity [terminalid=" + terminalid + ", mixturetype=" + mixturetype + ", componentA="
				+ componentA + ", componentB=" + componentB + ", componentC=" + componentC + ", componentD="
				+ componentD + ", componentE=" + componentE + ", componentF=" + componentF + ", logtime=" + logtime
				+ "]";
	}
	
}
