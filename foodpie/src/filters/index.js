export default{
    kcal(v){
        return v+"千卡"
    },
    gram(v){
        return v+"克"
    },
    currency(v, obj) {
        obj = obj || {};
        obj.num = obj.num || 2;
        obj.type = obj.type || "￥";
        return obj.type + v.toFixed(obj.num);
    },
}