$(document).ready(function () {
   
    // 定时器
    let timer = setInterval(function () {
        $('.banner-right').click();
    }, 4000)

    var flag = true; //节流阀

  
    let num = 0; //图片索引
    let cilent = 0; //小圆点索引

    // 给第一个ol下第一个li添加样式
    $('.ol').find('li').eq(0).addClass('ols');


    // 点击小圆点切换图片
    $('.ol').find('li').click(function () {
        if (flag) {
            flag = false;
            // 清除圆点样式
            if ($('.ols') !== null) {
                $('.ols').removeClass('ols');
            }
            // 添加小圆点样式
            $(this).addClass('ols');

            // 更新小圆点和图片的索引
            num = $(this).attr('index');
            cilent = $(this).attr('index');
            // console.log(-num * parseFloat($('.box').css('width')));
            $('._banner-ul').animate({
                marginLeft: -num * parseFloat($('.banner').css('width')) + 'px'
            }, function () {
                flag = true;
            })
        }

    })

    // 克隆第一个ul下的li添加到ul的最后
    $('._banner-ul').append($('._banner-ul').find('a').eq(0).clone())


    // 右击切换
    $('.banner-right').click(function () {
        if (flag) {
            flag = false;
            // 更新图片索引
            if (num == $('._banner-ul>a').length - 1) {
                num = 0;
                $('._banner-ul').css('margin-left', -num * parseFloat($('.banner').css('width')) + 'px')
            }
            num++;

            // 更新小圆点索引
            cilent++;
            if (cilent == $('.ol>li').length) {
                cilent = 0;
            }

            if ($('.ols') !== null) {
                $('.ols').removeClass('ols');
            }
            // console.log(cilent);
            $('.ol>li').eq(cilent).addClass('ols');
            $('._banner-ul').animate({
                marginLeft: -num * parseFloat($('.banner').css('width')) + 'px'
            }, 600, function () {
                flag = true
            })
        }
    })

    // 左击切换
    $('.banner-left').click(function () {
        if (flag) {
            flag = false;
            // 更新图片索引
            if (num == 0) {
                num = $('._banner-ul>a').length - 1;
                $('._banner-ul').css('margin-left', -num * parseFloat($('.banner').css('width')) + 'px')
            }
            num--;

            // 更新小圆点索引
            cilent--;
            if (cilent < 0) {
                cilent = $('.ol>li').length - 1;
            }

            if ($('.ols') !== null) {
                $('.ols').removeClass('ols');
            }
            // console.log(cilent);
            $('.ol>li').eq(cilent).addClass('ols');
            $('._banner-ul').animate({
                marginLeft: -num * parseFloat($('.banner').css('width')) + 'px'
            }, 600, function () {
                flag = true
            })
        }

    })


    // 鼠标拖动切换图片
    $('._banner-ul').on('mousedown', function (e) {
        clearInterval(timer)
        let x1 = e.pageX;
        e.preventDefault()
        // e.stopPropagation()


        let x2;
        let x3;
        let width = parseFloat($('._banner-ul').css('marginLeft'));
        let width1 = parseFloat($('.banner').css('width')) / 2;
        // console.log(x1);

        $('._banner-ul').on('mousemove', function (e) {
            e.preventDefault()
            x2 = e.pageX;
            x3 = x2 - x1;
            $('._banner-ul').css('marginLeft', width + x3 + 'px')
        })



        $('._banner-ul').on('mouseup', function (e) {
            e.preventDefault()
            $('._banner-ul').off('mousemove')
            if (x3 < 0) {
                if (x3 > -width1) {
                    $('._banner-ul').animate({
                        'marginLeft': width + 'px'
                    }, 600)
                } else {
                    $('.banner-right').click();
                }
            } else {
                if (x3 < width1) {
                    $('._banner-ul').animate({
                        'marginLeft': width + 'px'
                    }, 600)
                } else {
                    $('.banner-left').click();
                }
            }

            timer = setInterval(function () {

                $('.banner-right').click();
            }, 4000)

            $('._banner-ul').off('mouseup')
        })

    })

})