myApp.controller("TestController", ["$scope", "$http", "$location", "AuthFactory", "UserFactory", function($scope, $http, $location, AuthFactory, UserFactory) {
    console.log("Test Controller works");

    $scope.counterCurrent = 0;
    $scope.counterMax = 1;
    var getData = UserFactory.getData();
    $scope.updateAllData = function() {

            getData('users')
                .then(function(users) {
                    var i = 0;
                    $scope.counterMax = users.length;
                    function updateUserLoop() {
                        setTimeout(function() {


                          $http.put('/userData/lawn/update', users[i])
                              .then(function(data) {
                                $scope.counterCurrent = i + 1;
                                console.log('lawn updated updated for: ', users[i]);
                                console.log('user lawn:', data.data);

                              });

                            i++;
                            if (i < users.length) {
                                updateUserLoop();
                            }
                        }, 3000)
                    }

                    updateUserLoop();

                })
        }





}]);
