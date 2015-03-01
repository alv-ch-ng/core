;(function() {

describe("grid directive", function() {
    var scope, ctrl, timeout, compile;

    beforeEach(function(){
        module('alv-ch-ng.ui-core');

        inject(function($rootScope, $controller, $compile, $timeout){
            scope=$rootScope.$new();
            timeout=$timeout;
            ctrl=$controller;
            compile=$compile;
        });
    });

    it('renders a row and two columns as required.',
        function() {
            var elem = angular.element('<div grid><div column="6">test</div><div column="6">test</div></div>');
            compile(elem)(scope);
            expect(scope.columns.length).toBe(2);
            expect(elem.find('div.row')).toBeTruthy();
        }
    );
    it('renders a column less than 12 columns and last attribute as required.',
        function() {
            var elem = angular.element('<div grid><div column="6" column-last="true">test</div></div>');
            compile(elem)(scope);
            expect(scope.columns.length).toBe(1);
            expect(elem.find('div.row')).toBeTruthy();
        }
    );
    it('dont renders a row with a column less than 12 width.',
        function() {
            var elem = angular.element('<div grid><div column="6">test</div></div>');
            compile(elem)(scope);
            expect(scope.columns.length).toBe(1);
            expect(elem.get('div.row')).toBeFalsy();
        }
    );

    describe('check $watch', function(){
        var $scope, elem;
        beforeEach(inject(function($compile, $rootScope) {
            $scope = $rootScope;
            elem = angular.element('<div grid><div column="6">test</div><div column="6">test</div></div>');
            $compile(elem)($scope);
            $scope.$digest();
        }));

        it('renders a row with a column width of 12.',
            function() {
                expect($scope.columns.length).toEqual(2);
                expect($scope.columns[0].column).toEqual(6);
                expect($scope.columns[1].column).toEqual(6);
                expect(elem.find('.row')).toBeTruthy();
            }
        );
    });
});

}());
