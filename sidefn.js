let toString = Object.prototype.toString;
let isString = function (obj) {
    console.log(toString.call(obj));
    return toString.call(obj) == '[object String]';
};
console.log(isString({
    name: 'qin'
}));