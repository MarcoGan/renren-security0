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
 * @date 2018-08-30 17:27:07
 */
@TableName("cardescripe")
public class CardescripeEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	@TableId
	private Integer inoutid;
	/**
	 * 
	 */
	private String remark;

	/**
	 * 设置：
	 */
	public void setInoutid(Integer inoutid) {
		this.inoutid = inoutid;
	}
	/**
	 * 获取：
	 */
	public Integer getInoutid() {
		return inoutid;
	}
	/**
	 * 设置：
	 */
	public void setRemark(String remark) {
		this.remark = remark;
	}
	/**
	 * 获取：
	 */
	public String getRemark() {
		return remark;
	}
}
