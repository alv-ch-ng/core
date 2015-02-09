;(function () {
describe('formMailcheck directive', function () {
    var elem, scope;

    beforeEach(module('alv-ch-ng.ui-forms', function ($translateProvider) {
        $translateProvider.translations('en', {
            common_i18n_mailcheck_didYouMean:'EN_didYouMean',
            testMailcheck:'EN_testMailcheck'
        })
            .translations('de', {
                common_i18n_mailcheck_didYouMean:'DE_didYouMean',
                testMailcheck:'DE_testMailcheck'
            });
        $translateProvider.preferredLanguage('en');
    }));

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        scope.testValue = '';
        elem = angular.element('<div><input form-mailcheck="testMailcheck" name="email" type="email" ng-model="testValue" /></div>');
        $compile(elem)(scope);
        scope.$digest();
    }));

    it('renders the element as required.', inject(function () {
        scope.$digest();

        expect(elem.children('p.help-block')).toContainText('EN_testMailcheck');

        expect(elem.children('p.help-block.ng-hide')).toBeTruthy();
        expect(elem.children('p.help-block.ng-hide')).toContainText('EN_didYouMean');
    }));

    it('renders the element as required.',
        function() {
            inject(function ($compile) {
                elem = angular.element('<div><input form-mailcheck name="email" type="email" ng-model="testValue" /></div>');
                $compile(elem)(scope);
                scope.$digest();

                expect(elem.children('p.help-block.ng-hide')).toBeTruthy();
                expect(elem.children('p.help-block.ng-hide')).toContainText('EN_didYouMean');
            });
        }
    );
});
}());