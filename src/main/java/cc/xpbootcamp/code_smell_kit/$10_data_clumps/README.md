## 数据泥团

举例1:
From [Github](https://github.com/tcongwu/Myconf/blob/bfe2f0798e3d1f91db0b3711f50bd624532ceb82/sources/src/org/myconf/formbean/PaperForm.java)
Author的Firstname，LastName，Email，Institute 可以封装为对象
```java
package org.myconf.formbean;

import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;

import org.apache.commons.beanutils.PropertyUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.struts.upload.FormFile;
import org.myconf.beans.AuthorBean;
import org.myconf.beans.PaperBean;
import org.myconf.beans.SubjectBean;
import org.myconf.beans.UserBean;
import org.myconf.dao.SubjectDAO;
import org.myconf.util.CharsetChecker;
import org.myconf.util.StringUtils;

/**
 * 稿件表单
 * @author libin
 */
public class PaperForm extends FormBean {
	
	final static Log log = LogFactory.getLog(PaperForm.class);
	
	protected String title;	//标题
	protected int subject;	//所属主题
	protected String abstr;	//摘要
	protected int status;		//最终录用状态
	
	protected int asum;		//作者数量
	protected String authorFirstName1;	//第一作者的名
	protected String authorLastName1;	//第一作者的姓
	protected String authorEmail1;		//第一作者的email
	protected String authorInstitute1;	//第一作者的单位
	protected String authorFirstName2;	//第二作者的名
	protected String authorLastName2;	//第二作者的姓
	protected String authorEmail2;		//第二作者的email
	protected String authorInstitute2;	//第二作者的单位
	protected String authorFirstName3;	//第三作者的名
	protected String authorLastName3;	//第三作者的姓
	protected String authorEmail3;		//第三作者的email
	protected String authorInstitute3;	//第三作者的单位
	protected String authorFirstName4;	//第四作者的名
	protected String authorLastName4;	//第四作者的姓
	protected String authorEmail4;		//第四作者的email
	protected String authorInstitute4;	//第四作者的单位
	protected String authorFirstName5;	//第五作者的名
	protected String authorLastName5;	//第五作者的姓
	protected String authorEmail5;		//第五作者的email
	protected String authorInstitute5;	//第五作者的单位
	protected String authorFirstName6;	//第六作者的名
	protected String authorLastName6;	//第六作者的姓
	protected String authorEmail6;		//第六作者的email
	protected String authorInstitute6;	//第六作者的单位
	protected String authorFirstName7;	//第七作者的名
	protected String authorLastName7;	//第七作者的姓
	protected String authorEmail7;		//第七作者的email
	protected String authorInstitute7;	//第七作者的单位
	protected String authorFirstName8;	//第八作者的名
	protected String authorLastName8;	//第八作者的姓
	protected String authorEmail8;		//第八作者的email
	protected String authorInstitute8;	//第八作者的单位
	protected String authorFirstName9;	//第九作者的名
	protected String authorLastName9;	//第九作者的姓
	protected String authorEmail9;		//第九作者的email
	protected String authorInstitute9;	//第九作者的单位
	protected String authorFirstName10;	//第十作者的名
	protected String authorLastName10;	//第十作者的姓
	protected String authorEmail10;		//第十作者的email
	protected String authorInstitute10;	//第十作者的单位
	protected String authorFirstName11;	//第十一作者的名
	protected String authorLastName11;	//第十一作者的姓
	protected String authorEmail11;		//第十一作者的email
	protected String authorInstitute11;	//第十一作者的单位
	protected String authorFirstName12;	//第十二作者的名
	protected String authorLastName12;	//第十二作者的姓
	protected String authorEmail12;		//第十二作者的email
	protected String authorInstitute12;	//第十二作者的单位
	protected String authorFirstName13;	//第十三作者的名
	protected String authorLastName13;	//第十三作者的姓
	protected String authorEmail13;		//第十三作者的email
	protected String authorInstitute13;	//第十三作者的单位
	protected String authorFirstName14;	//第十四作者的名
	protected String authorLastName14;	//第十四作者的姓
	protected String authorEmail14;		//第十四作者的email
	protected String authorInstitute14;	//第十四作者的单位
	protected String authorFirstName15;	//第十五作者的名
	protected String authorLastName15;	//第十五作者的姓
	protected String authorEmail15;		//第十五作者的email
	protected String authorInstitute15;	//第十五作者的单位
	protected String authorFirstName16;	//第十六作者的名
	protected String authorLastName16;	//第十六作者的姓
	protected String authorEmail16;		//第十六作者的email
	protected String authorInstitute16;	//第十六作者的单位
	protected String authorFirstName17;	//第十七作者的名
	protected String authorLastName17;	//第十七作者的姓
	protected String authorEmail17;		//第十七作者的email
	protected String authorInstitute17;	//第十七作者的单位
	protected String authorFirstName18;	//第十八作者的名
	protected String authorLastName18;	//第十八作者的姓
	protected String authorEmail18;		//第十八作者的email
	protected String authorInstitute18;	//第十八作者的单位
	
	protected String ctitle;	//称呼
	protected String firstName;	//名
	protected String lastName;	//姓
	protected String workLocation;	//工作单位
	protected String research;	//研究方向
	protected String phone;		//电话
	protected String fax;		//传真
	protected String address;	//详细地址
	protected String state;	//所在州或省份
	protected String country;	//所在国家
	protected String postcode;	//邮政编码
	
	protected int[] expertId;		//专家ID列表
	
	protected FormFile pfile;	//稿件文件

	public String getTitle() {
		return title;
	}

	public void setTitle(String str) {
		this.title = str;
	}

	public int getSubject() {
		return subject;
	}

	public void setSubject(int it) {
		this.subject = it;
	}

	public String getAbstr() {
		return abstr;
	}

	public void setAbstr(String str) {
		this.abstr = str;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int it) {
		this.status = it;
	}

	public int getAsum() {
		return asum;
	}

	public void setAsum(int it) {
		this.asum = it;
	}

	public String getAuthorFirstName1() {
		return authorFirstName1;
	}

	public void setAuthorFirstName1(String str) {
		this.authorFirstName1 = str;
	}

	public String getAuthorLastName1() {
		return authorLastName1;
	}

	public void setAuthorLastName1(String str) {
		this.authorLastName1 = str;
	}

	public String getAuthorEmail1() {
		return authorEmail1;
	}

	public void setAuthorEmail1(String str) {
		this.authorEmail1 = str;
	}

	public String getAuthorInstitute1() {
		return authorInstitute1;
	}

	public void setAuthorInstitute1(String str) {
		this.authorInstitute1 = str;
	}

	public String getAuthorFirstName2() {
		return authorFirstName2;
	}

	public void setAuthorFirstName2(String str) {
		this.authorFirstName2 = str;
	}

	public String getAuthorLastName2() {
		return authorLastName2;
	}

	public void setAuthorLastName2(String str) {
		this.authorLastName2 = str;
	}

	public String getAuthorEmail2() {
		return authorEmail2;
	}

	public void setAuthorEmail2(String str) {
		this.authorEmail2 = str;
	}

	public String getAuthorInstitute2() {
		return authorInstitute2;
	}

	public void setAuthorInstitute2(String str) {
		this.authorInstitute2 = str;
	}

	public String getAuthorFirstName3() {
		return authorFirstName3;
	}

	public void setAuthorFirstName3(String str) {
		this.authorFirstName3 = str;
	}

	public String getAuthorLastName3() {
		return authorLastName3;
	}

	public void setAuthorLastName3(String str) {
		this.authorLastName3 = str;
	}

	public String getAuthorEmail3() {
		return authorEmail3;
	}

	public void setAuthorEmail3(String str) {
		this.authorEmail3 = str;
	}

	public String getAuthorInstitute3() {
		return authorInstitute3;
	}

	public void setAuthorInstitute3(String str) {
		this.authorInstitute3 = str;
	}

	public String getAuthorFirstName4() {
		return authorFirstName4;
	}

	public void setAuthorFirstName4(String str) {
		this.authorFirstName4 = str;
	}

	public String getAuthorLastName4() {
		return authorLastName4;
	}

	public void setAuthorLastName4(String str) {
		this.authorLastName4 = str;
	}

	public String getAuthorEmail4() {
		return authorEmail4;
	}

	public void setAuthorEmail4(String str) {
		this.authorEmail4 = str;
	}

	public String getAuthorInstitute4() {
		return authorInstitute4;
	}

	public void setAuthorInstitute4(String str) {
		this.authorInstitute4 = str;
	}

	public String getAuthorFirstName5() {
		return authorFirstName5;
	}

	public void setAuthorFirstName5(String str) {
		this.authorFirstName5 = str;
	}

	public String getAuthorLastName5() {
		return authorLastName5;
	}

	public void setAuthorLastName5(String str) {
		this.authorLastName5 = str;
	}

	public String getAuthorEmail5() {
		return authorEmail5;
	}

	public void setAuthorEmail5(String str) {
		this.authorEmail5 = str;
	}

	public String getAuthorInstitute5() {
		return authorInstitute5;
	}

	public void setAuthorInstitute5(String str) {
		this.authorInstitute5 = str;
	}

	public String getAuthorFirstName6() {
		return authorFirstName6;
	}

	public void setAuthorFirstName6(String str) {
		this.authorFirstName6 = str;
	}

	public String getAuthorLastName6() {
		return authorLastName6;
	}

	public void setAuthorLastName6(String str) {
		this.authorLastName6 = str;
	}

	public String getAuthorEmail6() {
		return authorEmail6;
	}

	public void setAuthorEmail6(String str) {
		this.authorEmail6 = str;
	}

	public String getAuthorInstitute6() {
		return authorInstitute6;
	}

	public void setAuthorInstitute6(String str) {
		this.authorInstitute6 = str;
	}

	public String getAuthorFirstName7() {
		return authorFirstName7;
	}

	public void setAuthorFirstName7(String str) {
		this.authorFirstName7 = str;
	}

	public String getAuthorLastName7() {
		return authorLastName7;
	}

	public void setAuthorLastName7(String str) {
		this.authorLastName7 = str;
	}

	public String getAuthorEmail7() {
		return authorEmail7;
	}

	public void setAuthorEmail7(String str) {
		this.authorEmail7 = str;
	}

	public String getAuthorInstitute7() {
		return authorInstitute7;
	}

	public void setAuthorInstitute7(String str) {
		this.authorInstitute7 = str;
	}

	public String getAuthorFirstName8() {
		return authorFirstName8;
	}

	public void setAuthorFirstName8(String str) {
		this.authorFirstName8 = str;
	}

	public String getAuthorLastName8() {
		return authorLastName8;
	}

	public void setAuthorLastName8(String str) {
		this.authorLastName8 = str;
	}

	public String getAuthorEmail8() {
		return authorEmail8;
	}

	public void setAuthorEmail8(String str) {
		this.authorEmail8 = str;
	}

	public String getAuthorInstitute8() {
		return authorInstitute8;
	}

	public void setAuthorInstitute8(String str) {
		this.authorInstitute8 = str;
	}

	public String getAuthorFirstName9() {
		return authorFirstName9;
	}

	public void setAuthorFirstName9(String str) {
		this.authorFirstName9 = str;
	}

	public String getAuthorLastName9() {
		return authorLastName9;
	}

	public void setAuthorLastName9(String str) {
		this.authorLastName9 = str;
	}

	public String getAuthorEmail9() {
		return authorEmail9;
	}

	public void setAuthorEmail9(String str) {
		this.authorEmail9 = str;
	}

	public String getAuthorInstitute9() {
		return authorInstitute9;
	}

	public void setAuthorInstitute9(String str) {
		this.authorInstitute9 = str;
	}

	public String getAuthorFirstName10() {
		return authorFirstName10;
	}

	public void setAuthorFirstName10(String str) {
		this.authorFirstName10 = str;
	}

	public String getAuthorLastName10() {
		return authorLastName10;
	}

	public void setAuthorLastName10(String str) {
		this.authorLastName10 = str;
	}

	public String getAuthorEmail10() {
		return authorEmail10;
	}

	public void setAuthorEmail10(String str) {
		this.authorEmail10 = str;
	}

	public String getAuthorInstitute10() {
		return authorInstitute10;
	}

	public void setAuthorInstitute10(String str) {
		this.authorInstitute10 = str;
	}

	public String getAuthorFirstName11() {
		return authorFirstName11;
	}

	public void setAuthorFirstName11(String str) {
		this.authorFirstName11 = str;
	}

	public String getAuthorLastName11() {
		return authorLastName11;
	}

	public void setAuthorLastName11(String str) {
		this.authorLastName11 = str;
	}

	public String getAuthorEmail11() {
		return authorEmail11;
	}

	public void setAuthorEmail11(String str) {
		this.authorEmail11 = str;
	}

	public String getAuthorInstitute11() {
		return authorInstitute11;
	}

	public void setAuthorInstitute11(String str) {
		this.authorInstitute11 = str;
	}

	public String getAuthorFirstName12() {
		return authorFirstName12;
	}

	public void setAuthorFirstName12(String str) {
		this.authorFirstName12 = str;
	}

	public String getAuthorLastName12() {
		return authorLastName12;
	}

	public void setAuthorLastName12(String str) {
		this.authorLastName12 = str;
	}

	public String getAuthorEmail12() {
		return authorEmail12;
	}

	public void setAuthorEmail12(String str) {
		this.authorEmail12 = str;
	}

	public String getAuthorInstitute12() {
		return authorInstitute12;
	}

	public void setAuthorInstitute12(String str) {
		this.authorInstitute12 = str;
	}

	public String getAuthorFirstName13() {
		return authorFirstName13;
	}

	public void setAuthorFirstName13(String str) {
		this.authorFirstName13 = str;
	}

	public String getAuthorLastName13() {
		return authorLastName13;
	}

	public void setAuthorLastName13(String str) {
		this.authorLastName13 = str;
	}

	public String getAuthorEmail13() {
		return authorEmail13;
	}

	public void setAuthorEmail13(String str) {
		this.authorEmail13 = str;
	}

	public String getAuthorInstitute13() {
		return authorInstitute13;
	}

	public void setAuthorInstitute13(String str) {
		this.authorInstitute13 = str;
	}

	public String getAuthorFirstName14() {
		return authorFirstName14;
	}

	public void setAuthorFirstName14(String str) {
		this.authorFirstName14 = str;
	}

	public String getAuthorLastName14() {
		return authorLastName14;
	}

	public void setAuthorLastName14(String str) {
		this.authorLastName14 = str;
	}

	public String getAuthorEmail14() {
		return authorEmail14;
	}

	public void setAuthorEmail14(String str) {
		this.authorEmail14 = str;
	}

	public String getAuthorInstitute14() {
		return authorInstitute14;
	}

	public void setAuthorInstitute14(String str) {
		this.authorInstitute14 = str;
	}

	public String getAuthorFirstName15() {
		return authorFirstName15;
	}

	public void setAuthorFirstName15(String str) {
		this.authorFirstName15 = str;
	}

	public String getAuthorLastName15() {
		return authorLastName15;
	}

	public void setAuthorLastName15(String str) {
		this.authorLastName15 = str;
	}

	public String getAuthorEmail15() {
		return authorEmail15;
	}

	public void setAuthorEmail15(String str) {
		this.authorEmail15 = str;
	}

	public String getAuthorInstitute15() {
		return authorInstitute15;
	}

	public void setAuthorInstitute15(String str) {
		this.authorInstitute15 = str;
	}

	public String getAuthorFirstName16() {
		return authorFirstName16;
	}

	public void setAuthorFirstName16(String str) {
		this.authorFirstName16 = str;
	}

	public String getAuthorLastName16() {
		return authorLastName16;
	}

	public void setAuthorLastName16(String str) {
		this.authorLastName16 = str;
	}

	public String getAuthorEmail16() {
		return authorEmail16;
	}

	public void setAuthorEmail16(String str) {
		this.authorEmail16 = str;
	}

	public String getAuthorInstitute16() {
		return authorInstitute16;
	}

	public void setAuthorInstitute16(String str) {
		this.authorInstitute16 = str;
	}

	public String getAuthorFirstName17() {
		return authorFirstName17;
	}

	public void setAuthorFirstName17(String str) {
		this.authorFirstName17 = str;
	}

	public String getAuthorLastName17() {
		return authorLastName17;
	}

	public void setAuthorLastName17(String str) {
		this.authorLastName17 = str;
	}

	public String getAuthorEmail17() {
		return authorEmail17;
	}

	public void setAuthorEmail17(String str) {
		this.authorEmail17 = str;
	}

	public String getAuthorInstitute17() {
		return authorInstitute17;
	}

	public void setAuthorInstitute17(String str) {
		this.authorInstitute17 = str;
	}

	public String getAuthorFirstName18() {
		return authorFirstName18;
	}

	public void setAuthorFirstName18(String str) {
		this.authorFirstName18 = str;
	}

	public String getAuthorLastName18() {
		return authorLastName18;
	}

	public void setAuthorLastName18(String str) {
		this.authorLastName18 = str;
	}

	public String getAuthorEmail18() {
		return authorEmail18;
	}

	public void setAuthorEmail18(String str) {
		this.authorEmail18 = str;
	}

	public String getAuthorInstitute18() {
		return authorInstitute18;
	}

	public void setAuthorInstitute18(String str) {
		this.authorInstitute18 = str;
	}

	public String getCtitle() {
		return ctitle;
	}

	public void setCtitle(String str) {
		this.ctitle = str;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String str) {
		this.firstName = str;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String str) {
		this.lastName = str;
	}

	public String getWorkLocation() {
		return workLocation;
	}

	public void setWorkLocation(String str) {
		this.workLocation = str;
	}

	public String getResearch() {
		return research;
	}

	public void setResearch(String str) {
		this.research = str;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String str) {
		this.phone = str;
	}

	public String getFax() {
		return fax;
	}

	public void setFax(String str) {
		this.fax = str;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String str) {
		this.address = str;
	}

	public String getState() {
		return state;
	}

	public void setState(String str) {
		this.state = str;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String str) {
		this.country = str;
	}

	public String getPostcode() {
		return postcode;
	}

	public void setPostcode(String str) {
		this.postcode = str;
	}

	public int[] getExpertId() {
		return expertId;
	}
	
	public Hashtable getExpertHash(){
		Hashtable ehash=new Hashtable();
		if(expertId!=null && expertId.length>0){
			for(int i=0;i<expertId.length;i++){
				ehash.put(new Integer(expertId[i]), "true");
			}
		}
		return ehash;
	}

	public void setExpertId(int[] exs) {
		this.expertId = exs;
	}
	
	public FormFile getPfile() {
		return pfile;
	}
	
	public void setPfile(FormFile ff) {
		this.pfile = ff;
	}
	
	/**
	 * 验证表单
	 * 
	 * @return 是否有效
	 */
	public boolean validateForm(){
		if(StringUtils.isEmpty(this.title)||(this.subject<1)||StringUtils.isEmpty(this.abstr))
			return false;
			
		if(this.asum<1)
			return false;
		try{
			String first=null;
			String last=null;
			for(int i=1;i<=this.asum;i++){
				first=(String)PropertyUtils.getSimpleProperty(this, "authorFirstName"+i);
				last=(String)PropertyUtils.getSimpleProperty(this, "authorLastName"+i);
				if(StringUtils.isEmpty(first)||StringUtils.isEmpty(last))
					return false;
			}
		}catch(Exception e){
			log.error("get property exception, NoSuchMethodException!", e);
			return false;
		}
		
		if(StringUtils.isEmpty(this.firstName)||StringUtils.isEmpty(this.lastName)||StringUtils.isEmpty(this.workLocation)||StringUtils.isEmpty(this.phone)||StringUtils.isEmpty(this.address)||StringUtils.isEmpty(this.country)||StringUtils.isEmpty(this.postcode))
			return false;
		
		return true;
	}
	
	public PaperBean getPaper(boolean isNew){
		PaperBean paper = new PaperBean();
		
		if(!isNew)
			paper.setId(this.getId());
		paper.setTitle(this.title);
		SubjectBean sub = SubjectDAO.getSubject(this.subject);
		if(sub==null)
			return null;
		paper.setSubject(sub);
		paper.setAbstr(this.abstr);
		paper.setAuthorNames(this.getAuthorNames());
		
		return paper;
	}
	
	public List getAuthors(){
		if(this.asum<1)
			return null;
		
		AuthorBean author=null;
		ArrayList authors = new ArrayList();
		try{
			String first=null;
			String last=null;
			for(int i=1;i<=this.asum;i++){
				author = new AuthorBean();
				author.setOrderNo(i);
				author.setFirstName((String)PropertyUtils.getSimpleProperty(this, "authorFirstName"+i));
				author.setLastName((String)PropertyUtils.getSimpleProperty(this, "authorLastName"+i));
				author.setEmail((String)PropertyUtils.getSimpleProperty(this, "authorEmail"+i));
				author.setInstitute((String)PropertyUtils.getSimpleProperty(this, "authorInstitute"+i));
				
				authors.add(author);
			}
		}catch(Exception e){
			log.error("get property exception, NoSuchMethodException!", e);
			return null;
		}
		
		return authors;
	}
	
	public String getAuthorNames(){
		if(this.asum<1)
			return null;
		
		StringBuffer authors = new StringBuffer();
		try{
			String first=null;
			String last=null;
			for(int i=1;i<=this.asum;i++){
				first=(String)PropertyUtils.getSimpleProperty(this, "authorFirstName"+i);
				last=(String)PropertyUtils.getSimpleProperty(this, "authorLastName"+i);
				if(StringUtils.isNotEmpty(first)){
					if(CharsetChecker.isZH(firstName.substring(0,1))){
						authors.append(',');
						authors.append(StringUtils.exportString(last));
						authors.append(first);
					}else{
						authors.append(',');
						authors.append(first);
						authors.append(' ');
						authors.append(StringUtils.exportString(last));
					}
				}
			}
		}catch(Exception e){
			log.error("get property exception, NoSuchMethodException!", e);
			return null;
		}
		
		return authors.toString();
	}
	
	public UserBean getUserInfo(){
		UserBean user = new UserBean();
		
		user.getName().setTitle(this.ctitle);
		user.getName().setFirstName(this.firstName);
		user.getName().setLastName(this.lastName);
		user.setWorkLocation(this.workLocation);
		user.setResearch(this.research);
		user.setPhone(this.phone);
		user.setFax(this.fax);
		user.setAddress(this.address);
		user.setState(this.state);
		user.setCountry(this.country);
		user.setPostcode(this.postcode);
		
		return user;
	}
}
```
