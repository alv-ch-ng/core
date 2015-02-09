;(function() {

describe("formInset directive", function() {

    beforeEach(module('alv-ch-ng.ui-forms', function() {}));
        it('renders the html element as required',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    var elem = angular.element('<div><input form-inset="map-marker" id="inset1" ng-model="insetTest" placeholder="insetTest" /></div>');
                    $compile(elem)(scope);
                    expect(elem.children('.input-group')).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-addon.input-group-inset")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-addon.input-group-inset").children("span.glyphicon.glyphicon-map-marker")).toBeTruthy();
                });
            }
        );
        it('renders the html element with a link and action as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = '';
                    var elem = angular.element('<div><input form-inset="map-marker" form-inset-action="doInset()" id="inset1" ng-model="insetTest" placeholder="insetTest" /></div>');
                    $compile(elem)(scope);
                    expect(elem.children('.input-group')).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-addon.input-group-inset")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-addon.input-group-inset").children("a")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-addon.input-group-inset").children("a").attr("ng-click","doInset()")).toBeTruthy();
                });
            }
        );
        it('renders the html element with a button as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = '';
                    var elem = angular.element('<div><input form-inset="map-marker" form-inset-action="doInset()" form-inset-btn id="inset1" ng-model="insetTest" placeholder="insetTest" /></div>');
                    $compile(elem)(scope);
                    expect(elem.children('.input-group')).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-addon.input-group-inset")).toBeTruthy();
                    expect(elem.children('.input-group').children("span.input-group-addon.input-group-inset").children("button")).toBeTruthy();
                });
            }
        );
    it('renders the html element with a small button as required.',
        function() {
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                scope.test = '';
                var elem = angular.element('<div><input class="input-sm" form-inset="map-marker" form-inset-action="doInset()" form-inset-btn id="inset1" ng-model="insetTest" placeholder="insetTest" /></div>');
                $compile(elem)(scope);
                expect(elem.children('.input-group')).toBeTruthy();
                expect(elem.children('.input-group').children("span.input-group-addon.input-group-inset")).toBeTruthy();
                expect(elem.children('.input-group').children("span.input-group-addon.input-group-inset").children("button")).toBeTruthy();
                expect(elem.children('.input-group').children("span.input-group-addon.input-group-inset").children("button").hasClass("btn-sm")).toBeTruthy();
            });
        }
    );
    it('renders the html element with a large button as required.',
        function() {
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                scope.test = '';
                var elem = angular.element('<div><input class="input-lg" form-inset="map-marker" form-inset-action="doInset()" form-inset-btn id="inset1" ng-model="insetTest" placeholder="insetTest" /></div>');
                $compile(elem)(scope);
                expect(elem.children('.input-group')).toBeTruthy();
                expect(elem.children('.input-group').children("span.input-group-addon.input-group-inset")).toBeTruthy();
                expect(elem.children('.input-group').children("span.input-group-addon.input-group-inset").children("button")).toBeTruthy();
                expect(elem.children('.input-group').children("span.input-group-addon.input-group-inset").children("button").hasClass("btn-lg")).toBeTruthy();
            });
        }
    );
    it('renders the html element with a submit button as required.',
        function() {
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                scope.test = '';
                var elem = angular.element('<div><input form-inset="map-marker" form-inset-action="doInset()" form-inset-btn="submit" id="inset1" ng-model="insetTest" placeholder="insetTest" /></div>');
                $compile(elem)(scope);
                expect(elem.children('.input-group')).toBeTruthy();
                expect(elem.children('.input-group').children("span.input-group-addon.input-group-inset")).toBeTruthy();
                expect(elem.children('.input-group').children("span.input-group-addon.input-group-inset").children("button")).toBeTruthy();
                expect(elem.children('.input-group').children("span.input-group-addon.input-group-inset").children("button").attr("type","submit")).toBeTruthy();
            });
        }
    );
    it('renders the html element as required without duplicate input-group.',
        function() {
            inject(function ($compile, $rootScope) {
                var scope = $rootScope.$new();
                var elem = angular.element('<div class="input-group"><input form-inset="map-marker" id="inset1" /></div>');
                expect(elem.hasClass('input-group')).toBeTruthy();
                $compile(elem)(scope);
                expect(elem.hasClass('input-group')).toBeTruthy();
                expect(elem.children('span.input-group-addon.input-group-inset')).toBeTruthy();
            });
        }
    );
    });

}());
