import createRequests from '../createRequests.js'
/**
 * Класс Entity - базовый для взаимодействия с сервером.
 * Имеет свойство URL, равно пустой строке.
 * Имеет свойство HOST, равно 'http://bhj-diploma.u-w.me'.
 * */
class Entity {

    /**
     * Запрашивает с сервера список данных.
     * Это могут быть счета или доходы/расходы
     * (в зависимости от того, что наследуется от Entity)
     * */
    static list(data, callback = f => f) {
        crateRequest({
            method: "GET",
            url: Entity.HOST + Entity.URL,
            data: data,
            responseType: "json"
        })
    }

    /**
     * Создаёт счёт или доход/расход с помощью запроса
     * на сервер. (в зависимости от того,
     * что наследуется от Entity)
     * */
    static create(data, callback = f => f) {
        const modData = data;
        modData._method = "PUT"
        createRequest({
            method: "POST",
            url: Entity.HOST + Entity.URL,
            responseType: "json",
            data: modData
        })
    }

    /**
     * Получает информацию о счёте или доходе/расходе
     * (в зависимости от того, что наследуется от Entity)
     * */
    static get(id = '', data, callback = f => f) {
        crateRequest({
            url: Entity.HOST + Entity.URL + '/' + id,
            data: data,
            method: "GET",
            responseType: "json"
        })
    }

    /**
     * Обновляет информацию о счёте или доходе/расходе
     * (в зависимости от того, что наследуется от Entity)
     * */
    static update(id = '', data, callback = f => f) {

    }

    /**
     * Удаляет информацию о счёте или доходе/расходе
     * (в зависимости от того, что наследуется от Entity)
     * */
    static remove(id = '', data, callback = f => f) {
        const modData = data;
        data._method = "DELETE";
        crateRequest({
            url: Entity.HOST + Entity.URL + '/' + id,
            data: modData,
            method: "POST",
            responseType: "json"
        })
    }
}
