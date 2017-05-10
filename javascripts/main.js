var app = angular.module("TodoApp", []);	// make a new prototype from angular.min.js profile. array is for plugins
											// name in quotes must be the same as the html. THE SAME!!!

app.controller("NavCtrl", ($scope) => {			//quotes are name of controller, usually has ctrl in it in PaschalCase
	$scope.cat = "Meow";						// angular variables to use go in parens
	$scope.navItems = [{name: "Logout"}, {name: "All Items"}, {name: "New Item"}];
});	

app.controller("ItemCtrl", ($scope) => {
	$scope.dog = "Woof!";
	$scope.showListView = true;

	$scope.newItem = () => {
		$scope.showListView = false;
	};

	$scope.allItems = () => {
		$scope.showListView = true;
	};

})