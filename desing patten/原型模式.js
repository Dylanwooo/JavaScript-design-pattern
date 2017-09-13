/**
 * Created by Dylanwoo on 2017/9/13.
 */

let baseClass = function (imgArr,container) {
    this.imagesArr = imgArr;
    this.container = container;
};
baseClass.prototype = {
    createImage: function () {
        console.log('baseClass createImage function');
    },
    changeImage: function () {
        console.log('baseClass changeImage function');
    }
};

let ChildClass = function (imgArr,container) {
    //构造函数继承baseClass
    baseClass.call(this,imgArr,container);
};

ChildClass.prototype = new baseClass();
ChildClass.prototype.changeImage = function () {
    console.log('ChildClass changeImage function');
};

let ChildClass2 = function (imgArr,container,arrow) {
    baseClass.call(this,imgArr,container);
    this.arrow = arrow;
};
ChildClass2.prototype = new baseClass();
ChildClass2.prototype.changeImage = function () {
    console.log('childClass2 changeImage function');
};

let test = new ChildClass2();
test.changeImage();