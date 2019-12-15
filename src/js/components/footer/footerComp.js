
angular
  .module('myApp')
  .directive('footerComp', footer);

function footer () {
  return {
    templateUrl: '/js/components/footer/footerTpl.html'
  }
}
