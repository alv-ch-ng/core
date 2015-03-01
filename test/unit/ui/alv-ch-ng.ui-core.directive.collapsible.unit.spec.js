;(function() {

    describe("collapsible directive", function() {

        beforeEach(module('alv-ch-ng.ui-core', function() {

        }));

        it('adds the necessary classes and attributes.', function() {
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                var elem = angular.element('<div><div collapsible>testContent</div></div>');
                $compile(elem)(scope);
                expect(elem.html()).toEqual('<div collapsible="" class="pointer" data-toggle="collapse" data-target="">testContent</div>');
            });

        });

    });

}());
