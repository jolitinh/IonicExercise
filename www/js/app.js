angular.module('starter', ['ionic', 'ngCordova', 'IonicExercise.controllers', 'IonicExercise.services', 'IonicExercise.directives'])

.run(function($ionicPlatform, $cordovaDevice) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

     //alert('Platform : ' + $cordovaDevice.getPlatform() + '\nModel : ' + $cordovaDevice.getModel());
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

.state('tab.images', {
      url: '/images',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-images.html',
          controller: 'ImagesCtrl'
        }
      }
    })

  .state('tab.geolocation', {
    url: '/geolocation',
    views: {
      'tab-geolocation': {
        templateUrl: 'templates/tab-geolocation.html',
        controller: 'GeoLocationCtrl'
      }
    }
  });

  
  $urlRouterProvider.otherwise('/tab/images');

});
