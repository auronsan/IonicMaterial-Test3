angular.module('starter.services', [])

.factory('BlankService', [function () {
}])

.service('BlankService', [function(){

}])
.service('LoginService', function ($q) {
    return {
        loginUser: function (name, pw, name1,pw1) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (name == name1 && pw == pw1) {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function (fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function (fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
});