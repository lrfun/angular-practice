

function personController($scope){
  $scope.person={
    firstName:"Jone",
    lastName:"Doe"
  };
  $scope.fullName=function(){
    var x=$scope.person;
    return x.firstName+' '+x.lastName
  }
}