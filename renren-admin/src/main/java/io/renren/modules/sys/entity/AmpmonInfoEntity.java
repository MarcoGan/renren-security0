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
 * @date 2018-09-06 09:14:57
 */
@TableName("ampmon_info")
public class AmpmonInfoEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@TableId
	private String terminalid;
	/**
	 * 
	 */
	private String mixturetype;
	/**
	 * 
	 */
	private Date mintime;
	/**
	 * 
	 */
	private Double aggregatea;
	/**
	 * 
	 */
	private Double aggregateb;
	/**
	 * 
	 */
	private Double aggregatec;
	/**
	 * 
	 */
	private Double aggregated;
	/**
	 * 
	 */
	private Double aggregatee;
	/**
	 * 
	 */
	private Double aggregatef;
	/**
	 * 
	 */
	private Double aggregateg;
	/**
	 * 
	 */
	private Double aggregateh;
	/**
	 * 
	 */
	private Double pitchweight;
	/**
	 * 
	 */
	private Double powder1;
	/**
	 * 
	 */
	private Double powder2;
	/**
	 * 
	 */
	private Double additiveweight;
	/**
	 * 
	 */
	private Double mintemperature;
	/**
	 * 
	 */
	private Double heattemperature;
	/**
	 * 
	 */
	private Date logtime;
	/**
	 * 
	 */
	private Double latitude;
	/**
	 * 
	 */
	private Double longitude;
	/**
	 * 
	 */
	private Date logdate;

	/**
	 * 设置：
	 */
	public void setTerminalid(String terminalid) {
		this.terminalid = terminalid;
	}
	/**
	 * 获取：
	 */
	public String getTerminalid() {
		return terminalid;
	}
	/**
	 * 设置：
	 */
	public void setMixturetype(String mixturetype) {
		this.mixturetype = mixturetype;
	}
	/**
	 * 获取：
	 */
	public String getMixturetype() {
		return mixturetype;
	}
	/**
	 * 设置：
	 */
	public void setMintime(Date mintime) {
		this.mintime = mintime;
	}
	/**
	 * 获取：
	 */
	public Date getMintime() {
		return mintime;
	}
	/**
	 * 设置：
	 */
	public void setAggregatea(Double aggregatea) {
		this.aggregatea = aggregatea;
	}
	/**
	 * 获取：
	 */
	public Double getAggregatea() {
		return aggregatea;
	}
	/**
	 * 设置：
	 */
	public void setAggregateb(Double aggregateb) {
		this.aggregateb = aggregateb;
	}
	/**
	 * 获取：
	 */
	public Double getAggregateb() {
		return aggregateb;
	}
	/**
	 * 设置：
	 */
	public void setAggregatec(Double aggregatec) {
		this.aggregatec = aggregatec;
	}
	/**
	 * 获取：
	 */
	public Double getAggregatec() {
		return aggregatec;
	}
	/**
	 * 设置：
	 */
	public void setAggregated(Double aggregated) {
		this.aggregated = aggregated;
	}
	/**
	 * 获取：
	 */
	public Double getAggregated() {
		return aggregated;
	}
	/**
	 * 设置：
	 */
	public void setAggregatee(Double aggregatee) {
		this.aggregatee = aggregatee;
	}
	/**
	 * 获取：
	 */
	public Double getAggregatee() {
		return aggregatee;
	}
	/**
	 * 设置：
	 */
	public void setAggregatef(Double aggregatef) {
		this.aggregatef = aggregatef;
	}
	/**
	 * 获取：
	 */
	public Double getAggregatef() {
		return aggregatef;
	}
	/**
	 * 设置：
	 */
	public void setAggregateg(Double aggregateg) {
		this.aggregateg = aggregateg;
	}
	/**
	 * 获取：
	 */
	public Double getAggregateg() {
		return aggregateg;
	}
	/**
	 * 设置：
	 */
	public void setAggregateh(Double aggregateh) {
		this.aggregateh = aggregateh;
	}
	/**
	 * 获取：
	 */
	public Double getAggregateh() {
		return aggregateh;
	}
	/**
	 * 设置：
	 */
	public void setPitchweight(Double pitchweight) {
		this.pitchweight = pitchweight;
	}
	/**
	 * 获取：
	 */
	public Double getPitchweight() {
		return pitchweight;
	}
	/**
	 * 设置：
	 */
	public void setPowder1(Double powder1) {
		this.powder1 = powder1;
	}
	/**
	 * 获取：
	 */
	public Double getPowder1() {
		return powder1;
	}
	/**
	 * 设置：
	 */
	public void setPowder2(Double powder2) {
		this.powder2 = powder2;
	}
	/**
	 * 获取：
	 */
	public Double getPowder2() {
		return powder2;
	}
	/**
	 * 设置：
	 */
	public void setAdditiveweight(Double additiveweight) {
		this.additiveweight = additiveweight;
	}
	/**
	 * 获取：
	 */
	public Double getAdditiveweight() {
		return additiveweight;
	}
	/**
	 * 设置：
	 */
	public void setMintemperature(Double mintemperature) {
		this.mintemperature = mintemperature;
	}
	/**
	 * 获取：
	 */
	public Double getMintemperature() {
		return mintemperature;
	}
	/**
	 * 设置：
	 */
	public void setHeattemperature(Double heattemperature) {
		this.heattemperature = heattemperature;
	}
	/**
	 * 获取：
	 */
	public Double getHeattemperature() {
		return heattemperature;
	}
	/**
	 * 设置：
	 */
	public void setLogtime(Date logtime) {
		this.logtime = logtime;
	}
	/**
	 * 获取：
	 */
	public Date getLogtime() {
		return logtime;
	}
	/**
	 * 设置：
	 */
	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}
	/**
	 * 获取：
	 */
	public Double getLatitude() {
		return latitude;
	}
	/**
	 * 设置：
	 */
	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}
	/**
	 * 获取：
	 */
	public Double getLongitude() {
		return longitude;
	}
	/**
	 * 设置：
	 */
	public void setLogdate(Date logdate) {
		this.logdate = logdate;
	}
	/**
	 * 获取：
	 */
	public Date getLogdate() {
		return logdate;
	}
}
