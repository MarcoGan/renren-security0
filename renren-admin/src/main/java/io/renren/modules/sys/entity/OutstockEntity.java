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
 * @date 2018-08-30 14:44:12
 */
@TableName("outstock")
public class OutstockEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 出库id
	 */
	@TableId
	private Integer id;
	/**
	 * 物料类型
	 */
	private String codename;
	/**
	 * 出库日期
	 */
	private Date outstockdate;
	/**
	 * 出库重量
	 */
	private Double outweight;
	/**
	 * 备注
	 */
	private String remark;

	/**
	 * 设置：出库id
	 */
	public void setId(Integer id) {
		this.id = id;
	}
	/**
	 * 获取：出库id
	 */
	public Integer getId() {
		return id;
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
	 * 设置：出库日期
	 */
	public void setOutstockdate(Date outstockdate) {
		this.outstockdate = outstockdate;
	}
	/**
	 * 获取：出库日期
	 */
	public Date getOutstockdate() {
		return outstockdate;
	}
	/**
	 * 设置：出库重量
	 */
	public void setOutweight(Double outweight) {
		this.outweight = outweight;
	}
	/**
	 * 获取：出库重量
	 */
	public Double getOutweight() {
		return outweight;
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
}
