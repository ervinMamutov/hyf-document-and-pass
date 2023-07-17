const hello = require('./index');

describe('Hello', function () {
  it('says hello world', function () {
    expect(hello('World')).toEqual('Hello, World!');
  });
  it('says hello toys', function () {
    expect(hello('toys')).toEqual('Hello, toys!');
  });
});
