# WorkLifeBeyond role helper for JavaScript

[![npm version](https://badge.fury.io/js/wlb-role-helper.svg)](https://badge.fury.io/js/wlb-role-helper)

* Install

  *npm*: ```npm install --save wlb-role-helper```
  
  *yarn* ```yarn add wlb-role-helper```
  
* Usage
  
  ```javascript
  
   const { getGlobalRoles, getOrgRoles, Roles } = require('wlb-role-helper');
   
   let gLobalRoles = getGlobalRoles("10");
   // ["student"]
   
   let orgRoles = getOrgRoles("00010001");
   // ["organization-hr-admin", "organization-supervisor"]
  
   if(orgRoles.includes(Roles.ORGANIZATION_SUPERVISOR)){
      // true
   }

   const getRoleNumber = getRoleFromValueToNumber([0,3]);
   // 10010000
  
  ```
   See [Test](https://github.com/worklifebeyond/wlb-role-helper-js/blob/master/test.js) for details.
   
* Test

  Run `npm test`  
