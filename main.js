class Cookie {
    constructor(name, picture) {
    let self = this;

    self.name = name;
    self.picture = picture;
    self.count = 0;

    let mainDiv = $('#cookie');
    let cookieDiv = $('<div></div>');

    mainDiv.append(cookieDiv);

    self.img = $(`<img src="${self.picture}">`);
    cookieDiv.append(self.img);

    self.counter = $('<p></p>');
    cookieDiv.append(self.counter);

    self.img.click(function() {
        self.count++;
        self.counter.text(`${self.count}.`);
    });
    }
}

function createCookie(name, picture) {
    let clickCount = 0;

    const $cookie = $('<div/>');
    const $img = $('<img/>', { src: picture }).appendTo($cookie);
    const $counter = $('<p/>').appendTo($cookie);

    $img.click(() => {
    clickCount++;
    $counter
        .text(`${clickCount}`)
    });

    return $cookie;
}

$(function() {
    const $main = $('#cookie');

    $main.append(createCookie('Peter', '../assets/cookie_8bit_good.png'));

});

$('#cookie').click(function() {
    var docHeight = $(document).height(),
        docWidth = $(document).width(),
        $div = $('#cookie'),
        divWidth = $div.width(),
        divHeight = $div.height(),
        heightMax = docHeight - divHeight,
        widthMax = docWidth - divWidth;

    $div.css({
        left: Math.floor( Math.random() * widthMax ),
        top: Math.floor( Math.random() * heightMax )
    });
});

var up = true;
var value = 0;
var increment = 10;
var ceiling = 100;

function PerformCalc() {
if (up == true && value <= ceiling) {
    value += increment

    if (value == ceiling) {
    up = false;
    }
} else {
    up = false
    value -= increment;

    if (value == 0) {
        up = true;
    }
}

document.getElementById('counter').innerHTML = 'Value: ' + value + '<br />';
}
setInterval(PerformCalc, 1000);
