app.factory('SolicitudFactory', ['$resource', function($resource) {
    var factory = $resource('http://localhost:1337/Solicitud/:idSolicitud', {
        idUsuario: '@idSolicitud'
    }, {
        consultaPorCI: {
            url: 'http://localhost:1337/Solicitud?sol_ci=:ci',
            method: 'GET',
            params: {
                sol_ci: '@ci'
            },
            isArray: true
        }
    }, {
        consultaPorApellidos: {
            url: 'http://localhost:1337/Solicitud?sol_apellidos=:apellidos',
            method: 'GET',
            params: {
                sol_apellidos: '@apellidos'
            },
            isArray: true
        }
    });
    return factory;
}]);
