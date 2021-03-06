'use strict';

var mainModule = angular.module('app.main', ['ngAnimate', 'ui.bootstrap']);

mainModule.controller('MainController', ['$uibModal', MainController]);

function MainController($uibModal) {
  var main = this;
  
  // ACCORDIONS
  main.oneAtATime = true;
  
  main.myHeader = "А здесь заголовок задается через контроллер";
  main.myBody = "То же касается и содержимого!";

  main.groups = [
    {
      title: 'Динамический заголовок - 1',
      content: 'Динамическое содержимое - 1'
    },
    {
      title: 'Динамический заголовок - 2',
      content: 'Динамическое содержимое - 2'
    }
  ];

  main.items = ['Item 1', 'Item 2', 'Item 3'];

  main.addItem = function() {
    var newItemNo = main.items.length + 1;
    main.items.push('Item ' + newItemNo);
  };

  main.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  
  main.bottomToggled = false;
  
  main.toggleBottom = function() {
    main.bottomToggled = !main.bottomToggled;
    
  }
  
  // ALERTS
  main.alerts = [
    { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
    { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
  ];
  
  main.addAlert = function() {
    main.alerts.push({msg: 'Another alert!'});
  };

  main.closeAlert = function(index) {
    main.alerts.splice(index, 1);
  };
  
  // CAROUSEL
  main.myInterval = 2000;
  main.noWrapSlides = false;
  var slides = main.slides = [];
  main.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: '//placekitten.com/' + newWidth + '/300',
      text: ['Много','Больше','Еще больше','Куча'][slides.length % 4] + ' ' +
        ['Котят', 'Котов', 'Кошаков', 'Котэ'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    main.addSlide();
  }
  
  // DROPDOWNS
  main.ddItems = [
    'give you up!',
    'let you down!',
    'turn around!',
    'hurt you!'
  ];
  
  main.toggledDDItem = main.ddItems[0];
  
  main.ddToggle = function(id) {   
    main.toggledDDItem = main.ddItems[id];       
  }
  
  // MODALS
  main.modalOpen = function (header, body) {

    var modalInstance = $uibModal.open({
      animation: true,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      resolve: {
        data: function () {
          return {header : header, body : body};
        }
      }
    });

    modalInstance.result.then(function (result) {
      main.modalResult = result;
    }, function () {
      console.log('Окно отменено : ' + new Date());
    });
  };
}

mainModule.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'data', ModalInstanceCtrl]);

function ModalInstanceCtrl($scope, $uibModalInstance, data) {
  
  $scope.modalHeader = data.header;
  $scope.modalBody = data.body;

  $scope.ok = function () {
    $uibModalInstance.close('Ахтунг!');
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}