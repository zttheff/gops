(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3decca50"],{"133a":function(e,t,a){},31646:function(e,t,a){"use strict";a("dc07")},"3a98":function(e,t,a){"use strict";a("133a")},9907:function(e,t,a){"use strict";var s,r,n=[{id:1,name:"java8"},{id:2,name:"java11"},{id:3,name:"nodejs"},{id:4,name:"go"}],i={languages:n},l=i,o=a("0b56"),c=Object(o["a"])(l,s,r,!1,null,null,null);t["a"]=c.exports},dc07:function(e,t,a){},e64f:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("el-container",{staticStyle:{height:"100%",border:"1px solid #eee"}},[t("el-tabs",{staticStyle:{width:"100%"},attrs:{stretch:!0},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"资产管理",name:"first"}},[t("assets")],1),t("el-tab-pane",{attrs:{disabled:"",label:"云资产同步",name:"second"}}),t("el-tab-pane",{attrs:{disabled:"",label:"云账号管理",name:"five"}})],1)],1)},r=[],n=(a("ac67"),a("1bc7"),a("32ea"),a("e186"),a("bff1")),i=a("a483"),l=(a("a450"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:24}},[t("el-dialog",{attrs:{title:"创建资产",rules:e.rules,visible:e.assetVisable,width:"60%"},on:{"update:visible":function(t){e.assetVisable=t},close:function(t){e.assetVisable=!1}}},[t("el-divider"),t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"assetData",attrs:{model:e.assetData,"label-width":"120px","label-position":"left"}},[t("el-form-item",{staticStyle:{width:"80%"},attrs:{prop:"affiliation",label:"实例归属",required:""}},[t("el-select",{staticStyle:{width:"120px","margin-right":"5px"},attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"资产归属"},model:{value:e.assetData.affiliation,callback:function(t){e.$set(e.assetData,"affiliation",e._n(t))},expression:"assetData.affiliation"}},e._l(e.affiliations,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),1!=e.assetData.affiliation?t("el-form-item",{staticStyle:{width:"80%"},attrs:{prop:"category",label:"实例类型",required:""}},[t("el-select",{staticStyle:{width:"120px","margin-right":"5px"},attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"实例类型"},model:{value:e.assetData.category,callback:function(t){e.$set(e.assetData,"category",e._n(t))},expression:"assetData.category"}},e._l(e.cloundCategorys,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1):e._e(),1===e.assetData.affiliation?t("el-form-item",{staticStyle:{width:"80%"},attrs:{prop:"category",label:"实例类型",required:""}},[t("el-select",{staticStyle:{width:"120px","margin-right":"5px"},attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"实例类型"},model:{value:e.assetData.category,callback:function(t){e.$set(e.assetData,"category",e._n(t))},expression:"assetData.category"}},e._l(e.PhyCategorys,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1):e._e(),t("el-form-item",{staticStyle:{width:"80%"},attrs:{prop:"instance_name",label:"实例名称",required:""}},[t("el-input",{staticStyle:{width:"300px","margin-right":"5px"},model:{value:e.assetData.instance_name,callback:function(t){e.$set(e.assetData,"instance_name",t)},expression:"assetData.instance_name"}})],1),t("el-form-item",{staticStyle:{width:"80%"},attrs:{prop:"ip",label:"实例IP",required:""}},[t("el-input",{staticStyle:{width:"300px","margin-right":"5px"},model:{value:e.assetData.ip,callback:function(t){e.$set(e.assetData,"ip",t)},expression:"assetData.ip"}})],1),t("el-form-item",{staticStyle:{width:"80%"},attrs:{prop:"instance_id",label:"实例标识",required:""}},[t("el-input",{staticStyle:{width:"300px","margin-right":"5px"},attrs:{placeholder:"实例唯一标识:云资产的实例id或物理资产的sn号"},model:{value:e.assetData.instance_id,callback:function(t){e.$set(e.assetData,"instance_id",t)},expression:"assetData.instance_id"}})],1),t("el-form-item",{staticStyle:{width:"80%"},attrs:{prop:"port",label:"端口号",required:""}},[t("el-input",{staticStyle:{width:"300px","margin-right":"5px"},attrs:{placeholder:"ssh 端口号"},model:{value:e.assetData.port,callback:function(t){e.$set(e.assetData,"port",e._n(t))},expression:"assetData.port"}})],1),t("el-form-item",{staticStyle:{width:"80%"},attrs:{prop:"nodes",label:"产品线"}},[t("el-cascader",{staticStyle:{width:"300px"},attrs:{options:e.nodes,props:{label:"title",value:"id",multiple:!0},clearable:""},model:{value:e.assetData.nodeIds,callback:function(t){e.$set(e.assetData,"nodeIds",t)},expression:"assetData.nodeIds"}})],1),t("el-form-item",{staticStyle:{width:"80%"},attrs:{prop:"mark",label:"备注"}},[t("el-input",{staticStyle:{width:"300px","margin-right":"5px"},model:{value:e.assetData.mark,callback:function(t){e.$set(e.assetData,"mark",t)},expression:"assetData.mark"}})],1)],1),t("div",[t("el-button",{attrs:{type:"success",round:""},on:{click:function(t){return e.create("assetData")}}},[e._v("创建")]),t("el-button",{on:{click:function(t){e.assetVisable=!1}}},[e._v("取 消")])],1)],1),t("div",[t("el-button",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:e.createAssetHandler}},[e._v("创建")]),e._v("\n\n          资产归属:\n          "),t("el-select",{staticStyle:{width:"120px","margin-right":"5px"},attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"资产归属"},model:{value:e.searchParams.affiliation,callback:function(t){e.$set(e.searchParams,"affiliation",e._n(t))},expression:"searchParams.affiliation"}},e._l(e.affiliations,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),e._v("\n          资产类型:\n    "),t("el-select",{staticStyle:{width:"120px","margin-right":"5px"},attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"资产类型"},model:{value:e.searchParams.category,callback:function(t){e.$set(e.searchParams,"category",e._n(t))},expression:"searchParams.category"}},e._l(e.categorys,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),t("el-input",{staticStyle:{width:"240px"},attrs:{placeholder:"实例名/实例IP/实例标识"},model:{value:e.searchParams.value,callback:function(t){e.$set(e.searchParams,"value",t)},expression:"searchParams.value"}}),t("el-button",{staticStyle:{"margin-right":"20px","margin-left":"10px"},attrs:{icon:"el-icon-search",circle:""},on:{click:e.searchAsset}})],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-top":"10px"},attrs:{data:e.assets,"header-cell-style":{background:"#eef1f6",color:"#606266"}}},[t("el-table-column",{attrs:{prop:"instance_name",label:"实例名称",align:"center"}}),t("el-table-column",{attrs:{prop:"ip",label:"实例IP",align:"center"}}),t("el-table-column",{attrs:{prop:"instance_id",label:"实例标识",align:"center"}}),t("el-table-column",{attrs:{prop:"affiliation",label:"实例归属",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return["1"==a.row.affiliation?t("span",[e._v("物理机房")]):e._e(),"2"==a.row.affiliation?t("span",[e._v("阿里云")]):e._e(),"3"==a.row.affiliation?t("span",[e._v("腾讯云")]):e._e(),"4"==a.row.affiliation?t("span",[e._v("华为云")]):e._e(),"5"==a.row.affiliation?t("span",[e._v("Aws云")]):e._e(),"6"==a.row.affiliation?t("span",[e._v("百度云")]):e._e(),"7"==a.row.affiliation?t("span",[e._v("京东云")]):e._e()]}}])}),t("el-table-column",{attrs:{prop:"category",label:"实例类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return["1"==a.row.category?t("span",[e._v("物理机")]):e._e(),"2"==a.row.category?t("span",[e._v("云主机")]):e._e(),"3"==a.row.category?t("span",[e._v("VM")]):e._e(),"4"==a.row.category?t("span",[e._v("Mysql")]):e._e(),"5"==a.row.category?t("span",[e._v("Redis")]):e._e(),"6"==a.row.category?t("span",[e._v("MongoDB")]):e._e(),"7"==a.row.category?t("span",[e._v("Elastic")]):e._e(),"8"==a.row.category?t("span",[e._v("Kafka")]):e._e(),"9"==a.row.category?t("span",[e._v("MQ")]):e._e(),"10"==a.row.category?t("span",[e._v("网关")]):e._e()]}}])}),t("el-table-column",{attrs:{align:"center",prop:"users",label:"产品线绑定数",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.nodeIds.length)+"\n        ")]}}])}),t("el-table-column",{attrs:{prop:"created_at",label:"创建时间",sortable:"",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(e._f("formatTime")(t.row.created_at))+"\n          ")]}}])}),t("el-table-column",{attrs:{prop:"operate",label:"操作",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{staticClass:"green",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(t){return e.editAssetHandler(a.$index,a.row)}}},[e._v("编辑")]),t("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(t){return e.delAssetHandler(a.$index,a.row)}}},[e._v("删除")])]}}])})],1),t("div",{staticClass:"pagination"},[t("el-pagination",{attrs:{"current-page":e.cur_page,"page-size":e.page_size,layout:"total, prev, pager, next",total:e.assetCounts},on:{"current-change":e.assetPageHandler,"update:currentPage":function(t){e.cur_page=t},"update:current-page":function(t){e.cur_page=t}}})],1)],1)],1)],1)}),o=[],c=a("7736"),u=a("9907");a("7b04");function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f={data:function(){return{loading:!1,assets:[],nodes:[],searchParams:{category:void 0,affiliation:void 0,value:""},assetData:{instance_name:"",nodeIds:[]},defaultNodes:[[1,10,27]],affiliations:[{id:1,name:"物理机房"},{id:2,name:"阿里云"},{id:3,name:"腾讯云"},{id:4,name:"华为云"},{id:5,name:"Aws云"},{id:6,name:"百度云"},{id:7,name:"京东云"}],languages:u["a"].languages,PhyCategorys:[{id:1,name:"物理机"}],cloundCategorys:[{id:2,name:"云主机"},{id:3,name:"VMware"},{id:4,name:"Mysql"},{id:5,name:"Redis"},{id:6,name:"MongoDB"},{id:7,name:"Elastic"},{id:8,name:"Kafka"},{id:9,name:"MQ"},{id:10,name:"网关"}],categorys:[{id:1,name:"物理机"},{id:2,name:"云主机"},{id:3,name:"VMware"},{id:4,name:"Mysql"},{id:5,name:"Redis"},{id:6,name:"MongoDB"},{id:7,name:"Elastic"},{id:8,name:"Kafka"},{id:9,name:"MQ"},{id:10,name:"网关"}],assetVisable:!1,cur_page:1,page_size:20,page_total:1,idx:-1,name:"",assetCounts:0,rules:{instance_name:[{required:!0,message:"请输入实例名称",trigger:"blur"}],ip:[{required:!0,message:"请输入ip,无ip用实例名代替",trigger:"blur"}],instance_id:[{required:!0,message:"请输入实例id",trigger:"blur"}],port:[{required:!0,message:"请输入实例端口号",trigger:"blur"}],affiliation:[{required:!0,message:"请选择实例归属",trigger:"blur"}],category:[{required:!0,message:"请选择实例类型",trigger:"blur"}]}}},created:function(){this.getData()},watch:{},computed:{data:function(){return{}}},methods:d(d({},Object(c["b"])(["createAsset","deleteAsset","getAssets","getTreeMenus"])),{},{getData:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getAssets({page:this.cur_page,pageSize:20});case 2:return this.assets=this.$store.state.assets.data,this.assetCounts=this.$store.state.assets.total,e.next=6,this.getTreeMenus();case 6:t=JSON.parse(this.$store.state.treeMenus.data),this.nodes=t;case 8:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),searchAsset:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getAssets({affiliation:this.searchParams.affiliation,category:this.searchParams.category,value:this.searchParams.value,page:this.cur_page,pageSize:this.page_size});case 2:this.assets=this.$store.state.assets.data,this.assetCounts=this.$store.state.assets.total;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setHostNode:function(e){if(0!=e.length){console.log("val:",e);var t=e[e.length-1],a=t[t.length-1];this.assetData.nodeIds.push(a)}},addBuildTool:function(){this.toolConfig.build_tool.push({category:void 0,name:"",path:"",key:Date.now()})},removeBuildTool:function(e){var t=this.toolConfig.build_tool.indexOf(e);-1!==t&&this.toolConfig.build_tool.splice(t,1)},createAssetHandler:function(){this.assetVisable=!0},createHandler:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.createAsset(this.assetData);case 2:return e.next=4,this.getAssets({page:this.cur_page,pageSize:20});case 4:this.assets=this.$store.state.assets.data,this.assetCounts=this.$store.state.assets.total;case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),create:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$refs[t].validate((function(e){if(!e)return!1;a.assetVisable=!1,a.createHandler()}));case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),editAssetHandler:function(e,t){this.assetData.id=t.id,this.assetData.instance_name=t.instance_name,this.assetData.instance_id=t.instance_id,this.assetData.ip=t.ip,this.assetData.port=t.port,this.assetData.category=t.category,this.assetData.affiliation=t.affiliation,this.assetData.nodeIds=t.nodeIds,this.assetVisable=!0},delAssetHandler:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.deleteAsset({id:a.id});case 2:this.getData();case 3:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}(),assetPageHandler:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.cur_page=t,e.next=3,this.getAssets({affiliation:this.searchParams.affiliation,category:this.searchParams.category,value:this.searchParams.value,page:this.cur_page,pageSize:this.page_size});case 3:this.assets=this.$store.state.assets.data,this.assetCounts=this.$store.state.assets.total;case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),global_search:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.globalSearch(t);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()})},g=f,h=(a("31646"),a("0b56")),m=Object(h["a"])(g,l,o,!1,null,"5e5fe76a",null),b=m.exports;function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _={data:function(){return{activeName:"first"}},created:function(){this.getData()},components:{assets:b},computed:{data:function(){return{}}},methods:y(y({},Object(c["b"])(["getAccounts"])),{},{getData:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),handleClick:function(e,t){console.log(e,t)}})},w=_,x=(a("3a98"),Object(h["a"])(w,s,r,!1,null,"4077dc60",null));t["default"]=x.exports}}]);