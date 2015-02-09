;(function () {
    describe('scrollFix directive', function () {
        var elem, scope;

        beforeEach(module('alv-ch-ng.ui-scroll'));

        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope;
            elem = angular.element('<div scroll-fix style="width: 200px;">testContent</div>');
            $compile(elem)(scope);
            scope.$digest();
        }));

        it('renders the select element as required.',
            function() {
                inject(function () {
                    expect(elem.attr('id')).toBeTruthy();
                    expect(elem.attr('id')).toContain('random');
                    expect(elem.hasClass('scroll-fixed')).toBeTruthy();
                });
            }
        );
    });
}());