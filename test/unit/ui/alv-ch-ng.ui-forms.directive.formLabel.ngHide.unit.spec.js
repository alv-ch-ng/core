;(function() {

    describe("formLabel directive - check ng-hide='false'", function() {

        var $scope, form, elem;

        beforeEach(module('alv-ch-ng.ui-forms', function() {}));


        beforeEach(inject(function($compile, $rootScope) {
            $scope = $rootScope;
            elem = angular.element('<form name="form"><input form-label="test" ng-hide="model.test" id="test" name="test" /></form>');
            $scope.model = { test: false };
            $compile(elem)($scope);
            $scope.$digest();
            form = $scope.form;
        }));

        it('renders the html element as required.',
            function() {
                inject(function () {
                    expect($scope.model.test).toBeFalsy();
                    expect(elem.find('.form-group')).toBeTruthy();
                    expect(elem.find('label')).toBeTruthy();
                    expect(elem.find('input')).toBeTruthy();
                    expect(elem.find('#show').hasClass('ng-hide')).toBeFalsy();
                });
            }
        );

        it('renders the html element as required.',
            function() {
                inject(function ($compile) {
                    elem = angular.element('<form name="form"><input form-label="test" id="test" name="test" /></form>');
                    $compile(elem)($scope);

                    expect(elem.find('.form-group')).toBeTruthy();
                    expect(elem.find('label')).toBeTruthy();
                    expect(elem.find('input')).toBeTruthy();
                    expect(elem.find('.form-group').hasClass('ng-hide')).toBeFalsy();
                    expect(elem.find('.form-group').hasClass('ng-show')).toBeFalsy();

                });
            }
        );
    });
    describe("formLabel directive - check ng-hide='true'", function() {

        var $scope, form, elem;

        beforeEach(module('alv-ch-ng.ui-forms', function() {}));


        beforeEach(inject(function($compile, $rootScope) {
            $scope = $rootScope;
            elem = angular.element('<form name="form"><input form-label="test" ng-hide="model.test" id="test" name="test" /></form>');
            $scope.model = { test: true };
            $compile(elem)($scope);
            $scope.$digest();
            form = $scope.form;
        }));

        it('DONT renders the html element as required.',
            function() {
                inject(function () {
                    expect($scope.model.test).toBeTruthy();
                    expect(elem.find('.form-group')).toBeTruthy();
                    expect(elem.find('label')).toBeTruthy();
                    expect(elem.find('input')).toBeTruthy();
                    expect(elem.find('.form-group').hasClass('ng-hide')).toBeTruthy();
                });
            }
        );

        it('DONT renders the html element as required.',
            function() {
                inject(function ($compile) {
                    elem = angular.element('<form name="form"><input form-label="test" ng-hide="model.test" id="test" name="test" /></form>');
                    $scope.model = { test: 'true' };
                    $compile(elem)($scope);
                    $scope.$digest();

                    expect($scope.model.test).toBe('true');
                    expect(elem.find('.form-group')).toBeTruthy();
                    expect(elem.find('label')).toBeTruthy();
                    expect(elem.find('input')).toBeTruthy();
                    expect(elem.find('.form-group').hasClass('ng-hide')).toBeTruthy();
                });
            }
        );
    });

    describe("formLabel directive - check form-append'", function() {

        var $scope, form, elem;

        beforeEach(module('alv-ch-ng.ui-forms', function() {}));


        beforeEach(inject(function($compile, $rootScope) {
            $scope = $rootScope;
            elem = angular.element('<form name="form"><input form-append="test" form-label="test" ng-hide="model.test" id="test" name="test" /></form>');
            $scope.model = { test: undefined };
            $compile(elem)($scope);
            $scope.$digest();
            form = $scope.form;
        }));

        it('renders the html element as required.',
            function() {
                inject(function () {
                    expect(elem.find('input').attr('form-append')).toBe('test');
                    expect(elem.find('.form-group')).toBeTruthy();
                    expect(elem.find('.input-group-addon')).toBeTruthy();
                    expect(elem.find('label')).toBeTruthy();
                    expect(elem.find('input')).toBeTruthy();
                });
            }
        );
    });

}());
