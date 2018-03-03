angular.module("app").service("userService", function($state, $q, $http) {
	
	this.getQuote = function() {
		
			var quoteApi = {
			endpoint: 'https://quotesondesign.com/wp-json/posts',
			params: {
				'filter[orderby]': 'rand',
				'filter[posts_per_page]': 1,
				'timestamp': new Date().getTime()
        	}
    	};
         
    	return $http.get(quoteApi.endpoint, { params: quoteApi.params } );
	}
})