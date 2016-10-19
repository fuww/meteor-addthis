import {Meteor} from 'meteor/meteor';
import {Log} from 'meteor/logging';
import {$} from 'meteor/jquery';

const addthis = {};
const calls = [];

function callAddThisMethod(methodName, args) {
  const addthis = window.addthis;

  const method = addthis[methodName];
  if (!method) {
    Log.warn(`can not call addthis method: ${methodName}`);
    return;
  }

  return method.apply(addthis, args);
}

function queue(...args) {
  const addthis = window.addthis;

  if (addthis) {
    return callAddThisMethod(this, args);
  }

  calls.push({
    method: this,
    args
  });
}

const addthisMethods = [
  'layers',
  'configure',
  'box',
  'button',
  'counter',
  'count',
  'lightbox',
  'toolbox',
  'update',
  'init',
  'ready',
  'addEventListener',
  'removeEventListener',
  'messages',
  'events',
  'menu',
  'logShare',
  'addClickTag',
  'cleanup',
  'ApiQueueFactory',
  'addAsync',
  'register',
  'addEvents'
];

addthisMethods.forEach(method => {
  addthis[method] = queue.bind(method);
});

function onLoaded() {
  const addthis = window.addthis;

  if (!addthis) {
    Log.warn('could not load addthis');
    return;
  }

  calls.forEach(call => {
    callAddThisMethod(call.method, call.args);
  });
}

const addThisSettings = Meteor.settings.public.addthis || {};
const pubid = addThisSettings.pubid;

if (pubid) {
  $.getScript(`//s7.addthis.com/js/300/addthis_widget.js#pubid=${pubid}`).done(
    onLoaded
  );
} else {
  Log.warn('No pubid provided for addthis');
}

export {addthis};
