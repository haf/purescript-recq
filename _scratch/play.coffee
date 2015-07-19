snapshot =
  _type: 'logibit.receipts.Receipt'
  version: 56
  data:
    images: ['http://example.com/a.jpg', 'http://example.com/b.jpg']
    description: 'Fika på stan'
    total: 140.33
    totalTax: 30.03

readModel =
  version: 56
  snapshot: snapshot
  oe: []

evt =
  _type: 'logibit.receipts.InvalidCommandGiven'
  opportunistic: false
  clientMetadata:
    refNode: '0.2.4.2.txt$description'
  data:
    command: 'logibit.receipts.SetDescription'
    message: 'Description cannot contain cussing'

module.exports =
  exec: (snap, cmd) ->
    54
  apply: (snap, es, oes) ->
    54
