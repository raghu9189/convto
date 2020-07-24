var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.result_binary = function(){
    return parseInt($scope.input_number,10).toString(2);
    };
    $scope.result_octal = function(){
    return parseInt($scope.input_number,10).toString(8);
    };
    $scope.result_hexa = function(){
    return parseInt($scope.input_number,10).toString(16);
    };
});
app.controller('myCtrl_1', function($scope) {
	$scope.result_dec = function(){
    return parseInt($scope.input_number_1, 2).toString(10);
    };
    $scope.result_Bin_oct = function(){
    return parseInt($scope.input_number_1, 2).toString(8);
    };
    $scope.result_Bin_Hexa = function(){
    return parseInt($scope.input_number_1, 2).toString(16);
    };
});
app.controller('myCtrl_2', function($scope) {
	$scope.result_Oct_Bin = function(){
    return parseInt($scope.input_number_2, 8).toString(2);
    };
    $scope.result_Oct_Dec = function(){
    return parseInt($scope.input_number_2, 8).toString(10);
    };
    $scope.result_Oct_Hexa = function(){
    return parseInt($scope.input_number_2, 8).toString(16);
    };
});
app.controller('myCtrl_3', function($scope) {
	$scope.result_Hexa_Bin = function(){
    return parseInt($scope.input_number_3, 16).toString(2);
    };
    $scope.result_Hexa_Dec = function(){
    return parseInt($scope.input_number_3, 16).toString(10);
    };
    $scope.result_Hexa_Oct = function(){
    return parseInt($scope.input_number_3, 16).toString(8);
    };
});
app.controller('myCtrl_4', function($scope) {
	$scope.result_AND = function(){
		let x = $scope.and_ & $scope.and_1;
    return x;
    };
});