/////////// start tab
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
////// end tab
// srart circle counter
setInterval(r1, 10);
function r1() {
    var test1 = document.getElementById('q1');
    if (test1.innerHTML == 0) {
        var s1 = document.getElementById('b1');
        s1.setAttribute('class', "progress");
        clearInterval(r1)
    }
}
setInterval(r2, 10);
function r2() {
    var test2 = document.getElementById('q2');
    if (test2.innerHTML == 0) {
        var s2 = document.getElementById('b2');
        s2.setAttribute('class', "progress");
        clearInterval(r2)
    }
}
setInterval(r3, 10);
function r3() {
    var test3 = document.getElementById('q3');
    if (test3.innerHTML == 0) {
        var s3 = document.getElementById('b3');
        s3.setAttribute('class', "progress");
        clearInterval(r3)
    }
}
setInterval(r4, 10);
function r4() {
    var test4 = document.getElementById('q4');
    if (test4.innerHTML == 0) {
        var s4 = document.getElementById('b4');
        s4.setAttribute('class', "progress");
        clearInterval(r4)
    }
}
setInterval(r5, 10);
function r5() {
    var test5 = document.getElementById('q5');
    if (test5.innerHTML == 0) {
        var s5 = document.getElementById('b5');
        s5.setAttribute('class', "progress");
        clearInterval(r5)
    }
}

// end circle counter
// start road6
{
    function showtxt(index) {
        let change = document.getElementById("txt-change");
        if (index === "show1") {
            change.innerHTML = ""
            change.innerHTML = "به دلیل اهمیت بالای امنیت مدارک و اطلاعات کاری شما، این اطمینان را به شما می دهیم که فیزیک مدارک شما و اطلاعات کاری شما نزد کارشنان موسسه ما محفوظ خواهد بود."
        }
        if (index === "show2") {
            change.innerHTML = ""
            change.innerHTML = "پشتیبانی 24 ساعته موسسه آنی کارا با افتخار آماده پاسخگویی به تمام سوالات همراهان خود را دارد و هر ساعتی که بخواهید تنها با یک تماس به صورت رایگان پاسخ تمام سوالات خود را دریافت کنید."
        }
        if (index === "show3") {
            change.innerHTML = ""
            change.innerHTML = "یکی از اهداف آنی کارا به حداقل رساندن گزارش دهی از روند پرونده های مشتریان خود می باشد. در حال حاضر در هر زمانی که بخواهید تنها با یک تماس از مراحل کار خود آگاه شوید."
        }
        if (index === "show4") {
            change.innerHTML = ""
            change.innerHTML = "کافیست درخواست خود را از طریق سایت ثبت کنید، از ما مشاوره بگیرید و اطلاعات کسب کنید، مدارک خود را به صورت عکس و یا فایل ارسال کنید و در زمان موعد امورتان را تحویل بگیرید."
        }
        if (index === "show5") {
            change.innerHTML = ""
            change.innerHTML = ' انجام کلیه خدمات در کمترین زمان یکی از مهم ترین مواردی است که ما در روند پرونده شما در نظر خواهیم گرفت. این اطمینان را می دهیم که در کمترین زمان این خدمات را ارائه کنیم.'
        }
        if (index === "show6") {
            change.innerHTML = ""
            change.innerHTML = "یکی از اهداف آنی کارا به حداقل رساندن گزارش دهی از روند پرونده های مشتریان خود می باشد. در حال حاضر در هر زمانی که بخواهید تنها با یک تماس از مراحل کار خود آگاه شوید."
        }
    }
    setInterval(change, 2000);
    let div_change = document.getElementsByClassName("show");
    let i = 0;
    let icon = document.getElementsByClassName("icon-road");
    function change() {
        let change = document.getElementById("txt-change");
        if (i >= 6) {
            i = 0;
        }
        div_change[i].classList.add("toglle1")
        icon[i].classList.add("toglle2")
        if (i == 0) {
            change.innerHTML = "";
            change.innerHTML = "به دلیل اهمیت بالای امنیت مدارک و اطلاعات کاری شما، این اطمینان را به شما می دهیم که فیزیک مدارک شما و اطلاعات کاری شما نزد کارشنان موسسه ما محفوظ خواهد بود."
        }
        if (i == 1) {
            change.innerHTML = "";
            change.innerHTML = "پشتیبانی 24 ساعته موسسه آنی کارا با افتخار آماده پاسخگویی به تمام سوالات همراهان خود را دارد و هر ساعتی که بخواهید تنها با یک تماس به صورت رایگان پاسخ تمام سوالات خود را دریافت کنید."
        }
        if (i == 2) {
            change.innerHTML = "";
            change.innerHTML = "یکی از اهداف آنی کارا به حداقل رساندن گزارش دهی از روند پرونده های مشتریان خود می باشد. در حال حاضر در هر زمانی که بخواهید تنها با یک تماس از مراحل کار خود آگاه شوید."
        }
        if (i == 3) {
            change.innerHTML = "";
            change.innerHTML = "کافیست درخواست خود را از طریق سایت ثبت کنید، از ما مشاوره بگیرید و اطلاعات کسب کنید، مدارک خود را به صورت عکس و یا فایل ارسال کنید و در زمان موعد امورتان را تحویل بگیرید."
        }
        if (i == 4) {
            change.innerHTML = "";
            change.innerHTML = ' انجام کلیه خدمات در کمترین زمان یکی از مهم ترین مواردی است که ما در روند پرونده شما در نظر خواهیم گرفت. این اطمینان را می دهیم که در کمترین زمان این خدمات را ارائه کنیم.'
        }
        if (i == 5) {
            change.innerHTML = "";
            change.innerHTML = "یکی از اهداف آنی کارا به حداقل رساندن گزارش دهی از روند پرونده های مشتریان خود می باشد. در حال حاضر در هر زمانی که بخواهید تنها با یک تماس از مراحل کار خود آگاه شوید."
        }
        i++;
    }
    setTimeout(vv, 2000);
    function vv() {
        setInterval(removee, 2000);
        let i1 = 0;
        function removee() {
            if (i1 >= 6) {
                i1 = 0;
            }
            div_change[i1].classList.remove("toglle1")
            icon[i1].classList.remove("toglle2")
            i1++;
        }
    }

}
// end road6
// srart road sabt sherkat
{
    function showtxt1(index) {
        let change = document.getElementById("txt-change1");
        if (index === "show1") {
            change.innerHTML = ""
            change.innerHTML = "تست 1"
        }
        if (index === "show2") {
            change.innerHTML = ""
            change.innerHTML = "تست 2"
        }
        if (index === "show3") {
            change.innerHTML = ""
            change.innerHTML = "تست 3"
        }
        if (index === "show4") {
            change.innerHTML = ""
            change.innerHTML = "تست 4"
        }
        if (index === "show5") {
            change.innerHTML = ""
            change.innerHTML = "تست 5"
        }

    }
    setInterval(change, 2000);
    let div_change1 = document.getElementsByClassName("show1");
    let i = 0;
    function change() {
        let change = document.getElementById("txt-change1");
        if (i >= 5) {
            i = 0;
        }
        div_change1[i].classList.add("toglle1")
        if (i == 0) {
            change.innerHTML = "";
            change.innerHTML = "تست 1"
        }
        if (i == 1) {
            change.innerHTML = "";
            change.innerHTML = "تست 2"
        }
        if (i == 2) {
            change.innerHTML = "";
            change.innerHTML = "تست 3"
        }
        if (i == 3) {
            change.innerHTML = "";
            change.innerHTML = "تست 4"
        }
        if (i == 4) {
            change.innerHTML = "";
            change.innerHTML = "تست 5"
        }
        i++;
    }
    setTimeout(vv1, 2000);
    function vv1() {
        setInterval(removee, 2000);
        let i1 = 0;
        function removee() {
            if (i1 >= 5) {
                i1 = 0;
            }
            div_change1[i1].classList.remove("toglle1")
            i1++;
        }
    }
}
// srart road sabt taghir sherkat
{
    function showtxt2(index) {
        let change = document.getElementById("txt-change2");
        if (index === "show1") {
            change.innerHTML = ""
            change.innerHTML = "تست 1"
        }
        if (index === "show2") {
            change.innerHTML = ""
            change.innerHTML = "تست 2"
        }
        if (index === "show3") {
            change.innerHTML = ""
            change.innerHTML = "تست 3"
        }
        if (index === "show4") {
            change.innerHTML = ""
            change.innerHTML = "تست 4"
        }
        if (index === "show5") {
            change.innerHTML = ""
            change.innerHTML = "تست 5"
        }

    }
    setInterval(change, 2000);
    let div_change2 = document.getElementsByClassName("show2");
    let i = 0;
    function change() {
        let change = document.getElementById("txt-change2");
        if (i >= 5) {
            i = 0;
        }
        div_change2[i].classList.add("toglle1")
        if (i == 0) {
            change.innerHTML = "";
            change.innerHTML = "تست 1"
        }
        if (i == 1) {
            change.innerHTML = "";
            change.innerHTML = "تست 2"
        }
        if (i == 2) {
            change.innerHTML = "";
            change.innerHTML = "تست 3"
        }
        if (i == 3) {
            change.innerHTML = "";
            change.innerHTML = "تست 4"
        }
        if (i == 4) {
            change.innerHTML = "";
            change.innerHTML = "تست 5"
        }
        i++;
    }
    setTimeout(vv2, 2000);
    function vv2() {
        setInterval(removee, 2000);
        let i1 = 0;
        function removee() {
            if (i1 >= 5) {
                i1 = 0;
            }
            div_change2[i1].classList.remove("toglle1")
            i1++;
        }
    }
}
// srart road sabt berand
{
    function showtxt3(index) {
        let change = document.getElementById("txt-change3");
        if (index === "show1") {
            change.innerHTML = ""
            change.innerHTML = "تست 1"
        }
        if (index === "show2") {
            change.innerHTML = ""
            change.innerHTML = "تست 2"
        }
        if (index === "show3") {
            change.innerHTML = ""
            change.innerHTML = "تست 3"
        }
        if (index === "show4") {
            change.innerHTML = ""
            change.innerHTML = "تست 4"
        }
        if (index === "show5") {
            change.innerHTML = ""
            change.innerHTML = "تست 5"
        }
        if (index === "show6") {
            change.innerHTML = ""
            change.innerHTML = "تست 6"
        }

    }
    setInterval(change, 2000);
    let div_change2 = document.getElementsByClassName("show3");
    let i = 0;
    function change() {
        let change = document.getElementById("txt-change3");
        if (i >= 6) {
            i = 0;
        }
        div_change2[i].classList.add("toglle1")
        if (i == 0) {
            change.innerHTML = "";
            change.innerHTML = "تست 1"
        }
        if (i == 1) {
            change.innerHTML = "";
            change.innerHTML = "تست 2"
        }
        if (i == 2) {
            change.innerHTML = "";
            change.innerHTML = "تست 3"
        }
        if (i == 3) {
            change.innerHTML = "";
            change.innerHTML = "تست 4"
        }
        if (i == 4) {
            change.innerHTML = "";
            change.innerHTML = "تست 5"
        }
        if (i == 5) {
            change.innerHTML = "";
            change.innerHTML = "تست 6"
        }
        i++;
    }
    setTimeout(vv2, 2000);
    function vv2() {
        setInterval(removee, 2000);
        let i1 = 0;
        function removee() {
            if (i1 >= 6) {
                i1 = 0;
            }
            div_change2[i1].classList.remove("toglle1")
            i1++;
        }
    }
}
// srart road akhz card
{
    function showtxt4(index) {
        let change = document.getElementById("txt-change4");
        if (index === "show1") {
            change.innerHTML = ""
            change.innerHTML = "تست 1"
        }
        if (index === "show2") {
            change.innerHTML = ""
            change.innerHTML = "تست 2"
        }
        if (index === "show3") {
            change.innerHTML = ""
            change.innerHTML = "تست 3"
        }
        if (index === "show4") {
            change.innerHTML = ""
            change.innerHTML = "تست 4"
        }
        if (index === "show5") {
            change.innerHTML = ""
            change.innerHTML = "تست 5"
        }
        if (index === "show6") {
            change.innerHTML = ""
            change.innerHTML = "تست 6"
        }
    }
    setInterval(change, 2000);
    let div_change2 = document.getElementsByClassName("show4");
    let i = 0;
    function change() {
        let change = document.getElementById("txt-change4");
        if (i >= 6) {
            i = 0;
        }
        div_change2[i].classList.add("toglle1")
        if (i == 0) {
            change.innerHTML = "";
            change.innerHTML = "تست 1"
        }
        if (i == 1) {
            change.innerHTML = "";
            change.innerHTML = "تست 2"
        }
        if (i == 2) {
            change.innerHTML = "";
            change.innerHTML = "تست 3"
        }
        if (i == 3) {
            change.innerHTML = "";
            change.innerHTML = "تست 4"
        }
        if (i == 4) {
            change.innerHTML = "";
            change.innerHTML = "تست 5"
        }
        if (i == 5) {
            change.innerHTML = "";
            change.innerHTML = "تست 6"
        }
        i++;
    }
    setTimeout(vv2, 2000);
    function vv2() {
        setInterval(removee, 2000);
        let i1 = 0;
        function removee() {
            if (i1 >= 6) {
                i1 = 0;
            }
            div_change2[i1].classList.remove("toglle1")
            i1++;
        }
    }
}
// srart road akhz javaz kasb
{
    function showtxt5(index) {
        let change = document.getElementById("txt-change5");
        if (index === "show1") {
            change.innerHTML = ""
            change.innerHTML = "تست 1"
        }
        if (index === "show2") {
            change.innerHTML = ""
            change.innerHTML = "تست 2"
        }
        if (index === "show3") {
            change.innerHTML = ""
            change.innerHTML = "تست 3"
        }
        if (index === "show4") {
            change.innerHTML = ""
            change.innerHTML = "تست 4"
        }
        if (index === "show5") {
            change.innerHTML = ""
            change.innerHTML = "تست 5"
        }
        if (index === "show6") {
            change.innerHTML = ""
            change.innerHTML = "تست 6"
        }
        if (index === "show7") {
            change.innerHTML = ""
            change.innerHTML = "تست 7"
        }

    }
    setInterval(change, 2000);
    let div_change2 = document.getElementsByClassName("show5");
    let i = 0;
    function change() {
        let change = document.getElementById("txt-change5");
        if (i >= 7) {
            i = 0;
        }
        div_change2[i].classList.add("toglle1")
        if (i == 0) {
            change.innerHTML = "";
            change.innerHTML = "تست 1"
        }
        if (i == 1) {
            change.innerHTML = "";
            change.innerHTML = "تست 2"
        }
        if (i == 2) {
            change.innerHTML = "";
            change.innerHTML = "تست 3"
        }
        if (i == 3) {
            change.innerHTML = "";
            change.innerHTML = "تست 4"
        }
        if (i == 4) {
            change.innerHTML = "";
            change.innerHTML = "تست 5"
        }
        if (i == 5) {
            change.innerHTML = "";
            change.innerHTML = "تست 6"
        }
        if (i == 6) {
            change.innerHTML = "";
            change.innerHTML = "تست 7"
        }
        i++;
    }
    setTimeout(vv2, 2000);
    function vv2() {
        setInterval(removee, 2000);
        let i1 = 0;
        function removee() {
            if (i1 >= 7) {
                i1 = 0;
            }
            div_change2[i1].classList.remove("toglle1")
            i1++;
        }
    }
}
// srart road akhz javaz tasis
{
    function showtxt6(index) {
        let change = document.getElementById("txt-change6");
        if (index === "show1") {
            change.innerHTML = ""
            change.innerHTML = "تست 1"
        }
        if (index === "show2") {
            change.innerHTML = ""
            change.innerHTML = "تست 2"
        }
        if (index === "show3") {
            change.innerHTML = ""
            change.innerHTML = "تست 3"
        }
        if (index === "show4") {
            change.innerHTML = ""
            change.innerHTML = "تست 4"
        }
        if (index === "show5") {
            change.innerHTML = ""
            change.innerHTML = "تست 5"
        }
        if (index === "show6") {
            change.innerHTML = ""
            change.innerHTML = "تست 6"
        }
        if (index === "show7") {
            change.innerHTML = ""
            change.innerHTML = "تست 7"
        }

    }
    setInterval(change, 2000);
    let div_change2 = document.getElementsByClassName("show6");
    let i = 0;
    function change() {
        let change = document.getElementById("txt-change6");
        if (i >= 7) {
            i = 0;
        }
        div_change2[i].classList.add("toglle1")
        if (i == 0) {
            change.innerHTML = "";
            change.innerHTML = "تست 1"
        }
        if (i == 1) {
            change.innerHTML = "";
            change.innerHTML = "تست 2"
        }
        if (i == 2) {
            change.innerHTML = "";
            change.innerHTML = "تست 3"
        }
        if (i == 3) {
            change.innerHTML = "";
            change.innerHTML = "تست 4"
        }
        if (i == 4) {
            change.innerHTML = "";
            change.innerHTML = "تست 5"
        }
        if (i == 5) {
            change.innerHTML = "";
            change.innerHTML = "تست 6"
        }
        if (i == 6) {
            change.innerHTML = "";
            change.innerHTML = "تست 7"
        }
        i++;
    }
    setTimeout(vv2, 2000);
    function vv2() {
        setInterval(removee, 2000);
        let i1 = 0;
        function removee() {
            if (i1 >= 7) {
                i1 = 0;
            }
            div_change2[i1].classList.remove("toglle1")
            i1++;
        }
    }
}

// srart road akhz izo
{
    function showtxt7(index) {
        let change = document.getElementById("txt-change7");
        if (index === "show1") {
            change.innerHTML = ""
            change.innerHTML = "تست 1"
        }
        if (index === "show2") {
            change.innerHTML = ""
            change.innerHTML = "تست 2"
        }
        if (index === "show3") {
            change.innerHTML = ""
            change.innerHTML = "تست 3"
        }
        if (index === "show4") {
            change.innerHTML = ""
            change.innerHTML = "تست 4"
        }
        if (index === "show5") {
            change.innerHTML = ""
            change.innerHTML = "تست 5"
        }
    }
    setInterval(change, 2000);
    let div_change2 = document.getElementsByClassName("show7");
    let i = 0;
    function change() {
        let change = document.getElementById("txt-change7");
        if (i >= 5) {
            i = 0;
        }
        div_change2[i].classList.add("toglle1")
        if (i == 0) {
            change.innerHTML = "";
            change.innerHTML = "تست 1"
        }
        if (i == 1) {
            change.innerHTML = "";
            change.innerHTML = "تست 2"
        }
        if (i == 2) {
            change.innerHTML = "";
            change.innerHTML = "تست 3"
        }
        if (i == 3) {
            change.innerHTML = "";
            change.innerHTML = "تست 4"
        }
        if (i == 4) {
            change.innerHTML = "";
            change.innerHTML = "تست 5"
        }
        i++;
    }
    setTimeout(vv2, 2000);
    function vv2() {
        setInterval(removee, 2000);
        let i1 = 0;
        function removee() {
            if (i1 >= 5) {
                i1 = 0;
            }
            div_change2[i1].classList.remove("toglle1")
            i1++;
        }
    }
}

// srart anformatik
{
    function showtxt8(index) {
        let change = document.getElementById("txt-change8");
        if (index === "show1") {
            change.innerHTML = ""
            change.innerHTML = "تست 1"
        }
        if (index === "show2") {
            change.innerHTML = ""
            change.innerHTML = "تست 2"
        }
        if (index === "show3") {
            change.innerHTML = ""
            change.innerHTML = "تست 3"
        }
        if (index === "show4") {
            change.innerHTML = ""
            change.innerHTML = "تست 4"
        }
        if (index === "show5") {
            change.innerHTML = ""
            change.innerHTML = "تست 5"
        }
        if (index === "show6") {
            change.innerHTML = ""
            change.innerHTML = "تست 6"
        }
    }
    setInterval(change, 2000);
    let div_change2 = document.getElementsByClassName("show8");
    let i = 0;
    function change() {
        let change = document.getElementById("txt-change8");
        if (i >= 6) {
            i = 0;
        }
        div_change2[i].classList.add("toglle1")
        if (i == 0) {
            change.innerHTML = "";
            change.innerHTML = "تست 1"
        }
        if (i == 1) {
            change.innerHTML = "";
            change.innerHTML = "تست 2"
        }
        if (i == 2) {
            change.innerHTML = "";
            change.innerHTML = "تست 3"
        }
        if (i == 3) {
            change.innerHTML = "";
            change.innerHTML = "تست 4"
        }
        if (i == 4) {
            change.innerHTML = "";
            change.innerHTML = "تست 5"
        }
        if (i == 5) {
            change.innerHTML = "";
            change.innerHTML = "تست 6"
        }
        i++;
    }
    setTimeout(vv2, 2000);
    function vv2() {
        setInterval(removee, 2000);
        let i1 = 0;
        function removee() {
            if (i1 >= 6) {
                i1 = 0;
            }
            div_change2[i1].classList.remove("toglle1")
            i1++;
        }
    }
}

// srart salahiat imeni peimanar
{
    function showtxt9(index) {
        let change = document.getElementById("txt-change9");
        if (index === "show1") {
            change.innerHTML = ""
            change.innerHTML = "تست 1"
        }
        if (index === "show2") {
            change.innerHTML = ""
            change.innerHTML = "تست 2"
        }
        if (index === "show3") {
            change.innerHTML = ""
            change.innerHTML = "تست 3"
        }
        if (index === "show4") {
            change.innerHTML = ""
            change.innerHTML = "تست 4"
        }
        if (index === "show5") {
            change.innerHTML = ""
            change.innerHTML = "تست 5"
        }
        if (index === "show6") {
            change.innerHTML = ""
            change.innerHTML = "تست 6"
        }
        if (index === "show7") {
            change.innerHTML = ""
            change.innerHTML = "تست 7"
        }
    }
    setInterval(change, 2000);
    let div_change2 = document.getElementsByClassName("show9");
    let i = 0;
    function change() {
        let change = document.getElementById("txt-change9");
        if (i >= 7) {
            i = 0;
        }
        div_change2[i].classList.add("toglle1")
        if (i == 0) {
            change.innerHTML = "";
            change.innerHTML = "تست 1"
        }
        if (i == 1) {
            change.innerHTML = "";
            change.innerHTML = "تست 2"
        }
        if (i == 2) {
            change.innerHTML = "";
            change.innerHTML = "تست 3"
        }
        if (i == 3) {
            change.innerHTML = "";
            change.innerHTML = "تست 4"
        }
        if (i == 4) {
            change.innerHTML = "";
            change.innerHTML = "تست 5"
        }
        if (i == 5) {
            change.innerHTML = "";
            change.innerHTML = "تست 6"
        }
        if (i == 6) {
            change.innerHTML = "";
            change.innerHTML = "تست 7"
        }
        i++;
    }
    setTimeout(vv2, 2000);
    function vv2() {
        setInterval(removee, 2000);
        let i1 = 0;
        function removee() {
            if (i1 >= 7) {
                i1 = 0;
            }
            div_change2[i1].classList.remove("toglle1")
            i1++;
        }
    }
}

// srart parvaneh bahre
{
    function showtxt10(index) {
        let change = document.getElementById("txt-change10");
        if (index === "show1") {
            change.innerHTML = ""
            change.innerHTML = "تست 1"
        }
        if (index === "show2") {
            change.innerHTML = ""
            change.innerHTML = "تست 2"
        }
        if (index === "show3") {
            change.innerHTML = ""
            change.innerHTML = "تست 3"
        }
        if (index === "show4") {
            change.innerHTML = ""
            change.innerHTML = "تست 4"
        }
        if (index === "show5") {
            change.innerHTML = ""
            change.innerHTML = "تست 5"
        }
        if (index === "show6") {
            change.innerHTML = ""
            change.innerHTML = "تست 6"
        }



    }
    setInterval(change, 2000);
    let div_change2 = document.getElementsByClassName("show10");
    let i = 0;
    function change() {
        let change = document.getElementById("txt-change10");
        if (i >= 6) {
            i = 0;
        }
        div_change2[i].classList.add("toglle1")
        if (i == 0) {
            change.innerHTML = "";
            change.innerHTML = "تست 1"
        }
        if (i == 1) {
            change.innerHTML = "";
            change.innerHTML = "تست 2"
        }
        if (i == 2) {
            change.innerHTML = "";
            change.innerHTML = "تست 3"
        }
        if (i == 3) {
            change.innerHTML = "";
            change.innerHTML = "تست 4"
        }
        if (i == 4) {
            change.innerHTML = "";
            change.innerHTML = "تست 5"
        }
        if (i == 5) {
            change.innerHTML = "";
            change.innerHTML = "تست 6"
        }
        i++;
    }
    setTimeout(vv2, 2000);
    function vv2() {
        setInterval(removee, 2000);
        let i1 = 0;
        function removee() {
            if (i1 >= 6) {
                i1 = 0;
            }
            div_change2[i1].classList.remove("toglle1")
            i1++;
        }
    }
}
// sabt ektra
{
    function showtxt11(index) {
        let change = document.getElementById("txt-change11");
        if (index === "show1") {
            change.innerHTML = ""
            change.innerHTML = "تست 1"
        }
        if (index === "show2") {
            change.innerHTML = ""
            change.innerHTML = "تست 2"
        }
        if (index === "show3") {
            change.innerHTML = ""
            change.innerHTML = "تست 3"
        }
        if (index === "show4") {
            change.innerHTML = ""
            change.innerHTML = "تست 4"
        }
        if (index === "show5") {
            change.innerHTML = ""
            change.innerHTML = "تست 5"
        }
        if (index === "show6") {
            change.innerHTML = ""
            change.innerHTML = "تست 6"
        }



    }
    setInterval(change, 2000);
    let div_change2 = document.getElementsByClassName("show11");
    let i = 0;
    function change() {
        let change = document.getElementById("txt-change11");
        if (i >= 6) {
            i = 0;
        }
        div_change2[i].classList.add("toglle1")
        if (i == 0) {
            change.innerHTML = "";
            change.innerHTML = "تست 1"
        }
        if (i == 1) {
            change.innerHTML = "";
            change.innerHTML = "تست 2"
        }
        if (i == 2) {
            change.innerHTML = "";
            change.innerHTML = "تست 3"
        }
        if (i == 3) {
            change.innerHTML = "";
            change.innerHTML = "تست 4"
        }
        if (i == 4) {
            change.innerHTML = "";
            change.innerHTML = "تست 5"
        }
        if (i == 5) {
            change.innerHTML = "";
            change.innerHTML = "تست 6"
        }
        i++;
    }
    setTimeout(vv2, 2000);
    function vv2() {
        setInterval(removee, 2000);
        let i1 = 0;
        function removee() {
            if (i1 >= 6) {
                i1 = 0;
            }
            div_change2[i1].classList.remove("toglle1")
            i1++;
        }
    }
}
// sabt tarh
{
    function showtxt12(index) {
        let change = document.getElementById("txt-change12");
        if (index === "show1") {
            change.innerHTML = ""
            change.innerHTML = "تست 1"
        }
        if (index === "show2") {
            change.innerHTML = ""
            change.innerHTML = "تست 2"
        }
        if (index === "show3") {
            change.innerHTML = ""
            change.innerHTML = "تست 3"
        }
        if (index === "show4") {
            change.innerHTML = ""
            change.innerHTML = "تست 4"
        }
        if (index === "show5") {
            change.innerHTML = ""
            change.innerHTML = "تست 5"
        }
        if (index === "show6") {
            change.innerHTML = ""
            change.innerHTML = "تست 6"
        }



    }
    setInterval(change, 2000);
    let div_change2 = document.getElementsByClassName("show12");
    let i = 0;
    function change() {
        let change = document.getElementById("txt-change12");
        if (i >= 6) {
            i = 0;
        }
        div_change2[i].classList.add("toglle1")
        if (i == 0) {
            change.innerHTML = "";
            change.innerHTML = "تست 1"
        }
        if (i == 1) {
            change.innerHTML = "";
            change.innerHTML = "تست 2"
        }
        if (i == 2) {
            change.innerHTML = "";
            change.innerHTML = "تست 3"
        }
        if (i == 3) {
            change.innerHTML = "";
            change.innerHTML = "تست 4"
        }
        if (i == 4) {
            change.innerHTML = "";
            change.innerHTML = "تست 5"
        }
        if (i == 5) {
            change.innerHTML = "";
            change.innerHTML = "تست 6"
        }
        i++;
    }
    setTimeout(vv2, 2000);
    function vv2() {
        setInterval(removee, 2000);
        let i1 = 0;
        function removee() {
            if (i1 >= 6) {
                i1 = 0;
            }
            div_change2[i1].classList.remove("toglle1")
            i1++;
        }
    }
}
// start scroll to end
let scroll_to_end = document.getElementById("scroll_to_end");
document.addEventListener('scroll', to_end);
function to_end() {
    let all = document.body.clientHeight;
    let inner = window.innerHeight;
    let scrollY = window.scrollY;
    let finaly = Math.round((scrollY * 100) / (all - inner));
    scroll_to_end.style.width = finaly + "%";
}
// end scroll to end


// start hember menu
var startt = 1;
function menu() {
    let ham = document.getElementById("ham");
    let zarb = document.getElementById("zarb");
    let res_nav = document.getElementById("res-nav")
    if (startt) {
        ham.style.display = "none";
        zarb.style.display = "block"
        res_nav.style.right = "0px";
        startt = 0;
    }
    else {
        ham.style.display = "block";
        zarb.style.display = "none"
        res_nav.style.right = "-170px";
        startt = 1;
    }
}
// end hember menu

// auto slide
let swiper = new Swiper(".wrapper", {
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
});