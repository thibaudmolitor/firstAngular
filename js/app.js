angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
 // Création d'un module(Premier paramettre : Nom du module; Second paramettre :
  // Les module externe qui à besoin pour fonctionner [equivalent du require en php])

.run(function($ionicPlatform) { // Lancement de la fonction run qui est appeller à demarage du site
 
  /* Equivalent a document ready - Fonction sur web et mobile */
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar)
      StatusBar.styleDefault();
  });


})

.config(function($stateProvider, $urlRouterProvider) { 
// Lancement de la fonction config qui definie la configuration du site 
// (Les route, la route appellé au lancement du site, ...)


  $stateProvider


  .state('tab', { // Creation d'une state (route) - Premier parametre : Nom de la route; 
    url: '/tab', // Url de la route
    abstract: true, // Comme vous utilisez un état abstract ne donnent pas une URL.
    templateUrl: 'templates/tabs.html' // templateUrl est le chemin de la page html
  })


  .state('tab.dash', { 
  // en cas d'heritage, mettre la route maitre en premier et la nouvelle route en second
    url: '/dash',
    views: { // Views est utiliser lors d'un héritage, quand un route herite d'une seconde route.
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl' // Definie le controleur de la route 
        // - Il dois etre créé sinon ne fonctionne pas
      }
    }
  })


  // 
  .state('Mike', { 
  // en cas d'heritage, mettre la route maitre en premier et la nouvelle route en second
    url: '/Mike',
    templateUrl: 'templates/Mike.html',
    controller: 'MikeCtrl' // Definie le controleur de la route 
        // - Il dois etre créé sinon ne fonctionne pas
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // Definie la route qui sera lansé au lancement du site - l'url
  $urlRouterProvider.otherwise('/tab/dash');

});
