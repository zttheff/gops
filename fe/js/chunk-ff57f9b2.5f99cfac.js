(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff57f9b2"],{"022b":function(e,t,n){"use strict";n.r(t);n("a450");var r=function(){var e=this,t=e._self._c;return t("el-container",{staticStyle:{height:"100%",border:"1px solid #eee"}},[t("el-main",[e._v("\n    用户组列表\n    "),t("el-divider"),t("div",{staticStyle:{float:"left"}},[t("el-button",{attrs:{type:"success"},on:{click:e.createHandle}},[e._v("创建用户组")])],1),t("div",{staticStyle:{float:"right","margin-bottom":"20px"}},[t("span",[e._v("用户组名:")]),t("el-input",{staticStyle:{width:"200px","margin-right":"10px"},model:{value:e.name,callback:function(t){e.name="string"===typeof t?t.trim():t},expression:"name"}}),t("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchGroupHandler}},[e._v("搜索")])],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.tableData,border:"","header-align":"center","header-cell-style":{background:"#eef1f6",color:"#606266"}}},[t("el-table-column",{attrs:{align:"center",prop:"name",label:"名称",width:"140"}}),t("el-table-column",{attrs:{align:"center",prop:"users",label:"用户数",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.users.length)+"\n        ")]}}])}),t("el-table-column",{attrs:{align:"center",prop:"points",label:"权限点",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.points.length)+"\n        ")]}}])}),t("el-table-column",{attrs:{prop:"mark",align:"center",label:"备注",width:"140"}}),t("el-table-column",{attrs:{prop:"created_at",align:"center",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("formatTime")(t.row.created_at))+"\n        ")]}}])}),t("el-table-column",{attrs:{prop:"result",align:"center",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(t){return e.editHandler(n.$index,n.row)}}},[e._v("编辑")]),t("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(t){return e.delGroupHandler(n.$index,n.row)}}},[e._v("删除")])]}}])})],1),t("div",{staticClass:"pagination"},[t("el-pagination",{attrs:{"current-page":e.cur_page,"page-size":e.page_size,layout:"total, prev, pager, next",total:e.groupCounts},on:{"current-change":e.groupPageHandler,"update:currentPage":function(t){e.cur_page=t},"update:current-page":function(t){e.cur_page=t}}})],1),t("el-dialog",{attrs:{title:"创建用户组",visible:e.groupVisable,width:"60%"},on:{"update:visible":function(t){e.groupVisable=t},close:function(t){e.groupVisable=!1}}},[t("el-divider"),t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"groupConfig",attrs:{model:e.groupConfig,rules:e.rules,"label-width":"60px","label-position":"left"}},[t("el-form-item",{staticStyle:{width:"40%"},attrs:{prop:"name",label:"名称",required:""}},[t("el-input",{model:{value:e.groupConfig.name,callback:function(t){e.$set(e.groupConfig,"name",t)},expression:"groupConfig.name"}})],1),t("el-form-item",{attrs:{label:"用户",prop:"group"}},[t("el-select",{attrs:{multiple:"","value-key":"id",filterable:"",clearable:"",placeholder:"请选择用户"},model:{value:e.groupConfig.users,callback:function(t){e.$set(e.groupConfig,"users",t)},expression:"groupConfig.users"}},e._l(e.users,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e}})})),1)],1),t("div",[t("el-table",{ref:"table",attrs:{data:e.pointData,"tooltip-effect":"dark",border:"",stripe:""}},[t("el-table-column",{attrs:{label:"系统名称",align:"center",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                              "+e._s(t.row.name)+"\n                          ")]}}])}),t("el-table-column",{attrs:{label:"权限点",align:"center"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-checkbox-group",{model:{value:e.groupConfig.points,callback:function(t){e.$set(e.groupConfig,"points",t)},expression:"groupConfig.points"}},e._l(n.row.points,(function(n){return t("el-checkbox",{key:n.id,attrs:{label:n}},[e._v(e._s(n.common))])})),1)]}}])})],1)],1)],1),t("div",[t("el-button",{attrs:{type:"success",round:""},on:{click:function(t){return e.create("groupConfig")}}},[e._v("创建")]),t("el-button",{on:{click:function(t){e.groupVisable=!1}}},[e._v("取 消")])],1)],1),t("el-dialog",{attrs:{title:"编辑用户组",visible:e.editVisable,width:"60%"},on:{"update:visible":function(t){e.editVisable=t},close:function(t){e.editVisable=!1}}},[t("el-divider"),t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"groupConfig",attrs:{model:e.groupConfig,rules:e.rules,"label-width":"60px","label-position":"left"}},[t("el-form-item",{staticStyle:{width:"40%"},attrs:{prop:"name",label:"名称",required:""}},[t("el-input",{model:{value:e.groupConfig.name,callback:function(t){e.$set(e.groupConfig,"name",t)},expression:"groupConfig.name"}})],1),t("el-form-item",{attrs:{label:"用户",prop:"group"}},[t("el-select",{attrs:{multiple:"","value-key":"id",filterable:"",clearable:"",placeholder:"请选择用户"},model:{value:e.groupConfig.users,callback:function(t){e.$set(e.groupConfig,"users",t)},expression:"groupConfig.users"}},e._l(e.users,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e}})})),1)],1),t("div",[t("el-table",{ref:"table",attrs:{data:e.pointData,"tooltip-effect":"dark",border:"",stripe:""}},[t("el-table-column",{attrs:{label:"系统名称",align:"center",width:"150px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                              "+e._s(t.row.name)+"\n                          ")]}}])}),t("el-table-column",{attrs:{label:"权限点",align:"center"},scopedSlots:e._u([{key:"default",fn:function(n){return[t("el-checkbox-group",{model:{value:e.checkedPoints,callback:function(t){e.checkedPoints=t},expression:"checkedPoints"}},e._l(n.row.points,(function(n){return t("el-checkbox",{key:n.id,attrs:{label:n.name}},[e._v(e._s(n.common))])})),1)]}}])})],1)],1)],1),t("div",[t("el-button",{attrs:{type:"success",round:""},on:{click:function(t){return e.edit("groupConfig")}}},[e._v("编辑")]),t("el-button",{on:{click:function(t){e.editVisable=!1}}},[e._v("取 消")])],1)],1)],1)],1)},a=[],o=(n("ac67"),n("1bc7"),n("32ea"),n("e186"),n("bff1")),i=n("a483"),s=n("7736");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={data:function(){return{loading:!1,groupVisable:!1,editVisable:!1,tableData:void 0,checkedPoints:[],pointData:[],cur_page:1,page_size:20,page_total:1,name:"",groupCounts:0,users:[],groupConfig:{id:0,name:"",users:[],points:[]},rules:{name:[{required:!0,message:"请输入用户组名称",trigger:"blur"}]}}},created:function(){this.getData()},components:{},computed:{data:function(){return{}}},methods:u(u({},Object(s["b"])(["getPoints","createGroup","getGroups","deleteGroup","getAccounts"])),{},{getData:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getPoints();case 2:return this.pointData=this.$store.state.pointData.data,e.next=5,this.getGroups({name:this.name,page:this.cur_page,pageSize:20});case 5:return this.tableData=this.$store.state.groupData.data,this.groupCounts=this.$store.state.groupData.total,e.next=9,this.getAccounts({name:this.username,page:this.cur_page,pageSize:1e3});case 9:this.users=this.$store.state.userData.data;case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),createHandle:function(){this.groupConfig.name="",this.groupConfig.users=[],this.groupConfig.points=[],this.groupVisable=!0},createAction:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.createGroup(this.groupConfig);case 2:this.getData();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),edit:function(){for(var e=0;e<this.checkedPoints.length;e++)for(var t=0;t<this.pointData.length;t++)for(var n=0;n<this.pointData[t].points.length;n++)this.pointData[t].points[n].name===this.checkedPoints[e]&&this.groupConfig.points.push(this.pointData[t].points[n]);this.createAction(),this.editVisable=!1},editHandler:function(e,t){console.log(t),this.groupConfig.id=t.id,this.groupConfig.name=t.name,this.groupConfig.users=t.users,0===t.points.length&&(this.checkedPoints=[]);for(var n=0;n<t.points.length;n++)this.checkedPoints.push(t.points[n].name);this.editVisable=!0},delGroupHandler:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.deleteGroup({id:n.id});case 2:this.getData();case 3:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}(),groupPageHandler:function(){this.searchGroupHandler()},searchGroupHandler:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getGroups({name:this.name,page:this.cur_page,pageSize:20});case 2:this.tableData=this.$store.state.groupData.data,this.groupCounts=this.$store.state.groupData.total;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),create:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;t.createAction(),t.groupVisable=!1,console.log(t.groupConfig)}))}})},p=c,g=(n("bdb4"),n("0b56")),d=Object(g["a"])(p,r,a,!1,null,"cfc2052e",null);t["default"]=d.exports},1489:function(e,t,n){},bdb4:function(e,t,n){"use strict";n("1489")}}]);