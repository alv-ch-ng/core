;(function() {

describe("formTag directive", function() {

    beforeEach(module('alv-ch-ng.ui-forms', function() {}));
        it('renders the html element as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = '';
                    var elem = angular.element('<div><div form-tag>testContent</div></div>');
                    $compile(elem)(scope);
                    expect(elem.html()).toEqual('<div class="form-control"><span><!-- ngRepeat: item in undefined --></span><div form-tag="" class="tag-input">testContent</div></div>');
                });
            }
        );

        it('renders the html element as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.tags = ['test1','test2'];
                    var elem = angular.element('<div><div form-tag="test" form-target-model="tags">testContent</div></div>');

                    $compile(elem)(scope);

                    scope.removeFromModel(0);

                    expect(scope.tags.length).toBe(1);
                    expect(scope.tags[0]).toBe('test2');
                });
            }
        );
        it('renders the html element as required and adds element to target model.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = ['test2','test3'];
                    scope.tags = ['test1'];
                    var elem = angular.element('<div><div form-tag="test" form-target-model="tags">testContent</div></div>');
                    $compile(elem)(scope);

                    expect(scope.tags.length).toBe(1);

                    scope.addToTargetModel(scope.test[0]);

                    expect(scope.tags.length).toBe(2);
                    expect(scope.tags[1]).toBe('test2');
                });
            }
        );
        it('renders the html element as required and try to add a duplicate to target model.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    scope.test = ['test2','test3'];
                    scope.tags = ['test1'];
                    var elem = angular.element('<div><div form-tag="test" form-target-model="tags">testContent</div></div>');
                    $compile(elem)(scope);

                    expect(scope.tags.length).toBe(1);

                    scope.addToTargetModel(scope.test[0]);

                    expect(scope.tags.length).toBe(2);
                    expect(scope.tags[1]).toBe('test2');

                    scope.addToTargetModel(scope.test[0]);
                    expect(scope.tags.length).toBe(2);
                });
            }
        );
    });

}());
