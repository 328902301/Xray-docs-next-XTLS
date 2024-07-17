import{_ as s,r as t,o as i,c as d,a as o,d as a,b as e,e as l}from"./app-D-B5ekGa.js";const _={},h=e("h1",{id:"браузерныи-dialer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#браузерныи-dialer"},[e("span",null,"Браузерный Dialer")])],-1),p=e("h2",{id:"предыстория",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#предыстория"},[e("span",null,"Предыстория")])],-1),u={href:"https://github.com/v2ray/discussion/issues/754#issuecomment-647934994",target:"_blank",rel:"noopener noreferrer"},b=l('<p>Однако WSS все еще имеет очевидные проблемы с ALPN, поэтому следующим шагом будет пересылка <code>HTTP/2</code> и <code>QUIC</code> через браузер.</p><h2 id="xray-и-js" tabindex="-1"><a class="header-anchor" href="#xray-и-js"><span>Xray и JS</span></a></h2><p>Был создан очень простой и элегантный механизм связи:</p><ul><li>Xray прослушивает адрес и порт A в качестве HTTP-сервера.<br> Браузер обращается к A и загружает JavaScript-код с веб-страницы.</li><li>JavaScript-код устанавливает WebSocket-соединение с A.<br> После успешного установления соединения Xray передает соединение в канал.</li><li>При необходимости установить соединение Xray получает доступное соединение из канала и отправляет целевой URL-адрес и необязательные ранние данные (early data).</li><li>JavaScript-код сообщает Xray об успешном подключении к цели и продолжает использовать это соединение для двунаправленной передачи данных.<br> Соединение закрывается синхронно.</li><li>Соединение закрывается после использования, но JavaScript-код гарантирует, что всегда есть доступные новые соединения.</li></ul><h2 id="ранние-данные-early-data" tabindex="-1"><a class="header-anchor" href="#ранние-данные-early-data"><span>Ранние данные (Early data)</span></a></h2><p>Механизм ранних данных был скорректирован в соответствии с потребностями браузера:</p>',6),S=e("li",null,[a("Заголовок ответа сервера содержит заголовок "),e("code",null,"Sec-WebSocket-Protocol"),a(" запроса, что также частично скрывает характеристики длины ответа рукопожатия WSS.")],-1),y=e("li",null,[a("Для кодирования ранних данных, отправляемых браузеру, используется "),e("code",null,"base64.RawURLEncoding"),a(", а не "),e("code",null,"StdEncoding"),a("."),e("br"),a(" Сервер обеспечивает совместимость.")],-1),x={href:"https://github.com/XTLS/Xray-core/pull/375",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"?ed=2048",-1),m=e("br",null,null,-1),v=e("code",null,"MaxHeaderBytes",-1),X=e("br",null,null,-1),g=e("s",null,"(Хотя, кажется, это не обязательно)",-1),T={id:"конфигурация",tabindex:"-1"},k={class:"header-anchor",href:"#конфигурация"},E=l("<p>Это экспериментальный процесс.<br> В настоящее время конфигурация выглядит следующим образом (Xray-core v1.4.1):</p><ul><li>Подготовьте рабочую конфигурацию WSS.<br> Обратите внимание, что в поле <code>address</code> нужно указать доменное имя.<br> Если нужно указать IP-адрес, настройте DNS или добавьте запись в файл hosts.</li><li>Если трафик браузера также проходит через Xray-core, обязательно настройте прямое подключение для этого домена, чтобы избежать зацикливания трафика.</li><li>Установите переменную окружения, указывающую адрес и порт, который нужно прослушивать, например, <code>XRAY_BROWSER_DIALER = 127.0.0.1:8080</code>.</li><li>Сначала запустите Xray-core, а затем откройте указанный адрес и порт в любом браузере.<br> Вы также можете открыть инструменты разработчика (F12) и посмотреть консоль и вкладку &quot;Сеть&quot;.</li><li>Браузеры ограничивают количество WebSocket-соединений, поэтому рекомендуется включить <code>Mux.Cool</code>.</li></ul>",2);function B(L,R){const c=t("I18nTip"),r=t("Badge"),n=t("ExternalLinkIcon");return i(),d("div",null,[o(c),h,o(r,{text:"BETA",type:"warning"}),a(),o(r,{text:"v1.4.1+",type:"warning"}),p,e("p",null,[a("Основываясь на "),e("a",u,[a("идее, возникшей год назад"),o(n)]),a(", с помощью нативного JavaScript был реализован простой WSS-браузерный Dialer, который эмулирует TLS-отпечаток и поведенческие характеристики реального браузера.")]),b,e("ul",null,[S,y,e("li",null,[a("Кроме того, из-за "),e("a",x,[a("Xray-core#375"),o(n)]),a(" рекомендуется использовать "),f,a("."),m,a(" В этом PR также увеличен "),v,a(" на сервере до 4096."),X,g])]),e("h2",T,[e("a",k,[e("span",null,[a("Конфигурация "),o(r,{text:"v1.4.1",type:"warning"})])])]),E])}const A=s(_,[["render",B],["__file","browser_dialer.html.vue"]]);export{A as default};