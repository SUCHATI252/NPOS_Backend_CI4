(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{719:function(t,n,_){"use strict";_.r(n);_(44);var e={name:"PrintProduct",props:{data:{type:Array,default:null}},data:function(){return{tbl_print:!1}},methods:{print:function(){var t=this;this.tbl_print=!0,setTimeout((function(){t.$htmlToPaper("tbl_product"),setTimeout((function(){t.tbl_print=!1}),1)}),1)}}},r=_(33),o=_(31),c=_.n(o),l=_(510),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,_=t._self._c||n;return _("v-dialog",{model:{value:t.tbl_print,callback:function(n){t.tbl_print=n},expression:"tbl_print"}},[_("div",{attrs:{id:"tbl_product"}},[_("table",{staticClass:"table table-bordered"},[_("thead",[_("tr",[_("th",{attrs:{scope:"col"}},[t._v("\n            #\n          ")]),t._v(" "),_("th",{attrs:{scope:"col"}},[t._v("\n            #\n          ")]),t._v(" "),_("th",{attrs:{scope:"col"}},[t._v("\n            #\n          ")]),t._v(" "),_("th",{attrs:{scope:"col"}},[t._v("\n            #\n          ")]),t._v(" "),_("th",{attrs:{scope:"col"}},[t._v("\n            #\n          ")]),t._v(" "),_("th",{attrs:{scope:"col"}},[t._v("\n            #\n          ")]),t._v(" "),_("th",{attrs:{scope:"col"}},[t._v("\n            #\n          ")])])]),t._v(" "),_("tbody",t._l(t.data,(function(n,e){return _("tr",{key:e,attrs:{scope:"row"}},[_("td",[t._v(t._s(e+1))]),t._v(" "),_("td",[t._v(t._s(n.p_code))]),t._v(" "),_("td",[t._v(t._s(n.p_name))]),t._v(" "),_("td",[t._v(t._s(t._f("currency")(n.cost_price,"")))]),t._v(" "),_("td",[t._v(t._s(t._f("currency")(n.sale_price,"")))]),t._v(" "),_("td",[t._v(t._s(n.stock))]),t._v(" "),_("td",[t._v(t._s(n.cat_name))])])})),0)])])])}),[],!1,null,null,null);n.default=component.exports;c()(component,{VDialog:l.a})}}]);