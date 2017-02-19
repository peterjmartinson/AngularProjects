var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    // HOME STATE AND NESTED VIEWS
    .state('home', {
      url: '/home',
      templateUrl: 'home.html'
    })
    // note: there is a VIEW inside home.html
    //       that gets populated with the following
    //       two templates

    .state('home.list', {
      url: '/list',
      templateUrl: 'home-list.html',
      controller: function($scope) {
        $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
      }
    })

    // nested list with just some random string data
    .state('home.paragraph', {
      url: '/paragraph',
      template: 'I could sure use a drink right now.'
    })

    // ABOUT PAGE AND MULTIPLE NAMED VIEWS
    .state('about', {
      url: '/about',
      views: {
        
        // the main template will be placed here
        '': { templateUrl: 'about.html' },

        'columnOne@about': { template: 'Look I am a column!' },

        'columnTwo@about': {
          // template: 'Look, I am another column!' }
          templateUrl: 'table-data.html',
          controller: 'scotchController'
        }

      }

    });

}); // closes $routerApp.config()

// define the scotch controller that we call up in the *about* state
routerApp.controller('scotchController', function($scope) {
  $scope.message = 'test';

  $scope.scotches = [
    {
      name: 'Macallan 12',
      price: 50
    },
    {
      name: 'Chivas Regal Royal Salute',
      price: 10000
    },
    {
      name: 'Glenfiddich 1937',
      price: 20000
    }
  ];

});



