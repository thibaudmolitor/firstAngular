angular.module('starter.controllers', [])  // Création d'un module

.controller('DashCtrl', function($scope, $ionicModal, $state) { // Lancement de la fonction controller qui est appeller au lancement de SA route

  $scope.truc = "hello!";


  $ionicModal.fromTemplateUrl('templates/my-modal.html', { // Initialisation de la modal
    scope: $scope, // Affectation des variables definie dans le $scope (Tout varibles definie dans le scope, sont utilisable dans la modal)
    animation: 'slide-in-up' // Definition de l'animation d'affichage de la modal
  }).then(function(modal) {
    $scope.Mike = modal; // Affecter la modal à une varible pour faire appelle à cette dernier
  });
  $scope.openModal = function() {
    $scope.Mike.show(); // Afficher la modal
  };
  $scope.closeModal = function() {
    $scope.Mike.hide(); // Cacher la modal
  };
  //
  $ionicModal.fromTemplateUrl('templates/my-modal2.html', { // Initialisation de la modal
    scope: $scope, // Affectation des variables definie dans le $scope (Tout varibles definie dans le scope, sont utilisable dans la modal)
    animation: 'slide-in-up' // Definition de l'animation d'affichage de la modal
  }).then(function(modal2) {
    $scope.Mike2 = modal2; // Affecter la modal à une varible pour faire appelle à cette dernier
  });
  $scope.openModal2 = function() {
    $scope.Mike2.show(); // Afficher la modal
  };
  $scope.closeModal2 = function() {
    $scope.Mike2.hide(); // Cacher la modal
  };


  $scope.showNewMike = function() {
    $scope.Mike2.hide(); // Cacher la modal
    $state.go('Mike');
  }   

})


.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('MikeCtrl',function($scope) {
  
  $scope.list = [];

  $scope.submitFrom = functi  on() {
    var list = $scope.list;
    for(var i = 0; i < $scope.list.lenght; i++) {
      console.log($scope.list[i]);
    };
  };

});