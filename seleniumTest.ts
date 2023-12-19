//const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
import { Builder, Browser, By, Key, until } from "selenium-webdriver";


/*(async function example() {
    let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    try {
      await driver.get('https://www.google.com/ncr');
      await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
      await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
      await driver.quit();
    }
})();*/

(async function pokémonApp () {
    let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    try {
      await driver.get('localhost:3000');
      await driver.findElement(By.id('password1')).sendKeys('123456789');

    } finally {
      //await driver.quit();
    }
  })();


