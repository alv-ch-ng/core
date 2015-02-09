;(function() {

describe("adminSymbol directive", function() {

    beforeEach(module('alv-ch-ng.ui-core', function() {}));

        it('prepends a span with css classes \'icon\' and  \'icon--exclam\'.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    // get an element representation
                    var elem = angular.element('<div admin-symbol>testContent</glyph>');
                    // finally compile the HTML
                    $compile(elem)(scope);
                    expect(elem.html()).toEqual('<span class="icon icon--exclam" aria-hidden="true"></span>testContent');
                });
            }
        );

        it('appends a span with css classes \'icon\' and  \'icon--exclam\' when glyph-align is set to right.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    // get an element representation
                    var elem = angular.element('<div admin-symbol glyph-align="right">testContent</glyph>');
                    // finally compile the HTML
                    $compile(elem)(scope);
                    expect(elem.html()).toEqual('testContent<span class="icon icon--exclam" aria-hidden="true"></span>');
                });
            }
        );

        it('uses the icon that is defined in the \'admin-symbol\' attribute.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    // get an element representation
                    var elem = angular.element('<div admin-symbol="smartphone-landscape">testContent</glyph>');
                    // finally compile the HTML
                    $compile(elem)(scope);
                    expect(elem.html()).toEqual('<span class="icon icon--smartphone-landscape" aria-hidden="true"></span>testContent');
                });
            }
        );

    });

}());
