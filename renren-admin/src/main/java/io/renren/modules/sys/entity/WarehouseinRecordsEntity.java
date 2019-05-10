package io.renren.modules.sys.entity;

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
 * @date 2018-11-01 17:23:38
 */
@TableName("warehousein_records")
public class WarehouseinRecordsEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * id
	 */
	@TableId
	private Integer id;
	/**
	 * 日期
	 */
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd")
	private Date logtime;
	/**
	 * 审核标志
	 */
	private String reviewSign;
	/**
	 * 单据编号
	 */
	private String receiptNumber;
	/**
	 * 供应商
	 */
	private String supplier;
	/**
	 * 摘要
	 */
	private String digest;
	/**
	 * 收料仓库
	 */
	private String warehouse;
	/**
	 * 物料长代码
	 */
	private String materialCode;
	/**
	 * 物料名称
	 */
	private String materialName;
	/**
	 * 规格型号
	 */
	private String materialModel;
	/**
	 * 单位
	 */
	private String unit;
	/**
	 * 实收数量
	 */
	private Double receivedQuantity;
	/**
	 * 单价
	 */
	private Double unitprice;
	/**
	 * 金额
	 */
	private String money;
	/**
	 * 开票数量
	 */
	private Double invoiceNum;
	/**
	 * 备注
	 */
	private String remark;
	/**
	 * 交货地点
	 */
	private String deliveryPoints;
	/**
	 * 部门
	 */
	private String department;
	/**
	 * 业务员
	 */
	private String executive;

	/**
	 * 设置：id
	 */
	public void setId(Integer id) {
		this.id = id;
	}
	/**
	 * 获取：id
	 */
	public Integer getId() {
		return id;
	}
	/**
	 * 设置：日期
	 */
	public void setLogtime(Date logtime) {
		this.logtime = logtime;
	}
	/**
	 * 获取：日期
	 */
	public Date getLogtime() {
		return logtime;
	}
	/**
	 * 设置：审核标志
	 */
	public void setReviewSign(String reviewSign) {
		this.reviewSign = reviewSign;
	}
	/**
	 * 获取：审核标志
	 */
	public String getReviewSign() {
		return reviewSign;
	}
	/**
	 * 设置：单据编号
	 */
	public void setReceiptNumber(String receiptNumber) {
		this.receiptNumber = receiptNumber;
	}
	/**
	 * 获取：单据编号
	 */
	public String getReceiptNumber() {
		return receiptNumber;
	}
	/**
	 * 设置：供应商
	 */
	public void setSupplier(String supplier) {
		this.supplier = supplier;
	}
	/**
	 * 获取：供应商
	 */
	public String getSupplier() {
		return supplier;
	}
	/**
	 * 设置：摘要
	 */
	public void setDigest(String digest) {
		this.digest = digest;
	}
	/**
	 * 获取：摘要
	 */
	public String getDigest() {
		return digest;
	}
	/**
	 * 设置：收料仓库
	 */
	public void setWarehouse(String warehouse) {
		this.warehouse = warehouse;
	}
	/**
	 * 获取：收料仓库
	 */
	public String getWarehouse() {
		return warehouse;
	}
	/**
	 * 设置：物料长代码
	 */
	public void setMaterialCode(String materialCode) {
		this.materialCode = materialCode;
	}
	/**
	 * 获取：物料长代码
	 */
	public String getMaterialCode() {
		return materialCode;
	}
	/**
	 * 设置：物料名称
	 */
	public void setMaterialName(String materialName) {
		this.materialName = materialName;
	}
	/**
	 * 获取：物料名称
	 */
	public String getMaterialName() {
		return materialName;
	}
	/**
	 * 设置：规格型号
	 */
	public void setMaterialModel(String materialModel) {
		this.materialModel = materialModel;
	}
	/**
	 * 获取：规格型号
	 */
	public String getMaterialModel() {
		return materialModel;
	}
	/**
	 * 设置：单位
	 */
	public void setUnit(String unit) {
		this.unit = unit;
	}
	/**
	 * 获取：单位
	 */
	public String getUnit() {
		return unit;
	}
	/**
	 * 设置：实收数量
	 */
	public void setReceivedQuantity(Double receivedQuantity) {
		this.receivedQuantity = receivedQuantity;
	}
	/**
	 * 获取：实收数量
	 */
	public Double getReceivedQuantity() {
		return receivedQuantity;
	}
	/**
	 * 设置：单价
	 */
	public void setUnitprice(Double unitprice) {
		this.unitprice = unitprice;
	}
	/**
	 * 获取：单价
	 */
	public Double getUnitprice() {
		return unitprice;
	}
	/**
	 * 设置：金额
	 */
	public void setMoney(String money) {
		this.money = money;
	}
	/**
	 * 获取：金额
	 */
	public String getMoney() {
		return money;
	}
	/**
	 * 设置：开票数量
	 */
	public void setInvoiceNum(Double invoiceNum) {
		this.invoiceNum = invoiceNum;
	}
	/**
	 * 获取：开票数量
	 */
	public Double getInvoiceNum() {
		return invoiceNum;
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
	 * 设置：交货地点
	 */
	public void setDeliveryPoints(String deliveryPoints) {
		this.deliveryPoints = deliveryPoints;
	}
	/**
	 * 获取：交货地点
	 */
	public String getDeliveryPoints() {
		return deliveryPoints;
	}
	/**
	 * 设置：部门
	 */
	public void setDepartment(String department) {
		this.department = department;
	}
	/**
	 * 获取：部门
	 */
	public String getDepartment() {
		return department;
	}
	/**
	 * 设置：业务员
	 */
	public void setExecutive(String executive) {
		this.executive = executive;
	}
	/**
	 * 获取：业务员
	 */
	public String getExecutive() {
		return executive;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((deliveryPoints == null) ? 0 : deliveryPoints.hashCode());
		result = prime * result + ((department == null) ? 0 : department.hashCode());
		result = prime * result + ((digest == null) ? 0 : digest.hashCode());
		result = prime * result + ((executive == null) ? 0 : executive.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((invoiceNum == null) ? 0 : invoiceNum.hashCode());
		result = prime * result + ((logtime == null) ? 0 : logtime.hashCode());
		result = prime * result + ((materialCode == null) ? 0 : materialCode.hashCode());
		result = prime * result + ((materialModel == null) ? 0 : materialModel.hashCode());
		result = prime * result + ((materialName == null) ? 0 : materialName.hashCode());
		result = prime * result + ((money == null) ? 0 : money.hashCode());
		result = prime * result + ((receiptNumber == null) ? 0 : receiptNumber.hashCode());
		result = prime * result + ((receivedQuantity == null) ? 0 : receivedQuantity.hashCode());
		result = prime * result + ((remark == null) ? 0 : remark.hashCode());
		result = prime * result + ((reviewSign == null) ? 0 : reviewSign.hashCode());
		result = prime * result + ((supplier == null) ? 0 : supplier.hashCode());
		result = prime * result + ((unit == null) ? 0 : unit.hashCode());
		result = prime * result + ((unitprice == null) ? 0 : unitprice.hashCode());
		result = prime * result + ((warehouse == null) ? 0 : warehouse.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		WarehouseinRecordsEntity other = (WarehouseinRecordsEntity) obj;
		if (deliveryPoints == null) {
			if (other.deliveryPoints != null)
				return false;
		} else if (!deliveryPoints.equals(other.deliveryPoints))
			return false;
		if (department == null) {
			if (other.department != null)
				return false;
		} else if (!department.equals(other.department))
			return false;
		if (digest == null) {
			if (other.digest != null)
				return false;
		} else if (!digest.equals(other.digest))
			return false;
		if (executive == null) {
			if (other.executive != null)
				return false;
		} else if (!executive.equals(other.executive))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (invoiceNum == null) {
			if (other.invoiceNum != null)
				return false;
		} else if (!invoiceNum.equals(other.invoiceNum))
			return false;
		if (logtime == null) {
			if (other.logtime != null)
				return false;
		} else if (!logtime.equals(other.logtime))
			return false;
		if (materialCode == null) {
			if (other.materialCode != null)
				return false;
		} else if (!materialCode.equals(other.materialCode))
			return false;
		if (materialModel == null) {
			if (other.materialModel != null)
				return false;
		} else if (!materialModel.equals(other.materialModel))
			return false;
		if (materialName == null) {
			if (other.materialName != null)
				return false;
		} else if (!materialName.equals(other.materialName))
			return false;
		if (money == null) {
			if (other.money != null)
				return false;
		} else if (!money.equals(other.money))
			return false;
		if (receiptNumber == null) {
			if (other.receiptNumber != null)
				return false;
		} else if (!receiptNumber.equals(other.receiptNumber))
			return false;
		if (receivedQuantity == null) {
			if (other.receivedQuantity != null)
				return false;
		} else if (!receivedQuantity.equals(other.receivedQuantity))
			return false;
		if (remark == null) {
			if (other.remark != null)
				return false;
		} else if (!remark.equals(other.remark))
			return false;
		if (reviewSign == null) {
			if (other.reviewSign != null)
				return false;
		} else if (!reviewSign.equals(other.reviewSign))
			return false;
		if (supplier == null) {
			if (other.supplier != null)
				return false;
		} else if (!supplier.equals(other.supplier))
			return false;
		if (unit == null) {
			if (other.unit != null)
				return false;
		} else if (!unit.equals(other.unit))
			return false;
		if (unitprice == null) {
			if (other.unitprice != null)
				return false;
		} else if (!unitprice.equals(other.unitprice))
			return false;
		if (warehouse == null) {
			if (other.warehouse != null)
				return false;
		} else if (!warehouse.equals(other.warehouse))
			return false;
		return true;
	}
	
	
}
