package io.renren.modules.sys.entity;

import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;

import java.io.Serializable;
import java.util.Date;

/**
 * 
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2019-01-24 11:17:52
 */
@TableName("weighing_loading")
public class WeighingLoadingEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@TableId
	private Integer id;
	/**
	 * 所在地
	 */
	private String location;
	/**
	 * 发送时间
	 */
	private Date sendtime;
	/**
	 * 厂地列表
	 */
	@TableField(exist=false)
	private String placeIdList;
	/**
	 * 收货单位
	 */
	private String consignee;
	/**
	 * 日期
	 */
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd")
	private Date dispatchDate;
	/**
	 * 货名
	 */
	private String cargoName;
	/**
	 * 规格
	 */
	private String specification;
	/**
	 * 车号
	 */
	private String plateNumber;
	/**
	 * 毛重
	 */
	private Double grossWeight;
	/**
	 * 皮重
	 */
	private Double tareWeight;
	/**
	 * 净重
	 */
	private Double netWeight;
	/**
	 * 地点
	 */
	private String site;
	/**
	 * 备注
	 */
	private String remark;
	/**
	 * 司磅员
	 */
	private String weighman;
	/**
	 * 监磅人
	 */
	private String superintendent;
	/**
	 * 收货人
	 */
	private String consigneeman;

	/**
	 * 设置：
	 */
	public void setId(Integer id) {
		this.id = id;
	}
	/**
	 * 获取：
	 */
	public Integer getId() {
		return id;
	}
	/**
	 * 设置：所在地
	 */
	public void setLocation(String location) {
		this.location = location;
	}
	/**
	 * 获取：所在地
	 */
	public String getLocation() {
		return location;
	}
	/**
	 * 设置：发送时间
	 */
	public void setSendtime(Date sendtime) {
		this.sendtime = sendtime;
	}
	/**
	 * 获取：发送时间
	 */
	public Date getSendtime() {
		return sendtime;
	}
	/**
	 * 设置：收货单位
	 */
	public void setConsignee(String consignee) {
		this.consignee = consignee;
	}
	/**
	 * 获取：收货单位
	 */
	public String getConsignee() {
		return consignee;
	}
	/**
	 * 设置：日期
	 */
	public void setDispatchDate(Date dispatchDate) {
		this.dispatchDate = dispatchDate;
	}
	/**
	 * 获取：日期
	 */
	public Date getDispatchDate() {
		return dispatchDate;
	}
	/**
	 * 设置：货名
	 */
	public void setCargoName(String cargoName) {
		this.cargoName = cargoName;
	}
	/**
	 * 获取：货名
	 */
	public String getCargoName() {
		return cargoName;
	}
	/**
	 * 设置：规格
	 */
	public void setSpecification(String specification) {
		this.specification = specification;
	}
	/**
	 * 获取：规格
	 */
	public String getSpecification() {
		return specification;
	}
	/**
	 * 设置：车号
	 */
	public void setPlateNumber(String plateNumber) {
		this.plateNumber = plateNumber;
	}
	/**
	 * 获取：车号
	 */
	public String getPlateNumber() {
		return plateNumber;
	}
	/**
	 * 设置：毛重
	 */
	public void setGrossWeight(Double grossWeight) {
		this.grossWeight = grossWeight;
	}
	/**
	 * 获取：毛重
	 */
	public Double getGrossWeight() {
		return grossWeight;
	}
	/**
	 * 设置：皮重
	 */
	public void setTareWeight(Double tareWeight) {
		this.tareWeight = tareWeight;
	}
	/**
	 * 获取：皮重
	 */
	public Double getTareWeight() {
		return tareWeight;
	}
	/**
	 * 设置：净重
	 */
	public void setNetWeight(Double netWeight) {
		this.netWeight = netWeight;
	}
	/**
	 * 获取：净重
	 */
	public Double getNetWeight() {
		return netWeight;
	}
	/**
	 * 设置：地点
	 */
	public void setSite(String site) {
		this.site = site;
	}
	/**
	 * 获取：地点
	 */
	public String getSite() {
		return site;
	}
	/**
	 * 设置：备注
	 */
	public void setRemark(String remark) {
		this.remark = remark;
	}
	/**
	 * 获取：备注
	 */
	public String getRemark() {
		return remark;
	}
	/**
	 * 设置：司磅员
	 */
	public void setWeighman(String weighman) {
		this.weighman = weighman;
	}
	/**
	 * 获取：司磅员
	 */
	public String getWeighman() {
		return weighman;
	}
	/**
	 * 设置：监磅人
	 */
	public void setSuperintendent(String superintendent) {
		this.superintendent = superintendent;
	}
	/**
	 * 获取：监磅人
	 */
	public String getSuperintendent() {
		return superintendent;
	}
	/**
	 * 设置：收货人
	 */
	public void setConsigneeman(String consigneeman) {
		this.consigneeman = consigneeman;
	}
	/**
	 * 获取：收货人
	 */
	public String getConsigneeman() {
		return consigneeman;
	}
	public String getPlaceIdList() {
		return placeIdList;
	}
	public void setPlaceIdList(String placeIdList) {
		this.placeIdList = placeIdList;
	}
}
