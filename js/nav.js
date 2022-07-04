$(document).ready(function () {


    let str1 = {};
    str1['智能手机'] = ['三星 W', 'Galaxy Z', 'Galaxy S', 'Galaxy Note', 'Galaxy A', 'Galaxy F']
    str1['智能手机']['三星 W'] = ['全系列产品', '三星W22 5 G', '三星W21 5 G'];
    str1['智能手机']['Galaxy Z'] = ['全系列产品', 'Galaxy Z Fold3 5 G', '三星Galaxy Z Flip3 5 G 奥运纪念版', 'Galaxy Z Flip3 5 G 甜粉少女', 'Galaxy Z Flip3 5 G', 'Galaxy Z Fold2 5 G', '三星Galaxy Z Flip3 5 G 奥运智联套装', 'Galaxy Z Flip 5 G']
    str1['智能手机']['Galaxy S'] = ['全系列产品', 'Galaxy S21 Ultra 5 G', ' Galaxy S21 + 5 G', 'Galaxy S21 5 G', 'Galaxy S20 FE 5 G']
    str1['智能手机']['Galaxy Note'] = ['全系列产品', 'Galaxy Note20 Ultra 5 G']
    str1['智能手机']['Galaxy A'] = ['全系列产品', 'Galaxy A52 5 G']
    str1['智能手机']['Galaxy F'] = ['全系列产品', 'Galaxy F52 5 G']

    str1['可穿戴设备'] = ['Samsung Galaxy Watch', 'Samsung Galaxy Buds']
    str1['可穿戴设备']['Samsung Galaxy Watch'] = ['全系列产品', 'Samsung Galaxy Watch4 Classic 蓝牙版 46 mm', 'Samsung Galaxy Watch4 Classic 蓝牙版 42 mm', 'Samsung Galaxy Watch4 蓝牙版 44 mm', 'Samsung Galaxy Watch4 蓝牙版 40 mm', 'Samsung Galaxy Watch4 Classic LTE版 46 mm']
    str1['可穿戴设备']['Samsung Galaxy Buds'] = ['全系列产品', 'Samsung Galaxy Buds2', 'Samsung Galaxy Buds Pro', 'Samsung Galaxy Buds Live']

    str1['平板/电脑/存储'] = ['Galaxy Tab s', 'Galaxy Tab A', '存储卡', 'USB闪存盘']
    str1['平板/电脑/存储']['Galaxy Tab s'] = ['全系列产品', 'Galaxy Tab S7 + Wi-Fi', 'Galaxy Tab S7 Wi-Fi 键盘套装', 'Galaxy Tab S7 Wi-Fi', 'Galaxy Tab S7 FE LTE', 'Galaxy Tab S7 FE Wi-Fi', 'Galaxy Tab S6 Lite Wi-Fi']
    str1['平板/电脑/存储']['Galaxy Tab A'] = ['全系列产品', 'Galaxy Tab A7 LTE', 'Galaxy Tab A7 Wi-Fi', 'Galaxy Tab A7 Lite Wi-Fi', 'Galaxy Tab A-S Pen']
    str1['平板/电脑/存储']['存储卡'] = ['全系列产品', 'EVO升级版 + MicroSD存储卡（ 2020）', 'EVO升级版 + MicroSD存储卡 32 GB', 'EVO升级版 + MicroSD存储卡 512 GB', 'EVO升级版 MicroSD存储卡（ 2020', 'EVO升级版 MicroSD存储卡 32 GB', 'EVO Plus SD存储卡']
    str1['平板/电脑/存储']['USB闪存盘'] = ['全系列产品', 'BAR升级版 + USB3 .1 Gen1 闪存盘 香槟银', 'BAR升级版 + USB3 .1 Gen1 闪存盘 深空灰', ' FIT升级版 + USB3 .1 Gen1 闪存盘', 'DUO升级版 + USB3 .1 Gen1 闪存盘']

    str1['智能产品配件'] = ['保护类', '电源类', '表带类', '其他']
    str1['智能产品配件']['保护类'] = ['全系列产品', 'Galaxy Z Fold3 5 G翻盖保护套(附S Pen)', 'Galaxy Z Fold3 5 G真皮翻盖保护套', 'Galaxy Z Fold3 5 G硅胶保护壳', 'Galaxy Z Fold3 5 G芳纶纤维保护壳']
    str1['智能产品配件']['电源类'] = ['全系列产品', '旅行充电器', '旅行充电器 25 W', '三合一无线加速充电底座', '旅行充电器 25 W（ 不含数据线）']
    str1['智能产品配件']['表带类'] = ['全系列产品', '运动表带_S', '运动表带_L', '舒适型皮革表带_S', '舒适型皮革表带_L', '活力运动表带_S', '活力运动表带_L']
    str1['智能产品配件']['其他'] = ['全系列产品', 'S Pen Pro', 'S Pen(三星折叠屏手机专属)', 'S Pen触控笔']

    str1['电视/影音/显示器'] = ['激光投影仪', '音响', '影音配件', '显示器']
    str1['电视/影音/显示器']['激光投影仪'] = ['全系列产品', '三星绚幕系列激光投影仪 SP - LSP9TFAXXZ', '三星绚幕系列激光投影仪 SP - LSP7TFAXXZ']
    str1['电视/影音/显示器']['音响'] = ['全系列产品', '回音壁条形音响 HW-Q950A', '回音壁条形音响 HW-Q900A', '回音壁条形音响 HW-Q800A', '回音壁条形音响 HW-Q700A', '回音壁条形音响 HW-Q600A', '回音壁条形音响 HW-A450', '回音壁条形音响 HW-Q60T']
    str1['电视/影音/显示器']['影音配件'] = ['全系列产品', '画壁系列电视边框2020', '画壁系列电视边框2021', '65 英寸三星画壁电视x敦煌画院联名款限量版边框', '纤薄贴合壁挂架', '演播室支架']
    str1['电视/影音/显示器']['显示器'] = ['全系列产品', '32 英寸 智慧液晶显示器 32 AM50', '32 英寸 4 K智慧液晶显示器 32 AM70', '49 英寸 2 K超宽电竞旗舰显示器 49 G95', '27 英寸 2 K电竞液晶显示器 27 G75', '32 英寸 2 K电竞液晶显示器 32 G75'];


    let str2 = ['../image/pic10.png', '../image/pic11.png', '../image/pic12.png', '../image/pic13.png', '../image/pic14.png'];

    let flag2 = true;
    // $('body').on('mouseover', function () {

    // })
    let k = 0;
    let d = 0;
    $('.nav>ul>a').each(function (index, item) {
        $(item).on('mouseover', function (e) {
            k = 1;
            $('.container').animate({
                'backgroundColor': '#999'
            }, 500)
            $('.top').animate({
                'backgroundColor': '#999'
            }, 500)
            $('.nav').animate({
                'backgroundColor': '#fff'
            }, 500)

            $('.ul-xiala').animate({
                height: '700px',
            }, 500)
            if ($('.nav-a') !== null) {
                $('.nav-a').removeClass('nav-a');
            }
            $(this).addClass('nav-a');
            $('.ul-content-left').text('');
            $('.div1').text($(this).text());
            $('.ul-content-right>p').text($(this).text())
            $('.img-pic>img').prop('src', str2[index])
            for (let i = 0; i < str1[$(this).text()].length; i++) {
                let p = $('<p></p>')
                p.text(str1[$(this).text()][i])

                if (i == 0) {
                    let span = $('<span class="iconfont icon-youce"></span>');
                    p.append(span)
                    p.addClass('abcd')
                }


                $('.ul-content-left').append(p);

                if (flag2) {
                    flag2 = false
                    $('.ul-content-content').text('');
                    for (let j = 0; j < str1[$(item).text()][p.text()].length; j++) {
                        let p1 = $('<p></p>')
                        p1.text(str1[$(item).text()][p.text()][j])
                        // 
                        $('.ul-content-content').append(p1);
                    }
                }
                // let flag100 = true;
                // let that100 = null;
                $(p).on('mouseover', function () {

                    if ($('.abcd') !== null) {
                        $('.abcd>span').attr('class', '');
                        $('.abcd').removeClass('abcd')
                    }

                    let span = $('<span class="iconfont icon-youce"></span>');
                    $(this).append(span)
                    $(this).addClass('abcd')

                    flag2 = true
                    $('.ul-content-content').text('');

                    for (let j = 0; j < str1[$(item).text()][$(this).text()].length; j++) {
                        let p = $('<p></p>')
                        p.text(str1[$(item).text()][$(this).text()][j])
                        $('.ul-content-content').append(p);
                    }
                    // if (flag100) {
                    //     flag100 = false;
                    //     setTimeout(function () {
                    //         $('.ul-content-content').animate({
                    //             'opacity': '1'
                    //         }, 500, function () {
                    //             flag100 = true
                    //         })
                    //     }, 500)
                    //     $('.ul-content-content').animate({
                    //         'opacity': '0'
                    //     }, 200, function () {
                    //         flag100 = true
                    //     })

                    // }

                    // that100 = this
                })

            }
            flag2 = true
        })

    })

    $('body').on('mouseover', function (e) {
        if ($(e.target).hasClass('nav') || $(e.target).hasClass('ul-xiala') || $(e.target).parents('.nav').hasClass('nav') || $(e.target).parents('.ul-xiala').hasClass('ul-xiala')) {
            return false

        } else {
            shang();
        }
    })
    $('.icon-chacha').on('click', shang)


    function shang() {
        $('.ul-xiala').animate({
            height: '0px',
        }, 500)
        if ($('.nav-a') !== null) {
            $('.nav-a').removeClass('nav-a');
        }
    }


    // 菜单
    $('.cai').on('click', function () {
        let cai = $('.cai-right').html()
        $('.cai-right').empty();
        $('.cai-right').animate({
            width: '360px',
        }, 200, function () {
            $('.cai-right').html(cai);




            $('.cai-right-li').on('click', function () {
                $('.caiRight>p').css('display', 'block');
                $('.cai-content-a1').animate({
                    marginLeft: '-100%'
                })

                let value = $(this).find('p').text();

                // $('.cai-content-title-a1').text('');
                // $('.cai-content-title-a1').text(value);
                $('.cai-content-right-a1').text('');
                let title = $('<div class="cai-content-title-a1"></div>')
                title.text(value)
                $('.cai-content-right-a1').append(title)
                for (let i = 0; i < str1[value].length; i++) {
                    // console.log(str1[value][i]);
                    let li = $('<li></li>')
                    let p = $('<p></p>')
                    p.text(str1[value][i])
                    li.append(p)
                    let span = $('<span class="iconfont icon-xiangxia"></span>')
                    li.append(span)
                    $('.cai-content-right-a1').append(li)

                    let xxx = $('<div class="xxx"></div>')
                    li.append(xxx);
                    for (let j = 0; j < str1[value][str1[value][i]].length; j++) {
                        let hhh = $('<div class="hhh"></div>')
                        hhh.text(str1[value][str1[value][i]][j])
                        xxx.append(hhh)
                    }



                    let _that = null;
                    let flag10 = true;
                    li.on('click', function (e) {

                        li.find('.hhh').each(function (index, item) {
                            if (e.target === item) {
                                flag10 = false;
                            }
                        })
                        if (e.target == li.find('span')[0] || e.target == li[0] || e.target == li.find('p')[0]) {
                            flag10 = true;
                        }

                        if ($('.active1') !== null && flag10) {
                            $('.active1').animate({
                                height: '50px'
                            }, 500)
                            _that = $('.active1')[0];
                            $('.active1').find('span').attr('class', 'iconfont icon-xiangxia');
                            $('.active1').removeClass('active1')


                        }
                        if (_that != this) {
                            li.addClass('active1')
                            let num = li.find('.hhh').length;
                            $(this).animate({
                                height: 70 + num * 40 + 'px'
                            }, 500)
                            li.find('span').attr('class', 'iconfont icon-xiangshang');
                        }




                    })
                }

                let picRight = $('<div class="pic-right"></div>')
                let img = $('<img src="../image/pic11.png" alt="">');
                let n = 0
                for (const key in str1) {
                    if (key === value) {
                        break
                    } else {
                        n++
                    }
                }

                img.prop('src', str2[n]);
                picRight.append(img)
                $('.cai-content-right-a1').append(picRight)
                let picTitle = $('<div class="pic-title"></div>')
                picTitle.text(value)
                $('.cai-content-right-a1').append(picTitle)
                let aMore = $('<a href="#" class="a-more"></a>')
                aMore.text('了解更多')
                $('.cai-content-right-a1').append(aMore)





                $('.caiRight>p').on('click', function () {
                    $('.caiRight>p').css('display', 'none');
                    $('.cai-content-a1').animate({
                        marginLeft: '0'
                    })
                })
            })






            $('.icon-chacha').on('click', function () {
                $('.caiRight>p').css('display', 'none');
                $('.cai-content-a1').animate({
                    marginLeft: '0'
                }, 0, function () {
                    cai = $('.cai-right').html();
                    $('.cai-right').empty();
                    $('.cai-right').animate({
                        width: '0px',
                        padding: '0px'
                    }, 200, function () {
                        $('.cai-right').html(cai);
                    })
                })

            })
        })
    })




    /* 点击跳转 */


    $('._shouji').on('click', function () {
        dwei($('#shouji')[0])
    })
    $('._shebei').on('click', function () {
        dwei($('#shebei')[0])
    })
    $('._pingban').on('click', function () {
        dwei($('#pingban')[0])
    })
    $('._peijian').on('click', function () {
        dwei($('#peijian')[0])
    })
    $('._dianshi').on('click', function () {
        dwei($('#dianshi')[0])
    })

    function dwei(tar) {
        let wid = getDisTop(tar);
        $('body, html').animate({
            scrollTop: wid - $('.ico-nav').height()
        }, 500);
    }

    function getDisTop(element) { //获取元素距离页面顶部的距离
        var realTop = element.offsetTop;
        var parent = element.offsetParent;
        while (parent !== null) {
            realTop += parent.offsetTop;
            parent = parent.offsetParent;
        }
        return realTop;
    }




})