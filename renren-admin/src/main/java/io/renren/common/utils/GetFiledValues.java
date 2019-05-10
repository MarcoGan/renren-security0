/**
 * Copyright 2018 人人开源 http://www.renren.io
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

package io.renren.common.utils;

import java.lang.reflect.Field;
import java.lang.reflect.Method;

import org.springframework.stereotype.Component;

/**
 * 系统参数相关Key
 *
 * @author Mark sunlightcs@gmail.com
 * @since 1.2.0 2017-03-26
 */
@Component
public class GetFiledValues {
    /**
     * 拆分对象获取对象值
     */
	 private String[] getFiledName(Object o){  
	        Field[] fields=o.getClass().getDeclaredFields();  
	            String[] fieldNames=new String[fields.length];  
	        for(int i=0;i<fields.length;i++){  
	            /*System.out.println("类型"+fields[i].getType());  
	            System.out.println("名称="+fields[i].getName());*/
	            fieldNames[i]=fields[i].getName();  
	        }  
	        return fieldNames;  
	       }  

	    private Object getFieldValueByName(String fieldName, Object o) {  
	        try {    
	            String firstLetter = fieldName.substring(0, 1).toUpperCase();    
	            String getter = "get" + firstLetter + fieldName.substring(1);    
	            Method method = o.getClass().getMethod(getter, new Class[] {});    
	            Object value = method.invoke(o, new Object[] {});    
	            return value;    
	        } catch (Exception e) {    
	            return null;    
	        }    
	    }


	    
	    public Object[] getFiledValues(Object o){  
	        String[] fieldNames=this.getFiledName(o);  
	        Object[] value=new Object[fieldNames.length];  
	        for(int i=0;i<fieldNames.length;i++){  
	            value[i]=this.getFieldValueByName(fieldNames[i], o);  
	        }  
	        return value;  
	       } 
}
