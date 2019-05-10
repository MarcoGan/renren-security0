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
 * @date 2018-10-25 15:38:16
 */
@TableName("water_waste")
public class WaterWasteEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@TableId
	private Integer id;
	/**
	 * 地点
	 */
	private String site;
	/**
	 * 年份-月份
	 */
	private String month;
	/**
	 * 物料类型
	 */
	private String materialtype;
	/**
	 * 石粉含水率
	 */
	private Double limestoneWater;
	/**
	 * 石粉废灰量
	 */
	private Double limestoneWaste;
	/**
	 * 瓜子片含水率
	 */
	private Double melonslicesWater;
	/**
	 * 瓜子片废灰量
	 */
	private Double melonslicesWaste;
	/**
	 * 铣刨料含水率
	 */
	private Double millingMaterialWater;
	/**
	 * 铣刨料废灰量
	 */
	private Double millingMaterialWaste;
	/**
	 * 细碎含水率
	 */
	private Double comminutionWater;
	/**
	 * 细碎废灰量
	 */
	private Double comminutionWaste;
	/**
	 * 高料1含水率
	 */
	private Double highMaterial1Water;
	/**
	 * 高料1废灰量
	 */
	private Double highMaterial1Waste;
	/**
	 * 高料2含水率
	 */
	private Double highMaterial2Water;
	/**
	 * 高料2废灰量
	 */
	private Double highMaterial2Waste;
	/**
	 * 木质纤维
	 */
	private Double woodFiber;
	/**
	 * 抗剥落剂
	 */
	private Double antistrippingAgent;

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
	 * 设置：年份-月份
	 */
	public void setMonth(String month) {
		this.month = month;
	}
	/**
	 * 获取：年份-月份
	 */
	public String getMonth() {
		return month;
	}
	/**
	 * 设置：物料类型
	 */
	public void setMaterialtype(String materialtype) {
		this.materialtype = materialtype;
	}
	/**
	 * 获取：物料类型
	 */
	public String getMaterialtype() {
		return materialtype;
	}
	/**
	 * 设置：石粉含水率
	 */
	public void setLimestoneWater(Double limestoneWater) {
		this.limestoneWater = limestoneWater;
	}
	/**
	 * 获取：石粉含水率
	 */
	public Double getLimestoneWater() {
		return limestoneWater;
	}
	/**
	 * 设置：石粉废灰量
	 */
	public void setLimestoneWaste(Double limestoneWaste) {
		this.limestoneWaste = limestoneWaste;
	}
	/**
	 * 获取：石粉废灰量
	 */
	public Double getLimestoneWaste() {
		return limestoneWaste;
	}
	/**
	 * 设置：瓜子片含水率
	 */
	public void setMelonslicesWater(Double melonslicesWater) {
		this.melonslicesWater = melonslicesWater;
	}
	/**
	 * 获取：瓜子片含水率
	 */
	public Double getMelonslicesWater() {
		return melonslicesWater;
	}
	/**
	 * 设置：瓜子片废灰量
	 */
	public void setMelonslicesWaste(Double melonslicesWaste) {
		this.melonslicesWaste = melonslicesWaste;
	}
	/**
	 * 获取：瓜子片废灰量
	 */
	public Double getMelonslicesWaste() {
		return melonslicesWaste;
	}
	/**
	 * 设置：铣刨料含水率
	 */
	public void setMillingMaterialWater(Double millingMaterialWater) {
		this.millingMaterialWater = millingMaterialWater;
	}
	/**
	 * 获取：铣刨料含水率
	 */
	public Double getMillingMaterialWater() {
		return millingMaterialWater;
	}
	/**
	 * 设置：铣刨料废灰量
	 */
	public void setMillingMaterialWaste(Double millingMaterialWaste) {
		this.millingMaterialWaste = millingMaterialWaste;
	}
	/**
	 * 获取：铣刨料废灰量
	 */
	public Double getMillingMaterialWaste() {
		return millingMaterialWaste;
	}
	/**
	 * 设置：细碎含水率
	 */
	public void setComminutionWater(Double comminutionWater) {
		this.comminutionWater = comminutionWater;
	}
	/**
	 * 获取：细碎含水率
	 */
	public Double getComminutionWater() {
		return comminutionWater;
	}
	/**
	 * 设置：细碎废灰量
	 */
	public void setComminutionWaste(Double comminutionWaste) {
		this.comminutionWaste = comminutionWaste;
	}
	/**
	 * 获取：细碎废灰量
	 */
	public Double getComminutionWaste() {
		return comminutionWaste;
	}
	/**
	 * 设置：高料1含水率
	 */
	public void setHighMaterial1Water(Double highMaterial1Water) {
		this.highMaterial1Water = highMaterial1Water;
	}
	/**
	 * 获取：高料1含水率
	 */
	public Double getHighMaterial1Water() {
		return highMaterial1Water;
	}
	/**
	 * 设置：高料1废灰量
	 */
	public void setHighMaterial1Waste(Double highMaterial1Waste) {
		this.highMaterial1Waste = highMaterial1Waste;
	}
	/**
	 * 获取：高料1废灰量
	 */
	public Double getHighMaterial1Waste() {
		return highMaterial1Waste;
	}
	/**
	 * 设置：高料2含水率
	 */
	public void setHighMaterial2Water(Double highMaterial2Water) {
		this.highMaterial2Water = highMaterial2Water;
	}
	/**
	 * 获取：高料2含水率
	 */
	public Double getHighMaterial2Water() {
		return highMaterial2Water;
	}
	/**
	 * 设置：高料2废灰量
	 */
	public void setHighMaterial2Waste(Double highMaterial2Waste) {
		this.highMaterial2Waste = highMaterial2Waste;
	}
	/**
	 * 获取：高料2废灰量
	 */
	public Double getHighMaterial2Waste() {
		return highMaterial2Waste;
	}
	/**
	 * 设置：木质纤维
	 */
	public void setWoodFiber(Double woodFiber) {
		this.woodFiber = woodFiber;
	}
	/**
	 * 获取：木质纤维
	 */
	public Double getWoodFiber() {
		return woodFiber;
	}
	/**
	 * 设置：抗剥落剂
	 */
	public void setAntistrippingAgent(Double antistrippingAgent) {
		this.antistrippingAgent = antistrippingAgent;
	}
	/**
	 * 获取：抗剥落剂
	 */
	public Double getAntistrippingAgent() {
		return antistrippingAgent;
	}
	@Override
	public String toString() {
		return "WaterWasteEntity [id=" + id + ", site=" + site + ", month=" + month + ", materialtype=" + materialtype
				+ ", limestoneWater=" + limestoneWater + ", limestoneWaste=" + limestoneWaste + ", melonslicesWater="
				+ melonslicesWater + ", melonslicesWaste=" + melonslicesWaste + ", millingMaterialWater="
				+ millingMaterialWater + ", millingMaterialWaste=" + millingMaterialWaste + ", comminutionWater="
				+ comminutionWater + ", comminutionWaste=" + comminutionWaste + ", highMaterial1Water="
				+ highMaterial1Water + ", highMaterial1Waste=" + highMaterial1Waste + ", highMaterial2Water="
				+ highMaterial2Water + ", highMaterial2Waste=" + highMaterial2Waste + ", woodFiber=" + woodFiber
				+ ", antistrippingAgent=" + antistrippingAgent + "]";
	}
	
	
}
