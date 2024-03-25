import{d as I,h as s,r as m,o as T,c as A,b as e,e as o,a as d,I as w,an as y,v as k,w as l,f as c,aw as _,_ as S}from"./app-KraMsch8.js";import{_ as Q,a as O,b as z,c as B}from"./add_error-AMr3rcUA.js";const U=c('<h1 id="_115-cloud-share" tabindex="-1"><a class="header-anchor" href="#_115-cloud-share" aria-hidden="true">#</a> 115 Cloud / Share</h1><h2 id="_115-cloud" tabindex="-1"><a class="header-anchor" href="#_115-cloud" aria-hidden="true">#</a> <strong>115 Cloud</strong></h2><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Due to the limitation of 115 Cloud, the download must carry cookies, so only the proxy function in this program can be used for transfer. (You can use other machines to transfer)</p></div><h3 id="root-folder-id" tabindex="-1"><a class="header-anchor" href="#root-folder-id" aria-hidden="true">#</a> <strong>Root folder ID</strong></h3>',4),W={href:"https://115.com/?cid=249163533602609229&offset=0&tab=&mode=wangpan",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"249163533602609229",-1),F=e("br",null,null,-1),M=e("h3",{id:"login-by-qrcode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#login-by-qrcode","aria-hidden":"true"},"#"),o(),e("strong",null,"Login by QRCode")],-1),R=["disabled"],E=e("br",null,null,-1),H=e("br",null,null,-1),L={style:{margin:"4px"}},N=["src"],Y={class:"hint-container info"},j={class:"hint-container-title"},K=c('<br><h3 id="login-by-cookie" tabindex="-1"><a class="header-anchor" href="#login-by-cookie" aria-hidden="true">#</a> <strong>Login by Cookie</strong></h3><p>The <code>cookie</code> is obtained from the request.</p><br><h3 id="rapid-upload" tabindex="-1"><a class="header-anchor" href="#rapid-upload" aria-hidden="true">#</a> <strong>Rapid upload</strong></h3><ul><li><p><strong>v.3.27.0</strong> version Enhanced Rapid upload: You can directly upload files with <code>Alibaba Cloud Disk Open</code> by copying</p><ul><li>The premise is to upload the file from 115 Rapid upload to Alibaba Cloud Disk Open, the file already exists in Alibaba Cloud Disk Open, otherwise it is a normal copy task.</li><li>If you want to transfer 115 cloud disk files to Alibaba Cloud Disk in seconds, you need to turn on the Rapid upload option of Alibaba Cloud Disk, otherwise it will be uploaded in normal mode.</li></ul></li></ul><p>If you want to upload files using Miaochuan, it is recommended to build an AList locally on your home computer and add a <code>local storage</code> and <code>115 cloud disk</code> to copy Miaochuan to save resources.</p><br><h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used" aria-hidden="true">#</a> <strong>The default download method used</strong></h3>',9),P=c('<h2 id="_115-share" tabindex="-1"><a class="header-anchor" href="#_115-share" aria-hidden="true">#</a> 115 Share</h2><p><img src="'+z+'" alt="url_demo"></p><p><code>Sharing link ID</code><sup>1</sup> and <code>Sharing link extraction code</code><sup>2</sup> How to obtain them respectively is clear at a glance.</p><h3 id="root-folder-id-1" tabindex="-1"><a class="header-anchor" href="#root-folder-id-1" aria-hidden="true">#</a> <strong>Root folder ID</strong></h3><p>The default is empty and the entire directory file is mounted.</p><p>The folder IDs are the root folder ID and the subfolder ID respectively. The following demonstrates how to obtain the <code>shared root folder directory ID</code><sup>1</sup> and <code>other subfolder directory ID</code><sup>2</sup> respectively.</p>',6),V=e("p",null,"Open developer mode (F12) and clear all requests first. Before we enter the folder, clear all requests first.",-1),G=e("p",null,[o("Let's click on the root folder to enter. There will be a new request on the right, and then select "),e("code",null,"Load"),o(" to see the ID (cid) of our folder.")],-1),J=e("p",null,[e("img",{src:Q,alt:"url_demo"})],-1),Z=e("p",null,"Open developer mode (F12) and clear all requests first. Before we enter the folder, clear all requests first.",-1),X=e("p",null,[o("There will be a new request on the right, then select "),e("code",null,"Preview"),o(" and expand it to see the IDs (cid) of other subfolders.")],-1),$=e("p",null,[e("img",{src:O,alt:"url_demo"})],-1),ee=c('<br><h3 id="error-tips" tabindex="-1"><a class="header-anchor" href="#error-tips" aria-hidden="true">#</a> <strong>Error Tips</strong></h3><p>For example, the 115 sharing link shown in the picture below has expired, but the sharing link can still be opened.</p><p><img src="'+B+'" alt="url_demo"></p><p>But when adding and saving, the following error code will appear:</p><p><code>Failed init storage but storage is already created: failed init storage: failed to get share snap: json: cannot unmarshal number into Go struct field .data.shareinfo.share_state of type string </code></p><h3 id="the-default-download-method-used-1" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used-1" aria-hidden="true">#</a> <strong>The default download method used</strong></h3>',7),oe=I({__name:"115.html",setup(te){const n=s("Get QRCode"),t=s(0),h=s(""),u=s(""),r=s(""),x=async()=>{n.value="等待...",t.value=1;const a=await(await fetch(`${_()}/proxy/qrcodeapi.115.com/api/1.0/web/1.0/token`)).json();console.log(a),n.value="Use 115 Cloud APP To Scan Then Click",t.value=2,r.value={uid:a.data.uid,time:a.data.time.toString(),sign:a.data.sign,_:(new Date().getTime()/1e3).toString()},h.value=`${_()}/qr/?size=400&text=${encodeURIComponent(a.data.qrcode)}`},D=async()=>{t.value=3,n.value="Waiting...";const a=await(await fetch(`${_()}/proxy/qrcodeapi.115.com/get/status/?uid=${r.value.uid}&time=${r.value.time}&sign=${r.value.sign}&_=${r.value._}`)).json(),{data:{version:b,status:i,msg:v}}=a;if(i!==2){t.value=2,n.value="Use 115 Cloud APP To Scan Then Click",alert("Status:"+i);return}u.value=r.value.uid,n.value="Get Token Success",t.value=4,console.log(a)},C=async()=>{t.value===0&&x(),t.value===2&&D()};return(g,a)=>{const b=m("ExternalLinkIcon"),i=m("Mermaid"),v=m("Tabs");return T(),A("div",null,[U,e("p",null,[o("Open the official website of 115 Cloud and click the string behind the url when you click into the folder you want to set, such as "),e("a",W,[o("https://115.com/?cid=249163533602609229&offset=0&tab=&mode=wangpan"),d(b)]),o(", which is "),q]),F,M,e("p",null,[e("button",{disabled:t.value===3||t.value===1,style:{outline:"none",padding:"12px",background:"#70c6be",border:"none","border-radius":"8px",cursor:"pointer","font-size":"20px"},onClick:C},[E,o(" "+w(n.value),1),H],8,R)]),y(e("div",L,[e("img",{src:h.value},null,8,N)],512),[[k,h.value]]),y(e("div",null,[e("div",Y,[e("p",j,"Token: "+w(u.value),1)])],512),[[k,u.value]]),K,d(i,{id:"mermaid-67",code:"eJyNkL1uwjAURnee4gpWHBQooFpKK1WMnapWHaIMjn1dWzhxajskefuaNCA6VMKL/75z7HsJIbOgg0EKn0pzBcJ2tbFMQIVBWQHaQ+tRQDmAQMlaE55nZ0ga23HFXID3lxnE4cNgEHgKUhtDF2Uplz44e0S6kLvdtCadFkHRddMvuTXWxTspb3C2nnAp99v99mrYbDZ/DQ9N/4u15ZdjjQItMIUcivGUp+OEtZi2ubGcGWic7YeCUupthdww77NsqirLsie2zmOtDvC71U2FdZhs5+ABJVypyycfd2OgTPPDpW3jE/Dx9lqQhJmArmZBnzAh/9s1P0YFzJNkJVzMOr/itqpsnahQmUWHpWAn0tgYHOY3TOz1ncwPx9ee1g=="}),P,d(v,{id:"86",data:[{id:"1 shared root folder directory ID"},{id:"2 other subfolder directory ID"}],"tab-id":"115"},{title0:l(({value:p,isActive:f})=>[o("1 shared root folder directory ID")]),title1:l(({value:p,isActive:f})=>[o("2 other subfolder directory ID")]),tab0:l(({value:p,isActive:f})=>[V,G,J]),tab1:l(({value:p,isActive:f})=>[Z,X,$]),_:1}),ee,d(i,{id:"mermaid-129",code:"eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"})])}}}),re=S(oe,[["__file","115.html.vue"]]);export{re as default};