;(function() {

describe("formAppend directive", function() {

    beforeEach(module('alv-ch-ng.ui-forms', function() {}));
        it('renders the html element as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = '';
                    var elem = angular.element('<div><div form-append>testContent</div></div>');
                    $compile(elem)(scope);
                    //expect(elem.html()).toEqual('<div class="input-group"><div form-append="">testContent</div><span class="input-group-addon"></span></div>');
                    expect(elem.children('.input-group')).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-addon")).toBeTruthy();
                });
            }
        );
        it('renders the html element as required without duplicate input-group.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = '';
                    var elem = angular.element('<div class="input-group"><div form-append>testContent</div></div>');
                    expect(elem.hasClass('input-group')).toBeTruthy();
                    $compile(elem)(scope);
                    expect(elem.hasClass('input-group')).toBeTruthy();
                    expect(elem.children("span.input-group-addon")).toBeTruthy();
                });
            }
        );
        it('renders the html element with an glyph icon as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = '';
                    var elem = angular.element('<input form-append="euro" form-append-icon="true" />');
                    $compile(elem)(scope);
                    expect(elem.children('.input-group')).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-addon")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-addon").children("span.glyphicon.glyphicon-euro")).toBeTruthy();
                });
            }
        );
        it('renders the html element with a button as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = '';
                    var elem = angular.element('<input form-append="test" form-append-btn="test()" />');
                    $compile(elem)(scope);

                    expect(elem.children('.input-group')).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn").children("button")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn").children("button").attr("ng-click","test()")).toBeTruthy();
                });
            }
        );
        it('renders the html element with a submit button as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = '';
                    var elem = angular.element('<input form-append="test" form-append-btn="test()" form-append-btn-submit="true" />');
                    $compile(elem)(scope);

                    expect(elem.children('.input-group')).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn").children("button")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn").children("button").attr("ng-click","test()")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn").children("button").attr("type","submit")).toBeTruthy();
                });
            }
        );
        it('renders the html element with a regular button and not with a submit button as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = '';
                    var elem = angular.element('<input form-append="test" form-append-btn="test()" form-append-btn-submit="yes" />');
                    $compile(elem)(scope);

                    expect(elem.children('.input-group')).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn").children("button")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn").children("button").attr("ng-click","test()")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn").children("button").attr("type","button")).toBeTruthy();
                });
            }
        );
        it('renders the html element with a button and a glyph icon as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = '';
                    var elem = angular.element('<input form-append="euro" form-append-btn="test()" form-append-icon="true" />');
                    $compile(elem)(scope);
                    expect(elem.children('.input-group')).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn").children("button")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn").children("button").attr("ng-click","test()")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn").children("button").children("span.glyphicon.glyphicon-euro")).toBeTruthy();
                });
            }
        );
        it('renders the html element with input-sm.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = '';
                    var elem = angular.element('<div><input class="input-sm" form-append="test" form-append-btn="test()" /></div>');
                    $compile(elem)(scope);

                    expect(elem.children('.input-group')).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn").children("button")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn").children("button").hasClass('btn-sm')).toBeTruthy();
                });
            }
        );
        it('renders the html element with input-lg.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = '';
                    var elem = angular.element('<div><input class="input-lg" form-append="test" form-append-btn="test()" /></div>');
                    $compile(elem)(scope);

                    expect(elem.children('.input-group')).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn").children("button")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn").children("button").hasClass('btn-lg')).toBeTruthy();
                });
            }
        );
    });

}());
