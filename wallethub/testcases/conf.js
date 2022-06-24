require("babel-register")({
	presets: ["es2015"]
});

exports.config = {
  framework: 'jasmine2',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //directConnect: true,
  SELENIUM_PROMISE_MANAGER: true,
  specs: ['runner.js'],
  capabilities: {
    'browserName': 'chrome',
	  'chromeOptions': {
        'args': ['show-fps-counter=true']
        //'args': ['--headless', '--window-size=1920x1280']
	  }
  }
};