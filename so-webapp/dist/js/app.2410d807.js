(function(){"use strict";var e={6626:function(e,t,n){var r=n(9242),s=n(3396);const a={id:"app"};function o(e,t,n,r,o,i){const l=(0,s.up)("NavigationBar"),u=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(l),(0,s.Wm)(u)])}const i=e=>((0,s.dD)("data-v-65bd358e"),e=e(),(0,s.Cn)(),e),l={class:"bar"},u={class:"container"},d=["src"],c=(0,s.Uk)("SocialOut "),p=i((()=>(0,s._)("span",null,null,-1))),m=(0,s.Uk)(" | "),v=(0,s.Uk)("Reported Users"),g=(0,s.Uk)(" | "),h=(0,s.Uk)("Banned Users"),w=(0,s.Uk)(" | ");function f(e,t,r,a,o,i){const f=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",l,[(0,s._)("div",u,[(0,s._)("a",null,[(0,s._)("img",{src:n(6949),style:{border:"1px white solid","margin-left":"auto"}},null,8,d)]),(0,s.Wm)(f,{to:{path:"/"},class:"title"},{default:(0,s.w5)((()=>[c])),_:1}),p,m,(0,s._)("a",null,[(0,s.Wm)(f,{to:{path:"/"},class:"subtitle"},{default:(0,s.w5)((()=>[v])),_:1})]),g,(0,s._)("a",null,[(0,s.Wm)(f,{to:{path:"/bannedUsers"},class:"subtitle"},{default:(0,s.w5)((()=>[h])),_:1})]),w])])}var A={name:"NavigationBar"},b=n(89);const y=(0,b.Z)(A,[["render",f],["__scopeId","data-v-65bd358e"]]);var _=y,k={name:"App",components:{NavigationBar:_}};const D=(0,b.Z)(k,[["render",o]]);var U=D,x=n(678),j=n(7139);const F=e=>((0,s.dD)("data-v-f25fc6a4"),e=e(),(0,s.Cn)(),e),R={key:0},C={class:"table table-striped"},N=F((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Events"),(0,s._)("th",null,"Number of reports")])],-1))),B={key:0,style:{"background-color":"rgba(255, 0, 0, 0.2)"}},I={key:1},O=F((()=>(0,s._)("td",null,null,-1))),z=["onClick"],Y={key:1,class:"container"};function H(e,t,n,r,a,o){const i=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",null,[a.users.length>0?((0,s.wg)(),(0,s.iD)("div",R,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.users,(e=>((0,s.wg)(),(0,s.iD)("div",{key:e.id,class:"container"},[(0,s._)("p",null,(0,j.zw)(e.user_username)+" - "+(0,j.zw)(e.user_email),1),(0,s._)("table",C,[N,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.reported_events,(t=>((0,s.wg)(),(0,s.iD)("tbody",{key:t.id},[(0,s._)("td",null,[(0,s.Wm)(i,{to:{path:"/eventReviews/"+t.event_id}},{default:(0,s.w5)((()=>[(0,s.Uk)((0,j.zw)(t.event_name),1)])),_:2},1032,["to"])]),t.event_num_reports>2?((0,s.wg)(),(0,s.iD)("td",B,(0,j.zw)(t.num_reports),1)):((0,s.wg)(),(0,s.iD)("td",I,(0,j.zw)(t.event_num_reports),1)),O,(0,s._)("button",{onClick:t=>o.ban(e.user_id),class:"button"},"Ban",8,z)])))),128))])])))),128))])):((0,s.wg)(),(0,s.iD)("div",Y,"No users reported")),(0,s._)("p",null,(0,j.zw)(a.error),1)])}var V=n(6265),S=n.n(V),W={name:"ReportedUsers",data(){return{users:[],error:""}},methods:{async getUsers(){const e=this;S()({url:"v1/admin/reported",method:"get",headers:{"Content-type":"application/json",Accept:"application/json"},withCredentials:!0}).then((t=>{e.users=t.data})).catch((t=>{t.response&&(401===t.response.status?e.$router.push("/login"):e.error=t.response.data.error_message)}))},async ban(e){const t=this;S()({url:"v1/admin/ban",method:"post",data:JSON.stringify({id:e}),headers:{"Content-type":"application/json",Accept:"application/json"},withCredentials:!0}).then((()=>{t.users=t.users.filter((e=>{e.id}))})).catch((e=>{e.response&&(401===e.response.status?t.$router.push("/login"):t.error=e.response.data.error_message)}))}},mounted(){this.getUsers()}};const E=(0,b.Z)(W,[["render",H],["__scopeId","data-v-f25fc6a4"]]);var P=E;const G=e=>((0,s.dD)("data-v-c255b796"),e=e(),(0,s.Cn)(),e),X={class:"container"},Z={class:"table table-striped"},T=G((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Punctuation"),(0,s._)("th",null,"Review")])],-1)));function L(e,t,n,r,a,o){return(0,s.wg)(),(0,s.iD)("div",X,[(0,s._)("p",null,[(0,s.Uk)((0,j.zw)(a.event.name)+" - "+(0,j.zw)(a.username)+" ( "+(0,j.zw)(a.email)+" ) ",1),(0,s._)("button",{onClick:t[0]||(t[0]=e=>o.ban(a.event.user_creator)),class:"button"},"Ban")]),(0,s._)("table",Z,[T,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.reviews,(e=>((0,s.wg)(),(0,s.iD)("tbody",{key:e.user_id},[(0,s._)("td",null,(0,j.zw)(e.rating),1),(0,s._)("td",null,(0,j.zw)(e.comment),1)])))),128))])])}var K={name:"EventReviews",data(){return{event:{},username:"",email:"",reviews:[],error:""}},methods:{async getReviews(){const e=this;S()({url:"/v3/events/review?eventid="+this.$route.params.id,method:"get",headers:{"Content-type":"application/json",Accept:"application/json"},withCredentials:!0}).then((t=>{e.event=t.data.event,e.username=t.data.username,e.email=t.data.email,e.reviews=t.data.reviews})).catch((t=>{t.response&&(401===t.response.status?e.$router.push("/login"):e.error=t.response.data.error_message)}))},async ban(e){const t=this;S()({url:"v1/admin/ban",method:"post",data:JSON.stringify({id:e}),headers:{"Content-type":"application/json",Accept:"application/json"},withCredentials:!0}).then((()=>{location.reload()})).catch((e=>{e.response&&(401===e.response.status?t.$router.push("/login"):t.error=e.response.data.error_message)}))}},mounted(){this.getReviews()}};const q=(0,b.Z)(K,[["render",L],["__scopeId","data-v-c255b796"]]);var J=q;const M=e=>((0,s.dD)("data-v-5b7b6a68"),e=e(),(0,s.Cn)(),e),Q={class:"login"},$={class:"title"},ee=["src"],te=(0,s.Uk)(" SocialOut"),ne=M((()=>(0,s._)("label",{class:"form-label",for:"#email"},"Email:",-1))),re=M((()=>(0,s._)("label",{class:"form-label",for:"#password"},"Password:",-1))),se={key:0,class:"error"},ae=M((()=>(0,s._)("input",{class:"form-submit",type:"submit",value:"Login"},null,-1)));function oe(e,t,a,o,i,l){return(0,s.wg)(),(0,s.iD)("div",Q,[(0,s._)("h2",$,[(0,s._)("a",null,[(0,s._)("img",{src:n(6949),style:{border:"1px white solid","margin-left":"auto",width:"45px",height:"45px"}},null,8,ee)]),te]),(0,s._)("form",{action:"",class:"form",onSubmit:t[2]||(t[2]=(0,r.iM)(((...e)=>l.login&&l.login(...e)),["prevent"]))},[ne,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.email=t),class:"form-input",type:"email",id:"email",required:"",placeholder:"Email"},null,512),[[r.nr,e.email]]),re,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.password=t),class:"form-input",type:"password",id:"password",placeholder:"Password"},null,512),[[r.nr,e.password]]),e.error?((0,s.wg)(),(0,s.iD)("p",se,"Wrong email or password.")):(0,s.kq)("",!0),ae],32)])}var ie={name:"ReportedUsers",data:()=>({email:"",password:"",error:!1}),methods:{async login(){S()({url:"v1/admin/login",method:"post",data:JSON.stringify({email:this.email,password:this.password}),headers:{"Content-type":"application/json",Accept:"application/json"}}).then((e=>{S().defaults.headers.common.Authorization="Bearer "+e.data.access_token,this.$router.push("/")})).catch((()=>{this.error=!0}))}}};const le=(0,b.Z)(ie,[["render",oe],["__scopeId","data-v-5b7b6a68"]]);var ue=le;const de=e=>((0,s.dD)("data-v-2d77bf56"),e=e(),(0,s.Cn)(),e),ce={class:"container"},pe={key:0},me={key:1},ve={class:"table table-striped"},ge=de((()=>(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"Username"),(0,s._)("th",null,"Email"),(0,s._)("th",null,"Ban date")])],-1))),he=["onClick"];function we(e,t,n,r,a,o){return(0,s.wg)(),(0,s.iD)("div",ce,[a.users.length<1?((0,s.wg)(),(0,s.iD)("div",pe,"No users banned")):((0,s.wg)(),(0,s.iD)("div",me,[(0,s._)("table",ve,[ge,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.users,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.id},[(0,s._)("td",null,(0,j.zw)(e.username),1),(0,s._)("td",null,(0,j.zw)(e.email),1),(0,s._)("td",null,(0,j.zw)(e.date),1),(0,s._)("button",{onClick:t=>o.unban(e.email),class:"button"},"Unban",8,he)])))),128))])])]))])}var fe={name:"BannedUsers",data(){return{error:"",users:[]}},methods:{async getUsers(){const e=this;S()({url:"v1/admin/banned",method:"get",headers:{"Content-type":"application/json",Accept:"application/json"},withCredentials:!0}).then((t=>{e.users=t.data})).catch((t=>{t.response&&(401===t.response.status?e.$router.push("/login"):e.error=t.response.data.error_message)}))},async unban(e){const t=this;S()({url:"v1/admin/unban",method:"post",data:JSON.stringify({email:e}),headers:{"Content-type":"application/json",Accept:"application/json"},withCredentials:!0}).then((()=>{t.users=t.users.filter((e=>{e.email}))})).catch((e=>{e.response&&(401===e.response.status?t.$router.push("/login"):t.error=e.response.data.error_message)}))}},mounted(){this.getUsers()}};const Ae=(0,b.Z)(fe,[["render",we],["__scopeId","data-v-2d77bf56"]]);var be=Ae;const ye=[{path:"/",name:"ReportedUsers",component:P},{path:"/eventReviews/:id",name:"EventReviews",component:J},{path:"/login",name:"Login",component:ue},{path:"/bannedUsers",name:"BannedUsers",component:be}],_e=(0,x.p7)({history:(0,x.PO)(),routes:ye});var ke=_e;(0,r.ri)(U).use(ke).mount("#app")},6949:function(e){e.exports="data:image/png;base64,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"}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,s,a){if(!r){var o=1/0;for(d=0;d<e.length;d++){r=e[d][0],s=e[d][1],a=e[d][2];for(var i=!0,l=0;l<r.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(i=!1,a<o&&(o=a));if(i){e.splice(d--,1);var u=s();void 0!==u&&(t=u)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,s,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,a,o=r[0],i=r[1],l=r[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(l)var d=l(n)}for(t&&t(r);u<o.length;u++)a=o[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},r=self["webpackChunkso_webapp"]=self["webpackChunkso_webapp"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6626)}));r=n.O(r)})();
//# sourceMappingURL=app.2410d807.js.map