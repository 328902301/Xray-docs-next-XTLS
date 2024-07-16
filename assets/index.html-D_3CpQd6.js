import{_ as l,r as e,o as u,c,a as t,b as n,d as s,w as o,e as r}from"./app-NkV3gPh_.js";const i={},d=r(`<blockquote><p><strong>В этом разделе вы узнаете все детали настройки Xray. Овладев этими знаниями, вы сможете раскрыть весь потенциал Xray.</strong></p></blockquote><h2 id="обзор" tabindex="-1"><a class="header-anchor" href="#обзор"><span>Обзор</span></a></h2><p>Конфигурационный файл Xray имеет формат JSON. Формат конфигурации одинаков для клиента и сервера, но фактическое содержимое отличается.<br> Он выглядит следующим образом:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
  <span class="token property">&quot;fakedns&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;metrics&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;observatory&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;burstObservatory&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),k={class:"custom-container warning"},b=n("p",{class:"custom-container-title"},"Внимание",-1),_=n("h2",{id:"основные-модули-конфигурации",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#основные-модули-конфигурации"},[n("span",null,"Основные модули конфигурации")])],-1),v=n("p",null,"Настройка журнала, управляющая способом вывода журналов Xray.",-1),m=n("p",null,"Предоставляет API-интерфейсы для удаленного вызова.",-1),h=n("p",null,"Встроенный DNS-сервер. Если этот параметр не настроен, используются системные настройки DNS.",-1),q=n("p",null,"Функция маршрутизации. Позволяет настроить правила для разделения трафика и отправки его через разные исходящие подключения.",-1),f=n("p",null,"Локальная политика, позволяющая настроить разные уровни пользователей и соответствующие им политики.",-1),y=n("p",null,"Массив, каждый элемент которого представляет собой конфигурацию входящего подключения.",-1),g=n("p",null,"Массив, каждый элемент которого представляет собой конфигурацию исходящего подключения.",-1),j=n("p",null,"Используется для настройки способа, которым Xray устанавливает и использует сетевые подключения к другим серверам.",-1),O=n("p",null,"Используется для настройки сбора статистики трафика.",-1),x=n("p",null,"Обратный прокси. Позволяет перенаправлять трафик с сервера на клиент, т.е. перенаправлять трафик в обратном направлении.",-1),N=n("p",null,"Настройка FakeDNS. Может использоваться совместно с прозрачным проксированием для получения фактических доменных имен.",-1),X=n("p",null,"Настройка метрик. Более прямой (и, надеемся, лучший) способ экспорта статистики.",-1),S=n("p",null,"Мониторинг фоновых подключений. Обнаружение состояния подключения исходящего прокси.",-1),D=n("p",null,"Мониторинг параллельных подключений. Обнаружение состояния подключения исходящего прокси.",-1);function B(I,R){const p=e("I18nTip"),a=e("RouterLink");return u(),c("div",null,[t(p),d,n("div",k,[b,n("p",null,[s("Если вы новичок в Xray, вы можете сначала прочитать раздел "),t(a,{to:"/ru/document/install.html"},{default:o(()=>[s("Настройка и запуск в кратком руководстве")]),_:1}),s(", чтобы узнать об основных способах настройки, а затем прочитать этот раздел, чтобы узнать обо всех способах настройки Xray.")])]),_,n("blockquote",null,[n("p",null,[s("log: "),t(a,{to:"/ru/config/log.html"},{default:o(()=>[s("LogObject")]),_:1})])]),v,n("blockquote",null,[n("p",null,[s("api: "),t(a,{to:"/ru/config/api.html"},{default:o(()=>[s("ApiObject")]),_:1})])]),m,n("blockquote",null,[n("p",null,[s("dns: "),t(a,{to:"/ru/config/dns.html"},{default:o(()=>[s("DnsObject")]),_:1})])]),h,n("blockquote",null,[n("p",null,[s("routing: "),t(a,{to:"/ru/config/routing.html"},{default:o(()=>[s("RoutingObject")]),_:1})])]),q,n("blockquote",null,[n("p",null,[s("policy: "),t(a,{to:"/ru/config/policy.html"},{default:o(()=>[s("PolicyObject")]),_:1})])]),f,n("blockquote",null,[n("p",null,[s("inbounds: [ "),t(a,{to:"/ru/config/inbound.html"},{default:o(()=>[s("InboundObject")]),_:1}),s(" ]")])]),y,n("blockquote",null,[n("p",null,[s("outbounds: [ "),t(a,{to:"/ru/config/outbound.html"},{default:o(()=>[s("OutboundObject")]),_:1}),s(" ]")])]),g,n("blockquote",null,[n("p",null,[s("transport: "),t(a,{to:"/ru/config/transport.html"},{default:o(()=>[s("TransportObject")]),_:1})])]),j,n("blockquote",null,[n("p",null,[s("stats: "),t(a,{to:"/ru/config/stats.html"},{default:o(()=>[s("StatsObject")]),_:1})])]),O,n("blockquote",null,[n("p",null,[s("reverse: "),t(a,{to:"/ru/config/reverse.html"},{default:o(()=>[s("ReverseObject")]),_:1})])]),x,n("blockquote",null,[n("p",null,[s("fakedns: "),t(a,{to:"/ru/config/fakedns.html"},{default:o(()=>[s("FakeDnsObject")]),_:1})])]),N,n("blockquote",null,[n("p",null,[s("metrics: "),t(a,{to:"/ru/config/metrics.html"},{default:o(()=>[s("metricsObject")]),_:1})])]),X,n("blockquote",null,[n("p",null,[s("observatory: "),t(a,{to:"/ru/config/observatory.html#observatoryobject"},{default:o(()=>[s("ObservatoryObject")]),_:1})])]),S,n("blockquote",null,[n("p",null,[s("burstObservatory: "),t(a,{to:"/ru/config/observatory.html#burstobservatoryobject"},{default:o(()=>[s("BurstObservatoryObject")]),_:1})])]),D])}const V=l(i,[["render",B],["__file","index.html.vue"]]);export{V as default};
