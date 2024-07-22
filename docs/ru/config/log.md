# Настройка журнала

Настройка журнала управляет тем, как Xray выводит журналы.

Xray имеет два типа журналов: журнал доступа и журнал ошибок.  
Вы можете настроить способ вывода каждого типа журнала отдельно.

## LogObject

LogObject соответствует полю `log` в конфигурационном файле.

```json
{
  "log": {
    "access": "путь к файлу",
    "error": "путь к файлу",
    "loglevel": "warning",
    "dnsLog": false
  }
}
```

> `access`: string

Путь к файлу журнала доступа.  
Значение должно быть допустимым путем к файлу, например `"/var/log/Xray/access.log"` (Linux) или `"C:\\Temp\\Xray\\_access.log"` (Windows).  
Если этот параметр не указан или имеет пустое значение, журнал выводится в stdout.

- Специальное значение `none` отключает журнал доступа.

> `error`: string

Путь к файлу журнала ошибок.  
Значение должно быть допустимым путем к файлу, например `"/var/log/Xray/error.log"` (Linux) или `"C:\\Temp\\Xray\\_error.log"` (Windows).  
Если этот параметр не указан или имеет пустое значение, журнал выводится в stdout.

- Специальное значение `none` отключает журнал ошибок.

> `loglevel`: "debug" | "info" | "warning" | "error" | "none"

Уровень журнала ошибок, указывающий, какую информацию следует записывать в журнал ошибок.  
Значение по умолчанию - `"warning"`.

- `"debug"`: информация, используемая при отладке программы.  
    Включает всю информацию уровня `"info"`.
- `"info"`: информация о состоянии во время выполнения и т.д., не влияющая на нормальную работу.  
    Включает всю информацию уровня `"warning"`.
- `"warning"`: информация, выводимая при возникновении проблем, не влияющих на нормальную работу, но которые могут повлиять на работу пользователя.  
    Включает всю информацию уровня `"error"`.
- `"error"`: Xray столкнулся с проблемой, которая не позволяет ему работать нормально, и ее необходимо немедленно решить.
- `"none"`: не записывать ничего.

> `dnsLog`: bool

Включить ведение журнала DNS-запросов, например: `DOH//doh.server got answer: domain.com -> [ip1, ip2] 2.333ms`.