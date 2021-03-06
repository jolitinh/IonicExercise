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
})
.factory('LocationService', function( $cordovaGeolocation, $ionicLoading, $timeout) {
        var latestLocations= [];
        var posOptions = {
            timeout: 10000,
            enableHighAccuracy: false
        };

        return {
          refreshLocation: function(){
            return $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function(position) {

                var currentTimeStamp = new Date();

                latestLocations.push({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  accuracy: position.coords.accuracy,
                  timeRecorded: currentTimeStamp.getHours() + ':' + currentTimeStamp.getMinutes() + ':' + currentTimeStamp.getSeconds() 
                });

                return latestLocations;
            });
          },
          getLatestLocations: function(){
            return latestLocations;
          }
        }
            
});
