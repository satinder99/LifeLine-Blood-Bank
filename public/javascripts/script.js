var myapp=angular.module('mymodule',['ngRoute']);
myapp.config(function($routeProvider)
{
	$routeProvider		
		.when('/home',
		{
			templateUrl:'/template/home.html',
			controller:'myHomeController'
		})
		.when('/donate',
		{
			templateUrl:'template/donate.html',
			controller:'myHomeController'
		})
		.when('/request',
		{
			templateUrl:'template/request.html',
			controller:'myHomeController'
		})
		.when('/aboutus',
		{
			templateUrl:'template/aboutus.html',
			controller:'myHomeController'
		})
		.when('/contactus',
		{
			templateUrl:'template/contactus.html',
			controller:'myHomeController'
		})
		.when('/request/satinder',
		{
			templateUrl:'template/satinder.html',
			controller:'myHomeController'
		})
		.when('/request/searchResult',
		{
			templateUrl:'template/searchResult.html',
			controller:'reqController'
		})
		.when('/admin',
		{
			templateUrl:'template/admin.html'
		})
		.when('/admin/index',
		{
			templateUrl:'template/adminIndex.html'
		})
		.when('/admin/donarList',
		{
			templateUrl:'template/donateMembers.html',
			controller:'donarMemberController'
		})
		.when('/admin/donarList/:email',
		{
			templateUrl:'template/donarMembers.html'
		})
		.when('/admin/requestList',
		{
			templateUrl:'template/requestMembers.html',
			controller:'requestMemberController'
		})

		.when('/admin/newAdmin',
		{
			templateUrl:'template/newAdmin.html'
		})
		.when('/admin/feedBack',
		{
			templateUrl:'template/feedBack.html',
			controller:'feedBackController'
		})
/*		.when('/admin/memberList/:name',
		{
			templateUrl:'template/memberDetail.html',
			controller:'memberDetailController'
		})
*/		.otherwise(
		{
			templateUrl:'template/otherWise.html',
			controller:'myHomeController'
		});
});
myapp.controller('myHomeController',function($scope)
{
	$scope.message='page';
	$scope.homeImg='/images/homeImg.jpg';
	$scope.myImg='/images/welcomeImg.jpg';
	$scope.contactImg='/images/donate2.jpg';
	$scope.aboutImg='/images/about.jpg';
});

myapp.controller('reqController',function($scope,$http)
{
	$scope.message='page';
	var successCall=function(response)
	{
		console.log(response.data);
		$scope.people=response.data;
		console.log($scope.people);
	}
	var errorCall=function(reason)
	{
		$scope.error=reason.statusText;
	}
	$http(
	{
		method:'POST',
		url:'http://localhost:3000/request/searchRequest'
	}).then(successCall,errorCall);
	$http(
        {
                method:'GET',
                url:'http://localhost:3000/request/searchRequest'
        }).then(successCall,errorCall);
});
myapp.controller('donateController',function($scope,$http)
{
	var successCall=function(response)
        {
                console.log(response.data);
                $scope.people=response.data;
                console.log($scope.people);
        }
        var errorCall=function(reason)
        {
                $scope.error=reason.statusText;
        }

        $http(
        {
                method:'POST',
                url:'http://localhost:3000/reqest'
        }).then(successCall,errorCall);
	

});
myapp.controller('donarMemberController',function($scope,$http)
{
	var successCall=function(response)
        {
                console.log(response.data);
                $scope.members=response.data;
                console.log($scope.members);
        }
        var errorCall=function(reason)
        {
                $scope.error=reason.data;
        }

        $http(
        {
                method:'GET',
                url:'http://localhost:3000/admin/donarList'
        }).then(successCall,errorCall);

});

myapp.controller('requestMemberController',function($scope,$http)
{
        var successCall=function(response)
        {
                console.log(response.data);
                $scope.members=response.data;
                console.log($scope.members);
        }
        var errorCall=function(reason)
        {
                $scope.error=reason.data;
        }

        $http(
        {
                method:'GET',
                url:'http://localhost:3000/admin/requestList'
        }).then(successCall,errorCall);

});

myapp.controller('feedBackController',function($scope,$http)
{
	var successCall=function(response)
        {
                console.log(response.data);
                $scope.feedBacks=response.data;
                console.log($scope.members);
        }
        var errorCall=function(reason)
        {
                $scope.error=reason.data;
        }

        $http(
        {
                method:'GET',
                url:'http://localhost:3000/admin'
        }).then(successCall,errorCall);

});


/*
myapp.controller('memberDetailController',function($scope,$http)
{
	var successCall=function(response)
        {
                console.log(response.data);
                $scope.members=response.data;
                console.log($scope.members);
        }
        var errorCall=function(reason)
        {
                $scope.error=reason.data;
        }

        $http(
        {
                method:'GET',
                url:'http://localhost:3000/admin/memberList'+ $scope.params.myMemberName
        }).then(successCall,errorCall);
});*/
