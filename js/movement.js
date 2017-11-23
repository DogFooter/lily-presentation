var sastr = 'SHIN_JAE_PYUNG.SAYO.1981.VOCAL_GUITAR.KAIST_COMPUTER_SCIENCE.MUSICIAN_PEPPERTONES'.split('.');
var nostr = 'LEE_JANG_WON.NOSH.1981.VOCAL_BASS.KAIST_COMPUTER_SCIENCE.TALENT_PEPPERTONES'.split('.');
var category = [
    'name', 'nickname', 'birth', 'part', 'education', 'job'
]
var text = {
    'sayo': sastr,
    'nosh': nostr
}

var playerLists = [
    'PLksmX-CdzabiHLsftCyMKnIleV3bEo0Y1',
    'PL5DZ9VG0AfA1XZlfJlIhz_gQkd9B1xMg7',
    'PLTSHWuLws1nclCFfXy0lQ9b3gPB1_6om4'
]

var mouse_x = 0;
var mouse_y = 0;

var tool_inter = null;
document.onmousemove = function (e) {
    mouse_x = e.clientX;
    mouse_y = e.clientY;
}

function tooltipHoverIn() {
    if (tool_inter == null) {
        tool_inter = setInterval("changeTooltipPos()", 50);
    }
}
function tooltopHoverOut() { 
    if (tool_inter != null) {
        console.log('out');
        clearInterval(tool_inter);
        $('.profile-tooltip').css(
            {
                'display': 'none'
            }
        );
        tool_inter = null;
    }
}
function changeTooltipPos () {

    $('.profile-tooltip').css(
        {
            'display': 'inline',
            'left': mouse_x+5,
            'top': mouse_y+5 
        }
    );
}

status_ = 0;
now_slide = '#s0-1'
function showSlide(id) {
    $(id).css({'display': 'inline'});
}
function hideSlide(id) {
    $(id).css({'display': 'none'});
}
$('#slide-nav').click(function(){
    status_ = $('#slide-num').val();
    doSlideAction();
});
function doSlideAction(){ 
    $('#slide-num').val(status_);
    switch (status_) {
        case 0:
            // first page
            hideSlide(now_slide);
            showSlide('#s0-1');
            showImg();
            status_ += 1;
            break;
        case 1:
            moveShade()
            break; 
        case 2:
            hideSlide('#s0-1');
            showSlide('#s2');
            now_slide = '#s2'
            for (var i = 0; i < text.sayo.length; i++) {
                $('<span class=\"sayo-profile '+category[i]+'\">'+text.sayo[i]+'</span>.').appendTo('#sayo-p')
            }
            
            $('.sayo-profile').mouseenter(function(){ 
                var img_name = $(this)[0].classList[1]
                $('.profile-tooltip > img').attr('src', './imgs/sayo/sayo_'+img_name + '.png');
                
                tooltipHoverIn()
            }).mouseleave(tooltopHoverOut);
            status_ += 1;
            break;
        case 3:
            hideSlide('#s2');
            showSlide('#s3');

            now_slide = '#s3'
            for (var i = 0; i < text.nosh.length; i++) {
                $('<span class=\"nosh-profile '+category[i]+'\">'+text.nosh[i]+'</span>.').appendTo('#nosh-p')
            }
            
            $('.nosh-profile').mouseenter(function(){ 
                var img_name = $(this)[0].classList[1]
                $('.profile-tooltip > img').attr('src', './imgs/nosh/nosh_'+img_name + '.png');
                
                tooltipHoverIn()
            }).mouseleave(tooltopHoverOut);
            status_ += 1;
            break; 
        case 4:
            hideSlide('#s3');
            showSlide('#s4');

            now_slide = '#s4'
            status_ += 1;
            break; 
        case 5:
            hideSlide('#s4');
            showSlide('#s5');

            now_slide = '#s5'
            status_ += 1;
            break; 
        case 6:
            hideSlide('#s5');
            showSlide('#s6');

            now_slide = '#s6'
            status_ += 1;
            break; 
        case 7:
            hideSlide('#s6');
            showSlide('#s7');

            now_slide = '#s7'
            status_ += 1;
            break; 
        case 8:
            hideSlide('#s7');
            showSlide('#s8');

            now_slide = '#s8'
            status_ += 1;
            break; 
        case 9:
            hideSlide('#s8');
            showSlide('#s9');

            now_slide = '#s9'
            status_ += 1;
            break; 
        case 10:
            hideSlide('#s9');
            showSlide('#s10');

            now_slide = '#s10'
            status_ += 1;
            break; 
        case 11:
            hideSlide('#s10');
            showSlide('#s11');

            now_slide = '#s11'
            status_ += 1;
            break; 


    } 
}
$('.btn').click(function () {
    doSlideAction();
});

function showImg() {
    $('#peppertones_img').css({'display': 'inline'});
}
function moveShade() {
    btnId = 'forward'
    position = $('#shot-shade')[0].classList[0];
    if (btnId == 'forward') { 
        if (position == 3) {
            // most right side
        }
        else {
            $('#group_name_main_title').hide('slow');
            $('#shot-shade').animate( {'left': "+=50vw"}, 'slow'); console.log('hello') 
            $('#shot-shade').removeClass(position).addClass(parseInt(position)+1 +"");
            position = parseInt(position) +1 +"";
        }
    }
    else {
        if (position == 1 || position == 2) {

        } else {
            $('#shot-shade').animate( {'left': "-=50vw"}, 'slow'); console.log('hello') 
            $('#shot-shade').removeClass(position).addClass(parseInt(position)-1 +""); 
            position = parseInt(position) -1 +"";
        }
    }
    console.log(position)
    if (position == 3) {
        $('#shot-shade-content').text('SHIN JAE PYUNG\n a.k.a Sayo')
        status_ = 2;
    } else if (position == 2) { 
        $('#shot-shade-content').text('LEE JANG WON\n a.k.a Nosh')
    }

}

