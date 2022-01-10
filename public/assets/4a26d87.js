(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{524:function(t,e,n){"use strict";var r=n(2),o=(n(36),n(49),n(252),n(11),n(3),n(12),n(44),n(85),n(10),n(9),n(13),n(14),n(5)),c=n(91),l=n(110);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},529:function(t,e,n){"use strict";n(9),n(11),n(13),n(14);var r=n(2),o=(n(3),n(25),n(10),n(26),n(80),n(329),n(41),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(46),n(36),n(12),n(81),n(343),n(1)),c=n(86),l=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),w=h.reduce((function(t,e){return t["offset"+Object(l.F)(e)]={type:[String,Number],default:null},t}),{}),m=h.reduce((function(t,e){return t["order"+Object(l.F)(e)]={type:[String,Number],default:null},t}),{}),_={col:Object.keys(v),offset:Object.keys(w),order:Object.keys(m)};function y(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var O=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},w),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in n)l+=String(n[d]);var f=O.get(l);return f||function(){var t,e;for(e in f=[],_)_[e].forEach((function(t){var r=n[t],o=y(e,t,r);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),O.set(l,f)}(),t(n.tag,Object(c.a)(data,{class:f}),o)}})},672:function(t,e,n){"use strict";n(9),n(11),n(13),n(14);var r=n(2),o=(n(3),n(36),n(49),n(27),n(10),n(26),n(80),n(329),n(41),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(46),n(12),n(343),n(1)),c=n(86),l=n(0);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=["start","end","center"];function w(t,e){return h.reduce((function(n,r){return n[t+Object(l.F)(r)]=e(),n}),{})}var m=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},_=w("align",(function(){return{type:String,default:null,validator:m}})),y=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},O=w("justify",(function(){return{type:String,default:null,validator:y}})),j=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},S=w("alignContent",(function(){return{type:String,default:null,validator:j}})),x={align:Object.keys(_),justify:Object.keys(O),alignContent:Object.keys(S)},k={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,n){var r=k[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var P=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:m}},_),{},{justify:{type:String,default:null,validator:y}},O),{},{alignContent:{type:String,default:null,validator:j}},S),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var f=P.get(l);return f||function(){var t,e;for(e in f=[],x)x[e].forEach((function(t){var r=n[t],o=C(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),P.set(l,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},695:function(t,e,n){var content=n(696);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("12a190a6",content,!0,{sourceMap:!1})},696:function(t,e,n){var r=n(17)(!1);r.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),t.exports=r},738:function(t,e,n){"use strict";n(10),n(9),n(11),n(13),n(12),n(14);var r=n(78),o=n(2),c=(n(3),n(64),n(695),n(347),n(84)),l=n(132),d=n(262),f=["title"];function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=d.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return v(v({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,f));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",v(v({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},742:function(t,e,n){"use strict";var r=n(154),o=n(37),c=n(5),l=n(8);e.a=Object(c.a)(r.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},827:function(t,e,n){"use strict";n.r(e);var r=n(23),o=(n(76),n(44),{name:"ProfilePage",layout:"dashboard",data:function(){return{chang_pass_dialog:!1,showpass1:!1,showpass2:!1,showpass3:!1,showicon1:!1,showicon2:!1,showicon3:!1,old_password:"",new_password:"",new_pass_try:""}},computed:{confirm_password:function(){return this.new_pass_try===this.new_password}},watch:{chang_pass_dialog:function(t){t||this.$refs.changpass_form.resetValidation()},old_password:function(t){this.showicon1=!!t},new_password:function(t){this.showicon2=!!t},new_pass_try:function(t){this.showicon3=!!t},showpass1:function(t){var e=this;t&&setTimeout((function(){e.showpass1=!1}),1e3)},showpass2:function(t){var e=this;t&&setTimeout((function(){e.showpass2=!1}),1e3)},showpass3:function(t){var e=this;t&&setTimeout((function(){e.showpass3=!1}),1e3)}},methods:{changpassword:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$refs.changpass_form.validate()){e.next=6;break}return t.chang_pass_dialog=!1,t.$store.commit("SET_OVERLAY",!0),data=t.FormData({old_password:t.old_password,new_password:t.new_password}),e.next=6,t.$axios.$post("/users/chang_password",data).then((function(e){setTimeout((function(){e.error_password?(t.old_password="",t.new_password="",t.new_pass_try="",t.$store.commit("SET_ERROR","ERROR PASSWORD")):e.success?(t.$store.commit("SET_OVERLAY",!1),t.$store.commit("SET_SUCCESS","CHANG PASSWORD SUCCESS...")):(t.old_password="",t.new_password="",t.new_pass_try="",t.$store.commit("SET_ERROR","ERROR ID"))}),3e3)}));case 6:case"end":return e.stop()}}),e)})))()}}}),c=n(33),l=n(31),d=n.n(l),f=n(234),h=n(254),v=n(235),w=n(55),m=n(738),_=n(529),y=n(507),O=n(510),j=n(496),S=n(524),x=n(742),k=n(145),C=n(193),P=n(672),$=n(512),E=n(527),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-5"},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"8"}},[n("v-card",[n("v-card-title",[t._v("\n          Edit Profile\n        ")]),t._v(" "),n("v-card-text",[n("v-form",{ref:"form",attrs:{"lazy-validation":""}},[n("v-text-field",{attrs:{label:"Name",required:""}}),t._v(" "),n("v-text-field",{attrs:{label:"E-mail",required:""}}),t._v(" "),n("v-checkbox",{attrs:{rules:[function(t){return!!t||"You must agree to continue!"}],label:"Do you agree?",required:""}}),t._v(" "),n("v-btn",{staticClass:"mr-4",attrs:{color:"success"}},[t._v("\n              Validate\n            ")])],1)],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-card",{staticClass:"pa-3"},[n("v-card-title",{staticClass:"justify-center"},[n("div",{staticClass:"text-center"},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("v-avatar",{attrs:{size:"120"}},[n("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}},[n("v-row",{staticClass:"fill-height",attrs:{justify:"center",align:"end"}},[r?n("v-btn",{attrs:{text:"",block:""}},[n("v-icon",{attrs:{color:"white"}},[t._v("\n                        mdi-image-edit-outline\n                      ")])],1):t._e()],1)],1)],1)]}}])}),t._v(" "),n("div",{staticClass:"text-h5 pt-3"},[t._v("\n              "+t._s(t.$auth.user.name)+"\n            ")]),t._v(" "),n("div",{staticClass:"grey--text text-subtitle-1"},[t._v("\n              "+t._s(t.$auth.user.email)+"\n            ")])],1)]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",[n("div",{staticClass:"text-center"},[t._v("\n            Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.\n          ")])]),t._v(" "),n("v-card-actions",[n("v-dialog",{attrs:{width:"400"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{block:"",color:"success",rounded:"",large:""}},"v-btn",o,!1),r),[t._v("\n                chang password\n              ")])]}}]),model:{value:t.chang_pass_dialog,callback:function(e){t.chang_pass_dialog=e},expression:"chang_pass_dialog"}},[t._v(" "),n("v-card",[n("v-form",{ref:"changpass_form",on:{submit:function(e){return e.preventDefault(),t.changpassword.apply(null,arguments)}}},[n("v-card-title",[n("span",[t._v("Chang Password")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.chang_pass_dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),n("v-card-text",{staticClass:"px-10"},[n("v-text-field",{ref:"old_password",staticClass:"login",attrs:{"prepend-inner-icon":"mdi-lock-outline",label:"You Password","append-icon":t.showicon1?t.showpass1?"mdi-eye":"mdi-eye-off":"",type:t.showpass1?"text":"password",counter:"","validate-on-blur":"",rules:[function(e){return!!e||t.$t("login.val_password")},function(e){return e.length>=8||t.$t("login.val_min8")}]},on:{"click:append":function(e){t.showpass1=!t.showpass1}},model:{value:t.old_password,callback:function(e){t.old_password=e},expression:"old_password"}}),t._v(" "),n("v-text-field",{ref:"new_password",staticClass:"login",attrs:{"prepend-inner-icon":"mdi-lock-outline",label:"New password","append-icon":t.showicon2?t.showpass2?"mdi-eye":"mdi-eye-off":"",type:t.showpass2?"text":"password",counter:"","validate-on-blur":"",rules:[function(e){return!!e||t.$t("login.val_password")},function(e){return e.length>=8||t.$t("login.val_min8")}]},on:{"click:append":function(e){t.showpass2=!t.showpass2}},model:{value:t.new_password,callback:function(e){t.new_password=e},expression:"new_password"}}),t._v(" "),n("v-text-field",{ref:"new_pass_try",staticClass:"login",attrs:{"prepend-inner-icon":"mdi-lock-outline",label:"Comfirm New password","append-icon":t.showicon3?t.showpass3?"mdi-eye":"mdi-eye-off":"",type:t.showpass3?"text":"password",counter:"","validate-on-blur":"",rules:[function(e){return!!e||t.$t("login.val_password")},function(e){return e.length>=8||t.$t("login.val_min8")},t.confirm_password||t.$t("dashboard.some_value")]},on:{"click:append":function(e){t.showpass3=!t.showpass3}},model:{value:t.new_pass_try,callback:function(e){t.new_pass_try=e},expression:"new_pass_try"}})],1),t._v(" "),n("v-card-actions",{staticClass:"px-10 pb-10"},[n("v-btn",{attrs:{large:"",rounded:"",block:"",type:"submit",color:"primary"}},[t._v("\n                    changpassword\n                  ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAvatar:f.a,VBtn:h.a,VCard:v.a,VCardActions:w.a,VCardText:w.b,VCardTitle:w.c,VCheckbox:m.a,VCol:_.a,VContainer:y.a,VDialog:O.a,VDivider:j.a,VForm:S.a,VHover:x.a,VIcon:k.a,VImg:C.a,VRow:P.a,VSpacer:$.a,VTextField:E.a})}}]);