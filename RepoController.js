
(function()
{
	var module = angular.module("githubViewer");

var  RepoController = function($scope, $routeParams, github) // $scope service allows it to do databinding
{

 		var onRepo = function(data)
 		{

 		 		$scope.repo = data;
 		 	};
 		 	var onError = function(reason)
 		 	{
 		 		$scope.error = reason;
 		 	};


		var reponame = $routeParams.reponame; // these names must match the names I've assigned in the routing engine (app.js)
		var username = $routeParams.username;

		girhub.getRepoDetails(username, reponame)
				.then(onRepo, onError); //...when I've got the repository or I've gotten an error 
};




	module.controller("RepoController", RepoController); // 2nd param is the name of the function I am about to define ABOVE 

}()); //IFFE