import{_ as s,r as a,o,c as t,a as e,e as p}from"./app-NkV3gPh_.js";const c={},l=p(`<h1 id="настроика-с-помощью-нескольких-фаилов" tabindex="-1"><a class="header-anchor" href="#настроика-с-помощью-нескольких-фаилов"><span>Настройка с помощью нескольких файлов</span></a></h1><p>Программа Xray поддерживает использование нескольких файлов конфигурации.</p><p>Основная цель использования нескольких файлов конфигурации — разделение настроек модулей с разными функциями для удобства управления и обслуживания.</p><p>Эта функция в основном предназначена для обогащения экосистемы Xray. Например, для клиентских GUI обычно реализуются только фиксированные функции, такие как выбор узла, и слишком сложные конфигурации трудно реализовать графически. Можно оставить только один пользовательский каталог конфигурации <code>confdir</code> для настройки сложных функций. Для сценариев развертывания сервера достаточно добавить файлы в <code>confdir</code> для настройки различных протоколов.</p><h2 id="запуск-с-несколькими-фаилами" tabindex="-1"><a class="header-anchor" href="#запуск-с-несколькими-фаилами"><span>Запуск с несколькими файлами</span></a></h2><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>В информации о запуске будет указан каждый считываемый файл конфигурации. Убедитесь, что порядок считывания соответствует ожидаемому. Вы можете контролировать порядок, добавляя префиксы с номерами к именам файлов. Например, <code>01_имя_файла</code>, <code>02_имя_файла</code>, чем больше число, тем позже файл будет обработан.</p></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ xray run <span class="token parameter variable">-confdir</span> /etc/xray/confs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Также можно использовать <code>Xray.location.confdir</code> или <code>Xray_LOCATION_CONFDIR</code> для указания <code>confdir</code>.</p><p>Параметр <code>-confdir</code> имеет приоритет над переменной среды. Если параметр указывает на допустимый каталог, значение переменной среды игнорируется.</p><h2 id="правила" tabindex="-1"><a class="header-anchor" href="#правила"><span>Правила</span></a></h2><h3 id="обычные-объекты" tabindex="-1"><a class="header-anchor" href="#обычные-объекты"><span>Обычные объекты (<code>{}</code>)</span></a></h3><p>Последующие объекты верхнего уровня перезаписывают или дополняют предыдущие.</p><h3 id="массивы" tabindex="-1"><a class="header-anchor" href="#массивы"><span>Массивы (<code>[]</code>)</span></a></h3><p>В конфигурации JSON <code>inbounds</code> и <code>outbounds</code> имеют структуру массива, для них действуют особые правила:</p><ul><li>Поиск существующего элемента с тем же <code>tag</code> для перезаписи. Если элемент не найден: <ul><li>Для <code>inbounds</code>: добавляется в конец (порядок элементов в <code>inbounds</code> не имеет значения).</li><li>Для <code>outbounds</code>: добавляется в начало (по умолчанию используется первый выход в <code>outbounds</code>); но если имя файла содержит <code>tail</code> (регистр не имеет значения), элемент добавляется в конец.</li></ul></li></ul><h2 id="пример-конфигурации" tabindex="-1"><a class="header-anchor" href="#пример-конфигурации"><span>Пример конфигурации</span></a></h2><p>Предположим, что в папке <code>confs</code> есть следующие три файла конфигурации:</p><ul><li>01.json</li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;loglevel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.0.0.0&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">8888</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>02.json</li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;loglevel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;debug&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1080</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;block&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blackhole&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>03_tail.json</li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct2&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Три конфигурации будут объединены следующим образом:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;loglevel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;debug&quot;</span>  <span class="token comment">// объект верхнего уровня перезаписывает предыдущий</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;inbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span> <span class="token comment">// перезапись элемента с тем же tag</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;socks&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;listen&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;port&quot;</span><span class="token operator">:</span> <span class="token number">1080</span> 
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;outbounds&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;block&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// добавлено в начало outbounds</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blackhole&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;direct2&quot;</span><span class="token punctuation">,</span> <span class="token comment">// добавлено в конец, так как имя файла 03_tail.json содержит tail</span>
      <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;freedom&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Подсказка</p><p>Вы можете использовать команду <code>xray run -confdir=./confs -dump</code> для просмотра объединенной конфигурации. Однако, поскольку ядро использует формат данных protobuf, формат вывода конфигурации для параметра <code>-dump</code> будет отличаться.</p></div>`,26);function i(u,r){const n=a("I18nTip");return o(),t("div",null,[e(n),l])}const k=s(c,[["render",i],["__file","multiple.html.vue"]]);export{k as default};
