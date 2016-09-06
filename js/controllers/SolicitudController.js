app.controller('SolicitudCtrl', ['$scope', '$state', 'SolicitudFactory', 'toastr', function($scope, $state, SolicitudFactory, toastr) {

    $scope.nuevaSolicitud = {
        sol_ci: '',
        sol_apellidos: '',
        sol_nombres: '',
        sol_codprov: '',
        sol_codciu: '',
        sol_sexo: '',
        sol_fechanac: '',
        sol_nummiem: '',
        sol_disc: '',
        sol_telefono: '',
        sol_fecha: '',
        sol_estado: ''
    };

    class Ciudad {
        constructor(cod, nombre) {
            this.codigo = cod;
            this.nombre = nombre;
        }
    }

    class Provincia {
        constructor(cod, nombre, ciudades) {
            this.codigo = cod;
            this.nombre = nombre;
        }
    }

    function generarProvincias() {
        var ciudades = [];
        var cod;
        var nombre;
        for (var i = 0; i < 15; i++) {
            cod = i + 1;
            nombre = 'Ciudad de Generada ' + cod;
            ciudades.push(new Ciudad(cod, nombre))
        }
        return ciudades;
    }

    var esmeraldas = new Provincia(8, 'Esmeraldas');
    var manabi = new Provincia(10, 'Manabí');
    var losrios = new Provincia(12, 'Los Ríos');
    $scope.provincias = [];
    $scope.provincias.push(esmeraldas);
    $scope.provincias.push(manabi);
    $scope.provincias.push(losrios);
    console.log($scope.provincias);

    $scope.ciudades = generarProvincias();
    console.log($scope.ciudades);

    $scope.auxsolicitud = {};

    $scope.agregar = function() {
        $scope.nuevaSolicitud.sol_fecha = new Date();
        $scope.nuevaSolicitud.sol_estado = 'S';

        if ($scope.auxsolicitud.sol_disc === 'Si') {
            $scope.nuevaSolicitud.sol_disc = true;
        } else {
            $scope.nuevaSolicitud.sol_disc = false;
        }


        console.log('nuevaSolicitud', $scope.nuevaSolicitud);
        SolicitudFactory.save({
          sol_ci: $scope.nuevaSolicitud.sol_ci,
          sol_apellidos: $scope.nuevaSolicitud.sol_apellidos,
          sol_nombres: $scope.nuevaSolicitud.sol_nombres,
          sol_codprov: $scope.nuevaSolicitud.sol_codprov,
          sol_codciu: $scope.nuevaSolicitud.sol_codciu,
          sol_sexo: $scope.nuevaSolicitud.sol_sexo,
          sol_fechanac: $scope.nuevaSolicitud.sol_fechanac,
          sol_nummiem: $scope.nuevaSolicitud.sol_nummiem,
          sol_disc: $scope.nuevaSolicitud.sol_disc,
          sol_telefono: $scope.nuevaSolicitud.sol_telefono,
          sol_fecha: $scope.nuevaSolicitud.sol_fecha,
          sol_estado: $scope.nuevaSolicitud.sol_estado
        }).$promise.then(
            function success(respuesta) {
                toastr.success('Éxito!', 'Se ingresó la solicitud');
                console.log('exito en ingreso de solicitud');
                $scope.nuevaSolicitud = {};
            },
            function error(error) {
                toastr.error('Error!', 'No se ingresó el Nuevo Usuario');
                console.log('Error en ingreso de solicitud', error);
            });
    }
}]);
