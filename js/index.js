$(document).ready(function () {



    $('.pause').on('click', function () {
        if ($(this).find('span').attr('class') === "iconfont icon-zanting") {
            $(this).find('span').attr('class', 'iconfont icon-weibiaoti518');
            clearInterval(timer);
        } else {
            $(this).find('span').attr('class', 'iconfont icon-zanting');
            timer = setInterval(function () {
                $('.banner-right').click();
            }, 4000)
        }
    })
    // 定时器
    let timer = setInterval(function () {
        $('.banner-right').click();
    }, 4000)

    var flag = true; //节流阀

    // 创建小圆点
    $('.banner-ul').find('a').each(function (i) {
        let li = $('<li></li>')
        li.attr('index', i);
        $('.ol').append(li);
    })

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
            $('.banner-ul').animate({
                marginLeft: -num * parseFloat($('.banner').css('width')) + 'px'
            }, function () {
                flag = true;
            })
        }

    })

    // 克隆第一个ul下的li添加到ul的最后
    $('.banner-ul').append($('.banner-ul').find('a').eq(0).clone())


    // 右击切换
    $('.banner-right').click(function () {
        if (flag) {
            flag = false;
            // 更新图片索引
            if (num == $('.banner-ul>a').length - 1) {
                num = 0;
                $('.banner-ul').css('margin-left', -num * parseFloat($('.banner').css('width')) + 'px')
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
            $('.banner-ul').animate({
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
                num = $('.banner-ul>a').length - 1;
                $('.banner-ul').css('margin-left', -num * parseFloat($('.banner').css('width')) + 'px')
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
            $('.banner-ul').animate({
                marginLeft: -num * parseFloat($('.banner').css('width')) + 'px'
            }, 600, function () {
                flag = true
            })
        }

    })


    // 鼠标拖动切换图片
    $('.banner-ul').on('mousedown', function (e) {
        clearInterval(timer)
        let x1 = e.pageX;
        e.preventDefault()
        // e.stopPropagation()


        let x2;
        let x3;
        let width = parseFloat($('.banner-ul').css('marginLeft'));
        let width1 = parseFloat($('.banner').css('width')) / 2;
        // console.log(x1);

        $('.banner-ul').on('mousemove', function (e) {
            e.preventDefault()
            x2 = e.pageX;
            x3 = x2 - x1;
            $('.banner-ul').css('marginLeft', width + x3 + 'px')
        })



        $('.banner-ul').on('mouseup', function (e) {
            e.preventDefault()
            $('.banner-ul').off('mousemove')
            if (x3 < 0) {
                if (x3 >= -width1) {
                    $('.banner-ul').animate({
                        'marginLeft': width + 'px'
                    }, 600)
                } else {
                    $('.banner-right').click();
                }
            } else {
                if (x3 < width1) {
                    $('.banner-ul').animate({
                        'marginLeft': width + 'px'
                    }, 600)
                } else {
                    $('.banner-left').click();
                }
            }

            timer = setInterval(function () {

                $('.banner-right').click();
            }, 4000)

            $('.banner-ul').off('mouseup')
        })

    })



    // 点击切图

    tu($('.pos-left').eq(0), $('.pos-right').eq(0), $('.p1').eq(0))
    tu($('.pos-left').eq(1), $('.pos-right').eq(1), $('.p1').eq(1))
    tu($('.pos-left').eq(2), $('.pos-right').eq(2), $('.p1').eq(2))
    tu($('.pos-left').eq(3), $('.pos-right').eq(3), $('.p1').eq(3))

    function tu(left, right, tar) {
        window.onresize = function () {
            let i = 0;
            let j = 0;
            left.css('cursor', 'auto')
            left.addClass('hui')
            tar.animate({
                'marginLeft': 0 + '%'
            }, 0, function () {
                flag = true
            })
        }
        // tar.css('marginLeft', '50%')
        let i = 0;
        let j = 0;
        let flag = true;
        left.on('click', function () {
            if (flag) {
                flag = false;
                let wSmall = parseInt($('.pos').css('width'));
                let wBig = parseInt(tar.css('width'));
                let biLi = wBig / wSmall;
                if (biLi == 3) {
                    if (j == 0) {
                        $(this).css('cursor', 'auto')
                        $(this).addClass('hui')
                        flag = true;
                        return false
                    } else {
                        $('.hui').css('cursor', 'pointer')
                        $('.hui').removeClass('hui')
                        j--;
                        tar.animate({
                            'marginLeft': -50 * j + '%'
                        }, 500, function () {
                            flag = true
                        })
                    }

                } else {
                    if (i == 0) {

                        $(this).css('cursor', 'auto')
                        $(this).addClass('hui')
                        flag = true
                        return false
                    } else {
                        i--;
                        $('.hui').css('cursor', 'pointer')
                        $('.hui').removeClass('hui')
                        tar.animate({
                            'marginLeft': -25 * i + '%'
                        }, 500, function () {
                            flag = true
                        })
                    }

                }
            }
        })


        right.on('click', function () {
            if (flag) {
                flag = false;
                let wSmall = parseInt($('.pos').css('width'));
                let wBig = parseInt(tar.css('width'));
                let biLi = wBig / wSmall;

                if (biLi == 3) {
                    if (j == 4) {
                        $(this).css('cursor', 'auto')
                        $(this).addClass('hui')
                        flag = true;
                        return false
                    } else {
                        j++;
                        tar.animate({
                            'marginLeft': -50 * j + '%'
                        }, 500, function () {
                            flag = true
                        })
                    }

                } else {
                    if (i == 2) {
                        $(this).css('cursor', 'auto')
                        $(this).addClass('hui')
                        flag = true
                        return false
                    } else {
                        $('.hui').css('cursor', 'pointer')
                        $('.hui').removeClass('hui')
                        i++;
                        tar.animate({
                            'marginLeft': -25 * i + '%'
                        }, 500, function () {
                            flag = true
                        })
                    }

                }
            }

        })


    }






    /* 回到顶部 */
    $(document).scroll(function () {
        let heights = $(window).height();
        if ($(window).scrollTop() < heights) {
            $(".fix1").css('display', 'none')
            return false
        } else {
            $(".fix1").css('display', 'flex')

        }

    })
    $(".fix1").on("click", function () {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
    });

    if ($(window).width() > 1000) {
        $('.fix').css('display', 'flex')
    } else {
        $('.fix').css('display', 'none')
    }
    // 右侧
    window.onresize = function () {
        if ($(window).width() > 1000) {
            $('.fix').css('display', 'flex')
        } else {
            $('.fix').css('display', 'none')
        }
    }






    // 底部
    let strBottom = {};
    strBottom['产品'] = ['智能手机', '可穿戴设备', '平板/电脑/存储', '智能产品配件', '电视/影音/显示器'];
    strBottom['我的三星'] = ['我的订单', '我的积分', '优惠券', '个人资料', '收货地址']
    strBottom['网上商城指南'] = ['常见问题', '三星网上商城帐号', '产品和订单', '商城支付及发票', '三星专属管家服务', '物流', '售后服务'];
    strBottom['服务支持'] = ['关于商城', '关于三星', '售后网点查询', '联系我们'];




    $('._foot>h2').each(function (index, item) {
        let value = $(item).find('p').text()
        let ul = $('<ul></ul>');
        for (let i = 0; i < strBottom[value].length; i++) {
            let li = $('<li></li>');
            li.text(strBottom[value][i])
            ul.append(li);
        }
        $(item).append(ul);
    })


    let ddd = null;
    let flagFooter = true;

    $('._foot>h2').on('click', function (e) {
        flagFooter = true;


        $(this).find('li').each(function (index, item) {
            if (e.target == item) {
                flagFooter = false;
            }
        })
        if (e.target == $(this).find('ul')[0]) {
            flagFooter = false;
        }
        if ($('.sb') !== null && flagFooter) {
            $('.sb').animate({
                'height': 70 + 'px'
            }, 500)
            ddd = $('.sb')[0];
            $('.sb').find('span').attr('class', 'iconfont icon-xiangxia')
            $('.sb').removeClass('sb');
        }


        let index = $(this).find('ul li').length;
        if (this != ddd) {
            $(this).animate({
                'height': 70 + 40 * index + 'px'
            }, 500)
            $(this).find('span').attr('class', 'iconfont icon-xiangshang')
            $(this).addClass('sb');
        }

    })




    

})