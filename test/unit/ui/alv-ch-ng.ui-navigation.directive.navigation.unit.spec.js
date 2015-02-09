;(function() {

describe("ui-navigation directives", function() {
        beforeEach(module('alv-ch-ng.ui-navigation', function(NavigationServiceProvider) {
            var model = [
                {
                    id: "root",
                    text: "testRoot",
                    location: "/",
                    templateUrl: "/demo/pages/unittest/root.html",
                    children: [
                        {id: "toplevelOne", text: "testToplevelOne", location: "/toplevelOne", templateUrl: "/demo/pages/unittest/topLevelOne.html",
                            children: [
                                {id: "childrenOne", text: "testChildrenOne", location: "/toplevelTwo/childrenOne", templateUrl: "/demo/pages/unittest/childrenOne.html"},
                                {id: "childrenTwo", text: "testChildrenTwo", location: "/toplevelTwo/childrenTwo", templateUrl: "/demo/pages/unittest/childrenTwo.html"}
                            ]
                        }
                    ]
                }
            ];
            NavigationServiceProvider.setModel(model);
        }));

        it('renders the globalNavigation as required.',
            function() {
                inject(function ($rootScope, $controller, $compile, NavigationService) {
                    var model = NavigationService.getModel();
                    var $scope = $rootScope.$new();
                    $controller('NavigationCtrl', {$scope:$scope});
                    var item = model[0].children[0];
                    $scope.navigateTo(item); // navigate to id toplevelOne

                    var elem = angular.element('<div><global-navigation></global-navigation></div>');
                    $compile(elem)($scope);
                    $scope.$digest();

                    expect(elem.children().hasClass('nav')).toBeTruthy();
                    expect(elem.children().hasClass('navbar-nav')).toBeTruthy();
                });
            }
        );

        it('renders the breadcrumbs as required.',
            function() {
                inject(function ($rootScope, $controller, $compile, NavigationService) {
                    var model = NavigationService.getModel();
                    var $scope = $rootScope.$new();
                    $controller('NavigationCtrl', {$scope:$scope});
                    var item = model[0].children[0];
                    $scope.navigateTo(item); // navigate to id toplevelOne

                    var elem = angular.element('<div><breadcrumbs></breadcrumbs></div>');
                    $compile(elem)($scope);
                    $scope.$digest();

                    expect(elem.children().hasClass('breadcrumb')).toBeTruthy();
                });
            }
        );

        it('renders the page-navigation as required.',
            function() {
                inject(function ($rootScope, $controller, $compile, NavigationService) {
                    var model = NavigationService.getModel();
                    var $scope = $rootScope.$new();
                    $controller('NavigationCtrl', {$scope:$scope});
                    var item = model[0].children[0];
                    $scope.navigateTo(item); // navigate to id toplevelOne

                    var elem = angular.element('<div><page-navigation></page-navigation></div>');
                    $compile(elem)($scope);
                    $scope.$digest();

                    expect(elem.children().attr('id')).toBe('page-navigation');
                });
            }
        );

    });

}());
