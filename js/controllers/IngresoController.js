app.controller('IngresoCtrl', ['$scope', '$state', 'UsuarioFactory', 'toastr', '$cookies', function($scope, $state, UsuarioFactory, toastr, $cookies) {
    $scope.usuario = {}

    $scope.login = function() {
        UsuarioFactory.login({
            usuario: $scope.usuario.usuario,
            password: $scope.usuario.password
        }).$promise.then(
            function success(respuesta) {
                toastr.success('Bienvenido a Damnificados Ecuador', 'Éxito');
                $cookies.put('UsuarioId', respuesta.id);
                $state.go('solicitud');
                console.log(respuesta);
            },
            function error(error) {
                console.log(error);
                toastr.error('Algo salió mal con su ingreso', 'Error');
            });
    }
}]);
