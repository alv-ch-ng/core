;(function() {

describe("formPlaceholderLabel watch directive", function() {

        var $scope, form, elem;

        beforeEach(module('alv-ch-ng.ui-forms', function() {}));

        beforeEach(inject(function($compile, $rootScope) {
            $scope = $rootScope;
            elem = angular.element('<form name="form"><input form-placeholder-label="test" ng-model="model.test" id="test" name="test" /></form>');
            $scope.model = { test: null };
            $compile(elem)($scope);
            $scope.$digest();
            form = $scope.form;
        }));

        it('renders the html element as required.',
            function() {
                inject(function ($compile) {
                    form.test.$setViewValue('test');
                    $scope.$digest();
                    expect($scope.model.test).toEqual('test');
                    expect(elem.find('.form-group')).toBeTruthy();
                    expect(elem.find('.placeholder-label')).toBeTruthy();
                    expect(elem.find('input').hasClass("active")).toBeTruthy();
                    expect(elem.find('.placeholder-label-text')).toBeTruthy();
                    expect(elem.find('.placeholder-label-text').css('display')).toBe('inline');

                    form.test.$setViewValue('');
                    $scope.$digest();
                    expect($scope.model.test).toEqual('');
                    elem = angular.element('<form name="form"><input form-placeholder-label="test" ng-model="model.test" id="test" name="test" /></form>');
                    $compile(elem)($scope);

                    expect(elem.find('.form-group')).toBeTruthy();
                    expect(elem.find('.placeholder-label')).toBeTruthy();
                    expect(elem.find('input').hasClass("active")).toBeFalsy();
                    expect(elem.find('.placeholder-label-text')).toBeTruthy();
                    expect(elem.find('.placeholder-label-text').css('display')).toBe('none');
                });
            }
        );

    });

}());
