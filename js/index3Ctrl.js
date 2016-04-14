
app.controller('myCtrl', function($scope, $interval,hexafy,$http) {
  $scope.counts = [255, 251, 200];
  $scope.hex = hexafy.myFunc(255);
  $scope.theTime = new Date().toLocaleTimeString();
  $interval(function () {
      $scope.theTime = new Date().toLocaleTimeString();
  }, 1000);

  $scope.option=["北京","上海","成都"];
  $scope.sites = [
    {site : "Google", url : "http://www.google.com"},
    {site : "Runoob", url : "http://www.runoob.com"},
    {site : "Taobao", url : "http://www.taobao.com"}
  ];
  $scope.cars = {
    car01 : {brand : "Ford", model : "Mustang", color : "red"},
    car02 : {brand : "Fiat", model : "500", color : "white"},
    car03 : {brand : "Volvo", model : "XC90", color : "black"}
  }



  // $http.get("index.json")
  //   .success(function(response) {
  //     $scope.names = response.records;
  //   });

  $scope.names=[   
   {
   "Name" : "Alfreds Futterkiste",
   "City" : "Berlin",
   "Country" : "Germany"
   },
   {
   "Name" : "Berglunds snabbköp",
   "City" : "Luleå",
   "Country" : "Sweden"
   },
   {
   "Name" : "Centro comercial Moctezuma",
   "City" : "México D.F.",
   "Country" : "Mexico"
   },
   {
   "Name" : "Ernst Handel",
   "City" : "Graz",
   "Country" : "Austria"
   }  
   ]  
   
});

// 自定义服务

app.service('hexafy', function() {
  // 转换为16进制
  this.myFunc = function (x) {
        return x.toString(16);
    }
});

//自定义过滤器
app.filter('myFormat',['hexafy', function(hexafy) {
    return function(x) {
        return hexafy.myFunc(x);
    };
}]);