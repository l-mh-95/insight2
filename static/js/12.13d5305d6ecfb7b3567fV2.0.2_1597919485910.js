webpackJsonp([12],{"2WBg":function(t,e){},MpTN:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("mvHQ"),s=i.n(n),o=i("pFYg"),l=i.n(o),a=i("8+FI"),c={data:function(){return{collapse:!1,fullscreen:!1,username:null,nickname:null,avatar_url:null,message:0,user_info_url:"api/user/info"}},computed:{isDesensitive:function(){return JSON.parse(localStorage.getItem("__IS_DESENSITIVE__"))}},methods:{setDesensitive:function(){var t=JSON.parse(localStorage.getItem("__IS_DESENSITIVE__"));console.log(t,void 0===t?"undefined":l()(t)),t?localStorage.setItem("__IS_DESENSITIVE__",!1):localStorage.setItem("__IS_DESENSITIVE__",!0),this.$router.go(0)},getUserInfo:function(){var t=this,e=this;this.$axios.get(this.user_info_url,{}).then(function(i){403==i.data.status_code&&(console.log("未登录"),sessionStorage.removeItem("__UID__"),e.$cookies.remove("__UID__"),e.$router.push("/login")),t.avatar_url=i.data.avatar,t.username=i.data.username,t.nickname=i.data.nickname,t.message=i.data.message_count,sessionStorage.setItem("userinfo",s()(i.data)),1==i.data.iwmo&&e.$watermark.pointMark(t.username)})},handleCommand:function(t){var e=this,i=this;"loginout"==t?this.$axios.get("/api/logout").then(function(t){1==t.data.status?(sessionStorage.removeItem("__UID__"),i.$cookies.remove("__UID__"),e.$router.push("/login")):2==t.data.status?(sessionStorage.removeItem("__UID__"),i.$cookies.remove("__UID__"),window.location.href=t.data.logout_url):e.$message.error("退出失败, 错误码:"+t.data.status)}):"changepw"==t?this.$router.push("/changepw"):"keygen"==t?this.$router.push("/keygen"):"to_frontend"==t&&this.$router.push("/n_paper")},collapseChage:function(){this.collapse=!this.collapse,localStorage.setItem("is_collapse",this.collapse),a.a.$emit("collapse",this.collapse)},handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen}},updated:function(){this.$desensitive()},mounted:function(){var t=this;this.getUserInfo(),a.a.$on("updateUserInfo",function(e){t.getUserInfo()}),document.body.clientWidth<1500&&(this.collapse=!0,a.a.$emit("collapse",this.collapse)),"true"==localStorage.getItem("is_collapse",this.collapse)?(this.collapse=!0,a.a.$emit("collapse",this.collapse)):"false"===localStorage.getItem("is_collapse",this.collapse)&&(this.collapse=!1,a.a.$emit("collapse",this.collapse))}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{staticClass:"collapse-btn insight2_logo",on:{click:t.collapseChage}},[i("img",{staticStyle:{height:"20px",width:"20px","margin-right":"5px","margin-top":"10px"},attrs:{src:"static/img/logo.png"}})]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"header-right"},[i("div",{staticClass:"header-user-con"},[i("div",{staticStyle:{"margin-top":"8px","margin-right":"5px",cursor:"pointer","font-size":"18px"}},[i("el-tooltip",{attrs:{effect:"dark",content:t.isDesensitive?"取消前端脱敏":"前端脱敏",placement:"bottom"}},[i("span",{staticStyle:{"margin-right":"1em","margin-top":"5px"},on:{click:function(e){return t.setDesensitive()}}},[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.isDesensitive,expression:"!isDesensitive"}]},[i("svg",{staticClass:"icon",attrs:{t:"1577780413607",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2170",width:"15",height:"15"}},[i("path",{attrs:{d:"M391.529412 262.144c30.117647-12.047059 60.235294-18.070588 90.352941-18.070588 120.470588 0 216.847059 96.376471 216.847059 216.847059 0 30.117647-6.023529 60.235294-18.070588 90.352941l126.494117 126.494117c66.258824-54.211765 120.470588-126.494118 156.611765-210.823529-78.305882-192.752941-259.011765-325.270588-481.882353-325.270588-66.258824 0-126.494118 12.047059-180.705882 36.141176l90.352941 84.329412z","p-id":"2171"}}),i("path",{attrs:{d:"M481.882353 334.426353h-18.070588l150.588235 150.588235v-18.070588c-6.023529-78.305882-60.235294-132.517647-132.517647-132.517647zM825.223529 804.261647L84.329412 63.367529l-60.235294 60.235295 126.494117 126.494117c-60.235294 54.211765-120.470588 132.517647-150.588235 210.82353 78.305882 192.752941 259.011765 325.270588 481.882353 325.270588 66.258824 0 126.494118-12.047059 180.705882-36.141177l108.42353 108.42353 54.211764-54.211765z m-343.341176-120.470588c-120.470588 0-216.847059-96.376471-216.847059-216.847059 0-30.117647 6.023529-60.235294 18.070588-90.352941l72.282353 72.282353v18.070588c0 72.282353 60.235294 132.517647 132.517647 132.517647h18.070589l60.235294 66.258824c-24.094118 12.047059-54.211765 18.070588-84.329412 18.070588z",fill:"#3e9b87f3","p-id":"2172"}})])]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.isDesensitive,expression:"isDesensitive"}]},[i("svg",{staticClass:"icon",attrs:{t:"1577780696858",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2283",width:"15",height:"15"}},[i("path",{attrs:{d:"M512 160c-230.4 0-428.8 147.2-512 345.6 83.2 204.8 275.2 345.6 512 345.6s428.8-147.2 512-345.6c-83.2-198.4-281.6-345.6-512-345.6z m0 582.4C384 742.4 281.6 640 281.6 512S384 275.2 512 275.2s230.4 102.4 230.4 230.4S640 742.4 512 742.4z m0-371.2c-76.8 0-140.8 64-140.8 140.8s64 140.8 140.8 140.8 140.8-64 140.8-140.8-64-140.8-140.8-140.8z",fill:"#3e9b87f3","p-id":"2284"}})])])])])],1),t._v(" "),i("div",{staticStyle:{"margin-top":"5px","margin-right":"5px",cursor:"pointer","font-size":"18px"}},[i("el-tooltip",{attrs:{effect:"dark",content:"我的日程",placement:"bottom"}},[i("span",{on:{click:function(e){return t.$router.push("calendar")}}},[i("i",{staticClass:"iconfont el-iconricheng4"})])])],1),t._v(" "),i("div",{staticStyle:{"margin-top":"5px","margin-right":"0px",cursor:"pointer","font-size":"18px"}},[i("el-tooltip",{attrs:{effect:"dark",content:"假的二维码，其实是CVSS计算",placement:"bottom"}},[i("span",{on:{click:function(e){return t.$router.push("cvss")}}},[i("i",{staticClass:"iconfont el-iconqrcode"})])])],1),t._v(" "),i("div",{staticClass:"btn-fullscreen",on:{click:t.handleFullScreen}},[i("el-tooltip",{attrs:{effect:"dark",content:t.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[i("i",{staticClass:"el-icon-rank"})])],1),t._v(" "),i("div",{staticClass:"btn-bell"},[i("el-tooltip",{attrs:{effect:"dark",content:t.message?"有"+t.message+"条未读消息":"消息中心",placement:"bottom"}},[i("router-link",{attrs:{to:"/notification"}},[i("i",{staticClass:"el-icon-message-solid",staticStyle:{"margin-top":"8px",height:"31px","font-size":"18px"}})])],1),t._v(" "),t.message?i("span",{staticClass:"btn-bell-badge"}):t._e()],1),t._v(" "),t._m(1),t._v(" "),i("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:t.handleCommand}},[i("span",{staticClass:"el-dropdown-link"},[t._v("\n                   "+t._s(t.nickname?t.nickname:t.username?t.username:"-")+" "),i("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{command:"keygen"}},[t._v("API v1 KEY生成")]),t._v(" "),i("el-dropdown-item",{attrs:{command:"changepw"}},[t._v("修改密码")]),t._v(" "),i("el-dropdown-item",{attrs:{command:"to_frontend"}},[t._v("前台      ")]),t._v(" "),i("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[i("i",{staticClass:"iconfont el-tuichu1"}),t._v(" "+t._s(t.$t("label.exit")))])],1)],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{staticStyle:{height:"13px","margin-top":"5px"},attrs:{src:"static/img/insight_2_logo.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-avator"},[e("img",{attrs:{src:"static/img/logo.png"}})])}]};var u=i("VU/8")(c,r,!1,function(t){i("2WBg")},"data-v-e2eaa070",null).exports,p=i("X2Oc"),d=i("rBKV"),m=i.n(d),h={data:function(){return{collapse:!1,permission_list:"",app_version:m.a.APP_VERSION,items:[{icon:"iconfont el-icontubiao1",index:"dashboard",title:this.$t("title.system_index"),permission:"default_show"},{icon:"iconfont  el-iconloudong",index:"1",title:this.$t("title.vul"),permission:["action.vul.VulList","action.vullog.VulLogList"],subs:[{icon:"iconfont  el-iconloudong2",index:"vulns",title:this.$t("title.vul"),permission:"action.vul.VulList"},{icon:"iconfont  el-iconccgl-tongbucaozuorizhi-4",index:"vulnlog",title:this.$t("title.log"),permission:"action.vullog.VulLogList"}]},{icon:"iconfont  el-iconzichan1",index:"3",title:this.$t("title.asset"),permission:["action.assets.AssetList","action.app.AppList"],subs:[{icon:"iconfont  el-iconyingyong",index:"app",title:this.$t("title.app"),permission:"action.app.AppList"},{icon:"iconfont  el-iconzichan",index:"asset",title:this.$t("title.asset"),permission:"action.assets.AssetList"}]},{icon:"iconfont  el-iconwenzhang1",index:"4",title:this.$t("title.knowledge"),subs:[{icon:"iconfont el-iconwendangdocument69",index:"paper",title:this.$t("title.paper"),permission:"default_show"}]},{icon:"iconfont  el-iconyonghu",index:"2",title:this.$t("title.user"),permission:["action.user.UserList","action.groupuser.GroupUserList","action.role.RoleList"],subs:[{icon:"iconfont  el-iconyonghu",index:"user",title:this.$t("title.user"),permission:"action.user.UserList"},{icon:"iconfont  el-iconjiaose",index:"role",title:this.$t("title.role"),permission:"action.role.RoleList"},{icon:"iconfont el-iconyonghuzu1",index:"usergroup",title:this.$t("title.group"),permission:"action.groupuser.GroupUserList"}]},{icon:"iconfont  el-iconzichan",index:"5",title:this.$t("title.philistine"),permission:["action.point.PointList"],subs:[{icon:"iconfont el-iconjifen1",index:"pointrecord",title:this.$t("title.point"),permission:"action.point.PointList"}]},{icon:"iconfont el-iconshujupeizhi",index:"setting",title:this.$t("title.setting"),permission:["action.system.SystemConfig"]},{icon:"iconfont el-iconwendangdocument69",index:"doc",title:this.$t("title.doc"),permission:["action.system.SystemConfig"],subs:[{icon:"iconfont el-iconwendangdocument69",index:"doc",title:this.$t("title.doc"),permission:"default_show"},{icon:"iconfont el-iconwendangdocument69",index:"markdowndoc",title:this.$t("title.use"),permission:"default_show"}]},{icon:"iconfont el-iconapi",index:"extension",title:this.$t("title.ext"),permission:["action.extension.ExtensionList"],subs:[{icon:"iconfont el-iconapi",index:"extension",title:this.$t("title.ext"),permission:["action.extension.ExtensionList"]},{icon:"iconfont el-iconwendangdocument69",index:"cron",title:this.$t("title.cron"),permission:"default_show"}]}]}},methods:{},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var t=this;this.permission_list=Object(p.d)("__ROLELIST__")?Object(p.d)("__ROLELIST__"):"",a.a.$on("collapse",function(e){t.collapse=e})}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"sidebar"},[i("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"unique-opened":"",router:""}},[t._l(t.items,function(e){return[e.subs?[i("el-submenu",{key:e.index,attrs:{index:e.index}},[i("template",{slot:"title"},[i("i",{class:e.icon}),t._v(" "),i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._v(" "),t._l(e.subs,function(e,n){return i("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:t.permission_list.contains(e.permission)||"default_show"==e.permission,expression:"permission_list.contains(subItem.permission)||subItem.permission=='default_show'"}],key:n,staticStyle:{"line-height":"40px"},attrs:{index:e.index}},[i("i",{class:e.icon}),t._v(" "),i("span",{staticStyle:{"font-size":"10px !important"}},[t._v(t._s(e.title))])])})],2)]:[t.permission_list.containsList(e.permission)||"default_show"==e.permission?i("el-menu-item",{key:e.index,attrs:{index:e.index}},[i("i",{class:e.icon}),t._v(" "),i("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]):t._e()]]}),t._v(" "),i("el-menu-item",{attrs:{index:"markdowndoc"}},[i("hr"),t._v(" "),i("div",{staticStyle:{"text-align":"center","font-weight":"bold",color:"#606266"}},[t._v(t._s(t.collapse?t.app_version.substring(0,2):t.app_version))])])],2)],1)},staticRenderFns:[]};var _={data:function(){return{collapse:!1}},components:{vHead:u,vSidebar:i("VU/8")(h,g,!1,function(t){i("Z5o0")},"data-v-78cb9599",null).exports},created:function(){var t=this,e=navigator.language||navigator.userLanguage;if(void 0===this.lang){var i=window.localStorage.getItem("locale_lang");void 0===i?this.lang="zh":(this.lang=i,this.$i18n.locale=i)}this.lang!=e.split("-")[0]&&this.$confirm("检测到您当前的浏览器语言为 ["+e+"], 确定切换语言吗?","提示",{confirmButtonText:"确认(confirm)",cancelButtonText:"取消(cancel)",type:"warning"}).then(function(){var i=e.split("-")[0];"zh"===i||"en"===i?(t.lang=i,t.$i18n.locale=i,window.localStorage.setItem("locale_lang",i)):(t.$i18n.locale="en",window.localStorage.setItem("locale_lang","en")),history.go(0)}).catch(function(t){window.localStorage.setItem("locale_lang","zh"),-1=="en-US".indexOf(e)&&history.go(0)}),a.a.$on("collapse",function(e){t.collapse=e})}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("v-head"),this._v(" "),e("v-sidebar"),this._v(" "),e("div",{staticClass:"content-box",class:{"content-collapse":this.collapse}},[e("div",{staticClass:"content"},[e("transition",{attrs:{name:"move",mode:"out-in"}},[this.$route.meta.noKeepAlive?e("div",[e("router-view")],1):e("div",[e("keep-alive",[e("router-view")],1)],1)])],1)])],1)},staticRenderFns:[]},f=i("VU/8")(_,v,!1,null,null,null);e.default=f.exports},Z5o0:function(t,e){}});