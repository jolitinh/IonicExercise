angular.module('IonicExercise.directives', [])

.directive('locationList', function(){
	return {
		type: 'E',
		scope: {
			myLocations: '=',
			refreshData: '&'
		},
		replace: true,
		template: '<div>\
			<button class="button button-block button-positive" ng-click="refreshData()">\
			  Add Current Location\
			</button>\
			<div class="card" ng-repeat="location in myLocations">\
				<div class="item item-text-wrap">\
					<strong>Time Recorded</strong>: {{location.timeRecorded}}<br>\
					Latitude: {{location.latitude}}<br>\
					Longitude: {{location.longitude}}<br>\
					Accuracy: {{location.accuracy}}<br>\
				</div>\
			</div>\
		</div>'
	}
})