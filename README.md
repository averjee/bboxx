# Installation instructions

1) clone project locally: `git clone https://github.com/averjee/bboxx.git`
2) inside cloned directory run: `npm install`
3) to start project run: `ng serve -o`

# e2e Jest Test

inside cloned directory run: `npm run test __tests__/e2e.js`

Note: if the test fails the first time you run it then this is because the chromium test browser may have taken too long to load and therefore you will need to run the above command a second time whilst keeping the first chromium browser open.
