expect = require('chai').expect

describe 'play', ->
  play = require '../src/play'
  it 'can assert', ->
    assert('foo' != 'bar', 'foo is not bar')

  it 'can require purs and access its data', ->
    bar = require '../src/Foo.purs'
    assert(bar != null, 'has bar')
    expect(bar.foo).to.equal "b"
