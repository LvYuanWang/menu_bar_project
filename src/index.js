(function () {
    var h1 = document.querySelectorAll('h1'), ul = document.querySelector('ul'), isClick = true, ulTwo = ul.querySelectorAll('ul');
    ul.addEventListener('click', ulClick)
    function ulClick(e) {
        if (e.target.nodeName === 'H1') {
            if (isClick) {
                isClick = false;
                if (e.target.nextElementSibling.style.height === '120px') {
                    createAnimation({
                        from: 120,
                        to: 0,
                        totalMS: 400,
                        onmove: function (n) {
                            // n为这一次变化的值
                            e.target.nextElementSibling.style.height = n + 'px';
                        },
                        onend: function () {
                            // 变化完成后运行该函数
                            isClick = true;
                            console.log('回收高度');
                        }
                    });
                } else {
                    ulTwo.forEach(e => {
                        if (e.style.height === '120px') {
                            createAnimation({
                                from: 120,
                                to: 0,
                                totalMS: 400,
                                onmove: function (n) {
                                    // n为这一次变化的值
                                    e.style.height = n + 'px';
                                },
                                onend: function () {
                                    // 变化完成后运行该函数
                                    console.log('回收高度');
                                }
                            });
                        }
                    });
                    createAnimation({
                        from: 0,
                        to: 120,
                        totalMS: 400,
                        onmove: function (n) {
                            // n为这一次变化的值
                            e.target.nextElementSibling.style.height = n + 'px';
                        },
                        onend: function () {
                            // 变化完成后运行该函数
                            isClick = true;
                            console.log('展开高度');
                        }
                    });
                }
            } else {
                console.log('正在展开');
            }
        }
    }
})()