import{_ as s,r as a,o as i,c,a as o,b as n,d as e,e as r}from"./app-D-B5ekGa.js";const p="/Xray-docs-next/assets/ch02-img01-a-name-Bhw9qwKG.png",d={},u=r('<h1 id="【第-2-章】原料准备篇" tabindex="-1"><a class="header-anchor" href="#【第-2-章】原料准备篇"><span>【第 2 章】原料准备篇</span></a></h1><p>这一章比较特殊，因为涉及到金钱交易行为，本文基于项目的中立立场，不做具体的推荐。我能做的，是告诉你需要准备哪些东西。</p><h2 id="_2-1-获取一台-vps" tabindex="-1"><a class="header-anchor" href="#_2-1-获取一台-vps"><span>2.1 获取一台 VPS</span></a></h2><p>你需要获取一台健康的、IP 没有被墙的 VPS，并在管理后台做下面这些基础准备：</p><ol><li>在 VPS 的后台安装 Debian 10 64bit 系统</li><li>小本本记下 VPS 的 IP 地址（本文会用 <code>&quot;100.200.300.400&quot;</code> 来表示）<div class="custom-container tip"><p class="custom-container-title">提示</p><p>这是一个故意写错的非法 IP，请替换成你的真实 IP）</p></div></li><li>小本本记下 VPS 的 SSH 远程登陆端口(Port)</li><li>小本本记下 SSH 远程登录的用户名和密码</li></ol><p>购买 VPS 是一个比较复杂的事情，建议先去学习一下相关知识，选择适合自己的经济能力和线路需求的即可。另外可以选择薅一些国际大厂的羊毛（比如甲骨文和谷歌提供的永久免费或限时免费的套餐）。总之，务必量力而行。</p><div class="custom-container tip"><p class="custom-container-title">说明</p><p>关于选择 Debian 10 作为操作系统，这里稍微多说一句：不管你在网上听说了什么，不管哪个大神告诉你 XXX 版的 Linux 更好、XXX 版的 Linux 更牛，这些 Linux 的派系之争<strong>跟现在的你半毛钱关系也没有</strong>！使用 Debian 10 足以让你的 VPS 服务器在安全、稳健运行的同时得到足够的优化（如 cloud 专用内核、及时的 bbr 支持等）。等你对 Linux 熟悉之后，再回头去尝试其他的 Linux 发行版也不迟。</p></div><h2 id="_2-2-获取一个心仪的域名" tabindex="-1"><a class="header-anchor" href="#_2-2-获取一个心仪的域名"><span>2.2 获取一个心仪的域名</span></a></h2><p>你需要获取一个域名、并在 DNS 设置中添加一条 A 记录，指向你 VPS 的 IP 地址</p><ol><li>请选择靠谱的国际域名服务商。选择一些常见的域名后缀就行，注意不要用 <code>.cn</code> 后缀。</li><li>在 DNS 设置中，添加一条指向你 VPS 的 IP 地址的 A 记录（A 记录的名字可以随便起，本文会用 <code>&quot;a-name&quot;</code> 来表示。完整的域名则会用 <code>&quot;二级域名.你的域名.com&quot;</code> 或者 <code>&quot;a-name.yourdomain.com&quot;</code> 来表示）。效果如下图：</li></ol><p><img src="'+p+'" alt="添加A记录"></p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>这<strong>不是</strong>一个真实可用的网址，请替换成你的真实网址</p></div><h2 id="_2-3-你本地电脑上需要安装的软件" tabindex="-1"><a class="header-anchor" href="#_2-3-你本地电脑上需要安装的软件"><span>2.3 你本地电脑上需要安装的软件</span></a></h2>',13),h=n("p",null,"SSH 远程登录工具",-1),_={href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",target:"_blank",rel:"noopener noreferrer"},m=n("li",null,"macOS/Linux: Terminal",-1),S=n("p",null,"远程文件拷贝工具",-1),x={href:"https://winscp.net/eng/index.php",target:"_blank",rel:"noopener noreferrer"},P=n("li",null,"macOS/Linux: Terminal",-1),f=n("p",null,"靠谱的文本编辑器",-1),b={href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"_2-4-你的进度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-4-你的进度"},[n("span",null,"2.4 你的进度")])],-1),V=n("p",null,"如果上面的原材料你都准备好了的话，你已经拿到了开启新世界大门的钥匙。那还等什么，让我们快点进入下一章，走进这扇门吧！",-1),v=n("blockquote",null,[n("p",null,"⬛⬛⬜⬜⬜⬜⬜⬜ 25%")],-1);function k(q,I){const l=a("I18nTip"),t=a("ExternalLinkIcon");return i(),c("div",null,[o(l),u,n("ol",null,[n("li",null,[h,n("ul",null,[n("li",null,[e("Windows: "),n("a",_,[e("PuTTY"),o(t)])]),m])]),n("li",null,[S,n("ul",null,[n("li",null,[e("Windows: "),n("a",x,[e("WinSCP"),o(t)])]),P])]),n("li",null,[f,n("ul",null,[n("li",null,[e("Windows/macOS/Linux: "),n("a",b,[e("VSCode"),o(t)])])])])]),g,V,v])}const w=s(d,[["render",k],["__file","ch02-preparation.html.vue"]]);export{w as default};