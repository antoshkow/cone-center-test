# cone-center-test

## Test task for Cone Center.

1. ### Custom Date Input

2. ### Task<br>
<img alt="input" rel="noreferrer" target="_blank" src="https://www.cone.ee/788i291x32.gif?key=1c58037ca0084bcbdc147343010f16f5"/><br>
It is required to implement an input for entering a date with the following functionality:

- By pressing the up (↑) and down (↓) arrows on the keyboard, depending on the cursor position, it increases or decreases by 1 part of the date in a cycle and the variable part of the input is highlighted. For example, if you put the cursor on a month and press up, then the date will switch to the next month, if December increases, the date switches to January, while the year does not change.
- By pressing the ctrl + ↑ or ctrl + ↓ combinations on the keyboard, the same thing happens, but not in a cycle. For example, if you increase the day in December, the day number increases one by one until the 31st, after which 31/December/2021 12:13:00 + 1 day -> 01/January/2022 12:13:00.
- You can also enter text into the input, you do not need to parse it.

3. ### Scripts
- <code>yarn install</code> - install dependencies;
- <code>yarn start</code> - start project in dev-mode;
- <code>yarn build</code> - build project.

3. ### Improvement plans
- Fix selection with mouse.

4. ### Stack
  - React;
  - TypeScript;
  - React hooks;

6. [gh-pages link.](https://antoshkow.github.io/cone-center-test/ "gh-pages link.")
