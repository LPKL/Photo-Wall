/**
 * Created by Administrator on 2018/8/28.
 */
var box = document.getElementById('box'),
    liArr = box.getElementsByTagName('li');
function setPosition() {
    [...liArr].reverse().forEach((item)=> {
        item.style.left = item.offsetLeft + 'px';
        item.style.top = item.offsetTop + 'px';
        item.style.position = 'absolute';
        on(item, 'onmousedown', dragStart);
        on(item, 'myIndex', addZIndex);
        on(item,'myIsHit',isHit);
        on(item,'myChangePos',changePosition)
    })
}
setPosition();

var n = 1;
function addZIndex() {
    this.style.zIndex = n++;
}

function isHit() {
    this.arr = [];
    this.moveL = this.offsetLeft;
    this.moveR = this.moveL + this.offsetWidth;
    this.moveT = this.offsetTop;
    this.moveB = this.moveT + this.offsetHeight;
    [...liArr].forEach((item)=> {
        if (item === this)return;
        item.targetL = item.offsetLeft;
        item.targetR = item.targetL + item.offsetWidth;
        item.targetT = item.offsetTop;
        item.targetB = item.targetT + item.offsetHeight;
        if (this.moveL > item.targetR || this.moveR < item.targetL || this.moveT > item.targetB || this.moveB < item.targetT) {
            item.style.opacity = 1;
        } else {
            item.style.opacity = 0.5;
            this.arr.push(item);
        }
    })
}
function changePosition() {
    this.arr = this.arr || [];
    this.arr.forEach((item)=> {
        item.style.opacity = 1;
        let l = this.offsetLeft - item.offsetLeft,
            t = this.offsetTop - item.offsetTop;
        item.instance = Math.pow(l, 2) + Math.pow(t, 2)
    })
    this.arr.sort((a, b)=> {
        return a.instance - b.instance;
    })
    if (this.arr[0].length == 0) {
        $(this).animate({
            left: this.startL + 'px',
            top: this.startT + 'px'
        })
    } else {
        $(this).animate({
            left: this.arr[0].offsetLeft,
            top: this.arr[0].offsetTop
        }, 200);
        $(this.arr[0]).animate({
            left: this.startL + 'px',
            top: this.startT + 'px'
        })
    }
}












