/**
 * Created by Dylanwoo on 2017/9/13.
 */

//创建命名空间Dylanwoo
let Dylanwoo = {
    say: function (text) {
        console.log(text);
    },
    trigger: function (value) {
        this.say(value);
    }
};
Dylanwoo.trigger('hahahahha');

//JS中的静态变量
let Conf = function () {
    let box = {
        MAX_NUM:100,
        MAX_SALARY:5000
    };
    return {
        get: function (name) {
            return box[name] ? box[name] : null;
        }
    }
};
let test = new Conf();
console.log(test.get('MAX_NUM'));