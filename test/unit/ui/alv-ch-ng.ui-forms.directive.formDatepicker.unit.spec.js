;(function () {
describe('formDatepicker directive', function () {
    var elem, scope;

    beforeEach(module('alv-ch-ng.ui-forms',function () {

    }));

    beforeEach(inject(function ($rootScope, $compile) {
        scope = $rootScope.$new();
        elem = angular.element('<div><input form-datepicker form-datepicker-component="true" name="test" type="text" ng-model="testValue" /></div>');
        $compile(elem)(scope);
        scope.$digest();
    }));

    it('renders the element as required.', inject(function () {
        scope.$digest();

        expect(elem.children('.form-control')).toBeTruthy();
        expect(elem.children('.input-group')).toBeTruthy();
        expect(elem.children('.input-group').children('.input-group-addon')).toBeTruthy();
        expect(elem.children('.input-group').children('.input-group-addon').children('glyphicon.glyphicon-calendar')).toBeTruthy();
    }));

    it('renders the element as required with attribute form-datepicker-component-inset="true".', inject(function ($compile) {
        elem = angular.element('<div><input form-datepicker form-datepicker-component="true" form-datepicker-component-inset="true" name="test" type="text" ng-model="testValue" /></div>');
        $compile(elem)(scope);
        scope.$digest();

        expect(elem.children('.form-control')).toBeTruthy();
        expect(elem.children('.input-group')).toBeTruthy();
        expect(elem.children('.input-group').children('.input-group-addon.input-group-inset')).toBeTruthy();
    }));

    it('renders the element as required with attribute form-datepicker-component-left="true".', inject(function ($compile) {
        elem = angular.element('<div><input form-datepicker form-datepicker-component="true" form-datepicker-component-left="true" name="test" type="text" ng-model="testValue" /></div>');
        $compile(elem)(scope);
        scope.$digest();

        expect(elem.children('.form-control')).toBeTruthy();
        expect(elem.children('.input-group')).toBeTruthy();
        expect(elem.children('.input-group').children('.input-group-addon')).toBeTruthy();
    }));

    it('renders the element as required with attribute form-datepicker-component-icon="th".', inject(function ($compile) {
        elem = angular.element('<div><input form-datepicker form-datepicker-component="true" form-datepicker-component-icon="th" name="test" type="text" ng-model="testValue" /></div>');
        $compile(elem)(scope);
        scope.$digest();

        expect(elem.children('.form-control')).toBeTruthy();
        expect(elem.children('.input-group')).toBeTruthy();
        expect(elem.children('.input-group').children('.input-group-addon')).toBeTruthy();
        expect(elem.children('.input-group').children('.input-group-addon').children('glyphicon.glyphicon-th')).toBeTruthy();
    }));

    it('renders the element as required with attribute form-datepicker-component-symbol="calendar".', inject(function ($compile) {
        elem = angular.element('<div><input form-datepicker form-datepicker-component="true" form-datepicker-component-symbol="calendar" name="test" type="text" ng-model="testValue" /></div>');
        $compile(elem)(scope);
        scope.$digest();

        expect(elem.children('.form-control')).toBeTruthy();
        expect(elem.children('.input-group')).toBeTruthy();
        expect(elem.children('.input-group').children('.input-group-addon')).toBeTruthy();
        expect(elem.children('.input-group').children('.input-group-addon').children('icon.icon--calendar')).toBeTruthy();
    }));

    it('renders the element as required.',
        function() {
            inject(function ($compile) {
                elem = angular.element('<div><input form-datepicker name="test" type="text" ng-model="testValue" /></div>');
                $compile(elem)(scope);
                scope.$digest();

                expect(elem.children('.form-control')).toBeTruthy();
            });
        }
    );

    it('renders the element as required with object config.',
        function() {
            inject(function ($compile) {
                scope.config = {'calendarWeeks': true };
                scope.$digest();

                elem = angular.element('<div><input form-datepicker name="test" type="text" ng-model="testValue" /></div>');
                $compile(elem)(scope);
                scope.$digest();

                expect(elem.children('.form-control')).toBeTruthy();
            });
        }
    );

    it('renders the element as required with json-string config.',
        function() {
            inject(function ($compile) {
                var config = "{'calendarWeeks': true }";
                elem = angular.element('<div><input form-datepicker="'+config+'" name="test" type="text" ng-model="testValue" /></div>');
                $compile(elem)(scope);
                scope.$digest();

                expect(elem.children('.form-control')).toBeTruthy();
            });
        }
    );
    /*
    it('renders the element as required (language changed from en to de).',
        function() {
            inject(function (I18nPropertyService) {
                var broadCastedLanguage;
                I18nPropertyService.registerLanguageChangeListener(function (newLanguage) {
                    broadCastedLanguage = newLanguage;
                });
                I18nPropertyService.setCurrentLanguage('de');
                expect(broadCastedLanguage).toEqual('de');
                scope.$digest();

                expect(elem.children('.form-control')).toBeTruthy();
            });
        }
    );
    */
});
}());