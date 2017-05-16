app.controller("NavCtrl", function($scope){ //quotes are name of controller, usually has ctrl in it in PaschalCase
    $scope.cat = "Meow"; // angular variables to use go in parens
    $scope.navItems = [{ name: "Logout" }, { name: "All Items" }, { name: "New Item" }];
});