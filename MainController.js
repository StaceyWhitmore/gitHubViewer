/*
Manages serach form and countdown if user doesn't search first
*/

(function() {

    var app = angular.module("githubViewer");

    var MainController = function($scope,  $interval, $location) { //capitol L on $Location ?

       

        var decrementCountdown = function(){
            $scope.countdown -= 1;
            if($scope.countdown < 1){
                $scope.search($scope.username);
            }
        };

        var countdownInterval = null;
        var startCountdown = function(){
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };

        $scope.search = function(username) {
            if(countdownInterval)    {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
            $location.path("/users/" + username); // Changes the client fragment to #/user/someuser
        };

        $scope.username = "angular";
        $scope.countdown = 5;
        startCountdown();


    };

    app.controller("MainController", MainController);

}()); //IFFE
