import{d as x,h as i,r as p,o as w,c as C,b as e,e as d,a as g,I as m,an as f,v,f as _,aw as c,_ as T}from"./app-6307d3f7.js";const D=_('<h1 id="_115-cloud" tabindex="-1"><a class="header-anchor" href="#_115-cloud" aria-hidden="true">#</a> 115 Cloud</h1><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Due to the limitation of 115 Cloud, the download must carry cookies, so only the proxy function in this program can be used for transfer. (You can use other machines to transfer)</p></div><h2 id="root-folder-id" tabindex="-1"><a class="header-anchor" href="#root-folder-id" aria-hidden="true">#</a> <strong>Root folder ID</strong></h2>',3),A={href:"https://115.com/?cid=249163533602609229&offset=0&tab=&mode=wangpan",target:"_blank",rel:"noopener noreferrer"},Q=e("code",null,"249163533602609229",-1),I=e("br",null,null,-1),M=e("h2",{id:"login-by-qrcode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#login-by-qrcode","aria-hidden":"true"},"#"),d(),e("strong",null,"Login by QRCode")],-1),z=["disabled"],O={style:{margin:"4px"}},U=["src"],W={class:"hint-container info"},q={class:"hint-container-title"},E=_('<br><h2 id="login-by-cookie" tabindex="-1"><a class="header-anchor" href="#login-by-cookie" aria-hidden="true">#</a> <strong>Login by Cookie</strong></h2><p>The <code>cookie</code> is obtained from the request.</p><br><h2 id="rapid-upload" tabindex="-1"><a class="header-anchor" href="#rapid-upload" aria-hidden="true">#</a> <strong>Rapid upload</strong></h2><ul><li><p><strong>v.3.27.0</strong> version Enhanced Rapid upload: You can directly upload files with <code>Alibaba Cloud Disk Open</code> by copying</p><ul><li>The premise is to upload the file from 115 Rapid upload to Alibaba Cloud Disk Open, the file already exists in Alibaba Cloud Disk Open, otherwise it is a normal copy task.</li></ul></li></ul><p>If you want to upload files using Miaochuan, it is recommended to build an AList locally on your home computer and add a <code>local storage</code> and <code>115 cloud disk</code> to copy Miaochuan to save resources.</p><br><h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used" aria-hidden="true">#</a> <strong>The default download method used</strong></h3>',9),N=x({__name:"115.html",setup(R){const t=i("Get QRCode"),o=i(0),r=i(""),l=i(""),n=i(""),b=async()=>{t.value="等待...",o.value=1;const a=await(await fetch(`${c()}/proxy/qrcodeapi.115.com/api/1.0/web/1.0/token`)).json();console.log(a),t.value="Use 115 Cloud APP To Scan Then Click",o.value=2,n.value={uid:a.data.uid,time:a.data.time.toString(),sign:a.data.sign,_:(new Date().getTime()/1e3).toString()},r.value=`${c()}/qr/?size=400&text=${encodeURIComponent(a.data.qrcode)}`},k=async()=>{o.value=3,t.value="Waiting...";const a=await(await fetch(`${c()}/proxy/qrcodeapi.115.com/get/status/?uid=${n.value.uid}&time=${n.value.time}&sign=${n.value.sign}&_=${n.value._}`)).json(),{data:{version:h,status:s,msg:S}}=a;if(s!==2){o.value=2,t.value="Use 115 Cloud APP To Scan Then Click",alert("Status:"+s);return}l.value=n.value.uid,t.value="Get Token Success",o.value=4,console.log(a)},y=async()=>{o.value===0&&b(),o.value===2&&k()};return(u,a)=>{const h=p("ExternalLinkIcon"),s=p("Mermaid");return w(),C("div",null,[D,e("p",null,[d("Open the official website of 115 Cloud and click the string behind the url when you click into the folder you want to set, such as "),e("a",A,[d("https://115.com/?cid=249163533602609229&offset=0&tab=&mode=wangpan"),g(h)]),d(", which is "),Q]),I,M,e("p",null,[e("button",{disabled:o.value===3||o.value===1,style:{outline:"none",padding:"12px",background:"#70c6be",border:"none","border-radius":"8px",cursor:"pointer","font-size":"20px"},onClick:y},m(t.value),9,z)]),f(e("div",O,[e("img",{src:r.value},null,8,U)],512),[[v,r.value]]),f(e("div",null,[e("div",W,[e("p",q,"Token: "+m(l.value),1)])],512),[[v,l.value]]),E,g(s,{id:"mermaid-59",code:"eJyNkL1uwjAURnee4gpWHBQooFpKK1WMnapWHaIMjn1dWzhxajskefuaNCA6VMKL/75z7HsJIbOgg0EKn0pzBcJ2tbFMQIVBWQHaQ+tRQDmAQMlaE55nZ0ga23HFXID3lxnE4cNgEHgKUhtDF2Uplz44e0S6kLvdtCadFkHRddMvuTXWxTspb3C2nnAp99v99mrYbDZ/DQ9N/4u15ZdjjQItMIUcivGUp+OEtZi2ubGcGWic7YeCUupthdww77NsqirLsie2zmOtDvC71U2FdZhs5+ABJVypyycfd2OgTPPDpW3jE/Dx9lqQhJmArmZBnzAh/9s1P0YFzJNkJVzMOr/itqpsnahQmUWHpWAn0tgYHOY3TOz1ncwPx9ee1g=="})])}}}),L=T(N,[["__file","115.html.vue"]]);export{L as default};