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
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic',
      price: 4.95
    }
  ];
  $scope.mains = [
    {
      name: 'Fettuccine al Limone',
      description: 'Lemon Zest, Chives, Parmigiano and Pecorino Romano in a Lemon Vodka Cream Sauce.',
      price: 14.00
    },
    {
      name: 'Penne Spinachi',
      description: 'Ricotta Cheese, Pecorino Romano and a hint of Nutmeg in a Spinach Cream Sauce.',
      price: 15.00
    },
    {
      name: 'Spaghetti Bolognese',
      description: 'Rich Meat Sauce, Sliced Mushrooms, Parmigiano, Cream and Sweet Basil (Contains Pork)',
      price: 17.00
    }
  ];
  $scope.extras = [
    {
      name: 'Mixed Greens Salad',
      description: 'Mixed Greens and Roma Tomatoes, tossed with a Balsamic Vinaigrette Dressing (Ranch Dressing on request).',
      price: 9.00
    },
    {
      name: 'C&O Antipasto Salad',
      description: 'Mixed Greens, Salami, Turkey Breast, Garbanzo Beans, Roasted Red Peppers, Roma Tomatoes, Kalamata Olives, Mozzarella Cheese and Pepperoncini, tossed in a Balsamic Vinaigrette Dressing (Contains Pork).',
      price: 8.00
    },
    {
      name: 'Minestrone Soup',
      description: '',
      price: 6.00
    }
  ];
}]);