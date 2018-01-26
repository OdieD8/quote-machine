angular.module("app", ["ui.router"])
.config(function($urlRouterProvider, $stateProvider) {
	
	$stateProvider
	
		.state("home", {
			url: "/home",
			templateUrl: "features/home/home.template.html",
			controller: "homeController"
		})
		
		$urlRouterProvider.otherwise("/home");
});