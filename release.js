// ===================================================
// FOR PRODUCTION
// Total.js - framework for Node.js platform
// https://www.totaljs.com
// ===================================================

const options = {};

options.ip = '216.24.57.253';
options.port = parseInt(80);
// options.config = { name: 'Total.js' };
// options.sleep = 3000;

require('total.js').http('release', options);
// require('total.js').cluster.http(5, 'release', options);