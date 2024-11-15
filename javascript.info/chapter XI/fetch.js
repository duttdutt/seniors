/**
 * @section fetch
 * 
 * Отправляет сетевые запросы на сервер.
 * AJAX - Asynchronous JavaScript And XML.
 * 
 * @param {string} url – URL для отправки запроса.
 * @param {object} [options] – дополнительные параметры: метод, заголовки и тд.
 * @returns {Promise}
 * 
 * Без options - простой GET-запрос.
 * 
 * 2 этапа получения ответа:
 * * Response
 * Можно проверить статус HTTP-запроса и понять успешно или неуспешно
 * выполнился запрос:
 * response.status - код статуса.
 * response.ok - true, если код статуса 200-399.
 * Можно посмотреть заголовки, но без тел.
 * * Methods
 * response.text – в строку,
 * response.json – в JSON,
 * response.formData – в объект FormData
*/
fetch(url, [options])