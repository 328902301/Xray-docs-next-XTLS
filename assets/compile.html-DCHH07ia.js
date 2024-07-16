import{_ as t,r as o,o as i,c as r,a as e,b as a,d as s,e as c}from"./app-NkV3gPh_.js";const p={},d=a("h1",{id:"编译文档",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#编译文档"},[a("span",null,"编译文档")])],-1),u=a("h2",{id:"前序工作",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#前序工作"},[a("span",null,"前序工作")])],-1),h={href:"https://golang.org/",target:"_blank",rel:"noopener noreferrer"},v={class:"custom-container tip"},m=a("p",{class:"custom-container-title"},"TIP",-1),b={href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"},g=c(`<blockquote><p>如果你不幸使用 Windows, 请 <strong>务必</strong> 使用 Powershell</p></blockquote><h2 id="拉取-xray-源代码" tabindex="-1"><a class="header-anchor" href="#拉取-xray-源代码"><span>拉取 Xray 源代码</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/XTLS/Xray-core.git
<span class="token builtin class-name">cd</span> Xray-core <span class="token operator">&amp;&amp;</span> go mod download
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果你闲的没事干，可以试试 GitHub 官方工具: <code>gh repo clone XTLS/Xray-core</code></p></blockquote><p>注意：在无法正常访问 Google 的网络环境，依赖无法被正常拉取，需要先设置 <code>GOPROXY</code>：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.io,direct
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="构建二进制" tabindex="-1"><a class="header-anchor" href="#构建二进制"><span>构建二进制</span></a></h2><div class="custom-container warning"><p class="custom-container-title">Внимание</p><p>本小节的命令需要在 Xray 根目录内运行。</p></div><h3 id="windows-powershell" tabindex="-1"><a class="header-anchor" href="#windows-powershell"><span>Windows(Powershell):</span></a></h3><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$env</span>:CGO_ENABLED=0
go build <span class="token operator">-</span>o xray<span class="token punctuation">.</span>exe <span class="token operator">-</span>trimpath <span class="token operator">-</span>ldflags <span class="token string">&quot;-s -w -buildid=&quot;</span> <span class="token punctuation">.</span><span class="token operator">/</span>main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="macos-linux" tabindex="-1"><a class="header-anchor" href="#macos-linux"><span>macOS, Linux:</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span> go build <span class="token parameter variable">-o</span> xray <span class="token parameter variable">-trimpath</span> <span class="token parameter variable">-ldflags</span> <span class="token string">&quot;-s -w -buildid=&quot;</span> ./main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行以上命令会在目录下生成 xray 可执行文件。</p><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>如果需要编译可以进行 debug 的程序,即可以用 dlv 附加到运行的程序进行调试, 请去掉 ldflags 中的 &#39;-w -s&#39; 选项.</p><p>-w 禁止生成 debug 信息。使用该选项后，将无法使用 gdb 进行调试。 -s 禁用符号表 PS:其实用 vscode 或其他 IDE 调试似乎更方便。</p></div><h2 id="交叉编译" tabindex="-1"><a class="header-anchor" href="#交叉编译"><span>交叉编译：</span></a></h2><p>这里以在 Windows(Powershell) 环境中，编译到 Linux 服务器为例：</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$env</span>:CGO_ENABLED=0
<span class="token variable">$env</span>:GOOS=<span class="token string">&quot;linux&quot;</span>
<span class="token variable">$env</span>:GOARCH=<span class="token string">&quot;amd64&quot;</span>

go build <span class="token operator">-</span>o xray <span class="token operator">-</span>trimpath <span class="token operator">-</span>ldflags <span class="token string">&quot;-s -w -buildid=&quot;</span> <span class="token punctuation">.</span><span class="token operator">/</span>main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上传到服务器后，记得在服务器终端内执行 <code>chmod +x xray</code></p><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>执行 <code>go tool dist list</code> 查看所有支持的系统与架构。</p></div><h2 id="可复现构建" tabindex="-1"><a class="header-anchor" href="#可复现构建"><span>可复现构建：</span></a></h2><p>按照上述步骤，能够编译与 Release 中完全相同的二进制文件。</p><div class="custom-container warning"><p class="custom-container-title">Внимание</p><p>请先确认您使用的 Golang 版本与编译 Release 的一致。</p></div>`,22);function k(_,x){const l=o("I18nTip"),n=o("ExternalLinkIcon");return i(),r("div",null,[e(l),d,u,a("p",null,[s("Xray 使用 "),a("a",h,[s("Golang"),e(n)]),s(" 作为编程语言，你需要先安装最新版本 Golang 才能够编译。")]),a("div",v,[m,a("p",null,[s("安装 Golang: "),a("a",b,[s("golang.org/doc/install"),e(n)])])]),g])}const f=t(p,[["render",k],["__file","compile.html.vue"]]);export{f as default};
