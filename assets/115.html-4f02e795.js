import{d as q,h as s,r as p,o as C,c as S,b as e,e as i,a as _,I as v,an as g,v as m,f as b,aw as l,_ as y}from"./app-40132e0c.js";const T=b('<h1 id="_115-网盘" tabindex="-1"><a class="header-anchor" href="#_115-网盘" aria-hidden="true">#</a> 115 网盘</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于 115 网盘的限制，下载必须携带 Cookies，所以只能使用本程序中的代理功能进行传输。 （可以用其他机器转）</p></div><h2 id="根文件夹-id" tabindex="-1"><a class="header-anchor" href="#根文件夹-id" aria-hidden="true">#</a> <strong>根文件夹 ID</strong></h2><p>打开 115 网盘官网，点击进入要设置的文件夹时点击 URL 中 <code>cid</code>后面的数字</p>',4),K={href:"https://115.com/?cid=249163533602609229&offset=0&tab=&mode=wangpan",target:"_blank",rel:"noopener noreferrer"},N=e("p",null,[i("这个文件夹的 "),e("code",null,"根文件夹ID"),i(" 即为 "),e("code",null,"249163533602609229")],-1),P=e("br",null,null,-1),w=e("h2",{id:"qrcode-扫码方式登录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#qrcode-扫码方式登录","aria-hidden":"true"},"#"),i(),e("strong",null,"QRCode 扫码方式登录")],-1),J=["disabled"],R={style:{margin:"4px"}},U=["src"],W={class:"hint-container info"},D={class:"hint-container-title"},I=b('<br><h2 id="cookie-方式登录" tabindex="-1"><a class="header-anchor" href="#cookie-方式登录" aria-hidden="true">#</a> <strong>Cookie 方式登录</strong></h2><p><code>Cookie</code>可以浏览器登录从浏览器的<code>api</code>中获取，也可用抓包 115 应用获取 cookie，115 应用的有效期比较长，注意 cookie 最后不要有<code>;</code>。</p><br><h2 id="秒传" tabindex="-1"><a class="header-anchor" href="#秒传" aria-hidden="true">#</a> <strong>秒传</strong></h2><ul><li><strong>v.3.27.0</strong> 版本 增强秒传：可以直接通过复制方式来和<code>阿里云盘Open</code>进行相互秒传文件 <ul><li>前提是要从115秒传到阿里云盘Open的文件，阿里云盘Open已经存在，否则就是正常复制任务。</li></ul></li></ul><p>如果要使用秒传来上传文件建议在自己家用电脑本地搭建一个AList添加一个<code>本地存储</code>和<code>115云盘</code>进行复制秒传这样节省资源。</p><br><h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式" aria-hidden="true">#</a> <strong>默认使用的下载方式</strong></h3>',9),L=q({__name:"115.html",setup(E){const t=s("获取二维码"),a=s(0),c=s(""),d=s(""),n=s(""),f=async()=>{t.value="等待...",a.value=1;const o=await(await fetch(`${l()}/proxy/qrcodeapi.115.com/api/1.0/web/1.0/token`)).json();console.log(o),t.value="使用115网盘 APP 扫描然后点击",a.value=2,n.value={uid:o.data.uid,time:o.data.time.toString(),sign:o.data.sign,_:(new Date().getTime()/1e3).toString()},c.value=`${l()}/qr/?size=400&text=${encodeURIComponent(o.data.qrcode)}`},k=async()=>{a.value=3,t.value="等待...";const o=await(await fetch(`${l()}/proxy/qrcodeapi.115.com/get/status/?uid=${n.value.uid}&time=${n.value.time}&sign=${n.value.sign}&_=${n.value._}`)).json(),{data:{version:h,status:r,msg:F}}=o;if(r!==2){a.value=2,t.value="使用115网盘 APP 扫描然后点击",alert("Status:"+r);return}d.value=n.value.uid,t.value="获取 Token 成功",a.value=4,console.log(o)},x=async()=>{a.value===0&&f(),a.value===2&&k()};return(u,o)=>{const h=p("ExternalLinkIcon"),r=p("Mermaid");return C(),S("div",null,[T,e("p",null,[i("如 "),e("a",K,[i("https://115.com/?cid=249163533602609229&offset=0&tab=&mode=wangpan"),_(h)])]),N,P,w,e("p",null,[e("button",{disabled:a.value===3||a.value===1,style:{outline:"none",padding:"12px",background:"#70c6be",border:"none","border-radius":"8px",cursor:"pointer","font-size":"20px"},onClick:x},v(t.value),9,J)]),g(e("div",R,[e("img",{src:c.value},null,8,U)],512),[[m,c.value]]),g(e("div",null,[e("div",W,[e("p",D,"Token: "+v(d.value),1)])],512),[[m,d.value]]),I,_(r,{id:"mermaid-65",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFZEOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqQ90QiqPS3N3NTcFG6CsbExqgkmBRUQbaVJ6UWJBRkKmSmphgrRCrFg0WRDMJWalwLlRj+bs+bZnF1Pdi9+PqEt1srKqjg/NzU5J7G42NYW4mVbW1u7RKNooLefdWx/sW7f0yXtULNAqlxS0xTgWmBOtDQDK0gyjIaYGxrkE6urB9T4sqFTTxeXaZnJ2UAtCkp6evopRZllqUXF+sn5ubn5eXoZJbk5yuWpSSmJZbrP1057PnWpEpIeYMgSqQcAEWS3Rg=="})])}}}),z=y(L,[["__file","115.html.vue"]]);export{z as default};
