/**
 * Created by mozafff on 10/21/2014.
 */
angular.module('searcher-app',[])
    .controller('mainCtrl',function($scope,$http,$timeout,$q ){
        $scope.submit = function(){
            $scope.makeRequest();
        }
        $scope.makeRequest = function(){
            var url = "https://api.instagram.com/v1/tags/" + $scope.search_term + "/media/recent";
            console.log(url);
            var request = {
                client_id : "c6d2780a20b9447d8608b33614424a40",
                callback: 'JSON_CALLBACK'
            };
            $http({
                method: 'JSONP',
                url: url,
                params: request
            }).
                success(function(response) {
                    $scope.loading = false;
                    $scope.result = response.data;
                }).
                error(function() {
                    alert('error');
                })
        };
        $scope.waiting = function(){
            $scope.loading = true;
        }
    });