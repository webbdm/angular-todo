app.controller("ItemNewCtrl", function($http, $q, $scope, FIREBASE_CONFIG) {

	// $scope.newItem = () => {

 //    };

 //    $scope.allItems = () => {};

    $scope.addNewItem = () => {

        $scope.newTask.isCompleted = false;
        postNewItem($scope.newTask).then((response) => {
            $scope.newTask = {};
            // switch views
            getItems();
        }).catch((error) => {
            console.log("addNewItem error", error);
        });

        //postNewItem
    };
    console.log("inside ItemNewCtrl");
});
