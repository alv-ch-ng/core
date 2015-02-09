;(function () {

    describe("ScrollService", function () {

        beforeEach(module('alv-ch-ng.ui-scroll'));

        it('check scrollY', inject(function (ScrollService) {
            expect(ScrollService.scrollY()).toBe(0);
        }));
    });

}());
