(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32fb9922"],{2680:function(e,t,i){"use strict";i("da1c")},"2d4b":function(e,t,i){e.exports=i.p+"img/ztth.557951b0.png"},"355c":function(e,t,i){"use strict";i.r(t);i("a450");var r=function(){var e=this,t=e._self._c;return t("el-container",{staticStyle:{height:"500px",border:"1px solid #eee"}},[t("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[t("treeForMars",{ref:"tree",attrs:{nodeData:e.cNode,nodeId:e.cNodeId},on:{setTasksCount:e.setTaskCountHandler,setNodeCategory:e.setNodeCategoryHandler,setNodeTasks:e.setTaskHandle,breadcrumb:e.getBreadCrumbs}})],1),t("el-container",[t("el-header",{staticStyle:{"text-align":"right","font-size":"10px"}},[t("el-row",{attrs:{gutter:24}},[t("el-col",{staticStyle:{"text-align":"right","font-size":"12px","margin-top":"10px"},attrs:{span:2}},[e._v("当前节点:")]),t("el-col",{staticStyle:{height:"60px"},attrs:{span:11}},[t("el-breadcrumb",{staticStyle:{"margin-top":"33px","font-size":"10px"},attrs:{separator:"/"}},e._l(e.breadcrumbs,(function(i){return t("el-breadcrumb-item",{key:i.title},[e._v(e._s(i.title))])})),1)],1),t("el-col",{attrs:{span:10}},[t("el-button",{attrs:{type:"primary"},on:{click:e.createTask}},[e._v("创建部署任务")])],1)],1)],1),t("el-divider"),t("el-table",{attrs:{data:e.tasks}},[t("el-table-column",{attrs:{prop:"name",label:"任务名称",align:"center"}}),t("el-table-column",{attrs:{label:"部署环境",align:"center"},scopedSlots:e._u([{key:"default",fn:function(i){return["test"===i.row.env?t("span",[e._v("测试环境")]):e._e(),"dev"===i.row.env?t("span",[e._v("开发环境")]):e._e(),"prod"===i.row.env?t("span",[e._v("生产环境")]):e._e()]}}])}),t("el-table-column",{attrs:{label:"部署类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(i){return[1===i.row.category?t("span",[e._v("容器部署")]):e._e(),2===i.row.category?t("span",[e._v("非容器部署")]):e._e()]}}])}),t("el-table-column",{attrs:{prop:"branch",label:"部署分支",align:"center"}}),t("el-table-column",{attrs:{prop:"model",label:"模块",align:"center"}}),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-button",{staticClass:"cadetblue",attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(t){return e.taskEdit(i.$index,i.row)}}},[e._v("编辑")]),t("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(t){return e.taskDelete(i.$index,i.row)}}},[e._v("删除")]),t("el-button",{staticClass:"green",attrs:{type:"text",icon:"el-icon-warning-outline"},on:{click:function(t){return e.complieLog(i.$index,i.row)}}},[e._v("日志")]),t("el-button",{staticClass:"green",attrs:{type:"text",icon:"el-icon-tickets"},on:{click:function(t){return e.yaml(i.$index,i.row)}}},[e._v("yaml")])]}}])}),t("el-table-column",{attrs:{fixed:"right",label:"发起",align:"center"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-button",{staticClass:"green",attrs:{type:"text",icon:"el-icon-thumb",loading:e.loadingcibut},on:{click:function(t){return e.ciHandler(i.$index,i.row)}}},[e._v(e._s(e.loadingci))]),t("el-button",{staticClass:"green",attrs:{type:"text",icon:"el-icon-video-play"},on:{click:function(t){return e.cdHandler(i.$index,i.row)}}},[e._v("cd")])]}}])})],1),t("div",{staticClass:"pagination"},[t("el-pagination",{attrs:{"current-page":e.cur_page,"page-size":e.page_size,layout:"total, prev, pager, next",total:e.taskCount},on:{"current-change":e.taskPageHandler,"update:currentPage":function(t){e.cur_page=t},"update:current-page":function(t){e.cur_page=t}}})],1)],1),t("el-dialog",{attrs:{title:"CI 构建",visible:e.ciVisable,width:"43%"},on:{"update:visible":function(t){e.ciVisable=t},close:function(t){e.ciVisable=!1}}},[t("el-divider"),t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"ciConfig",attrs:{model:e.ciConfig,"label-width":"120px","label-position":"left"}},[t("el-form-item",{staticStyle:{width:"80%"},attrs:{prop:"name",label:"任务名称"}},[t("el-input",{staticStyle:{width:"300px","margin-right":"5px"},model:{value:e.ciConfig.name,callback:function(t){e.$set(e.ciConfig,"name",t)},expression:"ciConfig.name"}})],1),t("el-form-item",{staticStyle:{width:"80%"},attrs:{prop:"git",label:"仓库地址"}},[t("el-input",{staticStyle:{width:"300px","margin-right":"5px"},attrs:{disabled:""},model:{value:e.ciConfig.git,callback:function(t){e.$set(e.ciConfig,"git",t)},expression:"ciConfig.git"}})],1),t("el-form-item",{staticStyle:{width:"80%"},attrs:{prop:"branch",label:"构建分支"}},[t("el-input",{staticStyle:{width:"300px","margin-right":"5px"},attrs:{disabled:""},model:{value:e.ciConfig.branch,callback:function(t){e.$set(e.ciConfig,"branch",t)},expression:"ciConfig.branch"}})],1),t("el-form-item",{attrs:{label:"CI版本",prop:"cfg"}},[t("el-radio-group",{model:{value:e.ciConfig.category,callback:function(t){e.$set(e.ciConfig,"category",t)},expression:"ciConfig.category"}},[t("el-radio",{attrs:{label:1},on:{change:e.getCIVersions}},[e._v("Commits")]),t("el-radio",{attrs:{label:2},on:{change:e.getCIVersions}},[e._v("Tags")])],1)],1),1===e.ciConfig.category?t("el-form-item",[t("el-select",{staticStyle:{width:"90%"},attrs:{filterable:"",placeholder:"请选择commit id"},model:{value:e.ciConfig.version,callback:function(t){e.$set(e.ciConfig,"version",t)},expression:"ciConfig.version"}},e._l(e.commitLogsOrTags,(function(e){return t("el-option",{key:e.date,attrs:{label:e.date+" "+e.author+" "+e.commit_id.substring(0,5)+" "+e.message,value:e.commit_id+"_"+e.message}})})),1)],1):t("el-form-item",[t("el-select",{staticStyle:{width:"90%"},attrs:{filterable:"",placeholder:"请选择Tag"},model:{value:e.ciConfig.version,callback:function(t){e.$set(e.ciConfig,"version",t)},expression:"ciConfig.version"}},e._l(e.commitLogsOrTags,(function(e){return t("el-option",{key:e.name,attrs:{label:e.version,value:e.commit_id+"_"+e.version}})})),1)],1)],1),t("div",[t("el-button",{attrs:{type:"success",round:""},on:{click:e.ci}},[e._v("构建")]),t("el-button",{on:{click:function(t){e.ciVisable=!1}}},[e._v("取 消")])],1)],1),t("el-dialog",{attrs:{title:"CD 部署",visible:e.cdVisable,width:"43%"},on:{"update:visible":function(t){e.cdVisable=t},close:function(t){e.cdVisable=!1}}},[t("el-divider"),t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"cdConfig",attrs:{model:e.cdConfig,"label-width":"120px","label-position":"left"}},[t("el-form-item",{staticStyle:{width:"90%"},attrs:{prop:"name",label:"任务名称"}},[t("el-input",{staticStyle:{width:"300px","margin-right":"5px"},model:{value:e.cdConfig.name,callback:function(t){e.$set(e.cdConfig,"name",t)},expression:"cdConfig.name"}})],1),t("el-form-item",{attrs:{label:"环境",prop:"env",requeired:""}},[t("el-select",{attrs:{"value-key":"value",disabled:"",placeholder:"请选择部署环境"},model:{value:e.cdConfig.env,callback:function(t){e.$set(e.cdConfig,"env",t)},expression:"cdConfig.env"}},e._l(e.envs,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),t("el-form-item",{staticStyle:{width:"90%"},attrs:{prop:"image",label:"镜像版本"}},[t("el-select",{staticStyle:{width:"90%"},attrs:{filterable:"",placeholder:"请选择部署的镜像版本"},model:{value:e.cdConfig.image,callback:function(t){e.$set(e.cdConfig,"image",t)},expression:"cdConfig.image"}},e._l(e.images,(function(e){return t("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1)],1)],1),t("div",[t("el-button",{attrs:{type:"success",round:""},on:{click:e.cd}},[e._v("部署")]),t("el-button",{on:{click:function(t){e.cdVisable=!1}}},[e._v("取 消")])],1)],1),t("el-dialog",{attrs:{title:"编译日志",visible:e.ciLogVisible,"append-to-body":!0,id:"logScrollbar"},on:{"update:visible":function(t){e.ciLogVisible=t}}},[t("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.logs))]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"success",round:""},on:{click:e.clearTimer}},[e._v("关闭")])],1)]),t("el-drawer",{attrs:{title:"YAML",visible:e.drawer,direction:"rtl"},on:{"update:visible":function(t){e.drawer=t}}},[t("el-input",{attrs:{type:"textarea",rows:40,placeholder:""},model:{value:e.taskYaml,callback:function(t){e.taskYaml=t},expression:"taskYaml"}})],1)],1)},n=[],a=(i("ac67"),i("1bc7"),i("32ea"),i("8dee"),i("e186"),i("bff1")),s=i("a483"),o=i("7736"),c=function(){var e=this,t=e._self._c;return t("el-scrollbar",{staticStyle:{width:"100%",height:"100%"},attrs:{"view-style":"height:800px;"}},[t("el-tree",{ref:"SlotMenuList",attrs:{data:e.treeData,props:e.defaultProps,"node-key":"id","filter-node-method":e.filterNode,"default-expanded-keys":[e.currentNodeId],"default-checked-keys":[e.currentNodeId],"current-node-key":e.currentNodeId,"highlight-current":"",accordion:""},on:{"node-click":e.fetchNodeJobs,"node-contextmenu":e.rihgtClick}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.menuVisible,expression:"menuVisible"}]},[t("el-menu",{staticClass:"el-menu-vertical",attrs:{id:"rightClickMenu","active-text-color":"#fff","text-color":"#fff"},on:{select:e.handleRightSelect}},[t("el-menu-item",{staticClass:"menuItem",attrs:{index:"1"}},[t("span",{attrs:{slot:"title"},slot:"title"},[e._v("添加节点")])]),t("el-menu-item",{staticClass:"menuItem",attrs:{index:"2"}},[t("span",{attrs:{slot:"title"},slot:"title"},[e._v("编辑查看")])]),t("el-menu-item",{staticClass:"menuItem",attrs:{index:"3"}},[t("span",{attrs:{slot:"title"},slot:"title"},[e._v("删除节点")])])],1)],1),t("el-dialog",{attrs:{title:"新增节点",visible:e.addNodeVisible,width:"28%","close-on-click-modal":!1},on:{"update:visible":function(t){e.addNodeVisible=t}}},[t("el-divider"),t("el-form",{ref:"nodeObj",staticStyle:{width:"80%"},attrs:{model:e.nodeObj,rules:e.formRules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"节点名称",required:""}},[t("el-input",{attrs:{placeholder:"英文小写字母,不超过20个字符!"},on:{change:e.checkName},model:{value:e.nodeObj.name,callback:function(t){e.$set(e.nodeObj,"name","string"===typeof t?t.trim():t)},expression:"nodeObj.name"}})],1),t("el-form-item",{attrs:{label:"节点别名",prop:"cname",required:""}},[t("el-input",{attrs:{placeholder:"节点中文名,用于树菜单名称显示"},model:{value:e.nodeObj.cname,callback:function(t){e.$set(e.nodeObj,"cname","string"===typeof t?t.trim():t)},expression:"nodeObj.cname"}})],1),t("el-form-item",{attrs:{label:"节点类型",prop:"category",required:""}},[t("el-input",{attrs:{disabled:""},model:{value:e.nodeObj.category,callback:function(t){e.$set(e.nodeObj,"category","string"===typeof t?t.trim():t)},expression:"nodeObj.category"}})],1),t("el-form-item",{attrs:{label:"运维负责人",prop:"opsers"}},[t("el-select",{attrs:{"value-key":"username",multiple:"",filterable:"",clearable:"",placeholder:"请选节点负责人"},model:{value:e.nodeObj.opsers,callback:function(t){e.$set(e.nodeObj,"opsers",t)},expression:"nodeObj.opsers"}},e._l(e.users,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.username}})})),1)],1),t("el-form-item",{attrs:{label:"开发负责人",prop:"devers"}},[t("el-select",{attrs:{"value-key":"username",multiple:"",filterable:"",clearable:"",placeholder:"请选节点负责人"},model:{value:e.nodeObj.devers,callback:function(t){e.$set(e.nodeObj,"devers",t)},expression:"nodeObj.devers"}},e._l(e.users,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.username}})})),1)],1),"pdl"===this.nodeObj.category?t("el-form-item",{attrs:{label:"命名空间"}},[0===this.clusterEnvs.length?t("span",[e._v("未获取到集群信息,如果同步创建kubernetes命名空间,请到集群管理创建集群!")]):t("el-checkbox-group",{model:{value:e.nodeObj.namespaces,callback:function(t){e.$set(e.nodeObj,"namespaces",t)},expression:"nodeObj.namespaces"}},e._l(this.clusterEnvs,(function(i){return t("el-checkbox",{key:i.id,attrs:{label:i.name}},[e._v(e._s(i.name))])})),1),t("el-tooltip",{staticClass:"item",staticStyle:{"margin-left":"2px"},attrs:{effect:"light",content:"是否同步创建对应集群环境的命名空间,创建的对应kubernetes命名空间名称为: 节点名称-环境 例如:deploy-dev",placement:"right"}},[t("i",{staticClass:"el-icon-question"})])],1):e._e()],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.addNodeVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.createNode("nodeObj")}}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"编辑节点",visible:e.editNodeVisible,width:"28%","close-on-click-modal":!1},on:{"update:visible":function(t){e.editNodeVisible=t}}},[t("el-divider"),t("el-form",{ref:"nodeObj",staticStyle:{width:"80%"},attrs:{model:e.nodeObj,rules:e.formRules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"节点名称"}},[t("el-input",{attrs:{placeholder:"英文小写字母,不超过20个字符!"},model:{value:e.nodeObj.name,callback:function(t){e.$set(e.nodeObj,"name","string"===typeof t?t.trim():t)},expression:"nodeObj.name"}})],1),t("el-form-item",{attrs:{label:"节点别名",prop:"cname"}},[t("el-input",{attrs:{placeholder:"节点中文名,用于树菜单名称显示"},model:{value:e.nodeObj.cname,callback:function(t){e.$set(e.nodeObj,"cname","string"===typeof t?t.trim():t)},expression:"nodeObj.cname"}})],1),t("el-form-item",{attrs:{label:"节点类型",prop:"category"}},[t("el-input",{attrs:{disabled:"",placeholder:"节点中文名,用于树菜单名称显示"},model:{value:e.nodeObj.category,callback:function(t){e.$set(e.nodeObj,"category","string"===typeof t?t.trim():t)},expression:"nodeObj.category"}})],1),t("el-form-item",{attrs:{label:"运维负责人",prop:"opsers"}},[t("el-select",{attrs:{"value-key":"username",multiple:"",filterable:"",clearable:"",placeholder:"请选节点负责人"},model:{value:e.nodeObj.opsers,callback:function(t){e.$set(e.nodeObj,"opsers",t)},expression:"nodeObj.opsers"}},e._l(e.users,(function(e){return t("el-option",{key:e.id,attrs:{label:e.username,value:e.username}})})),1)],1),t("el-form-item",{attrs:{label:"开发负责人",prop:"devers"}},[t("el-select",{attrs:{"value-key":"username",multiple:"",filterable:"",clearable:"",placeholder:"请选节点负责人"},model:{value:e.nodeObj.devers,callback:function(t){e.$set(e.nodeObj,"devers",t)},expression:"nodeObj.devers"}},e._l(e.users,(function(e){return t("el-option",{key:e.id,attrs:{label:e.username,value:e.username}})})),1)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.editNodeVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.createNode("edit")}}},[e._v("确 定")])],1)],1),t("el-dialog",{attrs:{title:"提示",visible:e.delNodeVisible,width:"300px",center:""},on:{"update:visible":function(t){e.delNodeVisible=t}}},[t("div",{staticClass:"del-dialog-cnt"},[e._v("删除不可恢复，是否确定删除？")]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.delNodeVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.delNode}},[e._v("确 定")])],1)])],1)},l=[];i("0c84"),i("2843"),i("3269");function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(Object(i),!0).forEach((function(t){Object(s["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var p={props:{nodeId:"",nodeData:void 0},data:function(){return{treeData:void 0,menuVisible:!1,addNodeVisible:!1,delNodeVisible:!1,editNodeVisible:!1,currentNodeId:1,filterText:"",loading:!1,defaultProps:{children:"children",label:"title"},clusterEnvs:[],currentNodes:[],node_id:0,breadcrumb:void 0,currentNode:void 0,currentValue:void 0,users:void 0,cur_page:1,page_size:20,nodeObj:{id:0,name:"",cname:"",detail_id:0,pid:0,category:"",devers:[],opsers:[],namespaces:[]},locations:[{id:1,value:"alibj",label:"阿里云ecs"},{id:2,value:"bjxsq",label:"北京西三旗"}],formRules:{name:[{required:!0,message:"产品线名称不能为空",trigger:"blur"}],cname:[{required:!0,message:"别名不能为空",trigger:"blur"}],opser:[{required:!0,message:"请输入产品线运维负责人",trigger:"blur"}],dever:[{required:!0,message:"请输入产品线开发负责人",trigger:"blur"}]}}},created:function(){this.initData()},watch:{filterText:function(e){this.$refs.SlotMenuList.filter(e)},"$route.query":{handler:function(){this.$route.query&&(void 0!=this.$route.query.node_id?(this.node_id=parseInt(this.$route.query.node_id),this.getNodeTaskHandler(this.node_id),this.initTree()):this.initData())},immediate:!0}},methods:d(d({},Object(o["b"])(["getTreeMenus","createTreeNode","deleteTreeNode","getNodeTasks","getClusters","getAccounts"])),{},{initTree:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.currentNodeId=this.nodeId,this.loading=!0,e.prev=2,e.next=5,this.getTreeMenus();case 5:t=JSON.parse(this.$store.state.treeMenus.data),this.treeData=t,this.$emit("breadcrumb",JSON.parse(this.nodeData));case 8:return e.prev=8,this.loading=!1,e.finish(8);case 11:case"end":return e.stop()}}),e,this,[[2,,8,11]])})));function t(){return e.apply(this,arguments)}return t}(),initData:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getTreeMenus();case 2:return t=JSON.parse(this.$store.state.treeMenus.data),this.treeData=t,e.next=6,this.getClusters({page:this.cur_page,pageSize:20});case 6:return this.clusterEnvs=this.$store.state.clusterData.data,e.next=9,this.getAccounts({page:this.cur_page,pageSize:1e3});case 9:this.users=this.$store.state.userData.data,this.currentNodes.length>0&&this.$emit("breadcrumb",this.currentNodes);case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),checkName:function(e){var t=new RegExp("[\\u4E00-\\u9FFF]+","g");if(t.test(e))return this.$message.error("节点名称不允许包含中文!"),!1},getNodeTaskHandler:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getNodeTasks({nodeId:t,page:this.cur_page,pageSize:this.page_size});case 2:this.$emit("setNodeTasks",this.$store.state.taskData.data),this.$emit("setTasksCount",this.$store.state.taskData.total);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),createNodeAction:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.createTreeNode(this.nodeObj);case 2:this.addNodeVisible=!1,this.editNodeVisible=!1,this.initTree();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),createNode:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){var i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("namespaces:",this.namespaces),this.$refs[t].validate((function(e){e&&("edit"==t?i.$confirm("修改产品线名称会影响部署，请确认镜像仓库项目已存在, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){i.createNodeAction()})).catch((function(){})):i.createNodeAction())})),this.addNodeVisible=!1,this.editNodeVisible=!1;case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),delNodeAction:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.deleteTreeNode({id:this.currentNode.id});case 2:this.initTree();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),delNode:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.$confirm("关联docker镜像仓库、日志索引, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.delNodeAction(),children.splice(index,1),t.$message({type:"success",message:"删除成功!"})})).catch((function(){})),this.delNodeVisible=!1;case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),filterNode:function(){},findIndexArray:function(e,t,i){for(var r=Array.from(i),n=0,a=e.length;n<a;n++){if(r.push(e[n]),e[n].data.id===t)return r;var s=e[n].children;if(s&&s.length){var o=this.findIndexArray(s,t,r);if(o)return o}r.pop()}},fetchNodeJobs:function(e){this.node_id=e.data.id;var t=this.findIndexArray(this.treeData,e.data.id,e.data);this.currentNodes=t,this.$emit("breadcrumb",t),this.$emit("setNodeCategory",e.data.category),this.getNodeTaskHandler(this.node_id)},rihgtClick:function(e,t,i,r){var n=this;this.nodeObj.pid=t.data.id,this.menuVisible=!0,this.currentNode=t,this.currentValue=i,document.addEventListener("click",(function(e){n.menuVisible=!1}));var a=document.querySelector("#rightClickMenu");a.style.position="fixed",a.style.left=e.clientX+30+"px",a.style.top=e.clientY+"px",a.style.width="130px"},handleRightSelect:function(e){if(1==e){if("root"===this.currentNode.data.category&&(this.nodeObj.category="pdl"),"pdl"===this.currentNode.data.category&&(this.nodeObj.category="service"),"service"===this.currentNode.data.category)return this.$message.error("不允许创建子节点!"),!1;this.nodeObj.id=0,this.nodeObj.name="",this.nodeObj.cname="",this.nodeObj.opsers=[],this.nodeObj.devers=[],this.addNodeVisible=!0}else 2==e?(this.nodeObj.id=this.currentNode.data.id,this.nodeObj.name=this.currentNode.data.name,this.nodeObj.cname=this.currentNode.data.cname,this.nodeObj.category=this.currentNode.data.category,this.nodeObj.pid=this.currentNode.data.pid,this.nodeObj.detail_id=this.currentNode.data.detail_id,this.nodeObj.opsers=this.currentNode.data.opsers,this.nodeObj.devers=this.currentNode.data.devers,this.editNodeVisible=!0):3==e?this.delNodeVisible=!0:4==e&&console.log("4")}})},h=p,m=(i("2680"),i("0b56")),f=Object(m["a"])(h,c,l,!1,null,"522bd74e",null),g=f.exports,b=i("cff1");i("9035"),i("aec5");i("a18c");function v(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function y(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?v(Object(i),!0).forEach((function(t){Object(s["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var k={components:{treeForMars:g,zHeader:b["a"]},data:function(){return{treeData:void 0,loading:!1,tasks:[],logs:void 0,category:"",taskYaml:void 0,taskCount:0,ciLogVisible:!1,cur_page:1,drawer:!1,cNodeId:0,cNode:void 0,page_size:10,ciVisable:!1,cdVisable:!1,images:[],breadcrumbs:[],commitLogsOrTags:[],loadingci:"ci",loadingcibut:!1,cdConfig:{task_id:0,image:"",name:"",env:void 0},ciConfig:{name:"",task_id:0,category:1,branch:"",git:"",version:""},timer:"",defaultProps:{children:"children",label:"came"},envs:[{id:1,name:"SAAS-dev"},{id:2,name:"SAAS-test"},{id:3,name:"SAAS-prod"}]}},updated:function(){var e=document.getElementById("logScrollbar");e.scrollTop=e.scrollHeight},watch:{"$route.query":{handler:function(){this.$route.query&&0!=this.$route.query.node_id&&(this.cNodeId=this.$route.query.node_id,this.cNode=this.$route.query.node_data)},immediate:!0}},created:function(){},beforeDestroy:function(){clearInterval(this.timer)},computed:{pData:function(){return{tasks:[]}}},methods:y(y({},Object(o["b"])(["getNodeTasks","getCommitLogsOrTags","build","getBuildLogs","getYaml","getImages","deploy","deleteTask"])),{},{createTask:function(){return 0===this.$refs.tree.node_id?(this.$message.error("请选择产品线后创建任务"),this.createJobVisible=!1,!1):1===this.$refs.tree.node_id?(this.$message.error("不允许在根节点创建部署任务,请到实际产品线下创建部署任务!"),this.createJobVisible=!1,!1):"service"!=this.category?(this.$message.error("请在节点为[service]类型节点下创建部署任务!"),this.createJobVisible=!1,!1):void this.$router.push({path:"/task?oper=create&node_id="+this.$refs.tree.node_id+"&node_data="+this.breadcrumbs})},ciHandler:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loadingcibut=!0,this.loadingci="数据加载中...",this.ciConfig.name=i.name,this.ciConfig.git=i.git,this.ciConfig.branch=i.branch,this.ciConfig.task_id=i.id,this.ciConfig.category=1,this.ciConfig.replicas=i.replicas,this.ciConfig.version="",e.next=11,this.getCommitLogsOrTags(this.ciConfig);case 11:this.commitLogsOrTags=this.$store.state.commitLogsOrTags.data,this.ciVisable=!0,this.loadingcibut=!1,this.loadingci="ci";case 15:case"end":return e.stop()}}),e,this)})));function t(t,i){return e.apply(this,arguments)}return t}(),yaml:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getYaml({id:i.id});case 2:this.taskYaml=this.$store.state.taskYaml.data,this.drawer=!0;case 4:case"end":return e.stop()}}),e,this)})));function t(t,i){return e.apply(this,arguments)}return t}(),clearTimer:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,clearInterval(this.timer);case 2:this.ciLogVisible=!1;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getCiLogs:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getBuildLogs(this.ciConfig);case 2:if("{}"!=JSON.stringify(this.$store.state.cilogs.data)){e.next=4;break}return e.abrupt("return");case 4:this.logs=this.$store.state.cilogs.data.replace(/\\n/g,"\n"),t=document.getElementById("logScrollbar"),t.scrollTop=1e3;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))},ci:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.build(this.ciConfig);case 2:this.ciVisable=!1,this.ciLogVisible=!0,this.sleep(3e3),this.timer=setInterval(this.getCiLogs,2e3);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cd:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.deploy(this.cdConfig);case 2:this.cdVisable=!1;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cdHandler:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getImages({id:i.node_id});case 2:this.images=this.$store.state.images.data,this.cdConfig.name=i.name,this.cdConfig.task_id=i.id,this.cdConfig.env=i.env,this.cdVisable=!0;case 7:case"end":return e.stop()}}),e,this)})));function t(t,i){return e.apply(this,arguments)}return t}(),getBreadCrumbs:function(e){this.breadcrumbs=e},setTaskHandle:function(e){this.tasks=e},setTaskCountHandler:function(e){this.taskCount=e},setNodeCategoryHandler:function(e){this.category=e},taskPageHandler:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getNodeTasks({nodeId:nodeId,page:this.cur_page,pageSize:this.page_size});case 2:this.tasks=this.$store.state.taskData.data,this.taskCount=this.$store.state.taskData.total;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),commandHandler:function(e){"createTask"===e&&this.createTask(),"complieTools"===e&&this.$router.push({path:"/tool"}),"deployCluster"===e&&this.$router.push({path:"/cluster"})},taskEdit:function(e,t){if(0==this.$refs.tree.node_id)return this.$message.error("请到对应产品线下操作!"),!1;this.$store.state.taskForm=t,this.$router.push({path:"/task?oper=edit&node_data="+JSON.stringify(this.breadcrumbs)})},taskCopy:function(e,t){},taskDelete:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.deleteTask({id:i.id});case 2:return e.next=4,this.getNodeTasks({nodeId:this.$refs.tree.node_id,page:this.cur_page,pageSize:this.page_size});case 4:this.tasks=this.$store.state.taskData.data,this.taskCount=this.$store.state.taskData.total;case 6:case"end":return e.stop()}}),e,this)})));function t(t,i){return e.apply(this,arguments)}return t}(),complieLog:function(e,t){this.ciConfig.name=t.name,this.ciConfig.git=t.git,this.ciConfig.branch=t.branch,this.ciConfig.task_id=t.id,this.getCiLogs(),this.ciLogVisible=!0},getCIVersions:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ciConfig.version="",e.next=3,this.getCommitLogsOrTags(this.ciConfig);case 3:this.commitLogsOrTags=this.$store.state.commitLogsOrTags.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getTags:function(){}})},w=k,O=(i("cfea"),Object(m["a"])(w,r,n,!1,null,null,null));t["default"]=O.exports},"7ed4":function(e,t,i){"use strict";var r=i("bb42"),n=new r["default"];t["a"]=n},"9ffb":function(e,t,i){},cfea:function(e,t,i){"use strict";i("f202")},cff1:function(e,t,i){"use strict";var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("div",{staticClass:"collapse-btn",on:{click:e.collapseChage}},[t("i",{staticClass:"el-icon-menu"})]),t("div",{staticClass:"logo"},[e._v("天鸿云效")]),t("div",{staticClass:"header-right"},[t("div",{staticClass:"header-user-con"},[t("div",{staticClass:"btn-fullscreen",on:{click:e.handleFullScreen}},[t("el-tooltip",{attrs:{effect:"dark",content:e.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[t("i",{staticClass:"el-icon-rank"})])],1),t("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:e.handleCommand}},[t("span",{staticClass:"el-dropdown-link"},[e._v("\n                    "+e._s(e.username)+" "),t("i",{staticClass:"el-icon-caret-bottom"})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[""!=e.username?t("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[e._v("退出登录")]):e._e()],1)],1),e._m(0)],1)]),t("el-dialog",{attrs:{title:"编辑部署任务",visible:e.makeworkVisible,width:"45%"},on:{"update:visible":function(t){e.makeworkVisible=t}}},[t("a",[e._v("aaaaaa")])])],1)},n=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"user-avator"},[t("img",{attrs:{src:i("2d4b")}})])}],a=(i("ac67"),i("1bc7"),i("32ea"),i("e186"),i("bff1")),s=i("a483"),o=i("7ed4"),c=i("7736");function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function u(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){Object(s["a"])(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var d={data:function(){return{collapse:!1,fullscreen:!1,name:"guest",message:2,makeworkVisible:!1}},computed:{username:function(){var e=this.$store.state.username;return e}},created:function(){this.fetchLoingUsername()},methods:u(u({},Object(c["b"])(["getLoginUser","logout"])),{},{login:function(){this.$router.push({name:"login"})},fetchLoingUsername:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getLoginUser();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleCommand:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("command:",t),"loginout"!=t){e.next=7;break}return console.log("logout--\x3e"),e.next=5,this.logout();case 5:localStorage.removeItem(this.username),this.$router.push("/login");case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),collapseChage:function(){this.collapse=!this.collapse,o["a"].$emit("collapse",this.collapse)},work:function(){console.log("aaaaa")},handleFullScreen:function(){var e=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen(),this.fullscreen=!this.fullscreen}}),mounted:function(){document.body.clientWidth<1500&&this.collapseChage()}},p=d,h=(i("dab1"),i("0b56")),m=Object(h["a"])(p,r,n,!1,null,"707d0a8e",null);t["a"]=m.exports},da1c:function(e,t,i){},dab1:function(e,t,i){"use strict";i("9ffb")},f202:function(e,t,i){}}]);