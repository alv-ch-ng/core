angular.module('alv-ch-ng.ui-core').run(['$templateCache', function($templateCache) {
  'use strict';

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
    "            <a ng-click=\"scrollToc(toc.id)\" ng-class=\"{'current': toc.id===currentSpy }\">\n" +
    "                <span ng-hide=\"toc.translate\">{{toc.title}}</span>\n" +
    "                <span ng-show=\"toc.translate\" translate=\"{{toc.translate}}\"></span>\n" +
    "            </a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>"
  );

}]);
