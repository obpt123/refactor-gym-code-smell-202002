#Shotgun Surgery
 
 
```
CmsService类中：
 private String getQueue(Integer companyId) {  
    return cmsQueue + "_" + companyId;
 }

OcrResultService类中：部分代码
 encryptAndDecrypt.encryptToFile(new File(filePath + "_" + imageFiles.indexOf(imageFile) + IMAGE_EXTENSION), imageFile);
 pathList.add(resultResponse.getDocType() + "_" + imageFiles.indexOf(imageFile) + IMAGE_EXTENSION);
```
这里不同的地方都用到了'_'，如果一旦换成其他的分隔符，就需要修改多处。