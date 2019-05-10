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
@TableName("stock")
public class StockEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 库存id
	 */
	@TableId
	private Integer id;
	/**
	 * 物料类型
	 */
	private String codename;
	/**
	 * 库存重量
	 */
	private Double stockweight;
	/**
	 * 备注
	 */
	private String remark;

	/**
	 * 设置：库存id
	 */
	public void setId(Integer id) {
		this.id = id;
	}
	/**
	 * 获取：库存id
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
	 * 设置：库存重量
	 */
	public void setStockweight(Double stockweight) {
		this.stockweight = stockweight;
	}
	/**
	 * 获取：库存重量
	 */
	public Double getStockweight() {
		return stockweight;
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
