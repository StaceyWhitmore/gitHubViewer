(function() {

  var github = function($http) {

    var getUser = function(username) {
      return $http.get("https://api.github.com/users/" + username)
        .then(function(response) {
          return response.data;
        });
    };

    var getRepos = function(user) {
      return $http.get(user.repos_url)
        .then(function(response) {
          return response.data;
        });
    };

    var getRepoDetails = function(username, reponame)
    {
    		var repo; // repo details + collaborators 
    		var repoUrl = "http://api.github.com/repos/" + username + "/" + reponame;

    		return $http.get(repoUrl)
    				.then(function(response){
    					repo = response.data; //return gets another promise
    					// Use /contributors NOT collaborators
    					return $http.get(repourl + "/contributors");  // each return iss the input to the next success function ..in the controller (RepoController.js)


    				})
    				.then(function(response){
    					// Use /contributors NOT collaborators
    					repo.contributors = response.data;
    					return repo;  // THEN AND EVEN BIGGER PROMISE at the end of the chain 
    				});
    };

    return {
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetails: getRepoDetails
    };

  };

  var module = angular.module("githubViewer");
  module.factory("github", github);

}());