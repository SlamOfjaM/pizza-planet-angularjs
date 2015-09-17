app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    }
  ];

  $scope.mains = [
    {
      name: 'Soup',
      description: 'Just tasty soup',
      price: 5.0
    },
    {
      name: 'Borsch',
      description: 'Just tasty borsch.',
      price: 12.50
    }
  ];

  $scope.extras = [
    {
      name: 'Caesar salad',
      description: 'Just tasty Caesar salad',
      price: 8.25
    },
    {
      name: 'Fruit salad',
      description: 'Just tasty fruit salad.',
      price: 5.50
    }
  ];

}]);
