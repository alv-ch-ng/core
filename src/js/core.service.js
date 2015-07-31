;(function () {

  'use strict';

  angular.module('alv-ch-ng.core')
    .factory('AlertsService', function () {

      var alerts = {};
      alerts.globals=[];

      function add(alert){
        if (alert.context){
          alerts[alert.context].push(alert.message);
        }
        else {
          alerts.globals.push(alert.message);
        }
      }

      function get(context){
        if (context){
        if (!angular.isObject(alerts[context])){
            alerts[context]=[];
        }
          return alerts[context];
        }
        return alerts.globals;
      }

      return {
        add: add,
        get: get
      };

    });

}());



