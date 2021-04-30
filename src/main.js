// document.querySelector方法通过css选择器获取dome
let html = document.querySelector('#html');
let style = document.querySelector("#style")
let str = `/*你好,我是一名初级前端
*我来展示一下我的前端功底
*接下来我要加样式了
*首先我们给背景改个不那么刺眼的颜色吧
*/
body{
    background: lightslategray;
}
/*
*好的，接下来我要展示的是一个八卦图的绘制过程
*首先来创建一个div
*/
#div{
    border: 1px solid red;
    width: 300px;
    height: 300px;
}
/*
*然后我们先把div变成一个圆
*/
#div {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/*
*八卦是为阳阳，一黑一白
*/
#div {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
*来加上两个神秘小球
*/
#div::before {
    width: 150px;
    height: 150px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: #000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
  }
#div::after {
    width: 150px;
    height: 150px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: #fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
/*
*好啦，转两圈展示展示！
*/
#div {
    transition: all 2s ;
    transform: rotate(-720deg);   
} 
`
let str2 = ''
// str = str.replace(/\n/g,'<br>')
let n = 0
// demo.innerHTML = str.substring(0,n)
// setTimeout()实现2秒后1变2的效果
/* demo.innerHTML = 1;       
setTimeout(()=>{
    demo.innerHTML = 2
},2000) */

//setInterval()实现间隔循环的效果，但是不灵活，不好控制停顿
/* let n=1
demo.innerHTML = n
setInterval(() => {
    n+=1
    demo.innerHTML = n
}, 1000); */

// 递归调用stereo()+substring方法实现逐步显示的效果
// subString方法：取string值第0个开始，第n个结束
let step = ()=>{
    setTimeout(() => {
        if(str[n]==='\n'){
            // 如果是回车就加上换行
            str2 += '<br>'
            //如果是空格就改成&nbsp
        }else if(str[n]===' '){
            str2 += '&nbsp;'
        }else{
            str2 += str[n]
        }
        // str[n]==='\n' ? str2 += '<br>' : str2 += str[n]
        // str2 += (str[n]==='\n' ? '<br>' : str[n])
        html.innerHTML = str2
        style.innerHTML = str.substring(0,n)
        if(n<str.length-1){
            n += 1
            // 设置竖向滚动条至最底部
            window.scrollTo(0,document.body.scrollHeight)
            html.scrollTo(0,document.body.scrollHeight)
            step();
        }      
    }, 30);
};
step();