# TorgBox test task

Веб-страница с часами для двух часовых поясов. Структурой проекта
предусмотрена возможность увеличения количества
отображаемых компонентов часов до 24-х на странице

Взят готовый вариант стрелочных часов и переделан под условия задачи.<br>
Для работы со временем использовался стандартный объект Date, для асинхронных запросов использовал
RTK Query, для работы с данными часовых зон Redux. 
Для уведомления пользователя о загрузке данных взял стандартный loader (css, html)

Чтобы не использовать много лишних технологий решил ограничиться теми, что указаны в задании.<br>
Основной компонент расположен в grid сетке. Количество часов можно изменить быстро, поменяв длинну массива в App.tsx файле.

