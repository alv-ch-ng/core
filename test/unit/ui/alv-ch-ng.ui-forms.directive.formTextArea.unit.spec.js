;(function() {

describe("formTextarea directive", function() {

    beforeEach(module('alv-ch-ng.ui-forms', function() {}));
        it('renders the html element as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    var elem = angular.element('<div><div form-textarea>testContent</div></div>');
                    $compile(elem)(scope);
                    expect(elem.html()).toEqual('<div form-textarea="" class="form-control">testContent</div>');
                });
            }
        );

        it('renders the html element with attributes.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    var elem = angular.element('<div><textarea form-label="test" form-textarea form-textarea-resize="sm">testContent</textarea></div>');
                    $compile(elem)(scope);
                    scope.$digest();
                    expect(elem.find('textarea').hasClass('form-resize-sm')).toBeTruthy();
                    expect(elem.find('textarea').hasClass('form-overflow')).toBeFalsy();
                });
            }
        );

        it('renders the html element and checks if parent div has height.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope;
                    var elem = angular.element('<div><textarea form-label="test" form-textarea form-textarea-resize="md" form-textarea-overflow>testContent</textarea></div>');
                    $compile(elem)(scope);
                    scope.$digest();
                    expect(elem.find('textarea').hasClass('form-resize-md')).toBeTruthy();
                    expect(elem.find('textarea').hasClass('form-overflow')).toBeTruthy();
                    expect(elem.find('div.form-group').attr('style')).toContain('height');
                });
            }
        );

        it('renders the html element with wrong attributes.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    var elem = angular.element('<div><textarea form-label="test" form-textarea form-textarea-overflow>testContent</textarea></div>');
                    $compile(elem)(scope);
                    scope.$digest();
                    expect(elem.find('textarea').hasClass('form-overflow')).toBeFalsy();
                });
            }
        );
    });

}());
