(function(e){function t(t){for(var a,r,o=t[0],u=t[1],i=t[2],p=0,d=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==c[o]&&(a=!1)}a&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},c={app:0},s=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-29418cea":"65b2c477","chunk-2cd1702e":"60747311","chunk-2f9d2bb6":"2a5a050d","chunk-48642fc3":"efc4979f","chunk-5836bdcf":"7e474c16","chunk-66243234":"c0aaa22a","chunk-04bdfaac":"330c8561","chunk-701941e4":"26ed85a8","chunk-6a7d2c66":"f68272ba","chunk-fec2f40a":"835d4371","chunk-ff57f9b2":"5f99cfac"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-29418cea":1,"chunk-2cd1702e":1,"chunk-2f9d2bb6":1,"chunk-48642fc3":1,"chunk-5836bdcf":1,"chunk-04bdfaac":1,"chunk-701941e4":1,"chunk-6a7d2c66":1,"chunk-fec2f40a":1,"chunk-ff57f9b2":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-29418cea":"4c0a64f9","chunk-2cd1702e":"bb922b36","chunk-2f9d2bb6":"8555a348","chunk-48642fc3":"f23c255a","chunk-5836bdcf":"d5ee06de","chunk-66243234":"31d6cfe0","chunk-04bdfaac":"19fe08cb","chunk-701941e4":"58a75d17","chunk-6a7d2c66":"9b847930","chunk-fec2f40a":"02dc63e5","chunk-ff57f9b2":"abbc397d"}[e]+".css",c=u.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var i=s[o],p=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(p===a||p===c))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){i=d[o],p=i.getAttribute("data-href");if(p===a||p===c)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var a=t&&t.target&&t.target.src||c,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[e],l.parentNode.removeChild(l),n(s)},l.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(l)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=s);var i,p=document.createElement("script");p.charset="utf-8",p.timeout=120,u.nc&&p.setAttribute("nonce",u.nc),p.src=o(e);var d=new Error;i=function(t){p.onerror=p.onload=null,clearTimeout(l);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:p})}),12e4);p.onerror=p.onload=i,document.head.appendChild(p)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],p=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=p;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("25ba"),n("5f1c"),n("6ba0"),n("b47f");var a=n("bb42"),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[(e.$route.meta.keepalive,t("router-view"))],1)},c=[],s=(n("ac67"),n("1bc7"),n("32ea"),n("a483")),o=(n("a450"),n("7736"));function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={name:"App",data:function(){return{}},computed:{user:function(){return this.$store.state.user},pathName:function(){return this.$route.name}},methods:i({},Object(o["b"])(["getUserName","getApprovers","getPdls","getGroup","getHosts","getUserNums","getAssetNums","getNodes","getTemplates","getAllAssets"])),created:function(){}},d=p,l=(n("6ecf"),n("0b56")),f=Object(l["a"])(d,r,c,!1,null,null,null),m=f.exports,h=n("a18c"),g=n("9035"),v=n.n(g),b=n("aec5"),j=n.n(b),k=n("883a"),y={zh:{i18n:{breadcrumb:"国际化产品",tips:"通过切换语言按钮，来改变当前内容的语言。",btn:"切换英文",title1:"常用用法",p1:"要是你把你的秘密告诉了风，那就别怪风把它带给树。",p2:"没有什么比信念更能支撑我们度过艰难的时光了。",p3:"只要能把自己的事做好，并让自己快乐，你就领先于大多数人了。",title2:"组件插值",info:"Element组件需要国际化，请参考 {action}。",value:"文档"}},en:{i18n:{breadcrumb:"International Products",tips:"Click on the button to change the current language. ",btn:"Switch Chinese",title1:"Common usage",p1:"If you reveal your secrets to the wind you should not blame the wind for  revealing them to the trees.",p2:"Nothing can help us endure dark times better than our faith. ",p3:"If you can do what you do best and be happy, you're further along in life  than most people.",title2:"Component interpolation",info:"The default language of Element is Chinese. If you wish to use another language, please refer to the {action}.",value:"documentation"}}};n("b9e9"),n("d21e"),n("8dee"),n("aa18"),n("982e");a["default"].directive("dialogDrag",{bind:function(e,t,n,a){var r=e.querySelector(".el-dialog__header"),c=e.querySelector(".el-dialog");r.style.cssText+=";cursor:move;",c.style.cssText+=";top:0px;";var s=function(){return window.document.currentStyle?function(e,t){return e.currentStyle[t]}:function(e,t){return getComputedStyle(e,!1)[t]}}();r.onmousedown=function(e){var t=e.clientX-r.offsetLeft,n=e.clientY-r.offsetTop,a=document.body.clientWidth,o=document.documentElement.clientHeight,u=c.offsetWidth,i=c.offsetHeight,p=c.offsetLeft,d=a-c.offsetLeft-u,l=c.offsetTop,f=o-c.offsetTop-i,m=s(c,"left"),h=s(c,"top");m.includes("%")?(m=+document.body.clientWidth*(+m.replace(/\%/g,"")/100),h=+document.body.clientHeight*(+h.replace(/\%/g,"")/100)):(m=+m.replace(/\px/g,""),h=+h.replace(/\px/g,"")),document.onmousemove=function(e){var a=e.clientX-t,r=e.clientY-n;-a>p?a=-p:a>d&&(a=d),-r>l?r=-l:r>f&&(r=f),c.style.cssText+=";left:".concat(a+m,"px;top:").concat(r+h,"px;")},document.onmouseup=function(e){document.onmousemove=null,document.onmouseup=null}}}});n("e186");var w=n("bff1");n("31bf");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(e){var t=e.method,n=e.root,a=void 0===n?"/mars":n,r=e.path,c=e.params,s=void 0===c?{}:c,o=e.data,u=e.headers,i=void 0===u?{}:u;return v()({method:t,url:"".concat(a).concat(r),params:s,data:o,headers:T(T({},i),{},{"Content-Type":"application/json"}),withCredentials:!0,timeout:4e4})},x=function(e){var t=e.method,n=e.root,a=void 0===n?"/jupiter":n,r=e.path,c=e.params,s=void 0===c?{}:c,o=e.data,u=e.headers,i=void 0===u?{}:u;return v()({method:t,url:"".concat(a).concat(r),params:s,data:o,headers:T(T({},i),{},{"Content-Type":"application/json"}),withCredentials:!0,timeout:4e4})};v.a.interceptors.request.use((function(e){return localStorage.getItem("Authorization")?e.headers.Authorization=localStorage.getItem("Authorization"):e.headers.Authorization="",e}),(function(e){return Promise.reject(e)})),v.a.interceptors.response.use((function(e){return e}),(function(e){switch(e.response.data.message&&(a["default"].prototype.$message({type:"error",message:e.response.data.message}),401===e.response.status&&(localStorage.removeItem("Authorization"),h["a"].push("/login"))),e.response.status){case 401:return void(e.message="未授权,请重新登录");default:return void(e.message="连接出错!")}return Promise.reject(e)})),a["default"].use(o["a"]);var R=new o["a"].Store({state:{user:{username:""},navData:void 0,nodeTasks:void 0,treeMenus:void 0,toolData:void 0,taskData:void 0,cilogs:void 0,commitLogsOrTags:void 0,taskYaml:void 0,images:void 0,envQuote:void 0,quoteValues:void 0,clusterData:void 0,auditData:void 0,username:void 0,pointData:void 0,userData:void 0,groupData:void 0,JupiterResource:void 0,MarsResource:void 0,DeployUsersTop:void 0,PdlStatic:void 0,DeployRatio:void 0,Authorization:localStorage.getItem("Authorization")?localStorage.getItem("Authorization"):""},mutations:{changeLogin:function(e,t){e.Authorization=t.token,localStorage.setItem("Authorization",t.token)},SET_DEPLOY_PDL_STATIC:function(e,t){e.PdlStatic=t},SET_DEPLOY_RATIO:function(e,t){e.DeployRatio=t},SET_DEPLOY_USER_TOP:function(e,t){e.DeployUsersTop=t},SET_MARS_RESOURCE:function(e,t){e.MarsResource=t},SET_JUPITER_RESOURCE:function(e,t){e.JupiterResource=t},SET_USER_DATA:function(e,t){e.userData=t},SET_GROUP_DATA:function(e,t){e.groupData=t},SET_PLATFORM_POINTS:function(e,t){e.pointData=t},SET_LOGIN_USERNAME:function(e,t){e.username=t.username},SET_TASK_AUDIT:function(e,t){e.auditData=t},SET_QUOTE_VALUES:function(e,t){e.quoteValues=t},SET_ENV_QUOTE:function(e,t){e.envQuote=t},SET_TASK_IMAGE:function(e,t){e.images=t},SET_TASK_YAML:function(e,t){e.taskYaml=t},SET_CI_LOGS:function(e,t){e.cilogs=t},SET_COMMIT_VERSION:function(e,t){e.commitLogsOrTags=t},SET_TASK_DATA:function(e,t){e.taskData=t},SET_MQNAV_DATA:function(e,t){e.navData=t},SET_MQ_DATA:function(e,t){e.mqData=t},SET_MARS_NODE_TASKS:function(e,t){e.nodeTasks=t},SET_MARS_TREE_MENUS:function(e,t){e.treeMenus=t},SET_CLUSTERS_DATA:function(e,t){e.clusterData=t},SET_TOOL_CONFIG:function(e,t){e.toolData=t}},actions:{getPoints:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x({method:"get",path:"/api/v1/points"});case 3:n=e.sent,t.commit("SET_PLATFORM_POINTS",n.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("getPoints:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}(),getLoginUser:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x({method:"get",path:"/api/v1/login/username"});case 3:n=e.sent,t.commit("SET_LOGIN_USERNAME",n.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("getLoginUser:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}(),getDeployRatio:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S({method:"get",path:"/api/v1/deploy/ratio"});case 3:n=e.sent,t.commit("SET_DEPLOY_RATIO",n.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("mars deploy user top:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}(),getDeployPdlStatic:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S({method:"get",path:"/api/v1/pdl/deploy/static"});case 3:n=e.sent,t.commit("SET_DEPLOY_PDL_STATIC",n.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("mars deploy user top:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}(),getDeployUsersTop:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S({method:"get",path:"/api/v1/user/deploy/top"});case 3:n=e.sent,t.commit("SET_DEPLOY_USER_TOP",n.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("mars deploy user top:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}(),getMarsResourceCount:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S({method:"get",path:"/api/v1/resource"});case 3:n=e.sent,t.commit("SET_MARS_RESOURCE",n.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("mars resource:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}(),getJupiterResourceCount:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x({method:"get",path:"/api/v1/resource"});case 3:n=e.sent,t.commit("SET_JUPITER_RESOURCE",n.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("jupiter resource:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}(),logout:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x({method:"get",path:"/api/v1/logout",data:data});case 3:n=e.sent,Object(b["Message"])({message:n.data.message,type:"success",duration:2e3}),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("loginout:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}(),Login:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x({method:"post",path:"/api/v1/login",data:n});case 3:a=e.sent,console.log("success",a.data),t.commit("changeLogin",a.data),Object(b["Message"])({message:a.data.message,type:"success",duration:2e3}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log("login:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));function t(t,n){return e.apply(this,arguments)}return t}(),deploy:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S({method:"post",path:"/api/v1/task/deploy",data:n});case 2:a=e.sent,Object(b["Message"])({message:a.data.message,type:"success",duration:6e3}),h["a"].push("/audit?id="+a.data.data);case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),build:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S({method:"post",path:"/api/v1/task/build",data:n});case 2:a=e.sent,Object(b["Message"])({message:a.data.message,type:"success",duration:6e3});case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),getEnvQuotes:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.category,r=n.id,c=n.env,e.prev=1,e.next=4,S({method:"get",path:"/api/v1/task/env/"+c+"/"+r+"/"+a+"/quote"});case 4:s=e.sent,t.commit("SET_ENV_QUOTE",s.data),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log("getenvquotes:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t,n){return e.apply(this,arguments)}return t}(),getQuoteValues:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,c,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.category,r=n.item,c=n.id,s=n.env,e.prev=1,e.next=4,S({method:"get",path:"/api/v1/quote/env/"+s+"/"+a+"/"+r+"/"+c+"/values"});case 4:o=e.sent,t.commit("SET_QUOTE_VALUES",o.data),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log("getenvquotesvalues:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t,n){return e.apply(this,arguments)}return t}(),getYaml:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.id,e.prev=1,e.next=4,S({method:"get",path:"/api/v1/task/"+a+"/yaml"});case 4:r=e.sent,t.commit("SET_TASK_YAML",r.data),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log("getyaml:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t,n){return e.apply(this,arguments)}return t}(),getImages:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.id,e.prev=1,e.next=4,S({method:"get",path:"/api/v1/"+a+"/images"});case 4:r=e.sent,t.commit("SET_TASK_IMAGE",r.data),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log("getimages:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t,n){return e.apply(this,arguments)}return t}(),getBuildLogs:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S({method:"get",path:"/api/v1/ci/logs",params:n});case 3:a=e.sent,t.commit("SET_CI_LOGS",a.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("getbuildlogs:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t,n){return e.apply(this,arguments)}return t}(),getCommitLogsOrTags:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S({method:"get",path:"/api/v1/commit/versions",params:n});case 3:a=e.sent,t.commit("SET_COMMIT_VERSION",a.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t.commit("SET_COMMIT_VERSION",{});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t,n){return e.apply(this,arguments)}return t}(),searchNodeTasks:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S({method:"get",path:"/api/v1/node/tasks/",params:{nodeId:n}});case 3:a=e.sent,t.commit("SET_MARS_NODE_TASKS",a.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("searchnodetasks:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t,n){return e.apply(this,arguments)}return t}(),getTreeMenus:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S({method:"get",path:"/api/v1/node/menus"});case 3:n=e.sent,t.commit("SET_MARS_TREE_MENUS",n.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("gettree:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t){return e.apply(this,arguments)}return t}(),deleteTreeNode:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.id,e.next=3,S({method:"get",path:"/api/v1/node/"+a+"/delete"});case 3:r=e.sent,Object(b["Message"])({message:r.data.message,type:"success",duration:6e3});case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),deleteTask:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.id,e.next=3,S({method:"get",path:"/api/v1/task/"+a+"/delete"});case 3:r=e.sent,Object(b["Message"])({message:r.data.message,type:"success",duration:6e3});case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),createTreeNode:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S({method:"post",path:"/api/v1/node/create",data:n});case 2:a=e.sent,Object(b["Message"])({message:a.data.message,type:"success",duration:6e3});case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),createTask:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S({method:"post",path:"/api/v1/task/create",data:n});case 2:a=e.sent,Object(b["Message"])({message:a.data.message,type:"success",duration:4e3});case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),getNodeTasks:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S({method:"get",path:"/api/v1/node/tasks",params:n});case 3:a=e.sent,t.commit("SET_TASK_DATA",a.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("getnodetask:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t,n){return e.apply(this,arguments)}return t}(),getAudits:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S({method:"get",path:"/api/v1/task/audit",params:n});case 3:a=e.sent,t.commit("SET_TASK_AUDIT",a.data),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log("getaudits:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function t(t,n){return e.apply(this,arguments)}return t}(),createCluster:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S({method:"post",path:"/api/v1/cluster/create",data:n});case 2:a=e.sent,Object(b["Message"])({message:a.data.message,type:"success",duration:4e3});case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),testConnect:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S({method:"post",path:"/api/v1/test/conn",data:n});case 2:a=e.sent,Object(b["Message"])({message:a.data.message,type:"success",duration:4e3});case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),deleteCluster:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.id,e.next=3,S({method:"get",path:"/api/v1/cluster/"+a+"/delete",data:""});case 3:r=e.sent,Object(b["Message"])({message:r.data.message,type:"success",duration:4e3});case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),getClusters:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.page,r=n.pageSize,e.prev=1,e.next=4,S({method:"get",path:"/api/v1/clusters/get",params:{page:a,page_size:r}});case 4:c=e.sent,t.commit("SET_CLUSTERS_DATA",c.data),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log("getclusters:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t,n){return e.apply(this,arguments)}return t}(),createTool:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S({method:"post",path:"/api/v1/tool/create",data:n});case 2:a=e.sent,Object(b["Message"])({message:a.data.message,type:"success",duration:4e3});case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),deleteTool:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.id,e.next=3,S({method:"get",path:"/api/v1/tool/"+a+"/delete",data:""});case 3:r=e.sent,Object(b["Message"])({message:r.data.message,type:"success",duration:4e3});case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),getTools:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.name,r=n.page,c=n.pageSize,e.prev=1,e.next=4,S({method:"get",path:"/api/v1/tool/get",params:{name:a,page:r,page_size:c}});case 4:s=e.sent,t.commit("SET_TOOL_CONFIG",s.data),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log("gettools:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t,n){return e.apply(this,arguments)}return t}(),createAccount:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x({method:"post",path:"/api/v1/user/create",data:n});case 2:a=e.sent,Object(b["Message"])({message:a.data.message,type:"success",duration:4e3});case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),deleteAccount:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.id,e.next=3,x({method:"get",path:"/api/v1/user/"+a+"/delete",data:""});case 3:r=e.sent,Object(b["Message"])({message:r.data.message,type:"success",duration:4e3});case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),createGroup:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x({method:"post",path:"/api/v1/group/create",data:n});case 2:a=e.sent,Object(b["Message"])({message:a.data.message,type:"success",duration:4e3});case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),deleteGroup:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.id,e.next=3,x({method:"get",path:"/api/v1/group/"+a+"/delete",data:""});case 3:r=e.sent,Object(b["Message"])({message:r.data.message,type:"success",duration:4e3});case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),getGroups:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.name,r=n.page,c=n.pageSize,e.prev=1,e.next=4,x({method:"get",path:"/api/v1/groups",params:{name:a,page:r,page_size:c}});case 4:s=e.sent,t.commit("SET_GROUP_DATA",s.data),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log("getgroups:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t,n){return e.apply(this,arguments)}return t}(),getAccounts:function(){var e=Object(w["a"])(regeneratorRuntime.mark((function e(t,n){var a,r,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.name,r=n.page,c=n.pageSize,e.prev=1,e.next=4,x({method:"get",path:"/api/v1/users",params:{name:a,page:r,page_size:c}});case 4:s=e.sent,t.commit("SET_USER_DATA",s.data),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log("gettools:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t,n){return e.apply(this,arguments)}return t}()}}),_=(n("9f45"),n("2f42")),E=n.n(_),A=n("4f78"),D=n.n(A),P=n("babc"),M=n("2a50");a["default"].component("echarts",M["a"]),a["default"].use(D.a),a["default"].config.productionTip=!1,a["default"].use(P["a"]),a["default"].use(k["a"]),a["default"].use(j.a,{size:"small"}),a["default"].prototype.$axios=v.a;var z=new k["a"]({locale:"zh",messages:y});a["default"].filter("formatTime",(function(e){return E()(e).format("YYYY-MM-DD HH:mm:ss")})),h["a"].beforeEach((function(e,t,n){var a="admin";a||"/dashboard"===e.path?e.meta.permission?"admin"===a?n():n("/403"):n():n("/dashboard")})),new a["default"]({router:h["a"],i18n:z,store:R,render:function(e){return e(m)}}).$mount("#app")},"6ecf":function(e,t,n){"use strict";n("ca5b")},a18c:function(e,t,n){"use strict";n("e5a0");var a=n("bb42"),r=n("f038");a["default"].use(r["a"]);var c=new r["a"]({mode:"history",routes:[{path:"/",redirect:"/dashboard"},{path:"/",component:function(e){return n.e("chunk-2cd1702e").then(function(){var t=[n("bfe9")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"自述文件"},children:[{path:"/dashboard",name:"dashboard",component:function(e){return n.e("chunk-48642fc3").then(function(){var t=[n("e2ad")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"系统首页",keepalive:!0}},{name:"cicd",path:"/cicd",meta:{title:"上线管理",keepalive:!0},component:function(e){return n.e("chunk-29418cea").then(function(){var t=[n("355c")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/task",name:"task",component:function(e){return n.e("chunk-fec2f40a").then(function(){var t=[n("83dc")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"部署任务配置",keepalive:!0}},{path:"/tool",name:"tool",component:function(e){return Promise.all([n.e("chunk-66243234"),n.e("chunk-701941e4")]).then(function(){var t=[n("b0bf")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"构建工具管理",keepalive:!0}},{path:"/cluster",name:"cluster",component:function(e){return Promise.all([n.e("chunk-66243234"),n.e("chunk-04bdfaac")]).then(function(){var t=[n("e77f7")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"部署集群管理",keepalive:!0}},{path:"/audit",name:"audit",component:function(e){return n.e("chunk-2f9d2bb6").then(function(){var t=[n("5cd8")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"上线审计",keepalive:!0}},{path:"/user",name:"user",component:function(e){return n.e("chunk-5836bdcf").then(function(){var t=[n("c3bb")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"用户管理",keepalive:!0}},{path:"/group",name:"group",component:function(e){return n.e("chunk-ff57f9b2").then(function(){var t=[n("022b")];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"用户组管理",keepalvie:!0}}]},{path:"/login",component:function(e){return n.e("chunk-6a7d2c66").then(function(){var t=[n("0290")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"*",redirect:"/404"}]});c.beforeEach((function(e,t,n){if(document.title="天鸿云效","/login"===e.path)n();else{var a=localStorage.getItem("Authorization");null===a||""===a?n("/login"):n()}})),t["a"]=c},ca5b:function(e,t,n){},d21e:function(e,t,n){},f9ce1:function(e,t,n){var a={"./af":"6e3b","./af.js":"6e3b","./ar":"8888","./ar-dz":"6128","./ar-dz.js":"6128","./ar-kw":"a309","./ar-kw.js":"a309","./ar-ly":"7a31","./ar-ly.js":"7a31","./ar-ma":"02c0","./ar-ma.js":"02c0","./ar-sa":"4558","./ar-sa.js":"4558","./ar-tn":"f9ce","./ar-tn.js":"f9ce","./ar.js":"8888","./az":"7721","./az.js":"7721","./be":"e25c","./be.js":"e25c","./bg":"1f0b","./bg.js":"1f0b","./bm":"92cd","./bm.js":"92cd","./bn":"184e","./bn-bd":"7422","./bn-bd.js":"7422","./bn.js":"184e","./bo":"4acd","./bo.js":"4acd","./br":"03e8","./br.js":"03e8","./bs":"61a3","./bs.js":"61a3","./ca":"f855","./ca.js":"f855","./cs":"d4e6","./cs.js":"d4e6","./cv":"51ed","./cv.js":"51ed","./cy":"d892","./cy.js":"d892","./da":"21e4","./da.js":"21e4","./de":"1b69","./de-at":"7d15","./de-at.js":"7d15","./de-ch":"c033","./de-ch.js":"c033","./de.js":"1b69","./dv":"0581","./dv.js":"0581","./el":"7860","./el.js":"7860","./en-au":"b9cd","./en-au.js":"b9cd","./en-ca":"c889","./en-ca.js":"c889","./en-gb":"994c","./en-gb.js":"994c","./en-ie":"38b0","./en-ie.js":"38b0","./en-il":"863c","./en-il.js":"863c","./en-in":"160b","./en-in.js":"160b","./en-nz":"648a","./en-nz.js":"648a","./en-sg":"5c66","./en-sg.js":"5c66","./eo":"0e1f","./eo.js":"0e1f","./es":"7c4a","./es-do":"58da","./es-do.js":"58da","./es-mx":"4fcd","./es-mx.js":"4fcd","./es-us":"382c","./es-us.js":"382c","./es.js":"7c4a","./et":"63cd","./et.js":"63cd","./eu":"01ad","./eu.js":"01ad","./fa":"8280","./fa.js":"8280","./fi":"9f3c","./fi.js":"9f3c","./fil":"375c","./fil.js":"375c","./fo":"f731","./fo.js":"f731","./fr":"ff55","./fr-ca":"713c","./fr-ca.js":"713c","./fr-ch":"16be","./fr-ch.js":"16be","./fr.js":"ff55","./fy":"e89a","./fy.js":"e89a","./ga":"d532","./ga.js":"d532","./gd":"3ca6","./gd.js":"3ca6","./gl":"3ecb","./gl.js":"3ecb","./gom-deva":"d4cf","./gom-deva.js":"d4cf","./gom-latn":"9843","./gom-latn.js":"9843","./gu":"6ba05","./gu.js":"6ba05","./he":"fe0f","./he.js":"fe0f","./hi":"06e7","./hi.js":"06e7","./hr":"c472","./hr.js":"c472","./hu":"7877","./hu.js":"7877","./hy-am":"7bac","./hy-am.js":"7bac","./id":"0ec9","./id.js":"0ec9","./is":"bb0e","./is.js":"bb0e","./it":"6277","./it-ch":"6e33","./it-ch.js":"6e33","./it.js":"6277","./ja":"32ac","./ja.js":"32ac","./jv":"1bc3","./jv.js":"1bc3","./ka":"b80f","./ka.js":"b80f","./kk":"f3e3","./kk.js":"f3e3","./km":"f5b7","./km.js":"f5b7","./kn":"fd71","./kn.js":"fd71","./ko":"19ea","./ko.js":"19ea","./ku":"ea9d","./ku.js":"ea9d","./ky":"38ef","./ky.js":"38ef","./lb":"7887","./lb.js":"7887","./lo":"3973","./lo.js":"3973","./lt":"0853","./lt.js":"0853","./lv":"8f6f","./lv.js":"8f6f","./me":"20fe","./me.js":"20fe","./mi":"0dd4","./mi.js":"0dd4","./mk":"1e98","./mk.js":"1e98","./ml":"70a7","./ml.js":"70a7","./mn":"bb40","./mn.js":"bb40","./mr":"3ff9","./mr.js":"3ff9","./ms":"7625e","./ms-my":"12c6","./ms-my.js":"12c6","./ms.js":"7625e","./mt":"b082","./mt.js":"b082","./my":"5a95","./my.js":"5a95","./nb":"66aa","./nb.js":"66aa","./ne":"fa04","./ne.js":"fa04","./nl":"474b","./nl-be":"4802","./nl-be.js":"4802","./nl.js":"474b","./nn":"2875","./nn.js":"2875","./oc-lnc":"71ba","./oc-lnc.js":"71ba","./pa-in":"d879","./pa-in.js":"d879","./pl":"ad76","./pl.js":"ad76","./pt":"e15c","./pt-br":"7d70","./pt-br.js":"7d70","./pt.js":"e15c","./ro":"a02a","./ro.js":"a02a","./ru":"5fc8","./ru.js":"5fc8","./sd":"661e","./sd.js":"661e","./se":"eb7c","./se.js":"eb7c","./si":"e4f1","./si.js":"e4f1","./sk":"9de7","./sk.js":"9de7","./sl":"e05e","./sl.js":"e05e","./sq":"0f2a","./sq.js":"0f2a","./sr":"5be6","./sr-cyrl":"ebd0","./sr-cyrl.js":"ebd0","./sr.js":"5be6","./ss":"f9c9","./ss.js":"f9c9","./sv":"dd25","./sv.js":"dd25","./sw":"f63b","./sw.js":"f63b","./ta":"a9b5","./ta.js":"a9b5","./te":"652d","./te.js":"652d","./tet":"200a","./tet.js":"200a","./tg":"5d85","./tg.js":"5d85","./th":"6b54","./th.js":"6b54","./tk":"a28b","./tk.js":"a28b","./tl-ph":"a972","./tl-ph.js":"a972","./tlh":"efd1","./tlh.js":"efd1","./tr":"49ea","./tr.js":"49ea","./tzl":"5ebb","./tzl.js":"5ebb","./tzm":"d8d6","./tzm-latn":"b247","./tzm-latn.js":"b247","./tzm.js":"d8d6","./ug-cn":"0d0f","./ug-cn.js":"0d0f","./uk":"075f","./uk.js":"075f","./ur":"d52d","./ur.js":"d52d","./uz":"2b62","./uz-latn":"da6d","./uz-latn.js":"da6d","./uz.js":"2b62","./vi":"37de","./vi.js":"37de","./x-pseudo":"c818","./x-pseudo.js":"c818","./yo":"da39","./yo.js":"da39","./zh-cn":"baff","./zh-cn.js":"baff","./zh-hk":"be79","./zh-hk.js":"be79","./zh-mo":"b3c4","./zh-mo.js":"b3c4","./zh-tw":"f064","./zh-tw.js":"f064"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="f9ce1"}});