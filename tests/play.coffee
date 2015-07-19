describe 'play', ->
  play = require '../src/play'
  it 'can assert', ->
    assert('foo' != 'bar', 'foo is not bar')

  it 'can require purs', ->
    bar = require '../src/Foo.purs'
    assert(bar != null, 'has bar')
