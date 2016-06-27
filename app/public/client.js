var client = angular.module('client', ['ngRoute']);

client.service('idStore', function () {
    var _id = '';

    return {
        get_id: function () {
            return _id;
        },
        set_id: function(value) {
            _id = value;
        }
    };
});

client.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: './home/home.html',
                controller: 'home'
            })

        .otherwise({redirectTo: '/'});

    $locationProvider.html5Mode(true);
});

client.controller('home', ['$scope', '$rootScope', 'idStore', function($scope, $rootScope, idStore) {
    //set the page title
    $rootScope.title = 'Password Vault | Home';

    //set password parameters, at least 8 characters, at least one letter, only a-z, A-Z and 0-9
    $scope.regex = '^.*(?=.{8,})(?=.*[a-zA-Z])[a-zA-Z0-9]+$';

    //submit button function
    $scope.submit = function() {
        //console.log('submit pressed');

        //TODO: need to unit-test the hash functions

        var usernameHash = CryptoJS.SHA256($scope.usernameInput);
        console.log(usernameHash.toString());
        console.log(usernameHash.toString().length);

        var passwordHash = CryptoJS.SHA256($scope.passwordInput);
        console.log(passwordHash.toString());
        console.log(passwordHash.toString().length);

        //test code
        var emailHash = CryptoJS.SHA256('jonwadeuk@gmail.com');
        console.log(emailHash.toString());
        console.log(emailHash.toString().length);

        //TODO: now need to call /login endpoint

        //this return is for unit testing
        return true;
    };


}]);