;(function () {
    describe('scrollUp directive', function () {
        var elem, scope;

        beforeEach(module('alv-ch-ng.ui-scroll'));

        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope;
            elem = angular.element('<html><body><div scroll-up="bottom">testContent</div><div scroll-fix-bottom id="bottom">testBottom</div></body></html>');
            $compile(elem)(scope);
            scope.$digest();
        }));

        it('renders the element as required.', function () {
            expect(elem.children('body')).toBeTruthy();
            expect(elem.find('body#document-top')).toBeTruthy();
            expect(elem.children('body').find('#scroll-up')).toBeTruthy();
        });

        it('check scrollTop function.', function () {
            spyOn(scope, '$broadcast').and.callThrough();
            scope.scrollTop();
            scope.$digest();
            expect(scope.$broadcast).toHaveBeenCalledWith('alv-ch-ng:dom-manipulate', {'id':'document-top','event':'scrollUp:scrollTop'});
        });

        it('renders the element as required in a body-tag.',
            function() {
                inject(function ($compile) {
                    elem = angular.element('<html><body><div scroll-up>testContent</div></body></html>');
                    $compile(elem)(scope);
                    scope.$digest();

                    expect(elem.children('body')).toBeTruthy();
                    expect(elem.find('body#document-top')).toBeTruthy();
                    expect(elem.children('body').find('#scroll-up')).toBeTruthy();
                });
            }
        );
    });
}());