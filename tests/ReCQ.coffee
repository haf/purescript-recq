chai = require 'chai'
recq = require '../src/ReCQ'

describe 'ReCQ', ->
  it 'has execCommand', ->
    chai.expect(recq).to.have.property('execCommand')