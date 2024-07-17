import{_ as l,r as s,o as c,c as d,a as o,b as e,d as t,w as u,e as r}from"./app-D-B5ekGa.js";const h={},m=e("h1",{id:"splithttp",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#splithttp"},[e("span",null,"SplitHTTP")])],-1),b=r(`<p>Uses HTTP chunked-transfer encoding for download, and multiple HTTP requests for upload.</p><p>Can be deployed on CDNs that do not support WebSocket, but there is still one requirement:</p><p><strong>The CDN must support HTTP chunked transfer encoding in a streaming fashion</strong>, no response buffering. The transport will send the <code>X-Accel-Buffering: no</code> and <code>Content-Type: text/event-stream</code> response headers, but only some CDNs respect this. If the connection hangs, most likely this part does not work.</p><p>This transport serves the same purpose as Meek (support non-WS CDN). It has the above streaming requirement to the CDN so that download can be much faster than (v2fly) Meek, close to WebSocket performance. The upload is also optimized, but still much more limited than WebSocket.</p><p>Like WebSocket transport, SplitHTTP parses the <code>X-Forwarded-For</code> header for logging.</p><h2 id="splithttpobject" tabindex="-1"><a class="header-anchor" href="#splithttpobject"><span>SplitHttpObject</span></a></h2><p>The <code>SplitHttpObject</code> corresponds to the <code>splithttpSettings</code> section under transport configurations.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xray.com&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;maxUploadSize&quot;</span><span class="token operator">:</span> <span class="token number">1000000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;maxConcurrentUploads&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>path</code>: string</p></blockquote><p>HTTP path used by the connection. Defaults to <code>&quot;/&quot;</code>.</p><blockquote><p><code>host</code>: string</p></blockquote><p>HTTP Host sent by the connection. Empty by default. If this value is empty on the server, the host header sent by clients will not be validated.</p><p>If the <code>Host</code> header has been defined on the server in any way, the server will validate if the <code>Host</code> header matches.</p><p>The current priority of the <code>Host</code> header sent by clients: <code>host</code> &gt; <code>headers</code> &gt; <code>address</code></p><blockquote><p><code>headers</code>: map {string: string}</p></blockquote><p>Customized HTTP headers defined in key-value pairs. Defaults to empty.</p><blockquote><p><code>maxUploadSize</code></p></blockquote><p>The largest possible chunk to upload. Defaults to 1 MB. This should be less than the max request body size your CDN allows. Decrease this if the client prints HTTP 413 errors. Increase this to improve upload bandwidth.</p><blockquote><p><code>maxConcurrentUploads</code></p></blockquote><p>The number of concurrent uploads to run. Defaults to 10. Connections are reused wherever possible, but you may want to lower this value if the connection is unstable, or if the server is using too much memory.</p><p>The value on the client must not be higher than on the server. Otherwise, connectivity issues will occur.</p><h2 id="protocol-details" tabindex="-1"><a class="header-anchor" href="#protocol-details"><span>Protocol details</span></a></h2>`,22),T={href:"https://github.com/XTLS/Xray-core/pull/3412",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/XTLS/Xray-core/pull/3462",target:"_blank",rel:"noopener noreferrer"},v=r('<ol><li><p><code>GET /&lt;UUID&gt;</code> opens the download. The server immediately responds with <code>200 OK</code> and <code>Transfer-Encoding: chunked</code>, and immediately sends a two-byte payload to force HTTP middleboxes into flushing headers.</p></li><li><p>Client uploads using <code>POST /&lt;UUID&gt;/&lt;seq&gt;</code>. <code>seq</code> starts at <code>0</code> and can be used like TCP seq number, and multiple &quot;packets&quot; may be sent concurrently. The server has to reassemble the &quot;packets&quot; live. The sequence number never resets for simplicity reasons.</p><p>The client may open upload and download in any order, either one starts a session. However, eventually <code>GET</code> needs to be opened (current deadline is hardcoded to 30 seconds) If not, the session will be terminated.</p></li><li><p>The <code>GET</code> request is kept open until the tunneled connection has to be terminated. Either server or client can close. How this actually works depends on the HTTP version.</p></li></ol><p>Recommendations:</p><ul><li><p>Do not assume any custom headers are transferred correctly by the CDN. This transport is built for CDN who do not support WebSocket, these CDN tend to not be very modern (or good).</p></li><li><p>It should be assumed there is no streaming upload within a HTTP request, so the size of a packet should be chosen to optimize between latency, throughput, and any size limits imposed by the CDN (just like TCP, nagle&#39;s algorithm and MTU...)</p></li><li><p>HTTP/1.1 and h2 should be supported by server and client, and it should be expected that the CDN will translate arbitrarily between versions. A HTTP/1.1 server may indirectly end up talking to a h2 client, and vice versa.</p><p>In order to keep the implementation simple, SplitHTTP client in Xray assumes h2 prior knowledge if TLS is enabled. HTTP/1.1 has to be enabled explicitly by setting <code>http/1.1</code> ALPN. h2c is not supported on the client at all.</p><p>The SplitHTTP server in Xray supports all common combinations as expected: HTTP/1.1 with or without TLS, h2 and h2c, however no h3.</p><p>Neither Xray server nor client support h3, but this may change in the future.</p></li></ul><h2 id="browser-dialer" tabindex="-1"><a class="header-anchor" href="#browser-dialer"><span>Browser Dialer</span></a></h2>',4),y=e("p",null,"Depending on the browser, Browser Dialer also supports transmission of SplitHTTP using HTTP3 (QUIC) while the regular implementation does not.",-1);function f(g,w){const i=s("I18nTip"),n=s("Badge"),a=s("ExternalLinkIcon"),p=s("RouterLink");return c(),d("div",null,[o(i),m,o(n,{text:"v1.8.16+",type:"warning"}),b,e("p",null,[t("See "),e("a",T,[t("#3412"),o(a)]),t(" and "),e("a",k,[t("#3462"),o(a)]),t(" for extensive discussion and revision of the protocol. Here is a summary, and the minimum needed to be compatible:")]),v,o(n,{text:"v1.8.17+",type:"warning"}),e("p",null,[t("If uTLS is not enough, SplitHTTP's TLS can be handled by a browser using "),o(p,{to:"/en/config/features/browser_dialer.html"},{default:u(()=>[t("Browser Dialer")]),_:1})]),y])}const _=l(h,[["render",f],["__file","splithttp.html.vue"]]);export{_ as default};