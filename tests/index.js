var testsContext = require.context(".", true, /smoke\.js$/);
testsContext.keys().forEach(testsContext);
