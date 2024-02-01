import{_ as l,r as p,o as i,c as u,d as a,a as n,b as s,w as r,e as t}from"./app-irvasr56.js";const d="/Xray-docs-next/assets/routing-lv1-img01-trio-Wh5zre5M.png",k={},v=t('<h1 id="路由-routing-功能简析-上" tabindex="-1"><a class="header-anchor" href="#路由-routing-功能简析-上"><span>路由 (routing) 功能简析（上）</span></a></h1><p>如果说 Xray 的【强大】主要体现在它极致的速度和广泛的兼容性。那么 Xray 的【灵活】，则主要应该归功于它巧妙的【路由】功能。本文就稍微说明一下这个功能的逻辑以及使用方式。</p><h2 id="_1-初识【路由】三兄弟" tabindex="-1"><a class="header-anchor" href="#_1-初识【路由】三兄弟"><span>1. 初识【路由】三兄弟</span></a></h2><p>要理解路由，就要理解完整的路由功能需要有三兄弟来合力完成：1. <strong>入站</strong>；2. <strong>路由</strong>；3. <strong>出站</strong>。</p><p><img src="'+d+'" alt="路由三兄弟"></p><p>三兄弟桃园结义，不求同年同月同日生，但求同年同月同日死。</p><p>所以谨记：任何一个元素错误，就可能导致路由功能无法正常工作。</p><p>因为路由的灵活性非常高，只看技术文档很容易把自己绕晕，所以本文我们用几个具体的示例来逐层讲解。</p><div class="custom-container warning"><p class="custom-container-title">啰嗦君</p><p>路由功能实在过于灵活，所以本文的示例，都是为了讲解对应的概念，实际使用时请根据自己的需求进行调整。</p></div><h2 id="_2-基本功-兄弟一条心" tabindex="-1"><a class="header-anchor" href="#_2-基本功-兄弟一条心"><span>2. 基本功： “兄弟一条心”</span></a></h2><p>下图的示例，就是在客户端的 <code>Xray</code> 入站接收 APP 数据、在路由 100%转发给出站，并从出站流向 VPS。</p>',11),g=t(`<p>下面我们来逐个分析：</p><h3 id="_2-1-入站" tabindex="-1"><a class="header-anchor" href="#_2-1-入站"><span>2.1 入站</span></a></h3><div class="custom-container tip"><p class="custom-container-title">Tip</p><p><strong>入站：</strong> 就是流量如何流入 <code>Xray</code></p></div><p>下面的入站配置示例，用大白话说就是：数据按照 <code>socks</code> 协议，通过 <code>10808</code> 端口，从本机 <code>127.0.0.1</code> 流入<code>Xray</code>。同时，<code>Xray</code> 将这个入站用 <code>[tag]</code> 命名为 <code>inbound-10808</code>。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inbound-10808&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">10808</span><span class="token punctuation">,</span>
      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;udp&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.2 出站</strong></p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p><strong>出站：</strong> 就是流量如何流出 <code>Xray</code></p></div><p>下面的出站配置示例，用大白话说就是：数据按照 <code>VLESS</code> 协议，以 <code>tcp + xtls</code> 的方式、及其他相关设置，把流量发送给对应的 VPS。同时，<code>Xray</code> 将这个出站用 <code>[tag]</code> 命名为 <code>proxy-out-vless</code>：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;proxy-out-vless&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vless&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;vnext&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a-name.yourdomain.com&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">443</span><span class="token punctuation">,</span>
            <span class="token property">&quot;users&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;uuiduuid-uuid-uuid-uuid-uuiduuiduuid&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;flow&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xtls-rprx-vision&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;encryption&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;network&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tcp&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;security&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tls&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tlsSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;serverName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;a-name.yourdomain.com&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;allowInsecure&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token property">&quot;fingerprint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;chrome&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-路由" tabindex="-1"><a class="header-anchor" href="#_2-3-路由"><span>2.3 路由</span></a></h3><div class="custom-container tip"><p class="custom-container-title">Tip</p><p><strong>路由：</strong> 就是把【入站】和【出站】之间的通道，用某种【条件】串联起来</p></div><p>下面的路由配置示例，用大白话说就是：把所有通过 <code>[tag]=&quot;inbound-10808&quot;</code> 入站流入 <code>Xray</code> 的流量，<code>100%</code> 全部流转导入 <code>[tag]=&quot;proxy-out-vless&quot;</code> 的出站，没有任何分流或其他操作。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;inboundTag&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;inbound-10808&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;proxy-out-vless&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>至此，我们最开始设计的极简规则【客户端的 <code>Xray</code> 入站接收 APP 数据、在路由 100%转发给出站，并从出站流向 VPS】已经完成。</p><h3 id="_2-4-路由配置项解析之一-流量筛选的依据" tabindex="-1"><a class="header-anchor" href="#_2-4-路由配置项解析之一-流量筛选的依据"><span>2.4 路由配置项解析之一：流量筛选的依据</span></a></h3><p>注意观察路由配置，我们可以看到几个新名词：</p><ol><li><code>&quot;domainStrategy&quot;: &quot;AsIs&quot;</code></li><li><code>“rules”</code></li><li><code>&quot;type&quot;: &quot;field&quot;</code></li><li><code>&quot;inboundTag&quot;: [&quot;inbound-10808&quot;]</code></li><li><code>&quot;outboundTag&quot;: &quot;proxy-out-vless&quot;</code></li></ol><p>其中 <code>domainStrategy</code> 我们暂且按下不表，先简单说明后面几个：</p><table><thead><tr><th style="text-align:center;">配置名称</th><th style="text-align:center;">配置值</th><th style="text-align:left;">配置说明</th></tr></thead><tbody><tr><td style="text-align:center;"><code>“rules”</code></td><td style="text-align:center;">                                                   </td><td style="text-align:left;">它的内层就是【路由规则】的明细设置</td></tr><tr><td style="text-align:center;"><code>&quot;type&quot;</code></td><td style="text-align:center;"><code>&quot;field&quot;</code></td><td style="text-align:left;">该项暂时没有特别定义，但是不能省略，所以记得写上就好</td></tr><tr><td style="text-align:center;"><code>&quot;inboundTag&quot;</code></td><td style="text-align:center;"><code>[&quot;inbound-10808&quot;]</code></td><td style="text-align:left;">筛选流量的 <strong>【依据】</strong> 是【入站 Tag】，具体 <strong>【条件】</strong> 现在只有一个：【入站来源是 <code>inbound-10808</code>】</td></tr><tr><td style="text-align:center;"><code>&quot;outboundTag&quot;</code></td><td style="text-align:center;"><code>&quot;proxy-out-vless&quot;</code></td><td style="text-align:left;">当上面的筛选条件成立时（即入站<code>[tag]=&quot;inbound-10808&quot;</code>时 ），<code>Xray</code> 会将流量导入 <code>[tag]=&quot;proxy-out-vless&quot;</code> 的出站</td></tr></tbody></table><p>本例中，我们只有一个入站，它的<code>&quot;inboundTag&quot; = &quot;inbound-10808&quot;</code> 。我们也只有一个出站，它的 <code>[tag]=&quot;proxy-out-vless&quot;</code>。所以根据上面这个路由规则，从唯一入站端口 <code>10808</code> 流入<code>Xray</code>的流量，<code>100%</code> 符合筛选条件、会被路由模块选中，然后转发给唯一的出站。</p><p>至此，<strong>入站</strong>、<strong>路由</strong>、<strong>出站</strong> 三兄弟就已经可以携手工作了。当然，现在这个 100%转发的工作并没有什么特别的意义。那么接下来，我们就看看这种分工合作的机制可以带来什么好处。</p><h2 id="_3-小试牛刀-三分天下-之-域名分流" tabindex="-1"><a class="header-anchor" href="#_3-小试牛刀-三分天下-之-域名分流"><span>3. 小试牛刀： “三分天下” 之 “域名分流”</span></a></h2><blockquote><p><code>[geosite.dat]</code></p></blockquote>`,23),q=t(`<p>这个配置逻辑，其实就是最简单、最常用的（《小小白白话文》中也在用的）路由配置三件套：</p><ol><li>广告流量屏蔽 <code>[block]</code></li><li>国内流量直连 <code>[direct]</code></li><li>国外流量转发 VPS <code>[proxy]</code></li></ol><div class="custom-container warning"><p class="custom-container-title">注意</p><p>小小白白话文中的直连配置是包括【国内域名】、【国内 IP】、【本机内部 IP】的。这里先讲解【国内域名】。</p></div><h3 id="_3-1-入站" tabindex="-1"><a class="header-anchor" href="#_3-1-入站"><span>3.1 入站</span></a></h3><p>保持上例的 <code>inbound-10808</code> 不变。</p><h3 id="_3-2-出站" tabindex="-1"><a class="header-anchor" href="#_3-2-出站"><span>3.2 出站</span></a></h3><p>在上例的基础上，我们已经有了 <code>[proxy]</code> 的出站 <code>&quot;proxy-out-vless&quot;</code>，所以它保持不变。显而易见，我们需要加入两个新的出站方式：<code>[block]</code> 和 <code>[direct]</code>，如下：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;proxy-out-vless&quot;</span>
      <span class="token comment">// ... ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;block&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blackhole&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct-out&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的配置用大白话翻译如下：</p><ol><li>上例中的 <code>[proxy-out-vless]</code> 出站配置保持不变</li><li>加入 <strong><code>blackhole</code> 黑洞协议</strong>，通过这个协议出站的流量，其实都被发送到了 <code>Xray</code> 内部的黑洞里，再也无法逃脱，于是效果就是屏蔽 <code>[block]</code></li><li>加入 <strong><code>freedom</code> 自由协议</strong>，通过这个协议出站的流量，是自由的离开<code>Xray</code>去寻找原定的服务器，就像从没有来过，于是效果就是直连 <code>[direct]</code> （我这里起名叫做 <code>[direct-out]</code> 是为了强调它是一个出站）</li></ol><h3 id="_3-3-路由" tabindex="-1"><a class="header-anchor" href="#_3-3-路由"><span>3.3 路由</span></a></h3><p>接下来就是见证奇迹的时刻了，我们可以用【路由】的配置把这些连接起来！</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:category-ads-all&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;block&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct-out&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;field&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;geosite:geolocation-!cn&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;outboundTag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;proxy-out-vless&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了理解这个配置文件，我们要稍微解释一下这里出现的几个新配置项：</p><ul><li><code>&quot;domain&quot;: [&quot;geosite:category-ads-all&quot;]</code></li><li><code>&quot;domain&quot;: [&quot;geosite:cn&quot;]</code></li><li><code>&quot;domain&quot;: [&quot;geosite:geolocation-!cn&quot;]</code></li></ul><h3 id="_3-4-简析域名文件-geosite-dat" tabindex="-1"><a class="header-anchor" href="#_3-4-简析域名文件-geosite-dat"><span>3.4 简析域名文件： <code>geosite.dat</code></span></a></h3><p>其实，聪明的你大概可以通过这些配置项的名称猜出来个大概：</p><ul><li><code>&quot;domain&quot;</code>：就是这次筛选流量的 <strong>【依据】</strong> 是 <strong>【域名】</strong> （而不再是入站 tag）</li><li><code>&quot;geosite&quot;</code>：就是 <code>Xray</code> 会去 <code>geosite.dat</code> 文件中寻找 <strong>【符合条件的域名】</strong></li><li><code>&quot;category-ads-all&quot;</code>：就是该文件中的 <strong>【所有广告类域名】</strong></li><li><code>&quot;cn&quot;</code>：就是该文件中的 <strong>【中国域名】</strong></li><li><code>&quot;geolocation-!cn&quot;</code>：就是该文件中的 <strong>【非中国域名】</strong></li></ul><p>结合这些说明，3.3 中的配置用大白话翻译就是：</p><ol><li>APP 试图访问国外域名 <code>&quot;domain&quot;: &quot;geolocation-!cn&quot;</code> 的流量，通过 <code>[proxy-out-vless]</code> 出站，转发至 VPS</li><li>APP 试图访问国外域名广告域名 <code>&quot;domain&quot;: &quot;geosite:category-ads-all&quot;</code> 的流量，通过 <code>[block]</code> 出站，转发至黑洞进行屏蔽</li><li>APP 试图访问国内域名 <code>&quot;domain&quot;: &quot;geosite:cn&quot;</code> 的流量，通过 <code>[direct-out]</code> 出站，自由离开完成直连</li></ol><p>这时，才让【路由功能】的好处稍微得到了一些展现。</p><h3 id="_3-5-所以-geosite-dat-到底是什么-不是有个-gfwlist-吗" tabindex="-1"><a class="header-anchor" href="#_3-5-所以-geosite-dat-到底是什么-不是有个-gfwlist-吗"><span>3.5 所以 <code>geosite.dat</code> 到底是什么？不是有个 <code>GFWList</code> 吗？</span></a></h3><p>你想，这世界上的域名何止千万，如果我们每写一个基于【域名】匹配的路由规则，都要自己收集、手动输入域名，那效率将会何其低下！</p><p>而如果所有的域名都只有一个种类，<code>[direct], [proxy], [block]</code> 只能三选其一，那又是多么的不方便！</p><p>就如关羽需要他的青龙偃月刀，<code>geosite.dat</code> 文件便作为【路由功能】驱使的神兵利器横空出世了，它致力于为用户提供成熟完善的【域名分类表】。让用户可以简单的通过 <code>geosite:xxx</code> 这种格式方便的调用任何子类，定制符合自身需求的路由规则。</p>`,25),m={href:"https://github.com/gfwlist/gfwlist",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"GFWList",-1),y=n("code",null,"geosite:apple",-1),h=n("code",null,"geosite:icloud",-1),A=n("code",null,"[proxy]",-1),E=n("code",null,"geosite:apple-update",-1),_=n("code",null,"[direct]",-1),B={class:"custom-container warning"},f=n("p",{class:"custom-container-title"},"Warning",-1),x=n("p",null,[n("strong",null,"注意："),s(" 现在，"),n("code",null,"geosite.dat"),s(" 文件其实有多种选择：")],-1),D=n("code",null,"Victoria Raymond",-1),F=n("code",null,"Project V",-1),P={href:"https://github.com/v2ray/domain-list-community",target:"_blank",rel:"noopener noreferrer"},S=n("code",null,"domain-list-community",-1),V=n("code",null,"Project V",-1),X=n("code",null,"v2fly",-1),j={href:"https://github.com/v2fly/domain-list-community",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"domain-list-community",-1),R=n("a",{href:"Loyalsoldier"},"@Loyalsoldier",-1),C={href:"https://github.com/Loyalsoldier/v2ray-rules-dat",target:"_blank",rel:"noopener noreferrer"},L=n("code",null,"Project X",-1),I=n("code",null,"Xray",-1),T={href:"https://github.com/XTLS/Xray-rules-dat",target:"_blank",rel:"noopener noreferrer"},w=n("s",null,"(你们看，文件夹都建好了，所以快了快了)",-1),N=n("p",null,[s("甚至，你还可以定制自己的 "),n("code",null,"geosite"),s(" 文件，外挂给 "),n("code",null,"Xray"),s(" 使用，但是这个就跑题了，本文不展开。")],-1),W=n("p",null,[s("如果你发现有些你遇到的域名没有被合理分类，请向上面的项目们提出 "),n("code",null,"issue"),s(" 甚至提交 "),n("code",null,"Pull Request"),s(" 吧！社区列表社区维护，人人为我我为人人！")],-1),M=t('<h3 id="_3-6-军师锦囊藏奇兵-一条隐藏的路由规则" tabindex="-1"><a class="header-anchor" href="#_3-6-军师锦囊藏奇兵-一条隐藏的路由规则"><span>3.6 军师锦囊藏奇兵：一条隐藏的路由规则</span></a></h3><p>事实上，当你认真思考上面的规则，不难发现一个问题，我们的所有规则都只规定了【当入站流量 <strong>符合某种条件时</strong> 应该被转发给哪个出站】，那么，如果 <code>geosite.dat</code> 文件不全面，我们的入站流量【<strong>不符合任何条件时</strong>】，<code>Xray</code> 会怎么处理呢？</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>如果你认为【不符合条件当然就无法连接啦！】的话，你可要重新思考一下哦。因为只有指定了 <code>[block]</code> 规则，才会被导入到 <code>blackhole</code> 黑洞协议从而阻断连接</p></div><p>事实上，<code>Xray</code> 为了避免路由规则不完全导致的规则混乱，已经贴心的提供了一条隐藏的路由规则：【<strong>当入站流量不符合任何条件时，转发给第一个出站</strong> 】</p><p>这样，就不会有任何流量被漏掉了。所以，你一定要把你最信赖的心腹大将放在【第一条出站】，让它为你守城护池。</p><h3 id="_3-7-再看-三分天下-的大地图" tabindex="-1"><a class="header-anchor" href="#_3-7-再看-三分天下-的大地图"><span>3.7 再看“三分天下”的大地图</span></a></h3><p>因为我们在前面的示例中把 <code>[proxy-out-vless]</code> 放在了出站的第一位，所以隐藏规则生效时，流量会通过 <code>VLESS</code> 协议被转发至远端的 VPS。因此，<code>Xray</code> 此时的完整工作逻辑如下：</p>',7),G=t(`<p>事实上，这就是传统所谓的 <strong>【默认科学上网、国内网站白名单直连】</strong> 的配置。</p><h2 id="_4-三分天下-之-蜀魏争雄" tabindex="-1"><a class="header-anchor" href="#_4-三分天下-之-蜀魏争雄"><span>4. “三分天下” 之 “蜀魏争雄”</span></a></h2><p>现在，你已经知道了隐藏的默认路由规则：【<strong>当入站流量不符合任何条件时，转发给第一个出站</strong> 】。这时候，你应该能看出来，究竟是【科学上网】为王，还是【直连】称霸，全看你的第一条出站是什么！</p><p>上一步我们已经配置出了 <strong>【默认科学上网、国内网站白名单直连】</strong> 的规则。那么现在只要 <strong>【把直连规则放在第一位】</strong>，就立即变成了正好相反的 <strong>【默认直连、国外网站白名单科学上网】</strong> 规则。</p><p>是不是，非常地简单？</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct-out&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;proxy-out-vless&quot;</span>
      <span class="token comment">// ... ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;block&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blackhole&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，路由规则其实变成了：</p>`,7),z=n("p",null,"这就是路由功能的灵活之处了，你可以自由的改变它的顺序来实现不同的设计。",-1),H=n("p",null,[s("至此，我们已经解释完了 "),n("strong",null,[s("【如何利用 "),n("code",null,"geosite.dat"),s(" 文件，通过路由规则，根据【域名】来分流网络流量】。")])],-1),J=n("h2",{id:"_5-攻城略池-多种路由匹配条件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_5-攻城略池-多种路由匹配条件"},[n("span",null,"5. 攻城略池 - 多种路由匹配条件")])],-1),K=n("p",null,"请确保你已经读懂了上面的内容，因为这样，你就已经理解了【路由】功能的工作逻辑。有了这个基础，我们就可以继续分析【路由】功能更多更详细的配置方式和匹配条件了。",-1);function Q(U,Y){const e=p("Mermaid"),o=p("ExternalLinkIcon"),c=p("RouterLink");return i(),u("div",null,[v,a(e,{id:"mermaid-35",code:"%20%20%20%20graph%20LR;%0A%0A%20%20%20%20S(APP%E6%95%B0%E6%8D%AE)%20.-%3E%20I%5B%E5%85%A5%E7%AB%99%5D%0A%0A%20%20%20%20subgraph%20Xray%0A%20%20%20%20I%20--%3E%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%3E%20O%5B%E5%87%BA%E7%AB%99%5D%0A%20%20%20%20end%0A%0A%20%20%20%20O%20.-%3E%20V(VPS)%0A%0A%20%20%20%20V:::greyclass%0A%20%20%20%20S:::greyclass%0A%20%20%20%20R:::routingclass%0A%20%20%20%20classDef%20greyclass%20fill:#C0C0C0%0A%20%20%20%20classDef%20routingclass%20fill:#FFFFDE%0A%0A"}),g,a(e,{id:"mermaid-189",code:"%20%20%20%20graph%20LR;%0A%0A%20%20%20%20S(APP%E6%95%B0%E6%8D%AE)%20.-%3E%20I%5B%E5%85%A5%E7%AB%99%5D%0A%0A%20%20%20%20subgraph%20Xray%0A%20%20%20%20I%20--%3E%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:category-ads-all%22%20--%3E%20O1%5Bblock%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:cn%22%20--%3E%20O2%5Bdirect%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:geolocation-!cn%22%20--%3E%20O3%5Bproxy%5D%0A%0A%20%20%20%20end%0A%0A%20%20%20%20O2%20.-%3E%20D(%E5%9B%BD%E5%86%85%E6%9C%8D%E5%8A%A1%E5%99%A8)%0A%20%20%20%20O3%20.-%3E%20V(VPS)%0A%0A%20%20%20%20O1:::redclass%0A%20%20%20%20V:::greyclass%0A%20%20%20%20S:::greyclass%0A%20%20%20%20R:::routingclass%0A%0A%20%20%20%20classDef%20redclass%20fill:#FF0000%0A%20%20%20%20classDef%20greyclass%20fill:#C0C0C0%0A%20%20%20%20classDef%20routingclass%20fill:#FFFFDE,stroke:#000000%0A%0A"}),q,n("p",null,[s("这种模块化结构提供的灵活性，其实远超传统的一揽子防火墙域名列表 "),n("a",m,[b,a(o)]),s("。为什么这么说呢？比如，你可以指定苹果的域名 "),y,s(" 和 icloud 相关域名 "),h,s(" 通过代理 "),A,s("，但是苹果的软件域名 "),E,s(" 保持直连 "),_,s(" 来保持最大下载速度。")]),n("div",B,[f,x,n("p",null,[s("最初，从 "),D,s(" 主力维护 "),F,s(" 项目时期，便提供了最初的配套项目："),n("a",P,[S,a(o)]),s("，用来收集、沉淀、分类各种常用的域名类型；")]),n("p",null,[s("之后，随着 V 姐突然消失导致 "),V,s(" 的原项目开发陷入停滞，"),X,s(" 社区维护并持续更新了社区版本的 "),n("a",j,[O,a(o)]),s("；")]),n("p",null,[s("同时，"),R,s(" 维护了其个人修改增强的路由规则文件 "),n("a",C,[s("v2ray-rules-dat"),a(o)]),s("，提供了诸多不同的选择和分类逻辑；")]),n("p",null,[s("另外，"),L,s(" 也计划于未来定制维护更适合 "),I,s(" 使用的路由规则文件 "),n("a",T,[s("Xray-rules-dat"),a(o)]),s("。"),w]),N,W]),M,a(e,{id:"mermaid-392",code:"%20%20%20%20graph%20LR;%0A%0A%20%20%20%20S(APP%E6%95%B0%E6%8D%AE)%20.-%3E%20I%5B%E5%85%A5%E7%AB%99%5D%0A%0A%20%20%20%20subgraph%20Xray%0A%20%20%20%20I%20--%3E%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:category-ads-all%22%20--%3E%20O1%5Bblock%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:cn%22%20--%3E%20O2%5Bdirect%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:geolocation-!cn%22%20--%3E%20O3%5Bproxy%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20-.%20%22%E6%B2%A1%E6%9C%89%E5%91%BD%E4%B8%AD%E8%A7%84%E5%88%99%E7%9A%84%E6%B5%81%E9%87%8F%22%20.-%3E%20O4%5B%E7%AC%AC%E4%B8%80%E6%9D%A1%E5%87%BA%E7%AB%99%5D%0A%0A%20%20%20%20end%0A%0A%20%20%20%20O2%20.-%3E%20D(%E5%9B%BD%E5%86%85%E6%9C%8D%E5%8A%A1%E5%99%A8)%0A%20%20%20%20O3%20.-%3E%20V(VPS)%0A%20%20%20%20O4%20.-%3E%20V(VPS)%0A%0A%20%20%20%20O1:::redclass%0A%20%20%20%20V:::greyclass%0A%20%20%20%20S:::greyclass%0A%20%20%20%20R:::routingclass%0A%0A%20%20%20%20classDef%20redclass%20fill:#FF0000%0A%20%20%20%20classDef%20greyclass%20fill:#C0C0C0%0A%20%20%20%20classDef%20routingclass%20fill:#FFFFDE,stroke:#000000%0A%0A"}),G,a(e,{id:"mermaid-412",code:"%20%20%20%20graph%20LR;%0A%0A%20%20%20%20S(APP%E6%95%B0%E6%8D%AE)%20.-%3E%20I%5B%E5%85%A5%E7%AB%99%5D%0A%0A%20%20%20%20subgraph%20Xray%0A%20%20%20%20I%20--%3E%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:category-ads-all%22%20--%3E%20O1%5Bblock%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:geolocation-!cn%22%20--%3E%20O3%5Bproxy%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20--%20%22geosite:cn%22%20--%3E%20O2%5Bdirect%5D%0A%20%20%20%20R%5B%E8%B7%AF%E7%94%B1%5D%20-.%20%22%E6%B2%A1%E6%9C%89%E5%91%BD%E4%B8%AD%E8%A7%84%E5%88%99%E7%9A%84%E6%B5%81%E9%87%8F%22%20.-%3E%20O4%5B%E7%AC%AC%E4%B8%80%E6%9D%A1%E5%87%BA%E7%AB%99%5D%0A%0A%20%20%20%20end%0A%0A%20%20%20%20O2%20.-%3E%20D(%E5%9B%BD%E5%86%85%E6%9C%8D%E5%8A%A1%E5%99%A8)%0A%20%20%20%20O3%20.-%3E%20V(VPS)%0A%20%20%20%20O4%20.-%3E%20D%0A%0A%20%20%20%20O1:::redclass%0A%20%20%20%20V:::greyclass%0A%20%20%20%20S:::greyclass%0A%20%20%20%20R:::routingclass%0A%20%20%20%20classDef%20redclass%20fill:#FF0000%0A%20%20%20%20classDef%20greyclass%20fill:#C0C0C0%0A%20%20%20%20classDef%20routingclass%20fill:#FFFFDE,stroke:#000000%0A%0A"}),z,H,J,K,n("p",null,[s("等你看完后面的内容，就完全可以自由的定制属于自己的路由规则啦！还等什么，让我们一起进入 "),a(c,{to:"/en/document/level-1/routing-lv1-part2.html"},{default:r(()=>[s("《路由 (routing) 功能简析（下）》")]),_:1}),s(" 吧！")])])}const $=l(k,[["render",Q],["__file","routing-lv1-part1.html.vue"]]);export{$ as default};
