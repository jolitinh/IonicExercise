angular.module('IonicExercise.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ImagesCtrl', function($scope, Images) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Images.all();
  $scope.remove = function(chat) {
    Images.remove(chat);
  };

  $scope.imageCollection = [];

    $scope.getImages = function(){
    var imagesPromise= Images.getImages();
    
      imagesPromise.then(function(response){
        var allImages = response.data.data;
        $scope.imageCollection = allImages;
      }).catch(function(){
        alert.log('Unable to obtaining images.');
      })
    }

    $scope.getImages();

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Images) {
  $scope.chat = Images.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
