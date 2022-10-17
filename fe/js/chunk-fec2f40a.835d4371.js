(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fec2f40a"],{"83dc":function(e,t,a){"use strict";a.r(t);a("a450");var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("el-steps",{staticStyle:{"margin-top":"20px"},attrs:{active:e.activeIndex,"finish-status":e.status,simple:""}},[t("el-step",{attrs:{title:"任务基本信息"}}),t("el-step",{attrs:{title:"资源配置"}}),t("el-step",{attrs:{title:"高级配置"}})],1),t("el-row",[0===e.activeIndex?t("el-col",[t("el-form",{ref:"baseRules",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"100px","margin-top":"20px","font-size":"24px"},attrs:{model:e.taskForm,"label-width":"120px"}},[t("el-divider",{attrs:{"content-position":"left"}},[e._v("基本信息")]),t("el-form-item",{attrs:{label:"任务名称",prop:"name",requeired:""}},[t("el-input",{staticStyle:{width:"300px"},attrs:{isdisabled:e.isdisabled},model:{value:e.taskForm.name,callback:function(t){e.$set(e.taskForm,"name",t)},expression:"taskForm.name"}})],1),t("el-form-item",{attrs:{label:"描述"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.mark,callback:function(t){e.$set(e.taskForm,"mark",t)},expression:"taskForm.mark"}})],1),t("el-form-item",{attrs:{label:"环境",prop:"env",requeired:""}},[t("el-select",{attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"请选择部署环境"},model:{value:e.taskForm.env,callback:function(t){e.$set(e.taskForm,"env",t)},expression:"taskForm.env"}},e._l(e.envs,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1)],1),t("el-form-item",{attrs:{label:"类型",prop:"category"}},[t("el-select",{attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"请选择部署类型"},model:{value:e.taskForm.category,callback:function(t){e.$set(e.taskForm,"category",t)},expression:"taskForm.category"}},e._l(e.categorys,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),t("el-divider",{attrs:{"content-position":"left"}},[e._v("项目信息")]),t("el-form-item",{attrs:{label:"语言",prop:"language",required:""}},[t("el-select",{attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"请选择项目语言"},model:{value:e.taskForm.language,callback:function(t){e.$set(e.taskForm,"language",t)},expression:"taskForm.language"}},e._l(e.tools,(function(e){return t("el-option",{key:e.id,attrs:{label:e.language,value:e.language}})})),1)],1),t("el-form-item",{attrs:{label:"构建工具",prop:"tool",required:""}},[t("el-select",{attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"请选择对应构建工具"},model:{value:e.taskForm.tool,callback:function(t){e.$set(e.taskForm,"tool",t)},expression:"taskForm.tool"}},e._l(e.tools,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),t("el-form-item",{attrs:{label:"代码仓库",prop:"git",required:""}},[t("el-input",{staticStyle:{width:"300px"},attrs:{isdisabled:e.isdisabled},model:{value:e.taskForm.git,callback:function(t){e.$set(e.taskForm,"git",t)},expression:"taskForm.git"}})],1),t("el-form-item",{attrs:{label:"分支",required:"",prop:"branch"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.branch,callback:function(t){e.$set(e.taskForm,"branch",t)},expression:"taskForm.branch"}}),t("el-tooltip",{staticClass:"item",staticStyle:{"margin-left":"10px"},attrs:{effect:"light",content:"如果分支不存在,则默认使用master分支构建.",placement:"right"}},[t("i",{staticClass:"el-icon-question"})])],1),t("el-form-item",{attrs:{label:"模块名"}},[t("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"输入模块名,无子模块可不填"},model:{value:e.taskForm.model,callback:function(t){e.$set(e.taskForm,"model",t)},expression:"taskForm.model"}}),t("el-tooltip",{staticClass:"item",staticStyle:{"margin-left":"10px"},attrs:{effect:"light",content:"例如java项目同个代码仓库管理多个功能模块,即子模块.",placement:"right"}},[t("i",{staticClass:"el-icon-question"})])],1),t("el-form-item",{attrs:{label:"副本数",required:""}},[t("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"输入容器副本数量"},model:{value:e.taskForm.replicas,callback:function(t){e.$set(e.taskForm,"replicas",e._n(t))},expression:"taskForm.replicas"}})],1),t("el-form-item",{attrs:{label:"标签"}},[t("el-button",{staticClass:"el-icon-circle-plus",attrs:{type:"text"},nativeOn:{click:function(t){return e.addLabel()}}},[e._v("添加")]),e._l(e.taskForm.labels,(function(a,l){return t("el-form-item",{key:l},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入标签名"},model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"p.name"}}),t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入标签值"},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"p.value"}}),t("el-button",{on:{click:function(t){return t.preventDefault(),e.removeLabel(a)}}},[e._v("删除")])],1)}))],2),t("el-divider",{attrs:{"content-position":"left"}},[e._v("配置管理")]),t("el-form-item",{attrs:{label:"配置方式",prop:"cfg"}},[t("el-radio-group",{model:{value:e.taskForm.cfg,callback:function(t){e.$set(e.taskForm,"cfg",t)},expression:"taskForm.cfg"}},[t("el-radio",{attrs:{label:1}},[e._v("本地配置")]),t("el-radio",{attrs:{label:2}},[e._v("配置字典")])],1)],1),t("el-divider",{attrs:{"content-position":"left"}},[e._v("构建")]),t("el-form-item",{attrs:{label:"构建命令",prop:"command"}},[t("el-input",{staticStyle:{width:"500px"},attrs:{placeholder:"输入程序编译命令,export GOPRIVATE='gitlab.xxx.net' && go build main.go"},model:{value:e.taskForm.command,callback:function(t){e.$set(e.taskForm,"command",t)},expression:"taskForm.command"}})],1),t("el-form-item",{attrs:{label:"Dockerfile",prop:"dockerfile"}},[t("el-input",{attrs:{type:"textarea",rows:10,placeholder:"请输入内容"},model:{value:e.taskForm.dockerfile,callback:function(t){e.$set(e.taskForm,"dockerfile",t)},expression:"taskForm.dockerfile"}})],1)],1),t("div",{staticStyle:{"text-align":"right"}},[t("el-button",{attrs:{type:"primary",size:"medium"},nativeOn:{click:function(t){return t.preventDefault(),e.nextStep.apply(null,arguments)}}},[e._v("\n           下一步\n         ")])],1)],1):e._e(),1===e.activeIndex?t("el-col",[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"100px","margin-top":"20px","font-size":"24px"},attrs:{model:e.taskForm,"label-width":"120px"}},[t("el-divider",{attrs:{"content-position":"left"}},[e._v("基本配置")]),t("el-form-item",{attrs:{label:"资源限制"}},[e._v("\n           CPU"),t("el-input",{staticStyle:{width:"100px","margin-right":"5px"},attrs:{placeholder:"如:100"},model:{value:e.taskForm.cpuLimit,callback:function(t){e.$set(e.taskForm,"cpuLimit",t)},expression:"taskForm.cpuLimit"}}),e._v("m\n             内存"),t("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"如:128"},model:{value:e.taskForm.memLimit,callback:function(t){e.$set(e.taskForm,"memLimit",t)},expression:"taskForm.memLimit"}}),e._v("Mib\n           ")],1),t("el-form-item",{attrs:{label:"所需资源"}},[e._v("\n           CPU"),t("el-input",{staticStyle:{width:"100px","margin-right":"5px"},attrs:{placeholder:"如:100"},model:{value:e.taskForm.cpuRequest,callback:function(t){e.$set(e.taskForm,"cpuRequest",t)},expression:"taskForm.cpuRequest"}}),e._v("m\n             内存"),t("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"如:128"},model:{value:e.taskForm.memRequest,callback:function(t){e.$set(e.taskForm,"memRequest",t)},expression:"taskForm.memRequest"}}),e._v("Mib\n           ")],1),t("el-divider",{attrs:{"content-position":"left"}},[e._v("端口")]),t("el-form-item",{attrs:{label:"端口"}},[t("el-button",{staticClass:"el-icon-circle-plus",attrs:{type:"text"},nativeOn:{click:function(t){return e.addServicePort()}}},[e._v("新增")]),e._l(e.taskForm.ports,(function(a,l){return t("el-form-item",{key:l},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"端口名"},model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"p.name"}}),t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"1-65535"},model:{value:a.port,callback:function(t){e.$set(a,"port",e._n(t))},expression:"p.port"}}),t("el-select",{attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"协议"},model:{value:a.protocol,callback:function(t){e.$set(a,"protocol",t)},expression:"p.protocol"}},e._l(e.transportProtocols,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1),t("el-button",{on:{click:function(t){return t.preventDefault(),e.removeServicePort(a)}}},[e._v("删除")])],1)}))],2),t("el-divider",{attrs:{"content-position":"left"}},[e._v("环境变量")]),t("el-form-item",{attrs:{label:"环境变量"}},[t("el-button",{staticClass:"el-icon-circle-plus",attrs:{type:"text"},nativeOn:{click:function(t){return e.addServiceEnv()}}},[e._v("新增")]),e._l(e.taskForm.envs,(function(a,l){return t("el-form-item",{key:l},[t("el-select",{attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"类型"},on:{change:e.getCategoryItems},model:{value:a.category,callback:function(t){e.$set(a,"category",t)},expression:"p.category"}},e._l(e.envCategorys,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"变量名"},model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"p.name"}}),1!=a.category?t("el-select",{attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"变量引用"},on:{change:e.getQuoteItemValues},model:{value:a.quote_item,callback:function(t){e.$set(a,"quote_item",t)},expression:"p.quote_item"}},e._l(e.quoteItems,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1):e._e(),1!=a.category?t("el-select",{attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"变量引用值"},model:{value:a.quote_value,callback:function(t){e.$set(a,"quote_value",t)},expression:"p.quote_value"}},e._l(e.quoteItemValues,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1):e._e(),1===a.category?t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"变量值"},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"p.value"}}):e._e(),t("el-button",{on:{click:function(t){return t.preventDefault(),e.removeServiceEnv(a)}}},[e._v("删除")])],1)}))],2),t("el-divider",{attrs:{"content-position":"left"}},[e._v("健康检查")]),t("el-form-item",{attrs:{label:"存活检查"}},[t("el-checkbox",{model:{value:e.taskForm.aliveHealthy.checked,callback:function(t){e.$set(e.taskForm.aliveHealthy,"checked",t)},expression:"taskForm.aliveHealthy.checked"}}),!0===e.taskForm.aliveHealthy.checked?t("el-tabs",{staticStyle:{width:"500px"},model:{value:e.taskForm.aliveHealthy.category,callback:function(t){e.$set(e.taskForm.aliveHealthy,"category",t)},expression:"taskForm.aliveHealthy.category"}},[t("el-tab-pane",{attrs:{label:"Http请求",name:"http"}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{"margin-top":"20px","font-size":"13px"},attrs:{model:e.taskForm,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"协议",prop:"protocol"}},[t("el-select",{attrs:{"value-key":"value",filterable:"",clearable:""},model:{value:e.taskForm.aliveHealthy.protocol,callback:function(t){e.$set(e.taskForm.aliveHealthy,"protocol",t)},expression:"taskForm.aliveHealthy.protocol"}},e._l(e.protocols,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1)],1),t("el-form-item",{attrs:{label:"路径"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.aliveHealthy.path,callback:function(t){e.$set(e.taskForm.aliveHealthy,"path",t)},expression:"taskForm.aliveHealthy.path"}})],1),t("el-form-item",{attrs:{label:"端口"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.aliveHealthy.port,callback:function(t){e.$set(e.taskForm.aliveHealthy,"port",t)},expression:"taskForm.aliveHealthy.port"}}),t("el-tooltip",{staticClass:"item",staticStyle:{"margin-left":"10px"},attrs:{effect:"light",content:"请填写端口名称,不支持配置端口号!例如:web 不能配置为8080",placement:"right"}},[t("i",{staticClass:"el-icon-question"})])],1),t("el-form-item",{attrs:{label:"延迟探测时间(秒)"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.aliveHealthy.delay,callback:function(t){e.$set(e.taskForm.aliveHealthy,"delay",e._n(t))},expression:"taskForm.aliveHealthy.delay"}})],1),t("el-form-item",{attrs:{label:"执行探测频率(秒)"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.aliveHealthy.rate,callback:function(t){e.$set(e.taskForm.aliveHealthy,"rate",e._n(t))},expression:"taskForm.aliveHealthy.rate"}})],1),t("el-form-item",{attrs:{label:"超时时间(秒)"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.aliveHealthy.timeout,callback:function(t){e.$set(e.taskForm.aliveHealthy,"timeout",e._n(t))},expression:"taskForm.aliveHealthy.timeout"}})],1),t("el-form-item",{attrs:{label:"健康阈值"}},[t("el-input",{staticStyle:{width:"300px"},attrs:{disabled:""},model:{value:e.taskForm.aliveHealthy.health,callback:function(t){e.$set(e.taskForm.aliveHealthy,"health",e._n(t))},expression:"taskForm.aliveHealthy.health"}})],1),t("el-form-item",{attrs:{label:"不健康阈值"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.aliveHealthy.nohealth,callback:function(t){e.$set(e.taskForm.aliveHealthy,"nohealth",e._n(t))},expression:"taskForm.aliveHealthy.nohealth"}})],1)],1)],1),t("el-tab-pane",{attrs:{label:"TCP连接",name:"tcp"}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{"margin-top":"20px","font-size":"13px"},attrs:{model:e.taskForm,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"端口"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.aliveHealthy.port,callback:function(t){e.$set(e.taskForm.aliveHealthy,"port",t)},expression:"taskForm.aliveHealthy.port"}})],1),t("el-form-item",{attrs:{label:"延迟探测时间(秒)"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.aliveHealthy.delay,callback:function(t){e.$set(e.taskForm.aliveHealthy,"delay",e._n(t))},expression:"taskForm.aliveHealthy.delay"}})],1),t("el-form-item",{attrs:{label:"执行探测频率(秒)"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.aliveHealthy.rate,callback:function(t){e.$set(e.taskForm.aliveHealthy,"rate",e._n(t))},expression:"taskForm.aliveHealthy.rate"}})],1),t("el-form-item",{attrs:{label:"超时时间(秒)"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.aliveHealthy.timeout,callback:function(t){e.$set(e.taskForm.aliveHealthy,"timeout",e._n(t))},expression:"taskForm.aliveHealthy.timeout"}})],1),t("el-form-item",{attrs:{label:"健康阈值"}},[t("el-input",{staticStyle:{width:"300px"},attrs:{disabled:""},model:{value:e.taskForm.aliveHealthy.health,callback:function(t){e.$set(e.taskForm.aliveHealthy,"health",e._n(t))},expression:"taskForm.aliveHealthy.health"}})],1),t("el-form-item",{attrs:{label:"不健康阈值"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.aliveHealthy.nohealth,callback:function(t){e.$set(e.taskForm.aliveHealthy,"nohealth",e._n(t))},expression:"taskForm.aliveHealthy.nohealth"}})],1)],1)],1)],1):e._e()],1),t("el-form-item",{attrs:{label:"就绪检查"}},[t("el-checkbox",{model:{value:e.taskForm.readyHealthy.checked,callback:function(t){e.$set(e.taskForm.readyHealthy,"checked",t)},expression:"taskForm.readyHealthy.checked"}}),!0===e.taskForm.readyHealthy.checked?t("el-tabs",{staticStyle:{width:"500px"},model:{value:e.taskForm.readyHealthy.category,callback:function(t){e.$set(e.taskForm.readyHealthy,"category",t)},expression:"taskForm.readyHealthy.category"}},[t("el-tab-pane",{attrs:{label:"Http请求",name:"http"}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{"margin-top":"20px","font-size":"10px"},attrs:{model:e.taskForm,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"协议",prop:"protocol"}},[t("el-select",{attrs:{"value-key":"value",filterable:"",clearable:""},model:{value:e.taskForm.readyHealthy.protocol,callback:function(t){e.$set(e.taskForm.readyHealthy,"protocol",t)},expression:"taskForm.readyHealthy.protocol"}},e._l(e.protocols,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1)],1),t("el-form-item",{attrs:{label:"路径"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.readyHealthy.path,callback:function(t){e.$set(e.taskForm.readyHealthy,"path",t)},expression:"taskForm.readyHealthy.path"}})],1),t("el-form-item",{attrs:{label:"端口"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.readyHealthy.port,callback:function(t){e.$set(e.taskForm.readyHealthy,"port",t)},expression:"taskForm.readyHealthy.port"}})],1),t("el-form-item",{attrs:{label:"延迟探测时间(秒)"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.readyHealthy.delay,callback:function(t){e.$set(e.taskForm.readyHealthy,"delay",e._n(t))},expression:"taskForm.readyHealthy.delay"}})],1),t("el-form-item",{attrs:{label:"执行探测频率(秒)"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.readyHealthy.rate,callback:function(t){e.$set(e.taskForm.readyHealthy,"rate",e._n(t))},expression:"taskForm.readyHealthy.rate"}})],1),t("el-form-item",{attrs:{label:"超时时间(秒)"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.readyHealthy.timeout,callback:function(t){e.$set(e.taskForm.readyHealthy,"timeout",e._n(t))},expression:"taskForm.readyHealthy.timeout"}})],1),t("el-form-item",{attrs:{label:"健康阈值"}},[t("el-input",{staticStyle:{width:"300px"},attrs:{disabled:""},model:{value:e.taskForm.readyHealthy.health,callback:function(t){e.$set(e.taskForm.readyHealthy,"health",e._n(t))},expression:"taskForm.readyHealthy.health"}})],1),t("el-form-item",{attrs:{label:"不健康阈值"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.readyHealthy.nohealth,callback:function(t){e.$set(e.taskForm.readyHealthy,"nohealth",e._n(t))},expression:"taskForm.readyHealthy.nohealth"}})],1)],1)],1),t("el-tab-pane",{attrs:{label:"TCP连接",name:"tcp"}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{"margin-top":"20px","font-size":"13px"},attrs:{model:e.taskForm,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"端口"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.readyHealthy.port,callback:function(t){e.$set(e.taskForm.readyHealthy,"port",t)},expression:"taskForm.readyHealthy.port"}})],1),t("el-form-item",{attrs:{label:"延迟探测时间(秒)"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.readyHealthy.delay,callback:function(t){e.$set(e.taskForm.readyHealthy,"delay",e._n(t))},expression:"taskForm.readyHealthy.delay"}})],1),t("el-form-item",{attrs:{label:"执行探测频率(秒)"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.readyHealthy.rate,callback:function(t){e.$set(e.taskForm.readyHealthy,"rate",e._n(t))},expression:"taskForm.readyHealthy.rate"}})],1),t("el-form-item",{attrs:{label:"超时时间(秒)"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.readyHealthy.timeout,callback:function(t){e.$set(e.taskForm.readyHealthy,"timeout",e._n(t))},expression:"taskForm.readyHealthy.timeout"}})],1),t("el-form-item",{attrs:{label:"健康阈值"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.readyHealthy.health,callback:function(t){e.$set(e.taskForm.readyHealthy,"health",e._n(t))},expression:"taskForm.readyHealthy.health"}})],1),t("el-form-item",{attrs:{label:"不健康阈值"}},[t("el-input",{staticStyle:{width:"300px"},model:{value:e.taskForm.readyHealthy.nohealth,callback:function(t){e.$set(e.taskForm.readyHealthy,"nohealth",e._n(t))},expression:"taskForm.readyHealthy.nohealth"}})],1)],1)],1)],1):e._e()],1),t("el-divider",{attrs:{"content-position":"left"}},[e._v("数据卷")]),t("el-form-item",{attrs:{label:"增加本地存储"}},[t("el-button",{staticClass:"el-icon-circle-plus",attrs:{type:"text"},nativeOn:{click:function(t){return e.addSerivceMount()}}},[e._v("新增")]),e._l(e.taskForm.storages,(function(a,l){return t("el-form-item",{key:l},[t("el-select",{attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"类型"},on:{change:e.getStorageItems},model:{value:a.category,callback:function(t){e.$set(a,"category",t)},expression:"p.category"}},e._l(e.storageCategorys,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),2===a.category?t("el-select",{attrs:{"value-key":"value",filterable:"",clearable:"",placeholder:"挂载源"},model:{value:a.source,callback:function(t){e.$set(a,"source",t)},expression:"p.source"}},e._l(e.sourceItems,(function(e){return t("el-option",{key:e,attrs:{label:e,value:e}})})),1):e._e(),1===a.category?t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入主机路径，如/data"},model:{value:a.source,callback:function(t){e.$set(a,"source",t)},expression:"p.source"}}):e._e(),t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入挂载容器路径"},model:{value:a.path,callback:function(t){e.$set(a,"path",t)},expression:"p.path"}}),t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入子路径,选填"},model:{value:a.subpath,callback:function(t){e.$set(a,"subpath",t)},expression:"p.subpath"}}),t("el-button",{on:{click:function(t){return t.preventDefault(),e.removeServiceMount(a)}}},[e._v("删除")])],1)}))],2)],1),t("div",{staticStyle:{"text-align":"right"}},[t("el-button",{attrs:{type:"default",size:"medium"},nativeOn:{click:function(t){return t.preventDefault(),e.preStep.apply(null,arguments)}}},[e._v("\n           上一步\n         ")]),t("el-button",{attrs:{type:"primary",size:"medium"},nativeOn:{click:function(t){return t.preventDefault(),e.nextStep.apply(null,arguments)}}},[e._v("\n           下一步\n         ")])],1)],1):e._e(),2===e.activeIndex?t("el-col",[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{"margin-left":"100px","margin-top":"20px","font-size":"24px"},attrs:{model:e.taskForm,"label-width":"120px"}},[t("el-divider",{attrs:{"content-position":"left"}},[e._v("调度设置")]),t("el-form-item",{attrs:{label:"节点亲和"}},[t("el-button",{staticClass:"el-icon-circle-plus",attrs:{type:"text"},nativeOn:{click:function(t){return e.addNodeAffinity()}}},[e._v("添加")]),e._l(e.taskForm.nodeAffinitys,(function(a,l){return t("el-form-item",{key:l},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入节点标签名"},model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"p.name"}}),t("el-select",{attrs:{"value-key":"value",filterable:"",clearable:""},on:{change:function(t){e.controlAnaLabelValue(t,l)}},model:{value:a.oper,callback:function(t){e.$set(a,"oper",t)},expression:"p.oper"}},e._l(e.opers,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1),t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入标签值,多个用英文逗号分隔",disabled:a.disabled},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"p.value"}}),t("el-button",{on:{click:function(t){return t.preventDefault(),e.removeNodeAffinity(a)}}},[e._v("删除")])],1)}))],2),t("el-form-item",{attrs:{label:"应用反亲和"}},[t("el-button",{staticClass:"el-icon-circle-plus",attrs:{type:"text"},nativeOn:{click:function(t){return e.addNonAffinity()}}},[e._v("添加")]),e._l(e.taskForm.nonAffinitys,(function(a,l){return t("el-form-item",{key:l},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入节点标签名"},model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"p.name"}}),t("el-select",{attrs:{"value-key":"value",filterable:"",clearable:""},on:{change:function(t){e.controlNonAnaLabelValue(t,l)}},model:{value:a.oper,callback:function(t){e.$set(a,"oper",t)},expression:"p.oper"}},e._l(e.opers,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1),t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入标签值,多个用英文逗号分隔",disabled:a.disabled},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"p.value"}}),t("el-button",{on:{click:function(t){return t.preventDefault(),e.removeNonAffinity(a)}}},[e._v("删除")])],1)}))],2),t("el-form-item",{attrs:{label:"调度容忍"}},[t("el-button",{staticClass:"el-icon-circle-plus",attrs:{type:"text"},nativeOn:{click:function(t){return e.addTolerate()}}},[e._v("添加")]),e._l(e.taskForm.tolerates,(function(a,l){return t("el-form-item",{key:l},[t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入标签名"},model:{value:a.name,callback:function(t){e.$set(a,"name",t)},expression:"p.name"}}),t("el-select",{attrs:{"value-key":"value",placeholder:"请输入操作符",filterable:"",clearable:""},on:{change:function(t){e.controlLabelValue(t,l)}},model:{value:a.oper,callback:function(t){e.$set(a,"oper",t)},expression:"p.oper"}},e._l(e.tolerateOpers,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1),t("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入标签值",disabled:a.disabled},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"p.value"}}),t("el-select",{attrs:{placeholder:"请选择调度效果","value-key":"value",filterable:"",clearable:""},model:{value:a.schedule,callback:function(t){e.$set(a,"schedule",t)},expression:"p.schedule"}},e._l(e.schedules,(function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1),t("el-button",{on:{click:function(t){return t.preventDefault(),e.removeTolerate(a)}}},[e._v("删除")])],1)}))],2)],1),t("div",{staticStyle:{"text-align":"right"}},[t("el-button",{attrs:{type:"default",size:"medium"},nativeOn:{click:function(t){return t.preventDefault(),e.preStep.apply(null,arguments)}}},[e._v("\n           上一步\n         ")]),t("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.createTaskConfig}},[e._v("\n           提交\n         ")])],1)],1):e._e()],1)],1)},r=[],o=(a("ac67"),a("1bc7"),a("32ea"),a("e186"),a("bff1")),s=a("a483"),i=a("7736"),n=a("9907");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){Object(s["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m={data:function(){return{status:"success",loading:!1,envs:[],envCategorys:[{id:1,name:"变量"},{id:2,name:"配置项"},{id:3,name:"保密字典"}],languages:n["a"].languages,protocols:[{id:1,name:"HTTP"},{id:2,name:"HTTPS"}],storageCategorys:[{id:2,name:"配置项"}],categorys:[{id:1,name:"容器部署"},{id:2,name:"物理部署"}],affinityCategorys:[{id:1,name:"必须满足"},{id:2,name:"尽量满足"}],opers:[{id:1,name:"In"},{id:2,name:"NotIn"},{id:3,name:"Exists"},{id:4,name:"DoesNotExist"}],tolerateOpers:[{id:1,name:"Equal"},{id:2,name:"Exists"}],schedules:[{id:1,name:"NoSchedule"},{id:2,name:"NoExecute"}],transportProtocols:[{id:1,name:"TCP"},{id:2,name:"UDP"}],quoteItemValues:[],quoteItems:[],isdisabled:!1,labelValueDisable:!1,labelAnaValueDisable:!1,activeName:"first",taskForm:{id:0,env:"",git:"",branch:"",model:"",category:1,cfg:1,domain:"",dockerfile:"",replicas:1,tool:void 0,cpuLimit:void 0,memLimit:void 0,cpuRequest:void 0,memRequest:void 0,storages:[],nodeAffinitys:[],nonAffinitys:[],tolerates:[],labels:[],podlabels:[],aliveHealthy:{checked:!1,category:"http",protocol:"HTTP",path:"",port:"",delay:3,rate:10,timeout:1,health:1,nohealth:3},readyHealthy:{checked:!1,category:"http",protocol:"HTTP",path:"",port:"",delay:3,rate:10,timeout:1,health:1,nohealth:3},envs:[],ports:[]},defaultParams:{label:"value",value:"value",children:"children"},envRefCategory:void 0,sourceItems:void 0,tools:[],node_id:void 0,node_data:void 0,node_path:void 0,activeIndex:0,rules:{name:[{required:!0,message:"请输入任务名称",trigger:"blur"}]}}},watch:{"$route.query":{handler:function(){this.$route.query&&("create"===this.$route.query.oper?(this.isdisabled=!1,this.taskForm.node_id=parseInt(this.$route.query.node_id),this.taskForm.node_path=this.$route.query.node_path,this.node_id=parseInt(this.$route.query.node_id),this.node_path=this.$route.query.node_path,this.node_data=this.$route.query.node_data):(this.isdisabled=!0,this.node_id=this.$store.state.taskForm.node_id,this.node_data=this.$route.query.node_data,this.taskForm=this.$store.state.taskForm))},immediate:!0}},created:function(){this.getData()},methods:u(u({},Object(i["b"])(["getTools","createTask","getQuoteValues","getEnvQuotes","getClusters"])),{},{getToolsHandler:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getTools({page:this.cur_page,pageSize:50});case 2:this.tools=this.$store.state.toolData.data;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getData:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.getToolsHandler(),e.next=3,this.getClusters({page:this.cur_page,pageSize:20});case 3:if(this.envs=this.$store.state.clusterData.data,0!=this.envs.length){e.next=7;break}return this.$message.error("未检测到部署环境信息,请先在集群管理创建集群环境信息!"),e.abrupt("return",!1);case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),preStep:function(){this.activeIndex=this.activeIndex-1},nextStep:function(){this.activeIndex=this.activeIndex+1},controlLabelValue:function(e,t){"Exists"===e?(this.taskForm.tolerates[t].value="",this.taskForm.tolerates[t].disabled=!0):this.taskForm.tolerates[t].disabled=!1},controlAnaLabelValue:function(e,t){"Exists"===e||"DoesNotExist"===e?(this.taskForm.nodeAffinitys[t].value="",this.taskForm.nodeAffinitys[t].disabled=!0):this.taskForm.nodeAffinitys[t].disabled=!1},controlNonAnaLabelValue:function(e,t){"Exists"===e||"DoesNotExist"===e?(this.taskForm.nonAffinitys[t]="",this.taskForm.nonAffinitys[t].disabled=!0):this.taskForm.nonAffinitys[t].disabled=!1},getCategoryItems:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.envRefCategory=t,console.log(t),e.next=4,this.getEnvQuotes({category:t,id:this.taskForm.node_id,env:this.taskForm.env});case 4:this.quoteItems=this.$store.state.envQuote.data;case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getQuoteItemValues:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getQuoteValues({category:this.envRefCategory,item:t,id:this.taskForm.node_id,env:this.taskForm.env});case 2:this.quoteItemValues=this.$store.state.quoteValues.data;case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getStorageItems:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getEnvQuotes({category:t,id:this.taskForm.node_id,env:this.taskForm.env});case 2:this.sourceItems=this.$store.state.envQuote.data;case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),addTolerate:function(){this.taskForm.tolerates.push({id:0,name:"",value:"",disabled:!1,oper:"",schedule:"",key:Date.now()})},removeTolerate:function(e){var t=this.taskForm.tolerates.indexOf(e);-1!==t&&this.taskForm.tolerates.splice(t,1)},addPodLabel:function(){this.taskForm.podlabels.push({name:"",value:"",key:Date.now()})},removePodLabel:function(e){var t=this.taskForm.podlabels.indexOf(e);-1!==t&&this.taskForm.podlabels.splice(t,1)},addLabel:function(){this.taskForm.labels.push({name:"",value:"",key:Date.now()})},removeLabel:function(e){var t=this.taskForm.labels.indexOf(e);-1!==t&&this.taskForm.labels.splice(t,1)},addNodeAffinity:function(){this.taskForm.nodeAffinitys.push({category:void 0,disabled:!1,name:"",value:"",oper:"",key:Date.now()})},removeNodeAffinity:function(e){var t=this.taskForm.nodeAffinitys.indexOf(e);-1!==t&&this.taskForm.nodeAffinitys.splice(t,1)},addNonAffinity:function(){this.taskForm.nonAffinitys.push({category:void 0,name:"",value:"",disabled:!1,oper:"",key:Date.now()})},removeNonAffinity:function(e){var t=this.taskForm.nonAffinitys.indexOf(e);-1!==t&&this.taskForm.nonAffinitys.splice(t,1)},addSerivceMount:function(){this.taskForm.storages.push({category:void 0,source:"",path:"",subpath:"",key:Date.now()})},removeServiceMount:function(e){var t=this.taskForm.storages.indexOf(e);-1!==t&&this.taskForm.storages.splice(t,1)},addServiceEnv:function(){this.taskForm.envs.push({category:void 0,name:"",value:"",quote_item:"",quote_value:"",key:Date.now()})},removeServiceEnv:function(e){var t=this.taskForm.envs.indexOf(e);-1!==t&&this.taskForm.envs.splice(t,1)},addServicePort:function(){this.taskForm.ports.push({name:"",port:void 0,protocol:"",key:Date.now()})},removeServicePort:function(e){var t=this.taskForm.ports.indexOf(e);-1!==t&&this.taskForm.ports.splice(t,1)},addGrayRule:function(){this.taskForm.grayRules.push({grayParam:"",grayValue:"",key:Date.now()})},removeGrayRule:function(e){var t=this.taskForm.grayRules.indexOf(e);-1!==t&&this.taskForm.grayRules.splice(t,1)},createTaskConfig:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.createTask(this.taskForm);case 2:this.$router.push({path:"/cicd?node_id="+this.node_id+"&node_data="+this.node_data});case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()})},p=m,d=(a("f729"),a("0b56")),h=Object(d["a"])(p,l,r,!1,null,"4666b3b4",null);t["default"]=h.exports},9907:function(e,t,a){"use strict";var l,r,o=[{id:1,name:"java8"},{id:2,name:"java11"},{id:3,name:"nodejs"},{id:4,name:"go"}],s={languages:o},i=s,n=a("0b56"),c=Object(n["a"])(i,l,r,!1,null,null,null);t["a"]=c.exports},dedc:function(e,t,a){},f729:function(e,t,a){"use strict";a("dedc")}}]);