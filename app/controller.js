/**
 * Main application controller
 *
 * You can use this controller for your whole app if it is small
 * or you can have separate controllers for each logical section
 * 
 */
;(function() {

  angular
    .module('boilerplate')
    .controller('MainController', MainController)
    .controller('FlickrsController', FlickrsController);

  MainController.$inject = ['LocalStorage', 'QueryService'];
  FlickrsController.$inject = ['$scope', '$http'];


  function MainController(LocalStorage, QueryService) {

    // 'controller as' syntax
    var self = this;


    ////////////  function definitions


    /**
     * Load some data
     * @return {Object} Returned object
     */
    // QueryService.query('GET', 'posts', {}, {})
    //   .then(function(ovocie) {
    //     self.ovocie = ovocie.data;
    //   });
  }

  function FlickrsController($scope, $http){

    $scope.test = function(){
      console.log('test');
    };

    $scope.fetch = function(){
      var search = $scope.searchterm;
      console.log(search);
       
      if(search == undefined || search.length <= 0 ) {
        search = "";
      } else {
        search = $scope.searchterm.replace(/\s/g,'').toLowerCase();
      }

      console.log('search: ' + search);

      $http.jsonp("https://api.flickr.com/services/feeds/photos_public.gne?format=json&tagmode=any&jsoncallback=JSON_CALLBACK&tags=" + search )
      .success(function(response){ 
         console.log(response);
         $scope.details = response.items;
      });
    };
  }
})();