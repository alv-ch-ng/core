angular.module('alv-ch-ng.ui-navigation').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('template/navigation/breadcrumb.html',
    "<ol class=\"breadcrumb\" ng-controller=\"NavigationCtrl\">\n" +
    "    <li ng-repeat=\"breadcrumb in getBreadCrumbs() \" ng-class=\"{active: isCurrentItem(breadcrumb) }\">\n" +
    "        <a ng-click=\"navigateTo(breadcrumb)\" ng-hide=\"isCurrentItem(breadcrumb)\" class=\"pointer\">{{breadcrumb.text}}</a>\n" +
    "        <span ng-show=\"isCurrentItem(breadcrumb)\">{{breadcrumb.text}}</span>\n" +
    "    </li>\n" +
    "</ol>"
  );


  $templateCache.put('template/navigation/global-navigation.html',
    "<ul class=\"nav navbar-nav\" ng-controller=\"NavigationCtrl\">\n" +
    "    <li ng-repeat=\"nav in getTopLevelItems() \" ng-class=\"{active: isCurrentItem(nav) }\">\n" +
    "        <a ng-click=\"navigateTo(nav)\" class=\"pointer\">{{nav.text}}</a>\n" +
    "    </li>\n" +
    "</ul>"
  );


  $templateCache.put('template/navigation/page-navigation.html',
    "<ul class=\"nav sidebar\" id=\"page-navigation\" ng-controller=\"NavigationCtrl\">\n" +
    "    <li ng-repeat=\"nav in getChildrenItems() \" ng-class=\"{active: isCurrentItem(nav) }\">\n" +
    "        <a ng-click=\"navigateTo(nav)\" class=\"pointer\">{{nav.text}}</a>\n" +
    "    </li>\n" +
    "</ul>"
  );


  $templateCache.put('template/navigation/page-scroll-navigation.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "    <title></title>\n" +
    "</head>\n" +
    "<body>\n" +
    "\n" +
    "</body>\n" +
    "</html>"
  );

}]);
