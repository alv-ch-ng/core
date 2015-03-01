;(function() {

describe("grid directive", function() {

    beforeEach(module('alv-ch-ng.core', function() {}));


    it('renders the base grid as a row and a column element.',
        function() {
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                var elem = angular.element('<div grid><div column="12">testContent</div></div>');
                $compile(elem)(scope);
                expect(elem.children("div[attr='grid']").children('div.row')).toBeTruthy();
                expect(elem.children("div").children('div.row').children("div.col-*-12")).toBeTruthy();
            });
        }
    );

    it('renders the element grid as a row and a column element.',
        function() {
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                var elem = angular.element('<grid><div column="12">testContent</div></grid>');
                $compile(elem)(scope);
                expect(elem.children("grid").children('div.row')).toBeTruthy();
                expect(elem.children("grid").children('div.row').children("div.col-*-12")).toBeTruthy();
            });
        }
    );

    it('renders the base grid with show grid as required.',
        function() {
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                var elem = angular.element('<div grid="show-grid"><div column="12">testContent</div></div>');
                $compile(elem)(scope);
                expect(elem.hasClass("show-grid")).toBeTruthy();
            });
        }
    );

    it('renders a column with offset as required.',
        function() {
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                var elem = angular.element('<div grid><div column="6" column-offset="6">test</div></div>');
                $compile(elem)(scope);
                expect(elem.children("div[attr='grid']").children('div.row')).toBeTruthy();
                expect(elem.children("div").children('div.row').children("div.col-*-6")).toBeTruthy();
                expect(elem.children("div").children('div.row').children("div.col-*-offset-6")).toBeTruthy();
            });
        }
    );
    it('renders a column with push as required.',
        function() {
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                var elem = angular.element('<div grid><div column="6" column-push="6">test</div></div>');
                $compile(elem)(scope);
                expect(elem.children("div[attr='grid']").children('div.row')).toBeTruthy();
                expect(elem.children("div").children('div.row').children("div.col-*-6")).toBeTruthy();
                expect(elem.children("div").children('div.row').children("div.col-*-push-6")).toBeTruthy();
            });
        }
    );
    it('renders a column with pull as required.',
        function() {
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                var elem = angular.element('<div grid><div column="6" column-pull="6">test</div></div>');
                $compile(elem)(scope);
                expect(elem.children("div[attr='grid']").children('div.row')).toBeTruthy();
                expect(elem.children("div").children('div.row').children("div.col-*-6")).toBeTruthy();
                expect(elem.children("div").children('div.row').children("div.col-*-pull-6")).toBeTruthy();
            });
        }
    );
    it('renders a column less than 12 columns and last attribute as required.',
        function() {
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                var elem = angular.element('<div grid><div column="6" column-last="true">test</div></div>');
                $compile(elem)(scope);
                expect(elem.children("div[attr='grid']").children('div.row')).toBeTruthy();
                expect(elem.children("div").children('div.row').children("div.col-*-6")).toBeTruthy();
            });
        }
    );
    });

}());
