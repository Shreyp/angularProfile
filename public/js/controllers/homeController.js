angular.module('profileApp').controller('homeController', ['$scope','$http','$location', '$window', function($scope, $http, $location, $window){
  
  $scope.submit = function(){
    var newMessage ={
      name: $scope.name,
      email: $scope.email,
      message: $scope.message
    };
    $http.post('/submitMessage', newMessage).then(function(){
      $scope.name = '';
      $scope.email = '';
      $scope.message = '';

      bootbox.alert('Your Message has been submitted!', function(){
        $window.location.reload();
      });
    })
  }

}]);