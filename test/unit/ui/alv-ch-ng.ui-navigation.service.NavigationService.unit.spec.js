;(function () {

    var provider;

    describe("NavigationServiceProvider", function () {
        beforeEach(module('alv-ch-ng.ui-navigation', function (NavigationServiceProvider) {
            provider = NavigationServiceProvider;
        }));

        it('provides a model setter method that checks the param`s sanity.', function () {
            inject(function () {
            });

            var successfulModelArray = [
                { id: 1, name: "testModel" }
            ];
            provider.setModel(successfulModelArray);
            expect(successfulModelArray).toEqual(provider.getModel());

            var failingModelArray = [
                { name: "testModel" }
            ];
            expect(function () {
                provider.setModel(failingModelArray);
            }).toThrow('Illegal model to set.');
            expect(function () {
                provider.setModel();
            }).toThrow('Illegal model to set.');
            expect(function () {
                provider.setModel([]);
            }).toThrow('Illegal model to set.');
            expect(function () {
                provider.setModel("test");
            }).toThrow('Illegal model to set.');

        });
    });

    describe("NavigationService", function () {

        var model, item;

        beforeEach(module('alv-ch-ng.ui-navigation', function (NavigationServiceProvider) {
            model = [
                {
                    id: "root",
                    text: "testRoot",
                    location: "/",
                    templateUrl: "/pages/unit-test/root.html",
                    children: [
                        {id: "toplevelOne", text: "testToplevelOne", location: "/toplevelOne", templateUrl: "/pages/unit-test/toplevelOne.html"},
                        {id: "toplevelTwo", text: "testToplevelTwo", location: "/toplevelTwo", templateUrl: "/pages/unit-test/toplevelTwo.html",
                            children: [
                                {id: "childrenOne", text: "testChildrenOne", location: "/toplevelTwo/childrenOne", templateUrl: "/pages/unit-test/childrenOne.html"},
                                {id: "childrenTwo", text: "testChildrenTwo", location: "/toplevelTwo/childrenTwo", templateUrl: "/pages/unit-test/childrenTwo.html"}
                            ]
                        }
                    ]
                }
            ];
            NavigationServiceProvider.setModel(model);

            item = model[0].children[1].children[0];
        }));


        it('provides the model.', function () {
            inject(function (NavigationService) {
                expect(NavigationService.getModel()).toEqual(model);
            });
        });

        it('provides the root item.', function () {
            inject(function (NavigationService) {
                expect(NavigationService.getRootItem().id).toBe("root");
            });
        });

        it('provides the toplevel items.', function () {
            inject(function (NavigationService) {
                var toplevel = NavigationService.getTopLevelItems();
                expect(toplevel.length).toBe(2);
                expect(toplevel[0].id).toBe("toplevelOne");
                expect(toplevel[1].id).toBe("toplevelTwo");
            });
        });

        it('uses the first element in the model array as the default selection.', function () {
            inject(function (NavigationService) {
                expect(NavigationService.getCurrentItem().id).toEqual('root');
            });
        });
        it('delivers the current breadcrumbs as an array.', function () {
            inject(function (NavigationService) {
                NavigationService.setCurrentItem(item);
                var breadcrumbs = NavigationService.getBreadCrumbs();

                expect(NavigationService.getCurrentItem().id).toEqual('childrenOne');
                expect(breadcrumbs.length).toBe(3);
                expect(breadcrumbs[0].id).toBe("root");
                expect(breadcrumbs[1].id).toBe("toplevelTwo");
                expect(breadcrumbs[2].id).toBe("childrenOne");
            });
        });
        it('provides a method to get the current item.', function () {
            inject(function (NavigationService) {
                expect(NavigationService.getCurrentItem().id).toBe('root');
            });
        });

        it('provides a method to change the current item.', function () {
            inject(function (NavigationService) {
                NavigationService.setCurrentItem(item);
                expect(NavigationService.getCurrentItem().id).toBe('childrenOne');
                expect(function () {
                    NavigationService.setCurrentItem();
                }).toThrow('item must not be null.');
                expect(function () {
                    NavigationService.setCurrentItem({name: 'testName'});
                }).toThrow('param item must provide an id attribute.');
            });
        });

        it('provides a method to if a certain item is the current one.', function () {
            inject(function (NavigationService) {
                var falseItem = NavigationService.getModel();
                NavigationService.setCurrentItem(item);
                expect(NavigationService.isCurrentItem(item)).toBeTruthy();
                expect(NavigationService.isCurrentItem(falseItem[0].children[1])).toBeFalsy();
            });
        });
        it('provides a method to if a certain item is element of breadCrumbs.', function () {
            inject(function (NavigationService) {
                var model = NavigationService.getModel();
                var parentItem = model[0].children[1];
                var falseItem = model[0].children[1].children[1];
                NavigationService.setCurrentItem(item);
                expect(NavigationService.isOnCurrentPath(parentItem)).toBeTruthy();
                expect(NavigationService.isOnCurrentPath(falseItem)).toBeFalsy();
                expect(NavigationService.isOnCurrentPath()).toBeFalsy();
            });
        });

        it('provides a method to if a certain item is a kid of the currently selected one.', function () {
            inject(function (NavigationService) {
                var model = NavigationService.getModel();
                var parentItem = model[0].children[1];
                var falseItem = model[0].children[0];
                NavigationService.setCurrentItem(parentItem);
                expect(NavigationService.isChildOfCurrent(item)).toBeTruthy();
                expect(NavigationService.isChildOfCurrent(falseItem)).toBeFalsy();
                expect(NavigationService.isChildOfCurrent()).toBeFalsy();
            });
        });
    });

    describe("NavigationService with no model", function () {

        beforeEach(module('alv-ch-ng.ui-navigation', function () {
        }));

        it('provides false instead of the root item.', function () {
            inject(function (NavigationService) {
                expect(NavigationService.getRootItem()).toBeFalsy();
            });
        });

        it('provides an empty array instead of the toplevel items.', function () {
            inject(function (NavigationService) {
                expect(NavigationService.getTopLevelItems()).toEqual([]);
            });
        });

    });

}());

