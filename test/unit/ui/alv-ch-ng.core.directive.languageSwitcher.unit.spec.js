;(function () {
describe('language-switcher directive', function () {
    var elem, scope;

    beforeEach(module('alv-ch-ng.core', 'pascalprecht.translate', function ($translateProvider, $provide) {
        $provide.constant('supportedLanguages',['de', 'en']);
        $translateProvider.translations('en', {
            common_i18n_contents:'Contents'
        })
        .translations('de', {
            common_i18n_contents:'Inhalt'
        });
        $translateProvider.preferredLanguage('en');
    }));

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope;
        elem = angular.element("<language-switcher></language-switcher>");
        $compile(elem)(scope);
        scope.$digest();
    }));

    it('uses all supportedLanguages, if no attrs.languages is given.',
        inject(function() {
            var switcher = $(elem).find('#language_en');
            expect(switcher === undefined || switcher === null).toBe(false);
            expect(scope.allLanguages).toEqual(['de', 'en']);
        })
    );


    it('uses attrs.languages if no language is indicated.',
        inject(function($compile) {
            elem = angular.element('<language-switcher languages="it,ru"></language-switcher>');
            $compile(elem)(scope);
            scope.$digest();

            var switcher = $(elem).find('#language_en');
            expect(switcher === undefined || switcher === null).toBe(false);
            expect(scope.allLanguages).toEqual(['it', 'ru']);
        })
    );

    it('scope.setTranslationLanguage',
        inject(function() {
            expect(scope.getTranslationLanguage()).toBe('en');
            scope.setTranslationLanguage('de');
            scope.$digest();
            expect(scope.getTranslationLanguage()).toBe('de');
        })
    );
});
}());
