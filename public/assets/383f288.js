(window.webpackJsonp=window.webpackJsonp||[]).push([[37,10],{522:function(t,e,n){var content=n(523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("dc0628f2",content,!0,{sourceMap:!1})},523:function(t,e,n){var o=n(17)(!1);o.push([t.i,".v-tooltip{display:none}.v-tooltip--attached{display:inline}.v-tooltip__content{background:rgba(97,97,97,.9);color:#fff;border-radius:4px;font-size:14px;line-height:22px;display:inline-block;padding:5px 16px;position:absolute;text-transform:none;width:auto;opacity:0;pointer-events:none}.v-tooltip__content.menuable__content__active{opacity:.9}.v-tooltip__content--fixed{position:fixed}.v-tooltip__content[class*=-active]{transition-timing-function:cubic-bezier(0,0,.2,1)}.v-tooltip__content[class*=enter-active]{transition-duration:.15s}.v-tooltip__content[class*=leave-active]{transition-duration:75ms}",""]),t.exports=o},524:function(t,e,n){"use strict";var o=n(2),r=(n(36),n(49),n(252),n(11),n(3),n(12),n(44),n(85),n(10),n(9),n(13),n(14),n(5)),c=n(91),l=n(110);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(r.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:d({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},526:function(t,e,n){"use strict";n.r(e);var o={name:"AppBar"},r=n(33),c=n(31),l=n.n(c),h=n(517),d=n(254),f=n(518),m=n(145),v=n(512),_=n(670),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{dense:"",app:"",flat:"",color:"transparent"}},[n("v-spacer"),t._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mr-3",attrs:{id:"theme-guest","aria-label":"theme-dark",icon:""},on:{click:function(e){t.$vuetify.theme.dark=!t.$vuetify.theme.dark}}},"v-btn",r,!1),o),[n("v-icon",[t._v("mdi-invert-colors")])],1)]}}])},[t._v(" "),n("span",[t._v(t._s(t.$vuetify.theme.dark?"Light":"Dark"))])]),t._v(" "),n("v-btn-toggle",{attrs:{dense:""}},[n("v-btn",{attrs:{to:t.switchLocalePath("th"),"x-small":""}},[t._v("\n      th\n    ")]),t._v(" "),n("v-btn",{attrs:{to:t.switchLocalePath("en"),"x-small":""}},[t._v("\n      en\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAppBar:h.a,VBtn:d.a,VBtnToggle:f.a,VIcon:m.a,VSpacer:v.a,VTooltip:_.a})},529:function(t,e,n){"use strict";n(9),n(11),n(13),n(14);var o=n(2),r=(n(3),n(25),n(10),n(26),n(80),n(329),n(41),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(342),n(46),n(36),n(12),n(81),n(343),n(1)),c=n(86),l=n(0);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],m=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),v=f.reduce((function(t,e){return t["offset"+Object(l.F)(e)]={type:[String,Number],default:null},t}),{}),_=f.reduce((function(t,e){return t["order"+Object(l.F)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(m),offset:Object.keys(v),order:Object.keys(_)};function y(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var w=new Map;e.a=r.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,l=(e.parent,"");for(var h in n)l+=String(n[h]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],O)O[e].forEach((function(t){var o=n[t],r=y(e,t,o);r&&d.push(r)}));var r=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),r)}})},670:function(t,e,n){"use strict";var o=n(2),r=(n(25),n(522),n(103)),c=n(24),l=n(154),h=n(111),d=n(199),f=n(37),m=n(0),v=n(8),_=n(5);e.a=Object(_.a)(c.a,l.a,h.a,d.a,f.a).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!(this.bottom||this.left||this.top||this.right),o=!1!==this.attach?e.offsetLeft:e.left,r=0;return this.top||this.bottom||n?r=o+e.width/2-content.width/2:(this.left||this.right)&&(r=o+(this.right?e.width:-content.width)+(this.right?10:-10)),this.nudgeLeft&&(r-=parseInt(this.nudgeLeft)),this.nudgeRight&&(r+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(r,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,content=t.content,n=!1!==this.attach?e.offsetTop:e.top,o=0;return this.top||this.bottom?o=n+(this.bottom?e.height:-content.height)+(this.bottom?10:-10):(this.left||this.right)&&(o=n+e.height/2-content.height/2),this.nudgeTop&&(o-=parseInt(this.nudgeTop)),this.nudgeBottom&&(o+=parseInt(this.nudgeBottom)),!1===this.attach&&(o+=this.pageYOffset),"".concat(this.calcYOverflow(o),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(m.h)(this.maxWidth),minWidth:Object(m.h)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(m.t)(this,"activator",!0)&&Object(v.b)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=r.a.options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===m.y.esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var content=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[content]):content},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(o.a)(t,this.contentClass,!0),Object(o.a)(t,"menuable__content__active",this.isActive),Object(o.a)(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},695:function(t,e,n){var content=n(696);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("12a190a6",content,!0,{sourceMap:!1})},696:function(t,e,n){var o=n(17)(!1);o.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),t.exports=o},738:function(t,e,n){"use strict";n(10),n(9),n(11),n(13),n(12),n(14);var o=n(78),r=n(2),c=(n(3),n(64),n(695),n(347),n(84)),l=n(132),h=n(262),d=["title"];function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=h.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return m(m({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(o.a)(t,d));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",m(m({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},817:function(t,e,n){"use strict";n.r(e);var o=n(23),r=(n(76),n(36),n(49),n(44),n(3),n(64),{name:"LoginPage",auth:"guest",data:function(){return{email:"",password:"",showpass:!1,remember:!1,lock_id:5,showicon:!1}},head:function(){return{title:this.$t("login.title")}},computed:{check_gmail:function(){return this.email.includes("@gmail.com")}},watch:{password:function(t){this.showicon=!!t},showpass:function(t){var e=this;t&&setTimeout((function(){e.showpass=!1}),1e3)},lock_id:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(t<0)){n.next=4;break}return data=e.FormData({email:e.email}),n.next=4,e.$axios.$post("/login/locked_user",data).then((function(t){t.success&&(e.$store.commit("SET_ERROR","Email Is Locked"),e.lock_id=5)}));case 4:case"end":return n.stop()}}),n)})))()}},created:function(){this.email=this.$cookies.get("email")||""},methods:{FormData:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){var data=new FormData;for(var e in t)data.append(e,t[e]);return data})),check_login:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.email){e.next=4;break}t.$refs.email.focus(),e.next=13;break;case 4:if(t.password){e.next=8;break}t.$refs.password.focus(),e.next=13;break;case 8:if(!t.$refs.form_login.validate()){e.next=13;break}return t.$store.commit("SET_OVERLAY",!0),data=t.FormData({email:t.email,password:t.password}),e.next=13,t.$axios.$post("/login/check_login",data).then((function(e){setTimeout((function(){e.error_email?(t.email="",t.$refs.email.focus(),t.$store.commit("SET_ERROR",t.$t("login.email_no_match"))):e.no_activate?(t.password="",t.email="",t.$refs.email.focus(),t.$store.commit("SET_ERROR",t.$t("login.user_no_activate"))):e.is_locked?(t.password="",t.email="",t.$refs.email.focus(),t.$store.commit("SET_ERROR",t.$t("login.email_is_lock"))):e.error_password?(t.lock_id--,t.password="",t.$refs.password.focus(),t.$store.commit("SET_ERROR",t.$t("login.pass_no_match"))):e.success?t.$auth.loginWith("local",{data:data}).then((function(){t.remember?t.$cookies.set("email",t.email):t.$cookies.remove("email"),t.$store.commit("SET_OVERLAY",!1),t.$router.push(t.localePath("/sales"))})):(t.email="",t.password="",t.$refs.email.focus(),t.$store.commit("SET_ERROR","ERROR LOGIN")),t.$store.commit("SET_OVERLAY",!1)}),1e3)}));case 13:case"end":return e.stop()}}),e)})))()}}}),c=r,l=n(33),h=n(31),d=n.n(h),f=n(254),m=n(235),v=n(55),_=n(738),O=n(529),y=n(507),w=n(496),x=n(524),k=n(527),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"fill-height justify-center"},[n("app-bar"),t._v(" "),n("v-col",{attrs:{md:"6",lg:"4",sm:"7"}},[n("v-form",{ref:"form_login",on:{submit:function(e){return e.preventDefault(),t.check_login.apply(null,arguments)}}},[n("v-card",{staticClass:"pa-5",attrs:{rounded:"lg",elevation:"5"}},[n("v-card-title",{staticClass:"my-3 font-weight-black text-h4 justify-center"},[n("v-divider",{staticClass:"mr-2"}),t._v("\n          "+t._s(t.$t("login.title"))+"\n          "),n("v-divider",{staticClass:"ml-2"})],1),t._v(" "),n("v-card-text",{staticClass:"pb-0"},[n("v-text-field",{ref:"email",attrs:{id:"email",autofocus:"",outlined:"",required:"","validate-on-blur":"","prepend-inner-icon":"mdi-account-outline",label:t.$t("login.email"),placeholder:"youemail@gmail.com",rules:[function(e){return!!e||t.$t("login.val_data")},function(e){return/.+@.+\..+/.test(e)||t.$t("login.val_email")},t.check_gmail||t.$t("forgot.no_gmail")]},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-text-field",{ref:"password",attrs:{id:"password",counter:"","validate-on-blur":"",outlined:"",required:"",placeholder:"Password","prepend-inner-icon":"mdi-lock-outline",label:t.$t("login.password"),"append-icon":t.showicon?t.showpass?"mdi-eye":"mdi-eye-off":"",type:t.showpass?"text":"password",rules:[function(e){return!!e||t.$t("login.val_password")},function(e){return e.length>=8||t.$t("login.val_min8")}]},on:{"click:append":function(e){t.showpass=!t.showpass}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("v-checkbox",{staticClass:"mt-0 pt-0",attrs:{label:t.$t("login.remember")},model:{value:t.remember,callback:function(e){t.remember=e},expression:"remember"}}),t._v(" "),n("v-btn",{attrs:{large:"",block:"",type:"submit",color:"primary"},domProps:{textContent:t._s(t.$t("login.btn"))}})],1),t._v(" "),n("v-card-actions",{staticClass:" justify-center"},[n("nuxt-link",{staticClass:"text-decoration-none",staticStyle:{padding:"7px"},attrs:{to:t.localePath("/forgotpassword")},domProps:{textContent:t._s(t.$t("login.forgot"))}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{AppBar:n(526).default}),d()(component,{VBtn:f.a,VCard:m.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VCheckbox:_.a,VCol:O.a,VContainer:y.a,VDivider:w.a,VForm:x.a,VTextField:k.a})}}]);