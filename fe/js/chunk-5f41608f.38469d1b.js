(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f41608f"],{"2a37":function(t,e,a){},7060:function(t,e,a){"use strict";a("2a37")},"8a2c":function(t,e,a){"use strict";a.r(e);a("7f7f");var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:24}},[e("el-dialog",{attrs:{title:"告警策略配置",visible:t.strategyVisable,width:"60%"},on:{"update:visible":function(e){t.strategyVisable=e},close:function(e){t.strategyVisable=!1}}},[e("el-divider"),e("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"strategyConfig",attrs:{model:t.strategyConfig,rules:t.rules,"label-width":"120px","label-position":"left"}},[e("el-form-item",{staticStyle:{width:"80%"},attrs:{prop:"name",label:"策略名称"}},[e("el-input",{staticStyle:{width:"300px","margin-right":"5px"},attrs:{placeholder:"用于告警语音提示,建议录入具体中文告警说明"},model:{value:t.strategyConfig.name,callback:function(e){t.$set(t.strategyConfig,"name",e)},expression:"strategyConfig.name"}}),e("el-button",{attrs:{type:"success"},on:{click:t.ttsTestHandler}},[t._v("语音试听")])],1),e("el-form-item",{attrs:{label:"告警类型"}},[e("el-select",{staticStyle:{width:"150px"},attrs:{filterable:"",clearable:"",placeholder:"请选择告警类型"},on:{change:t.changeCounterAndZs},model:{value:t.strategyConfig.category,callback:function(e){t.$set(t.strategyConfig,"category",e)},expression:"strategyConfig.category"}},t._l(t.categorys,(function(t){return e("el-option",{key:t.id,attrs:{label:t.label,value:t.id}})})),1)],1),3===t.strategyConfig.category?e("el-form-item",{attrs:{label:"产品线"}},[e("el-cascader",{staticStyle:{width:"300px"},attrs:{options:t.nodes,props:{label:"title",value:"id",multiple:!1},clearable:""},on:{change:t.changPdlSetLogId},model:{value:t.currentNode,callback:function(e){t.currentNode=e},expression:"currentNode"}})],1):t._e(),1==t.showLogSource?e("el-form-item",{attrs:{prop:"log_source_ids",label:"检索源",required:""}},[e("el-select",{attrs:{"value-key":"id",filterable:"",multiple:"",placeholder:"日志收集集群"},model:{value:t.strategyConfig.log_source_ids,callback:function(e){t.$set(t.strategyConfig,"log_source_ids",e)},expression:"strategyConfig.log_source_ids"}},t._l(t.logClusters,(function(t){return e("el-option",{key:t.id,attrs:{value:t.id,label:t.name}})})),1)],1):t._e(),3===t.strategyConfig.category?e("div",[t._l(t.strategyConfig.searchParams,(function(a,i){return e("el-form-item",{key:i,attrs:{label:"检索参数"}},[e("el-select",{attrs:{"value-key":"value",filterable:"",clearable:"","allow-create":"",placeholder:"请选择key"},model:{value:a.sParam,callback:function(e){t.$set(a,"sParam","string"===typeof e?e.trim():e)},expression:"p.sParam"}},t._l(t.searchKeys,(function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.name}})})),1),e("el-select",{staticStyle:{width:"65px"},attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"请选择key"},model:{value:a.symbol,callback:function(e){t.$set(a,"symbol",e)},expression:"p.symbol"}},t._l(t.symbols,(function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.name}})})),1),e("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"输入参数值"},model:{value:a.sValue,callback:function(e){t.$set(a,"sValue","string"===typeof e?e.trim():e)},expression:"p.sValue"}}),e("el-button",{on:{click:function(e){return e.preventDefault(),t.removeRewriteHeader(a)}}},[t._v("删除")])],1)})),e("el-button",{staticClass:"el-icon-circle-plus",attrs:{type:"success"},nativeOn:{click:function(e){return t.addRewriteHeader()}}},[t._v("新增参数")])],2):t._e(),1===t.strategyConfig.category||2===t.strategyConfig.category||4===t.strategyConfig.category?e("el-form-item",{attrs:{label:"告警维度"}},[e("el-radio",{attrs:{disabled:"",label:1},model:{value:t.strategyConfig.dimension,callback:function(e){t.$set(t.strategyConfig,"dimension",e)},expression:"strategyConfig.dimension"}},[t._v("所有")]),e("el-radio",{attrs:{label:2},model:{value:t.strategyConfig.dimension,callback:function(e){t.$set(t.strategyConfig,"dimension",e)},expression:"strategyConfig.dimension"}},[t._v("主机")]),e("el-radio",{attrs:{label:3},model:{value:t.strategyConfig.dimension,callback:function(e){t.$set(t.strategyConfig,"dimension",e)},expression:"strategyConfig.dimension"}},[t._v("业务线")]),e("el-radio",{attrs:{label:4},model:{value:t.strategyConfig.dimension,callback:function(e){t.$set(t.strategyConfig,"dimension",e)},expression:"strategyConfig.dimension"}},[t._v("告警标题")]),e("el-radio",{attrs:{label:5},model:{value:t.strategyConfig.dimension,callback:function(e){t.$set(t.strategyConfig,"dimension",e)},expression:"strategyConfig.dimension"}},[t._v("告警等级")]),e("el-tooltip",{staticClass:"item",staticStyle:{"margin-left":"10px"},attrs:{effect:"light",content:"如果告警信息满足多个策略条件,则先创建的规则优先匹配",placement:"right"}},[e("i",{staticClass:"el-icon-question"})])],1):t._e(),1===t.strategyConfig.category||2===t.strategyConfig.category||4===t.strategyConfig.category?e("div",[2===t.strategyConfig.dimension?e("el-form-item",{staticStyle:{width:"600px"},attrs:{label:"主机"}},[e("el-col",[e("el-select",{staticStyle:{width:"80px"},attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"条件"},model:{value:t.strategyConfig.dimension_condition,callback:function(e){t.$set(t.strategyConfig,"dimension_condition","string"===typeof e?e.trim():e)},expression:"strategyConfig.dimension_condition"}},t._l(t.conditions,(function(t){return e("el-option",{key:t.id,attrs:{label:t.label,value:t.value}})})),1),e("el-input",{staticStyle:{width:"300px"},attrs:{clearable:"",placeholder:"请输入主机ip或容器名称,多个用逗号分隔"},model:{value:t.strategyConfig.dimension_value,callback:function(e){t.$set(t.strategyConfig,"dimension_value","string"===typeof e?e.trim():e)},expression:"strategyConfig.dimension_value"}}),e("el-tooltip",{staticClass:"item",staticStyle:{"margin-left":"10px"},attrs:{effect:"light",content:"条件后如果是等于是完全匹配主机名，若果是in可以自定义主机包含的字段",placement:"right"}},[e("i",{staticClass:"el-icon-question"})])],1)],1):t._e(),3===t.strategyConfig.dimension?e("el-form-item",{attrs:{label:"产品线"}},[e("el-cascader",{staticStyle:{width:"300px"},attrs:{options:t.nodes,props:{label:"title",value:"id",multiple:!1},clearable:""},on:{change:t.clearCascader},model:{value:t.currentNode,callback:function(e){t.currentNode=e},expression:"currentNode"}}),e("el-tooltip",{staticClass:"item",staticStyle:{"margin-left":"10px"},attrs:{effect:"light",content:"条件后如果是等于是完全匹配产品线，如果是in可以自定义产品线包含的字段",placement:"right"}},[e("i",{staticClass:"el-icon-question"})])],1):t._e()],1):t._e(),3===t.strategyConfig.category?e("div",[e("el-form-item",{staticStyle:{width:"600px"},attrs:{label:"告警级别"}},[e("el-select",{staticStyle:{width:"80px"},attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"请选择告警级别"},model:{value:t.strategyConfig.level,callback:function(e){t.$set(t.strategyConfig,"level","string"===typeof e?e.trim():e)},expression:"strategyConfig.level"}},t._l(t.levels,(function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.value}})})),1)],1)],1):t._e(),1===t.strategyConfig.category||2===t.strategyConfig.category||3===t.strategyConfig.category?e("div",[5===t.strategyConfig.dimension?e("el-form-item",{staticStyle:{width:"600px"},attrs:{label:"告警级别"}},[e("el-select",{staticStyle:{width:"80px"},attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"请选择告警级别"},model:{value:t.strategyConfig.level,callback:function(e){t.$set(t.strategyConfig,"level","string"===typeof e?e.trim():e)},expression:"strategyConfig.level"}},t._l(t.levels,(function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.value}})})),1)],1):t._e()],1):t._e(),4===t.strategyConfig.dimension?e("el-form-item",{staticStyle:{width:"600px"},attrs:{label:"告警标题"}},[e("div",[e("el-select",{staticStyle:{width:"70px"},attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"条件"},model:{value:t.strategyConfig.dimension_condition,callback:function(e){t.$set(t.strategyConfig,"dimension_condition","string"===typeof e?e.trim():e)},expression:"strategyConfig.dimension_condition"}},t._l(t.conditions,(function(t){return e("el-option",{key:t.id,attrs:{label:t.label,value:t.value}})})),1),e("el-input",{staticStyle:{width:"300px"},attrs:{clearable:"",placeholder:"请输告警信息中的告警标题"},model:{value:t.strategyConfig.dimension_value,callback:function(e){t.$set(t.strategyConfig,"dimension_value","string"===typeof e?e.trim():e)},expression:"strategyConfig.dimension_value"}}),e("el-tooltip",{staticClass:"item",staticStyle:{"margin-left":"2px"},attrs:{effect:"light",content:"条件后如果是等于是完全匹配告警主题，若果是in可以自定义主题包含的字段",placement:"right"}},[e("i",{staticClass:"el-icon-question"})])],1)]):t._e(),e("el-form-item",{attrs:{label:"重复周期(分钟)"}},[e("div",[e("el-input-number",{attrs:{"controls-position":"right",min:1,max:10},model:{value:t.strategyConfig.timer,callback:function(e){t.$set(t.strategyConfig,"timer",t._n(e))},expression:"strategyConfig.timer"}}),e("el-tooltip",{staticClass:"item",staticStyle:{"margin-left":"10px"},attrs:{effect:"light",content:"重复告警间隔时间",placement:"right"}},[e("i",{staticClass:"el-icon-question"})]),1===t.strategyConfig.category?e("el-checkbox",{staticStyle:{"margin-left":"10px"},model:{value:t.strategyConfig.iscounter,callback:function(e){t.$set(t.strategyConfig,"iscounter",e)},expression:"strategyConfig.iscounter"}},[t._v("自动恢复")]):t._e(),3===t.strategyConfig.category?e("el-checkbox",{staticStyle:{"margin-left":"10px"},model:{value:t.strategyConfig.iscounter,callback:function(e){t.$set(t.strategyConfig,"iscounter",e)},expression:"strategyConfig.iscounter"}},[t._v("自动恢复")]):t._e(),4===t.strategyConfig.category?e("el-checkbox",{staticStyle:{"margin-left":"10px"},model:{value:t.strategyConfig.iscounter,callback:function(e){t.$set(t.strategyConfig,"iscounter",e)},expression:"strategyConfig.iscounter"}},[t._v("自动恢复")]):t._e(),1===t.strategyConfig.category?e("el-tooltip",{staticClass:"item",staticStyle:{"margin-left":"5px"},attrs:{effect:"light",content:"每个周期对告警设置为恢复状态,适用于没有恢复的告警，例如日志告警.",placement:"right"}},[e("i",{staticClass:"el-icon-question"})]):t._e(),2===t.strategyConfig.category?e("el-checkbox",{staticStyle:{"margin-left":"10px"},model:{value:t.strategyConfig.isExp,callback:function(e){t.$set(t.strategyConfig,"isExp",e)},expression:"strategyConfig.isExp"}},[t._v("周期指数")]):t._e(),1===t.strategyConfig.category?e("el-checkbox",{staticStyle:{"margin-left":"10px"},model:{value:t.strategyConfig.isExp,callback:function(e){t.$set(t.strategyConfig,"isExp",e)},expression:"strategyConfig.isExp"}},[t._v("周期指数")]):t._e(),1===t.strategyConfig.category?e("el-tooltip",{staticClass:"item",staticStyle:{"margin-left":"5px"},attrs:{effect:"light",content:"周期指数递增的含义是当该告警第1次、第2次、第4次、第8次...第2的 N 次方次被触发时，向您发送告警信息。意义是告警信息发送时长间隔将越来越长，重新计数开启后，周期指数不生效",placement:"right"}},[e("i",{staticClass:"el-icon-question"})]):t._e(),2===t.strategyConfig.category?e("el-tooltip",{staticClass:"item",staticStyle:{"margin-left":"5px"},attrs:{effect:"light",content:"周期指数递增的含义是当该告警第1次、第2次、第4次、第8次...第2的 N 次方次被触发时，向您发送告警信息。意义是告警信息发送时长间隔将越来越长，重新计数开启后，周期指数不生效",placement:"right"}},[e("i",{staticClass:"el-icon-question"})]):t._e()],1)]),e("el-form-item",{staticStyle:{width:"400px"},attrs:{label:"告警次数"}},[e("div",[e("el-input-number",{attrs:{"controls-position":"right",min:1,max:100},model:{value:t.strategyConfig.times,callback:function(e){t.$set(t.strategyConfig,"times",t._n(e))},expression:"strategyConfig.times"}})],1)]),e("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"维护时间"}},[e("el-time-select",{attrs:{placeholder:"起始时间","picker-options":{start:"00:00",step:"01:00",end:"23:00"}},model:{value:t.strategyConfig.start,callback:function(e){t.$set(t.strategyConfig,"start",e)},expression:"strategyConfig.start"}}),e("el-time-select",{attrs:{placeholder:"结束时间","picker-options":{start:"00:59",step:"01:00",end:"23:59"}},model:{value:t.strategyConfig.end,callback:function(e){t.$set(t.strategyConfig,"end",e)},expression:"strategyConfig.end"}},[e("el-tooltip",{staticClass:"item",staticStyle:{"margin-left":"10px"},attrs:{effect:"light",content:"配置后改时间段内不生效，默认全天生效",placement:"right"}},[e("i",{staticClass:"el-icon-question"})])],1)],1),e("el-form-item",{attrs:{label:"告警通道",prop:"notifyIds",required:""}},[e("el-select",{staticStyle:{width:"400px"},attrs:{filterable:"",multiple:"",clearable:"",placeholder:"请选择告警通道"},model:{value:t.strategyConfig.notifyIds,callback:function(e){t.$set(t.strategyConfig,"notifyIds",e)},expression:"strategyConfig.notifyIds"}},t._l(t.notifyChannels,(function(t){return e("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1),e("el-checkbox",{staticStyle:{"margin-left":"20px"},model:{value:t.strategyConfig.isdm,callback:function(e){t.$set(t.strategyConfig,"isdm",e)},expression:"strategyConfig.isdm"}},[t._v("电话通知")]),e("el-tooltip",{staticClass:"item",staticStyle:{"margin-left":"10px"},attrs:{effect:"light",content:"针对P0生效,推送给我(创建人)后，会同时推送到个人的钉钉",placement:"right"}},[e("i",{staticClass:"el-icon-question"})])],1),e("el-form-item",{staticStyle:{width:"400px"},attrs:{label:"备注"}},[e("el-input",{model:{value:t.strategyConfig.mark,callback:function(e){t.$set(t.strategyConfig,"mark",e)},expression:"strategyConfig.mark"}})],1)],1),e("div",[e("el-button",{attrs:{type:"success",round:""},on:{click:function(e){return t.checkStragtegy("strategyConfig")}}},[t._v("提交")]),e("el-button",{on:{click:function(e){t.strategyVisable=!1}}},[t._v("取 消")])],1)],1),e("div",[t._v("\n        策略名称:\n        "),e("el-input",{staticStyle:{width:"120px"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v("\n        产品线:\n        "),e("el-cascader",{staticStyle:{width:"300px"},attrs:{options:t.nodes,props:{label:"title",value:"id",multiple:!1},clearable:""},on:{change:t.setSearchNodeId}}),t._v("\n      \n        类别:\n        "),e("el-select",{staticStyle:{width:"100px"},attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"请选择告警类别"},model:{value:t.category,callback:function(e){t.category=t._n(e)},expression:"category"}},t._l(t.categorys,(function(t){return e("el-option",{key:t.id,attrs:{label:t.label,value:t.id}})})),1),e("el-button",{staticStyle:{"margin-right":"5px","margin-left":"5px"},attrs:{icon:"el-icon-search",circle:""},on:{click:t.searchStrategy}}),e("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary"},on:{click:t.createStrategyHandler}},[t._v("创建告警规则")]),e("el-switch",{staticStyle:{"margin-left":"10px"},attrs:{"active-color":"#13ce66","inactive-color":"#ff4949","active-text":"一键开启","inactive-text":"一键关闭"},on:{change:t.switchAlarmHandler},model:{value:t.switchAlarm,callback:function(e){t.switchAlarm=e},expression:"switchAlarm"}}),e("el-tooltip",{staticClass:"item",staticStyle:{"margin-left":"10px"},attrs:{effect:"light",content:"一键关闭或开启所有报警,不发告警及电话，在历史记录里可查, 默认关闭2小时后会自动开启",placement:"right"}},[e("i",{staticClass:"el-icon-question"})]),e("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary"},on:{click:t.myStrategyHandler}},[t._v("我的策略")])],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-top":"10px"},attrs:{data:t.strategyData,"header-cell-style":{background:"#eef1f6",color:"#606266"}}},[e("el-table-column",{attrs:{prop:"name",label:"策略名称",align:"center"}}),e("el-table-column",{attrs:{prop:"category",label:"监控类型",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[1===a.row.category?e("span",[t._v("所有")]):t._e(),2===a.row.category?e("span",[t._v("基础监控")]):t._e(),3===a.row.category?e("span",[t._v("日志监控")]):t._e(),4===a.row.category?e("span",[t._v("第三方监控")]):t._e()]}}])}),e("el-table-column",{attrs:{prop:"rule",label:"告警规则",align:"center"}}),e("el-table-column",{attrs:{prop:"notify_name",label:"通知",align:"center",width:"100"}}),e("el-table-column",{attrs:{prop:"creater",label:"修改人",align:"center",width:"80"}}),e("el-table-column",{attrs:{prop:"updated_at",label:"最后修改",sortable:"",align:"center",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(t._f("formatTime")(e.row.updated_at))+"\n          ")]}}])}),e("el-table-column",{attrs:{prop:"mark",label:"备注",align:"center",width:"150"}}),e("el-table-column",{attrs:{label:"启停",align:"center",width:"80"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-switch",{attrs:{"active-value":1,"inactive-vlaue":0,"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(e){return t.changeStatus(a.row)}},model:{value:a.row.status,callback:function(e){t.$set(a.row,"status",t._n(e))},expression:"scope.row.status"}})]}}])}),e("el-table-column",{attrs:{prop:"operate",label:"操作",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[4===a.row.category?e("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"success",loading:t.loadingTestResult},on:{click:function(e){return t.keywordTestHandler(a.$index,a.row)}}},[t._v(t._s(t.loadingbuttext))]):t._e(),7===a.row.category?e("el-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"success",loading:t.loadingTestResult},on:{click:function(e){return t.keywordTestHandler(a.$index,a.row)}}},[t._v(t._s(t.loadingbuttext))]):t._e(),e("el-button",{staticClass:"green",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(e){return t.editStrategyHandler(a.$index,a.row)}}},[t._v("编辑")]),e("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(e){return t.delStrategyHandler(a.$index,a.row)}}},[t._v("删除")])]}}])})],1),e("div",{staticClass:"pagination"},[e("el-pagination",{attrs:{"current-page":t.cur_page,"page-size":t.page_size,layout:"total, prev, pager, next",total:t.strategyCounts},on:{"current-change":t.strategyPageHandler,"update:currentPage":function(e){t.cur_page=e},"update:current-page":function(e){t.cur_page=e}}})],1)],1)],1)],1)},s=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("a481"),a("96cf"),a("3b8d")),r=a("bd86"),o=a("2f62");a("1c46");function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var g={data:function(){var t;return t={getassetsParams:{per_page:200,page_num:1,node_id:1},loading:!0,loadingTestResult:!1,strategyData:[],currentNode:0,switchAlarm:!0,showLogSource:!1,loadingbuttext:"语法测试",strategyConfig:{id:0,name:"",times:0,timer:0,start:"",end:"",mark:"",status:1,category:2,dimension:2,dimension_value:"",dimension_condition:"=",isExp:!0,ispushme:void 0,deleted_at:null,isdm:!0,iscounter:!0,notify_id:void 0,notifyIds:[],level:"P0",node_id:void 0,log_source_ids:[],searchParams:[{sParam:"message",symbol:"=",sValue:""}]},ruleName:"",my:!1,dimension_obj:void 0,assets:void 0,strategyVisable:!1,cur_page:1,page_size:20,page_total:1,idx:-1},Object(r["a"])(t,"loading",!1),Object(r["a"])(t,"nodes",[]),Object(r["a"])(t,"n_value",void 0),Object(r["a"])(t,"notifyChannels",void 0),Object(r["a"])(t,"dimension_search",""),Object(r["a"])(t,"name",""),Object(r["a"])(t,"logClusters",[]),Object(r["a"])(t,"category",""),Object(r["a"])(t,"symbols",[{id:1,name:"="},{id:2,name:">"},{id:3,name:"<"},{id:4,name:">="},{id:5,name:"<="},{id:7,name:":"},{id:8,name:"not"}]),Object(r["a"])(t,"searchKeys",[{id:3,name:"status"},{id:4,name:"request_length"},{id:5,name:"request_method"},{id:6,name:"request_time"}]),Object(r["a"])(t,"strategyCounts",0),Object(r["a"])(t,"levels",[{id:1,name:"P0",value:"P0"},{id:2,name:"P1",value:"P1"},{id:3,name:"P2",value:"P2"}]),Object(r["a"])(t,"rules",{dimension_value:[{required:!0,message:"请输入维度指标"}],name:[{required:!0,message:"请输入策略名称",trigger:"blur"}],notifyIds:[{required:!0,message:"请选择告警群组",trigger:"blur"}],log_source_ids:[{required:!0,message:"请选择日志检索源",trigger:"blur"}]}),Object(r["a"])(t,"conditions",[{id:1,label:"等于",value:"="},{id:2,label:"包含",value:"in"}]),Object(r["a"])(t,"categorys",[{id:1,label:"所有",value:"all"},{id:2,label:"基础监控",value:"baseres"},{id:3,label:"日志监控",value:"log"},{id:4,label:"自定义监控",value:"push"}]),Object(r["a"])(t,"timers",[{id:1,name:"1",timer:1},{id:3,name:"3",timer:3},{id:5,name:"5",timer:5},{id:10,name:"10",timer:10}]),t},created:function(){this.getData()},watch:{},computed:{data:function(){return{}}},methods:c(c({},Object(o["b"])(["getPrivNodes","getStrategyDataV2","createStrategyV2","deleteStrategyV2","getAssetsByNodePath","getNotifys","enableStrategyStatus","disableStrategyStatus","myStrategy","EnableAlarm","DisableAlarm","getSwitchStatus","ttsTest","keywordTest","getTreeMenus","getNodePathById","getLogClusterSetting","searchPdlCollectCluster"])),{},{getData:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,this.getTreeMenus();case 4:return e=JSON.parse(this.$store.state.treeMenus.data),this.nodes=e,t.next=8,this.getStrategyDataV2({name:this.name,category:this.category,node_id:this.dimension_search,page:this.cur_page,pageSize:20});case 8:return t.next=10,this.getLogClusterSetting();case 10:return a=this.$store.state.logSetting.data,"{}"!=JSON.stringify(a)&&(this.logClusters=a),this.strategyData=this.$store.state.strategyData.data,this.strategyCounts=this.$store.state.strategyData.total,t.next=16,this.getNotifys({page:this.cur_page,pageSize:this.page_size});case 16:return this.notifyChannels=this.$store.state.notifyData.data,t.next=19,this.getSwitchStatus();case 19:!0===this.$store.state.alarmSwitchStatus.data?this.switchAlarm=!1:this.switchAlarm=!0,console.log("this.switchAlarm:",this.switchAlarm);case 21:return t.prev=21,this.loading=!1,t.finish(21);case 24:case"end":return t.stop()}}),t,this,[[1,,21,24]])})));function e(){return t.apply(this,arguments)}return e}(),clearCascader:function(t){if(0!=t.length){var e=t[t.length-1];this.node_id=e,this.changeNode2(e)}},changPdlSetLogId:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return 0!=e.length&&(a=e[e.length-1],this.node_id=a,this.changeNode2(a)),t.next=3,this.searchPdlCollectCluster({node_id:this.node_id});case 3:i=this.$store.state.logSource.data,console.log("get node:",this.node_id,"log settting id ",i),0===i.length?this.showLogSource=!0:(this.strategyConfig.log_source_ids=i,this.showLogSource=!1);case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),setSearchNodeId:function(t){if(0!=t.length){var e=t[t.length-1];this.dimension_search=e}},addRewriteHeader:function(){this.strategyConfig.searchParams.push({sParam:"",symbol:"",sValue:"",key:Date.now()})},removeRewriteHeader:function(t){var e=this.strategyConfig.searchParams.indexOf(t);-1!==e&&this.strategyConfig.searchParams.splice(e,1)},changeCounterAndZs:function(t){4!==t&&5!==t&&6!==t&&7!==t&&8!==t||(this.strategyConfig.isExp=!1,this.strategyConfig.iscounter=!0)},trimKeyword:function(t){if(t.trim)this.strategyConfig.keyword=t.trim();else{var e=/^\s+|\s+$/g;this.strategyConfig.keyword=t.replace(e,"")}console.log("keyword:",this.strategyConfig.keyword)},checkStragtegy:function(t){var e=this;new Array;if(7===this.strategyConfig.category&&""===this.strategyConfig.dimension_value)return this.$message.error("请选择产品线"),!1;console.log("---\x3e",this.strategyConfig.log_source_ids),this.$refs[t].validate((function(t){if(!t)return!1;e.createStrategyAction()}))},ttsTestHandler:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.ttsTest({message:this.strategyConfig.name});case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),keywordTestHandler:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loadingTestResult=!0,this.loadingbuttext="测试中......",t.next=4,this.keywordTest(a.id);case 4:this.loadingTestResult=!1,this.loadingbuttext="语法测试";case 6:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}(),changeNode:function(t){this.strategyConfig.dimension_condition="is",this.strategyConfig.dimension_value=t.node_path,this.strategyConfig.dimension=3,this.strategyConfig.node_id=t.node_id,console.log("change:",this.strategyConfig.dimension_condition)},changeNode2:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getNodePathById({id:e});case 2:a=this.$store.state.nodePath.data,console.log("node_id:",e,a),this.strategyConfig.dimension_value=a,this.strategyConfig.node_id=e;case 6:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),createStrategyAction:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.changeCounterAndZs(this.strategyConfig.category),t.next=3,this.createStrategyV2(this.strategyConfig);case 3:return t.next=5,this.getStrategyDataV2({name:this.name,category:this.category,node_id:this.dimension_search,page:this.cur_page,pageSize:this.page_size});case 5:this.strategyData=this.$store.state.strategyData.data,this.strategyCounts=this.$store.state.strategyData.total,this.strategyVisable=!1,this.showLogSource=!1;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),changeStatus:function(t){t.status?(console.log("id:",t.id,"enable"),this.enableStrategyStatus(t.id)):(console.log("id:",t.id,"disable"),this.disableStrategyStatus(t.id))},editStrategyHandler:function(t,e){this.strategyConfig.id=e.id,this.strategyConfig.name=e.name,this.strategyConfig.times=e.times,this.strategyConfig.start=e.start,this.strategyConfig.end=e.end,this.dimension_obj=e.dimension_value,this.strategyConfig.timer=e.timer,this.strategyConfig.counter=e.counter,this.strategyConfig.isExp=e.isExp,this.strategyConfig.category=e.category,this.strategyConfig.dimension=e.dimension,this.strategyConfig.dimension_value=e.dimension_value,this.strategyConfig.isupgrade=e.isupgrade,this.strategyConfig.iscounter=e.iscounter,this.strategyConfig.dimension_condition=e.dimension_condition,this.strategyConfig.isdm=e.isdm,this.strategyConfig.notify_id=e.notify_id,this.strategyConfig.notifyIds=e.notifyIds,this.strategyConfig.mark=e.mark,this.strategyConfig.log_source_ids=e.log_source_ids,this.strategyConfig.node_id=e.node_id,this.currentNode=e.node_id,this.strategyConfig.level=e.level,this.strategyConfig.searchParams=e.searchParams,e.status?(console.log("id:",e.id,"enable"),this.strategyConfig.status=1):(console.log("id:",e.id,"disable",e.notifyIds,e.Notify_id),this.strategyConfig.status=0),this.strategyVisable=!0},createStrategyHandler:function(){this.strategyConfig.deleted_at=null,this.strategyConfig.name="",this.strategyConfig.id=0,this.strategyConfig.dimension_value="",this.dimension_obj="",this.strategyVisable=!0},myStrategyHandler:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.my=!0,t.next=3,this.myStrategy({page:this.cur_page,pageSize:this.page_size});case 3:this.strategyData=this.$store.state.strategyData.data,this.strategyCounts=this.$store.state.strategyData.total;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),searchStrategy:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.my=!1,t.next=3,this.getStrategyDataV2({name:this.name,category:this.category,node_id:this.dimension_search,page:this.cur_page,pageSize:this.page_size});case 3:this.strategyData=this.$store.state.strategyData.data,this.strategyCounts=this.$store.state.strategyData.total,this.dimension_search="";case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),switchAlarmHandler:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:!0===this.switchAlarm?this.EnableAlarm():this.DisableAlarm();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),delStrategyHandler:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("default"!==a.name){t.next=3;break}return this.$message.error("默认策略不能删除!"),t.abrupt("return",!1);case 3:return t.next=5,this.deleteStrategyV2({id:a.id});case 5:return t.next=7,this.getStrategyDataV2({name:this.name,category:this.category,node_id:this.dimension_search,page:this.cur_page,pageSize:this.page_size});case 7:this.strategyData=this.$store.state.strategyData.data,this.strategyCounts=this.$store.state.strategyData.total;case 9:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}(),strategyPageHandler:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!0!==this.my){t.next=3;break}return this.myStrategyHandler(),t.abrupt("return");case 3:return this.cur_page=e,t.next=6,this.getStrategyDataV2({name:this.name,category:this.category,node_id:this.dimension_search.node_id,page:this.cur_page,pageSize:this.page_size});case 6:this.strategyData=this.$store.state.strategyData.data,this.strategyCounts=this.$store.state.strategyData.total;case 8:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),global_search:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.globalSearch(e);case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()})},u=g,d=(a("7060"),a("2877")),y=Object(d["a"])(u,i,s,!1,null,"6c524f68",null);e["default"]=y.exports}}]);