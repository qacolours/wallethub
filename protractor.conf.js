require("babel-register")({
	presets: ["es2015"]
});

exports.config = {
  framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //directConnect: true,
  SELENIUM_PROMISE_MANAGER: false,
  specs: ['runner.js'],
  capabilities: {
    'browserName': 'chrome',
	  'chromeOptions': {
        'args': ['show-fps-counter=true'],
        'w3c': false
        //'args': ['--headless', '--window-size=1920x1280']
	  }
  }
};