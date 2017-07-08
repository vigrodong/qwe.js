;(function (global, callBack) {
    callBack(global, undefined);
})(window || this, function (global) {
    function _extend(origin, later) {
        //对于每个later对象属性是否origin有
        for( prop in later){
            if(Object.prototype.hasOwnProperty.call(origin,prop) && later[prop] instanceof Object){
                _extend(origin[prop],later[prop])
            }
            else{
                origin[prop]  = JSON.parse(JSON.stringify(later[prop]))
            }
        }
    }
    var qwe = {};
    //extend是合并两个对象中相同的部分，然后添加各不相同的部分，所添加的类型包括对象 ，数组 ，string ，number，函数不再此列
    qwe.extend = function () {
        var origin = {}
        arguments.forEach(function(obj){
            _extend(origin,obj);
        })
        return origin;
    }

})
