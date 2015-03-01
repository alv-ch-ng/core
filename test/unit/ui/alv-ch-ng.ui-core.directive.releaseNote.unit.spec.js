;(function() {

describe("releaseNote directive", function() {

    beforeEach(module('alv-ch-ng.ui-core', function() {}));

        it('adds the necessary classes and events.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    // get an element representation
                    var elem = angular.element('<div><div release-note>testContent</div></div>');
                    // finally compile the HTML
                    $compile(elem)(scope);
                    expect(elem.html()).toEqual('<div release-note="" class="pointer">testContent</div>');
                    var counter = 0;
                    elem.find('.pointer').each(function(index, item) {
                        counter++;
                        expect(index).toEqual(0);
                        $(item).click();
                        expect(elem.hasClass('show')).toBeTruthy();
                    });
                    expect(counter).toBe(1);
                });
            }
        );

    });

}());
