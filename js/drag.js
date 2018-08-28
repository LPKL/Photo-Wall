/**
 * Created by Administrator on 2018/8/28.
 */
function dragStart(e) {
    e=e||window.event;
    this.startL=this.offsetLeft;
    this.startT=this.offsetTop;
    this.mx=e.pageX;
    this.my=e.pageY;
    on(this,'onmousemove',dragMove);
    on(this,'onmouseup',dragEnd);
    fire(this,'myIndex');
}
function dragMove(e) {
    e=e||window.event;
    e.preventDefault?e.preventDefault():e.returnValue=false;
    let curL=e.pageX-this.mx+this.startL,
        curT=e.pageY-this.my+this.startT;
    this.style.left=curL+'px';
    this.style.top=curT+'px';
    fire(this,'myIsHit')
}
function dragEnd() {
    off(this,'onmousemove',dragMove);
    off(this,'onmouseup',dragEnd);
    fire(this,'myIsHit');
    fire(this,'myChangePos')
}