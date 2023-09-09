import{_ as l}from"./sqlite-mysql-3a7a02f9.js";import{_ as r,r as s,o as d,c as h,b as e,e as t,a as o,w as c,f as a}from"./app-40132e0c.js";const u={},f=a('<h1 id="search" tabindex="-1"><a class="header-anchor" href="#search" aria-hidden="true">#</a> Search</h1><h3 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> <strong>how to use</strong></h3><div class="hint-container danger"><p class="hint-container-title">Follow the steps below to enable search:</p><ol><li>Go to the <code>indexes</code> page to select a <strong>Search index</strong> and click <code>Save</code>.</li><li>After the index is saved, click <code>Build indexes</code> to build the index.</li><li>Now you can search for files by click the search block on the top right corner of the page or by using the shortcut <code>Ctrl + K</code>.</li></ol><p>❗❗❗ If you do not follow the above prompts, the prompt will be opened: <strong>Search Not available</strong></p></div><br><h3 id="difference-between-different-search-indexes" tabindex="-1"><a class="header-anchor" href="#difference-between-different-search-indexes" aria-hidden="true">#</a> <strong>Difference between different search indexes</strong></h3><ul><li><code>database</code>: Search by database, which is using the existing data.db. It will create a new table, record the parent directory, name, and size of every object, but the search does not split words which means that match whether the keywords you enter appear in the name of object. In general, if you don&#39;t have a specific search requirement, we recommend you choose it.</li><li><code>database (non-full-text search)</code>: The full-text search mode is used above, but full-text search will have some strange problems when using <strong>MySQL database</strong> as an Alist database, which has not been resolved yet, so if your Alist database Change to <strong>MySQL</strong>, and your Alist version <strong><code>≥3.9.1</code></strong> It is recommended that you use this to build an index, although it is slower than full-text search and the gap is not very big, but it will not search for strange files , it’s more secure. After the future version is repaired, we will inform you to use the new full-text search to build the index. If you are using <strong>sqlite3</strong>, you can use whichever you like.</li><li><code>bleve</code>: An open source full-text search engine. It will split the words in the name of object and search for the keywords you enter. But its search results may be so strange that you can&#39;t get the results you want, and it will take up more resources.</li><li><strong>sqlite3</strong> is easy to trigger <code>database is locked</code> lock library cannot write files</li></ul><p>The following table could help you understand the difference between the two search indexes quickly:</p><table><thead><tr><th></th><th>database(full text search)</th><th>Database (non-full-text search)</th><th>bleve</th></tr></thead><tbody><tr><td>Search results</td><td>Can&#39;t find it in Chinese</td><td>More accurate than full-text search, you can search Chinese</td><td>Fuzzy match</td></tr><tr><td>Search speed</td><td>Fast,see above for advantages and disadvantages</td><td>Slower than full-text search, see above for advantages and disadvantages</td><td>Fast</td></tr><tr><td>Specify folder search</td><td>Yes</td><td>Yes</td><td>No</td></tr><tr><td>Disk usage</td><td>Low</td><td>Low</td><td>High</td></tr><tr><td>Auto incremental update</td><td>Yes</td><td>Yes</td><td>No</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">Note</p><p>If you are using MySQL as the database, it is recommended to use <strong><code>non-full-text search</code></strong> (strongly recommended)</p><p><strong><code>Non-full-text search</code></strong> Although it is not as fast as full-text search, it is not much slower. If you insist on using full-text search, you may have to sacrifice the inability to search Chinese</p><p>If you use <mark>sqlite</mark> as the database, there is no full-text search, you can choose any database~</p><p>Full-text search: It will not search in the text of all files, don&#39;t get it wrong.</p></div><br><h3 id="search-tips" tabindex="-1"><a class="header-anchor" href="#search-tips" aria-hidden="true">#</a> <strong>Search tips</strong></h3><ul><li>If you want to search for a specific folder, you must choose <code>database</code> as the search index;</li><li>If you choose <code>database</code> as the search index and the type of your database is <code>sqlite3</code>, we suggest that you don&#39;t make any changes in the admin page while building the index, as sqlite3 does not support concurrent writes and can cause <code>database-lock</code> issues;</li><li>If you choose <code>bleve</code> as the search index, and if you want to search for new files or if you don&#39;t want to search for deleted files, the index needs to be completely rebuilt to take effect because <code>bleve</code> does not support incremental updates;</li><li>But for <code>database</code>, it supports incremental updates, so you can search for new files or deleted files just by access the modified folder (and click <code>refresh</code> icon if cached) without rebuilding the index, which is much more convenient than <code>bleve</code>.</li></ul><br><h3 id="ignore-paths" tabindex="-1"><a class="header-anchor" href="#ignore-paths" aria-hidden="true">#</a> <strong>Ignore paths</strong></h3><p>Paths to be skipped during index building, one path per line, multiple lines can be filled</p><ul><li>example: <ul><li><p>/aaa network disk</p></li><li><p>/bbb network disk/ccc folder</p></li></ul></li></ul><br><h3 id="update-index" tabindex="-1"><a class="header-anchor" href="#update-index" aria-hidden="true">#</a> <strong>Update index</strong></h3><ul><li>(formerly: the path to update the index)</li></ul><p>After building all the indexes, or a file has a large number of file updates, but it is inconvenient to rebuild, you can use this to update the index</p><ul><li><p>example:</p><ul><li><p>/aaa network disk</p></li><li><p>/bbb network disk/ccc folder</p></li></ul></li></ul><br><h3 id="automatically-update-the-index" tabindex="-1"><a class="header-anchor" href="#automatically-update-the-index" aria-hidden="true">#</a> <strong>Automatically update the index</strong></h3><p>⚠️ <strong><code>The default is off, and the index will not be built automatically</code></strong></p><p>For example, you have already built the index, but added a <strong>network disk mount</strong> or <strong>folder update</strong> later</p><p>But you have already built a lot of indexes. According to the previous words, there are two methods</p><ol><li>Go in folder by folder before building</li><li>Or it is cumbersome to refactor all</li></ol><p>But this time, just turn on the <strong><code>Automatically build index</code></strong> button and enter the <strong>Newly mounted network disk</strong> or <strong>Updated folder</strong>, the indexed files in this directory and The folder automatically builds the index without entering a folder by folder to let him build it automatically</p><ul><li>Advantages: Don&#39;t worry, all the indexes in this folder can be automatically built if there is an update into the root directory of the updated folder</li><li>Cons: always on call ready to build</li></ul><hr><p>Someone will find out that [<strong>Path to update index</strong>](#Path to update index) can also be updated? Can be updated but the two do not conflict</p><ul><li><a href="#automatically-update-the-index"><strong>Automatically update index</strong></a>: suitable for users who build indexes for all files</li><li><a href="#update-index"><strong>Update Index</strong></a>: Suitable for <strong>not</strong> to build indexes for all files, but there are files that need to be built, manually build indexes to avoid all being indexed</li></ul><br><h3 id="maximum-index-depth" tabindex="-1"><a class="header-anchor" href="#maximum-index-depth" aria-hidden="true">#</a> <strong>Maximum index depth</strong></h3><p>default 20.</p><p>The one shown outside is built manually, and the update index option selects the depth in the update index button.</p><p>Explanation: The directory can enter up to several layers. For example, if you have a folder with a depth of 30 layers, set it to 20, and only build the first 20 layers, and the remaining 10 layers will not be built.</p><h3 id="precautions-for-use" tabindex="-1"><a class="header-anchor" href="#precautions-for-use" aria-hidden="true">#</a> ⚠️ <strong>Precautions for use</strong></h3>',38),p=a('<li><p>Alist <strong>V2</strong> and <strong>v3</strong> types of mounts cannot be built by default</p></li><li><p>If you are using <strong>MySQL</strong> as the database, it is recommended that you use <strong>database (non-full-text search)</strong>, <a href="#difference-between-different-search-indexes"><strong>Click to view details to see the second item</strong></a></p></li>',2),b=e("p",null,[t("In the future version ("),e("strong",null,"≥3.9.0 version"),t("), V3 users can choose whether to allow others to mount your network disk and then index it ⛔"),e("strong",null,[e("code",null,"Use with caution")]),t("⛔")],-1),g={href:"https://alist.nn.ci/config/site.html#allow-indexing",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,"Don't ask why V2 is not supported, because the V2 version is no longer maintained, so there is no follow-up",-1),y={href:"https://github.com/alist-org/alist/discussions/2529",target:"_blank",rel:"noopener noreferrer"},w=a('<br><h3 id="the-database-file-is-very-large-what-should-i-do-if-it-is-still-the-same-after-clearing-the-index" tabindex="-1"><a class="header-anchor" href="#the-database-file-is-very-large-what-should-i-do-if-it-is-still-the-same-after-clearing-the-index" aria-hidden="true">#</a> <strong>The database file is very large, what should I do if it is still the same after clearing the index?</strong></h3><p>Normal users do not modify the database options. They use the <code>sqlite</code> database to build indexes, which will cause the database file to be particularly large</p><ul><li>-Data files, <code>Data</code> folders in the same directory in Alist program,<code>data.db，data.db-shm，data.db-wal</code></li></ul><p>After turning on the constructive index, the more the number you build, the larger the files. Finally, you accidentally occupy the machine&#39;s hard disk, and then click the clear index button. What should I do if the file is still as big?</p>',5),x=a(`<p>This is caused by the cache of <code>sqlite</code>, there are two solutions</p><ol><li>We use commands or tools to connect to <code>sqlite</code> database, input：<strong><code>VACUUM;</code></strong></li></ol><div class="language-sqlite line-numbers-mode" data-ext="sqlite"><pre class="language-sqlite"><code>VACUUM;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),v={start:"2"},k=e("code",null,"mysql",-1),_={href:"https://www.bilibili.com/video/BV1iV4y1T7kh",target:"_blank",rel:"noopener noreferrer"},I=a('<p>Comparison after cleaning the command: The picture above shows before cleaning up, and the following figure shows that after cleaning, you can execute several commands several times if there is no effect.</p><p><img src="'+l+'" alt=""></p><hr><p><code>data.db, data.db-shm, data.db-wal</code> when backup, when backup，<code>data.db-shm，data.db-wal</code>Do these two files need backup？</p><ul><li>In the backup, stop the program first, and then backup. You only need to backup the <code>data.db</code> database file. The other two do not need to backup</li><li>It may be after you stop the program<code>data.db-shm，data.db-wal</code>will automatically disappear, don&#39;t worry</li></ul>',5);function A(S,V){const i=s("ExternalLinkIcon"),n=s("RouterLink");return d(),h("div",null,[f,e("ul",null,[p,e("li",null,[b,e("ul",null,[e("li",null,[t("View details: "),e("a",g,[t("https://alist.nn.ci/config/site.html#allow-indexing"),o(i)])]),m])]),e("li",null,[e("p",null,[t("Why not directly open V2 V3 index construction: "),e("strong",null,[e("a",y,[t("https://github.com/alist-org/alist/discussions/2529"),o(i)])])])]),e("li",null,[e("p",null,[t("After building an index, users without permissions can search for hidden file/folder solutions "),o(n,{to:"/guide/advanced/meta.html#tips"},{default:c(()=>[t("click to view")]),_:1})])])]),w,e("ul",null,[e("li",null,[x,e("ol",v,[e("li",null,[t("After using the command to clean up, we replace it with "),k,t(" database before constructing indexes "),e("ul",null,[e("li",null,[t("Sqlite replaced with mysql database tutorial："),e("strong",null,[e("a",_,[t("BV1iV4y1T7kh"),o(i)])])])])])])])]),I])}const T=r(u,[["render",A],["__file","search.html.vue"]]);export{T as default};
