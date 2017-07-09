;(function (global, callBack) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = callBack() :
        typeof define === 'function' && define.amd ? define(callBack) :
            (global.Vuex = callBack());
})(window || this, function (global) {
    //extend 递归功能函数
    function _extend(origin, later) {
        for (prop in later) {
            if (Object.prototype.hasOwnProperty.call(origin, prop) && later[prop] instanceof Object) {
                _extend(origin[prop], later[prop])
            }
            else {
                origin[prop] = qwe.copy(later[prop])
            }
        }
    }

    //是否有属性值的功能递归函数
    function _hasValue(obj, value) {
        for (prop in obj) {
            if (obj[prop] instanceof Object) {
                _hasValue(obj[prop], value);
            }
            else {
                return JSON.stringify(obj[prop]) == JSON.stringify(value);
            }
        }
    }

    var qwe = {};
    //extend是合并两个对象中相同的部分，然后添加各不相同的部分，所添加的类型包括对象 ，数组 ，string ，number，函数不再此列
    //返回一个新的对象此对象里面的属性已经合并
    qwe.extend = function () {
        var origin = {}
        Array.from(arguments).forEach(function (obj) {
            _extend(origin, obj);
        })
        return origin;
    }
    //判断此对象中的深度属性中是否有某个值，知识判断自有属性，不判断原型中的属性是否有这个value值。返回一个boolean值
    qwe.hasValue = function (obj, value) {
        obj = obj || {};
        return _hasValue(obj, value)
    }
    //对于类数组的foreach操作的实现
    qwe.forEach = function (arrayLike, callBack) {
        Array.from(arrayLike).forEach(function (target) {
            callBack(target);
        })
    }
    //copy数据
    qwe.copy = function (obj) {
        obj = obj || {};
        return JSON.parse(JSON.stringify(obj))
    }
    return qwe;
})
