exports.androidCaps = {
  // platformName: 'Android',
  // 'appium:deviceName': 'nightwatch-android-11',
  // 'appium:automationName': 'UiAutomator2',
  // 'appium:app': '/path/to/app.apk'

  
  platformName: 'Android',

  'appium:automationName': 'UiAutomator2',

  // DISPOSITIVO REAL
  'appium:deviceName': 'Galaxy S23',
  'appium:udid': 'RFCW221YSLF',

  // APP
  'appium:app': 'C:/Users/ilich/Downloads/Overland/Automation/overland-appium-bdd/app.apk',

  // PERFORMANCE / ESTABILIDAD
  'appium:noReset': true,
  'appium:newCommandTimeout': 300,
  'appium:appWaitActivity': '*'
}