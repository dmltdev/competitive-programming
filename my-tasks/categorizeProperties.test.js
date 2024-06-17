import categorizeProperties from './categorizeProperties.js';

describe('categorizeProperties', () => {
  test('Object with all types of properties', () => {
    const allTypesObj = {
      num: 42,
      str: 'hello',
      bool: true,
      undef: undefined,
      nul: null,
      nan: NaN,
      sym: Symbol('sym'),
      func: function () {},
      obj: { nested: 'object' },
      arr: [1, 2, 3],
    };
    const expected = {
      number: 1,
      boolean: 1,
      undefined: 1,
      null: 1,
      NaN: 1,
      symbol: 1,
      function: 1,
      object: 1,
      array: 1,
      string: 1,
    };
    expect(categorizeProperties(allTypesObj)).toEqual(expected);
  });

  test('Empty object', () => {
    const emptyObj = {};
    const expected = {
      number: 0,
      boolean: 0,
      undefined: 0,
      null: 0,
      NaN: 0,
      symbol: 0,
      function: 0,
      object: 0,
      array: 0,
      string: 0,
    };
    expect(categorizeProperties(emptyObj)).toEqual(expected);
  });

  test('Object with only numbers', () => {
    const numbersObj = {
      a: 1,
      b: 2,
      c: 3.14,
      d: -7,
      e: 0,
    };
    const expected = {
      number: 5,
      boolean: 0,
      undefined: 0,
      null: 0,
      NaN: 0,
      symbol: 0,
      function: 0,
      object: 0,
      array: 0,
      string: 0,
    };
    expect(categorizeProperties(numbersObj)).toEqual(expected);
  });

  test('Object with nested objects and arrays (no recursive search)', () => {
    const nestedObj = {
      outerObj: { innerProp: 'innerValue' },
      outerArr: [1, { nested: 'value' }],
      plainProp: 'value',
    };
    const expected = {
      number: 0,
      boolean: 0,
      undefined: 0,
      null: 0,
      NaN: 0,
      symbol: 0,
      function: 0,
      object: 1,
      array: 1,
      string: 1,
    };
    expect(categorizeProperties(nestedObj)).toEqual(expected);
  });

  test('Object with symbol properties', () => {
    const symbolObj = {
      [Symbol('a')]: 123,
      [Symbol('b')]: 'hello',
    };
    const expected = {
      number: 1,
      boolean: 0,
      undefined: 0,
      null: 0,
      NaN: 0,
      symbol: 0,
      function: 0,
      object: 0,
      array: 0,
      string: 1,
    };
    expect(categorizeProperties(symbolObj)).toEqual(expected);
  });

  test('Object with only undefined values', () => {
    const undefinedObj = {
      a: undefined,
      b: undefined,
      c: undefined,
    };
    const expected = {
      number: 0,
      boolean: 0,
      undefined: 3,
      null: 0,
      NaN: 0,
      symbol: 0,
      function: 0,
      object: 0,
      array: 0,
      string: 0,
    };
    expect(categorizeProperties(undefinedObj)).toEqual(expected);
  });

  test('Object with null and NaN values', () => {
    const nullNaNObj = {
      a: null,
      b: NaN,
      c: null,
      d: NaN,
    };
    const expected = {
      number: 0,
      boolean: 0,
      undefined: 0,
      null: 2,
      NaN: 2,
      symbol: 0,
      function: 0,
      object: 0,
      array: 0,
      string: 0,
    };
    expect(categorizeProperties(nullNaNObj)).toEqual(expected);
  });
});
