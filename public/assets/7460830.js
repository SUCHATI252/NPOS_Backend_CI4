(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{526:function(t,e,n){"use strict";n.r(e);var r={name:"AppBar"},o=n(33),c=n(31),l=n.n(c),v=n(517),d=n(254),f=n(518),m=n(145),h=n(512),_=n(670),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{dense:"",app:"",flat:"",color:"transparent"}},[n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mr-3",attrs:{id:"theme-guest","aria-label":"theme-dark",icon:""},on:{click:function(e){t.$vuetify.theme.dark=!t.$vuetify.theme.dark}}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-invert-colors")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.$vuetify.theme.dark?"Light":"Dark"))])]),t._v(" "),n("v-btn-toggle",{attrs:{dense:""}},[n("v-btn",{attrs:{to:t.switchLocalePath("th"),"x-small":""}},[t._v("\n      th\n    ")]),t._v(" "),n("v-btn",{attrs:{to:t.switchLocalePath("en"),"x-small":""}},[t._v("\n      en\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAppBar:v.a,VBtn:d.a,VBtnToggle:f.a,VIcon:m.a,VSpacer:h.a,VTooltip:_.a})},824:function(t,e,n){"use strict";n.r(e);var r=n(23),o=(n(3),n(64),n(76),{name:"SettingPage",auth:!1,data:function(){return{qrcode:[],settingdata:{}}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$post("setting").then((function(t){return t}));case 2:t.settingdata=e.sent,console.log(t.settingdata.setting_bank_qrcode);case 4:case"end":return e.stop()}}),e)})))()},methods:{FormData:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){var e=new FormData;for(var n in t)e.append(n,t[n]);return e})),add:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.FormData({img:t.qrcode}),e.next=3,t.$axios.$post("/setting/update",n,{headers:{"Content-type":"multipart/form-data"}}).then((function(e){e.success?t.$store.commit("SET_SUCCESS","Update successfully"):t.$store.commit("SET_ERROR","Error Update")}));case 3:case"end":return e.stop()}}),e)})))()}}}),c=o,l=n(33),v=n(31),d=n.n(v),f=n(254),m=n(235),h=n(55),_=n(529),w=n(507),k=n(699),V=n(524),x=n(672),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("app-bar"),t._v(" "),n("v-row",{staticClass:"mt-n16",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-card",[n("v-card-text",[n("v-form",{on:{submit:function(e){return e.preventDefault(),t.add.apply(null,arguments)}}},[n("v-file-input",{attrs:{accept:"image/*",label:"File input",rounded:""},model:{value:t.qrcode,callback:function(e){t.qrcode=e},expression:"qrcode"}}),t._v(" "),n("v-btn",{attrs:{block:"",type:"submit",color:"primary"}},[t._v("\n              save\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{AppBar:n(526).default}),d()(component,{VBtn:f.a,VCard:m.a,VCardText:h.b,VCol:_.a,VContainer:w.a,VFileInput:k.a,VForm:V.a,VRow:x.a})}}]);