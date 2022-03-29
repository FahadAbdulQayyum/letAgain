
const reso = document.getElementById('reso')
// QRCODE reader Copyright 2011 Lazar Laszlo
// http://www.webqr.com

var gCtx = null;
var gCanvas = null;
var c = 0;
var stype = 0;
var gUM = false;
var webkit = false;
var moz = false;
var v = null;
var arr = []
var htmlarr = []
var htmlarrr = []
let b = 1

var ar = []
var ar1 = []
var ar2 = []
var ar3 = []

var imghtml = '<div id="qrfile"><canvas id="out-canvas" width="320" height="240"></canvas>' +
    '<div id="imghelp">drag and drop a QRCode here' +
    '<br>or select a file' +
    '<input type="file" onchange="handleFiles(this.files)"/>' +
    '</div>' +
    '</div>';

var vidhtml = '<video id="v" autoplay></video>';

funcc()
// htmlarrr = localStorage.getItem('htmlarrr')

// function resoo() {
//     // console.log('reso.innerHTML = [...htmlarr]', reso.innerHTML = [...htmlarr]);
//     for (var a = 0; a <= 10; a++) {
//         reso.innerHTML = [...htmlarr].map((v) => v + "salaaam")
//     }
//     // reso.innerHTML = [...htmlarr]
// }

function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
}

function dragover(e) {
    e.stopPropagation();
    e.preventDefault();
}
function drop(e) {
    e.stopPropagation();
    e.preventDefault();

    var dt = e.dataTransfer;
    var files = dt.files;
    if (files.length > 0) {
        handleFiles(files);
    }
    else
        if (dt.getData('URL')) {
            qrcode.decode(dt.getData('URL'));
        }
}

function handleFiles(f) {
    var o = [];

    for (var i = 0; i < f.length; i++) {
        var reader = new FileReader();
        reader.onload = (function (theFile) {
            return function (e) {
                gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);

                qrcode.decode(e.target.result);
            };
        })(f[i]);
        reader.readAsDataURL(f[i]);
    }
}

function initCanvas(w, h) {
    gCanvas = document.getElementById("qr-canvas");
    gCanvas.style.width = w + "px";
    gCanvas.style.height = h + "px";
    gCanvas.width = w;
    gCanvas.height = h;
    gCtx = gCanvas.getContext("2d");
    gCtx.clearRect(0, 0, w, h);
}


function captureToCanvas() {
    if (stype != 1)
        return;
    if (gUM) {
        try {
            gCtx.drawImage(v, 0, 0);
            try {
                qrcode.decode();
            }
            catch (e) {
                console.log(e);
                setTimeout(captureToCanvas, 500);
            };
        }
        catch (e) {
            console.log(e);
            setTimeout(captureToCanvas, 500);
        };
    }
}

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}



// function read(a) {
//     var html = "<br>";
//     if (a.indexOf("http://") === 0 || a.indexOf("https://") === 0)
//         html += "<a target='_blank' href='" + a + "'>" + a + "</a><br>";
//     html += "<b>" + htmlEntities(a) + "</b><br><br>";
//     document.getElementById("result").innerHTML = html;
// }

// function isCanvasSupported() {
//     var elem = document.createElement('canvas');
//     return !!(elem.getContext && elem.getContext('2d'));
// }
// function success(stream) {

//     v.srcObject = stream;
//     v.play();

//     gUM = true;
//     setTimeout(captureToCanvas, 500);
// }


function onClick(i) {
    console.log('onClick clicked');
}


// function onClick(i) {
//     htmlarr.splice(i, 1)

//     for (var vv = 0; vv < htmlarrr.length; vv++) {
//         if (htmlarrr[i] == htmlarrr[vv])
//             console.log('onClick htmlarrr[i] == htmlarrr[vv]', vv);
//         htmlarrr.splice(vv, 1)
//         // htmlarrr.filter(v => { return v != vv })
//         // delete htmlarrr[vv]

//         console.log('htmlarrr', htmlarrr);
//     }


//     console.log('htmlarr', htmlarr);
//     console.log('htmlarrr', htmlarrr);
//     console.log('htmlarrr.map(v => v)', htmlarrr.map(v => v));
//     console.log('htmlarr[i]', htmlarr[i]);
//     console.log('htmlarrr[i]', htmlarrr[i]);
//     arr.splice(i, 1)
//     // document.getElementById("resHtml").innerHTML = [...htmlarr].map((v, i) => v + '<button class="btnn" onClick = "Addition(' + i + ',' + b + ')">+' + b + '</button> ' + '<button class="btnn" onClick="onClick(' + i + ')">x</button>' + "<br/>").join('')
//     document.getElementById("resHtml").innerHTML = [...htmlarr].map((v, i) => v + '<button class="btnnn" onClick = "Addition(' + i + ',' + b + ')">+' + (htmlarrr.map(v => v == htmlarr[i]).filter(v => v).length) + '</button> ' + '<button class="btnnnn" onClick = "Substraction(' + i + ',' + b + ')">-' + '</button> ' + '<button class="btnn" onClick="onClick(' + i + ')">x</button>' + "<br/>").join('')
//     // document.getElementById("resHtml").innerHTML = [...htmlarr].map((v, i) => v + '<button class="btnn" onClick = "Addition(' + i + ',' + b + ')">+' + (htmlarrr.map(v => v == htmlarr[i]).filter(v => v).length) + '</button> ' + '<button class="btnn" onClick="onClick(' + i + ')">x</button>' + "<br/>").join('')
//     // document.getElementById("res").innerHTML = +[...arr].reduce((acc, user) => acc += user, 0)
//     // document.getElementById("res").innerHTML = +[...htmlarrr]
//     console.log('+[...htmlarrr]', [...htmlarrr].map(v => v.slice(v.indexOf('-') + 5, v.indexOf('-') + 12)));
//     var varr = [...htmlarrr].map(v => v.slice(v.indexOf('-') + 5, v.indexOf('-') + 15))
//     console.log('varr', varr);
//     document.getElementById("res").innerHTML = [...varr].reduce((acc, user) => acc += +user, 0);
// }

function Substraction(i, b) {
    // document.getElementById("res").innerHTML = arr
    // console.log('htmlarrr', htmlarrr.push(htmlarr[0]));
    console.log('Substraction htmlarrr[i], i)', htmlarrr[i], i);


    console.log('@@@', htmlarrr.map(v => v == htmlarrr[i]));
    for (var vr = 0; vr < htmlarrr.length; vr++) {
        if (htmlarrr[vr] == htmlarrr[i]) {
            ar.push(vr)
            console.log('@@@!!vr for', vr);
            console.log('@@@!!htmlarrr[vr] for', htmlarrr[vr]);
            console.log('@@@!!htmlarrr[i] for', htmlarrr[i]);
        } else {
            console.log('@@@ else');
        }
    }
    console.log('!@#$%^&', ar[0]);


    // for (var vr = 0; vr < htmlarr.length; vr++) {
    //     console.log('@@@!!htmlarr for', htmlarr[vr]);
    // }
    ar2 = []
    for (var vr = 0; vr < htmlarr.length; vr++) {
        console.log('@@@!!htmlarr for', htmlarr[i]);
    }
    ar2.push(htmlarr[i])

    for (var vr = 0; vr < htmlarrr.length; vr++) {
        // if (htmlarrr.map(v => v == ar2.join())) {
        if (htmlarrr[vr] == ar2.join()) {
            console.log('vr using ar2', vr);
            ar3.push(vr)
            console.log('htmlarrr.map(v => v == ar2.join())', htmlarrr.map(v => v == ar2.join()));
            // console.log('htmlarrr.map(v => v == ar2.join())', htmlarrr.map(v => v == ar2.join()).filter(v => v));
        }
        console.log('ar2', ar2);
        console.log('_________', htmlarrr.map(v => v == ar2.join()));
    }

    for (var vr = 0; vr < htmlarrr.length; vr++) {
        if (htmlarrr[vr] == htmlarrr[ar[0]]) {
            ar1.push(vr)
            console.log('@@@!!vr for', vr);
            console.log('@@@!!htmlarrr[vr] for', htmlarrr[vr]);
            console.log('@@@!!htmlarrr[ar[0]] for', htmlarrr[ar[0]]);
        } else {
            console.log('@@@!! else');
        }
    }
    console.log('if !@#$%^&', htmlarrr.map(v => v == htmlarrr[ar[0]]));



    console.log('htmlarrr[ar[0]]', htmlarrr[ar[0]]);
    console.log('htmlarrr[ar1[0]]', htmlarrr[ar1[0]]);
    console.log('Substraction htmlarrr.splice(htmlarrr[i], 1)', htmlarrr.splice(ar3[0], 1));
    // console.log('Substraction htmlarrr.splice(htmlarrr[i], 1)', htmlarrr.splice(ar[0], 1));
    console.log('ar', ar);
    console.log('ar1', ar1);
    console.log('ar2', ar2);
    console.log('ar3', ar3);
    ar = []
    ar1 = []
    ar2 = []
    ar3 = []
    console.log('ar=[]', ar);
    console.log('ar1=[]', ar1);
    console.log('ar2=[]', ar2);
    console.log('ar3=[]', ar3);
    // console.log('Substraction htmlarrr.splice(htmlarrr[i], 1)', htmlarrr.splice(htmlarrr[i], 1));
    console.log('Substraction htmlarrr modi, i', (htmlarrr.map(v => v == htmlarr[i]).filter(v => v).length), i);
    console.log('Substraction htmlarrr, i', htmlarrr, i);
    console.log('Substraction htmlarr', htmlarr);
    document.getElementById("resHtml").innerHTML = [...htmlarr].map((v, i) => v + '<button class="btnnn" onClick = "Addition(' + i + ',' + b + ')">+' + (htmlarrr.map(v => v == htmlarr[i]).filter(v => v).length) + '</button> ' + '<button class="btnnnn" onClick = "Substraction(' + i + ',' + b + ')">-' + '</button> ' + '<button class="btnn" onClick="onClick(' + i + ')">x</button>' + "<br/>").join('')
    // document.getElementById("resHtml").innerHTML = [...htmlarr].map((v, i) => v + '<button class="btnnn" onClick = "Addition(' + i + ',' + b + ')">+' + (htmlarrr.map(v => v == htmlarr[i]).filter(v => v).length) + '</button> ' + '<button class="btnnnn" onClick = "Substraction(' + i + ',' + b + ')">-' + '</button> ' + '<button class="btnn" onClick="onClick(' + i + ')">x</button>' + "<br/>").join('')
    console.log('+[...htmlarrr]', [...htmlarrr].map(v => v.slice(v.indexOf('-') + 5, v.indexOf('-') + 12)));
    var varr = [...htmlarrr].map(v => v.slice(v.indexOf('-') + 5, v.indexOf('-') + 15))
    console.log('varr', varr);
    document.getElementById("res").innerHTML = "Rs " + [...varr].reduce((acc, user) => acc += +user, 0) + "/= ";
    // document.getElementById("res").innerHTML = [...varr].reduce((acc, user) => acc += +user, 0);
}


// ------------17-03-2022-------------(Built Again)
function Addition(i, b) {
    // document.getElementById("res").innerHTML = arr
    // console.log('htmlarrr', htmlarrr.push(htmlarr[0]));
    console.log('Addition htmlarrr[i]', htmlarrr[i]);
    console.log('Addition htmlarr[i]', htmlarr[i]);
    console.log('--**--**--**--,i', htmlarr[i], i);
    // console.log('Addition htmlarrr.push(htmlarrr[i]', htmlarrr.push(htmlarrr[i]));
    console.log('Addition htmlarrr.push(htmlarrr[i]', htmlarrr.push(htmlarr[i]));
    console.log('Addition htmlarrr modi', (htmlarrr.map(v => v == htmlarr[i]).filter(v => v).length));
    console.log('Addition htmlarrr', htmlarrr);
    document.getElementById("resHtml").innerHTML = [...htmlarr].map((v, i) => v + '<button class="btnnn" onClick = "Addition(' + i + ',' + b + ')">+' + (htmlarrr.map(v => v == htmlarr[i]).filter(v => v).length) + '</button> ' + '<button class="btnnnn" onClick = "Substraction(' + i + ',' + b + ')">-' + '</button> ' + '<button class="btnn" onClick="onClick(' + i + ')">x</button>' + "<br/>").join('')
    // document.getElementById("resHtml").innerHTML = [...htmlarr].map((v, i) => v + '<button class="btnnn" onClick = "Addition(' + i + ',' + b + ')">+' + (htmlarrr.map(v => v == htmlarr[i]).filter(v => v).length) + '</button> ' + '<button class="btnnnn" onClick = "Substraction(' + i + ',' + b + ')">-' + '</button> ' + '<button class="btnn" onClick="onClick(' + i + ')">x</button>' + "<br/>").join('')
    console.log('+[...htmlarrr]', [...htmlarrr].map(v => v.slice(v.indexOf('-') + 5, v.indexOf('-') + 12)));
    var varr = [...htmlarrr].map(v => v.slice(v.indexOf('-') + 5, v.indexOf('-') + 15))
    console.log('varr', varr);
    console.log('+[...varr].reduce((acc, user) => acc += user, 0)', [...varr].reduce((acc, user) => acc += +user, 0));
    document.getElementById("res").innerHTML = "Rs " + [...varr].reduce((acc, user) => acc += +user, 0) + "/= ";
    // document.getElementById("res").innerHTML = [...varr].reduce((acc, user) => acc += +user, 0);
}
// -------------------------------------

// ------------17-03-2022-------------(Built)
// function Addition(i, b) {
//     document.getElementById("res").innerHTML = arr
//     console.log('htmlarr[i]', htmlarr.push(htmlarr[i]));
//     console.log('htmlarr modi', htmlarr.map(v => v == htmlarr[i]).filter(v => v).length);
//     console.log('htmlarr', htmlarr);
//     console.log('clicked +', arr[i]);

//     // document.getElementById("resHtml").innerHTML = (htmlarr.map(v => v == htmlarr[i]).filter(v => v).length)
//     document.getElementById("resHtml").innerHTML = [...htmlarr].map((v, i) => v + '<button class="btnn" onClick = "Addition(' + i + ',' + b + ')">+' + (htmlarr.map(v => v == htmlarr[i]).filter(v => v).length) + '</button> ' + '<button class="btnn" onClick="onClick(' + i + ')">x</button>' + "<br/>").join('')

// }
// -------------------------------------


// ------------17-03-2022-------------(Commented Out)
// function Addition(i, b) {
//     b++;
//     // var z = 1
//     for (var v = 0; v < arr.length; v++) {
//         var arrr = arr[i] * b
//         // z[v] = b
//         console.log('arr[i], i', arr[i] * b, i);
//         // console.log('v,i', v, i);
//         // console.log('z[i]', z[i]);
//         // console.log('htmlarr.map((v, i) => v * b, i)', htmlarr.map((v, i) => +v.slice(v.indexOf('----') + 5)));
//         document.getElementById("resHtml").innerHTML = [...htmlarr].map((v, i) => v + '<button class="btnn" onClick = "Addition(' + i + ',' + b + ')">+' + b + '</button> ' + ' <button class= "btnn" onClick = "onClick(' + i + ')">x</button>' + " <br/><br/> ").join('')
//     }
//     // b = 1

//     document.getElementById("res").innerHTML = arrr
// }
// -------------------------------------

function btnSubmit() {
    console.log('btnSubmit', htmlarrr);
    // axios.post(`http://localhost:8080/auth/login`, htmlarrr)
    axios.post(`https://backend4-p.herokuapp.com//auth/login`, htmlarrr)
        .then((res) => {
            const { data } = res
            console.log('data', data);
        })
        .catch(e => console.log('e', e))
}

function Save() {
    console.log('pressed Save');

    // localStorage.removeItem('htmlarrr')
    // localStorage.removeItem('htmlarr')

    localStorage.setItem('htmlarrr', [htmlarrr])
    localStorage.setItem('htmlarr', [htmlarr])
}

function emptyTrolley() {
    localStorage.removeItem('htmlarrr')
    localStorage.removeItem('htmlarr')
    console.log('htmlarrr', htmlarrr);
    console.log('htmlarr', htmlarr);
    window.location.reload();
}

function read(a) {
    var c = htmlEntities(a).slice(a.indexOf('Rs') + 2,)
    var html = htmlEntities(a).slice(0, htmlEntities(a).indexOf('Rs'),) + " ---- " + c

    // ------------------------
    // htmlarr.push(html)
    if (htmlarr.map(v => v == html).filter(v => v).join() == 'true') {
        console.log(htmlarr)
    } else {
        htmlarr.push(html)
        console.log(htmlarr)
    }
    // ------------------------


    // ------------------------
    htmlarrr.push(html)
    // if (htmlarrr.map(v => v == html).filter(v => v).join() == 'true') {
    //     console.log(htmlarrr)
    // } else {
    //     htmlarrr.push(html)
    //     console.log(htmlarrr)
    // }
    // ------------------------

    // htmlarrr.push(htmlarr)
    document.getElementById("result").innerHTML += html + "<p>\n</p>"

    arr.push(+c.toString())
    console.log('c', c);
    console.log('html', html);
    console.log('htmlarr', htmlarr);
    console.log('arr.reduce', [...arr].reduce((acc, user) => acc += user, 0));

    var varr = [...htmlarrr].map(v => v.slice(v.indexOf('-') + 5, v.indexOf('-') + 15))
    console.log('varr', varr);
    // document.getElementById("res").innerHTML = [...varr].reduce((acc, user) => acc += +user, 0);
    document.getElementById("res").innerHTML = "Rs " + [...varr].reduce((acc, user) => acc += +user, 0) + "/= ";
    // document.getElementById("res").innerHTML = +[...arr].reduce((acc, user) => acc += user, 0)

    document.getElementById("resHtml").innerHTML = [...htmlarr].map((v, i) => v + '<button class="btnnn" onClick = "Addition(' + i + ',' + b + ')">+' + (htmlarrr.map(v => v == htmlarr[i]).filter(v => v).length) + '</button> ' + '<button class="btnnnn" onClick = "Substraction(' + i + ',' + b + ')">-' + '</button> ' + '<button class="btnn" onClick="onClick(' + i + ')">x</button>' + "<br/>").join('')
    // document.getElementById("resHtml").innerHTML = [...htmlarr].map((v, i) => v + '<button class="btnnn" onClick = "Addition(' + i + ',' + b + ')">+' + (htmlarrr.map(v => v == htmlarr[i]).filter(v => v).length) + '</button> ' + ' <button class= "btnn" onClick = "onClick(' + i + ')" >x</button> ' + " <br/><br/> ").join('')
}

function isCanvasSupported() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
}
function success(stream) {

    v.srcObject = stream;
    v.play();

    gUM = true;
    setTimeout(captureToCanvas, 500);
}

function error(error) {
    gUM = false;
    return;
}

function load() {
    if (isCanvasSupported() && window.File && window.FileReader) {
        initCanvas(800, 600);
        qrcode.callback = read;
        document.getElementById("mainbody").style.display = "inline";
        setwebcam();
    }
    else {
        document.getElementById("mainbody").style.display = "inline";
        document.getElementById("mainbody").innerHTML = '<p id="mp1">QR code scanner for HTML5 capable browsers</p><br>' +
            '<br><p id="mp2">sorry your browser is not supported</p><br><br>' +
            '<p id="mp1">try <a href="http://www.mozilla.com/firefox"><img src="firefox.png" /></a> or <a href="http://chrome.google.com"><img src="chrome_logo.gif" /></a> or <a href="http://www.opera.com"><img src="Opera-logo.png" /></a></p>';
    }
}

function setwebcam() {

    var options = true;
    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
        try {
            navigator.mediaDevices.enumerateDevices()
                .then(function (devices) {
                    devices.forEach(function (device) {
                        if (device.kind === 'videoinput') {
                            if (device.label.toLowerCase().search("back") > -1)
                                options = { 'deviceId': { 'exact': device.deviceId }, 'facingMode': 'environment' };
                        }
                        console.log(device.kind + ": " + device.label + " id = " + device.deviceId);
                    });
                    setwebcam2(options);
                });
        }
        catch (e) {
            console.log(e);
        }
    }
    else {
        console.log("no navigator.mediaDevices.enumerateDevices");
        setwebcam2(options);
    }

}

function setwebcam2(options) {
    console.log(options);
    // htmlarrr = localStorage.getItem('htmlarrr')
    document.getElementById("result").innerHTML = "Scanning..." + "<br><br>";
    if (stype == 1) {
        setTimeout(captureToCanvas, 500);
        return;
    }
    var n = navigator;
    document.getElementById("outdiv").innerHTML = vidhtml;
    v = document.getElementById("v");


    if (n.mediaDevices.getUserMedia) {
        n.mediaDevices.getUserMedia({ video: options, audio: false }).
            then(function (stream) {
                success(stream);
            }).catch(function (error) {
                error(error)
            });
    }
    else
        if (n.getUserMedia) {
            webkit = true;
            n.getUserMedia({ video: options, audio: false }, success, error);
        }
        else
            if (n.webkitGetUserMedia) {
                webkit = true;
                n.webkitGetUserMedia({ video: options, audio: false }, success, error);
            }

    document.getElementById("qrimg").style.opacity = 0.2;
    document.getElementById("webcamimg").style.opacity = 1.0;

    stype = 1;
    setTimeout(captureToCanvas, 500);
}

function setimg() {
    document.getElementById("result").innerHTML = "";
    if (stype == 2)
        return;
    document.getElementById("outdiv").innerHTML = imghtml;
    //document.getElementById("qrimg").src="qrimg.png";
    //document.getElementById("webcamimg").src="webcam2.png";
    document.getElementById("qrimg").style.opacity = 1.0;
    document.getElementById("webcamimg").style.opacity = 0.2;
    var qrfile = document.getElementById("qrfile");
    qrfile.addEventListener("dragenter", dragenter, false);
    qrfile.addEventListener("dragover", dragover, false);
    qrfile.addEventListener("drop", drop, false);
    stype = 2;
}
function funcc() {
    console.log('just');
    if (localStorage.getItem('htmlarrr') !== null)
        htmlarrr.push(localStorage.getItem('htmlarrr'))
    if (localStorage.getItem('htmlarr') !== null)
        htmlarr.push(localStorage.getItem('htmlarr'))
    console.log('htmlarrr before', htmlarrr);
    console.log('htmlarr before', htmlarr);
    console.log('" "', htmlarrr.map(v => v === ''));
    console.log('" "', htmlarrr[0] !== null);
    console.log('htmlarrr split', htmlarrr.toString().split(','));
    console.log('htmlarr split', htmlarr.toString().split(','));
    // if (htmlarrr.map(v => v.length === 0)) {
    // htmlarrr = ['fahad --- 90']
    // if (htmlarrr.length !== 0) {
    //     htmlarrr = htmlarrr.toString().split(',')
    //     console.log('if Fahad', htmlarrr);
    // }
    // else
    //     console.log('else Fahad', htmlarrr);

    if (htmlarrr.length !== 0)
        htmlarrr = htmlarrr.toString().split(',')
    if (htmlarr.length !== 0)
        htmlarr = htmlarr.toString().split(',')

    console.log('htmlarrr After', htmlarrr);
    console.log('htmlarr After', htmlarr);


    // document.getElementById("result").innerHTML = "f" + "<br><br>";

    document.getElementById("resHtml").innerHTML = [...htmlarr].map((v, i) => v + '<button class="btnnn" onClick = "Addition(' + i + ',' + b + ')">+' + (htmlarrr.map(v => v == htmlarr[i]).filter(v => v).length) + '</button> ' + '<button class="btnnnn" onClick = "Substraction(' + i + ',' + b + ')">-' + '</button> ' + '<button class="btnn" onClick="onClick(' + i + ')">x</button>' + "<br/>").join('')
    var varr = [...htmlarrr].map(v => v.slice(v.indexOf('-') + 5, v.indexOf('-') + 15))
    document.getElementById("res").innerHTML = "Rs " + [...varr].reduce((acc, user) => acc += +user, 0) + "/= ";

    console.log('hvrr', localStorage.getItem('htmlarrr') == null);
    console.log('hvrr', localStorage.getItem('htmlarrr') !== null);
}




// // QRCODE reader Copyright 2011 Lazar Laszlo
// // http://www.webqr.com

// var gCtx = null;
// var gCanvas = null;
// var c = 0;
// var stype = 0;
// var gUM = false;
// var webkit = false;
// var moz = false;
// var v = null;

// var imghtml = '<div id="qrfile"><canvas id="out-canvas" width="320" height="240"></canvas>' +
//     '<div id="imghelp">drag and drop a QRCode here' +
//     '<br>or select a file' +
//     '<input type="file" onchange="handleFiles(this.files)"/>' +
//     '</div>' +
//     '</div>';

// var vidhtml = '<video id="v" autoplay></video>';

// function dragenter(e) {
//     e.stopPropagation();
//     e.preventDefault();
// }

// function dragover(e) {
//     e.stopPropagation();
//     e.preventDefault();
// }
// function drop(e) {
//     e.stopPropagation();
//     e.preventDefault();

//     var dt = e.dataTransfer;
//     var files = dt.files;
//     if (files.length > 0) {
//         handleFiles(files);
//     }
//     else
//         if (dt.getData('URL')) {
//             qrcode.decode(dt.getData('URL'));
//         }
// }

// function handleFiles(f) {
//     var o = [];

//     for (var i = 0; i < f.length; i++) {
//         var reader = new FileReader();
//         reader.onload = (function (theFile) {
//             return function (e) {
//                 gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);

//                 qrcode.decode(e.target.result);
//             };
//         })(f[i]);
//         reader.readAsDataURL(f[i]);
//     }
// }

// function initCanvas(w, h) {
//     gCanvas = document.getElementById("qr-canvas");
//     gCanvas.style.width = w + "px";
//     gCanvas.style.height = h + "px";
//     gCanvas.width = w;
//     gCanvas.height = h;
//     gCtx = gCanvas.getContext("2d");
//     gCtx.clearRect(0, 0, w, h);
// }


// function captureToCanvas() {
//     if (stype != 1)
//         return;
//     if (gUM) {
//         try {
//             gCtx.drawImage(v, 0, 0);
//             try {
//                 qrcode.decode();
//             }
//             catch (e) {
//                 console.log(e);
//                 setTimeout(captureToCanvas, 500);
//             };
//         }
//         catch (e) {
//             console.log(e);
//             setTimeout(captureToCanvas, 500);
//         };
//     }
// }

// function htmlEntities(str) {
//     return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// }

// function read(a) {
//     var html = "<br>";
//     if (a.indexOf("http://") === 0 || a.indexOf("https://") === 0)
//         html += "<a target='_blank' href='" + a + "'>" + a + "</a><br>";
//     html += "<b>" + htmlEntities(a) + "</b><br><br>";
//     document.getElementById("result").innerHTML = html;
// }

// function isCanvasSupported() {
//     var elem = document.createElement('canvas');
//     return !!(elem.getContext && elem.getContext('2d'));
// }
// function success(stream) {

//     v.srcObject = stream;
//     v.play();

//     gUM = true;
//     setTimeout(captureToCanvas, 500);
// }

// function error(error) {
//     gUM = false;
//     return;
// }

// function load() {
//     if (isCanvasSupported() && window.File && window.FileReader) {
//         initCanvas(800, 600);
//         qrcode.callback = read;
//         document.getElementById("mainbody").style.display = "inline";
//         setwebcam();
//     }
//     else {
//         document.getElementById("mainbody").style.display = "inline";
//         document.getElementById("mainbody").innerHTML = '<p id="mp1">QR code scanner for HTML5 capable browsers</p><br>' +
//             '<br><p id="mp2">sorry your browser is not supported</p><br><br>' +
//             '<p id="mp1">try <a href="http://www.mozilla.com/firefox"><img src="firefox.png"/></a> or <a href="http://chrome.google.com"><img src="chrome_logo.gif"/></a> or <a href="http://www.opera.com"><img src="Opera-logo.png"/></a></p>';
//     }
// }

// function setwebcam() {

//     var options = true;
//     if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
//         try {
//             navigator.mediaDevices.enumerateDevices()
//                 .then(function (devices) {
//                     devices.forEach(function (device) {
//                         if (device.kind === 'videoinput') {
//                             if (device.label.toLowerCase().search("back") > -1)
//                                 options = { 'deviceId': { 'exact': device.deviceId }, 'facingMode': 'environment' };
//                         }
//                         console.log(device.kind + ": " + device.label + " id = " + device.deviceId);
//                     });
//                     setwebcam2(options);
//                 });
//         }
//         catch (e) {
//             console.log(e);
//         }
//     }
//     else {
//         console.log("no navigator.mediaDevices.enumerateDevices");
//         setwebcam2(options);
//     }

// }

// function setwebcam2(options) {
//     console.log(options);
//     document.getElementById("result").innerHTML = "- scanning -";
//     if (stype == 1) {
//         setTimeout(captureToCanvas, 500);
//         return;
//     }
//     var n = navigator;
//     document.getElementById("outdiv").innerHTML = vidhtml;
//     v = document.getElementById("v");


//     if (n.mediaDevices.getUserMedia) {
//         n.mediaDevices.getUserMedia({ video: options, audio: false }).
//             then(function (stream) {
//                 success(stream);
//             }).catch(function (error) {
//                 error(error)
//             });
//     }
//     else
//         if (n.getUserMedia) {
//             webkit = true;
//             n.getUserMedia({ video: options, audio: false }, success, error);
//         }
//         else
//             if (n.webkitGetUserMedia) {
//                 webkit = true;
//                 n.webkitGetUserMedia({ video: options, audio: false }, success, error);
//             }

//     document.getElementById("qrimg").style.opacity = 0.2;
//     document.getElementById("webcamimg").style.opacity = 1.0;

//     stype = 1;
//     setTimeout(captureToCanvas, 500);
// }

// function setimg() {
//     document.getElementById("result").innerHTML = "";
//     if (stype == 2)
//         return;
//     document.getElementById("outdiv").innerHTML = imghtml;
//     //document.getElementById("qrimg").src="qrimg.png";
//     //document.getElementById("webcamimg").src="webcam2.png";
//     document.getElementById("qrimg").style.opacity = 1.0;
//     document.getElementById("webcamimg").style.opacity = 0.2;
//     var qrfile = document.getElementById("qrfile");
//     qrfile.addEventListener("dragenter", dragenter, false);
//     qrfile.addEventListener("dragover", dragover, false);
//     qrfile.addEventListener("drop", drop, false);
//     stype = 2;
// }
