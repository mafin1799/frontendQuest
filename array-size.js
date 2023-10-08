Object.defineProperty(Array.prototype, 'size', {
    get: function () {
        return this.length;
    },
    set: function (size) {
        if (!(typeof size === 'number' | size instanceof Number)) {
            throw new TypeError('Недопустимый тип size')
        }
        if (size < 0) {
            throw new RangeError('Недопустимый размер массива');
        }
        this.length = size;
    },
});

console.log([0,1].size);

let array = ['0', '2', '5'];
array.size = 0;
console.log(array);