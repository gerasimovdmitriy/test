# Задание(группа 02361-ЗБ)
Написать API создания,изменения,получения,удаления для заказов

# Описание проекта
 Данный проект написан на [node.js](https://nodejs.org/ru), 
c приминением фреймворка [express.js](https://expressjs.com/ru/) и 
[sequelize](https://sequelize.org/).

Проект представляет из себя простой пример API для системы 
формирования заказов.

## Структура проекта

### Корень проекта
В корне проекта находиться фаил _apk.js_
где подключаются моршруты и необходимые модули нашего приложения
 и необходимые модули. Так же здесь находится файл _package.json_ 
 где описываются зависимости нашего проекта.
 
### Папка bin
В этой папке находиться файл _www.js_ в котором прописаны параметры
 запуска нашего приложени и при помощи которого
 мы запускаем наше приложение

### Папка config
В этой папке находится файл _config.json_. В нем прописана конфигурация для 
приложения. В нашем случае прописаны параметры подключения к бд

### Папка controllers
В этой папке находятся файлы обрабатывающие данные прищедщие с запросом.

### Папка db
В этой папке находится файл в котром мы подключаемся к БД и в котором мы 
инициализируем модели

### Папка migrations
В этой папке находятся файлы миграции из которых создается структура БД

### Папка models
В этой папке находятся файлы с описанием моделей Sequelize

### Папка routes
В этой папке находяться файлы описывающие маршрутизацию нашего приложения

### Папка seeders
В этой папке находятся файлы с данными для заполнения БД начальными записями

## Описание моделей

#### User
Модель пользователя

Описание полей

| Название | Тип     | Описание                    |
|----------|---------|-----------------------------|
| id       | integer | id пользователя             |
| login    | string  | Логин пользователя          |
| password | string  | Пароль пользователя         |
| email    | string  | почтовый адрес пользователя |
| role_id  | integer | id роли пользователя        |

#### Role

Модель роли пользователя

Описание полей

| Название | Тип     | Описание                    |
|----------|---------|-----------------------------|
| id       | integer | id роли            |
| name    | string  | Имя роли          |

#### Producer
Модель поставщика

Описание полей

| Название | Тип     | Описание                    |
|----------|---------|-----------------------------|
| id       | integer | id поставщика            |
| name    | string  | Имя поставщика          |

#### Product
Модель товара

Описание полей

| Название | Тип     | Описание                    |
|----------|---------|-----------------------------|
| id       | integer | id товара        |
| name    | string  | Имя товара      |
| description  | string  | Описание товара     |
| price      | integer | цена товара      |
| producer_id       | integer | id поставщика товара      |

#### Order
Модель Заказа

Описание полей

| Название | Тип     | Описание                    |
|----------|---------|-----------------------------|
| id       | integer | id заказа        |
| number   | string  | Имя заказа      |
| order_date  | date  | дата заказа     |
| user_id       | integer | id создателя заказа      |

#### OrderPosition
Модель позиции заказа

Описание полей

| Название | Тип     | Описание                    |
|----------|---------|-----------------------------|
| id       | integer | id заказа        |
| count       | integer | количество      |
| order_id       | integer | id заказа      |
| product_id       | integer | id товара      |

## Начало работы
Перед началом работы нужно установить необходимые пакеты. Сделать это можно командой

**_npm install_**

выполнив ее в командной строке в корневой папке проекта.

После этого выполните следующую команду(так же в корневой папке проекта)

**_npx sequelize-cli db:migrate_**

После этого у васв корневом каталоге проекта должен появиться файл _database.sqlite3_
В котором находиться наша БД. Поскольку это SQLite то открывать ее соответсвующими 
пограммами

Далее вы выполняете команду:
**_npx sequelize-cli db:seed:all_**
После чего в нашем файле БД появятся записи.

### Запуск приложения
Приложение запускается следующей командой

**_npm run start_**

### Работа с API

После того как вы запустите приложение, то вы можете делать http 
запросы к нашему приложнию.

Запросы вы можете делать чрез любой удобный для вас способ. Например [postman](https://www.postman.com/downloads/)

Расмотрим на примере получения списка всех пользователей при помощи GET запроса к http://localhost:3000/users

Сама обработка запроса происходит в файле _routes/users.js_ откуда вызывается метод 
create из файла _controllers/userController.js_. (для каждого запроса будет 
вызываться соответсвующий метод из  соостветствующего контроллера). Сам файл _routes/users.js_
подключается в файле _app.js_

Пример кода:

```javascript
const usersRouter = require('./routes/users');
...
app.use('/users', usersRouter);
```
___
Выполнив этот GET запроса к http://localhost:3000/users в ответ мы получим
```json
[
    {
        "id": 1,
        "login": "test",
        "password": "123",
        "email": "test@test.ru",
        "role_id": 1,
        "createdAt": "2020-05-15T08:33:18.229Z",
        "updatedAt": "2020-05-15T08:33:18.229Z",
        "Role": {
            "id": 1,
            "name": "buyer",
            "createdAt": "2020-05-15T08:33:18.013Z",
            "updatedAt": "2020-05-15T08:33:18.013Z"
        }
    },
    {
        "id": 2,
        "login": "admin",
        "password": "123",
        "email": "admin@test.ru",
        "role_id": 2,
        "createdAt": "2020-05-15T08:33:18.229Z",
        "updatedAt": "2020-05-15T08:33:18.229Z",
        "Role": {
            "id": 2,
            "name": "admin",
            "createdAt": "2020-05-15T08:33:18.013Z",
            "updatedAt": "2020-05-15T08:33:18.013Z"
        }
    }
]
```
___
Давайте теперь попробуем добавить нового пользователя. Для этого отправим Post запрос на адрес
http://localhost:3000/users/ следующий json объект:

```json
{
   "login": "test4",
   "email": "test4",
   "password": "test4",
   "role_id": "1"
}
```
в ответ к нам придет следующий объект:
```json
{
    "id": 6,
    "login": "test4",
    "email": "test4",
    "password": "test4",
    "role_id": "1",
    "updatedAt": "2020-05-17T07:31:33.203Z",
    "createdAt": "2020-05-17T07:31:33.203Z"
}
```

Так же созданого нами пользователя мы можем увидеть 
в объекте полученном при GET запросe к http://localhost:3000/users

Так же мы можем получить информацию об одном пользователе отправив GET запрос http://localhost:3000/users/3 
(где 3 это ид объекта который мы хотим получить). В ответ мы получим следующий объект
```json
{
    "id": 3,
    "login": "test4",
    "password": "test4",
    "email": "test4",
    "role_id": 1,
    "createdAt": "2020-05-17T07:26:27.590Z",
    "updatedAt": "2020-05-17T09:59:21.587Z",
    "Role": {
        "id": 1,
        "name": "buyer",
        "createdAt": "2020-05-15T08:33:18.013Z",
        "updatedAt": "2020-05-15T08:33:18.013Z"
    }
}
```


Изменить созданный нами объект мы можем PUT запросом на адрес http://localhost:3000/users/3 (где 3 это ид объекта который мы хотим изменить) следующий запрос
 

```json
{
    "login": "test",
    "email": "test",
    "password": "test"
}
```

В ответ мы получим следующий объект
```json
{
    "id": 3,
    "login": "test",
    "password": "test",
    "email": "test",
    "role_id": 1,
    "createdAt": "2020-05-17T07:26:27.590Z",
    "updatedAt": "2020-05-17T09:59:21.587Z",
    "Role": {
        "id": 1,
        "name": "buyer",
        "createdAt": "2020-05-15T08:33:18.013Z",
        "updatedAt": "2020-05-15T08:33:18.013Z"
    }
}
```

Для того что бы удалить созданный нами объект 
Нужно отправить DELETE запрос на адрес http://localhost:3000/users/3 (где 3 это ид объекта который мы хотим удалить).

В ответ придет объект следующего вида
```json
{
    "status": "deleted"
}
```
## Описание задания
Нужно написать апи для создания, получения, изменения, удаления заказа. Сделать это можно по анологии с примером описанным выше. 

Объект который нужно отрправить для создания/изменения заказа должен выглядеть следующим образом

```json
{
        "number": "123-df",
        "order_date": "2020-04-17",
        "user_id": 1
}
```

## Как сдавать проект

Нужно сделать форк этого репозитория. Внести необходимые изменения, а после отправить ссылку на свой репозиторий на email geras.dimas@gmail.com
