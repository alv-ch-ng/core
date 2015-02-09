;(function() {

describe("formInput directive", function() {

    beforeEach(module('alv-ch-ng.ui-forms', function() {}));
        it('renders the html element as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = '';
                    var elem = angular.element('<div><input form-input ng-model="test" /></div>');
                    $compile(elem)(scope);
                    expect(elem.children('input')).toBeTruthy();
                    expect(elem.children('.form-group')).toBeTruthy();
                });
            }
        );
    });

}());
