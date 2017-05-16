app.controller("ItemViewCtrl", function() {

    let getItems = () => {
        getItemList().then((itemz) => {
            $scope.items = itemz;
        }).catch((error) => {
            console.log("get Error", error);
        });
    };

    getItems();
    console.log("inside ItemViewCtrl");
});
