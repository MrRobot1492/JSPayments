'use strict';

var helloWorldControllers =
    angular.module('helloWorldControllers', []);

helloWorldControllers.controller('MainCtrl', ['$scope', '$location', '$http',
    function MainCtrl($scope, $location, $http) {
        $scope.message = "Hello World";
    }
]);
helloWorldControllers.controller('ShowCtrl', ['$scope', '$location', '$http',
    function ShowCtrl($scope, $location, $http) {
        $scope.message = "Show The World";
    }
]);

helloWorldControllers.controller('CustomerCtrl', ['$scope',
    function CustomerCtrl($scope) {
        $scope.customerName = "Bob's Burgers";
        $scope.customerNumber = 44522;
        $scope.changeCustomer = function() {
            $scope.customerName = $scope.cName;
            $scope.customerNumber = $scope.cNumber;
        };
    }
]);

helloWorldControllers.controller('AddCustomerCtrl', ['$scope', '$location',
    function AddCustomerCtrl($scope, $location) {
        $scope.submit = function() {
            $location.path('/addedCustomer/' + $scope.cName + "/" + $scope.cCity);
        };
    }
]);

helloWorldControllers.controller('AddedCustomerCtrl', ['$scope', '$routeParams',
    function AddedCustomerCtrl($scope, $routeParams) {
        $scope.customerName = $routeParams.customer;
        $scope.customerCity = $routeParams.city;
    }
]);

var blogControllers =
    angular.module('blogControllers', []);
blogControllers.controller('BlogCtrl', ['$scope',
    function BlogCtrl($scope) {
        $scope.blogList = [{
                "_id": 1,
                "date": 1400623623107,
                "introText": "This is a blog post about AngularJS.We will cover how to build",
                "blogText": "This is a blog post about AngularJS.We will cover how to build a blog and how to addcomments to the blog post."
            },
            {
                "_id": 2,
                "date": 1400267723107,
                "introText": "In this blog post we will learn how to build applications based on REST",
                "blogText": "In this blog post we will learn how to build applications based on REST web services that contain most of the business logic needed for the application."
            }
        ];
    }
]);

blogControllers.controller('BlogViewCtrl', ['$scope', '$routeParams',
    function BlogViewCtrl($scope, $routeParams) {
        var blogId = $routeParams.id;

        var blog1 = {
            "_id": 1,
            "date": 1400623623107,
            "introText": "This is a blog post about AngularJS. We will cover how to build ",
            "blogText": "This is a blog post about AngularJS. We will cover how to build a blog and how to add comments to the blog post.",
            "comments": [{
                    "commentText": "Very good post. I love it."
                },
                {
                    "commentText": "When can we learn services."
                }
            ]
        };

        var blog2 = {
            "_id": 2,
            "date": 1400267723107,
            "introText": "In this blog post we will learn how to build applications based on REST ",
            "blogText": "In this blog post we will learn how to build applications based on REST web services that contain most of the business logic needed for the application.",
            "comments": [{
                    "commentText": "REST is great. I want to know more."
                },
                {
                    "commentText": "Will we use Node.js for REST services?."
                }
            ]
        };

        if (blogId === '1') {
            $scope.blogEntry = blog1;
        } else if (blogId === '2') {
            $scope.blogEntry = blog2;
        }
    }
]);