describe('Controllers', function(){
    var scope;

    // load the controller's module
    beforeEach(module('starter.controllers'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('AccountCtrl', {
            $scope: scope,
            $routeParams: { id: '...' }
        });
    }));
    
    // tests start here
    it('1',(function(){
        expect(1).toEqual(1);
    }));
});
