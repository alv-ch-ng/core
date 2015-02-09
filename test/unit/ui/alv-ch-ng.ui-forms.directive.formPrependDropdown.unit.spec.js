;(function() {

describe("formPrependDropdown directive", function() {

    beforeEach(module('alv-ch-ng.ui-forms', function() {}));
        it('renders the html element as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = '';
                    var elem = angular.element('<div><div form-prepend-dropdown="test">testContent</div></div>');
                    $compile(elem)(scope);
                    expect(elem.html()).toEqual('<div class="input-group"><span class="input-group-btn"><div class="btn-group"><button class="dropdown-toggle btn" type="button" data-toggle="dropdown"><span class="caret"></span></button><ul class="dropdown-menu dropdown-menu-right"><!-- ngRepeat: item in test --></ul></div></span><div form-prepend-dropdown="test">testContent</div></div>');
                });
            }
        );
    it('renders the html element without duplicate input-group as required.',
        function() {
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                scope.test = '';
                var elem = angular.element('<div class="input-group"><div form-prepend-dropdown="test">testContent</div></div>');

                expect(elem.hasClass('input-group')).toBeTruthy();
                $compile(elem)(scope);
                expect(elem.hasClass('input-group')).toBeTruthy();
                expect(elem.children("span.input-group-btn")).toBeTruthy();

                expect(elem.children("span.input-group-btn").children("div.btn-group")).toBeTruthy();
                expect(elem.children("span.input-group-btn").children("div.btn-group").children("button.dropdown-toggle")).toBeTruthy();
            });
        }
    );
        it('renders the html element with a title as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = '';
                    var elem = angular.element('<div><div form-prepend-dropdown="test" form-prepend-dropdown-title="testTitle">testContent</div></div>');
                    $compile(elem)(scope);
                    expect(elem.html()).toEqual('<div class="input-group"><span class="input-group-btn"><div class="btn-group"><button class="dropdown-toggle btn" type="button" data-toggle="dropdown">testTitle <span class="caret"></span></button><ul class="dropdown-menu dropdown-menu-right"><!-- ngRepeat: item in test --></ul></div></span><div form-prepend-dropdown="test" form-prepend-dropdown-title="testTitle">testContent</div></div>');
                });
            }
        );
        it('renders the html element as required and adds element to target model.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = ['test2','test3'];
                    scope.targetModel = ['test1'];
                    var elem = angular.element('<div><div form-prepend-dropdown="test" form-prepend-dropdown-title="testTitle" form-target-model="targetModel">testContent</div></div>');
                    $compile(elem)(scope);

                    expect(scope.targetModel.length).toBe(1);

                    scope.addToTargetModel(scope.test[0]);

                    expect(scope.targetModel.length).toBe(2);
                    expect(scope.targetModel[1]).toBe('test2');
                });
            }
        );
        it('renders the html element as required and try to add a duplicate element to target model.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = ['test2','test3'];
                    scope.targetModel = ['test1'];
                    var elem = angular.element('<div><div form-prepend-dropdown="test" form-prepend-dropdown-title="testTitle" form-target-model="targetModel">testContent</div></div>');
                    $compile(elem)(scope);

                    expect(scope.targetModel.length).toBe(1);

                    scope.addToTargetModel(scope.test[0]);

                    expect(scope.targetModel.length).toBe(2);
                    expect(scope.targetModel[1]).toBe('test2');

                    scope.addToTargetModel(scope.test[0]);
                    expect(scope.targetModel.length).toBe(2);
                });
            }
        );
    });
}());
