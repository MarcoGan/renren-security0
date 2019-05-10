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
 * @date 2018-11-19 10:12:36
 */
@TableName("plant_location")
public class PlantLocationEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * id
	 */
	@TableId
	private Integer id;
	/**
	 * 地点
	 */
	private String place;
	/**
	 * 缩写
	 */
	private String abbreviation;

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
	 * 设置：地点
	 */
	public void setPlace(String place) {
		this.place = place;
	}
	/**
	 * 获取：地点
	 */
	public String getPlace() {
		return place;
	}
	/**
	 * 设置：缩写
	 */
	public void setAbbreviation(String abbreviation) {
		this.abbreviation = abbreviation;
	}
	/**
	 * 获取：缩写
	 */
	public String getAbbreviation() {
		return abbreviation;
	}
}
