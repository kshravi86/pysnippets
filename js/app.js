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
        $routeProvider.when('/view1', {templateUrl: 'partials/sample_html_scrape.html'});
        $routeProvider.when('/view2', {templateUrl: 'partials/amazon_sample.html'});
        $routeProvider.when('/view3', {templateUrl: 'partials/ec2.html'});
        $routeProvider.when('/view4', {templateUrl: 'partials/csv_to_db.html'});
        $routeProvider.when('/view5', {templateUrl: 'partials/csv_processing.html'});
        $routeProvider.when('/view6', {templateUrl: 'partials/linkedlist.html'});
        $routeProvider.when('/view7', {templateUrl: 'partials/strings_permutation.html'});
        $routeProvider.when('/view8', {templateUrl: 'partials/beautifulsoup_example.html'});
		$routeProvider.when('/view9',{templateUrl:'partials/mapreduce_example.html'});
       $routeProvider.when('/view10',{templateUrl:'partials/strings_unique_chars.html'});
	   $routeProvider.when("/view11",{templateUrl:'partials/sample_logging.html'});
	   $routeProvider.when("/view12",{templateUrl:'partials/json_sample.html'});
	   $routeProvider.when("/view13",{templateUrl:'partials/bubble_sort.html'});
	   $routeProvider.when("/view14",{templateUrl:'partials/binary_search.html'});
	   $routeProvider.when("/view15",{templateUrl:'partials/brute_knapsack.html'});
	   $routeProvider.when("/view16",{templateUrl:'partials/insertion_sort.html'});
	   $routeProvider.when("/view17",{templateUrl:'partials/selection_sort.html'});
	   $routeProvider.when("/view18",{templateUrl:'partials/merge_sort.html'});
	   $routeProvider.when("/view19",{templateUrl:'partials/quick_sort.html'});
	  $routeProvider.when("/view20",{templateUrl:'partials/knapsack.html'});
	  $routeProvider.when("/view21",{templateUrl:'partials/joblib_example.html'});
	  $routeProvider.when("/view22",{templateUrl:'partials/simple_plot.html'});
	  $routeProvider.when("/view23",{templateUrl:'partials/numpy_example.html'});
		$routeProvider.when("/view24",{templateUrl:'partials/array_matrix.html'});
	 $routeProvider.when("/view25",{templateUrl:'partials/pickle_sample.html'});
		$routeProvider.when("/view26",{templateUrl:'partials/sample_pycrypto.html'});
		$routeProvider.when("/view27",{templateUrl:'partials/stockprices.html'});
		$routeProvider.when("/view28",{templateUrl:'partials/sample_mock.html'});
		$routeProvider.when("/view29",{templateUrl:'partials/pandas_plots.html'});
		$routeProvider.when("/view30",{templateUrl:'partials/python_data_analysis_reshape.html'});
		$routeProvider.when("/view33",{templateUrl:'partials/nltk_learn.html'});
		$routeProvider.when("/view34",{templateUrl:'partials/categoricals.html'});
		$routeProvider.when("/view35",{templateUrl:'partials/python_data_analysis_merge.html'});
		$routeProvider.when("/view36",{templateUrl:'partials/pandas_trellis_plot.html'});
	    $routeProvider.when("/view37",{templateUrl:'partials/helloworld.html'});
		$routeProvider.when("/view38",{templateUrl:'partials/hellopyramid.html'});
		$routeProvider.when("/view39",{templateUrl:'partials/scipy_example.html'});
		$routeProvider.when("/view40",{templateUrl:'partials/regex_sample.html'});
		$routeProvider.when("/view41",{templateUrl:'partials/sqlexpressionlanguage.html'});
		$routeProvider.when("/view42",{templateUrl:'partials/sqlorm.html'});
		$routeProvider.when("/view43",{templateUrl:'partials/pyprind_example.html'});
		$routeProvider.when("/view44",{templateUrl:'partials/hashing_sample.html'});
		$routeProvider.when("/view45",{templateUrl:'partials/example_requests.html'});
		$routeProvider.when("/view46",{templateUrl:'partials/seaborn_example.html'});
		$routeProvider.when("/view47",{templateUrl:'partials/serializers.html'});
		$routeProvider.when("/view48",{templateUrl:'partials/xkcd.html'});
		
		$routeProvider.when("/view49",{templateUrl:'partials/sample_Tkinter.html'});
		$routeProvider.when("/view50",{templateUrl:'partials/starcluster_sample.html'});
		$routeProvider.when("/view51",{templateUrl:'partials/docopt_example.html'});
		$routeProvider.when("/view52",{templateUrl:'partials/pandas_timestamp_joins.html'});
		$routeProvider.when("/view53",{templateUrl:'partials/timeseries_example.html'});
		$routeProvider.when("/view54",{templateUrl:'partials/melt_example.html'});
		$routeProvider.when("/view55",{templateUrl:'partials/categoricals_grades.html'});
		$routeProvider.when("/view56",{templateUrl:'partials/lesson1pandas.html'});
		$routeProvider.when("/view57",{templateUrl:'partials/tasks.html'});
		
		$routeProvider.when("/view58",{templateUrl:'partials/simple_search.html'});
		$routeProvider.when("/view59",{templateUrl:'partials/hdf5_pytables_example.html'});
		$routeProvider.when("/view60",{templateUrl:'partials/sample_fabric.html'});
		$routeProvider.when("/view61",{templateUrl:'partials/fabfile.html'});
		$routeProvider.when("/view62",{templateUrl:'partials/vw_tutorial.html'});
		$routeProvider.when("/view63",{templateUrl:'partials/pdf_example.html'});
		$routeProvider.when("/view64",{templateUrl:'partials/ftp.html'});
		$routeProvider.when("/view65",{templateUrl:'partials/ord.html'});
		$routeProvider.when("/view66",{templateUrl:'partials/excel.html'});
		$routeProvider.when("/view67",{templateUrl:'partials/pipupgrade.html'});
		$routeProvider.when("/view68",{templateUrl:'partials/postgres.html'});
		
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

