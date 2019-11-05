const puppeteer = require('puppeteer');

const showBrowser = true;


const testURL = 'http://localhost:4200';

let browser = null;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: !showBrowser,
    defaultViewport: null,
    args: ['--window-size=1920,1080'],
  });
});

afterAll(() => {
  // browser.close();
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

test('basic test', async () => {
  const page = await browser.newPage();

  await page.goto(`${testURL}`);

  //wait for input search selector and type in clementine
  await page.waitForSelector('input');
  await sleep(2000);
  await page.type('input', 'Clementine');
  await sleep(4000);

  //delete search
  const inputElement = await page.$('input');
  inputElement.click({clickCount: 3});
  await sleep(1000);
  await page.keyboard.press( 'Backspace' );
  await sleep(1000);

  //click on add user and fill in details
  await page.click('.btn-success');

  await sleep(1000);
  const name = await page.$('#name');
  name.type('Joe Bloggs');

  await sleep(1000);
  const userName = await page.$('#username');
  userName.type('joebloggs');

  await sleep(1000);
  const email = await page.$('#email');
  email.type('joe@joebloggs.com');
  
  await sleep(1000);
  const phone = await page.$('#phone');
  phone.type('0712345678');

  await sleep(1000);
  const street = await page.$('#street');
  street.type('123 High Street');

  await sleep(1000);
  const suite = await page.$('#suite');
  suite.type('Suite 7');

  await sleep(1000);
  const city = await page.$('#city');
  city.type('London');

  await sleep(1000);
  const zipcode = await page.$('#zipcode');
  zipcode.type('WC1V 2MP');
  
  await sleep(1000);
  const website = await page.$('#website');
  website.type('https://joebloggs.com');

  await sleep(1000);
  const company = await page.$('#company');
  company.type('Joe Bloggs Ltd');

  await sleep(1000);
  await page.click('.btn-primary');

  //search for joe bloggs
  await page.waitForSelector('input');
  await sleep(2000);
  await page.type('input', 'Joe Bloggs');

}, 30000);
