import{_ as i,r as s,o as l,c as o,a,b as n,d as e,e as t}from"./app-DslwasIo.js";const r="/Xray-docs-next/assets/ch06-img01-acme-install-Dowds3tU.gif",d={},u=t('<h1 id="【глава-6】-управление-сертификатами" tabindex="-1"><a class="header-anchor" href="#【глава-6】-управление-сертификатами"><span>【Глава 6】 Управление сертификатами</span></a></h1><h2 id="_6-1-получение-ssl-сертификата" tabindex="-1"><a class="header-anchor" href="#_6-1-получение-ssl-сертификата"><span>6.1 Получение SSL-сертификата</span></a></h2><p>Теперь нам нужно получить действующий SSL-сертификат для нашего доменного имени, чтобы веб-сайт работал по протоколу HTTPS. Это важнейший инструмент для обеспечения безопасности трафика при использовании современных VPN-сервисов, таких как Xray.</p><div class="custom-container warning"><p class="custom-container-title">Внимание</p><p>Не используйте самоподписанные сертификаты. Это ненамного упростит задачу, но создаст дополнительные риски (например, возможность атак типа «человек посередине»).</p></div>',4),m={href:"https://github.com/acmesh-official/acme.sh",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"acme.sh",-1),b=t(`<p>Я уверен, что вы уже освоились с базовыми командами Linux, поэтому скриншоты с выводом команд, которые мы уже использовали ранее, будут опущены. Если вы забыли, как выполнять ту или иную команду, вернитесь и перечитайте предыдущие главы.</p><h2 id="_6-2-установка-acme-sh" tabindex="-1"><a class="header-anchor" href="#_6-2-установка-acme-sh"><span>6.2 Установка <code>acme.sh</code></span></a></h2><ol><li><p>Базовые команды Linux:</p><table><thead><tr><th style="text-align:center;">Номер</th><th style="text-align:left;">Команда</th><th style="text-align:left;">Описание</th></tr></thead><tbody><tr><td style="text-align:center;"><code>cmd-12</code></td><td style="text-align:left;"><code>wget</code></td><td style="text-align:left;">Загрузка файла из интернета</td></tr><tr><td style="text-align:center;"><code>cmd-13</code></td><td style="text-align:left;"><code>acme.sh</code></td><td style="text-align:left;">Управление сертификатами</td></tr></tbody></table></li><li><p>Запустите скрипт установки:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-O</span> -  https://get.acme.sh <span class="token operator">|</span> <span class="token function">sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Сделайте команду <code>acme.sh</code> доступной:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">.</span> .bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Включите автоматическое обновление <code>acme.sh</code>:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>acme.sh <span class="token parameter variable">--upgrade</span> --auto-upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Весь процесс установки показан на гифке ниже:</p><p><img src="`+r+`" alt="Установка acme.sh"></p></li></ol><h2 id="_6-3-тестовыи-запрос-сертификата" tabindex="-1"><a class="header-anchor" href="#_6-3-тестовыи-запрос-сертификата"><span>6.3 Тестовый запрос сертификата</span></a></h2><p>Перед тем, как запросить настоящий сертификат, давайте сделаем тестовый запрос (<code>--issue --test</code>), чтобы убедиться, что всё настроено правильно. Это позволит избежать превышения лимита на количество запросов Let&#39;s Encrypt (например, не более 5 неудачных запросов в час для одного домена и одного аккаунта).</p><ol><li><p>Команда для тестового запроса сертификата (в этой статье мы будем использовать сертификаты <strong>ECC</strong>, поскольку на сегодняшний день нет причин не использовать их):</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>acme.sh <span class="token parameter variable">--issue</span> <span class="token parameter variable">--server</span> letsencrypt <span class="token parameter variable">--test</span> <span class="token parameter variable">-d</span> поддомен.ваш_домен.com <span class="token parameter variable">-w</span> /home/vpsadmin/www/webpage <span class="token parameter variable">--keylength</span> ec-256
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Пояснение</p><p>Главное преимущество <strong>ECC-сертификатов</strong> — это меньший размер ключа, что означает более высокий уровень безопасности при том же размере ключа, а также более высокую скорость шифрования и расшифровки. Например, ECC-256 обеспечивает уровень безопасности, примерно соответствующий RSA-3072, так зачем же отказываться от ECC? Некоторые утверждают, что рукопожатие TLS с ECC-сертификатами происходит заметно быстрее. Я считаю, что это преувеличение. RSA-рукопожатие и так достаточно быстрое, а разница в скорости, если она и есть, составляет всего несколько миллисекунд и практически незаметна.</p><p>Конечно, если вам нужно обеспечить совместимость с очень старыми устройствами, то можно использовать и RSA-сертификат.</p></div></li><li><p>В случае успеха вы увидите примерно такой вывод:</p><div class="language-log line-numbers-mode" data-ext="log" data-title="log"><pre class="language-log"><code><span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">04:25:12</span> AM EST<span class="token punctuation">]</span> <span class="token property">Using ACME_DIRECTORY:</span> <span class="token url">https://acme-staging-v02.api.letsencrypt.org/directory</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">04:25:13</span> AM EST<span class="token punctuation">]</span> <span class="token property">Using CA:</span> <span class="token url">https://acme-staging-v02.api.letsencrypt.org/directory</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">04:25:13</span> AM EST<span class="token punctuation">]</span> Create account key ok<span class="token punctuation">.</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">04:25:13</span> AM EST<span class="token punctuation">]</span> <span class="token property">Registering account:</span> <span class="token url">https://acme-staging-v02.api.letsencrypt.org/directory</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">04:25:13</span> AM EST<span class="token punctuation">]</span> Registered
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">04:25:13</span> AM EST<span class="token punctuation">]</span> ACCOUNT_THUMBPRINT<span class="token operator">=</span><span class="token string">&#39;CU6qmPKuRqhyTAIrF4swosR375194z_1ddUlWef8xDc&#39;</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">04:25:13</span> AM EST<span class="token punctuation">]</span> Creating domain key
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">04:25:13</span> AM EST<span class="token punctuation">]</span> <span class="token property">The domain key is here:</span> <span class="token file-path string">/home/vpsadmin/.acme.sh/поддомен.ваш_домен.com_ecc/поддомен.ваш_домен.com.key</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">04:25:13</span> AM EST<span class="token punctuation">]</span> Single domain<span class="token operator">=</span><span class="token string">&#39;поддомен.ваш_домен.com&#39;</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">04:25:13</span> AM EST<span class="token punctuation">]</span> Getting domain auth token for each domain
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">04:25:14</span> AM EST<span class="token punctuation">]</span> Getting webroot for domain<span class="token operator">=</span><span class="token string">&#39;поддомен.ваш_домен.com&#39;</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">04:25:14</span> AM EST<span class="token punctuation">]</span> <span class="token property">Verifying:</span> поддомен<span class="token punctuation">.</span>ваш_домен<span class="token punctuation">.</span>com
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">04:25:23</span> AM EST<span class="token punctuation">]</span> Pending
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">04:25:25</span> AM EST<span class="token punctuation">]</span> Success
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">04:25:25</span> AM EST<span class="token punctuation">]</span> Verify finished<span class="token punctuation">,</span> start to sign<span class="token punctuation">.</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">04:25:25</span> AM EST<span class="token punctuation">]</span> Lets finalize the order<span class="token punctuation">.</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">04:25:25</span> AM EST<span class="token punctuation">]</span> Le_OrderFinalize<span class="token operator">=</span><span class="token string">&#39;https://acme-staging-v02.api.letsencrypt.org/acme/finalize/490205995/7730242871&#39;</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">04:25:25</span> AM EST<span class="token punctuation">]</span> Downloading cert<span class="token punctuation">.</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">04:25:25</span> AM EST<span class="token punctuation">]</span> Le_LinkCert<span class="token operator">=</span><span class="token string">&#39;https://acme-staging-v02.api.letsencrypt.org/acme/cert/xujss5xt8i38waubafz2xujss5xt8i38waubz2&#39;</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:21:52</span> AM EST<span class="token punctuation">]</span> Cert success<span class="token punctuation">.</span>
<span class="token operator">-</span><span class="token operator">-</span>BEGIN CERTIFICAT<span class="token operator">-</span><span class="token operator">-</span>
sxlYqPvWreKgD5b8JyOQX0Yg2MLoRUoDyqVkd31PthIiwzdckoh5eD3JU7ysYBtN
cTFK4LGOfjqi8Ks87EVJdK9IaSAu7ZC6h5to0eqpJ5PLhaM3e6yJBbHmYA8w1Smp
wAb3tdoHZ9ttUIm9CrSzvDBt6BBT6GqYdDamMyCYBLooMyDEM4CUFsOzCRrEqqvC
2mTTEmhvpojo5rhdTSJxibozyNWTGwoTj0v9pTUeQcGqLIzqi4DowjBHD5guwRid
SjAFnm6JT2xUQgWFm58A1gv1OhbH1TRPUUmtE1nFEN7YiSjI4xgxqAXT3CLD2EUb
wXlUrO6c75zSsQP4bRMzgOjJUqHtSb6IEqELzt4M7KzL5iCOruCChCo2DZxUwvVX
tOoaAyQJzCbTqE6aUqwiKi3gVyoxvDP9mI5JdRYzsDL6GVud7EHPnYeMl9ubLZAK
0vg84mbMP3f6mYM4KRa1cqiyOIcQPT4AzGFYVv4sm049bZQg7sd0Bz9CaFvE7yDA
1y17XlgCDnsjxl66bqI1vkENN9XT5xeFHONqc18b5fZEKSIvdX7iWPFWp1PyMPpG
0pMCP1EymZNFxIMJLgbWqExwLWfPc5Ib3PjBaIqhXPnw6sT2MQSxXwDupq1UJVhV
7E3hQRVlwI4CXi6WLHJMNvNRyyK87gCrLH1bKYsPeRVaz77poWBq49zwBCts6hPY
IeF4ltGXyANNIOPEi8vy138fRU4LYh81d8FjOtFfJZogMjwhfNvapqxPMsioPlmX
TnZu0n7setrVNUEfTMHWqPpDgk5MPrWLA4LapqaDfEX4pwnQJLMwMi6s94z165c0
iMRSKA1yU5zqv8aNsDfPoY4OkSPWs4MaXgRRSLBsUfZ15DwQXPk76kegHIyxWvwF
tYw9HKR5QCMK66fa0z4aJoFVFLK0IIOGEZOanRFUCnkLUDd3QZ3YU8lEcrj7Uxos
haiRNICyC6UfsCJ94a8vcNyMosPv3xBLMp19WXgiFYqEFQkntkv1FLRI35fjeJmg
0fmD9VG9bkzGPHihJgQLRlCHasGf6XrdfkSsODAyCUHUHJ0RzqF4YEZMcxDxzuQ2
YO7bFwj7S3mUdVPZ6MPasjxdyBjJgEBMch2uy4AhmudXfEBQBye8W6ZI4ztZjLVV
FmP4SIuaNUmMe20TjR8b9NVC96AhxOanWT3mRROsdokpKQGTJvl27EHH8KuAbUOc
G6KtPy4wslNZNXWcBy9n63RcWak12r7kAIFn38tZxmlw2WUKoRSMAH64GcDTjRQd
Am65hBHzvGrj93wEuVNIebvNIsJOlng3HFjpIxVqKGMCIfWIKGDE3YzK3p4LbGZ6
NZFQWYJLNVf2M9CCJfbEImPYgvctrxl39H6KVYPCw1SAdaj9NneUqmREOQkKoEB0
x6PmNirbMscHhQPSC0JQaqUgaQFgba1ALmzRYAnYhNb0twkTxWbY7DBkAarxqMIp
yiLKcBFc5H7dgJCImo7us7aJeftC44uWkPIjw9AKH<span class="token operator">=</span>
<span class="token operator">-</span><span class="token operator">-</span>END CERTIFICAT<span class="token operator">-</span><span class="token operator">-</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:21:52</span> AM EST<span class="token punctuation">]</span> Your cert is in  <span class="token file-path string">/home/vpsadmin/.acme.sh/поддомен.ваш_домен.com_ecc/поддомен.ваш_домен.com.cer</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:21:52</span> AM EST<span class="token punctuation">]</span> Your cert key is in  <span class="token file-path string">/home/vpsadmin/.acme.sh/поддомен.ваш_домен.com_ecc/поддомен.ваш_домен.com.key</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:21:52</span> AM EST<span class="token punctuation">]</span> The intermediate CA cert is in  <span class="token file-path string">/home/vpsadmin/.acme.sh/поддомен.ваш_домен.com_ecc/ca.cer</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:21:52</span> AM EST<span class="token punctuation">]</span> <span class="token property">And the full chain certs is there:</span>  <span class="token file-path string">/home/vpsadmin/.acme.sh/поддомен.ваш_домен.com_ecc/fullchain.cer</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Обратите внимание, что мы запросили тестовый сертификат, который нельзя использовать в реальной среде. Он нужен только для проверки корректности настроек. Если вы посмотрите на вывод команды, то увидите, что сертификат был выпущен сервером <code>https://acme-staging-v02.api.letsencrypt.org</code>. Слово <code>staging</code> означает, что это тестовый сервер Let&#39;s Encrypt.</p></li><li><p>Если на этом этапе возникли ошибки, выполните следующую команду, чтобы увидеть подробную информацию о процессе запроса сертификата:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>acme.sh <span class="token parameter variable">--issue</span> <span class="token parameter variable">--server</span> letsencrypt <span class="token parameter variable">--test</span> <span class="token parameter variable">-d</span> поддомен.ваш_домен.com <span class="token parameter variable">-w</span> /home/vpsadmin/www/webpage <span class="token parameter variable">--keylength</span> ec-256 <span class="token parameter variable">--debug</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Мы просто добавили параметр <code>--debug</code> в конец команды.</p></li><li><p>Если тестовый запрос выполнен успешно, можно переходить к запросу настоящего сертификата (тестовый сертификат удалять не нужно, он будет автоматически перезаписан настоящим сертификатом).</p></li></ol><h2 id="_6-4-запрос-настоящего-сертификата" tabindex="-1"><a class="header-anchor" href="#_6-4-запрос-настоящего-сертификата"><span>6.4 Запрос настоящего сертификата</span></a></h2><ol><li><p>Команда для запроса настоящего сертификата (мы просто убираем параметр <code>--test</code> и добавляем параметр <code>--force</code>):</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>acme.sh --set-default-ca <span class="token parameter variable">--server</span> letsencrypt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>acme.sh <span class="token parameter variable">--issue</span> <span class="token parameter variable">-d</span> поддомен.ваш_домен.com <span class="token parameter variable">-w</span> /home/vpsadmin/www/webpage <span class="token parameter variable">--keylength</span> ec-256 <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Пояснение</p><p>Параметр <code>--force</code> используется для принудительного обновления сертификата до истечения срока действия старого. В предыдущем шаге мы получили тестовый сертификат, который всё ещё действителен. Поэтому нам нужно использовать этот параметр.</p></div></li><li><p>В случае успеха вы увидите примерно такой же вывод, как и в предыдущем шаге:</p><div class="language-log line-numbers-mode" data-ext="log" data-title="log"><pre class="language-log"><code>vpsadmin<span class="token operator">@</span>vps<span class="token operator">-</span>server<span class="token operator">:</span><span class="token operator">~</span><span class="token operator">$</span> <span class="token domain constant">acme.sh</span> <span class="token operator">-</span><span class="token operator">-</span>issue <span class="token operator">-</span>d поддомен<span class="token punctuation">.</span>ваш_домен<span class="token punctuation">.</span>com <span class="token operator">-</span>w <span class="token file-path string">/home/vpsadmin/www/webpage</span> <span class="token operator">-</span><span class="token operator">-</span>keylength ec<span class="token operator">-</span><span class="token number">256</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:22:51</span> AM EST<span class="token punctuation">]</span> <span class="token property">Using CA:</span> <span class="token url">https://acme-v02.api.letsencrypt.org/directory</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:22:51</span> AM EST<span class="token punctuation">]</span> Creating domain key
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:22:51</span> AM EST<span class="token punctuation">]</span> <span class="token property">The domain key is here:</span> <span class="token file-path string">/home/vpsadmin/.acme.sh/поддомен.ваш_домен.com_ecc/поддомен.ваш_домен.com.key</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:22:51</span> AM EST<span class="token punctuation">]</span> Single domain<span class="token operator">=</span><span class="token string">&#39;поддомен.ваш_домен.com&#39;</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:22:51</span> AM EST<span class="token punctuation">]</span> Getting domain auth token for each domain
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:22:51</span> AM EST<span class="token punctuation">]</span> Getting webroot for domain<span class="token operator">=</span><span class="token string">&#39;поддомен.ваш_домен.com&#39;</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:22:51</span> AM EST<span class="token punctuation">]</span> <span class="token property">Verifying:</span> поддомен<span class="token punctuation">.</span>ваш_домен<span class="token punctuation">.</span>com
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:22:51</span> AM EST<span class="token punctuation">]</span> Pending
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:22:51</span> AM EST<span class="token punctuation">]</span> Success
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:22:51</span> AM EST<span class="token punctuation">]</span> Verify finished<span class="token punctuation">,</span> start to sign<span class="token punctuation">.</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:22:51</span> AM EST<span class="token punctuation">]</span> Lets finalize the order<span class="token punctuation">.</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:22:51</span> AM EST<span class="token punctuation">]</span> Le_OrderFinalize<span class="token operator">=</span><span class="token string">&#39;https://acme-v02.api.letsencrypt.org/acme/finalize/490205996/7730242872&#39;</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:22:51</span> AM EST<span class="token punctuation">]</span> Downloading cert<span class="token punctuation">.</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:22:51</span> AM EST<span class="token punctuation">]</span> Le_LinkCert<span class="token operator">=</span><span class="token string">&#39;https://acme-v02.api.letsencrypt.org/acme/cert/vsxvk0oldnuobe51ayxz4dms62sk2dwmw9zhuw&#39;</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:22:52</span> AM EST<span class="token punctuation">]</span> Cert success<span class="token punctuation">.</span>
<span class="token operator">-</span><span class="token operator">-</span>BEGIN CERTIFICAT<span class="token operator">-</span><span class="token operator">-</span>
sxlYqPvWreKgD5b8JyOQX0Yg2MLoRUoDyqVkd31PthIiwzdckoh5eD3JU7ysYBtN
cTFK4LGOfjqi8Ks87EVJdK9IaSAu7ZC6h5to0eqpJ5PLhaM3e6yJBbHmYA8w1Smp
wAb3tdoHZ9ttUIm9CrSzvDBt6BBT6GqYdDamMyCYBLooMyDEM4CUFsOzCRrEqqvC
2mTTEmhvpojo5rhdTSJxibozyNWTGwoTj0v9pTUeQcGqLIzqi4DowjBHD5guwRid
SjAFnm6JT2xUQgWFm58A1gv1OhbH1TRPUUmtE1nFEN7YiSjI4xgxqAXT3CLD2EUb
wXlUrO6c75zSsQP4bRMzgOjJUqHtSb6IEqELzt4M7KzL5iCOruCChCo2DZxUwvVX
tOoaAyQJzCbTqE6aUqwiKi3gVyoxvDP9mI5JdRYzsDL6GVud7EHPnYeMl9ubLZAK
0vg84mbMP3f6mYM4KRa1cqiyOIcQPT4AzGFYVv4sm049bZQg7sd0Bz9CaFvE7yDA
1y17XlgCDnsjxl66bqI1vkENN9XT5xeFHONqc18b5fZEKSIvdX7iWPFWp1PyMPpG
0pMCP1EymZNFxIMJLgbWqExwLWfPc5Ib3PjBaIqhXPnw6sT2MQSxXwDupq1UJVhV
7E3hQRVlwI4CXi6WLHJMNvNRyyK87gCrLH1bKYsPeRVaz77poWBq49zwBCts6hPY
IeF4ltGXyANNIOPEi8vy138fRU4LYh81d8FjOtFfJZogMjwhfNvapqxPMsioPlmX
TnZu0n7setrVNUEfTMHWqPpDgk5MPrWLA4LapqaDfEX4pwnQJLMwMi6s94z165c0
iMRSKA1yU5zqv8aNsDfPoY4OkSPWs4MaXgRRSLBsUfZ15DwQXPk76kegHIyxWvwF
tYw9HKR5QCMK66fa0z4aJoFVFLK0IIOGEZOanRFUCnkLUDd3QZ3YU8lEcrj7Uxos
haiRNICyC6UfsCJ94a8vcNyMosPv3xBLMp19WXgiFYqEFQkntkv1FLRI35fjeJmg
0fmD9VG9bkzGPHihJgQLRlCHasGf6XrdfkSsODAyCUHUHJ0RzqF4YEZMcxDxzuQ2
YO7bFwj7S3mUdVPZ6MPasjxdyBjJgEBMch2uy4AhmudXfEBQBye8W6ZI4ztZjLVV
FmP4SIuaNUmMe20TjR8b9NVC96AhxOanWT3mRROsdokpKQGTJvl27EHH8KuAbUOc
G6KtPy4wslNZNXWcBy9n63RcWak12r7kAIFn38tZxmlw2WUKoRSMAH64GcDTjRQd
Am65hBHzvGrj93wEuVNIebvNIsJOlng3HFjpIxVqKGMCIfWIKGDE3YzK3p4LbGZ6
NZFQWYJLNVf2M9CCJfbEImPYgvctrxl39H6KVYPCw1SAdaj9NneUqmREOQkKoEB0
x6PmNirbMscHhQPSC0JQaqUgaQFgba1ALmzRYAnYhNb0twkTxWbY7DBkAarxqMIp
yiLKcBFc5H7dgJCImo7us7aJeftC44uWkPM<span class="token operator">=</span>
<span class="token operator">-</span><span class="token operator">-</span>END CERTIFICAT<span class="token operator">-</span><span class="token operator">-</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:22:52</span> AM EST<span class="token punctuation">]</span> Your cert is in  <span class="token file-path string">/home/vpsadmin/.acme.sh/поддомен.ваш_домен.com_ecc/поддомен.ваш_домен.com.cer</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:22:52</span> AM EST<span class="token punctuation">]</span> Your cert key is in  <span class="token file-path string">/home/vpsadmin/.acme.sh/поддомен.ваш_домен.com_ecc/поддомен.ваш_домен.com.key</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:22:52</span> AM EST<span class="token punctuation">]</span> The intermediate CA cert is in  <span class="token file-path string">/home/vpsadmin/.acme.sh/поддомен.ваш_домен.com_ecc/ca.cer</span>
<span class="token punctuation">[</span><span class="token date number">Wed 30</span> Dec <span class="token number">2022</span> <span class="token time number">15:22:52</span> AM EST<span class="token punctuation">]</span> <span class="token property">And the full chain certs is there:</span>  <span class="token file-path string">/home/vpsadmin/.acme.sh/поддомен.ваш_домен.com_ecc/fullchain.cer</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Обратите внимание, что теперь сертификат выдан сервером <code>https://acme-v02.api.letsencrypt.org</code> (без слова <code>staging</code>), т.е. это настоящий, действующий сертификат.</p></li></ol><h2 id="_6-5-установка-сертификата" tabindex="-1"><a class="header-anchor" href="#_6-5-установка-сертификата"><span>6.5 Установка сертификата</span></a></h2><ol><li><p>После того, как сертификат получен, его нужно установить в определённое место и указать путь к нему в файле конфигурации:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vpsadmin@vps-server:~$ acme.sh <span class="token parameter variable">--installcert</span> <span class="token parameter variable">-d</span> поддомен.ваш_домен.com --cert-file /путь/к/папке/cert.crt --key-file /путь/к/папке/cert.key --fullchain-file /путь/к/папке/fullchain.crt <span class="token parameter variable">--ecc</span>
<span class="token punctuation">[</span>Mon <span class="token number">14</span> Feb <span class="token number">2022</span> 03:00:25 PM CST<span class="token punctuation">]</span> Installing cert to: /etc/xray/cert/cert.crt
<span class="token punctuation">[</span>Mon <span class="token number">14</span> Feb <span class="token number">2022</span> 03:00:25 PM CST<span class="token punctuation">]</span> Installing key to: /etc/xray/cert/cert.key
<span class="token punctuation">[</span>Mon <span class="token number">14</span> Feb <span class="token number">2022</span> 03:00:25 PM CST<span class="token punctuation">]</span> Installing full chain to: /etc/xray/cert/fullchain.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_6-6-ваш-прогресс" tabindex="-1"><a class="header-anchor" href="#_6-6-ваш-прогресс"><span>6.6 Ваш прогресс</span></a></h2><p>Наконец-то все необходимые компоненты Xray готовы! Мы подошли к самому интересному — установке и настройке самого Xray!</p><blockquote><p>⬛⬛⬛⬛⬛⬛⬜⬜ 75%</p></blockquote>`,13);function v(h,g){const p=s("I18nTip"),c=s("ExternalLinkIcon");return l(),o("div",null,[a(p),u,n("p",null,[e("Мы будем использовать инструмент для управления сертификатами "),n("a",m,[k,a(c)]),e(". Он простой, лёгкий, эффективный и умеет автоматически обновлять сертификаты.")]),b])}const E=i(d,[["render",v],["__file","ch06-certificates.html.vue"]]);export{E as default};