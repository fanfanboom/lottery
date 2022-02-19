// 选号器
function xuanhao(length, haoduan) {
    let xuanhao = [];
    while (xuanhao.length < length) {
        let h = Math.ceil(Math.random() * haoduan);
        if (xuanhao.indexOf(h) < 0) {
            xuanhao.push(h)
        }
    }
    xuanhao.sort((a,b)=>{return a-b});
    return xuanhao.join(' ');
}
// 超级大乐透玩法
function chaojidaletou() {
    return xuanhao(5, 35) + ', ' + xuanhao(2, 12);
}
// 顶层方法
function caipiao() {
    let wanfa = prompt('输入玩法：\n  1:超级大乐透');
    let n = prompt('输入投注数');
    let touzhuqingkuang=[];
    if (wanfa === '1') {
        for (let i = 1; i <= n; i++) {
            let bz=chaojidaletou();
            // 屏蔽重复投注，虽然概率很低
            if(touzhuqingkuang.indexOf(bz)<0){
                touzhuqingkuang.push(bz);
                document.write('第', i.toString(), '注：',bz, '<br>');
            }
        }
    }
}