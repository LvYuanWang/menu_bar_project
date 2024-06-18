function createAnimation(options) {
    var from = options.from;    // 起始值
    var to = options.to;    // 结束值
    var totalMS = options.totalMS || 1000;  // 变化的总时间
    var duration = options.duration || 15;  // 每次变化的间隔
    var times = Math.floor(totalMS / duration); // 变化的总次数
    var dis = (to - from) / times;  // 每一次变化改变的值
    var curTimes = 0;   // 当前变化的次数
    var timerId = setInterval(function () {
        from += dis;
        curTimes++;
        if (curTimes >= times) {
            from = to;
            clearInterval(timerId);
            options.onend && options.onend();
        }
        options.onmove && options.onmove(from);
    }, duration);
}