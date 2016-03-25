angular.module('IonicExercise.controllers', [])

.controller('ImagesCtrl', function($scope, Images, $ionicLoading) {

  $scope.imageCollection = [];

  $scope.getImages = function(){
    $ionicLoading.show({
        content: 'Fetching Images...',
        showBackdrop: true
    });

    var imagesPromise= Images.getImages();

    imagesPromise.then(function(response){
      var allImages = response.data.data;
      $scope.imageCollection = allImages;
      $ionicLoading.hide();
    }).catch(function(){
      alert.log('Unable to obtaining images.');
    })
  }

  $scope.getImages();
})

.controller('GeoLocationCtrl', function($scope, LocationService, $ionicLoading) {
  $scope.myLocations = [];

  $scope.addCurrentLocation = function(){
    $ionicLoading.show({
        content: 'Getting current location...',
        showBackdrop: true
    });

    LocationService.refreshLocation()
    .then(function(locationsList){
      $scope.myLocations = locationsList;
      $ionicLoading.hide();
    })
  }

  $scope.addCurrentLocation();
  
});