// function fn (y) {
//     return function (x){
//         return x + y;
//     };
// };
// let data = fn(10)(2);
// console.log(data);

// function fn (x, callback) {
//     callback(x);
// };
// fn(10, function (x) {
//     console.log(x + 10);
// });

// const points = [10, 100, 1, 5, 25, 100];
// points.sort((a, b) => {
//     return a - b;
// });
// console.log(points);

// const events = require('events');
// const emitter = new events.EventEmitter();
// emitter.on('node', function (data) {
//     console.log(data);
// });
// emitter.emit('node', 'nodejs');

// class Events extends events.EventEmitter {
//     constructor (name) {
//         super();
//         this.name = name;
//     }
// }
// let event = new Events('node');
// event.on('data', data => {
//     console.log(data);
// });
// event.emit('data', 'nodejs, javascript');


