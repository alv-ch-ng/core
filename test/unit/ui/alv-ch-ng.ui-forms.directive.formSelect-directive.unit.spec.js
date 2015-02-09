;(function () {
describe('formSelect directive', function () {
    var elem, scope;

    beforeEach(module('alv-ch-ng.ui-forms'));

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope;
        scope.demoArray = ["a_item 1", "a_item 2", "a_item 3", "a_item 4"];
        elem = angular.element('<div><select form-select="demoArray" id="form" ng-model="formModel" ng-options="label for label in demoArray"></select></div>');
        $compile(elem)(scope);
        scope.$digest();
    }));

    it('renders the select element as required.', function () {
        expect(elem.children('.btn-group')).toBeTruthy();
        expect(elem.children('.bootstrap-select')).toBeTruthy();
        expect(elem.children('.form-control')).toBeTruthy();
        expect(elem.children('.btn-group').children('button.dropdown-toggle.selectpicker')).toBeTruthy();
        expect(elem.children('.btn-group').children('button.dropdown-toggle.selectpicker').children('span.filter-option')).toBeTruthy();
        expect(elem.children('.btn-group').children('div.dropdown-menu').children('ul')).toBeTruthy();
        expect(elem.children('.btn-group').children('div.dropdown-menu').children('ul').children('li[data-original-index=1]')).toBeTruthy();
        expect(elem.children('.btn-group').children('div.dropdown-menu').children('ul').children('li[data-original-index=1]')).toContainText(scope.demoArray[0]);
    });
});
}());