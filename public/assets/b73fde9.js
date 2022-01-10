(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{524:function(e,t,r){"use strict";var n=r(2),o=(r(36),r(49),r(252),r(11),r(3),r(12),r(44),r(85),r(10),r(9),r(13),r(14),r(5)),c=r(91),l=r(110);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(input._uid)||(r.valid=t(input)))})):r.valid=t(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},685:function(e,t,r){"use strict";r(255);var n=r(256);t.a=Object(n.a)("layout")},723:function(e,t,r){"use strict";r.r(t);r(10),r(9),r(11),r(3),r(13),r(12),r(14);var n=r(2);r(26),r(44);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var c={name:"FormUsers",data:function(){return{user_dialog:!1,mode:"",user:{name:"",email:"",phone:""},mask_phone:"###-####-####",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}]}},computed:{FormTitle:function(){return"add"===this.mode?"New User":"Edit User"}},watch:{mode:function(e){"add"===e&&this.reset_form()}},methods:{open:function(e,data){this.user_dialog=!0,this.mode=e,data&&(this.user=function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},data))},close:function(){this.user_dialog=!1,this.reset_form()},reset_form:function(){this.user={name:"",email:"",phone:""}},save:function(){this.$refs.form_add_edit.validate()&&this.$emit(this.mode,this.user)},emailfocus:function(){var e=this;this.user.email="",setTimeout((function(){e.$refs.email.focus()}),50)}}},l=c,d=r(33),f=r(31),m=r.n(f),v=r(254),h=r(235),_=r(55),O=r(510),x=r(496),y=r(704),w=r(524),$=r(145),j=r(685),V=r(512),E=r(527),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{"max-width":"400"},model:{value:e.user_dialog,callback:function(t){e.user_dialog=t},expression:"user_dialog"}},[r("v-card",{},[r("v-form",{ref:"form_add_edit",on:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}},[r("v-card-title",{staticClass:"px-5"},[r("span",{staticClass:"headline"},[e._v(e._s(e.FormTitle))]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.user_dialog=!1}}},[r("v-icon",[e._v("\n            mdi-close\n          ")])],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",{staticClass:"px-10"},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{label:"Name","prepend-inner-icon":"mdi-account",rules:[function(e){return!!e||"enter_name"}],dense:"",filled:"","validate-on-blur":""},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1)],1),e._v(" "),r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{label:"EmailAddress","prepend-inner-icon":"mdi-at",rules:e.emailRules,clearable:"",dense:"",filled:"",disabled:"add"!=e.mode,"validate-on-blur":""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1)],1),e._v(" "),r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:e.mask_phone,expression:"mask_phone"}],attrs:{dense:"","validate-on-blur":"",label:"Phone",filled:"","prepend-inner-icon":"mdi-phone",rules:[function(e){return!!e||"enter_phon"}]},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}})],1)],1)],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-actions",{staticClass:"pb-5 px-10"},[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"error"},on:{click:e.close}},[e._v("\n          CLOSE\n        ")]),e._v(" "),r("v-btn",{attrs:{color:"success",type:"submit"}},[e._v("\n          "+e._s("add"==e.mode?"SAVE":"UPDATE")+"\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:v.a,VCard:h.a,VCardActions:_.a,VCardText:_.b,VCardTitle:_.c,VDialog:O.a,VDivider:x.a,VFlex:y.a,VForm:w.a,VIcon:$.a,VLayout:j.a,VSpacer:V.a,VTextField:E.a})},825:function(e,t,r){"use strict";r.r(t);var n=r(23),o=(r(3),r(64),r(44),r(76),{name:"UserPage",layout:"dashboard",data:function(){return{headers:[{text:"#",align:"start",value:"index"},{text:"Email",value:"email"},{text:"Name",value:"u_name"},{text:"Phone",value:"phone"},{text:"Actions",value:"actions",sortable:!1,align:"right"}],users:[],search:"",user_id:"",confirm:!1,loading_dialog:!1,btnloading:!1,usernameDel:"",UName:""}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$post("/users").then((function(e){return e.users}));case 2:e.users=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{FormData:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){var t=new FormData;for(var r in e)t.append(r,e[r]);return t})),activate:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.$store.commit("LOADIND_DIALOG",!0),r.next=3,t.$axios.$put("/users/Unlock/".concat(e)).then((function(e){t.btnloading=!0,setTimeout((function(){e.success?t.$store.commit("SET_SUCCESS","Activate User success"):t.$store.commit("SET_ERROR","erorr Activate"),t.$fetch(),t.btnloading=!1,t.$store.commit("LOADIND_DIALOG",!1)}),3e3)}));case 3:case"end":return r.stop()}}),r)})))()},submitAdd:function(data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.FormData(data),e.$store.commit("LOADIND_DIALOG",!0),t.next=4,e.$axios.$post("/users/create",r).then((function(t){setTimeout((function(){t.success?e.$store.commit("SET_SUCCESS","Add User success"):409===t.status?(e.$store.commit("SET_ERROR","erorr_email"),e.$refs.UserForm.emailfocus()):e.$store.commit("SET_ERROR","ERROR"),e.$fetch(),e.$refs.UserForm.close(),e.$store.commit("LOADIND_DIALOG",!1)}),1e3)}));case 4:case"end":return t.stop()}}),t)})))()}}}),c=o,l=r(33),d=r(31),f=r.n(d),m=r(254),v=r(235),h=r(55),_=r(507),O=r(811),x=r(496),y=r(704),w=r(145),$=r(512),j=r(527),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-card",{staticClass:"pa-5"},[r("v-data-table",{attrs:{headers:e.headers,items:e.users,search:e.search},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-card-title",[r("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(t){return e.$refs.UserForm.open("add")}}},[r("v-icon",[e._v("mdi-plus-circle-outline")]),e._v(" "),r("span",{staticClass:"ml-1"},[e._v("NEW")])],1),e._v(" "),r("v-divider",{staticClass:"mx-4",attrs:{vertical:""}}),e._v(" "),r("v-spacer"),e._v(" "),r("v-flex",{staticClass:"mb-n6",attrs:{xs3:""}},[r("v-text-field",{attrs:{"append-icon":"mdi-magnify",placeholder:"Search",filled:"",dense:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),e._v(" "),r("div",{staticClass:"py-2"},[r("v-divider")],1)]},proxy:!0},{key:"body",fn:function(t){var n=t.items;return[r("tbody",e._l(n,(function(t,n){return r("tr",{key:n},[r("td",[e._v(e._s(n+1))]),e._v(" "),r("td",[e._v(e._s(t.email))]),e._v(" "),r("td",[e._v(e._s(t.name))]),e._v(" "),r("td",[e._v(e._s(t.phone))]),e._v(" "),r("td",{attrs:{align:"right",colspan:"2"}},["1"!==t.activate?r("v-btn",{staticClass:"mr-2",attrs:{disabled:e.btnloading},domProps:{textContent:e._s("Activate")},on:{click:function(r){return e.activate(t.u_id)}}}):r("v-icon",{attrs:{color:"success"}},[e._v("\n                mdi-check-circle-outline\n              ")])],1)])})),0)]}}])})],1),e._v(" "),r("forms-user",{ref:"UserForm",on:{add:e.submitAdd}})],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{FormsUser:r(723).default}),f()(component,{VBtn:m.a,VCard:v.a,VCardTitle:h.c,VContainer:_.a,VDataTable:O.a,VDivider:x.a,VFlex:y.a,VIcon:w.a,VSpacer:$.a,VTextField:j.a})}}]);