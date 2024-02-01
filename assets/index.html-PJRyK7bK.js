import{_ as e,r as l,o as c,c as i,a as n,b as t,d as o,w as a,e as u}from"./app-irvasr56.js";const p={},r=u(`<blockquote><p><strong>This section will tell you all the details of Xray configuration. By mastering these contents, Xray will unleash its full power in your hands.</strong></p></blockquote><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>The configuration file of Xray is in JSON format, and the configuration format for the client and server is the same, except for the actual configuration content. It takes the following form:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;api&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;policy&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;transport&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;stats&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;reverse&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;fakedns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d={class:"custom-container warning"},f=n("p",{class:"custom-container-title"},"Warning",-1),k=n("h2",{id:"basic-configuration-modules",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#basic-configuration-modules"},[n("span",null,"Basic Configuration Modules")])],-1),h=n("p",null,"Log configuration, which controls the way Xray outputs logs.",-1),b=n("p",null,"Provides some API interfaces for remote calls.",-1),m=n("p",null,"Built-in DNS server. If this item is not configured, the system's DNS settings will be used.",-1),g=n("p",null,"Routing function. You can set rules to route data to different outbounds.",-1),_=n("p",null,"Local policy, which can set different user levels and corresponding policy settings.",-1),v=n("p",null,"An array, with each element being an inbound connection configuration.",-1),y=n("p",null,"An array, with each element being an outbound connection configuration.",-1),q=n("p",null,"Used to configure the way Xray establishes and uses network connections with other servers.",-1),w=n("p",null,"Used to configure traffic data statistics.",-1),j=n("p",null,"Reverse proxy. You can forward server-side traffic to the client, that is, reverse traffic forwarding.",-1),O=n("p",null,"FakeDNS configuration. It can be used with transparent proxy to obtain the actual domain name.",-1);function x(N,S){const s=l("RouterLink");return c(),i("div",null,[r,n("div",d,[f,n("p",null,[t("If you are new to Xray, you can first click to view "),o(s,{to:"/en/document/install.html"},{default:a(()=>[t("configuration and running in the Quick Start guide")]),_:1}),t(", to learn the most basic configuration method, and then refer to the contents of this section to master all the configuration methods of Xray.")])]),k,n("blockquote",null,[n("p",null,[t("log:"),o(s,{to:"/en/config/log.html"},{default:a(()=>[t("LogObject")]),_:1})])]),h,n("blockquote",null,[n("p",null,[t("api:"),o(s,{to:"/en/config/api.html"},{default:a(()=>[t("ApiObject")]),_:1})])]),b,n("blockquote",null,[n("p",null,[t("dns: "),o(s,{to:"/en/config/dns.html"},{default:a(()=>[t("DnsObject")]),_:1})])]),m,n("blockquote",null,[n("p",null,[t("routing: "),o(s,{to:"/en/config/routing.html"},{default:a(()=>[t("RoutingObject")]),_:1})])]),g,n("blockquote",null,[n("p",null,[t("policy: "),o(s,{to:"/en/config/policy.html"},{default:a(()=>[t("PolicyObject")]),_:1})])]),_,n("blockquote",null,[n("p",null,[t("inbounds: [ "),o(s,{to:"/en/config/inbound.html"},{default:a(()=>[t("InboundObject")]),_:1}),t(" ]")])]),v,n("blockquote",null,[n("p",null,[t("outbounds: [ "),o(s,{to:"/en/config/outbound.html"},{default:a(()=>[t("OutboundObject")]),_:1}),t(" ]")])]),y,n("blockquote",null,[n("p",null,[t("transport: "),o(s,{to:"/en/config/transport.html"},{default:a(()=>[t("TransportObject")]),_:1})])]),q,n("blockquote",null,[n("p",null,[t("stats: "),o(s,{to:"/en/config/stats.html"},{default:a(()=>[t("StatsObject")]),_:1})])]),w,n("blockquote",null,[n("p",null,[t("reverse: "),o(s,{to:"/en/config/reverse.html"},{default:a(()=>[t("ReverseObject")]),_:1})])]),j,n("blockquote",null,[n("p",null,[t("fakedns: "),o(s,{to:"/en/config/fakedns.html"},{default:a(()=>[t("FakeDnsObject")]),_:1})])]),O])}const B=e(p,[["render",x],["__file","index.html.vue"]]);export{B as default};
