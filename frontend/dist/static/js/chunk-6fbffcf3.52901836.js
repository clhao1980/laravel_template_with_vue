(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fbffcf3","chunk-2d21ee4a"],{"28a5":function(e,t,n){"use strict";var i=n("aae3"),s=n("cb7c"),a=n("ebd6"),r=n("0390"),c=n("9def"),o=n("5f1b"),u=n("520a"),l=n("79e5"),f=Math.min,m=[].push,d="split",h="length",v="lastIndex",p=4294967295,g=!l(function(){RegExp(p,"y")});n("214f")("split",2,function(e,t,n,l){var b;return b="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[h]||2!="ab"[d](/(?:ab)*/)[h]||4!="."[d](/(.?)(.?)/)[h]||"."[d](/()()/)[h]>1||""[d](/.?/)[h]?function(e,t){var s=String(this);if(void 0===e&&0===t)return[];if(!i(e))return n.call(s,e,t);var a,r,c,o=[],l=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,d=void 0===t?p:t>>>0,g=new RegExp(e.source,l+"g");while(a=u.call(g,s)){if(r=g[v],r>f&&(o.push(s.slice(f,a.index)),a[h]>1&&a.index<s[h]&&m.apply(o,a.slice(1)),c=a[0][h],f=r,o[h]>=d))break;g[v]===a.index&&g[v]++}return f===s[h]?!c&&g.test("")||o.push(""):o.push(s.slice(f)),o[h]>d?o.slice(0,d):o}:"0"[d](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,i){var s=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,s,i):b.call(String(s),n,i)},function(e,t){var i=l(b,e,this,t,b!==n);if(i.done)return i.value;var u=s(e),m=String(this),d=a(u,RegExp),h=u.unicode,v=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(g?"y":"g"),y=new d(g?u:"^(?:"+u.source+")",v),_=void 0===t?p:t>>>0;if(0===_)return[];if(0===m.length)return null===o(y,m)?[m]:[];var k=0,x=0,C=[];while(x<m.length){y.lastIndex=g?x:0;var w,I=o(y,g?m:m.slice(x));if(null===I||(w=f(c(y.lastIndex+(g?0:x)),m.length))===k)x=r(m,x,h);else{if(C.push(m.slice(k,x)),C.length===_)return C;for(var O=1;O<=I.length-1;O++)if(C.push(I[O]),C.length===_)return C;x=k=w}}return C.push(m.slice(k)),C}]})},"32f7":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.item.name===e.name?n("div",{staticClass:"clearfix"},[n("div",{staticClass:"chat-content",staticStyle:{float:"right"}},[n("p",{staticClass:"title"},[e._v(e._s(e.item.name)+"  "+e._s(e.item.time))]),e._v(" "),n("p",{staticClass:"content"},[e._v(e._s(e.item.content))])])]):n("div",{staticClass:"clearfix"},[n("div",{staticClass:"chat-content",staticStyle:{float:"left"}},[n("p",{staticClass:"title"},[e._v(e._s(e.item.name)+"  "+e._s(e.item.time))]),e._v(" "),n("p",{staticClass:"content"},[e._v(e._s(e.item.content))])])])},s=[],a={name:"ChatItem",props:{item:{type:Object,default:{}},name:{type:String,default:""}}},r=a,c=(n("521a"),n("2877")),o=Object(c["a"])(r,i,s,!1,null,"4581f108",null);t["a"]=o.exports},3846:function(e,t,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"3b74":function(e,t,n){},"521a":function(e,t,n){"use strict";var i=n("c7ce"),s=n.n(i);s.a},"5d58":function(e,t,n){e.exports=n("d8d6")},"67bb":function(e,t,n){e.exports=n("f921")},"6b54":function(e,t,n){"use strict";n("3846");var i=n("cb7c"),s=n("0bfb"),a=n("9e1e"),r="toString",c=/./[r],o=function(e){n("2aba")(RegExp.prototype,r,e,!0)};n("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?o(function(){var e=i(this);return"/".concat(e.source,"/","flags"in e?e.flags:!a&&e instanceof RegExp?s.call(e):void 0)}):c.name!=r&&o(function(){return c.call(this)})},"6d5b":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"chat"}},[n("el-row",[n("el-col",{attrs:{span:16}},[e.kefu!==e.name||0===e.users.length?n("div",{staticClass:"chat-box"},e._l(e.messages,function(t){return n("div",{key:t.timezone},[n("chat-item",{attrs:{item:t,name:e.name}})],1)}),0):e._e(),e._v(" "),e.kefu===e.name?n("el-tabs",{staticStyle:{"margin-top":"20px"},attrs:{"tab-position":"left"},model:{value:e.currentUser,callback:function(t){e.currentUser=t},expression:"currentUser"}},e._l(e.users,function(t){return e.kefu!==t?n("el-tab-pane",{key:t,attrs:{label:t,name:t}},[n("div",{staticClass:"chat-box"},e._l(e.kefuMsg[t],function(i){return n("div",{key:t.timezone},[n("chat-item",{attrs:{item:i,name:e.name}})],1)}),0)]):e._e()}),1):e._e()],1),e._v(" "),n("el-col",{attrs:{span:8}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e.name!==e.kefu?n("span",[e._v("在线客服")]):e._e(),e._v(" "),e.name===e.kefu?n("span",[e._v("在线用户")]):e._e()]),e._v(" "),e.name!==e.kefu?n("div",{staticStyle:{"margin-bottom":"20px"}},[n("div",{staticClass:"text item"},[e._v("\n              "+e._s(e.kefu)+"\n            ")])]):e._e(),e._v(" "),e.name===e.kefu?n("div",{staticStyle:{"margin-bottom":"20px"}},e._l(e.users,function(t){return n("span",{key:t},[t!==e.kefu?n("el-radio",{staticStyle:{"margin-right":"20px"},attrs:{label:t,border:""},on:{change:e.changeCurrentUser},model:{value:e.currentUser,callback:function(t){e.currentUser=t},expression:"currentUser"}},[e._v(e._s(t))]):e._e()],1)}),0):e._e(),e._v(" "),n("el-form",{staticClass:"chat-msg",attrs:{inline:!0,model:e.formInline},nativeOn:{submit:function(t){return t.preventDefault(),e.test(t)}}},[n("el-form-item",{attrs:{label:"消息"}},[n("el-input",{nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.send(t))}},model:{value:e.formInline.msg,callback:function(t){e.$set(e.formInline,"msg",t)},expression:"formInline.msg"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"success",plain:""},nativeOn:{click:function(t){return t.preventDefault(),e.send(t)}}},[e._v("发送")])],1)],1)],1),e._v(" "),n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("span",[e._v("使用说明")])]),e._v(" "),n("p",{staticClass:"tips",staticStyle:{color:"#f50","line-height":"1.4"}},[e._v("\n            当前客服由前端直接模拟，默认是登录名为871228582@qq.com的用户。\n          ")]),e._v(" "),n("p",{staticClass:"tips",staticStyle:{color:"#f50","line-height":"1.4"}},[e._v("\n            可以查看api/chat下的getCustomer,实际中你可以根据自己的情况，从后台数据库配置中获取\n          ")]),e._v(" "),n("p",{staticClass:"tips",staticStyle:{color:"#f50","line-height":"1.4"}},[e._v("\n          要完整的查看演示效果，最好有3个用户，一个是客服，另外两个是其他管理员用户。\n          ")])])],1)],1)],1)},s=[],a=(n("20d6"),n("7f7f"),n("cebc")),r=n("d800"),c=n("2f62"),o=n("ed08"),u=n("32f7"),l={name:"chat_kefu",components:{ChatItem:u["a"]},data:function(){return{users:[],currentUser:"",formInline:{msg:""},kefu:"",messages:[],kefuMsg:{}}},computed:Object(a["a"])({},Object(c["b"])(["name"])),beforeRouteLeave:function(e,t,n){window.Echo.leave("chat"),n()},beforeRouteEnter:function(e,t,n){n(function(e){Object(r["getCustomer"])().then(function(t){e.kefu=t.name}),window.Echo.join("kefu").here(function(t){e.users=t}).joining(function(t){e.users.push(t),e.kefuMsg[t]||(e.$set(e.kefuMsg,t,[]),e.currentUser=t)}).leaving(function(t){var n=e.users.findIndex(function(e){return e===t});e.users.splice(n,1)}).listen("CustomerService",function(t){var n=t.msg;if(e.kefu!==e.name&&n.receiveName===e.name&&e.messages.push({name:n.sendName,time:n.time,timezone:n.timezone,content:n.content}),e.kefu===e.name){var i=n.sendName;e.kefuMsg[i]&&e.kefuMsg[i].push({name:n.sendName,time:n.time,timezone:n.timezone,content:n.content})}})})},created:function(){var e=this;document.onkeydown=function(t){if(void 0==window.event)var n=t.keyCode;else n=window.event.keyCode;13===n&&e.send()}},methods:{test:function(e){return!1},send:function(){if(!this.formInline.msg)return!1;if(this.name!==this.kefu){var e={sendName:this.name,receiveName:this.kefu,timezone:Date.now(),time:Object(o["a"])(Date.now()),content:this.formInline.msg};this.formInline.msg="",this.messages.push({name:e.sendName,time:e.time,timezone:e.timezone,content:e.content}),Object(r["sendKefu"])(e).then(function(){})}if(this.name===this.kefu){var t={sendName:this.name,receiveName:this.currentUser,timezone:Date.now(),time:Object(o["a"])(Date.now()),content:this.formInline.msg};Array.isArray(this.kefuMsg[this.currentUser])||this.$set(this.kefuMsg,this.currentUser,[]),this.kefuMsg[this.currentUser].push({name:t.sendName,time:t.time,timezone:t.timezone,content:t.content}),this.formInline.msg="",Object(r["sendKefu"])(t).then(function(){})}},changeCurrentUser:function(e){this.currentUser=e}}},f=l,m=(n("fcba"),n("2877")),d=Object(m["a"])(f,i,s,!1,null,"40da4d6c",null);t["default"]=d.exports},7618:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n("5d58"),s=n.n(i),a=n("67bb"),r=n.n(a);function c(e){return c="function"===typeof r.a&&"symbol"===typeof s.a?function(e){return typeof e}:function(e){return e&&"function"===typeof r.a&&e.constructor===r.a&&e!==r.a.prototype?"symbol":typeof e},c(e)}function o(e){return o="function"===typeof r.a&&"symbol"===c(s.a)?function(e){return c(e)}:function(e){return e&&"function"===typeof r.a&&e.constructor===r.a&&e!==r.a.prototype?"symbol":c(e)},o(e)}},c7ce:function(e,t,n){},d800:function(e,t,n){"use strict";n.r(t),n.d(t,"sendChat",function(){return s}),n.d(t,"getCustomer",function(){return a}),n.d(t,"sendKefu",function(){return r});var i=n("1c1e");function s(e){return Object(i["a"])({url:"/api/chat",method:"post",data:e})}function a(){return new Promise(function(e,t){var n={name:"wmhello"};e(n)})}function r(e){return Object(i["a"])({url:"/api/kefu",method:"post",data:e})}},ed08:function(e,t,n){"use strict";n.d(t,"a",function(){return s});n("28a5"),n("a481"),n("6b54");var i=n("7618");function s(e,t){if(0===arguments.length)return null;var n,s=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(i["a"])(e)?n=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),n=new Date(e));var a={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},r=s.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var n=a[t];return"a"===t?["日","一","二","三","四","五","六"][n]:(e.length>0&&n<10&&(n="0"+n),n||0)});return r}},fcba:function(e,t,n){"use strict";var i=n("3b74"),s=n.n(i);s.a}}]);