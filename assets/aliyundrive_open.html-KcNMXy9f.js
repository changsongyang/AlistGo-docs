import{_ as p,a as f,b,c as g}from"./error-SR2GrdB0.js";import{_ as m}from"./aliyundrive-RM0_7Jqe.js";import{d as y,h as s,r as d,o as v,c as w,b as e,e as t,a as o,I as c,f as n,aw as k,_}from"./app-cSJ8TKob.js";const A=e("h1",{id:"aliyundrive-open",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#aliyundrive-open","aria-hidden":"true"},"#"),t(" Aliyundrive Open")],-1),x=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"Tips"),e("p",null,"Aliyundrive Open, using the official authorization API development.")],-1),I={class:"hint-container info"},C=e("p",{class:"hint-container-title"},"Aliyundrive VIP",-1),S=e("strong",null,"Aliyundrive VIP",-1),D={href:"https://www.alipan.com/cpx/member?userCode=MzAwMDM1&disableNav=YES",target:"_blank",rel:"noopener noreferrer"},z=e("i",{class:"fa-solid fa-lightbulb fa-bounce",style:{color:"orange"}},null,-1),O={href:"https://www.alipan.com/cpx/member?userCode=MzAwMDM1&disableNav=YES",target:"_blank",rel:"noopener noreferrer"},P=e("strong",null,"Coupon",-1),T={href:"https://www.alipan.com/cpx/member?userCode=MzAwMDM1&disableNav=YES",target:"_blank",rel:"noopener noreferrer"},q=e("strong",null,"immediately buy",-1),R=e("mark",null,"Only 10,000 copies",-1),N=e("img",{src:p,alt:"vip2",style:{zoom:"30%"}},null,-1),M={class:"hint-container danger"},L=e("p",{class:"hint-container-title"},"Read the precautions carefully",-1),B=e("li",null,[e("mark",null,[t("The refresh token obtained by this tool can only be used for "),e("strong",null,"Aliyundrive open platform"),t(" storage mount method")])],-1),E=e("li",null,"The token filled in when Alist is mounted should also be provided by this tool, and the previous acquisition method will not be available",-1),Q=e("li",null,"Not applicable to others, but only for Alist",-1),V=e("strong",null,"Too Many Requests",-1),H=e("ul",null,[e("li",null,"and viewing files and watching video downloads is not counted，The number of times and time mentioned above are dynamic~"),e("li",null,[t("New optimization: "),e("strong",null,"will only refresh the token when the request finds that the token is expired, update restart editing if the token is still valid will not refresh.")])],-1),Y=n('<li>Online playback video reminder: <strong><code>ExceedCapacityForbidden</code></strong> error, the capacity exceeds restrictions, implements restrictions, needs to be expanded or deleted unnecessary file saving space to save space,<a href="#four%E3%80%81">View details</a></li><li><i class="fa-solid fa-seal-exclamation fa-beat" style="color:#ff0000;"></i> <strong><mark>Do not share the Alibaba cloud disk publicly, and the account is prohibited from being accessed by multiple IPs. If the account is frozen after sharing, you will be responsible for the consequences</mark> <i class="fa-solid fa-seal-exclamation fa-beat" style="color:#ff0000;"></i> After adding storage, please set up meta information and other measures in time to prevent the account from being frozen by {other people/crawlers} malicious [access/sharing]，Other cloud disks also need to be prevented from being frozen/banned</strong></li><li>It is prohibited to use Alibaba Cloud Disk to build distribution services including but not limited to <strong><code>picture bed, software bed</code></strong> and <strong><code>video external link to video website playback</code></strong>, as well as some non-standard usage methods not mentioned above. If you violate the rules and are <code>frozen/banned</code>, you will be responsible for the consequences and it cannot be lifted.</li>',3),U={class:"hint-container danger"},F=e("p",{class:"hint-container-title"},"About Alibaba Cloud OAUTH verification API cannot be connected",-1),j=e("p",null,[t("Since the original API "),e("code",null,"https://api.nn.ci"),t(" is blocked by SNI, resulting in the case that cannot be connected, two new APIs are provided for use:")],-1),G=e("li",null,[e("code",null,"https://api-cf.nn.ci"),t(" (A layer of Cloudflare)")],-1),W=e("code",null,"https://api.xhofe.top",-1),K={href:"https://www.asiayun.com/aff/QQCOOQKZ",target:"_blank",rel:"noopener noreferrer"},X=e("li",null,[e("p",null,"You need to replace the OAUTH token link in the ALIYUNDRIVE_OPEN configuration to"),e("ul",null,[e("li",null,[e("code",null,"https://api-cf.nn.ci/alist/ali_open/token")]),e("li",null,[e("code",null,"https://api.xhofe.top/alist/ali_open/token")]),e("li",null,[e("img",{src:"https://user-images.githubusercontent.com/56105412/245379419-bc90dd81-35d5-4773-952c-d160830efce8.png",alt:""})])])],-1),J={href:"https://github.com/alist-org/alist/discussions/4572",target:"_blank",rel:"noopener noreferrer"},Z=e("p",null,"Can I create an authorized OAUTH verification API by themselves?",-1),$={href:"https://api.nni.ci",target:"_blank",rel:"noopener noreferrer"},ee=e("h2",{id:"refresh-token",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#refresh-token","aria-hidden":"true"},"#"),t(),e("strong",null,"refresh token")],-1),te={href:"https://alist.nn.ci/tool/aliyundrive/request",target:"_blank",rel:"noopener noreferrer"},oe=n('<h4 id="get-example-graph" tabindex="-1"><a class="header-anchor" href="#get-example-graph" aria-hidden="true">#</a> <strong>Get example graph</strong></h4><p><strong>refresh_token</strong> can be obtained in the following two ways</p><div class="image-preview"><img src="'+f+'" alt="Go to login" title="Go to login"><img src="'+b+'" alt="Scan QrCode" title="Scan QrCode"></div><h3 id="root-folder-file-id" tabindex="-1"><a class="header-anchor" href="#root-folder-file-id" aria-hidden="true">#</a> <strong>Root folder file_id</strong></h3><p>The default is <code>root</code>, which displays all cloud disk contents. If you only want to display the contents of a certain folder, you can change it to <code>file_id</code></p>',5),ie={href:"https://www.alipan.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940",target:"_blank",rel:"noopener noreferrer"},ne=n('<p>which is <code>5fe01e1830601baf774e4827a9fb8fb2b5bf7940</code></p><p><img src="'+m+'" alt="file_id"></p><br><h3 id="client-id-client-secret" tabindex="-1"><a class="header-anchor" href="#client-id-client-secret" aria-hidden="true">#</a> <strong>Client id，Client secret</strong></h3><p>Normal users don’t need to fill in the blank. If they apply for official authorization, they can also use their own to fill in. If it is blank, the default is to use the one provided by Alist.</p><ul><li>If you use your own developer account, the Oauth token link must also be modified, and you must also use your own developer account ID and secret key to obtain the refresh token.</li></ul><br><h2 id="rapid-upload" tabindex="-1"><a class="header-anchor" href="#rapid-upload" aria-hidden="true">#</a> <strong>Rapid upload</strong></h2><ul><li><strong>v.3.22.1</strong> version New add</li></ul><p>It is Rapid upload. When adding the driver, you need to check Rapid upload to enable it. The premise of Rapid upload is that the Aliyun disk already has this file before you can perform Rapid upload, otherwise it is a normal upload.</p><p>Rapid upload calculates the <code>sha1</code> value of the file (should be correct), you don’t need to calculate it, you just need to upload it and upload it, it will automatically calculate it for you and upload it</p>',11),ae={href:"https://www.yuque.com/aliyundrive/zpfszx/ezlzok#y7lyH",target:"_blank",rel:"noopener noreferrer"},le=e("strong",null,"Rapid upload logic",-1),re=n('<hr><ul><li><strong>v.3.27.0</strong> version enhanced Rapid upload: you can directly transfer files with <code>115 network disk</code> by copying <ul><li>The premise is that the file to be transferred from the Alibaba Cloud disk to 115 in seconds, 115 already exists, otherwise it is a normal copy task.</li><li>If you want to transfer 115 cloud disk files to Alibaba Cloud Disk in seconds, you need to turn on the Rapid upload option of Alibaba Cloud Disk, otherwise it will be uploaded in normal mode.</li></ul></li></ul><p>If you want to upload files using Second Transmission, it is recommended to build an AList locally on your home computer and add a <code>Local Storage</code> and <code>Alibaba Cloud Disk</code> to copy Second Transmission to save resources.</p><br><h2 id="remove-way" tabindex="-1"><a class="header-anchor" href="#remove-way" aria-hidden="true">#</a> <strong>Remove way</strong></h2><p>If you don’t set it, it will be deleted to the recycle bin by default. If there is not enough space, you need to manually clean up the recycle bin. If you delete the wrong file, please go to the Alibaba Cloud Disk official website client to retrieve and restore it.</p><ul><li>Trash: Enter the cloud disk recycle bin after AList is deleted, which will occupy the cloud disk space, but it can be retrieved if it is deleted by mistake later.</li><li>Delete: direct deletion will not stay in the recycle bin, and will not occupy cloud disk space, but if deleted by mistake later, it cannot be retrieved. <ul><li>Note: Please do not disclose the Token obtained by your Alibaba Cloud Disk Open, <mark>If you accidentally leak it, please immediately go to <a href="#open-alibaba-cloud-disk-app-my-settings-gear-in-the-upper-right-corner-privacy-settings-authorization-management-click-alist-to-view"><strong>Other instructions¹</strong></a> to deauthorize, and then re-scan the code to authorize a new refresh token , at the same time, all the previous acquisitions will become invalid after the authorization is deactivated, so as to protect the security of your account</mark></li></ul></li></ul><br><h2 id="drive-type" tabindex="-1"><a class="header-anchor" href="#drive-type" aria-hidden="true">#</a> <strong>Drive type</strong></h2><p>You can choose the type of cloud disk, and you can choose a different type according to your needs. You can set it when adding a driver using AList of v3.25.1 and above. The default is the <code>default</code> type</p><ul><li><p><strong>default</strong>: Have Intelligeent level users default to <code>Resource</code>, No Have Intelligent User&#39;s default display is<code> Backup</code></p></li><li><p><strong>Resource</strong>: corresponding to <code>Resource</code> of the cloud disk</p></li><li><p><strong>Backup</strong>: corresponding to the <code>Backup</code> of the cloud disk</p></li></ul><p>If you don’t have the content mentioned above in your cloud disk, you need to log in to the Aliyun disk mobile terminal version <code>4.9.0</code> or later to see it</p><br><h2 id="livp-download-format" tabindex="-1"><a class="header-anchor" href="#livp-download-format" aria-hidden="true">#</a> <strong>Livp download format</strong></h2><p>That is, the IOS <code>live</code> photo cannot be downloaded because the non-IOS system cannot parse it, and now it needs <code>Jpeg</code> or <code>Mov</code> according to your own needs</p><ul><li>Jpeg: is the cover shown in the <code>live</code> photo</li><li>Mov: Long press the video screen of the <code>live</code> photo</li></ul><h2 id="internal-upload" tabindex="-1"><a class="header-anchor" href="#internal-upload" aria-hidden="true">#</a> <strong>Internal upload</strong></h2><p>If the server you deploy AList on is Aliyun ECS for Beijing area, turn on this switch to improve the upload speed. Do not turn on this switch for servers that do not meet the requirements, otherwise you will have problems with inability to upload.</p><ul><li><strong>Internal upload</strong> Can Alibaba Cloud ECS in non-Beijing areas be used? No, because Alibaba Cloud Disk is using object storage in the Beijing area</li></ul><br><h2 id="other-instructions" tabindex="-1"><a class="header-anchor" href="#other-instructions" aria-hidden="true">#</a> <strong>other instructions</strong></h2><h5 id="one、" tabindex="-1"><a class="header-anchor" href="#one、" aria-hidden="true">#</a> one、</h5><blockquote><p>AList only obtained cloud disk users (<strong>name avatar¹</strong>), (<strong>access file permission²</strong>) and (<strong>write file permission³</strong>), and did not obtain mobile phone number permission</p><p>Details can be viewed in two ways:</p><ol><li><p><strong>Prompt</strong> when scanning the QR code to obtain the refresh token</p></li><li><h6 id="open-alibaba-cloud-disk-app-my-settings-gear-in-the-upper-right-corner-privacy-settings-authorization-management-click-alist-to-view" tabindex="-1"><a class="header-anchor" href="#open-alibaba-cloud-disk-app-my-settings-gear-in-the-upper-right-corner-privacy-settings-authorization-management-click-alist-to-view" aria-hidden="true">#</a> Open <strong>Alibaba Cloud Disk APP --&gt; My --&gt; Settings gear in the upper right corner --&gt; Privacy Settings --&gt; Authorization Management --&gt; Click AList</strong> to view</h6><ul><li>If you don&#39;t use it, you can manually cancel the permission at any time</li></ul></li></ol></blockquote><h5 id="two、" tabindex="-1"><a class="header-anchor" href="#two、" aria-hidden="true">#</a> two、</h5><blockquote><p>By default, the built-in player of Aliyun Disk is used - <strong>Aliyun Video Previewer</strong></p><p>The video uploaded to the cloud disk will be converted into an H.264 encoded video stream through the transcoding service. (The good thing is that IOS can play... well, it should be like this)</p><ul><li>For videos newly uploaded to the cloud disk, only the first 30s of the video are pre-transcoded by default. Full video transcoding is triggered on first playback. The transcoded video will be cached, and re-transcoding is not required to trigger playback again.</li><li>Videos shorter than 30s will not trigger pre-transcoding, and will only start transcoding when they are played for the first time.</li><li>Real-time transcoding takes some time.</li><li>The picture quality are: LD|SD|HD|FHD|QHD</li></ul></blockquote><h5 id="three、" tabindex="-1"><a class="header-anchor" href="#three、" aria-hidden="true">#</a> three、</h5><blockquote><p>Q: Why can’t Alibaba Cloud Disk Open see files of the Office Family Bucket type?</p><p>A: <s>Because Aliyun disk has not opened the relevant API, it is temporarily unavailable to view</s> (please look forward to)</p></blockquote><h5 id="four、" tabindex="-1"><a class="header-anchor" href="#four、" aria-hidden="true">#</a> Four、</h5><blockquote><p>Q：Unable to play Alibaba Cloud disk video online, prompt: <strong><code>ExceedCapacityForbidden</code></strong> error</p><p>A：<strong>User capacity exceeded</strong>, playback restricted, need to expand or delete unnecessary files to free up space,The prompts of the Alist and Alibaba Cloud Drive APP are as shown below</p><img src="'+g+'" style="zoom:70%;"></blockquote><h5 id="five、" tabindex="-1"><a class="header-anchor" href="#five、" aria-hidden="true">#</a> five、</h5><blockquote><p>Q: How to load subtitles?</p><p>A: Aliyun Disk Open needs to use <strong>Aliyun Video Previewer</strong> player, and temporarily &quot;<strong>Only support transcoding mkv-encapsulated srt, vtt text format subtitles</strong>&quot;</p><ul><li>Currently only supports transcoding eng, jpn, chi three languages, other languages will be lost</li></ul></blockquote><h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used" aria-hidden="true">#</a> <strong>The default download method used</strong></h3>',32),se=y({__name:"aliyundrive_open.html",setup(de){const l=s("unknown"),r=s("unknown");return typeof fetch<"u"&&(async()=>{const a=await(await fetch(`${k()}/alist/ali_open/limit`)).json();l.value=a.minutes,r.value=a.max})(),(h,a)=>{const i=d("ExternalLinkIcon"),u=d("Mermaid");return v(),w("div",null,[A,x,e("div",I,[C,e("p",null,[S,t("："),e("a",D,[t("https://www.alipan.com/cpx/member"),o(i)])]),e("ul",null,[e("li",null,[z,t(" Click the link to get "),e("a",O,[P,o(i)]),t(", 11.11 Promotion! Historical base price! The original price of 30%paid SVIP and given an additional 3 -month SVIP. "),e("a",T,[q,o(i)]),t(" The original price of 30%paid SVIP and given an additional 3 -month SVIP. "),R])]),N]),e("div",M,[L,e("ol",null,[B,E,Q,e("li",null,[t("If the same IP requests "),e("mark",null,c(r.value),1),t(" times within "),e("mark",null,c(l.value),1),t(" minutes, "),V,t(" will appear. 🚫So please do not abuse🚫 "),H]),Y])]),e("div",U,[F,e("ol",null,[e("li",null,[j,e("ul",null,[G,e("li",null,[W,t(" (LiaoNing multi -line， Sponsored by "),e("a",K,[t("Asia Cloud"),o(i)]),t(")")])])]),X,e("li",null,[e("p",null,[t("check the details："),e("a",J,[t("https://github.com/alist-org/alist/discussions/4572"),o(i)])])]),e("li",null,[Z,e("ul",null,[e("li",null,[t("The is not available at present, but you can reverse proxy "),e("a",$,[t("Source Station"),o(i)])])])])])]),ee,e("p",null,[t("Go to："),e("strong",null,[e("a",te,[t("https://alist.nn.ci/tool/aliyundrive/request"),o(i)])])]),oe,e("p",null,[t("Open the official website of Aliyundrive and click the string behind the url when you click into the folder you want to set, such as "),e("a",ie,[t("https://www.alipan.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940"),o(i)])]),ne,e("ul",null,[e("li",null,[t("The interface provided by the official API of Alibaba Cloud Disk is used, check 👉 "),e("a",ae,[le,o(i)])])]),re,o(u,{id:"mermaid-418",code:"eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"})])}}}),fe=_(se,[["__file","aliyundrive_open.html.vue"]]);export{fe as default};
