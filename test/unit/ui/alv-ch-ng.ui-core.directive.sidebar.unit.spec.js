;(function () {
    describe('sidebar directive', function () {
        var elem, scope;

        beforeEach(module('alv-ch-ng.core'));

        beforeEach(inject(function ($rootScope, $compile) {
            scope = $rootScope;
            elem = angular.element('<div><div id="layer"><div class="sidebar" style="height: 100px">firstContent</div><div class="content" style="height: 1000px">secondBottom</div></div></div>');
            $compile(elem)(scope);
            scope.$digest();
        }));

        it('renders the element as required.', function () {

            expect(elem.children('#layer')).toBeTruthy();
            expect(elem.children('#layer').children('.sidebar')).toBeTruthy();
            expect(elem.children('#layer').children('.content')).toBeTruthy();
            expect(elem.children('#layer').children('.sidebar').css('height')).toBe('100px');

            scope.$broadcast('$viewContentLoaded');
            scope.$digest();

            expect(elem.children('#layer').children('.sidebar').css('height')).toBe('1000px');
            expect(elem.children('#layer').children('.sidebar').css('height')).toBe(elem.children('#layer').children('.content').css('height'));
        });

        it('renders the element as required in different order.',
            function() {
                inject(function ($compile) {
                    elem = angular.element('<div><div id="layer"><div class="content" style="height: 1000px">secondBottom</div><div class="sidebar" style="height: 100px">firstContent</div></div></div>');
                    $compile(elem)(scope);
                    scope.$digest();

                    expect(elem.children('#layer')).toBeTruthy();
                    expect(elem.children('#layer').children('.sidebar')).toBeTruthy();
                    expect(elem.children('#layer').children('.content')).toBeTruthy();
                    expect(elem.children('#layer').children('.sidebar').css('height')).toBe('100px');

                    scope.$broadcast('$viewContentLoaded');
                    scope.$digest();

                    expect(elem.children('#layer').children('.sidebar').css('height')).toBe('1000px');
                    expect(elem.children('#layer').children('.sidebar').css('height')).toBe(elem.children('#layer').children('.content').css('height'));
                });
            }
        );
    });
}());