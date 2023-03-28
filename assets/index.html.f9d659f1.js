import{r as n,o as s,c as a,a as t,b as p,w as o,F as l,d as u,e}from"./app.f830cd38.js";const c={},r=u('<blockquote><p><strong>这个章节将告诉您所有的 Xray 配置细节，掌握这些内容，在您手中 Xray 将发挥更大威力。</strong></p></blockquote><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>Xray 的配置文件为 json 格式, 客户端和服务端的配置格式没有区别, 只是实际的配置内容不一样。<br> 形式如下:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;policy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;transport&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;reverse&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;fakedns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>',4),i={class:"custom-container warning"},k=t("p",{class:"custom-container-title"},"注意",-1),b=e("如果你刚接触 Xray, 您可以先点击查看"),d=e("快速入门中的配置运行"),q=e(", 学习最基本的配置方式, 然后查看本章节内容以掌握所有 Xray 的配置方式。"),m=t("h2",{id:"基础配置模块",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#基础配置模块","aria-hidden":"true"},"#"),e(" 基础配置模块")],-1),f=e("log:"),g=e("LogObject"),h=t("p",null,"日志配置，控制 Xray 输出日志的方式.",-1),y=e("api:"),j=e("ApiObject"),O=t("p",null,"提供了一些 API 接口供远程调用。",-1),_=e("dns: "),v=e("DnsObject"),X=t("p",null,"内置的 DNS 服务器. 如果没有配置此项，则使用系统的 DNS 设置。",-1),D=e("routing: "),x=e("RoutingObject"),S=t("p",null,"路由功能。可以设置规则分流数据从不同的 outbound 发出.",-1),F=e("policy: "),N=e("PolicyObject"),R=t("p",null,"本地策略，可以设置不同的用户等级和对应的策略设置。",-1),w=e("inbounds: [ "),A=e("InboundObject"),I=e(" ]"),L=t("p",null,"一个数组，每个元素是一个入站连接配置。",-1),P=e("outbounds: [ "),T=e("OutboundObject"),z=e(" ]"),B=t("p",null,"一个数组，每个元素是一个出站连接配置。",-1),C=e("transport: "),E=e("TransportObject"),G=t("p",null,"用于配置 Xray 其它服务器建立和使用网络连接的方式。",-1),H=e("stats: "),J=e("StatsObject"),K=t("p",null,"用于配置流量数据的统计。",-1),M=e("reverse: "),Q=e("ReverseObject"),U=t("p",null,"反向代理。可以把服务器端的流量向客户端转发，即逆向流量转发。",-1),V=e("fakedns: "),W=e("FakeDnsObject"),Y=t("p",null,"FakeDNS 配置。可配合透明代理使用，以获取实际域名。",-1);c.render=function(u,e){const c=n("RouterLink");return s(),a(l,null,[r,t("div",i,[k,t("p",null,[b,p(c,{to:"/document/install.html"},{default:o((()=>[d])),_:1}),q])]),m,t("blockquote",null,[t("p",null,[f,p(c,{to:"/config/log.html"},{default:o((()=>[g])),_:1})])]),h,t("blockquote",null,[t("p",null,[y,p(c,{to:"/config/api.html"},{default:o((()=>[j])),_:1})])]),O,t("blockquote",null,[t("p",null,[_,p(c,{to:"/config/dns.html"},{default:o((()=>[v])),_:1})])]),X,t("blockquote",null,[t("p",null,[D,p(c,{to:"/config/routing.html"},{default:o((()=>[x])),_:1})])]),S,t("blockquote",null,[t("p",null,[F,p(c,{to:"/config/policy.html"},{default:o((()=>[N])),_:1})])]),R,t("blockquote",null,[t("p",null,[w,p(c,{to:"/config/inbound.html"},{default:o((()=>[A])),_:1}),I])]),L,t("blockquote",null,[t("p",null,[P,p(c,{to:"/config/outbound.html"},{default:o((()=>[T])),_:1}),z])]),B,t("blockquote",null,[t("p",null,[C,p(c,{to:"/config/transport.html"},{default:o((()=>[E])),_:1})])]),G,t("blockquote",null,[t("p",null,[H,p(c,{to:"/config/stats.html"},{default:o((()=>[J])),_:1})])]),K,t("blockquote",null,[t("p",null,[M,p(c,{to:"/config/reverse.html"},{default:o((()=>[Q])),_:1})])]),U,t("blockquote",null,[t("p",null,[V,p(c,{to:"/config/fakedns.html"},{default:o((()=>[W])),_:1})])]),Y],64)};export default c;
