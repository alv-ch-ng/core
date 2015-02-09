;(function() {

describe("formPlaceholderLabel directive", function() {

    beforeEach(module('alv-ch-ng.ui-forms', function() {}));
        it('renders the html element as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();

                    var elem = angular.element('<div><input form-placeholder-label="test" ng-model="test" id="test" /></div>');

                    $compile(elem)(scope);
                    expect(elem.children().hasClass('form-group')).toBeTruthy();
                    expect(elem.children().hasClass('placeholder-label')).toBeTruthy();
                    expect(elem.find('input').hasClass("active")).toBeFalsy();
                    expect(elem.find('.placeholder-label-text')).toBeTruthy();
                });
            }
        );

        it('renders the html element with placeholder-type attribute as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    var elem = angular.element('<div><input form-placeholder-label="test" form-placeholder-label-type="label" ng-model="test" id="test" /></div>');
                    scope.test = '';

                    $compile(elem)(scope);
                    expect(elem.children().hasClass('form-group')).toBeTruthy();
                    expect(elem.children().hasClass('placeholder-label')).toBeTruthy();
                    expect(elem.find('input').hasClass("active")).toBeFalsy();
                    expect(elem.find('.placeholder-label-text')).toBeTruthy();
                });
            }
        );

        it('renders the html element with placeholder-type attribute as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    var elem = angular.element('<div><input form-placeholder-label="test" form-placeholder-label-type="outline" ng-model="test" id="test" /></div>');
                    scope.test = '';

                    $compile(elem)(scope);
                    expect(elem.children().hasClass('form-group')).toBeTruthy();
                    expect(elem.children().hasClass('placeholder-outline')).toBeTruthy();
                    expect(elem.find('input').hasClass("active")).toBeFalsy();
                    expect(elem.find('.placeholder-label-text')).toBeTruthy();
                });
            }
        );

        it('renders the html element with placeholder-type attribute as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    var elem = angular.element('<div><input form-placeholder-label="test" form-placeholder-label-type="inside" ng-model="test" /></div>');
                    scope.test = '';

                    $compile(elem)(scope);
                    expect(elem.children().hasClass('form-group')).toBeTruthy();
                    expect(elem.children().hasClass('placeholder-inside')).toBeTruthy();
                    expect(elem.find('input').hasClass("active")).toBeFalsy();
                    expect(elem.find('.placeholder-label-text')).toBeTruthy();
                    expect(elem.find('.placeholder-label-text').attr('id')).toBeUndefined();
                });
            }
        );

        it('renders the html element with placeholder-type attribute as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    var elem = angular.element('<div><input form-placeholder-label="test" form-placeholder-label-type="test" ng-model="test" id="test" /></div>');
                    scope.test = '';

                    $compile(elem)(scope);
                    expect(elem.children().hasClass('form-group')).toBeTruthy();
                    expect(elem.children().hasClass('placeholder-label')).toBeTruthy();
                    expect(elem.find('input').hasClass("active")).toBeFalsy();
                    expect(elem.find('.placeholder-label-text')).toBeTruthy();
                });
            }
        );
    });


}());
