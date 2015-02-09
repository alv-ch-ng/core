;(function () {

    'use strict';

    var module = angular.module('alv-ch-ng.translate', ['pascalprecht.translate']);

    module.directive('languageSwitcher', ['$translate', 'supportedLanguages', function ($translate,supportedLanguages) {
        return {
            restrict: 'E',
            templateUrl: 'template/i18n/language-switcher.html',
            replace: true,
            link: function (scope, element, attrs) {
                scope.styleClass = element.attr('class');
                scope.style = element.attr('style');

                // put supported languages into allLanguages array
                scope.allLanguages = [];

                if (attrs.languages) {
                    var tokens = attrs.languages.split(',');
                    for (var i = 0; i < tokens.length; i++) {
                        scope.allLanguages[i] = tokens[i].trim();
                    }
                } else {
                    scope.allLanguages = supportedLanguages;
                }


                scope.getTranslationLanguage = function () {
                    return $translate.use();
                };

                scope.setTranslationLanguage = function (language) {
                    $translate.use(language);
                };
            }
        };
    }]);

    // todo major release changes...??!!
    module.directive('i18nMsg', function () {
        return {
            restrict: 'A',
            priority: 100,
            replace: false,
            link: function (scope, element) {
                element.addClass('deprecated');
                element.attr('title','i18n-msg - this directive is no longer supported, please see alv-ch-ng doc.');
                //console.log('i18n-msg','this directive is no longer supported, please see alv-ch-ng doc.');
            }
        };
    });

}());
