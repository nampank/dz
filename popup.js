//<![CDATA[
var City = "Bắc Hồng; Cổ Loa; Đại Mạch; Đông Hội; Dục Tú; Hải Bối; Kim Chung; Kim Nỗ; Liên Hà; Mai Lâm; Nam Hồng; Nguyên Khê; Tàm Xá; Thụy Lâm; Tiên Dương; Uy Nỗ; Vân Hà; Vân Nội; Việt Hùng; Vĩnh Ngọc; Võng La; Xuân Canh; Xuân Nộn".split(";"),
    catchText3, promoCount;
function showHydeWin(a, b) {
    var c = b,
        e = document.getElementById("popWindow"),
        g, d;
    if ("+" === a) g = 0, d = 1;
    else if ("-" === a) g = 1, d = 0, c = -b;
    else return;
    var f = g,
        h = setInterval(function() {
            e.style.opacity = f;
            f += c;
            "+" === a ? f > d && (e.style.opacity = d, clearInterval(h)) : "-" === a && f < d && (e.style.opacity = d, clearInterval(h))
        }, 17)}
function genRandNum(a, b) {
    return Math.floor(Math.random() * (b - a) + a)}
function showBoxTime(a, b) {
    showHydeWin("+", b);
    var c = 0,
        e = setInterval(function() {
            c > a ? (showHydeWin("-", b), clearInterval(e)) : c++
        }, 1E3)}
function setBoxText(a) {
    switch (a) {
        case 1:
            a = "Hiện có 100 người truy cập web này";
            var b = genRandNum(50, 250);
            document.getElementById("popWindow").innerHTML = a.replace("100", "<span>" + b + "</span>");
            break;
        case 2:
            a = "Khách Hàng Đăng Ký Dịch Vụ Mới tại xã  CITY.";
            b = City[Math.floor(Math.random() * City.length)];
            document.getElementById("popWindow").innerHTML = a.replace("CITY",
                "<b>" + b + "</b>");
            break;
        case 3:
            a = "Có 15 người đã trải nghiệm dịch vụ", catchText3 = b = genRandNum(15, 50), document.getElementById("popWindow").innerHTML = a.replace("15", "<i>" + b + "</i>")
    }}
function welcomeUser() {
    var a = 0,
        b = genRandNum(9, 12),
        c = setInterval(function() {
            0 === a && (setBoxText(1), showBoxTime(4, .05));
            a === b && (setBoxText(2), showBoxTime(4, 1));
            a === b + 7 && (setBoxText(3), promoCount = catchText3, showBoxTime(5, .01), clearInterval(c), customLead(genRandNum(7, 20)));
            a++
        }, 1E3)}
function customLead(a) {
    setTimeout(function() {
        var a = 0,
            c = setInterval(function() {
                0 === a && (setBoxText(2), showBoxTime(4, 1));
                7 === a && (promoCount--, 0 < promoCount ? document.getElementById("popWindow").innerHTML = "Có <i>" + promoCount + "</i> người đang xem dịch vụ" : document.getElementById("popWindow").innerHTML = "<p>Thiết Kế Website Bán Hàng Online </p>",
                    showBoxTime(5, .01));
                14 === a && (clearInterval(c), 0 < promoCount && customLead(genRandNum(2, 20)));
                a++
            }, 1E3)
    }, 1E3 * a)
}
window.onload = welcomeUser;
//]]>
