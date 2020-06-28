
# kimp  

<a href="https://www.npmjs.com/package/kimp" target="_BLANK">
<img src="https://nodei.co/npm/kimp.png"> 
</a>

Easy to use, ID generator. Supports 3 types:

 - UUID Version 4 (RFC4122 compliant)
 - Hash
 - Digit Hash  
  
#### Installation  
  
```  
npm i kimp  
```  
  
#### Usage  
  
```  
import { kimp } from 'kimp'  
  
console.log(kimp.v4())  
// 455a5a0b-fb8f-47d6-977f-937375b842d4  
```  
  
#### Types  
  
  UUID (or GUID):
```    
kimp.v4()  
// 455a5a0b-fb8f-47d6-977f-937375b842d4  
```  
  Hash: 
```   
kimp.hash()  
// eFRd9nEjjV9vz4r8R26JGdrQ4UwTcQADCQdM9VcX  
```
Digits:
```
kimp.digits()
// 72260183
```

Both `hash()` and `digits()` support a limit (:number)
```
kimp.digits(20)
// 71649164018462941631
```
v1.0.0
