// ===========chat=================
pool = $('.pool');
cc = $('.chat').outerWidth(true);
function cm() {
    pool.animate({ left: -cc }, 2000, 'linear', function () {
        pool.css('left', 0);
        $('.chat').first().appendTo(pool);
        cm();
    });
};

cm();

pool.hover(
    function () {
        i = true;
        pool.stop(true);
    },
    function () {
        i = false;
        cm();
    }
);

nnn = Math.floor(Math.random() * 10000);

function chat() {
    i = $('input[name="usi"]:checked').val();
    c = $('#usc').val();
    n = $('#usn').val();
    if (c == '' || n == '') {
        roo();
        r.append(`
                <div class="ro my-2">
          <div class="rosay my-2">資料尚未填寫完整，請於檢查後再送出<br><div class="ml-5 mt-2 abtn" onclick="f2()">繼續填寫<span><i class="fa fa-arrow-up"></i></span></div></div>
        </div>
                `);
        roa();
    } else {
        $('html,body').animate({
            scrollTop: $('#s5').offset().top
        }, 500);
        pool.append(`
          <div class="chat mx-2 p-3">
          <div class="if ac">`+ i + `</div>
          <div>
            <div class="user">`+ n + `</div>
            <p>`+ c + `</p>
          </div>
        </div>
        `);
        setTimeout(function () {
            roo();
            r.append(`
                <div class="ro my-2">
          <div class="rosay my-2">留言成功！您的留言在<span class="ic b">長春留言板</span>中滾動<br>您的抽獎編號為<span class="mc b n">`+ nnn + `</span>，如有中獎，我們會將傳送簡訊通知您。</div>
        </div>
                `);
            roa();
        }, 600);
        $('#usc').val('');
        $('#usn').val('');
    }
};
// ===========robot=================
function roo() {
    $('.roo').css('display', 'none');
    $('.roc').css('display', 'flex');
    $('.robox').fadeIn();
};
function roc() {
    $('.roc').css('display', 'none');
    $('.roo').css('display', 'flex');
    $('.robox').fadeOut();
};

roc();

r = $('.rot');

function roa() {
    r.animate({
        scrollTop: r[0].scrollHeight
    }, 600);
};

function ans() {
    w = $('#box').text();
    k1 = ['熱門', '排行'];
    k2 = ['留言', '抽獎'];
    k3 = ['轉接', '客服', '電話', '地址'];
    k4 = ['退休', '規劃', '秘笈', '資訊', '計畫', '教練'];
    k5 = ['樂齡', '生活', '關於'];
    k6 = ['課程', '免費', '活動'];
    a1 = new RegExp(k1.join("|"), "i");
    a2 = new RegExp(k2.join("|"), "i");
    a3 = new RegExp(k3.join("|"), "i");
    a4 = new RegExp(k4.join("|"), "i");
    a5 = new RegExp(k5.join("|"), "i");
    a6 = new RegExp(k6.join("|"), "i");
    if (w != '') {
        r.append(`
        <div class="fe my-2">
          <div class="ussay my-2">`+ w + `</div>
        </div>
            `);
        if (a1.test(w)) {
            $('html,body').animate({
                scrollTop: $('#s3').offset().top
            }, 500);
            setTimeout(function () {
                roo();
                r.append(`
                <div class="ro my-2">
          <div class="rosay my-2">我看看...現在最熱門的課程是<span class="ic n b">`+ pdn[hot] + `</span></div>
        </div>
                `);
                roa();
            }, 600);

        } else if (a3.test(w)) {
            $('html,body').animate({
                scrollTop: $('#footer').offset().top
            }, 500);
            setTimeout(function () {
                roo();
                r.append(`
                <div class="ro my-2">
          <div class="rosay my-2">這是我們的客服電話<span class="ic n b">0800-123-123</span>，若有任何疑問，歡迎來電諮詢！</div>
        </div>
                `);
                roa();
            }, 600);
        } else if (a4.test(w)) {
            $('html,body').animate({
                scrollTop: $('#s4').offset().top
            }, 500);
            setTimeout(function () {
                roo();
                r.append(`
                <div class="ro my-2">
          <div class="rosay my-2">退休金規劃秘笈不僅是一個計劃表，更是能夠透過活動豐富了社交生活，也為社會貢獻自己的經驗與熱情。</div>
        </div>
                `);
                roa();
            }, 600);
        } else if (a6.test(w)) {
            $('html,body').animate({
                scrollTop: $('#s2').offset().top
            }, 500);
            setTimeout(function () {
                roo();
                r.append(`
                <div class="ro my-2">
          <div class="rosay my-2">薦本地的藝術、學習、運動等樂齡課程，優質活動，精心設計，讓您在快樂中也能輕鬆學習！</div>
        </div>
                `);
                roa();
            }, 600);
        } else if (a5.test(w)) {
            $('html,body').animate({
                scrollTop: $('#s1').offset().top
            }, 500);
            setTimeout(function () {
                roo();
                r.append(`
                <div class="ro my-2">
          <div class="rosay my-2">樂齡生活是一場充滿可能性的旅程。只要用心規劃，每個人都能擁有健康、快樂且有意義的退休時光。正如現代樂齡族所說：「退休不是結束，而是全新開始。」</div>
        </div>
                `);
                roa();
            }, 600);
        } else if (a2.test(w)) {
            if (ll == 0) {
                roo();
                r.append(`
                        <div class="ro my-2">
                  <div class="rosay my-2">尚未登入，您必須先登入後才能使用此功能...或許，您可以試試<br><div class="ml-5 mt-2 abtn" onclick="login()">一鍵登入<span><i class="fa fa-check"></i></span></div></div>
                </div>
                        `);
                roa();
                sho = 2;
            } else {
                $('.roform').css('display', 'block');
                r.animate({
                    scrollTop: 350
                }, 600);
            }
        } else {
            roo();
            r.append(`
                <div class="ro my-2">
                <div class="rosay my-2">小愛AI思考中...或許您可以問我"<span class="ic b">退休金規劃秘笈</span>"、"<span class="ic b">樂齡生活</span>"，或"<span class="ic b">樂齡課程</span>"...</div>
                </div>
                `);
            roa();
        }
    }
    $('#box').html("");
}
$('.roform').css('display', 'none');

function keyin(event) {
    if (event.which == 13) {
        ans();
    }
};

function f1() {
    $('#box').html('熱門排行榜');
    ans();
};
function f2() {
    $('#box').html('我要留言');
    ans();
};
function f3() {
    $('#box').html('轉接客服');
    ans();
};
// ===========ani=================
$('.aan').click(function () {
    a = $(this).attr('href');
    m = $(a).offset().top;
    $('html,body').animate({
        scrollTop: m - 50
    }, 500);
});

$('.sb,.nav-link').hover(function () {
    $(this).find('span').toggleClass('fa-shake');
});

$(window).on('scroll', function () {
    cs = $(this).scrollTop();
    if ($(window).width() > 1500) {
        if (cs == 0) {
            $('.navbar').css('width', '85%');
            $('.navbar').css('left', '7.5%');
            $('.navbar').css('top', '15px');
            $('.navbar').css('border-radius', '100px');
        } else {
            $('.navbar').css('width', '80%');
            $('.navbar').css('left', '10%');
            $('.navbar').css('top', '0px');
            $('.navbar').css('border-radius', '0 0 20px 20px');
        }
    } else {
        $('.navbar').css('width', '100%');
        $('.navbar').css('left', '0%');
        $('.navbar').css('top', '0px');
        $('.navbar').css('border-radius', '0 0 20px 20px');
    }
    $('.an').each(function () {
        st = $(this).offset().top;
        wd = $(window).scrollTop() + $(window).height() / 2 + 350;
        if (st < wd) {
            $(this).addClass('f');
        } else {
            $(this).removeClass('f');
        }
    });
});

$('.an').addClass('f');
// ===========modal=================
$(window).click(function (i) {
    if ($(i.target).hasClass('modal')) {
        $('.modal').fadeOut();
    }
});
$('.cabtn').click(function () {
    $('.modal').fadeOut();
});

$('.abtn').click(function () {
    m = $(this).data('modal');
    $(m).fadeIn();
});

$('.modal').css('display', 'none');

ll = 0;
function login() {
    ll = 1;
    $('#login').fadeIn();
    $('#lobtn').html('已登入<span><i class="fa fa-check"></i></span>');
    $('#licon').html('<i class="fa fa-user-check ic"></i>');
};

sho = 0;
function lo() {
    $('.modal').fadeOut();
    roc();
    setTimeout(function () {
        if (sho == 1) {
            shop(no);
        } else if (sho == 2) {
            roo();
            f2();
        }
        sho = 0;
    });
};
// ===========shop=================
no = 0;
n = 0;
lis = [0, 0, 0];
pdn = [
    '【免費課程】做出你的夢想—樂齡動手做',
    '【免費課程】香味四溢—妙齡廚房交流會',
    '【免費課程】探索心靈奧妙—愛上自然'
]
$('.bb').each(function (i) {
    $(this).click(function () {
        no = i
        shop(no);
    });
});

function shop(no) {
    if (ll == 0) {
        roo();
        r.append(`
                <div class="ro my-2">
          <div class="rosay my-2">尚未登入，您必須先登入後才能使用此功能...或許，您可以試試<br><div class="ml-5 mt-2 abtn" onclick="login()">一鍵登入<span><i class="fa fa-check"></i></span></div></div>
        </div>
                `);
        roa();
        sho = 1;
    } else {
        if (lis[no] != 1) {
            $('#tm').html(pdn[no]);
            $('#shop').fadeIn();
            $('html,body').animate({
                scrollTop: $('#s3').offset().top
            }, 500);
        }
    }
};

function coc() {
    barw[no] += 1;
    for (let i = 0; i < barw.length; i++) {
        if (n < barw[i]) {
            n = barw[i];
            hot = i;
        }
    }
    if (lk < barw[hot]) {
        lk += 10;
    }
    $('.modal').fadeOut();
    uc();
    $('.bb').eq(no).html('已報名<span><i class="fa fa-check"></i></span>');
    lis[no] = 1;
};
// ===========chart=================
barw = [35, 49, 50];
hot = 2;
lk = 50;
bar = document.querySelectorAll('.barb');
function uc() {
    bar.forEach(function (i, a) {
        b = i.querySelector('.bar');
        w = barw[a] / lk;
        b.style.width = `${w * 100}%`
        $('.bart').eq(a).html(barw[a]);
    })
    $('#hot').html(pdn[hot]);
};
uc();