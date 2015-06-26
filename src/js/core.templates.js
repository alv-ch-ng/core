angular.module('alv-ch-ng.core').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('template/core/language-switcher.html',
    "<ul class=\"nav navbar-nav\" id=\"language-switch\">\n" +
    "    <li id=\"language_{{language}}\" ng-class=\"{'active':getTranslationLanguage()===language}\" ng-repeat=\"language in allLanguages\">\n" +
    "        <a ng-click=\"setTranslationLanguage(language)\" translate=\"{{language}}\" translate-attr-title=\"common_i18n_language_short_{{language}}\" toggle-helper=\".nav-collapse\"></a>\n" +
    "    </li>\n" +
    "</ul>"
  );


  $templateCache.put('template/core/sidebar-toggle.html',
    "<button type=\"button\" class=\"sidebar-toggle\" data-toggle=\"collapse\" data-target=\".sidebar\">\n" +
    "    <span class=\"sr-only\">Toggle sidebar</span>\n" +
    "    <span class=\"icon-bar\"></span>\n" +
    "    <span class=\"icon-bar\"></span>\n" +
    "    <span class=\"icon-bar\"></span>\n" +
    "</button>"
  );


  $templateCache.put('template/core/toc.html',
    "<div id=\"toc\">\n" +
    "    <span translate=\"common_i18n_contents\"></span>\n" +
    "    <ul class=\"toc-list\">\n" +
    "        <li ng-repeat=\"toc in tocs\" spy=\"{{toc.id}}\">\n" +
    "            <a ng-click=\"scrollToc(toc.id)\" toggle-helper=\".sidebar\">\n" +
    "                <span ng-hide=\"toc.i18nMsg\">{{toc.title}}</span>\n" +
    "                <span ng-show=\"toc.i18nMsg\" i18n-msg=\"{{toc.i18nMsg}}\"></span>\n" +
    "            </a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );

}]);
