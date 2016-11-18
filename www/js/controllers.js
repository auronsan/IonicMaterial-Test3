/* global angular, document, window */
'use strict';
angular.module('starter.controllers', [])
    .controller('ProductsController', function ($scope, $http) {

        $http({ method: 'GET', url: 'http://kuboseinz.co/test2/' }).success(function (data) {
            console.log('hello');
            $scope.products = data;
            // response data
        }).
        error(function (data) {
            console.log(data);
        });

    })
   
.controller('AccountCtrl', function ($scope, $http) {
    $scope.settings = {
        enableFriends: true
    };
})
.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal

    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.footer = true;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;
    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})

.controller('LoginCtrl', function ($scope, $http, $timeout, ionicMaterialInk, LoginService, $ionicPopup, $state,$rootScope) {
    $rootScope.showFooter = false;

    $scope.toggle = function () {
        $rootScope.showFooter = !$rootScope.showFooter;
    };


    $scope.data = {};
    $http({ method: 'GET', url: 'http://172.19.14.128:3000/api/loginIDs/1' }).success(function (data) {
        console.log('hello');
        $scope.logins = data;

        // response data
    }).
        error(function (data) {
            console.log(data);
            var alertPopup = $ionicPopup.alert({
                title: 'Not Connected to server!',
                template: 'Please check your internet!'
            });
        });
    $scope.login = function () {
        LoginService.loginUser($scope.data.username, $scope.data.password, $scope.logins.username, $scope.logins.password).success(function (data) {
            $state.go('app.profile');
        }).error(function (data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();

})

.controller('FriendsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
  
    // Delay expansion
    $timeout(function() {
      
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ProfileCtrl', function ($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $rootScope) {
    $rootScope.showFooter = true;
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.footer = true;
    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();

})

.controller('ActivityCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('GalleryCtrl', function($scope,$http, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
   

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });
    $http({ method: 'GET', url: 'http://kuboseinz.co/test2/' }).success(function (data) {
        console.log('hello');
        $scope.products = data;
        // response data
    }).
        error(function (data) {
            console.log(data);
        });
    $scope.mySplit = function (string, nb) {
        var array = string.split('.');
        return array[nb];
    };
    $scope.mySplitL = function (string) {
        var a = $scope.mySplit(string, 0);
        a = "http://www.kuboseinz.co/ocart2/image/cache/" + a + "-260x332.jpg";
        return a;
    };
    $scope.isActive = function (user) {
        return user.model === "Iphone";
    };
    $scope.isActive1 = function (user) {
        return user.model === "Xiaomi";
    };
})


;
