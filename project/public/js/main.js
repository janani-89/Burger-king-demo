var app = angular.module('myApp', ["ngRoute"]);
app.controller('myCtrl', function ($scope) {
	
    
});
app.config(function ($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'templates/home.html'
			
		}).
		when('/menu', {
			templateUrl: 'templates/menu.html',
			controller: 'menuController'
		}).
		when('/login', {
			templateUrl: 'templates/login.html',
			controller: 'loginController'
		}).
		when('/register', {
			templateUrl: 'templates/register.html'
        }).
    when('/addon', {
      templateUrl: 'templates/addon.html',
      controller: 'addonController'
    }).
		otherwise({
            redirectTo: '/'
        });


});
app.controller('menuController', function ($scope, $http) {
    $http.get('list.json').then(function (data) {
        $scope.menuItems = data.data.menuItem;
    });
    $http.get('burgerlist.json').then(function (data) {
      $scope.burgers = data.data.burgers;
    });

});

app.controller('addonController', function ($scope, $http) {
    $http.get('list.json').then(function (data) {
        $scope.menuItems = data.data.menuItem;
    });
    $http.get('burgeraddon.json').then(function (data) {
      $scope.addons = data.data.addons;
      console.log(data.data.addons[0].extras);
    });

});

app.controller('loginController', function ($scope, LoginService) {
	
    $scope.signIn = function() {
      if(LoginService.login($scope.email, $scope.password)) {
        $scope.error = '';
        $scope.username = email;
        $scope.password = password;
      } else {
        $scope.error = "Incorrect username/password !";
      }   
    };
    
    

});

app.factory('LoginService', function() {
    var admin = 'admin@gmail.com';
    var pass = 'pass';
    var isAuthenticated = false;
    
    return {
      login : function(username, password) {
        isAuthenticated = username === admin && password === pass;
        return isAuthenticated;
      },
      isAuthenticated : function() {
        return isAuthenticated;
      }
    };
    
});


