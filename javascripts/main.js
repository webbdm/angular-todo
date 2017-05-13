app.run((FIREBASE_CONFIG) => {
    firebase.initializeApp(FIREBASE_CONFIG);
});

app.controller("NavCtrl", ($scope) => { //quotes are name of controller, usually has ctrl in it in PaschalCase
    $scope.cat = "Meow"; // angular variables to use go in parens
    $scope.navItems = [{ name: "Logout" }, { name: "All Items" }, { name: "New Item" }];
});

app.controller("ItemCtrl", ($http, $q, $scope, FIREBASE_CONFIG) => {
    $scope.dog = "Woof!";
    $scope.showListView = true;
    $scope.items = [];

    $scope.newItem = () => {
        $scope.showListView = false;
    };

    $scope.allItems = () => {
        $scope.showListView = true;
    };

    let getItemList = () => {
        let itemz = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/items.json`)
                .then((fbItems) => {
                    let itemCollection = fbItems.data;
                    Object.keys(itemCollection).forEach((key) => {
                        itemCollection[key].id = key;
                        itemz.push(itemCollection[key]);
                    });
                    resolve(itemz);
                }).catch((error) => {
                    reject(error);
                });
        });

    };

    let getItems = () => {
        getItemList().then((itemz) => {
            $scope.items = itemz;
        }).catch((error) => {
            console.log("get Error", error);
        });
    };

    getItems();

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
        postNewItem($scope.newTask).then((response)=>{
            $scope.newTask = {};
            $scope.showListView = true;
            getItems();
        }).catch((error)=>{
            console.log("addNewItem error", error);
        });

        //postNewItem
    };

});
