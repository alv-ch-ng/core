;(function() {

    describe("NavigationCtrl", function() {

        beforeEach(module('alv-ch-ng.ui-navigation', function (NavigationServiceProvider) {
            var testModel = [
                {
                    id: "root",
                    text: "testRoot",
                    location: "/",
                    templateUrl: "/pages/root.html",
                    children: [
                        {id: "toplevelOne", text: "testToplevelOne", location: "/toplevelOne", templateUrl: "/pages/toplevelOne.html"},
                        {id: "toplevelTwo", text: "testToplevelTwo", location: "/toplevelTwo", templateUrl: "/pages/toplevelTwo.html",
                            children: [
                                {id: "childrenOne", text: "testChildrenOne", location: "/toplevelTwo/childrenOne", templateUrl: "/pages/childrenOne.html", controller: "TestCtrl"},
                                {id: "childrenTwo", text: "testChildrenTwo", location: "/toplevelTwo/childrenTwo", templateUrl: "/pages/childrenTwo.html", controller: "TestCtrl"}
                            ]
                        }
                    ]
                }
            ];
            NavigationServiceProvider.setModel(testModel);
        }));

        it('navigates to a location.', function () {
            inject(function ($rootScope, $controller, $location, NavigationService) {
                var model = NavigationService.getModel();
                var $scope = $rootScope.$new();
                $controller('NavigationCtrl', {$scope:$scope});
                var item = model[0].children[1].children[0];

                $scope.navigateTo(item);
                expect(NavigationService.getCurrentItem()).toBe(item);
                expect($location.path()).toBe(item.location);
            });
        });
    });

}());
