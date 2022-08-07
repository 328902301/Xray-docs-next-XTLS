import{r as n,o as s,c as a,a as p,b as o,F as e,d as t,e as c}from"./app.b1da6d4f.js";const r={},u=t('<h1 id="tcp" tabindex="-1"><a class="header-anchor" href="#tcp" aria-hidden="true">#</a> TCP</h1><p>TCP 传输模式是目前推荐使用的传输模式之一.</p><p>可以和各种协议有多种组合模式.</p><h2 id="tcpobject" tabindex="-1"><a class="header-anchor" href="#tcpobject" aria-hidden="true">#</a> TcpObject</h2><p><code>TcpObject</code> 对应传输配置的 <code>tcpSettings</code> 项。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;acceptProxyProtocol&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;header&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><blockquote><p><code>acceptProxyProtocol</code>: true | false</p></blockquote><p>仅用于 inbound，指示是否接收 PROXY protocol。</p>',8),l={href:"https://www.haproxy.org/download/2.2/doc/proxy-protocol.txt",target:"_blank",rel:"noopener noreferrer"},i=c("PROXY protocol"),k=c(" 专用于传递请求的真实来源 IP 和端口，"),b=p("strong",null,"若你不了解它，请先忽略该项",-1),d=c("。"),q=t('<p>常见的反代软件（如 HAProxy、Nginx）都可以配置发送它，VLESS fallbacks xver 也可以发送它。</p><p>填写 <code>true</code> 时，最底层 TCP 连接建立后，请求方必须先发送 PROXY protocol v1 或 v2，否则连接会被关闭。</p><p>默认值为 <code>false</code>。</p><blockquote><p><code>header</code>: <a href="#noneheaderobject">NoneHeaderObject</a> | <a href="#httpheaderobject">HttpHeaderobject</a></p></blockquote><p>数据包头部伪装设置，默认值为 <code>NoneHeaderObject</code>。</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>HTTP 伪装无法被其它 HTTP 服务器（如 Nginx）分流，但可以被 VLESS fallbacks path 分流。</p></div><h3 id="noneheaderobject" tabindex="-1"><a class="header-anchor" href="#noneheaderobject" aria-hidden="true">#</a> NoneHeaderObject</h3><p>不进行伪装</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p><code>type</code>: &quot;none&quot;</p></blockquote><p>指定不进行伪装</p><h3 id="httpheaderobject" tabindex="-1"><a class="header-anchor" href="#httpheaderobject" aria-hidden="true">#</a> HttpHeaderObject</h3><p>HTTP 伪装配置必须在对应的入站出站连接上同时配置，且内容必须一致。</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;response&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>type</code>: &quot;http&quot;</p></blockquote><p>指定进行 HTTP 伪装</p><blockquote><p><code>request</code>: <a href="#httprequestobject">HTTPRequestObject</a></p></blockquote><p>HTTP 请求</p><blockquote><p><code>response</code>: <a href="#httpresponseobject">HTTPResponseObject</a></p></blockquote><p>HTTP 响应</p><h4 id="httprequestobject" tabindex="-1"><a class="header-anchor" href="#httprequestobject" aria-hidden="true">#</a> HTTPRequestObject</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.1&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;www.baidu.com&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;www.bing.com&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;User-Agent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token string">&quot;Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36&quot;</span><span class="token punctuation">,</span>\n      <span class="token string">&quot;Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_2 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/53.0.2785.109 Mobile/14A456 Safari/601.1.46&quot;</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;Accept-Encoding&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;gzip, deflate&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;Connection&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;keep-alive&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;Pragma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;no-cache&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p><code>version</code>: string</p></blockquote><p>HTTP 版本，默认值为 <code>&quot;1.1&quot;</code>。</p><blockquote><p><code>method</code>: string</p></blockquote><p>HTTP 方法，默认值为 <code>&quot;GET&quot;</code>。</p><blockquote><p><code>path</code>: [ string ]</p></blockquote><p>路径，一个字符串数组。默认值为 <code>[&quot;/&quot;]</code>。当有多个值时，每次请求随机选择一个值。</p><blockquote><p><code>headers</code>: map{ string, [ string ]}</p></blockquote><p>HTTP 头，一个键值对，每个键表示一个 HTTP 头的名称，对应的值是一个数组。</p><p>每次请求会附上所有的键，并随机选择一个对应的值。默认值见上方示例。</p><h4 id="httpresponseobject" tabindex="-1"><a class="header-anchor" href="#httpresponseobject" aria-hidden="true">#</a> HTTPResponseObject</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.1&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;200&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;reason&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OK&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;application/octet-stream&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;video/mpeg&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;Transfer-Encoding&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;chunked&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;Connection&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;keep-alive&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;Pragma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;no-cache&quot;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p><code>version</code>: string</p></blockquote><p>HTTP 版本，默认值为 <code>&quot;1.1&quot;</code>。</p><blockquote><p><code>status</code>: string</p></blockquote><p>HTTP 状态，默认值为 <code>&quot;200&quot;</code>。</p><blockquote><p><code>reason</code>: string</p></blockquote><p>HTTP 状态说明，默认值为 <code>&quot;OK&quot;</code>。</p><blockquote><p><code>headers</code>: map {string, [ string ]}</p></blockquote><p>HTTP 头，一个键值对，每个键表示一个 HTTP 头的名称，对应的值是一个数组。</p><p>每次请求会附上所有的键，并随机选择一个对应的值。默认值见上方示例。</p>',42);r.render=function(t,c){const r=n("OutboundLink");return s(),a(e,null,[u,p("p",null,[p("a",l,[i,o(r)]),k,b,d]),q],64)};export default r;