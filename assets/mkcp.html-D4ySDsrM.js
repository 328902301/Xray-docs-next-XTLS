import{_ as c,r as s,o as i,c as r,a,b as e,d as n,e as p}from"./app-NkV3gPh_.js";const d={},l=p(`<h1 id="mkcp" tabindex="-1"><a class="header-anchor" href="#mkcp"><span>mKCP</span></a></h1><p>mKCP использует UDP для имитации TCP-соединения.</p><p>mKCP жертвует пропускной способностью ради уменьшения задержки. При передаче одного и того же контента mKCP, как правило, потребляет больше трафика, чем TCP.</p><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>Убедитесь, что на хосте правильно настроена конфигурация брандмауэра.</p></div><h2 id="kcpobject" tabindex="-1"><a class="header-anchor" href="#kcpobject"><span>KcpObject</span></a></h2><p><code>KcpObject</code> соответствует параметрам передачи <code>kcpSettings</code>.</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;mtu&quot;</span><span class="token operator">:</span> <span class="token number">1350</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tti&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token property">&quot;uplinkCapacity&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token property">&quot;downlinkCapacity&quot;</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
  <span class="token property">&quot;congestion&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;readBufferSize&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;writeBufferSize&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;header&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.com&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;seed&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Password&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>mtu</code>: number</p></blockquote><p>Максимальный размер передаваемого блока (maximum transmission unit).</p><p>Выберите значение от 576 до 1460.</p><p>По умолчанию <code>1350</code>.</p><blockquote><p><code>tti</code>: number</p></blockquote><p>Интервал передачи (transmission time interval), в миллисекундах (ms), mKCP будет отправлять данные с этой частотой.</p><p>Выберите значение от 10 до 100.</p><p>По умолчанию <code>50</code>.</p><blockquote><p><code>uplinkCapacity</code>: number</p></blockquote><p>Пропускная способность канала отправки, то есть максимальная полоса пропускания, используемая хостом для отправки данных, в Мбит/с, обратите внимание, что это байты, а не биты.</p><p>Может быть установлено в 0, что означает очень маленькую пропускную способность.</p><p>По умолчанию <code>5</code>.</p><blockquote><p><code>downlinkCapacity</code>: number</p></blockquote><p>Пропускная способность канала приема, то есть максимальная полоса пропускания, используемая хостом для приема данных, в Мбит/с, обратите внимание, что это байты, а не биты.</p><p>Может быть установлено в 0, что означает очень маленькую пропускную способность.</p><p>По умолчанию <code>20</code>.</p><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p><code>uplinkCapacity</code> и <code>downlinkCapacity</code> определяют скорость передачи mKCP.</p><p>В качестве примера, если клиент отправляет данные, то <code>uplinkCapacity</code> клиента определяет скорость отправки данных, а <code>downlinkCapacity</code> сервера определяет скорость приема данных. Значение, меньшее из двух, будет использоваться в качестве определяющего.</p><p>Рекомендуется установить <code>downlinkCapacity</code> в большое значение, например, 100, а <code>uplinkCapacity</code> - в фактическое значение скорости сети. Когда скорость недостаточна, можно постепенно увеличивать значение <code>uplinkCapacity</code> до примерно двух раз больше, чем фактическая скорость сети.</p></div><blockquote><p><code>congestion</code>: true | false</p></blockquote><p>Включить или отключить контроль перегрузки.</p><p>При включении контроля перегрузки Xray будет автоматически отслеживать качество сети. При серьезных потерях пакетов он автоматически снизит пропускную способность; при хорошем качестве сети он также будет соответствующим образом увеличивать пропускную способность.</p><p>По умолчанию <code>false</code>.</p><blockquote><p><code>readBufferSize</code>: number</p></blockquote><p>Размер буфера чтения для отдельного соединения, в МБ.</p><p>По умолчанию <code>2</code>.</p><blockquote><p><code>writeBufferSize</code>: number</p></blockquote><p>Размер буфера записи для отдельного соединения, в МБ.</p><p>По умолчанию <code>2</code>.</p><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p><code>readBufferSize</code> и <code>writeBufferSize</code> определяют размер памяти, используемой для каждого соединения.</p><p>При необходимости высокой скорости передачи, установка больших значений <code>readBufferSize</code> и <code>writeBufferSize</code> может в некоторой степени повысить скорость, но также будет использовать больше памяти.</p><p>При скорости сети не превышающей 20 Мбит/с, значение по умолчанию 1 МБ может удовлетворить требованиям; при превышении этой скорости можно соответствующим образом увеличить значения <code>readBufferSize</code> и <code>writeBufferSize</code>, а затем вручную сбалансировать скорость и использование памяти.</p></div><blockquote><p><code>header</code>: <a href="#headerobject">HeaderObject</a></p></blockquote><p>Настройка маскировки заголовка данных</p><blockquote><p><code>seed</code>: string</p></blockquote><p>Опциональное шифрование пароля, используемое для шифрования потока данных с помощью алгоритма AES-128-GCM. Клиент и сервер должны использовать одинаковый пароль.</p><p>Эта шифровальная схема не предназначена для обеспечения безопасности контента, но может помочь противостоять некоторым блокировкам.</p><blockquote><p>В настоящее время в тестовой среде, после включения этой настройки, не наблюдалось явления блокировки исходного, не зашифрованного варианта.</p></blockquote><h3 id="headerobject" tabindex="-1"><a class="header-anchor" href="#headerobject"><span>HeaderObject</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;example.com&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>type</code>: string</p></blockquote><p>Тип маскировки, доступные значения:</p><ul><li><code>&quot;none&quot;</code>: значение по умолчанию, не применяется маскировка, отправляемые данные не имеют никаких отличительных признаков.</li><li><code>&quot;srtp&quot;</code>: маскировка под SRTP-пакеты, будет идентифицироваться как данные видеозвонка (например, FaceTime).</li><li><code>&quot;utp&quot;</code>: маскировка под uTP-пакеты, будет идентифицироваться как данные загрузки BT.</li><li><code>&quot;wechat-video&quot;</code>: маскировка под пакеты видеозвонка WeChat.</li><li><code>&quot;dtls&quot;</code>: маскировка под DTLS 1.2-пакеты.</li><li><code>&quot;wireguard&quot;</code>: маскировка под WireGuard-пакеты. (Это не настоящий протокол WireGuard).</li><li><code>&quot;dns&quot;</code>: некоторые корпоративные сети разрешают DNS-запросы без авторизации, добавление DNS-заголовка к KCP-пакетам позволяет обойти некоторые корпоративные сети.</li></ul><blockquote><p><code>domain</code>: string</p></blockquote><p>Используется совместно с типом маскировки <code>&quot;dns&quot;</code>, можно указать произвольный домен.</p><h2 id="благодарности" tabindex="-1"><a class="header-anchor" href="#благодарности"><span>Благодарности</span></a></h2>`,49),u={href:"https://github.com/skywind3000",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/xtaci",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/xiaokangwang",target:"_blank",rel:"noopener noreferrer"},b=p('<h2 id="улучшения-протокола-kcp" tabindex="-1"><a class="header-anchor" href="#улучшения-протокола-kcp"><span>Улучшения протокола KCP</span></a></h2><h3 id="более-компактныи-заголовок-протокола" tabindex="-1"><a class="header-anchor" href="#более-компактныи-заголовок-протокола"><span>Более компактный заголовок протокола</span></a></h3><p>Протокол KCP использует заголовок размером 24 байта, а mKCP уменьшил его до 18 байт для пакета данных и 16 байт для пакета подтверждения. Более компактный заголовок помогает избежать обнаружения по признакам и ускоряет передачу данных.</p><p>Кроме того, в оригинальном KCP каждый пакет подтверждения может подтвердить только один пакет данных, то есть, если KCP нужно подтвердить получение 100 пакетов данных, он отправит 24 * 100 = 2400 байт данных. В этом случае многократно повторяются заголовки, что приводит к ненужному расходу полосы пропускания. mKCP сжимает несколько пакетов подтверждения, 100 пакетов подтверждения занимают всего 16 + 2 + 100 * 4 = 418 байт, что в шесть раз меньше, чем в оригинальном KCP.</p><h3 id="передача-пакетов-подтверждения" tabindex="-1"><a class="header-anchor" href="#передача-пакетов-подтверждения"><span>Передача пакетов подтверждения</span></a></h3><p>В оригинальном KCP пакет подтверждения отправляется только один раз, если пакет подтверждения потерян, то обязательно произойдет повторная передача данных, что приводит к ненужному расходу полосы пропускания. mKCP будет повторно отправлять пакеты подтверждения с определенной частотой, пока отправитель не получит подтверждение. Размер одного пакета подтверждения составляет 22 байта, что значительно меньше, чем размер пакета данных, который составляет более 1000 байт, поэтому повторная передача пакета подтверждения имеет гораздо меньшую цену.</p><h3 id="управление-состоянием-соединения" tabindex="-1"><a class="header-anchor" href="#управление-состоянием-соединения"><span>Управление состоянием соединения</span></a></h3><p>mKCP может эффективно управлять состоянием соединения. Когда удаленный хост инициализирует закрытие соединения, соединение будет закрыто в течение двух секунд; когда удаленный хост теряет соединение, соединение будет закрыто в течение максимум 30 секунд.</p><p>Оригинальный KCP не поддерживает этот сценарий.</p>',9);function q(h,v){const t=s("I18nTip"),o=s("ExternalLinkIcon");return i(),r("div",null,[a(t),l,e("ul",null,[e("li",null,[e("a",u,[n("@skywind3000"),a(o)]),n(" изобрел и реализовал протокол KCP.")]),e("li",null,[e("a",k,[n("@xtaci"),a(o)]),n(" перевел реализацию KCP с C на Go.")]),e("li",null,[e("a",m,[n("@xiaokangwang"),a(o)]),n(" протестировал интеграцию KCP с Xray и внес первый PR.")])]),b])}const C=c(d,[["render",q],["__file","mkcp.html.vue"]]);export{C as default};
