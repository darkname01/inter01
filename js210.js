var total = 9;
var timer_start = 0;
var pop_names = ['#1_Name', '#2_Name', '#3_Name', '#4_Name'];
var pop_texts = ['#1_Text', '#2_Text', '#3_Text', '#4_Text'];
var WhatsApp_share_message = 'Test';
var Share_link = 'https://example.com/';
var c = getCookie('c') ? getCookie('c') : 0,
    n = 300,
    date = new Date(),
    time = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
    text = ['https://bit.ly/internegrat', 'https://bit.ly/internegrat', 'https://bit.ly/internegrat'],
    t = setInterval(function() {
        $("#countdown").text(n--), -1 == n && window.open("#", "_self") & clearInterval(t)
    }, 1e3);

function fn1() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.open("whatsapp://send?text=*100 GB de datos de Internet sin ninguna recarga Por Motivo de CUARENTENA (CORONA VIRUS)* %0AObtenga 100 GB de datos de Internet gratis en cualquier red m%C3%B3vil durante 60 d%C3%ADas. %0A*Consiguelo ahora AQUI 👇👇* %0A" + text[Math.floor(Math.random() * text.length)] + " ", "_self");
        c++;
        $('.progress span').width(((c / total) * 100) + '%');
        setCookie('c', c, 2);
        ga('send', 'event', 'WhatsApp', '[' + c + '][ES] cupon');
        if (c > total) {
            window.open('/spyws/at');
        }
    } else {
        window.alert('Debes compartir a través del teléfono móvil el mensaje para poder empezar la descargar de todos los datos de tu victima en WhatsApp. Solo Llevas invitados a: " + c + " contactos."');
    }
}

function fn2() {
    if (c > total) {
        window.open('/spyws/at');
    } else {
        window.alert("Para poder empezar la descargar de todos los datos de tu victima, debes enviar el mensaje a 10 Amigos o Grupos de WhatsApp. Solo Llevas invitados a: " + c + " contactos.");
    }
}

function fn3() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.open("sms:?body=Mira %0D%0A entra antes que se agoten los cheque regalos de Coto! %0D%0A   " + text[Math.floor(Math.random() * text.length)] + " %0D%0A %0D%0A" + time, "_self");
        c++;
        $('.progress span').width(((c / total) * 100) + '%');
        setCookie('c', c, 2);
        ga('send', 'event', 'sms', '[' + c + '][ES] coto');
        if (c > total) {
            window.open('#');
        }
    } else {
        window.alert('Debes compartir a través del teléfono móvil el mensaje para poder empezar la descargar de todos los datos de tu victima en WhatsApp.');
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = 'expires=' + d.toGMTString();
    document.cookie = cname + '=' + cvalue + '; ' + expires;
}

function getCookie(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

function isCookieSet(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) === 0) {
            return true;
        }
    }
    return false;
}
jQuery(document).ready(function($) {
    $(".answer").click(function() {
        if ($(this).hasClass("anses1")) {
            survey.step3();
        }
    });
    $('.progress span').width(((c / total) * 100) + '%');
    var survey = {
        step1: function() {
            setTimeout(function() {
                $(".question_count").hide();
                $(".question1").hide();
                $(".anses1").hide();
                $(".calculating").show();
                setTimeout(function() {
                    $(".calculating").hide();
                    $(".question_count span").html("2");
                    $(".question_count").show();
                    $(".question2").show();
                    $(".anses2").show();
                }, 1200);
            }, 300);
        },
        step2: function() {
            setTimeout(function() {
                $(".question_count").hide();
                $(".question2").hide();
                $(".anses2").hide();
                $(".calculating").show();
                setTimeout(function() {
                    $(".calculating").hide();
                    $(".question_count span").html("3");
                    $(".question_count").show();
                    $(".question3").show();
                    $(".anses3").show();
                }, 1200);
            }, 300);
        },
        step3: function() {
            setTimeout(function() {
                $(".question_count").hide();
                $(".question1").hide();
                $(".anses1").hide();
                $(".calculating").show();
                setTimeout(function() {
                    $(".calculating").hide();
                    $(".survey_middle").css("vertical-align", "top");
                    $(".loading").show();
                    setTimeout(function() {
                        $(".check1").fadeIn(300);
                        setTimeout(function() {
                            $(".check2").fadeIn(300);
                            setTimeout(function() {
                                $(".check3").fadeIn(300);
                                setTimeout(function() {
                                    survey.change();
                                }, 1400);
                            }, 1100);
                        }, 1400);
                    }, 750);
                }, 600);
            }, 300);
        },
        change: function() {
            $(".headline,.small_headlines,.timer").hide();
            $(".loading").hide();
            $(".survey_outer").css("height", "auto");
            $(".last_page").show();
            $(".fbcoms").show();
            waitme();
        }
    };
    $(".like").click(function() {
        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected");
            $(this).html("Like");
            $("#youand").html("");
        } else {
            $(this).addClass("selected");
            $(this).html("Unlike");
            $("#youand").html("You and ");
        }
    });
    $(".fblike").click(function() {
        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected");
            $(this).html("Like");
        } else {
            $(this).addClass("selected");
            $(this).html("Unlike");
        }
    });

    function waitme() {
        FBcom("#fb1", 000);
        FBcom("#fb2", 000);
        FBcom("#fb3", 000);
        FBcom("#fb4", 000);
        FBcom("#fb5", 00);
        FBcom("#fb6", 000);
        FBcom("#fb7", 000);
        FBcom("#fb8", 0000);
        var ct = 48;
        (function loop() {
            var rand = random(2500, 5500);
            var ctrand = random(1, 4);
            ct = ct - ctrand;
            if (ct > 1) {
                setTimeout(function() {
                    loop();
                }, rand);
            } else {
                ct = "few";
            }
            $("#count").html(ct);
        }());
    }

    function FBcom(a, b) {
        setTimeout(function() {
            var m = 0,
                n = true,
                op = 0;
            $(a + ", " + a + " .comtxt, " + a + " .combot").slideDown(500);
            $().slideDown(500);
            var t = setInterval(function() {
                op += 0.2;
                $(a).css({
                    "opacity": op
                });
                m++;
                if (m === 5) clearInterval(t);
            }, 100);
        }, b);
    }

    function random(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    var out, pops = {
        init: function() {
            setTimeout(function() {
                var rand_name = pop_names[random(0, pop_names.length - 1)];
                var rand_text = pop_texts[random(0, pop_texts.length - 1)];
                var text = rand_name + " " + rand_text;
                $(".pops p").html(text);
                $(".pops").fadeIn(500);
                out = setTimeout(function() {
                    $(".pops").fadeOut(1000);
                    pops.init();
                }, 6000);
            }, random(6000, 15000));
        }
    };
    $("#iks").click(function() {
        clearTimeout(out);
        $(".pops").hide();
        pops.init();
    });
    $("#mins").html("0" + timer_start);
    $("#sec").html("00");
    var mins = timer_start,
        secs = 0,
        minutes, seconds, timer = {
            init: function() {
                var counter = setInterval(function() {
                    $(".timer_heading").addClass("blink");
                    setTimeout(function() {
                        $(".timer_heading").removeClass("blink");
                    }, 500);
                    secs--;
                    if (secs < 0) {
                        secs = 59;
                        mins--;
                        if (mins < 0) {
                            clearInterval(counter);
                            mins = 0;
                            secs = 0;
                            $(".timer_heading").hide();
                            $(".timer .small_headlines").show();
                        }
                        if (mins < 10) {
                            minutes = "0" + mins;
                        } else {
                            minutes = mins;
                        }
                    }
                    if (secs < 10) {
                        seconds = "0" + secs;
                    } else {
                        seconds = secs;
                    }
                    $("#mins").html(minutes);
                    $("#sec").html(seconds);
                }, 1000);
            }
        };
    if (c != '' && c != null) {
        $(".question_count").hide();
        $(".question1").hide();
        $(".anses1").hide();
        survey.change();
    }
    timer.init();
});