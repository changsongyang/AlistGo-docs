import{_ as l,a as n,b as d,c,d as h,e as p,f as u,g as m}from"./add_new_personal-n-JmiVmR.js";import{_,r as t,o as g,c as b,b as e,e as i,a as r,f as a}from"./app-cSJ8TKob.js";const A={},f=e("h1",{id:"中国移动云盘",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#中国移动云盘","aria-hidden":"true"},"#"),i(" 中国移动云盘")],-1),B={href:"https://yun.139.com/",target:"_blank",rel:"noopener noreferrer"},v=a('<ul><li>⚠️ AList版本必须大于 <code>v3.18.0</code> 版本才能使用本教程（不包含v3.18.0）</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>已更换鉴权方式，请获取 <code>Authorization</code> 进行填写</p></div><br><h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id" aria-hidden="true">#</a> <strong>根文件夹ID</strong></h2><ul><li>个人云：<code>root</code>，可以为空会自动填写，会将所有的都列出来，涵盖18项(自行查看)，正常文件在 <strong>我的文件夹</strong> 这个里面. <ul><li>如果写文件夹ID列出的是正常的根目录文件夹（推荐使用这个）</li></ul></li><li>家庭云：根目录为空就是全部文件 <ul><li>若想挂载单独某个文件夹，在下方图片<a href="#%E5%AE%B6%E5%BA%AD%E4%BA%91">家庭云</a>中获取目录ID方法</li></ul></li><li>新个人云：<code>/</code>，可以为空会自动填写，会将所有的都列出来 <ul><li>若想挂载单独某个文件夹，在下方图片<a href="#%E6%96%B0%E4%B8%AA%E4%BA%BA%E4%BA%91">新个人云</a>中获取目录ID方法</li></ul></li></ul><br><h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> <strong>类型</strong></h2><ol><li><p>个人云：选择个人云</p></li><li><p>家庭云：选择家庭云</p></li><li><p>新个人云：新版API</p><ul><li>新注册的账号才有，可以通过在请求搜索 <code>getDisk</code> 来区分，如果能搜到就是旧版的，不能搜到就是新版的</li></ul></li></ol><p>如果是新API无法使用 <code>个人云</code>类型，虽然没有错误信息，但是文件不会被加载</p><p>有<code>getDisk</code>请求的无法使用<code>新个人云</code>类型，否则会提示<code>用户不存在</code></p><br><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> <strong>其他</strong></h2><ol><li><p>其他信息取自请求，已经从获取cookie改变成获取<code>Authorization</code></p><ol><li>新个人云可以通过另外的方式获取详情查看<a href="#%E6%96%B0%E4%B8%AA%E4%BA%BA%E4%BA%91">新个人云</a>的图片示例</li></ol></li><li><p>请求信息中底部找不到<code>载荷</code>，就去顶部<code>上面一排</code>，标记了紫色高亮</p></li></ol><br><h3 id="cloud-id" tabindex="-1"><a class="header-anchor" href="#cloud-id" aria-hidden="true">#</a> <strong>Cloud ID</strong></h3><p>个人云不需要填写，<strong>家庭云专用</strong>。</p><br><h3 id="搜索关键词" tabindex="-1"><a class="header-anchor" href="#搜索关键词" aria-hidden="true">#</a> <strong>搜索关键词</strong></h3><p>注意查看关键词，下方获取 <strong><code>Authorization</code></strong> 时使用</p><ul><li>个人云：<strong>getDisk</strong></li><li>家庭云：<strong>queryContentList</strong></li></ul><br><h3 id="个人云" tabindex="-1"><a class="header-anchor" href="#个人云" aria-hidden="true">#</a> <strong>个人云：</strong></h3><div class="image-preview"><img src="'+l+'" alt="其他浏览器" title="其他浏览器"><img src="'+n+'" alt="Chrome浏览器" title="Chrome浏览器"></div><br><h3 id="家庭云" tabindex="-1"><a class="header-anchor" href="#家庭云" aria-hidden="true">#</a> <strong>家庭云：</strong></h3><p>注意：家庭云不支持重命名、移动、复制和上传。</p><div class="image-preview"><img src="'+d+'" alt="其他浏览器" title="其他浏览器"><img src="'+c+'" alt="Chrome浏览器" title="Chrome浏览器"></div>',27),E={class:"hint-container details"},x=e("summary",null,"手把手教学视频",-1),C=e("p",null,"虽然视频是V2版本，但是获取目录ID 和 Cloud ID的方式一样，",-1),k={href:"https://www.bilibili.com/video/BV1US4y1w79a",target:"_blank",rel:"noopener noreferrer"},D=e("p",null,[i("现在已经从获取Cookie的方式变成了获取"),e("code",null,"Authorization"),i("，获取方式可以看下方"),e("a",{href:"#%E5%A1%AB%E5%86%99%E7%A4%BA%E4%BE%8B"},"填写示例"),i("教程")],-1),w=a('<br><h3 id="新个人云" tabindex="-1"><a class="header-anchor" href="#新个人云" aria-hidden="true">#</a> <strong>新个人云：</strong></h3><div class="image-preview"><img src="'+h+'" alt="新个人云" title="新个人云"></div><br><h3 id="alist挂载填写示例" tabindex="-1"><a class="header-anchor" href="#alist挂载填写示例" aria-hidden="true">#</a> <strong>AList挂载填写示例：</strong></h3><ul><li><p><mark><code>Authorization</code>只需要填写Basic空格后面开始的内容</mark></p></li><li><p>新个人云文件夹ID，你进入文件夹后会自动变化，你需要哪个文件夹ID就进入哪个文件夹，然后获取<code>currentCatalogID</code><sup>图3</sup>的值就可以</p></li></ul><div class="image-preview"><img src="'+p+'" alt="个人云" title="个人云"><img src="'+u+'" alt="家庭云" title="家庭云"><img src="'+m+'" alt="新个人云" title="新个人云"></div><br><h3 id="默认使用的下载方式" tabindex="-1"><a class="header-anchor" href="#默认使用的下载方式" aria-hidden="true">#</a> <strong>默认使用的下载方式</strong></h3>',9);function K(z,I){const o=t("ExternalLinkIcon"),s=t("Mermaid");return g(),b("div",null,[f,e("p",null,[i("云盘地址："),e("strong",null,[e("a",B,[i("https://yun.139.com/"),r(o)])])]),v,e("details",E,[x,C,e("p",null,[e("strong",null,[e("a",k,[i("https://www.bilibili.com/video/BV1US4y1w79a"),r(o)])])]),D]),w,r(s,{id:"mermaid-192",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFREOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqzdCKo9Lc3c1NwUboKxsTGqCSYFFRBtpUnpRYkFGQqZKamGCtEKsWDRREMwlZqXAuVGGxsYxVpZWRXn56Ym5yQWF9sCQQ3EszWJRtFA3z7r2P5i3b6nS9ohRoBVuaSmKcC1wFxmaQZRYBj9bM6aZ3N2Pdm9+PmEtlhdPaDelw2derp2WA1MMoyGqAwN8iGoODknMzkbFJhKenr6KUWZZalFxfrJ+bm5+Xl6GSW5OcrlqUkpiWW6z9dOez51qRKSniQy9CQTrQcAkHnb9A=="})])}const M=_(A,[["render",K],["__file","139.html.vue"]]);export{M as default};
