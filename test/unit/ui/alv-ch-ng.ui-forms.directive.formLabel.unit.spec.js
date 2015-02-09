;(function() {

describe("formLabel directive", function() {

    beforeEach(module('alv-ch-ng.ui-forms', function() {}));
        it('renders the label element as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    var elem = angular.element('<div><div form-label>testContent</div></div>');
                    $compile(elem)(scope);
                    expect(elem.children('.form-group')).toBeTruthy();
                    expect(elem.children('.form-group').children("label")).toBeTruthy();
                });
            }
        );
        it('renders the label element and a helptext as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    var elem = angular.element('<div form-label form-helptext="test">testContent</div>');
                    $compile(elem)(scope);
                    expect(elem.children('.form-group').children("span.help-block")).toBeTruthy();
                });
            }
        );
        it('renders the label element and NO helptext in inline-form.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    var elem = angular.element('<form class="form-inline"><div form-label form-helptext="test">testContent</div></form>');
                    $compile(elem)(scope);
                    expect(elem.hasClass('form-inline')).toBeTruthy();
                    expect(elem.children('div').hasClass('form-group')).toBeTruthy();
                    expect(elem.children('div.form-group').children('label').hasClass('sr-only')).toBeTruthy();
                    expect(elem.children('div.form-group').children("span.help-block.sr-only")).toBeTruthy();
                });
            }
        );
        it('renders the label element on a checkbox element as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    var elem = angular.element('<input type="checkbox" form-label form-helptext="test" />');
                    $compile(elem)(scope);
                    expect(elem.children('.checkbox')).toBeTruthy();
                    expect(elem.children('.checkbox').children("label")).toBeTruthy();
                });
            }
        );
        // horizontal form
        it('renders the label element in a horizontal form as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    var elem = angular.element('<form class="form-horizontal"><div form-label>testContent</div></form>');
                    $compile(elem)(scope);
                    expect(elem.children("form").children('.form-group').children("label.form-control")).toBeTruthy();
                    expect(elem.children("form").children('.form-group').children("div.col-*")).toBeTruthy();
                });
            }
        );
        it('renders the label element on a checkbox element in a horizontal form as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    var elem = angular.element('<form class="form-horizontal"><input type="checkbox" form-label form-helptext="test" /></form>');
                    $compile(elem)(scope);
                    expect(elem.children("form").children('.form-group')).toBeTruthy();
                    expect(elem.children("form").children('.form-group').children("div.col-*")).toBeTruthy();
                    expect(elem.children("form").children('.form-group').children("div.col-*-offset-*")).toBeTruthy();
                    expect(elem.children("form").children('.form-group').children("div").children(".checkbox")).toBeTruthy();
                });
            }
        );
        // inline form
        it('renders the label element in a inline form as required.',
            function() {
                inject(function ($compile, $rootScope) {
                    var scope = $rootScope.$new();
                    var elem = angular.element('<form class="form-inline"><div form-label>testContent</div></form>');
                    $compile(elem)(scope);
                    expect(elem.children("form").children('.form-group').children("label.sr-only")).toBeTruthy();
                });
            }
        );
    });
}());
