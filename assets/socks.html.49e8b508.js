import{r as s,o as n,c as a,a as e,b as p,w as o,F as t,e as r,d as c}from"./app.7665aa5c.js";const l={},u=e("h1",{id:"socks",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#socks","aria-hidden":"true"},"#"),r(" Socks")],-1),i=r("标准 Socks 协议实现，兼容 "),b={href:"http://ftp.icm.edu.pl/packages/socks/socks4/SOCKS4.protocol",target:"_blank",rel:"noopener noreferrer"},k=r("Socks 5"),d=r("。"),q=c('<div class="custom-container danger"><p class="custom-container-title">警告</p><p><strong>Socks 协议没有对传输加密，不适宜经公网中传输</strong></p></div><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject" aria-hidden="true">#</a> OutboundConfigurationObject</h2><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;servers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test user&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test pass&quot;</span><span class="token punctuation">,</span>\n          <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><blockquote><p><code>servers</code>: [ <a href="#serverobject">ServerObject</a> ]</p></blockquote><p>Socks 服务器列表，其中每一项是一个服务器配置。</p><h3 id="serverobject" tabindex="-1"><a class="header-anchor" href="#serverobject" aria-hidden="true">#</a> ServerObject</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test user&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test pass&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p><code>address</code>: address</p></blockquote><p>服务器地址, 必填</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>仅支持连接到 Socks 5 服务器。</p></div><blockquote><p><code>port</code>: number</p></blockquote><p>服务器端口, 必填</p><blockquote><p><code>users</code>: [ <a href="#userobject">UserObject</a> ]</p></blockquote><p>一个数组表示的用户列表，数组中每个元素为一个用户配置。</p><p>当列表不为空时，Socks 客户端会使用用户信息进行认证；如未指定，则不进行认证。</p><p>默认值为空。</p><h4 id="userobject" tabindex="-1"><a class="header-anchor" href="#userobject" aria-hidden="true">#</a> UserObject</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test user&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;pass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test pass&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p><code>user</code>: string</p></blockquote><p>用户名，字符串类型。必填。</p><blockquote><p><code>pass</code>: string</p></blockquote><p>密码，字符串类型。必填。</p><blockquote><p><code>level</code>: number</p></blockquote>',23),m=r("用户等级，连接会使用这个用户等级对应的 "),g=r("本地策略"),v=r("。"),h=r("userLevel 的值, 对应 "),j=r("policy"),y=r(" 中 "),f=e("code",null,"level",-1),S=r(" 的值。 如不指定, 默认为 0。");l.render=function(r,c){const l=s("OutboundLink"),x=s("RouterLink");return n(),a(t,null,[u,e("p",null,[i,e("a",b,[k,p(l)]),d]),q,e("p",null,[m,p(x,{to:"/config/policy.html#levelpolicyobject"},{default:o((()=>[g])),_:1}),v]),e("p",null,[h,p(x,{to:"/config/policy.html#policyobject"},{default:o((()=>[j])),_:1}),y,f,S])],64)};export default l;