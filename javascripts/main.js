app.controller("ItemCtrl", ($http, $q, $scope, FIREBASE_CONFIG) => {

    $scope.newItem = () => {

    };

    $scope.allItems = () => {};

    

    

    let postNewItem = (newItem) => {
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`, JSON.stringify(newItem))
                .then((resultz) => {
                    resolve(resultz);
                })
                .catch((error) => {
                    console.log("Post newItem error", error);
                });
        });
    };

    $scope.addNewItem = () => {

        $scope.newTask.isCompleted = false;
        postNewItem($scope.newTask).then((response) => {
            $scope.newTask = {};
            getItems();
        }).catch((error) => {
            console.log("addNewItem error", error);
        });

        //postNewItem
    };

});
