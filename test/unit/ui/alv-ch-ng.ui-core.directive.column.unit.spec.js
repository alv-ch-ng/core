;(function() {

describe("column directive", function() {

    beforeEach(module('alv-ch-ng.core', function() {}));

        it('renders the html element as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    var elem = angular.element('<div><div grid><div column="1">testContent</div></div></div>');
                    $compile(elem)(scope);
                    expect(elem.html()).toEqual('<div grid=""><div column="1" class="col-md-1">testContent</div></div>');
                });
            }
        );

        it('dont renders the html element as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    var elem = angular.element('<div><div grid><div column>testContent</div></div></div>');
                    $compile(elem)(scope);
                    expect(elem.html()).toEqual('<div grid=""><div column="">testContent</div></div>');
                });
            }
        );

    });

}());
