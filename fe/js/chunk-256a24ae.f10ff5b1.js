(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-256a24ae"],{"2d4b":function(e,t,r){e.exports=r.p+"img/ztth.557951b0.png"},"355c":function(e,t,r){"use strict";r.r(t);r("7f7f");var n=function(){var e=this,t=e._self._c;return t("el-container",{staticStyle:{height:"500px",border:"1px solid #eee"}},[t("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[t("treeForTask",{ref:"tree",attrs:{nodeData:e.cNode,nodeId:e.cNodeId},on:{setTasksCount:e.setTaskCountHandler,setNodeCategory:e.setNodeCategoryHandler,setNodeTasks:e.setTaskHandle,breadcrumb:e.getBreadCrumbs}})],1),t("el-container",[t("el-header",{staticStyle:{"text-align":"right","font-size":"10px"}},[t("el-row",{attrs:{gutter:24}},[t("el-col",{staticStyle:{"text-align":"right","font-size":"12px","margin-top":"10px"},attrs:{span:2}},[e._v("当前节点:")]),t("el-col",{staticStyle:{height:"60px"},attrs:{span:11}},[t("el-breadcrumb",{staticStyle:{"margin-top":"33px","font-size":"10px"},attrs:{separator:"/"}},e._l(e.breadcrumbs,(function(r){return t("el-breadcrumb-item",{key:r.title},[e._v(e._s(r.title))])})),1)],1),t("el-col",{attrs:{span:10}},[t("el-button",{attrs:{type:"primary"},on:{click:e.createTask}},[e._v("创建部署任务")])],1)],1)],1),t("el-divider"),t("el-table",{attrs:{data:e.tasks}},[t("el-table-column",{attrs:{prop:"name",label:"任务名称",align:"center"}}),t("el-table-column",{attrs:{label:"部署环境",align:"center"},scopedSlots:e._u([{key:"default",fn:function(r){return["test"===r.row.env?t("span",[e._v("测试环境")]):e._e(),"dev"===r.row.env?t("span",[e._v("开发环境")]):e._e(),"prod"===r.row.env?t("span",[e._v("生产环境")]):e._e()]}}])}),t("el-table-column",{attrs:{label:"部署类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(r){return[1===r.row.category?t("span",[e._v("容器部署")]):e._e(),2===r.row.category?t("span",[e._v("非容器部署")]):e._e()]}}])}),t("el-table-column",{attrs:{prop:"branch",label:"部署分支",align:"center"}}),t("el-table-column",{attrs:{prop:"model",label:"模块",align:"center"}}),t("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-button",{staticClass:"cadetblue",attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(t){return e.taskEdit(r.$index,r.row)}}},[e._v("编辑")]),t("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(t){return e.taskDelete(r.$index,r.row)}}},[e._v("删除")]),t("el-button",{staticClass:"green",attrs:{type:"text",icon:"el-icon-warning-outline"},on:{click:function(t){return e.complieLog(r.$index,r.row)}}},[e._v("日志")]),t("el-button",{staticClass:"green",attrs:{type:"text",icon:"el-icon-tickets"},on:{click:function(t){return e.yaml(r.$index,r.row)}}},[e._v("yaml")])]}}])}),t("el-table-column",{attrs:{fixed:"right",label:"发起",align:"center"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("el-button",{staticClass:"green",attrs:{type:"text",icon:"el-icon-thumb",loading:e.loadingcibut},on:{click:function(t){return e.ciHandler(r.$index,r.row)}}},[e._v(e._s(e.loadingci))]),t("el-button",{staticClass:"green",attrs:{type:"text",icon:"el-icon-video-play"},on:{click:function(t){return e.cdHandler(r.$index,r.row)}}},[e._v("cd")])]}}])})],1),t("div",{staticClass:"pagination"},[t("el-pagination",{attrs:{"current-page":e.cur_page,"page-size":e.page_size,layout:"total, prev, pager, next",total:e.taskCount},on:{"current-change":e.taskPageHandler,"update:currentPage":function(t){e.cur_page=t},"update:current-page":function(t){e.cur_page=t}}})],1)],1),t("el-dialog",{attrs:{title:"CI 构建",visible:e.ciVisable,width:"43%"},on:{"update:visible":function(t){e.ciVisable=t},close:function(t){e.ciVisable=!1}}},[t("el-divider"),t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"ciConfig",attrs:{model:e.ciConfig,"label-width":"120px","label-position":"left"}},[t("el-form-item",{staticStyle:{width:"80%"},attrs:{prop:"name",label:"任务名称"}},[t("el-input",{staticStyle:{width:"300px","margin-right":"5px"},model:{value:e.ciConfig.name,callback:function(t){e.$set(e.ciConfig,"name",t)},expression:"ciConfig.name"}})],1),t("el-form-item",{staticStyle:{width:"80%"},attrs:{prop:"git",label:"仓库地址"}},[t("el-input",{staticStyle:{width:"300px","margin-right":"5px"},attrs:{disabled:""},model:{value:e.ciConfig.git,callback:function(t){e.$set(e.ciConfig,"git",t)},expression:"ciConfig.git"}})],1),t("el-form-item",{staticStyle:{width:"80%"},attrs:{prop:"branch",label:"构建分支"}},[t("el-input",{staticStyle:{width:"300px","margin-right":"5px"},attrs:{disabled:""},model:{value:e.ciConfig.branch,callback:function(t){e.$set(e.ciConfig,"branch",t)},expression:"ciConfig.branch"}})],1),t("el-form-item",{attrs:{label:"CI版本",prop:"cfg"}},[t("el-radio-group",{model:{value:e.ciConfig.category,callback:function(t){e.$set(e.ciConfig,"category",t)},expression:"ciConfig.category"}},[t("el-radio",{attrs:{label:1},on:{change:e.getCIVersions}},[e._v("Commits")]),t("el-radio",{attrs:{label:2},on:{change:e.getCIVersions}},[e._v("Tags")])],1)],1),1===e.ciConfig.category?t("el-form-item",[t("el-select",{staticStyle:{width:"90%"},attrs:{filterable:"",placeholder:"请选择commit id"},model:{value:e.ciConfig.version,callback:function(t){e.$set(e.ciConfig,"version",t)},expression:"ciConfig.version"}},e._l(e.commitLogsOrTags,(function(e){return t("el-option",{key:e.date,attrs:{label:e.date+" "+e.author+" "+e.commit_id.substring(0,5)+" "+e.message,value:e.commit_id+"_"+e.message}})})),1)],1):t("el-form-item",[t("el-select",{staticStyle:{width:"90%"},attrs:{filterable:"",placeholder:"请选择Tag"},model:{value:e.ciConfig.version,callback:function(t){e.$set(e.ciConfig,"version",t)},expression:"ciConfig.version"}},e._l(e.commitLogsOrTags,(function(e){return t("el-option",{key:e.name,attrs:{label:e.version,value:e.commit_id+"_"+e.version}})})),1)],1)],1),t("div",[t("el-button",{attrs:{type:"success",round:""},on:{click:e.ci}},[e._v("构建")]),t("el-button",{on:{click:function(t){e.ciVisable=!1}}},[e._v("取 消")])],1)],1),t("el-dialog",{attrs:{title:"CD 部署",visible:e.cdVisable,width:"43%"},on:{"update:visible":function(t){e.cdVisable=t},close:function(t){e.cdVisable=!1}}},[t("el-divider"),t("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"cdConfig",attrs:{model:e.cdConfig,"label-width":"120px","label-position":"left"}},[t("el-form-item",{staticStyle:{width:"90%"},attrs:{prop:"name",label:"任务名称"}},[t("el-input",{staticStyle:{width:"300px","margin-right":"5px"},model:{value:e.cdConfig.name,callback:function(t){e.$set(e.cdConfig,"name",t)},expression:"cdConfig.name"}})],1),t("el-form-item",{attrs:{label:"环境",prop:"env",requeired:""}},[t("el-select",{attrs:{"value-key":"value",disabled:"",placeholder:"请选择部署环境"},model:{value:e.cdConfig.env,callback:function(t){e.$set(e.cdConfig,"env",t)},expression:"cdConfig.env"}},e._l(e.envs,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),t("el-form-item",{staticStyle:{width:"90%"},attrs:{prop:"image",label:"镜像版本"}},[t("el-select",{staticStyle:{width:"90%"},attrs:{filterable:"",placeholder:"请选择部署的镜像版本"},model:{value:e.cdConfig.image,callback:function(t){e.$set(e.cdConfig,"image",t)},expression:"cdConfig.image"}},e._l(e.images,(function(e){return t("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1)],1)],1),t("div",[t("el-button",{attrs:{type:"success",round:""},on:{click:e.cd}},[e._v("部署")]),t("el-button",{on:{click:function(t){e.cdVisable=!1}}},[e._v("取 消")])],1)],1),t("el-dialog",{attrs:{title:"编译日志",visible:e.ciLogVisible,"append-to-body":!0,id:"logScrollbar"},on:{"update:visible":function(t){e.ciLogVisible=t}}},[t("div",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.logs))]),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"success",round:""},on:{click:e.clearTimer}},[e._v("关闭")])],1)]),t("el-drawer",{attrs:{title:"YAML",visible:e.drawer,direction:"rtl"},on:{"update:visible":function(t){e.drawer=t}}},[t("el-input",{attrs:{type:"textarea",rows:40,placeholder:""},model:{value:e.taskYaml,callback:function(t){e.taskYaml=t},expression:"taskYaml"}})],1)],1)},i=[],a=(r("8e6e"),r("ac6a"),r("456d"),r("a481"),r("96cf"),r("3b8d")),s=r("bd86"),o=r("2f62"),c=function(){var e=this,t=e._self._c;return t("el-scrollbar",{staticStyle:{width:"100%",height:"100%"},attrs:{"view-style":"height:800px;"}},[t("el-tree",{ref:"SlotMenuList",attrs:{data:e.treeData,props:e.defaultProps,"node-key":"id","filter-node-method":e.filterNode,"default-expanded-keys":[e.currentNodeId],"default-checked-keys":[e.currentNodeId],"current-node-key":e.currentNodeId,"highlight-current":"",accordion:""},on:{"node-click":e.fetchNodeJobs}})],1)},l=[];r("5df3"),r("1c4c"),r("3b2b");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g={props:{nodeId:"",nodeData:void 0},data:function(){return{treeData:void 0,menuVisible:!1,currentNodeId:1,filterText:"",loading:!1,defaultProps:{children:"children",label:"title"},clusterEnvs:[],currentNodes:[],node_id:0,breadcrumb:void 0,currentNode:void 0,currentValue:void 0,users:void 0,cur_page:1,page_size:20,nodeObj:{id:0,name:"",cname:"",detail_id:0,pid:0,category:"",devers:[],opsers:[],namespaces:[]},locations:[{id:1,value:"alibj",label:"阿里云ecs"},{id:2,value:"bjxsq",label:"北京西三旗"}],formRules:{name:[{required:!0,message:"产品线名称不能为空",trigger:"blur"}],cname:[{required:!0,message:"别名不能为空",trigger:"blur"}],opser:[{required:!0,message:"请输入产品线运维负责人",trigger:"blur"}],dever:[{required:!0,message:"请输入产品线开发负责人",trigger:"blur"}]}}},created:function(){this.initData()},watch:{filterText:function(e){this.$refs.SlotMenuList.filter(e)},"$route.query":{handler:function(){this.$route.query&&(void 0!=this.$route.query.node_id?(this.node_id=parseInt(this.$route.query.node_id),this.getNodeTaskHandler(this.node_id),this.initTree()):this.initData())},immediate:!0}},methods:d(d({},Object(o["b"])(["getTreeMenus","createTreeNode","deleteTreeNode","getNodeTasks","getClusters","getAccounts"])),{},{initTree:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.currentNodeId=this.nodeId,this.loading=!0,e.prev=2,e.next=5,this.getTreeMenus();case 5:t=JSON.parse(this.$store.state.treeMenus.data),this.treeData=t,this.$emit("breadcrumb",JSON.parse(this.nodeData));case 8:return e.prev=8,this.loading=!1,e.finish(8);case 11:case"end":return e.stop()}}),e,this,[[2,,8,11]])})));function t(){return e.apply(this,arguments)}return t}(),initData:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getTreeMenus();case 2:return t=JSON.parse(this.$store.state.treeMenus.data),this.treeData=t,e.next=6,this.getClusters({page:this.cur_page,pageSize:20});case 6:return this.clusterEnvs=this.$store.state.clusterData.data,e.next=9,this.getAccounts({page:this.cur_page,pageSize:1e3});case 9:this.users=this.$store.state.userData.data,this.currentNodes.length>0&&this.$emit("breadcrumb",this.currentNodes);case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),checkName:function(e){var t=new RegExp("[\\u4E00-\\u9FFF]+","g");if(t.test(e))return this.$message.error("节点名称不允许包含中文!"),!1},getNodeTaskHandler:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getNodeTasks({nodeId:t,page:this.cur_page,pageSize:this.page_size});case 2:this.$emit("setNodeTasks",this.$store.state.taskData.data),this.$emit("setTasksCount",this.$store.state.taskData.total);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),filterNode:function(){},findIndexArray:function(e,t,r){for(var n=Array.from(r),i=0,a=e.length;i<a;i++){if(n.push(e[i]),e[i].data.id===t)return n;var s=e[i].children;if(s&&s.length){var o=this.findIndexArray(s,t,n);if(o)return o}n.pop()}},fetchNodeJobs:function(e){this.node_id=e.data.id;var t=this.findIndexArray(this.treeData,e.data.id,e.data);this.currentNodes=t,this.$emit("breadcrumb",t),this.$emit("setNodeCategory",e.data.category),this.getNodeTaskHandler(this.node_id)}})},h=g,p=(r("bbf6"),r("2877")),f=Object(p["a"])(h,c,l,!1,null,"519d019e",null),m=f.exports,b=r("cff1");r("a18c");function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={components:{treeForTask:m,zHeader:b["a"]},data:function(){return{treeData:void 0,loading:!1,tasks:[],logs:void 0,category:"",taskYaml:void 0,taskCount:0,ciLogVisible:!1,cur_page:1,drawer:!1,cNodeId:0,cNode:void 0,page_size:10,ciVisable:!1,cdVisable:!1,images:[],breadcrumbs:[],commitLogsOrTags:[],loadingci:"ci",loadingcibut:!1,cdConfig:{task_id:0,image:"",name:"",env:void 0},ciConfig:{name:"",task_id:0,category:1,branch:"",git:"",version:""},timer:"",defaultProps:{children:"children",label:"came"},envs:[{id:1,name:"SAAS-dev"},{id:2,name:"SAAS-test"},{id:3,name:"SAAS-prod"}]}},updated:function(){var e=document.getElementById("logScrollbar");e.scrollTop=e.scrollHeight},watch:{"$route.query":{handler:function(){this.$route.query&&0!=this.$route.query.node_id&&(this.cNodeId=this.$route.query.node_id,this.cNode=this.$route.query.node_data)},immediate:!0}},created:function(){},beforeDestroy:function(){clearInterval(this.timer)},computed:{pData:function(){return{tasks:[]}}},methods:w(w({},Object(o["b"])(["getNodeTasks","getCommitLogsOrTags","build","getBuildLogs","getYaml","getImages","deploy","deleteTask"])),{},{createTask:function(){return 0===this.$refs.tree.node_id?(this.$message.error("请选择产品线后创建任务"),this.createJobVisible=!1,!1):1===this.$refs.tree.node_id?(this.$message.error("不允许在根节点创建部署任务,请到实际产品线下创建部署任务!"),this.createJobVisible=!1,!1):"service"!=this.category?(this.$message.error("请在节点为[service]类型节点下创建部署任务!"),this.createJobVisible=!1,!1):void this.$router.push({path:"/task?oper=create&node_id="+this.$refs.tree.node_id+"&node_data="+this.breadcrumbs})},ciHandler:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loadingcibut=!0,this.loadingci="数据加载中...",this.ciConfig.name=r.name,this.ciConfig.git=r.git,this.ciConfig.branch=r.branch,this.ciConfig.task_id=r.id,this.ciConfig.category=1,this.ciConfig.replicas=r.replicas,this.ciConfig.version="",e.next=11,this.getCommitLogsOrTags(this.ciConfig);case 11:this.commitLogsOrTags=this.$store.state.commitLogsOrTags.data,this.ciVisable=!0,this.loadingcibut=!1,this.loadingci="ci";case 15:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}(),yaml:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getYaml({id:r.id});case 2:this.taskYaml=this.$store.state.taskYaml.data,this.drawer=!0;case 4:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}(),clearTimer:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,clearInterval(this.timer);case 2:this.ciLogVisible=!1;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getCiLogs:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getBuildLogs(this.ciConfig);case 2:if("{}"!=JSON.stringify(this.$store.state.cilogs.data)){e.next=4;break}return e.abrupt("return");case 4:this.logs=this.$store.state.cilogs.data.replace(/\\n/g,"\n"),t=document.getElementById("logScrollbar"),t.scrollTop=1e3;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))},ci:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.build(this.ciConfig);case 2:this.ciVisable=!1,this.ciLogVisible=!0,this.sleep(3e3),this.timer=setInterval(this.getCiLogs,2e3);case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cd:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.deploy(this.cdConfig);case 2:this.cdVisable=!1;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),cdHandler:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getImages({id:r.node_id});case 2:this.images=this.$store.state.images.data,this.cdConfig.name=r.name,this.cdConfig.task_id=r.id,this.cdConfig.env=r.env,this.cdVisable=!0;case 7:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}(),getBreadCrumbs:function(e){this.breadcrumbs=e},setTaskHandle:function(e){this.tasks=e},setTaskCountHandler:function(e){this.taskCount=e},setNodeCategoryHandler:function(e){this.category=e},taskPageHandler:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getNodeTasks({nodeId:nodeId,page:this.cur_page,pageSize:this.page_size});case 2:this.tasks=this.$store.state.taskData.data,this.taskCount=this.$store.state.taskData.total;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),commandHandler:function(e){"createTask"===e&&this.createTask(),"complieTools"===e&&this.$router.push({path:"/tool"}),"deployCluster"===e&&this.$router.push({path:"/cluster"})},taskEdit:function(e,t){if(0==this.$refs.tree.node_id)return this.$message.error("请到对应产品线下操作!"),!1;this.$store.state.taskForm=t,this.$router.push({path:"/task?oper=edit&node_data="+JSON.stringify(this.breadcrumbs)})},taskCopy:function(e,t){},taskDelete:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.deleteTask({id:r.id});case 2:return e.next=4,this.getNodeTasks({nodeId:this.$refs.tree.node_id,page:this.cur_page,pageSize:this.page_size});case 4:this.tasks=this.$store.state.taskData.data,this.taskCount=this.$store.state.taskData.total;case 6:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}(),complieLog:function(e,t){this.ciConfig.name=t.name,this.ciConfig.git=t.git,this.ciConfig.branch=t.branch,this.ciConfig.task_id=t.id,this.getCiLogs(),this.ciLogVisible=!0},getCIVersions:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ciConfig.version="",e.next=3,this.getCommitLogsOrTags(this.ciConfig);case 3:this.commitLogsOrTags=this.$store.state.commitLogsOrTags.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getTags:function(){}})},k=y,C=(r("c067"),Object(p["a"])(k,n,i,!1,null,null,null));t["default"]=C.exports},"3e68":function(e,t,r){},"4f62":function(e,t,r){},"7ed4":function(e,t,r){"use strict";var n=r("2b0e"),i=new n["default"];t["a"]=i},bbf6:function(e,t,r){"use strict";r("3e68")},c067:function(e,t,r){"use strict";r("f1b9")},cff1:function(e,t,r){"use strict";var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("div",{staticClass:"collapse-btn",on:{click:e.collapseChage}},[t("i",{staticClass:"el-icon-menu"})]),t("div",{staticClass:"logo"},[e._v("天鸿云效")]),t("div",{staticClass:"header-right"},[t("div",{staticClass:"header-user-con"},[t("div",{on:{click:e.handleMail}},[t("el-badge",{staticClass:"item",attrs:{value:e.mailCount}},[t("i",{staticClass:"el-icon-message"})])],1),t("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:e.handleCommand}},[t("span",{staticClass:"el-dropdown-link"},[e._v("\n                    "+e._s(e.username)+" "),t("i",{staticClass:"el-icon-caret-bottom"})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[""!=e.username?t("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[e._v("退出登录")]):e._e()],1)],1),e._m(0)],1)]),t("el-drawer",{attrs:{title:"消息",visible:e.drawer,direction:e.direction,size:"38%"},on:{"update:visible":function(t){e.drawer=t}}},[0!=e.mailData.length?t("el-table",{attrs:{data:e.mailData}},[t("el-table-column",{attrs:{property:"title",label:"消息标题",width:"150"}}),t("el-table-column",{attrs:{property:"sender",label:"发送人",width:"80"}}),t("el-table-column",{attrs:{label:"消息内容"},scopedSlots:e._u([{key:"default",fn:function(r){return[!0===r.row.update?t("a",{attrs:{href:r.row.content,target:"_blank"}},[e._v("查看版本更新")]):t("span",[e._v(e._s(r.row.content))])]}}],null,!1,3985084751)}),t("el-table-column",{attrs:{property:"date",label:"时间",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e._f("formatTime")(t.row.date))+"\n      ")]}}],null,!1,421593158)})],1):0===e.mailData.length?t("div",[e._v("暂无新消息")]):e._e()],1)],1)},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"user-avator"},[t("img",{attrs:{src:r("2d4b")}})])}],a=(r("8e6e"),r("ac6a"),r("456d"),r("96cf"),r("3b8d")),s=r("bd86"),o=r("7ed4"),c=r("2f62");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={data:function(){return{timer:"",mailCount:void 0,direction:"rtl",drawer:!1,collapse:!1,fullscreen:!1,name:"guest",message:2,makeworkVisible:!1,mailData:[]}},computed:{username:function(){var e=this.$store.state.username;return e}},created:function(){this.getData(),this.fetchLoingUsername()},methods:u(u({},Object(c["b"])(["getLoginUser","logout","searchOwnMessage","updateIsRead"])),{},{login:function(){this.$router.push({name:"login"})},searchMessage:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.searchOwnMessage();case 2:this.mailData=this.$store.state.messages.data,t=this.$store.state.messages.count,this.mailCount=0!=t?t:"";case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getData:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.searchMessage(),this.timer=setInterval(this.searchMessage,6e4);case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),clearTimer:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,clearInterval(this.timer);case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),beforeDestroy:function(){clearInterval(this.timer)},fetchLoingUsername:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getLoginUser();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleCommand:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("loginout"!=t){e.next=5;break}return e.next=3,this.logout();case 3:localStorage.removeItem(this.username),this.$router.push("/login");case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),collapseChage:function(){this.collapse=!this.collapse,o["a"].$emit("collapse",this.collapse)},work:function(){console.log("aaaaa")},handleMail:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.updateIsRead();case 2:this.drawer=!0,this.searchMessage();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleFullScreen:function(){var e=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen&&e.msRequestFullscreen(),this.fullscreen=!this.fullscreen}}),mounted:function(){document.body.clientWidth<1500&&this.collapseChage()}},g=d,h=(r("f4c7"),r("2877")),p=Object(h["a"])(g,n,i,!1,null,"7b203a65",null);t["a"]=p.exports},f1b9:function(e,t,r){},f4c7:function(e,t,r){"use strict";r("4f62")}}]);