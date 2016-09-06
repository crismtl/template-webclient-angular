app.controller('ConsultaCtrl', ['$scope', '$state', 'SolicitudFactory', 'toastr', function($scope, $state, SolicitudFactory, toastr) {
    $scope.consulta = {};
    $scope.usuario = {};

    $scope.consultaPorCI = function() {
        SolicitudFactory.consultaPorCI({
            ci: $scope.consulta.sol_ci
        }).$promise.then(
            function success(respuesta) {
                if (respuesta[0] === undefined) {
                    toastr.error('Error!', 'No se encontraron registros relacionados');
                } else {
                    toastr.success('Éxito!', 'Se obtuvo la solicitud');
                }
                // toastr.success('Éxito!', 'Se obtuvo la solicitud');
                $scope.usuario = respuesta[0];
                console.log('exito en consultaPorCI', $scope.usuario);
            },
            function error(error) {
                toastr.error('Error!', 'No obtuvo la solicitud');
                console.log(error);
            });
    };

    $scope.consultaPorApellidos = function() {
        console.log($scope.consulta.sol_apellidos);
        SolicitudFactory.consultaPorApellidos({
            apellidos: $scope.consulta.sol_apellidos
        }).$promise.then(
            function success(respuesta) {
                toastr.success('Éxito!', 'Se obtuvo la solicitud');
                $scope.usuario = respuesta[0];
                console.log('exito en consultaPorApellidos', respuesta);
            },
            function error(error) {
                toastr.error('Error!', 'No se obtuvo la solicitud');
                console.log(error);
            });
    };

    $scope.borrar = function() {
      $scope.usuario = {};
    }
}]);
