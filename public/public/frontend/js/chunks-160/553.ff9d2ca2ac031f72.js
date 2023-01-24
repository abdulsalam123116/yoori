"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[553],{7553:(t,s,e)=>{e.r(s),e.d(s,{default:()=>r});const a={name:"brands",data:function(){return{loading:!1,next_page_url:!1,is_shimmer:!1}},components:{shimmer:e(9247).Z},mounted:function(){0==this.lengthCounter(this.brands)&&this.loadBrands(),this.lengthCounter(this.brands)>0&&(this.is_shimmer=!0)},computed:{brands:function(){return this.$store.getters.getAllBrands},shimmer:function(){return this.$store.state.module.shimmer},paginate:function(){return this.$store.state.module.brand_paginate_url}},methods:{loadBrands:function(){var t=this,s=this.url+"/home/brands?page="+this.$store.state.module.brand_paginate_page;1!=this.$store.state.module.brand_paginate_page&&(this.loading=!0),this.$Progress.start(),axios.get(s).then((function(s){t.is_shimmer=!0,s.data.error?(t.$Progress.fail(),toastr.error(s.data.error,t.lang.Error+" !!")):(1!=t.$store.state.module.brand_paginate_page&&(t.loading=!1),t.$store.commit("getAllBrands",s.data.brands),t.$Progress.finish())})).catch((function(s){t.loading=!1,t.is_shimmer=!0,t.$Progress.fail(),s.response&&422==s.response.status&&toastr.error(response.data.error,t.lang.Error+" !!")}))}}};const r=(0,e(1900).Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"brand-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"title justify-content-between"},[t.is_shimmer?e("h1",[t._v(t._s(t.lengthCounter(t.brands)>0?t.lang.brands:t.lang.no_brands_found))]):e("h1",[t._v(t._s(t.lang.content_loading))])]),t._v(" "),t.is_shimmer?e("div",{staticClass:"row"},t._l(t.brands,(function(s,a){return e("div",{key:a,staticClass:"col-6 col-sm-4 col-md-3 col-lg-2"},[e("div",{staticClass:"brand"},[e("div",{staticClass:"brand_image"},[e("a",{attrs:{href:t.getUrl("brand/"+s.slug)},on:{click:function(e){return e.preventDefault(),t.routerNavigator("product.by.brand",s.slug)}}},[e("img",{staticClass:"img-fluid",attrs:{loading:"lazy",src:s.image_130x93,alt:s.title}})])]),t._v(" "),e("span",{staticClass:"brand_title"},[t._v(t._s(s.title))])])])})),0):t.shimmer?e("div",{staticClass:"row"},t._l(12,(function(t,s){return e("div",{staticClass:"col-6 col-sm-4 col-md-3 col-lg-2"},[e("shimmer",{staticClass:"mb-3",attrs:{height:155}})],1)})),0):t._e(),t._v(" "),t.paginate&&!t.loading?e("div",{staticClass:"col-md-12 text-center show-more"},[e("a",{staticClass:"btn btn-primary",attrs:{href:"javascript:void(0)"},on:{click:function(s){return t.loadBrands()}}},[t._v(t._s(t.lang.show_more))])]):t._e(),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"col-md-12 text-center show-more"},[e("loading_button",{attrs:{class_name:"btn btn-primary"}})],1)])])}),[],!1,null,null,null).exports},9247:(t,s,e)=>{e.d(s,{Z:()=>r});const a={name:"shimmer.vue",props:["height"],data:function(){return{style:{height:this.height+"px"}}}};const r=(0,e(1900).Z)(a,(function(){var t=this,s=t.$createElement;return(t._self._c||s)("img",{staticClass:"shimmer",style:[t.height?t.style:null],attrs:{src:t.getUrl("public/images/default/preview.jpg"),alt:"shimmer"}})}),[],!1,null,null,null).exports}}]);