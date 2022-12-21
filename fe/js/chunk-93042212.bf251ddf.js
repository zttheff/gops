(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93042212"],{"09d2":function(t,e,n){"use strict";n("19db")},1668:function(t,e,n){"use strict";n("407d")},"19db":function(t,e,n){},3591:function(t,e,n){"use strict";n("55e8")},"407d":function(t,e,n){},"55e8":function(t,e,n){},c2d1:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("el-container",{staticStyle:{height:"100%",border:"1px solid #eee"}},[e("el-tabs",{staticStyle:{width:"100%"},attrs:{stretch:!0},on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"监控基本配置",name:"first"}},[e("baseSetting")],1),e("el-tab-pane",{attrs:{label:"告警通道配置",name:"second"}},[e("notifySetting")],1)],1)],1)},a=[],r=(n("ac67"),n("1bc7"),n("32ea"),n("e186"),n("bff1")),o=n("a483"),s=function(){var t=this,e=t._self._c;return e("el-container",{staticStyle:{height:"100%",border:"1px solid #eee"}},[e("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"basesetting",attrs:{model:t.basesetting,"label-width":"120px","label-position":"left"}},[e("el-form-item",{staticStyle:{width:"80%"},attrs:{prop:"call",label:"电话告警"}},[e("el-switch",{staticStyle:{"margin-left":"10px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"开启","inactive-text":"关闭"},on:{change:t.switchAlarmHandler},model:{value:t.call,callback:function(e){t.call=e},expression:"call"}}),e("el-tooltip",{staticClass:"item",staticStyle:{"margin-left":"2px"},attrs:{effect:"light",content:"默认免费告警电话1000通",placement:"right"}},[e("i",{staticClass:"el-icon-question"})])],1),e("el-form-item",{staticStyle:{width:"80%"},attrs:{prop:"concurrence",label:"告警并发数"}},[e("el-input-number",{attrs:{"controls-position":"right",step:10,min:100,max:500},model:{value:t.basesetting.concurrence,callback:function(e){t.$set(t.basesetting,"concurrence",e)},expression:"basesetting.concurrence"}})],1),e("el-form-item",{staticStyle:{width:"80%"},attrs:{prop:"concurrence",label:"告警消息最大行数"}},[e("el-input-number",{attrs:{"controls-position":"right",step:10,min:10,max:500},model:{value:t.basesetting.message_count,callback:function(e){t.$set(t.basesetting,"message_count",e)},expression:"basesetting.message_count"}})],1),e("el-form-item",{staticStyle:{width:"400px"},attrs:{prop:"concurrence",label:"告警聚合阈值"}},[e("el-input-number",{attrs:{"controls-position":"right",step:1,min:1,max:100},model:{value:t.basesetting.aggregation,callback:function(e){t.$set(t.basesetting,"aggregation",e)},expression:"basesetting.aggregation"}}),e("el-tooltip",{staticClass:"item",staticStyle:{"margin-left":"2px"},attrs:{effect:"light",content:"同类告警规则规定时间范围内满足该条数聚合告警: 例如一个机房网络挂了,导致同机房所有机器集中告警, 数量大于该阈值后聚合告警,避免同类告警风暴.",placement:"right"}},[e("i",{staticClass:"el-icon-question"})])],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",plain:""},on:{click:t.saveSetting}},[t._v("保存")])],1)],1)],1)},c=[],l=n("7736");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var p={data:function(){return{activeName:"first",loading:!1,password:"",call:!0,basesetting:{concurrence:100,message_count:50,aggregation:5,call:!0}}},created:function(){this.getData()},components:{},computed:{data:function(){return{}}},methods:f(f({},Object(l["b"])(["saveAlarmSetting","getAlarmSetting"])),{},{getData:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getAlarmSetting();case 2:this.basesetting=this.$store.state.alarmSetting.data,0!=this.basesetting.id&&(this.call=this.basesetting.call);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),switchAlarmHandler:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.basesetting.call=this.call;case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),saveSetting:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.saveAlarmSetting(this.basesetting);case 2:this.getData();case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleClick:function(t,e){console.log(t,e)}})},g=p,b=(n("09d2"),n("0b56")),d=Object(b["a"])(g,s,c,!1,null,"748bac62",null),h=d.exports,y=(n("a450"),function(){var t=this,e=t._self._c;return e("el-container",{staticStyle:{height:"80%",border:"1px solid #eee"}},[e("el-header",{staticStyle:{"text-align":"left","margin-top":"20px","font-size":"12px"}},[e("el-button",{attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:t.createHandler}},[t._v("添加告警机器人")])],1),e("el-main",[e("el-dialog",{attrs:{title:"添加机器人",visible:t.notifyVisable,width:"45%"},on:{"update:visible":function(e){t.notifyVisable=e},close:function(e){t.notifyVisable=!1}}},[e("el-divider"),e("el-form",{ref:"notifyConfig",attrs:{model:t.notifyConfig,"label-position":"left","label-width":"120px"}},[e("el-form-item",{staticStyle:{width:"60%"},attrs:{label:"告警通道"}},[e("el-select",{staticStyle:{width:"100px"},attrs:{filterable:"",clearable:"",placeholder:"请选择告警通道"},model:{value:t.notifyConfig.category,callback:function(e){t.$set(t.notifyConfig,"category",e)},expression:"notifyConfig.category"}},t._l(t.categorys,(function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id,disabled:t.disabled}})})),1)],1),e("el-form-item",{staticStyle:{width:"60%"},attrs:{label:"机器人名称"}},[e("el-input",{model:{value:t.notifyConfig.name,callback:function(e){t.$set(t.notifyConfig,"name","string"===typeof e?e.trim():e)},expression:"notifyConfig.name"}})],1),e("el-form-item",{staticStyle:{width:"80%"},attrs:{label:"机器人地址"}},[e("el-input",{model:{value:t.notifyConfig.webhook,callback:function(e){t.$set(t.notifyConfig,"webhook","string"===typeof e?e.trim():e)},expression:"notifyConfig.webhook"}})],1),e("el-form-item",{staticStyle:{width:"80%"},attrs:{label:"机器人Sign"}},[e("el-input",{model:{value:t.notifyConfig.sign,callback:function(e){t.$set(t.notifyConfig,"sign","string"===typeof e?e.trim():e)},expression:"notifyConfig.sign"}})],1),e("el-form-item",{staticStyle:{width:"80%"},attrs:{label:"备注"}},[e("el-input",{model:{value:t.notifyConfig.mark,callback:function(e){t.$set(t.notifyConfig,"mark",e)},expression:"notifyConfig.mark"}})],1)],1),e("div",[e("el-button",{attrs:{type:"success",round:""},on:{click:function(e){return t.create()}}},[t._v("创建")]),e("el-button",{on:{click:function(e){t.notifyVisable=!1}}},[t._v("取 消")])],1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{data:t.tableData,"header-cell-style":{background:"#eef1f6",color:"#606266"}}},[e("el-table-column",{attrs:{prop:"name",label:"机器人名称",width:"140"}}),e("el-table-column",{attrs:{prop:"category",label:"机器人类别",width:"140"},scopedSlots:t._u([{key:"default",fn:function(n){return[1===n.row.category?e("span",[t._v("钉钉")]):t._e(),2===n.row.category?e("span",[t._v("飞书")]):t._e(),3===n.row.category?e("span",[t._v("企业微信")]):t._e()]}}])}),e("el-table-column",{attrs:{prop:"webhook",label:"机器人地址"}}),e("el-table-column",{attrs:{prop:"creater",label:"创建人",width:"140"}}),e("el-table-column",{attrs:{prop:"mark",label:"描述"}}),e("el-table-column",{attrs:{prop:"created_at",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(t._f("formatTime")(e.row.updated))+"\n        ")]}}])}),e("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(n){return[e("el-button",{staticClass:"cadetblue",attrs:{type:"text",icon:"el-icon-video-play"},on:{click:function(e){return t.testNotifyHandler(n.$index,n.row)}}},[t._v("测试")]),e("el-button",{staticClass:"cadetblue",attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(e){return t.edit(n.$index,n.row)}}},[t._v("编辑")]),e("el-button",{staticClass:"cadetblue",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(e){return t.delNotify(n.$index,n.row)}}},[t._v("删除")])]}}])})],1),e("div",{staticClass:"pagination"},[e("el-pagination",{attrs:{"current-page":t.cur_page,"page-size":t.page_size,layout:"total, prev, pager, next",total:t.notifyCounts},on:{"current-change":t.notifyPageHandler,"update:currentPage":function(e){t.cur_page=e},"update:current-page":function(e){t.cur_page=e}}})],1)],1)],1)}),m=[];function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O={data:function(){return{categorys:[{id:1,name:"钉钉",disabled:!1},{id:2,name:"飞书",disabled:!1},{id:3,name:"企业微信",disabled:!0}],loading:!1,tableData:void 0,notifyConfig:{id:0,category:1,name:"",webhook:"",sign:"",mark:""},notifyVisable:!1,notifyCounts:0,cur_page:1,page_size:20,page_total:1}},created:function(){this.getData()},components:{},computed:{data:function(){return{tableData:this.$store.state.notifyData.data,notifyCounts:this.$store.state.notifyData.total}}},watch:{filterText:function(t){this.$refs.SlotMenuList.filter(t)}},methods:v(v({},Object(l["b"])(["getNotifys","deleteNotify","createNotify","testNotify"])),{},{getData:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getNotifys({page:this.cur_page,pageSize:this.page_size});case 2:this.tableData=this.$store.state.notifyData.data,this.notifyCounts=this.$store.state.notifyData.total;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),notifyPageHandler:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getNotifys({page:this.cur_page,pageSize:this.page_size});case 2:this.tableData=this.$store.state.notifyData.data,this.notifyCounts=this.$store.state.notifyData.total;case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),edit:function(t,e){this.notifyConfig.id=e.id,this.notifyConfig.category=e.category,this.notifyConfig.name=e.name,this.notifyConfig.webhook=e.webhook,this.notifyConfig.sign=e.sign,this.notifyConfig.mark=e.mark,this.notifyVisable=!0},delNotify:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("id:",n.Id),t.next=3,this.deleteNotify({id:n.Id});case 3:return t.next=5,this.getNotifys({page:this.cur_page,pageSize:this.page_size});case 5:this.tableData=this.$store.state.notifyData.data,this.notifyCounts=this.$store.state.notifyData.total;case 7:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),testNotifyHandler:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.testNotify({webhook:n.webhook,category:n.category,sign:n.sign,name:n.name,mark:n.mark});case 2:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}(),create:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.createNotify(this.notifyConfig);case 2:return t.next=4,this.getNotifys({page:this.cur_page,pageSize:this.page_size});case 4:this.tableData=this.$store.state.notifyData.data,this.notifyCounts=this.$store.state.notifyData.total,this.notifyVisable=!1;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),createHandler:function(){this.notifyConfig.id=0,this.notifyConfig.name="",this.notifyConfig.webhook="",this.notifyConfig.sign="",this.notifyConfig.mark="",this.notifyVisable=!0}})},k=O,x=(n("1668"),Object(b["a"])(k,y,m,!1,null,"dc45f070",null)),j=x.exports;function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var S={data:function(){return{activeName:"first"}},created:function(){this.getData()},components:{baseSetting:h,notifySetting:j},computed:{data:function(){return{}}},methods:_(_({},Object(l["b"])(["getAccounts"])),{},{getData:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),handleClick:function(t,e){console.log(t,e)}})},D=S,P=(n("3591"),Object(b["a"])(D,i,a,!1,null,"5ee929dd",null));e["default"]=P.exports}}]);