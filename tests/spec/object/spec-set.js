define(
    [
        'mout/object/set'
    ],
    function (set) {

        describe('object/set()', function () {

            it('should create nested properties if not existent and set the value', function () {
                var o = {};
                set(o, 'foo.bar', 123);
                expect( o.foo.bar ).toBe(123);
            });

            it('should not create nested properties if it does exist', function () {
                var f = {
                        lorem : 'ipsum'
                    },
                    o = {
                        foo : f
                    };
                set(o, 'foo.bar', 123);
                expect( o.foo.bar ).toBe(123);
                expect( o.foo ).toBe(f);
                expect( o.foo.lorem ).toBe('ipsum');
            });

            it('shold work even if not nested path', function () {
                var o = {};
                set(o, 'foo', 'bar');
                expect( o.foo ).toEqual( 'bar' );
            });

            it('should be safe for non string parameters', function () {
                var o = {};

                set(o, 1, 'bar');
                expect( o ).toEqual( { '1' : 'bar' } );

                set(o, null, 'bar');
                expect( o ).toEqual( { '1' : 'bar', null : 'bar' } );

                set(o, undefined, 'bar');
                expect( o ).toEqual( { '1' : 'bar', null : 'bar', undefined: 'bar' } );

                set(o, {}, 'bar');
                expect( o ).toEqual( { '1' : 'bar', null : 'bar', undefined: 'bar', '[object Object]' : 'bar' } );

            });

            it('should not pollute the prototype', function () {
                const obj = {}
                set(obj,'__proto__.polluted','Yes! Its Polluted');
                expect( obj ).toEqual( {} );
            });

        });

    }
);

