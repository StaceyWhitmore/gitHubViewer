

(function(){
  
  var app = angular.module("githubViewer", ["ngRoute"]); //ngRoute is another module that my module needs only then will it become available
  
  app.config(function($routeProvider){ //config defines routes
    $routeProvider
    .when("/main", {    // i.e.when you see this url here is the template to load  main is entry point (root)

      
    	templateUrl: "main.html",
    	controller: "MainController"

    }) 
     // (or username) when routingProvder sees a : it treets what follows as a parameter ( a piece of data to be extraced and given to other components)  
    .when("/user/: username",{  // must match names in RepoController.js
      templateUrl: "user.html",
      controller: "UserController"
    }) 
    .when("/repo/:username/:reponame",   //tell provider when you see this to ...
    {
      templateUrl: "repo.html", //..and a template
      controler: "RepoController" //.. and add a controller in charge of that temolate

    })
    .otherwise({redirectTo:"/main"});     
    
  });
  
  
}());