;(function () {
describe('formSelect directive with i18n', function () {
    var elem, scope;

    beforeEach(module('alv-ch-ng.ui-forms','alv-ch-ng.translate', function ($translateProvider) {
        $translateProvider.translations('en', {
            common_i18n_select_selectedTextFormat:'EN_selectedTextFormat',
            common_i18n_select_noneSelectedText:'EN_noneSelectedText',
            common_i18n_select_noneResultsText:'EN_noneResultsText',
            common_i18n_select_countSelectedText:'EN_countSelectedText',
            common_i18n_select_maxOptionsText1:'EN_maxOptionsText1',
            common_i18n_select_maxOptionsText2:'EN_maxOptionsText2',
            common_i18n_select_maxOptionsText3:'EN_maxOptionsText3',
            common_i18n_select_maxOptionsText4:'EN_maxOptionsText4'
        })
            .translations('de', {
                common_i18n_select_selectedTextFormat:'DE_selectedTextFormat',
                common_i18n_select_noneSelectedText:'DE_noneSelectedText',
                common_i18n_select_noneResultsText:'DE_noneResultsText',
                common_i18n_select_countSelectedText:'DE_countSelectedText',
                common_i18n_select_maxOptionsText1:'DE_maxOptionsText1',
                common_i18n_select_maxOptionsText2:'DE_maxOptionsText2',
                common_i18n_select_maxOptionsText3:'DE_maxOptionsText3',
                common_i18n_select_maxOptionsText4:'DE_maxOptionsText4'
            });
        $translateProvider.preferredLanguage('de');
    }));

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope;
        scope.demoArray = ["a_item 1", "a_item 2", "a_item 3", "a_item 4"];
        elem = angular.element('<div><select form-select="demoArray" id="form" ng-model="formModel" ng-options="label for label in demoArray"></select></div>');
        $compile(elem)(scope);
        scope.$digest();
    }));

    it('renders the select element as required (language changed to de).',
        function() {
            inject(function () {
                /*
                var broadCastedLanguage;
                I18nPropertyService.registerLanguageChangeListener(function (newLanguage) {
                    broadCastedLanguage = newLanguage;
                });
                I18nPropertyService.setCurrentLanguage('de');
                expect(broadCastedLanguage).toEqual('de');

                $compile(elem)(scope);
                scope.$digest();
                */

                expect(elem.children('.btn-group').children('button.dropdown-toggle.selectpicker')).toContainText('DE_noneSelectedText');
                expect(elem.children('.btn-group').children('button.dropdown-toggle.selectpicker')).not.toContainText('Nothing selected');
            });
        }
    );

    it('renders the select element as required (language changed to en).',
        function() {
            inject(function () {
                /*
                var broadCastedLanguage;
                I18nPropertyService.registerLanguageChangeListener(function (newLanguage) {
                    broadCastedLanguage = newLanguage;
                });
                I18nPropertyService.setCurrentLanguage('en');
                expect(broadCastedLanguage).toEqual('en');

                scope.$digest();
                */

                expect(elem.children('.btn-group').children('button.dropdown-toggle.selectpicker')).toContainText('noneSelectedText');
                expect(elem.children('.btn-group').children('button.dropdown-toggle.selectpicker')).not.toContainText('Nothing selected');
            });
        }
    );
});
}());