    var m0 = document.getElementsByClassName('imp')[0];
    var a0 = document.getElementsByClassName('pic')[0];
    var b0 = document.getElementsByClassName('content')[0];
    m0.onmouseover = function () {
        a0.style.display = "none";
        b0.style.display = "block";
    }
    m0.onmouseout = function () {
        a0.style.display = "block"
        b0.style.display = "none"
    }
    var m1 = document.getElementsByClassName('imp')[1];
    var a1 = document.getElementsByClassName('pic')[1];
    var b1 = document.getElementsByClassName('content')[1];
    m1.onmouseover = function () {
        a1.style.display = "none";
        b1.style.display = "block";
    }
    m1.onmouseout = function () {
        a1.style.display = "block"
        b1.style.display = "none"
    }

    var m2 = document.getElementsByClassName('imp')[2];
    var a2 = document.getElementsByClassName('pic')[2];
    var b2 = document.getElementsByClassName('content')[2];
    m2.onmouseover = function () {
        a2.style.display = "none";
        b2.style.display = "block";
    }
    m2.onmouseout = function () {
        a2.style.display = "block"
        b2.style.display = "none"
    }

    var fly = document.getElementsById('flya');
    fly.onmouseover = function () {
        flyb.style.display = "block"
    }
    fly.onmouseout = function () {
        flyb.style.display = "none";
    }
