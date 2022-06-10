(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c85f75b8"],{"23db":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入售后编号"},model:{value:e.listQuery.aftersaleSn,callback:function(t){e.$set(e.listQuery,"aftersaleSn",t)},expression:"listQuery.aftersaleSn"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入订单ID"},model:{value:e.listQuery.orderId,callback:function(t){e.$set(e.listQuery,"orderId",t)},expression:"listQuery.orderId"}}),e._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["GET /admin/aftersale/list"],expression:"['GET /admin/aftersale/list']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("查找")]),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v("导出")])],1),e._v(" "),a("div",{staticClass:"operator-container"},[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["GET /admin/aftersale/batch-recept"],expression:"['GET /admin/aftersale/batch-recept']"}],staticClass:"filter-item",attrs:{type:"success",icon:"el-icon-info"},on:{click:e.handleBatchRecept}},[e._v("批量通过")]),e._v(" "),a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["GET /admin/aftersale/batch-reject"],expression:"['GET /admin/aftersale/batch-reject']"}],staticClass:"filter-item",attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.handleBatchReject}},[e._v("批量拒绝")])],1),e._v(" "),a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("el-tab-pane",{attrs:{label:"全部",name:"all"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"待审核",name:"uncheck"}}),e._v(" "),a("el-tab-pane",{attrs:{label:"待退款",name:"unrefund"}})],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"正在查询中。。。",fit:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"售后编号",prop:"aftersaleSn"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"订单ID",prop:"orderId"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"用户ID",prop:"userId"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"售后类型",prop:"type"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e.typeTag[t.row.type]}},[e._v(e._s(e.typeDesc[t.row.type]))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"退款原因",prop:"reason"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"退款价格",prop:"amount"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"申请时间",prop:"addTime"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作","min-width":"120","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/aftersale/detail"],expression:"['POST /admin/aftersale/detail']"}],attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.handleRead(t.row)}}},[e._v("详情")]),e._v(" "),1===t.row.status?a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/aftersale/recept"],expression:"['POST /admin/aftersale/recept']"}],attrs:{type:"success",size:"mini"},on:{click:function(a){return e.handleRecept(t.row)}}},[e._v("通过")]):e._e(),e._v(" "),1===t.row.status?a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/aftersale/reject"],expression:"['POST /admin/aftersale/reject']"}],attrs:{type:"danger",size:"mini"},on:{click:function(a){return e.handleReject(t.row)}}},[e._v("拒绝")]):e._e(),e._v(" "),2===t.row.status?a("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["POST /admin/aftersale/refund"],expression:"['POST /admin/aftersale/refund']"}],attrs:{type:"warning",size:"mini"},on:{click:function(a){return e.handleRefund(t.row)}}},[e._v("退款")]):e._e()]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),e._v(" "),a("el-tooltip",{attrs:{placement:"top",content:"返回顶部"}},[a("back-to-top",{attrs:{"visibility-height":100}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.aftersaleDialogVisible,title:"售后详情",width:"800"},on:{"update:visible":function(t){e.aftersaleDialogVisible=t}}},[a("section",{ref:"print"},[a("el-form",{attrs:{data:e.aftersaleDetail,"label-position":"left"}},[a("el-form-item",{attrs:{label:"售后id"}},[a("el-tag",[e._v(e._s(e.aftersaleDetail.id))])],1),e._v(" "),a("el-form-item",{attrs:{label:"售后编号"}},[a("el-tag",[e._v(e._s(e.aftersaleDetail.aftersaleSn))])],1),e._v(" "),a("el-form-item",{attrs:{label:"订单号"}},[a("el-tag",[e._v(e._s(e.aftersaleDetail.orderId))])],1),e._v(" "),a("el-form-item",{attrs:{label:"订单金额"}},[a("el-tag",[e._v(e._s(e.aftersaleDetail.amount))])],1),e._v(" "),a("el-form-item",{attrs:{label:"订单状态"}},[1===e.aftersaleDetail.status?a("el-tag",[e._v("已申请,待审核")]):e._e(),e._v(" "),2===e.aftersaleDetail.status?a("el-tag",[e._v("审核通过,待退款")]):e._e(),e._v(" "),3===e.aftersaleDetail.status?a("el-tag",[e._v("退款成功")]):e._e(),e._v(" "),4===e.aftersaleDetail.status?a("el-tag",[e._v("审核不通过,已拒绝")]):e._e()],1),e._v(" "),a("el-form-item",{attrs:{label:"订单用户id"}},[a("el-tag",[e._v(e._s(e.aftersaleDetail.userId))])],1),e._v(" "),a("el-form-item",{attrs:{label:"售后类型"}},[0===e.aftersaleDetail.type?a("el-tag",[e._v("未收货退款")]):e._e(),e._v(" "),1===e.aftersaleDetail.type?a("el-tag",[e._v("不退货退款")]):e._e(),e._v(" "),2===e.aftersaleDetail.type?a("el-tag",[e._v("退货退款")]):e._e()],1),e._v(" "),a("el-form-item",{attrs:{label:"退款原因"}},[a("span",[e._v(e._s(e.aftersaleDetail.reason))])]),e._v(" "),a("el-form-item",{attrs:{label:"申请时间"}},[a("span",[e._v(e._s(e.aftersaleDetail.addTime))])]),e._v(" "),a("el-form-item",{attrs:{label:"更新时间"}},[a("span",[e._v(e._s(e.aftersaleDetail.updateTime))])]),e._v(" "),a("el-form-item",{attrs:{label:"处理时间"}},[a("span",[e._v(e._s(e.aftersaleDetail.handleTime))])]),e._v(" "),a("el-form-item",{attrs:{label:"售后图片"}},[a("el-table",{attrs:{data:e.aftersaleDetail.pictures,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"售后图片"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:e.row,target:"_blank"}},[a("img",{attrs:{src:e.row,width:"40"}})])]}}])})],1)],1)],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.aftersaleDialogVisible=!1}}},[e._v("取 消")])],1)])],1)},l=[],n=(a("1bc7"),a("b775"));function s(e){return Object(n["a"])({url:"/aftersale/list",method:"get",params:e})}function r(e){return Object(n["a"])({url:"/aftersale/recept",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/aftersale/batch-recept",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/aftersale/reject",method:"post",data:e})}function u(e){return Object(n["a"])({url:"/aftersale/batch-reject",method:"post",data:e})}function d(e){return Object(n["a"])({url:"/aftersale/refund",method:"post",data:e})}var f=a("0625"),m=a("333d"),p=a("a14a8"),h=a.n(p),v={name:"Aftersale",components:{BackToTop:f["a"],Pagination:m["a"]},data:function(){return{list:[],total:0,listLoading:!0,tab:"all",listQuery:{page:1,limit:20,aftersaleSn:void 0,orderId:void 0,status:"",sort:"add_time",order:"desc"},typeTag:["","success","warning"],typeDesc:["未收货退款","不退货退款","退货退款"],multipleSelection:[],contentDetail:"",contentDialogVisible:!1,downloadLoading:!1,aftersaleDialogVisible:!1,aftersaleDetail:{}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,s(this.listQuery).then((function(t){e.list=t.data.data.list,e.total=t.data.data.total,e.listLoading=!1})).catch((function(){e.list=[],e.total=0,e.listLoading=!1}))},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSelectionChange:function(e){this.multipleSelection=e},handleClick:function(){"all"===this.tab?this.listQuery.status="":"uncheck"===this.tab?this.listQuery.status="1":"unrefund"===this.tab&&(this.listQuery.status="2"),this.getList()},handleRecept:function(e){var t=this;r(e).then((function(e){t.$notify.success({title:"成功",message:"审核通过操作成功"}),t.getList()})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})}))},handleBatchRecept:function(){var e=this;if(0!==this.multipleSelection.length){var t=[];h.a.forEach(this.multipleSelection,(function(e){t.push(e.id)})),o({ids:t}).then((function(t){e.$notify.success({title:"成功",message:"批量通过操作成功"}),e.getList()})).catch((function(t){e.$notify.error({title:"失败",message:t.data.errmsg})}))}else this.$message.error("请选择至少一条记录")},handleReject:function(e){var t=this;c(e).then((function(e){t.$notify.success({title:"成功",message:"审核拒绝操作成功"}),t.getList()})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})}))},handleBatchReject:function(){var e=this;if(0!==this.multipleSelection.length){var t=[];h.a.forEach(this.multipleSelection,(function(e){t.push(e.id)})),u({ids:t}).then((function(t){e.$notify.success({title:"成功",message:"批量拒绝操作成功"}),e.getList()})).catch((function(t){e.$notify.error({title:"失败",message:t.data.errmsg})}))}else this.$message.error("请选择至少一条记录")},handleRefund:function(e){var t=this;d(e).then((function(e){t.$notify.success({title:"成功",message:"退款操作成功"}),t.getList()})).catch((function(e){t.$notify.error({title:"失败",message:e.data.errmsg})}))},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e("chunk-737f9307"),a.e("chunk-2125b98f")]).then(a.bind(null,"4bf8")).then((function(t){var a=["售后编号","订单ID","用户ID","售后类型","退款原因","退款价格","申请时间"],i=["aftersaleSn","orderId","userId","type","reason","amount","addTime"];t.export_json_to_excel2(a,e.list,i,"售后信息"),e.downloadLoading=!1}))},handleRead:function(e){this.aftersaleDetail=e,console.log(this.aftersaleDetail),this.aftersaleDialogVisible=!0}}},b=v,g=a("5d22"),_=Object(g["a"])(b,i,l,!1,null,null,null);t["default"]=_.exports},6396:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),Math.easeInOutQuad=function(e,t,a,i){return e/=i/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function l(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function n(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,a){var s=n(),r=e-s,o=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=o;var n=Math.easeInOutQuad(c,s,r,t);l(n),c<t?i(e):a&&"function"===typeof a&&a()};u()}}}]);