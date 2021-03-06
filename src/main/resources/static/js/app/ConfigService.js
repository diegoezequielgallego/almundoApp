angular.module('crudApp').factory('ConfigService',
    ['$http', '$q', 'urls',
        function ($http, $q, urls) {
    		
    		//Se crean todas las funciones dentro del objeto factory asi
    		//a la hora de limpiarlo angular es mas optimo
            var factory = {
        
        		loadLog: function() {
                    var deferred = $q.defer();
                    $http.post(urls.USER_SERVICE_API + "getLog/")
                        .then(
                            function (response) {
                                console.log('Fetched successfully User with id :');
                                deferred.resolve(response.data);
                            },
                            function (errResponse) {
                                console.error('Error while loading user with id :');
                                deferred.reject(errResponse);
                            }
                        );
                    return deferred.promise;
                },
                
                runConfig: function(configList, calls) {
                    var deferred = $q.defer();
                    $http.post(urls.USER_SERVICE_API + "run/" + calls, configList)
                        .then(
                            function (response) {
                                //loadAllUsers();
                                deferred.resolve(response.data);
                            },
                            function (errResponse) {
                               //console.error('Error while creating User : '+errResponse.data.errorMessage);
                               deferred.reject(errResponse);
                            }
                        );
                    return deferred.promise;
                }

            };

            return factory;


        }
    ]);