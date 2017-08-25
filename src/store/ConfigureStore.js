const project = require('../../project.config')


if (project.env === 'production') {
  module.exports =  require('./configureStore.prod');
}else {
  module.exports =  require('./configureStore.dev');
}
