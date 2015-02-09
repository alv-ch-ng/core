angular.module('alv-ch-ng.translate').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('template/i18n/i18n-switcher.html',
    "<div id=\"i18n-switcher\">\n" +
    "    <ul id=\"i18n-switch\">\n" +
    "        <li id=\"i18n-switch-option_{{language}}\" ng-repeat=\"language in allLanguages\">\n" +
    "            <a ng-click=\"setLanguage(language)\" ng-class=\"{'active':getLanguage()===language}\" i18n-attribute=\"title\" i18n-value=\"med-i18n.language.short.{{language}}\">{{language}}</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );


  $templateCache.put('template/i18n/language-switcher.html',
    "<ul class=\"nav navbar-nav\" id=\"language-switch\">\n" +
    "    <li id=\"language_{{language}}\" ng-class=\"{'active':getTranslationLanguage()===language}\" ng-repeat=\"language in allLanguages\">\n" +
    "        <a ng-click=\"setTranslationLanguage(language)\" translate=\"{{language}}\" translate-attr-title=\"med_i18n_language_short_{{language}}\"></a>\n" +
    "    </li>\n" +
    "</ul>"
  );

}]);
