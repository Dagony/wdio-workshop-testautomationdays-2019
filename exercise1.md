# Exercise 1: Getting up & running

The goal of this exercise is to show you how to get up and running with WebdriverIO.
Just follow the steps at <https://webdriver.io/docs/gettingstarted.html>

NOTE: Make sure you install selenium-standalone instead of chromedriver. After you are done, add the following constant to the config file.

```javascript
const seleniumOptions = {
    version: '3.141.59', // version of Selenium server
    drivers: {
        chrome: {
            version: '75.0.3770.90', // version of ChromeDriver
        },
    },
};
```

And add/change the following properties in the existing config:

```javascript
exports.config = {
    seleniumInstallArgs: seleniumOptions,
    seleniumArgs: seleniumOptions,
    capabilities: [
        {
            maxInstances: 5,
            browserName: "chrome"
        }
    ]
};
```