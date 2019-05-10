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
@TableName("instock")
public class InstockEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 入库Id
	 */
	@TableId
	private Integer id;
	/**
	 * 物料类型
	 */
	private String codename;
	/**
	 * 入库时间
	 */
	private Date instockdate;
	/**
	 * 入库重量
	 */
	private Double inweight;
	/**
	 * 备注
	 */
	private String remark;

	/**
	 * 设置：入库Id
	 */
	public void setId(Integer id) {
		this.id = id;
	}
	/**
	 * 获取：入库Id
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
	 * 设置：入库时间
	 */
	public void setInstockdate(Date instockdate) {
		this.instockdate = instockdate;
	}
	/**
	 * 获取：入库时间
	 */
	public Date getInstockdate() {
		return instockdate;
	}
	/**
	 * 设置：入库重量
	 */
	public void setInweight(Double inweight) {
		this.inweight = inweight;
	}
	/**
	 * 获取：入库重量
	 */
	public Double getInweight() {
		return inweight;
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
