angular.module("app").controller("homeController", function($scope, $state, userService) {
	
	var count = 0;
	$scope.newQuote = function() {
		
		userService.getQuote().then(function(data) {
			
			$scope.quote = data.data[0].content;
			$scope.author = data.data[0].title;
		});
	}
	
	if (count === 0) {
		$scope.newQuote();
		count++;
	}
})