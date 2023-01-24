"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[325],{1325:(t,s,a)=>{a.r(s),a.d(s,{default:()=>i});const e={name:"get-invoice.vue",data:function(){return{orders:[],is_shimmer:!1,loading:!1}},mounted:function(){this.getInvoices()},components:{shimmer:a(9247).Z},computed:{shimmer:function(){return this.$store.state.module.shimmer}},methods:{getInvoices:function(){var t=this;this.$Progress.start();var s=this.getUrl("user/get-invoices/"+this.$route.params.trx_id);axios.get(s).then((function(s){if(t.is_shimmer=!0,s.data.error)t.$Progress.fail(),toastr.error(s.data.error,t.lang.Error+" !!");else{t.$Progress.finish(),s.data.guest||t.$store.dispatch("user",s.data.user),t.$store.dispatch("compareList",s.data.compare_list),t.$store.dispatch("wishlists",s.data.wishlists);var a=s.data.orders;if(t.orders=a,a){for(var e=0;e<a.length;e++)t.payment_form.sub_total+=a[e].total_amount,t.payment_form.discount_offer+=a[e].discount,t.payment_form.shipping_tax+=a[e].shipping_cost,t.payment_form.tax+=a[e].total_tax,1==t.settings.coupon_system&&(t.payment_form.coupon_discount+=a[e].coupon_discount),t.trx_id=a[e].trx_id;0==a[0].is_mailed&&t.sendMail(),t.payment_form.total=t.payment_form.sub_total+t.payment_form.tax+t.payment_form.shipping_tax-(t.payment_form.discount_offer+t.payment_form.coupon_discount)}}})).catch((function(s){t.$Progress.finish()}))},sendMail:function(){var t=this.getUrl("user/mail-order/"+this.trx_id);axios.get(t).then((function(t){}))},sendMailSeller:function(){var t=this.getUrl("user/mail-order-seller/"+this.trx_id);axios.get(t).then((function(t){}))},download:function(t,s){var a=this;this.loading=!0,axios.get(this.getUrl("user/invoice/download/"+t),{responseType:"arraybuffer"}).then((function(t){if(a.loading=!1,t.data.error)toastr.error(t.data.error,a.lang.Error+" !!");else{var e=new Blob([t.data],{type:"application/pdf"}),i=document.createElement("a");i.href=window.URL.createObjectURL(e),i.download=s+".pdf",i.click()}})).catch((function(t){a.loading=!1,toastr.error(t.response.statusText,a.lang.Error+" !!")}))}}};const i=(0,a(1900).Z)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"sg-page-content"},[t.is_shimmer?a("section",{staticClass:"after-track-order text-center"},t._l(t.orders,(function(s,e){return a("div",{key:e,staticClass:"container"},[a("div",{staticClass:"invoice_border mt-2"},[a("div",{staticClass:"page-title"},[a("h1",[t._v(t._s(t.lang.thank_you_for_purchase))]),t._v(" "),t.authUser?a("p",[t._v(t._s(t.lang.a_copy_summary_has_been_sent_to)+" "),a("a",{attrs:{href:"mailto"+t.authUser.email}},[t._v(t._s(t.authUser.email))])]):t._e(),t._v(" "),a("h2",[t._v(t._s(t.lang.order_id)+" "+t._s(s.code))])]),t._v(" "),a("div",{staticClass:"step-content"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{staticClass:"text-start",attrs:{scope:"col"}},[t._v(t._s(t.lang.product_name))]),t._v(" "),a("th",{staticClass:"text-end",attrs:{scope:"col"}},[t._v(t._s(t.lang.price))]),t._v(" "),a("th",{staticClass:"text-end",attrs:{scope:"col"}},[t._v(t._s(t.lang.quantity))]),t._v(" "),a("th",{staticClass:"text-end",attrs:{scope:"col"}},[t._v(t._s(t.lang.sub_total))]),t._v(" "),s.tax_method&&"product_base"==s.tax_method.vat_tax_type||!s.tax_method||!s.tax_method.vat_tax_type?a("th",{staticClass:"text-end",attrs:{scope:"col"}},[t._v(t._s(t.lang.tax))]):t._e(),t._v(" "),"product_base"!=s.shipping_method&&s.shipping_method?t._e():a("th",{staticClass:"text-end",attrs:{scope:"col"}},[t._v(t._s(t.lang.shipping_cost))]),t._v(" "),a("th",{staticClass:"text-end",attrs:{scope:"col"}},[t._v(t._s(t.lang.discount))]),t._v(" "),1==s.is_coupon_system_active&&s.coupon_discount>0?a("th",{staticClass:"text-end",attrs:{scope:"col"}},[t._v(t._s(t.lang.coupon_discount))]):t._e(),t._v(" "),a("th",{staticClass:"text-end",attrs:{scope:"col"}},[t._v(t._s(t.lang.total_amount))])])]),t._v(" "),a("tbody",t._l(s.order_details,(function(e,i){return a("tr",{key:"order"+i},[a("td",[a("div",{staticClass:"product-name"},[a("p",[t._v(t._s(e.product_name))]),t._v(" "),a("span",[t._v(t._s(e.variation))])])]),t._v(" "),a("td",{staticClass:"text-end"},[t._v(t._s(t.priceFormat(e.price)))]),t._v(" "),a("td",{staticClass:"text-end"},[t._v(t._s(e.quantity))]),t._v(" "),a("td",{staticClass:"text-end"},[t._v(t._s(t.priceFormat(e.price))+"\n                      X "+t._s(e.quantity)+"\n                      = "+t._s(t.priceFormat(e.price*e.quantity)))]),t._v(" "),s.tax_method&&"product_base"==s.tax_method.vat_tax_type||!s.tax_method||!s.tax_method.vat_tax_type?a("td",{staticClass:"text-end"},[e.tax>0?a("span",[t._v("\n                        "+t._s(t.priceFormat(e.tax))+" X "+t._s(e.quantity)+"\n                                                    = "+t._s(t.priceFormat(e.tax*e.quantity))+"\n                      ")]):a("span",[t._v("\n                        "+t._s(t.priceFormat(e.tax*e.quantity))+"\n                      ")])]):t._e(),t._v(" "),"product_base"!=s.shipping_method&&s.shipping_method?t._e():a("td",{staticClass:"text-end"},[1==e.shipping_cost.depend_on_quantity?a("span",[t._v("\n                        "+t._s(t.priceFormat(e.shipping_cost.per_cost))+"\n                      X "+t._s(e.quantity)+"\n                      = "+t._s(t.priceFormat(e.shipping_cost.total_cost))+"\n                      ")]):t._e(),t._v(" "),a("span",[t._v("\n                        "+t._s(t.priceFormat(e.shipping_cost.total_cost))+"\n                      ")])]),t._v(" "),e.discount*e.quantity>0?a("td",{staticClass:"text-end"},[t._v("\n                      "+t._s(t.priceFormat(e.discount))+"\n                      X "+t._s(e.quantity)+"\n                      = "+t._s(t.priceFormat(e.discount*e.quantity))+"\n                    ")]):a("td",{staticClass:"text-end"},[t._v(t._s(t.priceFormat(0)))]),t._v(" "),1==s.is_coupon_system_active&&s.coupon_discount>0?a("td",{staticClass:"text-end"},[t._v(t._s(t.priceFormat(e.coupon_discount.discount)))]):t._e(),t._v(" "),a("td",{staticClass:"text-end"},[t._v(t._s(t.priceFormat(parseFloat(e.price)*e.quantity+parseFloat(e.tax)*e.quantity+parseFloat(e.shipping_cost.total_cost)-(parseFloat(e.discount)*e.quantity+parseFloat(e.coupon_discount.discount)))))])])})),0)])]),t._v(" "),a("div",{staticClass:"account-table"},[a("div",{staticClass:"title"},[a("h1",[t._v(t._s(t.lang.account_details))])]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table text-start"},[a("tbody",[a("tr",[a("td",[a("ul",{staticClass:"global-list"},[a("li",[t._v(t._s(t.lang.order_code)+" ")]),t._v(" "),t.authUser?a("li",[t._v(t._s(t.lang._name)+" ")]):t._e(),t._v(" "),t.authUser?a("li",[t._v(t._s(t.lang._email))]):t._e(),t._v(" "),a("li",[t._v(t._s(t.lang.shipping_address))]),t._v(" "),a("li",[t._v(t._s(t.lang.billing_address))])])]),t._v(" "),a("td",[a("ul",{staticClass:"global-list"},[a("li",[t._v(t._s(s.code))]),t._v(" "),t.authUser?a("li",[t._v(t._s(t.authUser.full_name))]):t._e(),t._v(" "),t.authUser?a("li",[t._v(t._s(t.authUser.email))]):t._e(),t._v(" "),a("li",[t._v(t._s(s.shipping_address.address))]),t._v(" "),a("li",[t._v(t._s(s.billing_address.address))])])]),t._v(" "),a("td",[a("ul",{staticClass:"global-list"},[a("li",[t._v(t._s(t.lang.order_date))]),t._v(" "),a("li",[t._v(t._s(t.lang.order_status))]),t._v(" "),a("li",[t._v(t._s(t.lang.payment_status))]),t._v(" "),a("li",[t._v(t._s(t.lang.payment_type))])])]),t._v(" "),a("td",[a("ul",{staticClass:"global-list"},[a("li",[t._v(t._s(s.date))]),t._v(" "),a("li",{staticClass:"text-capitalize"},[t._v(t._s(s.delivery_status))]),t._v(" "),a("li",{staticClass:"text-capitalize"},[t._v(t._s(s.payment_status))]),t._v(" "),a("li",{staticClass:"text-capitalize"},[t._v(t._s(s.payment_type.replaceAll("_"," ")))])])])])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 offset-md-8"},[a("div",{staticClass:"order-summary"},[a("div",{staticClass:"sg-card"},[a("ul",{staticClass:"global-list"},[a("li",[t._v(t._s(t.lang.subtotal)+" "),a("span",[t._v(t._s(t.priceFormat(s.sub_total)))])]),t._v(" "),"before_tax"==s.tax_type||"product_base"==s.vat_tax_type?a("li",[t._v(t._s(t.lang.tax)+" "),a("span",[t._v(t._s(t.priceFormat(s.total_tax)))])]):t._e(),t._v(" "),a("li",[t._v(t._s(t.lang.discount)),a("span",[t._v(t._s(t.priceFormat(s.discount)))])]),t._v(" "),"area_base"!=t.settings.shipping_cost||"cart"!=t.$route.name?a("li",[t._v(t._s(t.lang.shipping_cost)),a("span",[t._v(t._s(t.priceFormat(s.shipping_cost)))])]):t._e(),t._v(" "),1==t.settings.coupon_system?a("li",[t._v(t._s(t.lang.coupon_discount)),a("span",[t._v(t._s(t.priceFormat(s.coupon_discount)))])]):t._e()]),t._v(" "),"after_tax"==t.settings.tax_type&&"order_base"==t.settings.vat_and_tax_type?a("div",{staticClass:"order-total text-left"},[a("p",{staticClass:"font_weight_400"},[t._v(t._s(t.lang.total)+" "),a("span",[t._v(t._s(t.priceFormat(parseFloat(s.sub_total)+parseFloat(s.shipping_cost)-(parseFloat(s.coupon_discount)+parseFloat(s.discount)))))])]),t._v(" "),a("p",{staticClass:"font_weight_400"},[t._v(t._s(t.lang.tax)+" "),a("span",[t._v(t._s(t.priceFormat(s.total_tax)))])]),t._v(" "),a("p",{staticClass:"grand_total_style"},[t._v(t._s(t.lang.grand_total)+" "),a("span",[t._v(t._s(t.priceFormat(s.total_payable)))])])]):a("div",{staticClass:"order-total"},[a("p",[t._v(t._s(t.lang.total)+" "),a("span",[t._v(t._s(t.priceFormat(s.total_payable)))])])])])])])])])])]),t._v(" "),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-lg-12"},[t.loading?a("loading_button",{attrs:{class_name:"btn btn-primary"}}):a("a",{staticClass:"btn btn-primary",attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.download(s.id,s.code)}}},[t._v(t._s(t.lang.download)+" "+t._s(t.lang.invoice))])],1)])])})),0):t.shimmer?a("section",[a("div",{staticClass:"container"},[a("div",{staticClass:"page-title"},t._l(3,(function(t,s){return a("shimmer",{key:s,staticClass:"mb-3",attrs:{height:20}})})),1),t._v(" "),a("table",{staticClass:"table"},[a("div",{staticClass:"step-content"},[a("div",{staticClass:"table-responsive"},[a("shimmer",{attrs:{height:50}})],1),t._v(" "),a("div",{staticClass:"account-table"},[a("div",{staticClass:"table-responsive"},[a("shimmer",{attrs:{height:155}})],1)])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4 offset-md-8"},[a("shimmer",{attrs:{height:288}})],1)])])]):t._e()])}),[],!1,null,null,null).exports},9247:(t,s,a)=>{a.d(s,{Z:()=>i});const e={name:"shimmer.vue",props:["height"],data:function(){return{style:{height:this.height+"px"}}}};const i=(0,a(1900).Z)(e,(function(){var t=this,s=t.$createElement;return(t._self._c||s)("img",{staticClass:"shimmer",style:[t.height?t.style:null],attrs:{src:t.getUrl("public/images/default/preview.jpg"),alt:"shimmer"}})}),[],!1,null,null,null).exports}}]);