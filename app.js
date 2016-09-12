(function(){
	'use strict';

	angular.module('calculator', [])
	.controller('calculatorCtrl', function($scope){

		$scope.initial = 2000;
		$scope.rate = 0.09;
		$scope.monthly = 100;
		$scope.years = 30;
		$scope.fv = function (rate, nper, pmt, pv, type) {
		var pow = Math.pow(1 + rate, nper);
		if (rate) {
			fv = (pmt*(1+rate*type)*(1-pow)/rate)-pv*pow;
		} else {
			fv = -1 * (pv + pmt * nper);
		}
		return fv.toFixed(2);
	}
	});
})();