webpackJsonp([23],{"3Jcb":function(t,e){},q1rA:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mvHQ"),s=a.n(n),o=a("pFYg"),i=a.n(o),l=a("8+FI"),r=a("X2Oc"),c={data:function(){return{activeIndex:"1",fullscreen:!1,username:null,nickname:null,avatar_url:null,todo_vul_count:null,done_vul_count:null,collapse:!1,message:0,total_points:null,available_points:null,user_info_url:"api/user/info"}},computed:{isDesensitive:function(){return JSON.parse(localStorage.getItem("__IS_DESENSITIVE__"))}},methods:{setDesensitive:function(){var t=JSON.parse(localStorage.getItem("__IS_DESENSITIVE__"));console.log(t,void 0===t?"undefined":i()(t)),t?localStorage.setItem("__IS_DESENSITIVE__",!1):localStorage.setItem("__IS_DESENSITIVE__",!0),this.$router.go(0)},getUserInfo:function(){var t=this,e=this;this.$axios.get(this.user_info_url,{}).then(function(a){403==a.data.status_code&&(e.$message.error("未登录"),sessionStorage.removeItem("__UID__"),e.$cookies.remove("__UID__"),e.$router.push("/login")),t.avatar_url=a.data.avatar,t.username=a.data.username,t.nickname=a.data.nickname,t.message=a.data.message_count,t.total_points=a.data.total_points,t.available_points=a.data.available_points,t.done_vul_count=a.data.done_vul_count,t.todo_vul_count=a.data.todo_vul_count,sessionStorage.setItem("userinfo",s()(a.data)),1==a.data.iwmo&&e.$watermark.pointMark(t.username),Object(r.a)(a.data,"NHome")})},handleCommand:function(t){var e=this;if("logout"==t){var a=this;this.$axios.get("/api/logout").then(function(t){1==t.data.status?(Object(r.a)("退出登录"),sessionStorage.removeItem("__UID__"),a.$cookies.remove("__UID__"),e.$router.push("/login")):2==t.data.status?(sessionStorage.removeItem("__UID__"),a.$cookies.remove("__UID__"),window.location.href=t.data.logout_url):403==t.data.status_code?(sessionStorage.removeItem("__UID__"),a.$cookies.remove("__UID__"),e.$router.push("/login")):e.$message.error("退出失败, 错误码:"+t.data.status)})}else"n_personal_setting"==t?this.$router.push("/n_personal_setting"):"n_changepw"==t?this.$router.push("/n_changepw"):"n_pointrecord"==t&&this.$router.push("/n_pointrecord")},handleSelect:function(t,e){Object(r.a)(t,e),this.getUserInfo(),this.$router.push("/"+t)},handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen}},created:function(){var t=this;this.getUserInfo(),l.a.$on("updateUserInfo",function(e){t.getUserInfo()});var e=navigator.language||navigator.userLanguage;if(void 0===this.lang){var a=window.localStorage.getItem("locale_lang");void 0===a?this.lang="zh":(this.lang=a,this.$i18n.locale=a)}this.lang!=e.split("-")[0]&&this.$confirm("检测到您当前的浏览器语言为 ["+e+"], 确定切换语言吗?","提示",{confirmButtonText:"确认(confirm)",cancelButtonText:"取消(cancel)",type:"warning"}).then(function(){var a=e.split("-")[0];"zh"===a||"en"===a?(t.lang=a,t.$i18n.locale=a,window.localStorage.setItem("locale_lang",a)):(t.$i18n.locale="en",window.localStorage.setItem("locale_lang","en")),history.go(0)}).catch(function(t){}),l.a.$on("collapse",function(e){t.collapse=e})}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"center-content"},[a("div",{staticClass:"header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticStyle:{float:"left",height:"50px"}},[a("el-menu",{staticStyle:{height:"40px","margin-top":"-10px"},attrs:{"default-active":t.activeIndex,"background-color":"#ffffff20",mode:"horizontal"},on:{select:t.handleSelect}},[a("el-menu-item",{attrs:{index:"n_dashboard"}},[t._v("面板")]),t._v(" "),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[t._v("我的")]),t._v(" "),a("el-menu-item",{attrs:{index:"n_my_vulns"}},[t._v("待处理漏洞 ("+t._s(t.todo_vul_count?t.todo_vul_count:"0")+")")]),t._v(" "),a("el-menu-item",{attrs:{index:"n_my_done_vulns"}},[t._v("已完成漏洞 ("+t._s(t.done_vul_count?t.done_vul_count:"0")+")")])],2),t._v(" "),a("el-menu-item",{attrs:{index:"n_open_vulns"}},[t._v("公开漏洞")]),t._v(" "),a("el-menu-item",{attrs:{index:"n_paper"}},[t._v("知识")]),t._v(" "),a("el-menu-item",{attrs:{index:"n_pointrecord"}},[t._v("积分")])],1)],1),t._v(" "),a("div",{staticClass:"header-right"},[a("div",{staticClass:"header-user-con"},[a("div",{staticStyle:{"margin-top":"8px","margin-right":"5px",cursor:"pointer","font-size":"18px"}},[a("el-tooltip",{attrs:{effect:"dark",content:t.isDesensitive?"取消前端脱敏":"前端脱敏",placement:"bottom"}},[a("span",{staticStyle:{"margin-right":"1em","margin-top":"5px"},on:{click:function(e){return t.setDesensitive()}}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!t.isDesensitive,expression:"!isDesensitive"}]},[a("svg",{staticClass:"icon",attrs:{t:"1577780413607",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2170",width:"15",height:"15"}},[a("path",{attrs:{d:"M391.529412 262.144c30.117647-12.047059 60.235294-18.070588 90.352941-18.070588 120.470588 0 216.847059 96.376471 216.847059 216.847059 0 30.117647-6.023529 60.235294-18.070588 90.352941l126.494117 126.494117c66.258824-54.211765 120.470588-126.494118 156.611765-210.823529-78.305882-192.752941-259.011765-325.270588-481.882353-325.270588-66.258824 0-126.494118 12.047059-180.705882 36.141176l90.352941 84.329412z","p-id":"2171"}}),t._v(" "),a("path",{attrs:{d:"M481.882353 334.426353h-18.070588l150.588235 150.588235v-18.070588c-6.023529-78.305882-60.235294-132.517647-132.517647-132.517647zM825.223529 804.261647L84.329412 63.367529l-60.235294 60.235295 126.494117 126.494117c-60.235294 54.211765-120.470588 132.517647-150.588235 210.82353 78.305882 192.752941 259.011765 325.270588 481.882353 325.270588 66.258824 0 126.494118-12.047059 180.705882-36.141177l108.42353 108.42353 54.211764-54.211765z m-343.341176-120.470588c-120.470588 0-216.847059-96.376471-216.847059-216.847059 0-30.117647 6.023529-60.235294 18.070588-90.352941l72.282353 72.282353v18.070588c0 72.282353 60.235294 132.517647 132.517647 132.517647h18.070589l60.235294 66.258824c-24.094118 12.047059-54.211765 18.070588-84.329412 18.070588z",fill:"#3e9b87f3","p-id":"2172"}})])]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isDesensitive,expression:"isDesensitive"}]},[a("svg",{staticClass:"icon",attrs:{t:"1577780696858",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2283",width:"15",height:"15"}},[a("path",{attrs:{d:"M512 160c-230.4 0-428.8 147.2-512 345.6 83.2 204.8 275.2 345.6 512 345.6s428.8-147.2 512-345.6c-83.2-198.4-281.6-345.6-512-345.6z m0 582.4C384 742.4 281.6 640 281.6 512S384 275.2 512 275.2s230.4 102.4 230.4 230.4S640 742.4 512 742.4z m0-371.2c-76.8 0-140.8 64-140.8 140.8s64 140.8 140.8 140.8 140.8-64 140.8-140.8-64-140.8-140.8-140.8z",fill:"#3e9b87f3","p-id":"2284"}})])])])])],1),t._v(" "),a("div",{staticClass:"btn-fullscreen",on:{click:t.handleFullScreen}},[a("el-tooltip",{attrs:{effect:"dark",content:t.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[a("i",{staticClass:"el-icon-rank"})])],1),t._v(" "),a("div",{staticClass:"btn-bell"},[a("el-tooltip",{attrs:{effect:"dark",content:t.message?"有"+t.message+"条未读消息":"消息中心",placement:"bottom"}},[a("router-link",{attrs:{to:"/n_notification"}},[a("i",{staticClass:"el-icon-message-solid",staticStyle:{"margin-top":"8px",height:"31px","font-size":"18px"}})])],1),t._v(" "),t.message?a("span",{staticClass:"btn-bell-badge"}):t._e()],1),t._v(" "),a("el-popover",{attrs:{placement:"bottom-end",width:"250",trigger:"hover"}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t._v(t._s(t.nickname?t.nickname:t.username?t.username:"-"))]),t._v(" "),a("div",{staticStyle:{"margin-bottom":"20px","padding-bottom":"30px"}},[a("div",{staticClass:"user-avator-big",staticStyle:{float:"left"}},[a("img",{attrs:{src:t.avatar_url?t.avatar_url:"static/img/logo.png"}})]),t._v(" "),a("div",{staticStyle:{float:"right",padding:"3px 0"}},[a("div",[t._v("总积分: "+t._s(null!=t.total_points?t.total_points:"未知"))]),t._v(" "),a("div",{staticStyle:{float:"right",padding:"3px 0"}},[t._v("可用积分: "+t._s(null!=t.available_points?t.available_points:"未知"))])])])]),t._v(" "),a("div",{staticClass:"user-avator",attrs:{slot:"reference"},slot:"reference"},[a("img",{attrs:{src:t.avatar_url?t.avatar_url:"static/img/logo.png"}})])],1),t._v(" "),a("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:t.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[t._v("\n            "+t._s(t.nickname?t.nickname:t.username?t.username:"-")+"\n            "),a("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"n_personal_setting"}},[t._v("个人设置")]),t._v(" "),a("el-dropdown-item",{attrs:{command:"n_changepw"}},[t._v("修改密码")]),t._v(" "),a("el-dropdown-item",{attrs:{divided:"",command:"logout"}},[t._v(t._s(t.$t("label.exit")))])],1)],1)],1)])]),t._v(" "),a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"content"},[a("transition",{attrs:{name:"move",mode:"out-in"}},[a("router-view")],1)],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"collapse-btn insight2_logo"},[e("img",{staticStyle:{height:"15px",width:"15px","margin-right":"5px","margin-top":"13px"},attrs:{src:"static/img/logo.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{staticStyle:{height:"13px","margin-top":"5px"},attrs:{src:"static/img/insight_2_logo.png"}})])}]};var _=a("VU/8")(c,u,!1,function(t){a("3Jcb")},"data-v-469854e8",null);e.default=_.exports}});