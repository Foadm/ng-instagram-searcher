/**
 * Created by mozafff on 10/21/2014.
 */
angular.module('searcher-app',[])
    .controller('mainCtrl',function($scope,$http,$q ){
        $scope.submit = function(){
            $scope.makeRequest();
        }
        $scope.makeRequest = function(){
            var defer = $q.defer();

            var url = "https://api.instagram.com/v1/tags/" + $scope.search_term + "/media/recent";
            var request = {
                client_id : "c6d2780a20b9447d8608b33614424a40",
                callback: 'JSON_CALLBACK'
            };
            $http({
                method: 'JSONP',
                url: url,
                params: request
            }).
                success(function(result) {
                    $scope.analysis = result;
                }).
                error(function() {
                    alert('error');
                })
        };
    });