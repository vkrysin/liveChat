(function(e){function t(t){for(var s,c,u=t[0],o=t[1],i=t[2],l=0,f=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,u=1;u<n.length;u++){var o=n[u];0!==a[o]&&(s=!1)}s&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var s={},a={app:0},r=[];function c(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=s,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(n,s,function(t){return e[t]}.bind(null,s));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var d=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"06c8":function(e,t,n){"use strict";n("4ece")},1336:function(e,t,n){},4675:function(e,t,n){"use strict";n("8864")},"4ece":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23"),a={class:"chat"};function r(e,t,n,r,c,u){var o=Object(s["l"])("list-users"),i=Object(s["l"])("chat-window");return Object(s["g"])(),Object(s["c"])("div",a,[Object(s["e"])(o),Object(s["e"])(i)])}n("b0c0");var c=Object(s["r"])("data-v-673c51ce");Object(s["i"])("data-v-673c51ce");var u={class:"container"},o=Object(s["e"])("h2",null,"Chat",-1),i={key:1,class:"auth"},d=Object(s["e"])("h4",null,"Your name",-1),l={key:0,class:"notice"};Object(s["h"])();var f=c((function(e,t,n,a,r,c){var f=Object(s["l"])("chat-message"),b=Object(s["l"])("chat-input");return Object(s["g"])(),Object(s["c"])("div",u,[o,(Object(s["g"])(!0),Object(s["c"])(s["a"],null,Object(s["k"])(e.messages,(function(t,n){return Object(s["g"])(),Object(s["c"])(f,{key:n,message:e.messages[n].message,name:e.messages[n].name,isCurrent:c.isCurrent(e.messages[n].name)},null,8,["message","name","isCurrent"])})),128)),r.auth?(Object(s["g"])(),Object(s["c"])(b,{key:0,onSend:t[1]||(t[1]=function(t){return e.sendMessage({name:e.currentUser,message:t})})})):(Object(s["g"])(),Object(s["c"])("div",i,[d,Object(s["p"])(Object(s["e"])("input",{type:"text",class:"auth__name","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.userName=e})},null,512),[[s["n"],r.userName]]),Object(s["e"])("button",{onClick:t[3]||(t[3]=Object(s["q"])((function(){return c.sendData&&c.sendData.apply(c,arguments)}),["prevent"]))},"Enter"),r.notice?(Object(s["g"])(),Object(s["c"])("div",l,"This name has been reserved")):Object(s["d"])("",!0)]))])})),b=n("5530"),p=Object(s["r"])("data-v-5ecf73df"),m=p((function(e,t,n,a,r,c){return Object(s["g"])(),Object(s["c"])("form",null,[Object(s["p"])(Object(s["e"])("textarea",{onInput:t[1]||(t[1]=function(){return c.autoGrow&&c.autoGrow.apply(c,arguments)}),class:"message","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.message=e}),ref:"textarea"},"\n    ",544),[[s["n"],r.message]]),Object(s["e"])("input",{type:"submit",value:"",onClick:t[3]||(t[3]=Object(s["q"])((function(t){return e.$emit("send",r.message)}),["prevent"]))})])})),g={name:"ChatInput",data:function(){return{message:""}},methods:{autoGrow:function(){var e=this.$refs.textarea;e.style.height="auto",e.style.height=e.scrollHeight+"px"}}};n("74f2");g.render=m,g.__scopeId="data-v-5ecf73df";var O=g,j=Object(s["r"])("data-v-4ce2a861");Object(s["i"])("data-v-4ce2a861");var h={class:"message__container"},v={class:"message"};Object(s["h"])();var y=j((function(e,t,n,a,r,c){return Object(s["g"])(),Object(s["c"])("div",h,[Object(s["e"])("div",{class:"name",ref:"name"},Object(s["m"])(n.name)+":",513),Object(s["e"])("div",v,Object(s["m"])(n.message),1)])})),w={name:"ChatMessage",props:["message","name","isCurrent"],mounted:function(){this.isCurrent&&(this.$refs.name.style.color="blue")}};n("4675");w.render=y,w.__scopeId="data-v-4ce2a861";var U=w,C=n("5502"),_={name:"ChatWindow",data:function(){return{auth:!1,notice:!1,userName:""}},components:{ChatMessage:U,ChatInput:O},created:function(){setInterval(this.updateMessages,1e3),window.onunload=window.onbeforeunload,window.addEventListener("unload",this.beforeWindowUnload),window.addEventListener("beforeunload",this.beforeWindowUnload)},computed:Object(b["a"])({},Object(C["c"])({messages:"chatWindow/messages",currentUser:"currentUser"})),methods:Object(b["a"])(Object(b["a"])({},Object(C["b"])({deleteUser:"chatWindow/deleteUser",updateMessages:"chatWindow/updateMessages",sendMessage:"chatWindow/sendMessage"})),{},{sendData:function(){var e=this,t=this.$store.dispatch("chatWindow/signUp",{name:this.$data.userName});t.then((function(t){"true"!==t.data.isDuplicate?(e.$data.auth=!0,e.$data.notice=!1,e.$store.commit("setCurrentUser",e.$data.userName)):e.$data.notice=!0}))},beforeWindowUnload:function(){1==this.auth&&this.deleteUser(this.currentUser)},isCurrent:function(e){return e===this.currentUser}})};n("7092");_.render=f,_.__scopeId="data-v-673c51ce";var M=_,k=Object(s["r"])("data-v-180e2902");Object(s["i"])("data-v-180e2902");var I={class:"users-list"},x=Object(s["e"])("h2",null,"Users online",-1);Object(s["h"])();var W=k((function(e,t,n,a,r,c){var u=Object(s["l"])("list-users-item");return Object(s["g"])(),Object(s["c"])("div",I,[x,(Object(s["g"])(!0),Object(s["c"])(s["a"],null,Object(s["k"])(e.users,(function(t,n){return Object(s["g"])(),Object(s["c"])(u,{key:n,name:e.users[n]},null,8,["name"])})),128))])})),N=Object(s["r"])("data-v-781e1a76");Object(s["i"])("data-v-781e1a76");var $={class:"item"};Object(s["h"])();var L=N((function(e,t,n,a,r,c){return Object(s["g"])(),Object(s["c"])("div",$,Object(s["m"])(n.name),1)})),S={name:"ListUsersItem",props:["name"]};n("06c8");S.render=L,S.__scopeId="data-v-781e1a76";var P=S,T={name:"ListUsers",data:function(){return{}},components:{ListUsersItem:P},created:function(){setInterval(this.updateUsers,1e3)},computed:Object(b["a"])({},Object(C["c"])({users:"userList/users"})),methods:Object(b["a"])({},Object(C["b"])({updateUsers:"userList/updateUsers"}))};n("ec7e");T.render=W,T.__scopeId="data-v-180e2902";var D=T,J={name:"App",components:{ChatWindow:M,ListUsers:D}};n("dacd");J.render=r;var E=J,G=(n("99af"),n("bc3a")),V="http://morning-eyrie-13293.herokuapp.com",q={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n={"Content-Type":"application/json"};return G.get("".concat(e,"/").concat(t),{headers:n})},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,s={"Content-Type":"application/json"};return G.put("".concat(e,"/").concat(t),JSON.stringify(n),{headers:s})},delete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0;return G.delete("".concat(e,"/").concat(t),{headers:{"Content-Type":"application/json"},data:JSON.stringify(n)})}},H={get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return q.get(V,e)}},A={get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return q.get(V,e)},put:function(e,t){return q.put(V,e,t)},delete:function(e){return q.delete(V,"users",e)}},Y={users:[]},z={users:function(e){return e.users}},B={setUsers:function(e,t){e.users=t}},F={updateUsers:function(e){H.get("users").then((function(t){e.commit("setUsers",t.data.users)}))}},K={namespaced:!0,state:Y,mutations:B,getters:z,actions:F},Q={messages:[{name:"Vlad",message:"Hello person!"}]},R={messages:function(e){return e.messages}},X={setMessages:function(e,t){e.messages=t}},Z={signUp:function(e,t){return A.put("users",t)},deleteUser:function(e,t){A.delete(t)},sendMessage:function(e,t){A.put("messages",t)},updateMessages:function(e){A.get("messages").then((function(t){e.commit("setMessages",t.data.messages)}))}},ee={namespaced:!0,state:Q,mutations:X,getters:R,actions:Z},te=Object(C["a"])({state:function(){return{currentUserName:""}},getters:{currentUser:function(e){return e.currentUserName}},mutations:{setCurrentUser:function(e,t){e.currentUserName=t}},modules:{userList:K,chatWindow:ee}}),ne=(n("f5df1"),Object(s["b"])(E));ne.use(te),ne.mount("#app")},7092:function(e,t,n){"use strict";n("a6f5")},"74f2":function(e,t,n){"use strict";n("f204")},8864:function(e,t,n){},a6f5:function(e,t,n){},b245:function(e,t,n){},dacd:function(e,t,n){"use strict";n("b245")},ec7e:function(e,t,n){"use strict";n("1336")},f204:function(e,t,n){}});
//# sourceMappingURL=app.c47b4ada.js.map