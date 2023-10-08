const MAX_INT32 = 4294967295;

Object.defineProperty(Array.prototype, 'size', {
    get: function () {
        let size = 0;

        for (let i in this) {
            if (this.hasOwnProperty(i)) {
                size++;
            }
        }

        return size;
    },
    set: function (size) {
        if (!(typeof size === 'number' | size instanceof Number)) {
            throw new TypeError('Недопустимый тип size')
        }
        if (size < 0) {
            throw new RangeError('Недопустимый размер массива');
        }
        if (size > MAX_INT32) {
            throw new RangeError('Превышен максимальный размер массива');
        }
        if (size < this.size) {
            this.splice(size);
        } else if (size > this.size) {
            for (let i = this.size; i < size; i++) {
                this[i] = null;
            }
        }
    },
});

console.log([0, 1].size);

let array = ['0', '2', '5'];
array.size = 9999999999999;
console.log(array);