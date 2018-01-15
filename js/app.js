'use strict';

function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives','ajoslin.mobile-navigate','ngMobile'])
    .config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/homeView.html', controller: 'HomeCtrl'});
        $routeProvider.when('/view1', {templateUrl: 'partials/sorting.html'});
        $routeProvider.when('/view2', {templateUrl: 'partials/dictsort.html'});
        $routeProvider.when('/view3', {templateUrl: 'partials/shallow_vs_deep_copy.html'});
        $routeProvider.when('/view4', {templateUrl: 'partials/enumerate.html'});
        $routeProvider.when('/view5', {templateUrl: 'partials/lru_cache.html'});
        $routeProvider.when('/view6', {templateUrl: 'partials/counter.html'});
        $routeProvider.when('/view7', {templateUrl: 'partials/defaultdict.html'});
        $routeProvider.when('/view8', {templateUrl: 'partials/looping.html'});
		$routeProvider.when('/view9',{templateUrl:'partials/named_tuple.html'});
       $routeProvider.when('/view10',{templateUrl:'partials/ordereddict.html'});
	   $routeProvider.when("/view11",{templateUrl:'partials/break-continue-else.html'});
	   $routeProvider.when("/view12",{templateUrl:'partials/exceptions.html'});
	   $routeProvider.when("/view13",{templateUrl:'partials/generator.html'});
	   $routeProvider.when("/view14",{templateUrl:'partials/function.html'});
	   $routeProvider.when("/view15",{templateUrl:'partials/oop3.html'});
	   $routeProvider.when("/view16",{templateUrl:'partials/conditionals.html'});
	   $routeProvider.when("/view17",{templateUrl:'partials/whileloop.html'});
	   $routeProvider.when("/view18",{templateUrl:'partials/whitespace.html'});
	   $routeProvider.when("/view19",{templateUrl:'partials/3-digits.html'});
	  $routeProvider.when("/view20",{templateUrl:'partials/named-params.html'});
	  $routeProvider.when("/view21",{templateUrl:'partials/return-values.html'});
	  $routeProvider.when("/view22",{templateUrl:'partials/variable-args.html'});
	  $routeProvider.when("/view23",{templateUrl:'partials/functions-defining.html'});
		$routeProvider.when("/view24",{templateUrl:'partials/exception-raise.html'});
	 $routeProvider.when("/view25",{templateUrl:'partials/decorators.html'});
		$routeProvider.when("/view26",{templateUrl:'partials/inheritance.html'});
		$routeProvider.when("/view27",{templateUrl:'partials/polymorphism.html'});
		$routeProvider.when("/view28",{templateUrl:'partials/methods.html'});
		$routeProvider.when("/view29",{templateUrl:'partials/keyword-args-in-classes.html'});
		$routeProvider.when("/view30",{templateUrl:'partials/generator-objects.html'});
		$routeProvider.when("/view33",{templateUrl:'partials/object-data.html'});
		$routeProvider.when("/view34",{templateUrl:'partials/binary-file.html'});
		$routeProvider.when("/view35",{templateUrl:'partials/modules.html'});
		$routeProvider.when("/view36",{templateUrl:'partials/buffered-mode.html'});
	    $routeProvider.when("/view37",{templateUrl:'partials/assignment.html'});
		$routeProvider.when("/view38",{templateUrl:'partials/objects.html'});
		$routeProvider.when("/view39",{templateUrl:'partials/conditional.html'});
		$routeProvider.when("/view40",{templateUrl:'partials/file-io.html'});
		$routeProvider.when("/view41",{templateUrl:'partials/oop2.html'});
		$routeProvider.when("/view42",{templateUrl:'partials/if-then-elif-else.html'});
		$routeProvider.when("/view43",{templateUrl:'partials/simpleoop.html'});
		$routeProvider.when("/view44",{templateUrl:'partials/functions.html'});
		$routeProvider.otherwise({redirectTo: '/'});
  }]);
  
  
  
myApp.directive('ngPrism', [function() {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            element.ready(function() {
                Prism.highlightElement(element[0]);
            });
        }
    }
}]);

