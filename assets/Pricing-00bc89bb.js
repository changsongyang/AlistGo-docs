import{v as Y,i as te,g as S,h as E,j as se,k as ne,d as q,l as ie,p as N,m as D,n as re,q as ae,s as I,t as oe,x as le,y as U,z as ue,A as X,V as fe,B as de,C as ce,D as pe,E as H,_ as J,o as g,c as L,b as ve,F as M,w as v,G as P,u as p,H as z,a as k,N as T,e as V,I as O}from"./app-0496688b.js";import{N as he}from"./Card-ed33e2c6.js";import{N as me}from"./Button-5191a5dd.js";import{N as ge}from"./headers-fac6749c.js";import{N as ye}from"./Icon-283f6f4b.js";import{N as _e}from"./text-f226294d.js";function Se(e){if(typeof e=="number")return{"":e.toString()};const t={};return e.split(/ +/).forEach(a=>{if(a==="")return;const[s,n]=a.split(":");n===void 0?t[""]=s:t[s]=n}),t}function B(e,t){var a;if(e==null)return;const s=Se(e);if(t===void 0)return s[""];if(typeof t=="string")return(a=s[t])!==null&&a!==void 0?a:s[""];if(Array.isArray(t)){for(let n=t.length-1;n>=0;--n){const r=t[n];if(r in s)return s[r]}return s[""]}else{let n,r=-1;return Object.keys(s).forEach(i=>{const o=Number(i);!Number.isNaN(o)&&t>=o&&o>=r&&(r=o,n=s[i])}),n}}function we(e){var t;const a=(t=e.dirs)===null||t===void 0?void 0:t.find(({dir:s})=>s===Y);return!!(a&&a.value===!1)}const xe={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function be(e){return`(min-width: ${e}px)`}const A={};function Re(e=xe){if(!te)return S(()=>[]);if(typeof window.matchMedia!="function")return S(()=>[]);const t=E({}),a=Object.keys(e),s=(n,r)=>{n.matches?t.value[r]=!0:t.value[r]=!1};return a.forEach(n=>{const r=e[n];let i,o;A[r]===void 0?(i=window.matchMedia(be(r)),i.addEventListener?i.addEventListener("change",d=>{o.forEach(u=>{u(d,n)})}):i.addListener&&i.addListener(d=>{o.forEach(u=>{u(d,n)})}),o=new Set,A[r]={mql:i,cbs:o}):(i=A[r].mql,o=A[r].cbs),o.add(s),i.matches&&o.forEach(d=>{d(i,n)})}),se(()=>{a.forEach(n=>{const{cbs:r}=A[e[n]];r.has(s)&&r.delete(s)})}),S(()=>{const{value:n}=t;return a.filter(r=>n[r])})}const W=1,Z=ne("n-grid"),K=1,ke={span:{type:[Number,String],default:K},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},Ne=q({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:ke,setup(){const{isSsrRef:e,xGapRef:t,itemStyleRef:a,overflowRef:s,layoutShiftDisabledRef:n}=ie(Z),r=re();return{overflow:s,itemStyle:a,layoutShiftDisabled:n,mergedXGap:S(()=>N(t.value||0)),deriveStyle:()=>{e.value;const{privateSpan:i=K,privateShow:o=!0,privateColStart:d=void 0,privateOffset:u=0}=r.vnode.props,{value:C}=t,w=N(C||0);return{display:o?"":"none",gridColumn:`${d??`span ${i}`} / span ${i}`,marginLeft:u?`calc((100% - (${i} - 1) * ${w}) / ${i} * ${u} + ${w} * ${u})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:a,offset:s,mergedXGap:n}=this;return D("div",{style:{gridColumn:`span ${a} / span ${a}`,marginLeft:s?`calc((100% - (${a} - 1) * ${n}) / ${a} * ${s} + ${n} * ${s})`:""}},this.$slots)}return D("div",{style:[this.itemStyle,this.deriveStyle()]},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e,{overflow:this.overflow}))}}),Ce={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},ee=24,j="__ssr__",$e={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:ee},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},Ge=q({name:"Grid",inheritAttrs:!1,props:$e,setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:a}=ae(e),s=/^\d+$/,n=E(void 0),r=Re((a==null?void 0:a.value)||Ce),i=I(()=>!!(e.itemResponsive||!s.test(e.cols.toString())||!s.test(e.xGap.toString())||!s.test(e.yGap.toString()))),o=S(()=>{if(i.value)return e.responsive==="self"?n.value:r.value}),d=I(()=>{var f;return(f=Number(B(e.cols.toString(),o.value)))!==null&&f!==void 0?f:ee}),u=I(()=>B(e.xGap.toString(),o.value)),C=I(()=>B(e.yGap.toString(),o.value)),w=f=>{n.value=f.contentRect.width},m=f=>{de(w,f)},$=E(!1),x=S(()=>{if(e.responsive==="self")return m}),c=E(!1),y=E();return oe(()=>{const{value:f}=y;f&&f.hasAttribute(j)&&(f.removeAttribute(j),c.value=!0)}),le(Z,{layoutShiftDisabledRef:U(e,"layoutShiftDisabled"),isSsrRef:c,itemStyleRef:U(e,"itemStyle"),xGapRef:u,overflowRef:$}),{isSsr:!ue,contentEl:y,mergedClsPrefix:t,style:S(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:N(e.xGap),rowGap:N(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${d.value}, minmax(0, 1fr))`,columnGap:N(u.value),rowGap:N(C.value)}),isResponsive:i,responsiveQuery:o,responsiveCols:d,handleResize:x,overflow:$}},render(){if(this.layoutShiftDisabled)return D("div",X({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var t,a,s,n,r,i,o;this.overflow=!1;const d=ce(pe(this)),u=[],{collapsed:C,collapsedRows:w,responsiveCols:m,responsiveQuery:$}=this;d.forEach(l=>{var G,_,h,b;if(((G=l==null?void 0:l.type)===null||G===void 0?void 0:G.__GRID_ITEM__)!==!0)return;if(we(l)){const R=H(l);R.props?R.props.privateShow=!1:R.props={privateShow:!1},u.push({child:R,rawChildSpan:0});return}l.dirs=((_=l.dirs)===null||_===void 0?void 0:_.filter(({dir:R})=>R!==Y))||null;const F=H(l),Q=Number((b=B((h=F.props)===null||h===void 0?void 0:h.span,$))!==null&&b!==void 0?b:W);Q!==0&&u.push({child:F,rawChildSpan:Q})});let x=0;const c=(t=u[u.length-1])===null||t===void 0?void 0:t.child;if(c!=null&&c.props){const l=(a=c.props)===null||a===void 0?void 0:a.suffix;l!==void 0&&l!==!1&&(x=(n=(s=c.props)===null||s===void 0?void 0:s.span)!==null&&n!==void 0?n:W,c.props.privateSpan=x,c.props.privateColStart=m+1-x,c.props.privateShow=(r=c.props.privateShow)!==null&&r!==void 0?r:!0)}let y=0,f=!1;for(const{child:l,rawChildSpan:G}of u){if(f&&(this.overflow=!0),!f){const _=Number((o=B((i=l.props)===null||i===void 0?void 0:i.offset,$))!==null&&o!==void 0?o:0),h=Math.min(G+_,m);if(l.props?(l.props.privateSpan=h,l.props.privateOffset=_):l.props={privateSpan:h,privateOffset:_},C){const b=y%m;h+b>m&&(y+=m-b),h+y+x>w*m?f=!0:y+=h}}f&&(l.props?l.props.privateShow!==!0&&(l.props.privateShow=!1):l.props={privateShow:!1})}return D("div",X({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[j]:this.isSsr||void 0},this.$attrs),u.map(({child:l})=>l))};return this.isResponsive&&this.responsive==="self"?D(fe,{onResize:this.handleResize},{default:e}):e()}}),Be={},Ae={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},Ee=ve("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41l-7.59 7.59a.996.996 0 0 1-1.41 0z",fill:"currentColor"},null,-1),De=[Ee];function Ie(e,t){return g(),L("svg",Ae,De)}const Me=J(Be,[["render",Ie],["__file","Check.vue"]]),Le=q({__name:"Pricing",setup(e){let t={pricing:[{title:"Open Source",price:"Free",features:["All platforms supported","All features supported","More than 30 drivers","No ads","No restrictions","..."],btns:[{text:"Download",link:"https://github.com/alist-org/alist/releases"},{text:"Sponsor",link:"/guide/sponsor.html",secondary:!1,type:"error"}]},{title:"AList Desktop",price:"＄10",features:["All Open Source features","Use a nice UI to manage the Alist program instead of the command line, and easily view logs","Mount all storages as a local disk","The native start with system","Automatically check for updates","Quick view administrator information","System Tray, close the window running background does not quit","..."],btns:[{text:"Download",link:"https://github.com/alist-org/desktop-release/releases"},{text:"Buy",link:"https://r.nn.ci/ad",type:"success"}]},{title:"Technical Support",price:"Pay as you go",features:["All Open Source features","In view of the specific case analysis","Assist in deployment and debugging","Secondary development according to specific requirements","..."],btns:[{text:"Contact",link:"mailto:i@nn.ci"}]}]};location.pathname.startsWith("/zh/")&&(t={pricing:[{title:"开源",price:"免费",features:["支持所有平台","支持所有功能","支持超过30种驱动","无广告","没有限制","..."],btns:[{text:"下载",link:"https://github.com/alist-org/alist/releases"},{text:"赞助",link:"/zh/guide/sponsor.html",secondary:!1,type:"error"}]},{title:"AList桌面版",price:"￥50",features:["所有开源功能","使用好看的UI管理AList程序而不是命令行，方便的查看日志","将所有存储挂载为本地磁盘","原生的开机自启","自动检查更新","快捷查看管理员信息","系统托盘，关闭窗口后台运行不退出","..."],btns:[{text:"下载",link:"https://github.com/alist-org/desktop-release/releases"},{text:"购买",link:"https://r.nn.ci/ad",type:"success"}]},{title:"技术支持",price:"按需付费",features:["所有开源功能","针对具体案例分析解答","协助部署和调试","根据具体需求进行二次开发","..."],btns:[{text:"联系",link:"mailto:i@nn.ci"}]}]});function a(s){window.open(s,"_blank")}return(s,n)=>(g(),M(p(Ge),{cols:"1 700:2","x-gap":"8","y-gap":"8"},{default:v(()=>[(g(!0),L(z,null,P(p(t).pricing,r=>(g(),M(p(Ne),null,{default:v(()=>[k(p(he),{class:"card",title:r.title,hoverable:""},{action:v(()=>[k(p(T),{size:"large",class:"space"},{default:v(()=>[(g(!0),L(z,null,P(r.btns,i=>(g(),M(p(me),{key:i.link,secondary:i.secondary,size:"large",type:i.type??"info",block:"",onClick:o=>a(i.link)},{default:v(()=>[V(O(i.text),1)]),_:2},1032,["secondary","type","onClick"]))),128))]),_:2},1024)]),default:v(()=>[k(p(ge),null,{default:v(()=>[V(O(r.price),1)]),_:2},1024),k(p(T),{vertical:"",size:"large",class:"list"},{default:v(()=>[(g(!0),L(z,null,P(r.features,i=>(g(),M(p(T),{key:i,wrap:!1,align:"center"},{default:v(()=>[k(p(ye),{style:{display:"inherit"},color:"#1ba0d8",component:Me,size:"20"}),k(p(_e),{style:{"font-size":"medium"}},{default:v(()=>[V(O(i),1)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1032,["title"])]),_:2},1024))),256))]),_:1}))}});const qe=J(Le,[["__scopeId","data-v-f640011e"],["__file","Pricing.vue"]]);export{qe as P};