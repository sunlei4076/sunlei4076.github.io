(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-serviceCreat-index~pages-serviceCreat-industrialcommercial~pages-serviceEdit-index~pages-servi~69945651"],{"0593":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var n={uniIcons:i("fedc").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"form-editor-wrap"},[e.readOnly?e._e():i("v-uni-view",{staticClass:"editor-btns-wrap"},[i("uni-icons",{staticClass:"image_insert",attrs:{size:20,color:"#000000",type:"image"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.insertImg.apply(void 0,arguments)}}})],1),i("v-uni-editor",{staticClass:"rich_editor",attrs:{id:e.customId,"read-only":e.readOnly,placeholder:"请输入"},on:{ready:function(t){arguments[0]=t=e.$handleEvent(t),e.onRichEditorReady.apply(void 0,arguments)},focus:function(t){arguments[0]=t=e.$handleEvent(t),e.onRichEditorFocus.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.onRichEditorBlur.apply(void 0,arguments)}}})],1)},r=[]},"202a":function(e,t,i){var n=i("db31");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("0ea9dcdb",n,!0,{sourceMap:!1,shadowMode:!1})},3657:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("ac1f");var n=i("365c"),a={name:"form-editor",props:{customId:{type:String,default:"richEditor"},readOnly:{type:Boolean,default:!1},value:{type:String,default:null}},data:function(){return{currentValue:null,windowHeight:0,editing:!1,bottom:0}},mounted:function(){},beforeDestroy:function(){},methods:{keyboardHeightChange:function(e){this.bottom=e.height,console.log("onKeyboardHeightChange",e.height)},onRichEditorReady:function(e){var t=this;uni.createSelectorQuery().in(this).select("#"+this.customId).context((function(e){t.editorCtx=e.context,t.value&&t.editorCtx.setContents({html:t.value}),t.currentValue=t.value})).exec(),uni.getSystemInfo({success:function(e){t.windowHeight=e.windowHeight}})},onRichEditorBlur:function(e){this.editing=!1,this.currentValue=e.detail.html,this.$emit("change",e.detail.html)},onRichEditorFocus:function(e){console.log(e),this.editing=!0},insertImg:function(){var e=this;uni.chooseImage({count:1,success:function(t){var i=t.tempFilePaths[0];(0,n.uploadfile)({filePath:i}).then((function(t){var i=t.url,n=t.fileName;e.editorCtx.insertImage({src:i,alt:n})}))}})}},watch:{value:function(e){e!==this.currentValue&&(this.currentValue=e,this.editorCtx&&this.editorCtx.setContents({html:e}))}}};t.default=a},"3d5b":function(e,t,i){"use strict";i.r(t);var n=i("ecf3"),a=i("475d");for(var r in a)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("47c8");var l,o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"683982e3",null,!1,n["a"],l);t["default"]=s.exports},"475d":function(e,t,i){"use strict";i.r(t);var n=i("de0d"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},"47c8":function(e,t,i){"use strict";var n=i("59a3"),a=i.n(n);a.a},"59a3":function(e,t,i){var n=i("77b2");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("4a430331",n,!0,{sourceMap:!1,shadowMode:!1})},"6fd5":function(e,t,i){"use strict";i.r(t);var n=i("3657"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},"77b2":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.flex1[data-v-683982e3]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex}.short_txt[data-v-683982e3]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.submit-btn[data-v-683982e3]{margin:%?80?% auto;width:%?400?%;height:%?80?%;background:#01418b;border-radius:%?8?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.submit-txt[data-v-683982e3]{font-size:%?32?%;font-weight:500;color:#fff}.files_wrap[data-v-683982e3]{margin-right:-3%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% 0 %?20?%}.file_btn[data-v-683982e3]{margin-top:%?10?%;margin-right:3%;width:30%;height:%?72?%;background-color:#e6f2ff;border-radius:%?16?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?24?%;box-sizing:border-box}.file_name[data-v-683982e3]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?24?%;font-weight:500;color:#000}.file_close[data-v-683982e3]{margin-left:%?10?%;width:%?28?%}.checklist_list[data-v-683982e3]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.checklist_item[data-v-683982e3]{margin-top:%?16?%;height:%?96?%;background-color:#fff;border-radius:%?8?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?32?%;border:%?2?% solid #fff;box-sizing:border-box;-webkit-transition:all .3s;transition:all .3s}.checklist_item_active[data-v-683982e3]{background-color:#e6f2ff;border-color:#01418b;box-shadow:%?0?% %?4?% %?12?% %?0?% rgba(0,0,0,.06)}.checklist_name[data-v-683982e3]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;font-weight:500;color:#2f2f2f;margin-right:%?10?%}.sticky[data-v-683982e3]{position:-webkit-sticky;position:sticky;top:%?0?%;z-index:10}.form_item_wrap[data-v-683982e3]{margin-bottom:%?12?%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:0 %?32?%}.form_item_wrap .content[data-v-683982e3]{height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.form_item_wrap .title[data-v-683982e3]{font-size:%?30?%;font-weight:500;color:#333}.form_item_wrap .required[data-v-683982e3]{margin:%?-2?% %?2?% 0;color:red;font-size:%?30?%;font-weight:500}.form_item_wrap .right_wrap[data-v-683982e3]{margin-left:%?20?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex}.form_item_wrap .value_wrap[data-v-683982e3]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.form_item_wrap .value[data-v-683982e3]{font-size:%?28?%;color:#333;line-height:%?40?%}.form_item_wrap .value_light[data-v-683982e3]{color:rgba(51,51,51,.5)}.form_item_wrap .input[data-v-683982e3]{text-align:right}.form_item_wrap .right_icon[data-v-683982e3]{margin-left:%?14?%}',""]),e.exports=t},"88ea":function(e,t,i){"use strict";i.r(t);var n=i("0593"),a=i("6fd5");for(var r in a)["default"].indexOf(r)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("b181");var l,o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"312f3539",null,!1,n["a"],l);t["default"]=s.exports},b181:function(e,t,i){"use strict";var n=i("202a"),a=i.n(n);a.a},db31:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.flex1[data-v-312f3539]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex}.short_txt[data-v-312f3539]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.submit-btn[data-v-312f3539]{margin:%?80?% auto;width:%?400?%;height:%?80?%;background:#01418b;border-radius:%?8?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.submit-txt[data-v-312f3539]{font-size:%?32?%;font-weight:500;color:#fff}.files_wrap[data-v-312f3539]{margin-right:-3%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% 0 %?20?%}.file_btn[data-v-312f3539]{margin-top:%?10?%;margin-right:3%;width:30%;height:%?72?%;background-color:#e6f2ff;border-radius:%?16?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?24?%;box-sizing:border-box}.file_name[data-v-312f3539]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?24?%;font-weight:500;color:#000}.file_close[data-v-312f3539]{margin-left:%?10?%;width:%?28?%}.checklist_list[data-v-312f3539]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.checklist_item[data-v-312f3539]{margin-top:%?16?%;height:%?96?%;background-color:#fff;border-radius:%?8?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?32?%;border:%?2?% solid #fff;box-sizing:border-box;-webkit-transition:all .3s;transition:all .3s}.checklist_item_active[data-v-312f3539]{background-color:#e6f2ff;border-color:#01418b;box-shadow:%?0?% %?4?% %?12?% %?0?% rgba(0,0,0,.06)}.checklist_name[data-v-312f3539]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;font-weight:500;color:#2f2f2f;margin-right:%?10?%}.sticky[data-v-312f3539]{position:-webkit-sticky;position:sticky;top:%?0?%;z-index:10}.form-editor-wrap[data-v-312f3539]{width:%?686?%}.form-editor-wrap .rich_editor[data-v-312f3539]{width:100%;min-height:%?120?%;height:auto;font-size:%?28?%;color:#333}.form-editor-wrap .editor-btns-wrap[data-v-312f3539]{margin-top:-10px;display:-webkit-box;display:-webkit-flex;display:flex}.form-editor-wrap .image_insert[data-v-312f3539]{margin:0 %?20?% 0 0;padding:%?5?% %?10?%}',""]),e.exports=t},de0d:function(e,t,i){"use strict";var n=i("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("d0ff"));i("a9e3"),i("caad"),i("498a"),i("99af"),i("4de4");var r=n(i("5a0c")),l=n(i("a24c")),o=i("365c"),s={name:"form_item",components:{customPicker:l.default},props:{lineHeight:{type:String,default:"12"},title:{required:!0,type:String,default:""},required:{type:Boolean,default:!1},value:{},valuePlaceHolder:{type:String,default:"请选择"},fileLimit:{type:Number,default:0},type:{required:!0,validator:function(e){return["view","view_novalue","view_noarrow","file","file_noarrow","input","picker_common","picker_date"].includes(e)}},inputType:{required:!1,type:String,default:"text"},pickerData:{type:Array,default:function(){return[]}}},model:{prop:"value",event:"change"},data:function(){return{lazyCommonPickerOpening:!1,commonPickerOpening:!1}},mounted:function(){var e=this;"picker_common"==this.type&&this.$nextTick((function(){e.lazyCommonPickerOpening=!0}))},computed:{dateStart:function(){return(0,r.default)().format("YYYY-MM-DD")},dateEnd:function(){return"2049-12-31"}},methods:{inputChange:function(e){this.$emit("change",e.detail.value.trim())},pickerChange:function(e){var t=e.id;this.$emit("change",t)},pickerDateChange:function(e){this.$emit("change",e.detail.value)},addFile:function(){var e=this;uni.chooseFile({count:10,success:function(t){var i=t.tempFiles[0],n=i.name,r=i.path;i.size;(0,o.uploadfile)({filePath:r}).then((function(t){var i=t.id,r=t.url,l=[].concat((0,a.default)(e.value),[{fileName:n,uploadPath:r,_id:i,id:i}]);e.$emit("change",l)}))}})},deleteFile:function(e){this.$emit("change",this.value.filter((function(t,i){return i!=e})))}}};t.default=s},ecf3:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}));var n={uniIcons:i("fedc").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"form_item_wrap",style:{marginBottom:e.lineHeight+"rpx"}},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"title"},[e._v(e._s(e.title))]),e.required?i("v-uni-text",{staticClass:"required"},[e._v("*")]):e._e(),"view"==e.type?i("v-uni-view",{staticClass:"right_wrap"},[i("v-uni-view",{staticClass:"value_wrap",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$emit("rightClick")}}},[i("v-uni-text",{class:["value","short_txt",!e.value&&"value_light"]},[e._v(e._s(e.value||e.valuePlaceHolder))]),i("uni-icons",{staticClass:"right_icon",attrs:{size:16,color:"#000000",type:"arrowright"}})],1)],1):e._e(),"view_noarrow"==e.type?i("v-uni-view",{staticClass:"right_wrap"},[i("v-uni-view",{staticClass:"value_wrap",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.$emit("rightClick")}}},[i("v-uni-text",{class:["value","short_txt",!e.value&&"value_light"]},[e._v(e._s(e.value||e.valuePlaceHolder))])],1)],1):e._e(),"file"==e.type||"file_noarrow"==e.type?i("v-uni-view",{staticClass:"right_wrap"},[!e.fileLimit||!e.value||e.value.length<e.fileLimit?i("v-uni-view",{staticClass:"value_wrap",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.addFile.apply(void 0,arguments)}}},["file"==e.type?i("uni-icons",{staticClass:"right_icon",attrs:{size:18,color:"#000000",type:"plus"}}):e._e()],1):e._e()],1):e._e(),"input"==e.type?i("v-uni-view",{staticClass:"right_wrap"},[i("v-uni-view",{staticClass:"value_wrap"},[i("v-uni-input",{staticClass:"flex1 input",attrs:{placeholder_class:"value value_light",type:e.inputType,value:e.value,placeholder:"请输入"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.inputChange.apply(void 0,arguments)}}})],1)],1):e._e(),"picker_common"==e.type?i("v-uni-view",{staticClass:"right_wrap"},[i("v-uni-view",{staticClass:"value_wrap",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.commonPickerOpening=!0}}},[i("v-uni-text",{class:["value","short_txt",!e.value&&"value_light"]},[e._v(e._s(e.value?e.pickerData.find((function(t){return t.id==e.value}))&&e.pickerData.find((function(t){return t.id==e.value})).label:e.valuePlaceHolder))]),i("uni-icons",{staticClass:"right_icon",attrs:{size:14,color:"#000000",type:"arrowright"}})],1)],1):e._e(),"picker_date"==e.type?i("v-uni-view",{staticClass:"right_wrap"},[i("v-uni-picker",{staticClass:"value_wrap",attrs:{mode:"date",start:e.dateStart,end:e.dateEnd,value:e.value},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerDateChange.apply(void 0,arguments)}}},[i("v-uni-text",{class:["value","short_txt",!e.value&&"value_light"]},[e._v(e._s(e.value||e.valuePlaceHolder))]),i("uni-icons",{staticClass:"right_icon",attrs:{size:14,color:"#000000",type:"arrowright"}})],1)],1):e._e()],1),"file"!=e.type&&"file_noarrow"!=e.type||!e.value.length?e._e():i("v-uni-view",{staticClass:"files_wrap"},e._l(e.value,(function(t,n){return i("v-uni-view",{key:t.id,staticClass:"file_btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.deleteFile(n)}}},[i("v-uni-text",{staticClass:"short_txt file_name"},[e._v(e._s(t.fileName))]),i("uni-icons",{staticClass:"file_close",attrs:{size:14,color:"#000000",type:"closeempty"}})],1)})),1),e._t("customContent"),e.lazyCommonPickerOpening?i("customPicker",{attrs:{title:e.title,range:e.pickerData,rangeKey:"label",opening:e.commonPickerOpening},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.commonPickerOpening=!1},selected:function(t){arguments[0]=t=e.$handleEvent(t),e.pickerChange.apply(void 0,arguments)}}}):e._e()],2)},r=[]}}]);