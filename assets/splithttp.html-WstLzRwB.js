import{_ as l,r as n,o as r,c as d,a as o,b as e,d as t,e as p}from"./app-D-B5ekGa.js";const i={},u=e("h1",{id:"splithttp",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#splithttp"},[e("span",null,"SplitHTTP")])],-1),T=p(`<p>Используется для загрузки с помощью HTTP-фрагментированной передачи, загрузка осуществляется с помощью нескольких HTTP POST-запросов.</p><p>Может использоваться через CDN, не поддерживающие WebSocket, но есть несколько требований:</p><ul><li>CDN должен поддерживать HTTP-фрагментированную передачу и потоковые ответы без буферизации. Ядро будет отправлять <code>X-Accel-Buffering: no</code> и <code>Content-Type: text/event-stream</code>, чтобы сообщить CDN об этом, но CDN должен соблюдать этот заголовок. Если промежуточный сервер не поддерживает потоковые ответы и зависает, передача, скорее всего, не будет работать.</li></ul><p>Цель та же, что и у V2fly Meek, но благодаря использованию фрагментированной загрузки скорость загрузки выше, а скорость отдачи оптимизирована, но все еще очень ограничена, поэтому к HTTP-прокси предъявляются более высокие требования (см. выше).</p><p><code>SplitHTTP</code> также принимает заголовок <code>X-Forwarded-For</code>.</p><h2 id="splithttpobject" tabindex="-1"><a class="header-anchor" href="#splithttpobject"><span>SplitHttpObject</span></a></h2><p><code>SplitHttpObject</code> соответствует элементу <code>splithttpSettings</code> в конфигурации транспорта.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xray.com&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;maxUploadSize&quot;</span><span class="token operator">:</span> <span class="token number">1000000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;maxConcurrentUploads&quot;</span><span class="token operator">:</span> <span class="token number">10</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>path</code>: string</p></blockquote><p>Путь HTTP-протокола, используемый SplitHTTP, значение по умолчанию — <code>&quot;/&quot;</code>.</p><blockquote><p><code>host</code>: string</p></blockquote><p>Хост, отправляемый в HTTP-запросе SplitHTTP, по умолчанию пуст. Если значение на стороне сервера пустое, значение хоста, отправленное клиентом, не проверяется.</p><p>Если это значение указано на стороне сервера или <code>host</code> указан в <code>headers</code>, то проверяется соответствие хоста запроса клиента.</p><p>Приоритет выбора хоста для отправки клиентом: <code>host</code> &gt; <code>headers</code> &gt; <code>address</code>.</p><blockquote><p><code>headers</code>: map {string: string}</p></blockquote><p>Пользовательские HTTP-заголовки, пары ключ-значение, где каждый ключ представляет имя HTTP-заголовка, а соответствующее значение является строкой.</p><blockquote><p><code>maxUploadSize</code>: int</p></blockquote><p>Максимальный размер фрагмента загрузки в байтах, по умолчанию 1 МБ.</p><p>Это значение должно быть меньше максимального размера тела запроса, разрешенного CDN или другим обратным HTTP-прокси, иначе будет выдаваться ошибка HTTP 413.</p><p>Увеличение этого значения может увеличить скорость загрузки.</p><blockquote><p><code>maxConcurrentUploads</code>: int</p></blockquote><p>Максимальное количество одновременных загрузок, по умолчанию 10, соединения будут использоваться повторно, насколько это возможно.</p><p>Если соединение нестабильно или потребление памяти на сервере слишком велико, попробуйте уменьшить это значение.</p><p>Значение, установленное клиентом, должно быть меньше, чем на сервере, иначе это может привести к проблемам с подключением.</p><h2 id="детали-протокола" tabindex="-1"><a class="header-anchor" href="#детали-протокола"><span>Детали протокола</span></a></h2>`,25),h={href:"https://github.com/XTLS/Xray-core/pull/3412",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/XTLS/Xray-core/pull/3462",target:"_blank",rel:"noopener noreferrer"},b=p("<ol><li><p>Загрузка начинается с <code>GET /&lt;UUID&gt;</code>. Сервер немедленно отвечает <code>200 OK</code> и <code>Transfer Encoding:chunked</code> и немедленно отправляет двухбайтовую полезную нагрузку, чтобы принудительно обновить заголовки HTTP-прокси.</p></li><li><p>Отправка данных начинается с <code>POST /&lt;UUID&gt;/&lt;seq&gt;</code>. <code>seq</code> действует как порядковый номер TCP, начиная с 0, пакеты данных могут отправляться одновременно, сервер должен пересобрать данные по порядковому номеру. Порядковый номер не следует сбрасывать.</p><p>Клиент может свободно выбирать порядок открытия исходящих и нисходящих запросов, любой из них может инициировать сеанс, но соединение <code>GET</code> должно быть открыто в течение 30 секунд, иначе сеанс будет разорван.</p></li><li><p>Запрос <code>GET</code> будет оставаться открытым до тех пор, пока соединение не будет разорвано, и сервер, и клиент могут закрыть соединение. Конкретное поведение зависит от версии HTTP.</p></li></ol><p>Рекомендации:</p><ul><li><p>Не ожидайте, что CDN будет правильно передавать все заголовки, цель этого протокола — обойти CDN, не поддерживающие WS, а поведение этих CDN обычно не очень дружелюбное.</p></li><li><p>Следует предполагать, что все HTTP-соединения не поддерживают потоковые запросы, поэтому размер каждого пакета, отправляемого исходящим соединением, должен определяться с учетом задержки, пропускной способности и ограничений самого промежуточного сервера (аналогично MTU TCP и алгоритму Нейгла).</p></li><li><p>Что касается версии HTTP, ядро в настоящее время не поддерживает h2c, поэтому Xray будет отправлять только запросы http/1.1 при использовании без HTTPS. Чтобы избежать дополнительных сложностей, связанных с согласованием ALPN, клиент Xray использует h2 при использовании HTTPS (если только alpn не указан вручную как http/1.1 в tlsSettings), а сервер Xray совместим с различными типами входящих подключений (h3 пока нет), поскольку входящие соединения могут быть различных типов из-за промежуточных серверов.</p></li></ul>",3);function m(q,_){const a=n("I18nTip"),c=n("Badge"),s=n("ExternalLinkIcon");return r(),d("div",null,[o(a),u,o(c,{text:"v1.8.16+",type:"warning"}),T,e("p",null,[t("Подробное обсуждение см. "),e("a",h,[t("#3412"),o(s)]),t(" и "),e("a",k,[t("#3462"),o(s)]),t(". Ниже приведено краткое описание и требования к совместимой реализации:")]),b])}const g=l(i,[["render",m],["__file","splithttp.html.vue"]]);export{g as default};