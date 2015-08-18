'use strict';
var myapp = angular.module('gitapp', ['ngtimeago','angular-loading-bar']);

function gitpr($scope, $http) {
      $scope.getGitInfo = function () {
         $scope.userNotFound = false;
         $scope.loaded = false;
         $http.get("https://api.github.com/search/issues?q=type:pr+author:" + $scope.username + "&sort=created&order=asc&per_page=1" )
               .success(function (data) {
                  if (data && data.items && data.items.length) {
                    $scope.useNotFound = false;
                    $scope.use = data;
                    $scope.loaded = true;
                  }
                  else {
                    $scope.useNotFound = true;
                  }
               })
               .error(function () {
                  $scope.useNotFound = true;
               });
        
      }
   }
