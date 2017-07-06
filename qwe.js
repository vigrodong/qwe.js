;(function(global,callBack){
    callBack(global,undefined);
})(window || this ,function(global){
    var qwe = function(){};
    qwe.prototype={
        //解决多层嵌套对象的合并问题
        extend:function(){},
        //检查对象之间的差异，两个对象是否在相同熟悉上面的值
        diff:function(){}
    }
})