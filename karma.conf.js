// Karma configuration
// Generated on Sat Oct 29 2016 17:39:48 GMT+0300 (Финляндия (лето))

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'lib/angular.min.js',
      
      'lib/angular-ui-router.min.js',
      'lib/angular-mocks.js',
      'src/App/common/App.module.js',
      'src/App/components/login/App.module.login.component.js',
      'src/App/components/login/App.module.login.component.spec.js',
      'src/App/components/wrapper/App.module.wrapper.component.js',
      'src/App/components/wrapper/App.module.wrapper.component.spec.js',
      'src/MailBox/common/MailBox.module.js',
      'src/UserData/common/UserData.module.js',
      'src/MailBox/data/MailBox.mailBox.service.js',
      'src/MailBox/data/MailBox.mailBox.service.spec.js',
      'src/App/data/App.module.access.service.js',
      'src/App/data/App.module.access.service.spec.js',
      'src/MailBox/components/maillist/MailBox.mailList.component.js',
      'src/MailBox/components/maillist/MailBox.mailList.component.spec.js',
      'src/MailBox/components/editmailitem/MailBox.editMailItem.component.js',
      'src/MailBox/components/editmailitem/MailBox.editMailItem.component.spec.js',
      'src/UserData/data/UserData.UserCard.service.js',
      'src/UserData/data/UserData.UserCard.service.spec.js',
      'src/UserData/components/editprofile/UserData.editprofile.component.js',
      'src/UserData/components/editprofile/UserData.editprofile.component.spec.js',
      'src/UserData/components/newuserinput/UserData.newUserInput.component.js',
      'src/UserData/components/newuserinput/UserData.newUserInput.component.spec.js',
      'src/UserData/components/newuserform/UserData.newUserForm.component.js',
      'src/UserData/components/newuserform/UserData.newUserForm.component.spec.js',
      'src/UserData/components/newuserform/newUserForm.html',
      'src/UserData/components/usercardfull/UserData.userCardFull.component.js',
      'src/UserData/components/usercardfull/UserData.userCardFull.component.spec.js',
      'src/UserData/components/userlistpreview/UserData.userListPreview.component.js',
      'src/UserData/components/userlistpreview/UserData.userListPreview.component.spec.js',
      'src/Routing/Routing.module.js',
      'src/Routing/Routing.module.App.config.js',
      'src/Routing/Routing.module.App.config.spec.js',
      'src/Routing/Routing.module.MailBox.config.js',
      'src/Routing/Routing.module.MailBox.config.spec.js',
      'src/Routing/Routing.module.UserData.config.js',
      'src/Routing/Routing.module.UserData.config.spec.js'


    ],


    // list of files to exclude
    exclude: [
    ],
    plugins: [
    'karma-jasmine',
    'karma-chrome-launcher',
    'karma-ng-html2js-preprocessor'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/UserData/components/newuserinput/newUserForm.html': ["ng-html2js"]
    },

    ngHtml2JsPreprocessor: {
      // If your build process changes the path to your templates,
      // use stripPrefix and prependPrefix to adjust it.
      // stripPrefix: "source/path/to/templates/.*/",
      // prependPrefix: "web/path/to/templates/",

      // the name of the Angular module to create
      moduleName: "my.templates"
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
