(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4e5957aa"],{"3b4b":function(t,s,e){},db3f:function(t,s,e){"use strict";var r=e("3b4b");e.n(r).a},f243:function(t,s,e){"use strict";e.r(s);var r=e("5530"),n=e("2f62"),a={data:function(){return{form:{username:""},show:!0,showSpinner:!1,showSuccess:!1,btntext:"Sign In",resetError:""}},computed:Object(n.c)(["getLoginError"]),methods:Object(r.a)(Object(r.a)({},Object(n.b)(["resetPassword"])),{},{onSubmit:function(t){var s=this;this.showSpinner=!0,t.preventDefault(),console.log(this.form),this.resetPassword(this.form).then((function(){s.showSpinner=!1,s.showSuccess=!0,setTimeout((function(){s.$router.push({path:"/login"})}),3e3)})).catch((function(){s.showSpinner=!1,s.showSuccess=!1,s.resetError="Something went wrong! Please try again."}))}})},o=(e("db3f"),e("2877")),i=Object(o.a)(a,(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"d-flex align-items-center justify-content-center",staticStyle:{height:"100vh","background-color":"#2c3e50"}},[r("b-card",{staticClass:"overflow-hidden",staticStyle:{"min-width":"450px"},attrs:{"no-body":""}},[r("b-row",{attrs:{"no-gutters":""}},[r("b-col",{attrs:{md:"12"}},[r("b-card-body",[r("div",{staticClass:"py-1 logo"},[r("b-img",{staticClass:"rounded-0",attrs:{center:"",alt:"CapitalVia",src:e("cf05"),fluid:""}})],1),r("div",{staticClass:"py-2"},[r("b-card-text",[t.show?r("b-form",{on:{submit:t.onSubmit}},[r("div",{staticClass:"py-1"},[r("div",{staticClass:"py-1"},[r("b-form-input",{attrs:{id:"username",required:"",placeholder:"Username",autocomplete:"username"},model:{value:t.form.username,callback:function(s){t.$set(t.form,"username",s)},expression:"form.username"}})],1)]),r("p",{staticClass:"error-text"},[t._v(t._s(t.resetError))]),r("b-button",{staticClass:"btn-sm cv-btn",attrs:{type:"submit",variant:"primary"}},[t._v("Send Password")]),t._v(" "),r("b-button",{staticClass:"btn-sm cv-btn",attrs:{to:"/login",variant:"primary"}},[t._v("Back to Login")])],1):t._e()],1)],1),t.showSpinner?r("div",{staticClass:"text-center"},[r("b-spinner",{attrs:{label:"Loading..."}})],1):t._e(),t.showSuccess?r("div",[r("p",[t._v("The password instructions are emailed")])]):t._e(),r("div",[r("p")])])],1)],1)],1)],1)}),[],!1,null,"66d51d1e",null);s.default=i.exports}}]);