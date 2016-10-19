/* eslint-disable prefer-arrow-callback */

Package.describe({
  name: 'fuww:addthis',
  version: '0.0.2',
  summary: 'A lightweight package to add addthis easily to meteor',
  git: 'https://github.com/fuww/meteor-addthis.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use([
    'meteor',
    'ecmascript@0.4.0',
    'jquery@1.11.6',
    'logging@1.0.10'
  ], 'client');

  api.mainModule('client/main.js', 'client');

  api.export([
    'addthis'
  ], 'client');
});
