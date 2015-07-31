;(function () {
    describe('alerts directive', function () {

        beforeEach(module('alv-ch-ng.core', function () {
        }));

        it('global alerts.',
            inject(function ($compile, $rootScope, AlertsService) {
                var scope = $rootScope.$new();
                // get an element representation
                var elem = angular.element('<alerts></alerts>');
                $compile(elem)(scope);

                AlertsService.add({message:{severity:'danger',overlay:'false', dismissable:'true', translate:'Alert 1'}});
                scope.$digest();

                expect(elem.hasClass('system-messages')).toBeTruthy();
                elem.find('.alert').each(function(index, item) {
                    expect(index).toBe(0);
                    expect($(item).hasClass('alert-danger')).toBeTruthy();
                    expect($(item).hasClass('alert-dismissable')).toBeTruthy();
                    expect($(item).children('span').attr('translate')).toBe('Alert 1');
                    expect($(item).children('button')).toBeTruthy();
                });
            })
        );

        it('context alerts.',
            inject(function ($compile, $rootScope, AlertsService) {
                var scope = $rootScope.$new();
                // get an element representation
                var elem = angular.element('<alerts alerts-context="alert"></alerts>');
                $compile(elem)(scope);
                scope.test1={context:'alert',message:{severity:'danger',overlay:'false', dismissable:'true', translate:'Alert 1'}};
                scope.test2={context:'alert',message:{severity:'info',overlay:'false', dismissable:'false', translate:'Alert 2'}};
                scope.$digest();

                expect(elem.hasClass('system-messages')).toBeFalsy();

                AlertsService.add(scope.test1);
                scope.$digest();
                elem.find('.alert').each(function(index, item) {
                    expect($(item).hasClass('alert-danger')).toBeTruthy();
                    expect($(item).hasClass('alert-dismissable')).toBeTruthy();
                    expect($(item).children('span').attr('translate')).toBe('Alert 1');
                    expect($(item).children('button')).toBeTruthy();
                });

                AlertsService.add(scope.test2);
                scope.$digest();
                elem.find('.alert').each(function(index, item) {
                    if (index===1) {
                        expect($(item).hasClass('alert-info')).toBeTruthy();
                        expect($(item).hasClass('alert-dismissable')).toBeFalsy();
                        expect($(item).children('span').attr('translate')).toBe('Alert 2');
                    }
                });
            })
        );

    });


}());

