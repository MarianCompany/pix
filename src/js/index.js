import '../scss/index.scss';

const req = require.context("./components", true, /_[^_].*\.(js)$/);
req.keys().forEach(key => req(key));
