;(function() {
    describe("Base64Service", function() {

        var stringValue1Char = 't';
        var base64Value1Char = 'dA==';

        var stringValue2Char = 'te';
        var base64Value2Char = 'dGU=';

        var stringValue3Char = 'tes';
        var base64Value3Char = 'dGVz';

        var stringValue4Char = 'test';
        var base64Value4Char = 'dGVzdA==';

        beforeEach(module('alv-ch-ng.security', function() {}));

        it('encodes a string into its base64 representation', function() {
            inject(function(Base64Service) {
                expect(Base64Service.encode(stringValue1Char)).toEqual(base64Value1Char);
                expect(Base64Service.encode(stringValue2Char)).toEqual(base64Value2Char);
                expect(Base64Service.encode(stringValue3Char)).toEqual(base64Value3Char);
                expect(Base64Service.encode(stringValue4Char)).toEqual(base64Value4Char);
            });
        });
        it('decodes a base64 string into its normal string representation', function() {
            inject(function(Base64Service) {
                expect(Base64Service.decode(base64Value1Char)).toEqual(stringValue1Char);
                expect(Base64Service.decode(base64Value2Char)).toEqual(stringValue2Char);
                expect(Base64Service.decode(base64Value3Char)).toEqual(stringValue3Char);
                expect(Base64Service.decode(base64Value4Char)).toEqual(stringValue4Char);
            });
        });
    });

}());
