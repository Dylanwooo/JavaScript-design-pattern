/**
 * Created by Dylanwoo on 2017/9/11.
 */
//篮球基类
let BasketBall = function () {
    this.intro = '篮球在美国很出名';
    this.showTeam = function () {
        console.log('湖人森林狼...');
    }
};
BasketBall.prototype.showMore = function () {
    console.log('啦啦队很hot')
};

//足球基类
let FootBall = function () {
    this.intro = '足球世界杯';
    this.showTeam = function () {
        console.log('拜仁巴西...');
    }
};
FootBall.prototype.showFamous = function () {
    console.log('风靡全球');
};
//网球基类
let Tennis = function () {
    this.intro = '网球很hot';
    this.showTeam = function () {
        console.log('武汉网球公开赛...');
    }
};
Tennis.prototype.showInfo= function () {
    console.log('李娜来过');
};

//球类工厂
let SportFactory = function (name) {
    switch (name){
        case 'NBA':
            return new BasketBall();
        case 'worldCup':
            return new FootBall();
        case 'FrenchOpen':
            return new Tennis();
    }
};

let foot = SportFactory('NBA');
console.log(foot.intro);
foot.showTeam();
let tennis = SportFactory('FrenchOpen');
tennis.showInfo();

