package io.renren.modules.sys.service.impl;

import org.apache.commons.lang.StringUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import io.renren.common.utils.PageUtils;
import io.renren.common.utils.Query;

import io.renren.modules.sys.dao.WarehouseinRecordsDao;
import io.renren.modules.sys.entity.WarehouseinRecordsEntity;
import io.renren.modules.sys.service.WarehouseinRecordsService;


@Service("warehouseinRecordsService")
public class WarehouseinRecordsServiceImpl extends ServiceImpl<WarehouseinRecordsDao, WarehouseinRecordsEntity> implements WarehouseinRecordsService {
	 @Autowired
	  private WarehouseinRecordsService warehouseinRecordsService;
	 @Autowired
	  private WarehouseinRecordsDao WarehouseinRecordsDao;
     @Override
    public PageUtils queryPage(Map<String, Object> params) {
    	String startlogtime = (String)params.get("startlogtime");
    	String endlogtime = (String)params.get("endlogtime");
        Page<WarehouseinRecordsEntity> page = this.selectPage(
                new Query<WarehouseinRecordsEntity>(params).getPage(),
                new EntityWrapper<WarehouseinRecordsEntity>()
                .ge(StringUtils.isNotBlank(startlogtime),"logtime", startlogtime)
                .le(StringUtils.isNotBlank(endlogtime),"logtime", endlogtime)
        );

        return new PageUtils(page);
    }
    
    @Transactional(readOnly = false,rollbackFor = Exception.class)
    @Override
    public boolean batchImport(String fileName, MultipartFile file) throws Exception {
 
        boolean notNull = false;
        List<WarehouseinRecordsEntity> warehouseList = new ArrayList<WarehouseinRecordsEntity>();
        if (!fileName.matches("^.+\\.(?i)(xls)$") && !fileName.matches("^.+\\.(?i)(xlsx)$")) {
            throw new MyException("上传文件格式不正确");
        }
        boolean isExcel2003 = true;
        if (fileName.matches("^.+\\.(?i)(xlsx)$")) {
            isExcel2003 = false;
        }
        InputStream is = file.getInputStream();
        Workbook wb = null;
        if (isExcel2003) {
            wb = new HSSFWorkbook(is);
        } else {
            wb = new XSSFWorkbook(is);
        }
        Sheet sheet = wb.getSheetAt(0);
        if(sheet!=null){
            notNull = true;
        }
        WarehouseinRecordsEntity WarehouseinRecordsEntity;
        for (int r = 1; r <= sheet.getLastRowNum()-1; r++) {
            Row row = sheet.getRow(r);
            if (row == null){
                continue;
            }
 
            WarehouseinRecordsEntity = new WarehouseinRecordsEntity();
            Date logtime = null;
            String date;
            if(row.getCell(0)!=null){
            	date = row.getCell(0).getStringCellValue();
            	DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd");
            	logtime = dateFormat.parse(date);
            }else{
            	logtime = null;
            }
            
            String reviewSign;
            if(row.getCell(1)!=null){
            	reviewSign = row.getCell(1).getStringCellValue();
            }else{
            	reviewSign = "";	
            }
            
            String receiptNumber;
            if(row.getCell(2)!=null){
            	receiptNumber = row.getCell(2).getStringCellValue();
            }else{
            	receiptNumber = "";	
            }
            
            String supplier;
            if(row.getCell(3)!=null){
            	supplier = row.getCell(3).getStringCellValue();
            }else{
            	supplier = "";	
            }
            
            String digest;
            if(row.getCell(4)!=null){
            	digest = row.getCell(4).getStringCellValue();
            }else{
            	digest = "";	
            }
            
            String warehouse;
            if(row.getCell(5)!=null){
            	warehouse = row.getCell(5).getStringCellValue();
            }else{
            	warehouse = "";	
            }
            
            String materialCode;
            if(row.getCell(6)!=null){
            	materialCode = row.getCell(6).getStringCellValue();
            }else{
            	materialCode = "";	
            }
            
            String materialName;
            if(row.getCell(7)!=null){
            	materialName = row.getCell(7).getStringCellValue();
            }else{
            	materialName = "";	
            }
            
            String materialModel;
            if(row.getCell(8)!=null){
            	materialModel = row.getCell(8).getStringCellValue();
            }else{
            	materialModel = "";	
            }
            
            String unit;
            if(row.getCell(9)!=null){
            	unit = row.getCell(9).getStringCellValue();
            }else{
            	unit = "";	
            }
            
            Double receivedQuantity;
            if(row.getCell(10)!=null){
            	receivedQuantity = row.getCell(10).getNumericCellValue();
            }else{
            	receivedQuantity = 0.0;	
            }
            
            Double unitprice;
            if(row.getCell(11)!=null){
            	unitprice = row.getCell(11).getNumericCellValue();
            }else{
            	unitprice = 0.0;	
            }
            
            String money;
            row.getCell(12).setCellType(Cell.CELL_TYPE_STRING);
            if(row.getCell(12)!=null){
            	money = row.getCell(12).getStringCellValue();
            }else{
            	money = "";	
            }
            
            Double invoiceNum;
            if(row.getCell(13)!=null){
            	invoiceNum = row.getCell(13).getNumericCellValue();
            }else{
            	invoiceNum = 0.0;	
            }
            
            String remark;
            if(row.getCell(14)!=null){
            	remark = row.getCell(14).getStringCellValue();
            }else{
            	remark = "";	
            }
            
            String deliveryPoints;
            if(row.getCell(15)!=null){
            	deliveryPoints = row.getCell(15).getStringCellValue();
            }else{
            	deliveryPoints = "";	
            }
            
            String department;
            if(row.getCell(16)!=null){
            	department = row.getCell(16).getStringCellValue();
            }else{
            	department = "";	
            }
            
            String executive;
            if(row.getCell(17)!=null){
            	executive = row.getCell(17).getStringCellValue();
            }else{
            	executive = "";	
            }
 
            WarehouseinRecordsEntity.setLogtime(logtime);
            WarehouseinRecordsEntity.setReviewSign(reviewSign);
            WarehouseinRecordsEntity.setReceiptNumber(receiptNumber);
            WarehouseinRecordsEntity.setSupplier(supplier);
            WarehouseinRecordsEntity.setDigest(digest);
            WarehouseinRecordsEntity.setWarehouse(warehouse);
            WarehouseinRecordsEntity.setMaterialCode(materialCode);
            WarehouseinRecordsEntity.setMaterialName(materialName);
            WarehouseinRecordsEntity.setMaterialModel(materialModel);
            WarehouseinRecordsEntity.setUnit(unit);
            WarehouseinRecordsEntity.setReceivedQuantity(receivedQuantity);
            WarehouseinRecordsEntity.setUnitprice(unitprice);
            WarehouseinRecordsEntity.setMoney(money);
            WarehouseinRecordsEntity.setInvoiceNum(invoiceNum);
            WarehouseinRecordsEntity.setRemark(remark);
            WarehouseinRecordsEntity.setDeliveryPoints(deliveryPoints);
            WarehouseinRecordsEntity.setDepartment(department);
            WarehouseinRecordsEntity.setExecutive(executive);
            warehouseList.add(WarehouseinRecordsEntity);
        }
        for (WarehouseinRecordsEntity warehouseResord : warehouseList) {
        	String receiptNumber = warehouseResord.getReceiptNumber();
            int cnt = WarehouseinRecordsDao.selectByWarehouseResord(receiptNumber);
            if (cnt == 0) {
            	warehouseinRecordsService.insert(warehouseResord);
                System.out.println(" 插入 "+warehouseResord);
            } else {
            	WarehouseinRecordsDao.updateWarehouseByName(warehouseResord);
                System.out.println(" 更新 "+warehouseResord);
            }
        }

        /*warehouseinRecordsService.insert(warehouseResord);
        }*/
        return notNull;
    }

	@Override
	public double getTotalQuantity(String startlogtime, String endlogtime) {
		// TODO Auto-generated method stub
		double total = WarehouseinRecordsDao.getTotalQuantity(startlogtime,endlogtime);
		return total;
	}

	@Override
	public double getTotalMoney(String startlogtime, String endlogtime) {
		double total = WarehouseinRecordsDao.getTotalMoney(startlogtime,endlogtime);
		return total;
	}
	
	@Override
	public double getTotalInvoiceNum(String startlogtime, String endlogtime) {
		double total = WarehouseinRecordsDao.getTotalInvoiceNum(startlogtime,endlogtime);
		return total;
	}

}
