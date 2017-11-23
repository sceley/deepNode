const EventProxy = require('eventproxy');
const proxy = new EventProxy();
proxy.all('template', 'data', 'resource', (template, data, resource) => {
    console.log('template: ', template);
    console.log('data: ', data);
    console.log('resource: ', resource);
});
proxy.emit('template', 'tem');
proxy.emit('data', 'da');
proxy.emit('resource', "reso");