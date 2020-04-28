import toLookup from '../../../array/toLookup';

describe('array/toLookup()', function() {
    it('should create an object with the key specified as a string', function() {
        const arr = [
            { name: 'a', thing: 1 },
            { name: 'b', thing: 2 }
        ];

        const result = toLookup(arr, 'name');
        expect(result).toEqual({
            a: { name: 'a', thing: 1 },
            b: { name: 'b', thing: 2 }
        });
    });

    it('should create an object with the key specified as a function', function() {
        const arr = [{ name: 'a', thing: 1 }, null];

        const result = toLookup(arr, function(v) {
            if (v === null) {
                return 'null';
            } else {
                return v.name;
            }
        });
        expect(result).toEqual({
            null: null,
            a: { name: 'a', thing: 1 }
        });
    });

    it('should return empty object when array is null/undefined', function() {
        expect(toLookup(null, 'foo')).toEqual({});
        expect(toLookup(undefined, 'foo')).toEqual({});
    });
});
