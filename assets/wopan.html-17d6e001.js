import{_ as s,a as r,b as i,c}from"./add-wopan-33787454.js";import{_ as d,r as a,o as h,c as p,b as e,e as n,a as t,f as _}from"./app-24063afc.js";const u={},m=e("h1",{id:"中国联通云盘",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#中国联通云盘","aria-hidden":"true"},"#"),n(" 中国联通云盘")],-1),f={href:"https://pan.wo.cn/",target:"_blank",rel:"noopener noreferrer"},k=e("ul",null,[e("li",null,"⚠️ AList 3.19.0版本及以上版本才能使用本驱动")],-1),g=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,"AList挂载联通云盘使用的是Web端"),e("p",null,"如果你先使用工具获取了令牌，再去登录网页端联通云盘会将AList挂载的踢下线导致失效"),e("p",null,"登录手机端没问题，不会被踢下线，可以同时并存。")],-1),b={href:"https://alist.nn.ci/tool/wopan/token.html",target:"_blank",rel:"noopener noreferrer"},x=e("ul",null,[e("li",null,[e("img",{src:s,alt:""})])],-1),K=e("p",null,[e("mark",null,"此工具可能因为使用人数过多导致出现图形验证码，若出现图形验证码，则需要手动抓包：")],-1),C=e("li",null,"打开开发者工具",-1),F={href:"https://pan.wo.cn/",target:"_blank",rel:"noopener noreferrer"},w=e("li",null,[n("找到请求内容为这个的请求： "),e("img",{src:r,alt:""})],-1),M=e("li",null,[n("在响应中找到token： "),e("img",{src:i,alt:""})],-1),z=_('<h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id" aria-hidden="true">#</a> <strong>根文件夹ID</strong></h2><ul><li><p>个人云：<strong>0</strong></p><ul><li>单独文件夹ID：未知(后续补充)</li></ul></li><li><p>家庭云：未知(后续补充)</p><ul><li>家庭云单独文件夹ID：未知(后续补充)</li></ul></li></ul><h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> <strong>类型</strong></h2><p>个人云：将<code>Family ID</code>空着就是个人云</p><p>家庭云：填写<code>Family ID</code> 未知(后续补充)</p><h3 id="alist挂载填写示例" tabindex="-1"><a class="header-anchor" href="#alist挂载填写示例" aria-hidden="true">#</a> <strong>AList挂载填写示例：</strong></h3><p>将使用工具获取的 <code>refresh_token填入刷新令牌</code>，<code>access_token填入访问令牌</code></p><p><img src="'+c+'" alt=""></p><h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式" aria-hidden="true">#</a> <strong>默认使用的下载方式</strong></h3>',9);function A(R,W){const o=a("ExternalLinkIcon"),l=a("Mermaid");return h(),p("div",null,[m,e("p",null,[n("云盘地址："),e("strong",null,[e("a",f,[n("https://pan.wo.cn/"),t(o)])])]),k,g,e("p",null,[n("获取令牌工具地址："),e("strong",null,[e("a",b,[n("https://alist.nn.ci/tool/wopan/token.html"),t(o)])])]),x,K,e("ul",null,[C,e("li",null,[n("打开官网 "),e("a",F,[n("https://pan.wo.cn/"),t(o)]),n(" 登录")]),w,M]),z,t(l,{id:"mermaid-109",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="})])}const L=d(u,[["render",A],["__file","wopan.html.vue"]]);export{L as default};