// function fn () {
//     throw new Error('haha');
// };
// try{
//     fn();
// } catch (e) {
//     console.log('error:', e);
// }

let async = function (callback) {
    // process.nextTick(callback);
    // setImmediate(callback);
    setTimeout(callback, 1000);
};

try{
    async(function () {
        throw new Error('haha');
    });
} catch (e) {
    console.log('error: ', e);
}