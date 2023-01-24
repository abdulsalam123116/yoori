"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[423],{4423:(t,a,e)=>{e.r(a),e.d(a,{default:()=>o});var s=e(3424),r=e(9247);const i={name:"notification",data:function(){return{current:"notification",loading:!1,is_shimmer:!1}},components:{user_sidebar:s.Z,shimmer:r.Z},mounted:function(){0==this.lengthCounter(this.notification.data)&&this.notification(),this.lengthCounter(this.notification.data)>0&&(this.is_shimmer=!0)},computed:{notifications:function(){return this.$store.getters.getNotifications},shimmer:function(){return this.$store.state.module.shimmer}},methods:{notification:function(){var t=this,a=this.getUrl("user-notification/all");this.$Progress.start(),axios.get(a).then((function(a){t.is_shimmer=!0,t.$store.commit("setShimmer",0),t.$Progress.finish(),t.$store.commit("setNotifications",a.data.notifications)})).catch((function(a){t.$Progress.fail()}))},seenAll:function(){var t=this,a=this.getUrl("user-notification/seen-all");axios.get(a).then((function(a){if(a.data.error)toastr.error(a.data.error,t.lang.Error+" !!");else for(var e=0;e<t.notifications.data.length;e++)t.fetchedNotifications[e].status="seen"})).catch((function(a){t.$Progress.fail()}))},seen:function(t,a,e){var s=this,r=this.getUrl("notification/seen/"+t);axios.get(r).then((function(t){if(t.data.error)toastr.error(t.data.error,s.lang.Error+" !!");else if(s.notifications.data[a].status="seen","url"==e){var r=s.notifications.data[a].url.split("/");s.$router.push({name:"get.invoice",params:{orderCode:r[r.length-1]}})}}))},remove:function(t,a){var e=this,s=this.getUrl("notification/remove/"+t);axios.get(s).then((function(t){t.data.error?toastr.error(t.data.error,e.lang.Error+" !!"):(e.notifications.data.splice(a,1),e.notifications.total-=1)}))}}};var n=(0,e(1900).Z)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sg-page-content"},[e("section",{staticClass:"sg-global-content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("user_sidebar",{attrs:{current:t.current}}),t._v(" "),e("div",{staticClass:"col-lg-9"},[e("div",{staticClass:"sg-table sg-notification"},[e("div",{staticClass:"title justify-content-between"},[t.notifications.total>0?e("h1",[t._v(t._s(t.notifications.total)+" Notifications found")]):t.is_shimmer?e("h1",[t._v(t._s(t.lang.notification_found))]):e("h1",[t._v(t._s(t.lang.loading))]),t._v(" "),t.notifications.total>0?e("a",{attrs:{href:"javascript:void(0)"},on:{click:t.seenAll}},[t._v(t._s(this.lang.seen_all))]):t._e()]),t._v(" "),t.is_shimmer?e("table",{staticClass:"table"},[e("thead",[e("tr",[e("td",[t._v("#")]),t._v(" "),e("td",[t._v(t._s(t.lang.Title))]),t._v(" "),e("td",[t._v(t._s(t.lang.time))]),t._v(" "),e("td",[t._v(t._s(t.lang.action))])])]),t._v(" "),e("tbody",t._l(t.notifications.data,(function(a,s){return e("tr",{key:s},[e("th",{attrs:{scope:"row"}},[t._v(t._s(++s))]),t._v(" "),"unseen"==a.status?e("td",{attrs:{scope:"row"}},[e("div",{staticClass:"product"},[e("a",{attrs:{href:t.getUrl(a.url)}},[e("div",{staticClass:"text"},[e("p",[t._v(t._s(a.title))])])])])]):e("td",[t._v(t._s(a.title))]),t._v(" "),e("td",[t._v(t._s(a.date)+" | "+t._s(a.time))]),t._v(" "),e("td",[e("div",{staticClass:"add-to-cart mb-2 mt-2"},["unseen"==a.status?e("a",{staticClass:"btn ",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.seen(a.id,s-1)}}},[t._v(t._s(t.lang.seen))]):t._e(),t._v(" "),e("a",{staticClass:"btn",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.remove(a.id,s-1)}}},[t._v(t._s(t.lang.remove))])])])])})),0)]):t.shimmer?e("table",{staticClass:"table"},t._l(8,(function(t,a){return e("shimmer",{key:a,staticClass:"mb-3",attrs:{height:70}})})),1):t._e(),t._v(" "),t.notifications.next_page_url&&!t.loading?e("div",{staticClass:"show-more-button"},[e("a",{staticClass:"btn btn-primary",attrs:{href:"javascript:void(0)"}},[t._v(t._s(t.lang.show_more))])]):t._e(),t._v(" "),t.loading?e("div",{staticClass:"show-more-button"},[e("loading_button",{attrs:{class_name:"btn btn-primary"}})],1):t._e()])])],1)])])])}),[],!1,null,null,null);const o=n.exports},9247:(t,a,e)=>{e.d(a,{Z:()=>r});const s={name:"shimmer.vue",props:["height"],data:function(){return{style:{height:this.height+"px"}}}};const r=(0,e(1900).Z)(s,(function(){var t=this,a=t.$createElement;return(t._self._c||a)("img",{staticClass:"shimmer",style:[t.height?t.style:null],attrs:{src:t.getUrl("public/images/default/preview.jpg"),alt:"shimmer"}})}),[],!1,null,null,null).exports},3424:(t,a,e)=>{e.d(a,{Z:()=>r});const s={name:"user_sidebar",props:["current","addresses"],data:function(){return{loading:!1,download_url:!1}},mounted:function(){this.checkAuth()},computed:{totalReward:function(){return this.$store.getters.getTotalReward},modalType:function(){return this.$store.getters.getModalType}},components:{shimmer:e(9247).Z},methods:{checkAuth:function(){var t=this,a=this.getUrl("home/check-auth");axios.get(a).then((function(a){t.$store.dispatch("user",a.data.user),t.$store.commit("getOrderUrl",a.data.order_urls),t.authUser?"admin"==t.authUser.user_type&&t.$router.push({name:"home"}):t.$router.push({name:"login"}),a.data.reward&&t.$store.commit("setTotalReward",a.data.reward),a.data.download_urls&&(t.download_url=!0)}))},convertReward:function(){var t=this,a=this.getUrl("user/convert-reward"),e={amount:this.converted_reward/this.settings.reward_convert_rate,reward:this.converted_reward};e.amount>0&&this.totalReward.rewards>=this.converted_reward&&confirm("Are You Sure! You want to Convert ?")&&(this.loading=!0,axios.post(a,e).then((function(a){t.loading=!1,a.data.error?toastr.error(a.data.error,t.lang.Error+" !!"):(toastr.success(a.data.success,t.lang.Success+"!!"),$("#convert_reward").modal("hide"),t.converted_reward="",t.$store.dispatch("user",a.data.user),t.$store.commit("setTotalReward",a.data.reward))})).catch((function(a){t.loading=!1})))}}};const r=(0,e(1900).Z)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.authUser?e("div",{staticClass:"col-lg-3"},[e("div",{staticClass:"profile-details position-relative"},[e("div",{staticClass:"profile-thumb"},[e("img",{staticClass:"img-fluid",attrs:{src:t.authUser.profile_image,alt:t.authUser.full_name}})]),t._v(" "),e("h2",[t._v(t._s(t.authUser.full_name)+" "),e("router-link",{staticClass:"d-inline",attrs:{to:{name:"edit.profile"}}},[e("span",{staticClass:"mdi mdi-name mdi-pencil"})])],1),t._v(" "),e("a",{attrs:{href:"javascript:void(0)"}},[t._v(t._s(t.authUser.email))]),t._v(" "),1==t.settings.seller_system?e("router-link",{staticClass:"be_seller base",attrs:{to:{name:"migrate.seller"}}},[t._v("\n            "+t._s(t.lang.be_a_seller)+" "),e("span",{staticClass:"mdi mdi-name mdi-store-outline"})]):t._e()],1),t._v(" "),e("div",{staticClass:"sidebar-menu"},[e("ul",{staticClass:"global-list"},[e("li",{class:{active:"dashboard"===t.current}},[e("router-link",{attrs:{to:{name:"dashboard"}}},[e("span",{staticClass:"mdi mdi-name mdi-view-dashboard-outline"}),t._v(" "+t._s(t.lang.dashboard)+"\n                ")])],1),t._v(" "),e("li",{class:{active:"addresses"===t.current}},[e("router-link",{attrs:{to:{name:"addresses"}}},[e("span",{staticClass:"mdi mdi-name mdi-map-marker-outline"}),t._v("\n                    "+t._s(t.lang.addresses)+"\n                ")])],1),t._v(" "),e("li",{class:{active:"notification"===t.current}},[e("router-link",{attrs:{to:{name:"notification"}}},[e("span",{staticClass:"mdi mdi-name mdi-bell-outline"}),t._v("\n                    "+t._s(t.lang.notification)+"\n                ")])],1),t._v(" "),e("li",{class:{active:"order_history"===t.current}},[e("router-link",{attrs:{to:{name:"order.history"}}},[e("span",{staticClass:"mdi mdi-name mdi-cart-outline"}),t._v("\n                    "+t._s(t.lang.order_history)+"\n                ")])],1),t._v(" "),t.download_url?e("li",{class:{active:"digital_product_order_history"===t.current}},[e("router-link",{attrs:{to:{name:"orders.digital.product"}}},[e("span",{staticClass:"mdi mdi-name mdi-cart-arrow-down"}),t._v(" "+t._s(t.lang.digital_product_order)+"\n                ")])],1):t._e(),t._v(" "),1==t.settings.coupon_system?e("li",{class:{active:"gift_voucher"===t.current}},[e("router-link",{attrs:{to:{name:"gift.voucher"}}},[e("span",{staticClass:"mdi mdi-name mdi-wallet-giftcard"}),t._v("\n                    "+t._s(t.lang.gift_voucher)+"\n                ")])],1):t._e(),t._v(" "),e("li",{class:{active:"change_password"===t.current}},[e("router-link",{attrs:{to:{name:"change.password"}}},[e("span",{staticClass:"mdi mdi-name mdi-lock-outline"}),t._v("\n                    "+t._s(t.lang.change_password)+"\n                ")])],1),t._v(" "),1==t.settings.wallet_system?e("li",{class:{active:"wallet_history"===t.current}},[e("router-link",{attrs:{to:{name:"wallet.history"}}},[e("span",{staticClass:"mdi mdi-wallet-outline"}),t._v("\n                    "+t._s(t.lang.my_wallet)+"\n                ")])],1):t._e(),t._v(" "),t.addons.includes("reward")?e("li",{class:{active:"reward_history"===t.current}},[e("router-link",{attrs:{to:{name:"reward.history"}}},[e("span",{staticClass:"mdi mdi-vector-point"}),t._v(t._s(t.lang.my_rewards)+"\n                ")])],1):t._e(),t._v(" "),1==t.settings.seller_system?e("li",{class:{active:"followed_shop"===t.current}},[e("router-link",{attrs:{to:{name:"shop.followed"}}},[e("span",{staticClass:"mdi mdi-home-heart"}),t._v(t._s(t.lang.shop)+"\n                ")])],1):t._e()])]),t._v(" "),e("div",{staticClass:"modal fade reward",attrs:{id:"convert_reward",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[t._v(t._s(t.lang.reward_point))]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"modal-body reward_modal"},[e("form",{on:{submit:function(a){return a.preventDefault(),t.convertReward.apply(null,arguments)}}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 text-center"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"reward"}},[t._v(t._s(t.lang.reward_point)+" ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.converted_reward,expression:"converted_reward"}],staticClass:"form-control",attrs:{type:"text",id:"reward",placeholder:t.lang.enter_point_you_want_convert},domProps:{value:t.converted_reward},on:{input:function(a){a.target.composing||(t.converted_reward=a.target.value)}}})]),t._v(" "),null!=t.totalReward?e("div",{staticClass:"text-start"},[e("p",[t._v("Available Points to Convert : "+t._s(t.totalReward.rewards))]),t._v(" "),e("p",[t._v(t._s(t.settings.reward_convert_rate)+t._s(t.lang.reward_points)+t._s(t.priceFormat(1)))]),t._v(" "),t.totalReward.rewards>0?e("p",[t._v(t._s(t.lang.total_amount_you_will_get)+"\n                                        "+t._s(t.priceFormat(t.converted_reward/t.settings.reward_convert_rate)))]):t._e()]):t._e(),t._v(" "),t.loading?e("loading_button",{attrs:{class_name:"btn btn-primary mt-3"}}):e("button",{staticClass:"btn btn-primary mt-3",class:{disable_btn:t.converted_reward<t.settings.reward_convert_rate||t.totalReward.rewards<t.converted_reward},attrs:{type:"submit"}},[t._v("\n                                    "+t._s(t.lang.covert_rewards)+"\n                                ")])],1)])])])])])])]):t._e()}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close modal_close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],!1,null,null,null).exports}}]);