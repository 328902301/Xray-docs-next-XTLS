import{_ as r,r as t,o as l,c as d,a as s,b as n,d as o,w as a,e as c}from"./app-NkV3gPh_.js";const i={},b=n("h1",{id:"исходящие-подключения",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#исходящие-подключения"},[n("span",null,"Исходящие подключения")])],-1),k=c(`<h2 id="outboundobject" tabindex="-1"><a class="header-anchor" href="#outboundobject"><span>OutboundObject</span></a></h2><p><code>OutboundObject</code> соответствует дочернему элементу поля <code>outbounds</code> в конфигурационном файле.</p><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>Первый элемент в списке используется как основной исходящий узел.<br> Если совпадений с правилами маршрутизации нет или ни одно правило не сработало, трафик отправляется через основной исходящий узел.</p></div><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;sendThrough&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;название протокола&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;тег&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;streamSettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;proxySettings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;another-outbound-tag&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;mux&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>sendThrough</code>: address</p></blockquote><p>IP-адрес, используемый для отправки данных.<br> Этот параметр используется, если на хосте настроено несколько IP-адресов.<br> Значение по умолчанию - <code>&quot;0.0.0.0&quot;</code>.</p><p>Разрешается указывать блок IPv6 CIDR (например, <code>114:514:1919:810::/64</code>).<br> Xray будет использовать случайный IP-адрес из этого блока для установления исходящих соединений.<br> Необходимо правильно настроить сетевое подключение, таблицу маршрутизации и параметры ядра, чтобы разрешить Xray привязываться к любому IP-адресу из этого блока.</p><blockquote><p><code>protocol</code>: string</p></blockquote><p>Название протокола подключения.<br> Список доступных протоколов см. в разделе &quot;Исходящие подключения&quot; в левой части документации.</p><blockquote><p><code>settings</code>: OutboundConfigurationObject</p></blockquote><p>Конкретные настройки зависят от протокола.<br> См. описание <code>OutboundConfigurationObject</code> для каждого протокола.</p><blockquote><p><code>tag</code>: string</p></blockquote><p>Тег этого исходящего подключения, используемый для идентификации этого подключения в других настройках.</p><div class="custom-container danger"><p class="custom-container-title">Предупреждение</p><p>Если это поле не пустое, его значение должно быть <strong>уникальным</strong> среди всех тегов.</p></div>`,14),v=n("code",null,"streamSettings",-1),m=c(`<p>Тип транспорта (transport) - это способ взаимодействия текущего узла Xray с другими узлами.</p><blockquote><p><code>proxySettings</code>: <a href="#proxysettingsobject">ProxySettingsObject</a></p></blockquote><p>Настройки исходящего прокси.<br> Если исходящий прокси включен, параметр <code>streamSettings</code> этого исходящего подключения игнорируется.</p><blockquote><p><code>mux</code>: <a href="#muxobject">MuxObject</a></p></blockquote><p>Настройки Mux.</p><h3 id="proxysettingsobject" tabindex="-1"><a class="header-anchor" href="#proxysettingsobject"><span>ProxySettingsObject</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;another-outbound-tag&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>tag</code>: string</p></blockquote><p>При указании тега другого исходящего подключения данные, отправляемые этим исходящим подключением, будут перенаправлены через указанное исходящее подключение.</p>`,9),q={class:"custom-container danger"},g=n("p",{class:"custom-container-title"},"Предупреждение",-1),h=n("strong",null,"не использует",-1),x=n("br",null,null,-1),_=n("div",{class:"custom-container danger"},[n("p",{class:"custom-container-title"},"Предупреждение"),n("p",null,"Этот параметр несовместим с SockOpt.dialerProxy.")],-1),y={class:"custom-container tip"},j=n("p",{class:"custom-container-title"},"Подсказка",-1),P=n("code",null,"transportLayer",-1),f={href:"https://www.v2fly.org/config/outbounds.html#proxysettingsobject",target:"_blank",rel:"noopener noreferrer"},T=c(`<h3 id="muxobject" tabindex="-1"><a class="header-anchor" href="#muxobject"><span>MuxObject</span></a></h3><p>Функция Mux позволяет мультиплексировать несколько TCP-соединений по одному TCP-соединению.<br> Подробнее см. <a href="../../development/protocols/muxcool">Mux.Cool</a>.<br> Mux предназначен для сокращения задержек при установлении TCP-соединений, а не для увеличения пропускной способности.<br> Использование Mux при просмотре видео, загрузке файлов или тестировании скорости обычно приводит к обратным результатам.<br> Mux нужно включать только на клиенте, сервер автоматически адаптируется.</p><p><code>MuxObject</code> соответствует полю <code>mux</code> в <code>OutboundObject</code>.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;concurrency&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
  <span class="token property">&quot;xudpConcurrency&quot;</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token property">&quot;xudpProxyUDP443&quot;</span><span class="token operator">:</span> <span class="token string">&quot;reject&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>enabled</code>: true | false</p></blockquote><p>Включить пересылку запросов через Mux.<br> Значение по умолчанию - <code>false</code>.</p><blockquote><p><code>concurrency</code>: number</p></blockquote><p>Максимальное количество одновременных подключений.<br> Минимальное значение - <code>1</code>, максимальное значение - <code>1024</code>.<br> Если этот параметр опущен или равен <code>0</code>, используется значение <code>8</code>.</p><p>Это значение определяет максимальное количество дочерних соединений, которые могут быть мультиплексированы по одному TCP-соединению.<br> Например, если <code>concurrency</code> равен <code>8</code>, то при отправке 8 TCP-запросов клиентом Xray создаст только одно фактическое TCP-соединение, и все 8 запросов клиента будут передаваться по этому соединению.</p><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>Если указать отрицательное значение, например <code>-1</code>, трафик TCP не будет проходить через Mux.</p></div><blockquote><p><code>xudpConcurrency</code>: number</p></blockquote><p>Использовать новый агрегированный туннель XUDP (т.е. другое Mux-соединение) для проксирования UDP-трафика.<br> Укажите максимальное количество одновременных дочерних UoT-подключений.<br> Минимальное значение - <code>1</code>, максимальное значение - <code>1024</code>.<br> Если этот параметр опущен или равен <code>0</code>, UDP-трафик будет использовать тот же путь, что и TCP-трафик (традиционное поведение).</p><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>Если указать отрицательное значение, например <code>-1</code>, трафик UDP не будет проходить через Mux.<br> Будет использоваться исходный способ передачи UDP-трафика для данного протокола прокси.<br> Например, <code>Shadowsocks</code> будет использовать нативный UDP, а <code>VLESS</code> будет использовать UoT.</p></div><blockquote><p><code>xudpProxyUDP443</code>: string</p></blockquote><p>Управление обработкой проксируемого трафика UDP/443 (QUIC) в Mux:</p><ul><li>По умолчанию <code>reject</code> - отклонять трафик (обычно браузеры автоматически переключаются на TCP HTTP/2).</li><li><code>allow</code> - разрешить трафик через Mux.</li><li><code>skip</code> - не использовать Mux для трафика UDP/443.<br> Будет использоваться исходный способ передачи UDP-трафика для данного протокола прокси.<br> Например, <code>Shadowsocks</code> будет использовать нативный UDP, а <code>VLESS</code> будет использовать UoT.</li></ul>`,16);function C(O,S){const p=t("I18nTip"),e=t("RouterLink"),u=t("ExternalLinkIcon");return l(),d("div",null,[s(p),b,n("p",null,[o("Исходящие подключения используются для отправки данных. Доступные протоколы см. в разделе "),s(e,{to:"/ru/config/outbounds/"},{default:a(()=>[o("Исходящие протоколы")]),_:1}),o(".")]),k,n("blockquote",null,[n("p",null,[v,o(": "),s(e,{to:"/ru/config/transport.html#streamsettingsobject"},{default:a(()=>[o("StreamSettingsObject")]),_:1})])]),m,n("div",q,[g,n("p",null,[o("Этот способ пересылки "),h,o(" транспортный уровень."),x,o(" Если вам нужна пересылка с использованием транспортного уровня, используйте "),s(e,{to:"/ru/config/transport.html#sockoptobject"},{default:a(()=>[o("SockOpt.dialerProxy")]),_:1}),o(".")])]),_,n("div",y,[j,n("p",null,[o("Совместим с настройкой "),P,o(" в v2fly/v2ray-core "),n("a",f,[o("transportLayer"),s(u)]),o(".")])]),T])}const U=r(i,[["render",C],["__file","outbound.html.vue"]]);export{U as default};
