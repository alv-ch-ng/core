;(function() {

    describe("formPrepend directive", function() {

        beforeEach(module('alv-ch-ng.ui-forms', function() {}));
        it('renders the html element as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = '';
                    var elem = angular.element('<div><div form-prepend>testContent</div></div>');
                    $compile(elem)(scope);
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
                    var elem = angular.element('<div class="input-group"><div form-prepend>testContent</div></div>');
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
                    var elem = angular.element('<input form-prepend="euro" form-prepend-icon="true" />');
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
                    var elem = angular.element('<input form-prepend="test" form-prepend-btn="test()" />');
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
                    var elem = angular.element('<input form-prepend="test" form-prepend-btn="test()" form-prepend-btn-submit="true" />');
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
                    var elem = angular.element('<input form-prepend="test" form-prepend-btn="test()" form-prepend-btn-submit="yes" />');
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
                    var elem = angular.element('<input form-prepend="euro" form-prepend-btn="test()" form-prepend-icon="true" />');
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
                    var elem = angular.element('<div><input class="input-sm" form-prepend="euro" form-prepend-btn="test()" /></div>');
                    $compile(elem)(scope);
                    expect(elem.children('.input-group')).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn").children("button")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn").children("button").hasClass("btn-sm")).toBeTruthy();
                });
            }
        );
        it('renders the html element with input-lg.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = '';
                    var elem = angular.element('<div><input class="input-lg" form-prepend="euro" form-prepend-btn="test()" /></div>');
                    $compile(elem)(scope);
                    expect(elem.children('.input-group')).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn").children("button")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-btn").children("button").hasClass("btn-lg")).toBeTruthy();
                });
            }
        );
    });

}());
