// 버튼 0 누르면
// - 모든 버튼에 붙은 orange 클래스명 제거
// - 버튼0에 orange 클래스명 추가
// - 모든 div에 붙은 show 클래스명 제거
// - div0에 show 클래스명 추가  

// $('.tab-button').eq(0).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(0).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// });

// $('.tab-button').eq(1).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// });

// $('.tab-button').eq(2).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// });

var tabBtn = $('.tab-button')
var tabCtt = $('.tab-content')
var tabCnt = $('.tab-button').length;

// for (let i=0; i<tabCnt; i++) {
//     tabBtn.eq(i).on('click', function(){
//         tabBtn.removeClass('orange');
//         tabBtn.eq(i).addClass('orange');
//         tabCtt.removeClass('show');
//         tabCtt.eq(i).addClass('show');
//     });
// }

// tabBtn.each(function(index) {
//     $(this).on('click', function(){
//         tabBtn.removeClass('orange');
//         $(this).addClass('orange');
//         tabCtt.removeClass('show');
//         tabCtt.eq(index).addClass('show');
//     });
// });

// for(let i=0; i<tabCnt; i++) {
//     tabBtn.eq(i).on('click', function(){
//         tabOpen(i);
//     });
// }

$('.list').click(function(e){
    console.log($(e.target));

    // if($(e.target).is(tabBtn.eq(0)))
    //     tabOpen(0);
    // if($(e.target).is(tabBtn.eq(1)))
    //     tabOpen(1);
    // if($(e.target).is(tabBtn.eq(2)))
    //     tabOpen(2);

    console.log(parseInt(e.target.dataset.id));
    console.log(parseInt($(e.target).get(0).dataset.id));

    // tabOpen($(e.target).get(0).dataset.id);
    tabOpen(parseInt(e.target.dataset.id));
});

// 축약할 코드에 변수가 있으면 변수를 파라미터로 바꿔야 잘 동작함
function tabOpen(num) {
    tabBtn.removeClass('orange');
    tabBtn.eq(num).addClass('orange');
    tabCtt.removeClass('show');
    tabCtt.eq(num).addClass('show');
}