# cone-center-test

## Тестовое задание для Cone Center

1. Custom Date Input

2. Задание<br>
<img alt="input" src="https://www.cone.ee/788i291x32.gif?key=1c58037ca0084bcbdc147343010f16f5"/><br>
Требуется реализовать инпут для ввода даты со следующим функционалом:

- По нажатию на клавиатуре стрелок вверх (↑) и вниз (↓) в зависимости от положения курсора увеличивается или уменьшается на 1 часть даты по циклу и выделяется изменяемая часть инпута. Например, если поставить курсор на месяц и нажать вверх то дата переключится на следующий месяц, при увеличении декабря дата переключается на январь, год при этом не изменяется.
- По нажатию на клавиатуре комбинаций ctrl + ↑ или ctrl + ↓ происходит то же самое, но не по циклу. Например, при увеличении дня в декабре номер дня увеличивается по одному до 31 числа, после чего 31/December/2021 12:13:00 + 1 день -> 01/January/2022 12:13:00.
- В инпут также можно вводить текст, разбирать его не нужно.

3. Описание
- <code>yarn install</code> - установка зависимостей;
- <code>yarn start</code> - запуск проекта в dev-режиме;
- <code>yarn build</code> - сборка проекта

3. Планы по улучшению
- Исправить выделение с помощью мыши;

4. Применяемые технологии
  - React
  - Typescript
  - React hooks

6. [Ссылка на gh-pages.](https://antoshkow.github.io/cone-center-test/ "Ссылка на деплой.")
