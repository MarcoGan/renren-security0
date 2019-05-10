package io.renren.modules.sys.entity;

import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;

import java.io.Serializable;

/**
 * 
 * 
 * @author chenshun
 * @email sunlightcs@gmail.com
 * @date 2018-08-30 14:44:12
 */
@TableName("material_type")
public class MaterialTypeEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 物料类型Id
	 */
	@TableId
	private Integer materialtypeid;
	/**
	 * 物料名
	 */
	private String materialtypename;
	/**
	 * 物料类型缩写/代号
	 */
	private String codename;
	/**
	 * 减重比列（%）
	 */
	private Double weightlosspercentage;
	/**
	 * 描述
	 */
	private String description;
	
	/**
	 * 物料类型名
	 */
	@TableField(exist=false)
	private String name;
	
	/**
	 * 设置：物料类型Id
	 */
	public void setMaterialtypeid(Integer materialtypeid) {
		this.materialtypeid = materialtypeid;
	}
	/**
	 * 获取：物料类型Id
	 */
	public Integer getMaterialtypeid() {
		return materialtypeid;
	}
	/**
	 * 设置：物料名
	 */
	public void setMaterialtypename(String materialtypename) {
		this.materialtypename = materialtypename;
	}
	/**
	 * 获取：物料名
	 */
	public String getMaterialtypename() {
		return materialtypename;
	}
	/**
	 * 设置：物料类型缩写/代号
	 */
	public void setCodename(String codename) {
		this.codename = codename;
	}
	/**
	 * 获取：物料类型缩写/代号
	 */
	public String getCodename() {
		return codename;
	}
	/**
	 * 设置：减重比列（%）
	 */
	public void setWeightlosspercentage(Double weightlosspercentage) {
		this.weightlosspercentage = weightlosspercentage;
	}
	/**
	 * 获取：减重比列（%）
	 */
	public Double getWeightlosspercentage() {
		return weightlosspercentage;
	}
	/**
	 * 设置：描述
	 */
	public void setDescription(String description) {
		this.description = description;
	}
	/**
	 * 获取：描述
	 */
	public String getDescription() {
		return description;
	}
	/**
	 * 设置：物料类型名
	 */
	public void setName(String name) {
		this.name = name;
	}
	
	/**
	 * 获取：物料类型名
	 */
	public String getName() {
		return name;
	}
}
