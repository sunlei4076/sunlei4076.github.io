(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-serviceEdit-industrialcommercial"],{"21c6":function(e,i,t){"use strict";var n=t("ee27").default;Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("96cf");var a=n(t("c964")),s=n(t("fc11")),r=n(t("f3f3")),l=n(t("d0ff")),c=n(t("d0af"));t("d81d"),t("d3b7"),t("3ca3"),t("ddb0"),t("4de4"),t("7db0"),t("99af"),t("13d5"),t("ac1f"),t("1276");var d=n(t("3d5b")),o=n(t("88ea")),u=n(t("ed87")),f=t("fd2a"),p=t("365c"),m={components:{formItem:d.default,formEditor:o.default,formSchedule:u.default},provide:function(){return{servicePrincipals:this.servicePrincipals}},data:function(){return{typeData:null,detailData:null,bizBusinessServiceTaskId:"",formData:{bizBusinessServiceTaskId:"",status:"",completeQuality:"",businessLicenseImg:"",bizBusinessServicePrincipalId:"",handlePeople:"",bizBusinessModifyApply:{},serviceTaskFiles:[],removeServiceTaskFiles:[],serviceSchedules:[]},servicePrincipals:[],serviceOwenSpaces:[],serviceStatus:["待开始","进行中","待确认","已完成","已作废"].map((function(e,i){return{label:e,id:i+1}})),businessTypes:["核心","重点","优质","其他"].map((function(e,i){return{label:e,id:i+1}})),completeQualitys:["优秀","良好","一般","差"].map((function(e,i){return{label:e,id:i+1}}))}},computed:{canDelete:function(){return this.formData.serviceSchedules&&this.formData.serviceSchedules.length>1}},onLoad:function(e){var i=e.type,t=e.id,n=f.service_types[i];uni.setNavigationBarTitle({title:n.name}),this.typeData=n,this.bizBusinessServiceTaskId=t,this.fetchDatas(),console.log(i,t)},methods:{fetchDatas:function(){var e=this,i=this.bizBusinessServiceTaskId;return Promise.all([(0,p.queryBizBusinessServiceTaskDetail)({bizBusinessServiceTaskId:i}),(0,p.queryBizBusinessServicePrincipal)()]).then((function(i){var t,n=(0,c.default)(i,2),a=n[0],s=n[1];(t=e.servicePrincipals).push.apply(t,(0,l.default)(s.map((function(e){var i=e.id,t=e.name;return{id:i,label:t}})))),e.detailData=a;var r={bizBusinessServiceTaskId:a.bizBusinessServiceModifyApply.businessServiceTaskId,status:a.status,completeQuality:a.completeQuality,businessLicenseImg:"",bizBusinessServicePrincipalId:a.bizBusinessServicePrincipalId,handlePeople:a.handlePeople,serviceTaskFiles:a.serviceTaskFiles,removeServiceTaskFiles:[],bizBusinessModifyApply:{businessName:a.bizBusinessServiceModifyApply.businessName,type:a.bizBusinessServiceModifyApply.type,linkPeople:a.bizBusinessServiceModifyApply.linkPeople,linkTelphone:a.bizBusinessServiceModifyApply.linkTelphone,address:a.bizBusinessServiceModifyApply.address||a.bizBusinessServiceModifyApply.realAddress},serviceSchedules:(a.bizBusinessServiceSchedulesList||[]).filter((function(e){return!e.deleteStatus})).map(f.creatScheduleEditModel)};0==r.serviceSchedules.length&&(r.serviceSchedules=[(0,f.creatScheduleEditModel)()]),e.formData=r,a.bizBusinessId||(0,p.queryValidBusinessOwenSpace)().then((function(i){e.serviceOwenSpaces=i.map((function(e){var i=e.id,t=e.owenSpaceName;return{id:i,label:t}}))}))}))},formItemChange:function(e,i){this.$set(this.formData,e,i)},formItemChangeDeep:function(e,i,t){var n=this.formData[e];this.formItemChange(e,(0,r.default)((0,r.default)({},n),{},(0,s.default)({},i,t)))},businessLicenseImgUpload:function(){var e=this;uni.chooseImage({count:1,success:function(i){var t=i.tempFilePaths[0];(0,p.uploadfile)({filePath:t}).then((function(i){var t=i.url;i.fileName;e.formItemChange("businessLicenseImg",t)}))}})},scheduleDelete:function(e){var i=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.$nextTick();case 2:n=i.formData.serviceSchedules.find((function(i){return i.id===e})),a=null,a=n.scheduleId?i.formData.serviceSchedules.map((function(i){return i.id==e&&(i.deleteStatus=1),i})):i.formData.serviceSchedules.filter((function(i){return i.id!==e})),i.formItemChange("serviceSchedules",a);case 6:case"end":return t.stop()}}),t)})))()},scheduleChange:function(e,i){var t=this.formData.serviceSchedules.map((function(t){return t.id==i&&(t=e),t}));this.formItemChange("serviceSchedules",t)},scheduleAdd:function(){var e=[].concat((0,l.default)(this.formData.serviceSchedules),[(0,f.creatScheduleEditModel)()]);this.formItemChange("serviceSchedules",e)},submitClick:function(){var e=this,i=(0,r.default)({},this.formData),t=["bizBusinessServiceTaskId","status","bizBusinessServicePrincipalId","bizBusinessModifyApply","removeServiceTaskFiles","serviceSchedules","planFinishDate"];if(4==i.status){if(t.push("completeQuality","businessLicenseImg"),!i.completeQuality)return void uni.toast("请选择完成质量");if(!i.businessLicenseImg)return void uni.toast("请上传营业执照")}i.removeServiceTaskFiles=this.detailData.serviceTaskFiles.filter((function(e){return!i.serviceTaskFiles.find((function(i){return i.id==e.id}))})).map((function(e){var i=e.id;return{id:i}})),i.serviceSchedules=i.serviceSchedules.map((function(t){var n={scheduleInfo:t.scheduleInfo,handlePeople:t.handlePeople,handleDate:t.handleDate,scheduleServiceTaskFiles:t.scheduleServiceTaskFiles.filter((function(e){return e._id})).map((function(e){return{fileName:e.fileName,uploadPath:e.uploadPath}}))};if(t.scheduleId)if(n.scheduleId=t.scheduleId,t.deleteStatus)n.deleteStatus=t.deleteStatus,n.scheduleServiceTaskFiles=[];else{var a=e.detailData.bizBusinessServiceSchedulesList.find((function(e){return e.id==t.scheduleId})),s=a.serviceTaskFiles.filter((function(e){return!t.scheduleServiceTaskFiles.find((function(i){return i.id==e.id}))})).map((function(e){var i=e.id;return{id:i}}));i.removeServiceTaskFiles=[].concat((0,l.default)(i.removeServiceTaskFiles),(0,l.default)(s))}return n})),(0,p.changeBizBusinessServiceTask)(t.reduce((function(e,t){return e[t]=i[t],e}),{})).then((function(i){uni.toast("提交成功").then((function(){i&&i.bizBusinessServiceTaskId?(e.bizBusinessServiceTaskId=i.bizBusinessServiceTaskId.split(";")[0],e.fetchDatas().finally((function(){uni.$emit("refresh_servicelist")}))):e.fetchDatas()}))}))}}};i.default=m},"2bce":function(e,i,t){"use strict";t.r(i);var n=t("7bd7"),a=t("e0d7");for(var s in a)["default"].indexOf(s)<0&&function(e){t.d(i,e,(function(){return a[e]}))}(s);t("2e9d");var r,l=t("f0c5"),c=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"d86da5b6",null,!1,n["a"],r);i["default"]=c.exports},"2e9d":function(e,i,t){"use strict";var n=t("a08d"),a=t.n(n);a.a},"7bd7":function(e,i,t){"use strict";var n;t.d(i,"b",(function(){return a})),t.d(i,"c",(function(){return s})),t.d(i,"a",(function(){return n}));var a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return e.detailData?t("v-uni-view",{staticClass:"page-industrialcommercial-edit"},[t("formItem",{attrs:{title:"状态",lineHeight:"4",type:"picker_common",pickerData:e.serviceStatus,value:e.formData.status},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.formItemChange("status",i)}}}),"4"==e.formData.status?[t("formItem",{attrs:{title:"完成质量",lineHeight:"4",type:"picker_common",pickerData:e.completeQualitys,value:e.formData.completeQuality},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.formItemChange("completeQuality",i)}}}),t("formItem",{attrs:{title:"变更后营业执照",type:"view"},on:{rightClick:function(i){arguments[0]=i=e.$handleEvent(i),e.businessLicenseImgUpload.apply(void 0,arguments)}},scopedSlots:e._u([{key:"customContent",fn:function(){return[e.formData.businessLicenseImg?t("v-uni-view",{staticClass:"customContent_wrap files_wrap"},[t("v-uni-image",{staticClass:"businessLicenseImg",attrs:{src:e.formData.businessLicenseImg,mode:"heightFix"}})],1):e._e()]},proxy:!0}],null,!1,4014792841)})]:e._e(),t("formItem",{attrs:{title:"创建人",lineHeight:"4",type:"view_noarrow",value:e.detailData.createPeopleName||"-"}}),t("formItem",{attrs:{title:"负责人",lineHeight:"4",type:"picker_common",pickerData:e.servicePrincipals,value:e.formData.bizBusinessServicePrincipalId},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.formItemChange("bizBusinessServicePrincipalId",i)}}}),t("formItem",{attrs:{title:"执行人",lineHeight:"4",type:"picker_common",pickerData:e.servicePrincipals,value:e.formData.handlePeople},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.formItemChange("handlePeople",i)}}}),t("v-uni-view",{staticClass:"divider_wrap"},[t("v-uni-text",{staticClass:"divider_title"},[e._v("变更企业")])],1),e.detailData.bizBusinessId?[t("formItem",{attrs:{title:"企业名称",lineHeight:"4",type:"input",value:e.formData.bizBusinessModifyApply.businessName},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.formItemChangeDeep("bizBusinessModifyApply","businessName",i)}}}),t("formItem",{attrs:{title:"企业类型",lineHeight:"4",type:"picker_common",pickerData:e.businessTypes,value:e.formData.bizBusinessModifyApply.type},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.formItemChangeDeep("bizBusinessModifyApply","type",i)}}}),t("formItem",{attrs:{title:"企业联系人",lineHeight:"4",type:"input",value:e.formData.bizBusinessModifyApply.linkPeople},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.formItemChangeDeep("bizBusinessModifyApply","linkPeople",i)}}}),t("formItem",{attrs:{title:"企业联系方式",lineHeight:"4",type:"input",value:e.formData.bizBusinessModifyApply.linkTelphone},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.formItemChangeDeep("bizBusinessModifyApply","linkTelphone",i)}}}),t("formItem",{attrs:{title:"企业地址",lineHeight:"4",type:"input",value:e.formData.bizBusinessModifyApply.address},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.formItemChangeDeep("bizBusinessModifyApply","address",i)}}})]:e._e(),t("formItem",{attrs:{title:"提供资料明细",type:"view_novalue"},scopedSlots:e._u([{key:"customContent",fn:function(){return[t("v-uni-view",{staticClass:"customContent_wrap"},[t("formEditor",{attrs:{value:e.detailData.provideDataDetails,readOnly:!0}})],1)]},proxy:!0}],null,!1,2869062686)}),t("formItem",{attrs:{title:"变更信息",type:"view_novalue"},scopedSlots:e._u([{key:"customContent",fn:function(){return[t("v-uni-view",{staticClass:"customContent_wrap"},[t("formEditor",{attrs:{value:e.detailData.serviceDesc,readOnly:!0}})],1)]},proxy:!0}],null,!1,2461530483)}),t("formItem",{attrs:{title:"附件",lineHeight:"4",type:"file_noarrow",value:e.formData.serviceTaskFiles},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.formItemChange("serviceTaskFiles",i)}}}),t("v-uni-view",{staticClass:"divider_wrap sticky"},[t("v-uni-text",{staticClass:"divider_title"},[e._v("服务进度")]),t("v-uni-text",{staticClass:"divider_title divider_btn",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.scheduleAdd.apply(void 0,arguments)}}},[e._v("添加进度")])],1),e._l(e.formData.serviceSchedules,(function(i,n){return[i.deleteStatus?e._e():t("formSchedule",{key:i.id,attrs:{index:n,schedule:i,canDelete:e.canDelete},on:{delete:function(t){arguments[0]=t=e.$handleEvent(t),e.scheduleDelete(i.id)},change:function(t){arguments[0]=t=e.$handleEvent(t),e.scheduleChange(t,i.id)}}})]})),t("v-uni-view",{staticClass:"submit-btn",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.submitClick.apply(void 0,arguments)}}},[t("v-uni-text",{staticClass:"submit-txt"},[e._v("提交")])],1)],2):e._e()},s=[]},a08d:function(e,i,t){var n=t("ae4c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=t("4f06").default;a("cca0c170",n,!0,{sourceMap:!1,shadowMode:!1})},ae4c:function(e,i,t){var n=t("24fb");i=n(!1),i.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.flex1[data-v-d86da5b6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex}.short_txt[data-v-d86da5b6]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.submit-btn[data-v-d86da5b6]{margin:%?80?% auto;width:%?400?%;height:%?80?%;background:#01418b;border-radius:%?8?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.submit-txt[data-v-d86da5b6]{font-size:%?32?%;font-weight:500;color:#fff}.files_wrap[data-v-d86da5b6]{margin-right:-3%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% 0 %?20?%}.file_btn[data-v-d86da5b6]{margin-top:%?10?%;margin-right:3%;width:30%;height:%?72?%;background-color:#e6f2ff;border-radius:%?16?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?24?%;box-sizing:border-box}.file_name[data-v-d86da5b6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?24?%;font-weight:500;color:#000}.file_close[data-v-d86da5b6]{margin-left:%?10?%;width:%?28?%}.checklist_list[data-v-d86da5b6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.checklist_item[data-v-d86da5b6]{margin-top:%?16?%;height:%?96?%;background-color:#fff;border-radius:%?8?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?32?%;border:%?2?% solid #fff;box-sizing:border-box;-webkit-transition:all .3s;transition:all .3s}.checklist_item_active[data-v-d86da5b6]{background-color:#e6f2ff;border-color:#01418b;box-shadow:%?0?% %?4?% %?12?% %?0?% rgba(0,0,0,.06)}.checklist_name[data-v-d86da5b6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;font-weight:500;color:#2f2f2f;margin-right:%?10?%}.sticky[data-v-d86da5b6]{position:-webkit-sticky;position:sticky;top:%?0?%;z-index:10}.page-industrialcommercial-edit[data-v-d86da5b6]{padding:%?12?% 0;min-height:100vh;background-color:#f6f9fd}.page-industrialcommercial-edit .divider_wrap[data-v-d86da5b6]{background-color:#f6f9fd;padding-top:%?16?%;height:%?66?%;box-sizing:initial;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.page-industrialcommercial-edit .divider_title[data-v-d86da5b6]{font-size:%?24?%;font-weight:500;color:#333;padding:0 %?32?%}.page-industrialcommercial-edit .divider_btn[data-v-d86da5b6]{color:#01418b}.page-industrialcommercial-edit .businessLicenseImg[data-v-d86da5b6]{height:%?300?%!important}',""]),e.exports=i},e0d7:function(e,i,t){"use strict";t.r(i);var n=t("21c6"),a=t.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){t.d(i,e,(function(){return n[e]}))}(s);i["default"]=a.a}}]);