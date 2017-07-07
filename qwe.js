;(function (global, callBack) {
    callBack(global, undefined);
})(window || this, function (global) {
    var qwe = {};
    //extend是合并两个对象中相同的部分，然后添加各不相同的部分，所添加的类型包括对象 ，数组 ，string ，number，函数不再此列
    qwe.extend = function () {
        var origin = {}
        for (var i = 0; i < arguments.length; i++) {

        }

    }

})
function add(a, b) {
    if (b instanceof Array) {
        a = {}
        for (var pro in b) {
            if (b[pro] instanceof Array) {
                a[pro] = [];
                add(a[pro], b[pro]);
            }
            else if (b[pro] instanceof Object) {
                a[pro] = {}
                add(a[pro], b[pro]);
            }
            else {
                a[pro] = b[pro]
            }
        }
    }
    else if (b instanceof Array) {
        a = [];
        for (var i = 0; i < b.length; i++) {
            if (b[i] instanceof Array) {
                a[i] = [];
                add(a[i], b[i]);
            }
            else if (b[i] instanceof Object) {
                a[i] = {};
                add(a[i], b[i]);
            }
            else{
               a[i] =b[i];
            }
        }
    }
    else{
        a = b;
    }
}