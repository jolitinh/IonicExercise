angular.module('IonicExercise.services', [])

.factory('Images', function($http) {

  var getRandomPage = function(){
      return Math.round(Math.random()*50) + 1;
    }

    var clientID = '7f2712b8e49a4c0',
      imgurURL = 'https://api.imgur.com/3/gallery/random/random/';
  
  return {
    getImages: function(){
      return $http({
          method: 'GET',
          headers: {
            'Authorization': 'Client-ID ' + clientID
          },
          url: imgurURL + getRandomPage()
        });
    }
  };
});
