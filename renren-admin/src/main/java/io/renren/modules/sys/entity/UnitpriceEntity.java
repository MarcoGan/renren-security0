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
 * @date 2018-10-16 09:17:33
 */
@TableName("unitprice")
public class UnitpriceEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	/**
	 * id
	 */
	@TableId
	private Integer id;
	/**
	 * 月份单价
	 */
	private String priceMonth;
	/**
	 * 终端id
	 */
	private String terminalid;
	/**
	 * 石粉
	 */
	private Double priceA;
	/**
	 * 米砂
	 */
	private Double priceB;
	/**
	 * 瓜子片
	 */
	private Double priceC;
	/**
	 * 细碎
	 */
	private Double priceD;
	/**
	 * 玄武岩2#
	 */
	private Double priceE;
	/**
	 * 玄武岩1#
	 */
	private Double priceF;
	/**
	 * 沥青油
	 */
	private Double priceG;
	/**
	 * 铣刨料
	 */
	private Double priceH;
	/**
	 * 矿粉
	 */
	private Double priceI;
	/**
	 * 乙烯焦油
	 */
	private Double priceJ;
	/**
	 * 燃料油
	 */
	private Double priceK;
	/**
	 * 抗剥落剂
	 */
	private Double priceL;
	/**
	 * 木制纤维
	 */
	private Double priceM;
	/**
	 * 改性沥青油
	 */
	private Double priceN;
	/**
	 * 乳化剂
	 */
	private Double priceO;
	/**
	 * 彩色沥青油
	 */
	private Double priceP;
	/**
	 * 红色颜料
	 */
	private Double priceQ;

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
	 * 设置：月份单价
	 */
	public void setPriceMonth(String priceMonth) {
		this.priceMonth = priceMonth;
	}
	/**
	 * 获取：月份单价
	 */
	public String getPriceMonth() {
		return priceMonth;
	}
	/**
	 * 设置：终端id
	 */
	public void setTerminalid(String terminalid) {
		this.terminalid = terminalid;
	}
	/**
	 * 获取：终端id
	 */
	public String getTerminalid() {
		return terminalid;
	}
	/**
	 * 设置：石粉
	 */
	public void setPriceA(Double priceA) {
		this.priceA = priceA;
	}
	/**
	 * 获取：石粉
	 */
	public Double getPriceA() {
		return priceA;
	}
	/**
	 * 设置：米砂
	 */
	public void setPriceB(Double priceB) {
		this.priceB = priceB;
	}
	/**
	 * 获取：米砂
	 */
	public Double getPriceB() {
		return priceB;
	}
	/**
	 * 设置：瓜子片
	 */
	public void setPriceC(Double priceC) {
		this.priceC = priceC;
	}
	/**
	 * 获取：瓜子片
	 */
	public Double getPriceC() {
		return priceC;
	}
	/**
	 * 设置：细碎
	 */
	public void setPriceD(Double priceD) {
		this.priceD = priceD;
	}
	/**
	 * 获取：细碎
	 */
	public Double getPriceD() {
		return priceD;
	}
	/**
	 * 设置：玄武岩2#
	 */
	public void setPriceE(Double priceE) {
		this.priceE = priceE;
	}
	/**
	 * 获取：玄武岩2#
	 */
	public Double getPriceE() {
		return priceE;
	}
	/**
	 * 设置：玄武岩1#
	 */
	public void setPriceF(Double priceF) {
		this.priceF = priceF;
	}
	/**
	 * 获取：玄武岩1#
	 */
	public Double getPriceF() {
		return priceF;
	}
	/**
	 * 设置：沥青油
	 */
	public void setPriceG(Double priceG) {
		this.priceG = priceG;
	}
	/**
	 * 获取：沥青油
	 */
	public Double getPriceG() {
		return priceG;
	}
	/**
	 * 设置：铣刨料
	 */
	public void setPriceH(Double priceH) {
		this.priceH = priceH;
	}
	/**
	 * 获取：铣刨料
	 */
	public Double getPriceH() {
		return priceH;
	}
	/**
	 * 设置：矿粉
	 */
	public void setPriceI(Double priceI) {
		this.priceI = priceI;
	}
	/**
	 * 获取：矿粉
	 */
	public Double getPriceI() {
		return priceI;
	}
	/**
	 * 设置：乙烯焦油
	 */
	public void setPriceJ(Double priceJ) {
		this.priceJ = priceJ;
	}
	/**
	 * 获取：乙烯焦油
	 */
	public Double getPriceJ() {
		return priceJ;
	}
	/**
	 * 设置：燃料油
	 */
	public void setPriceK(Double priceK) {
		this.priceK = priceK;
	}
	/**
	 * 获取：燃料油
	 */
	public Double getPriceK() {
		return priceK;
	}
	/**
	 * 设置：抗剥落剂
	 */
	public void setPriceL(Double priceL) {
		this.priceL = priceL;
	}
	/**
	 * 获取：抗剥落剂
	 */
	public Double getPriceL() {
		return priceL;
	}
	/**
	 * 设置：木制纤维
	 */
	public void setPriceM(Double priceM) {
		this.priceM = priceM;
	}
	/**
	 * 获取：木制纤维
	 */
	public Double getPriceM() {
		return priceM;
	}
	/**
	 * 设置：改性沥青油
	 */
	public void setPriceN(Double priceN) {
		this.priceN = priceN;
	}
	/**
	 * 获取：改性沥青油
	 */
	public Double getPriceN() {
		return priceN;
	}
	/**
	 * 设置：乳化剂
	 */
	public void setPriceO(Double priceO) {
		this.priceO = priceO;
	}
	/**
	 * 获取：乳化剂
	 */
	public Double getPriceO() {
		return priceO;
	}
	/**
	 * 设置：彩色沥青油
	 */
	public void setPriceP(Double priceP) {
		this.priceP = priceP;
	}
	/**
	 * 获取：彩色沥青油
	 */
	public Double getPriceP() {
		return priceP;
	}
	/**
	 * 设置：红色颜料
	 */
	public void setPriceQ(Double priceQ) {
		this.priceQ = priceQ;
	}
	/**
	 * 获取：红色颜料
	 */
	public Double getPriceQ() {
		return priceQ;
	}
	@Override
	public String toString() {
		return "UnitpriceEntity [id=" + id + ", priceMonth=" + priceMonth + ", terminalid=" + terminalid + ", priceA="
				+ priceA + ", priceB=" + priceB + ", priceC=" + priceC + ", priceD=" + priceD + ", priceE=" + priceE
				+ ", priceF=" + priceF + ", priceG=" + priceG + ", priceH=" + priceH + ", priceI=" + priceI
				+ ", priceJ=" + priceJ + ", priceK=" + priceK + ", priceL=" + priceL + ", priceM=" + priceM
				+ ", priceN=" + priceN + ", priceO=" + priceO + ", priceP=" + priceP + ", priceQ=" + priceQ + "]";
	}
	
}
