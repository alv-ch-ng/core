angular.module('alv-ch-ng.security').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('template/security/form-login-message.html',
    "<div class=\"alert alert-{{formLoginMessage.severity}} alert-dismissable\">\n" +
    "    <span><strong>{{formLoginMessage.messageTitle}}</strong>&nbsp;{{formLoginMessage.messageContent}}</span>\n" +
    "    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n" +
    "</div>"
  );


  $templateCache.put('template/security/form-login.html',
    "<form not-auth>\n" +
    "    <input form-input form-label=\"loginUser\" type=\"email\" id=\"loginUser\" ng-model=\"loginUser\" />\n" +
    "    <input form-input form-label=\"loginPwd\" type=\"password\" id=\"loginPwd\" ng-model=\"loginPwd\" />\n" +
    "    <input form-input form-label=\"loginAuthToken\" form-prepend=\"Authy\" type=\"number\" id=\"authToken\" ng-model=\"authToken\" ng-show=\"authTokenShow\" />\n" +
    "    <button class=\"btn-primary\" ng-click=\"login()\" ng-show=\"!authTokenShow\">Login</button>\n" +
    "    <button class=\"btn-primary\" ng-click=\"authenticate()\" glyph-icon=\"eye-open\" ng-show=\"authTokenShow\">Authenticate</button>\n" +
    "</form>"
  );

}]);
