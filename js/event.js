/**
 * Created by Administrator on 2018/8/28.
 */
function on(ele,type,f) {
    if(/^(my)/.test(type)){
        ele[type]=ele[type]||[];
        var n=ele[type].indexOf(f);
        if(n===-1){
            ele[type].push(f);
        }
    }else{
        type=type.replace(/^(on)/,'');
        ele['on'+type]=f;
    }
}
function fire(ele,type) {
    ele[type]=ele[type]||[];
    ele[type].forEach((item)=>{
        item&&item.call(ele);
    })
}
function off(ele,type,f) {
    if(/^(my)/.test(type)){
        ele[type]=ele[type]||[];
        var n=ele[type].indexOf(f);
        if(n>-1){
            ele[type].splice(n,1);
        }
    }else{
        type=type.replace(/^(on)/,'');
        ele['on'+type]=null;
    }
}