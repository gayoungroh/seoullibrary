//배너 슬라이드
{
	const $container = $('#cont .visual > .visual-container > .banner1 > .slides > .slides-container');
	const $indicator = $('#cont .visual > .visual-container > .banner1 > .slides-pagination > li > a');
	const $btnPrev = $('.banner1> .prev');
	const $btnNext = $('.banner1> .next');
	const $btnAuto = $('.banner1> .btn_auto');

	let nowIdx = 1;

	$indicator.on('click', function(evt){
		evt.preventDefault();

		nowIdx = $indicator.index(this)+1;

		$indicator.eq(nowIdx-1).parent().addClass('on').siblings().removeClass('on');

		$container.stop().animate({
			left: -769 * nowIdx
		});
	});


	$btnPrev.on('click', function(evt){
		evt.preventDefault();

		nowIdx--;
		console.log(`nowIdx = ${nowIdx}`);

		$container.stop().animate({
			left: -769 * nowIdx
		},function(){
			if(nowIdx===0){
				$container.css({
					left : -769*9
				});

				nowIdx = 9;
			}
	
			$indicator.eq(nowIdx-1).parent().addClass('on').siblings().removeClass('on');
	});
	});

	$btnNext.on('click', function(evt){
		evt.preventDefault();

		nowIdx++;
		console.log('nowIdx = ',nowIdx)

		$container.stop().animate({
			left: -769 * nowIdx
		},function(){
			if(nowIdx===10){
				$container.css({
					left : -769
				});
					nowIdx = 1;
			}

			$indicator.eq(nowIdx-1).parent().addClass('on').siblings().removeClass('on');
				
			});
	});

	$btnAuto.on('click', function(){
		// evt.preventDefault();
		if($(this).hasClass('pause')){

			$(this).removeClass('pause');
			clearInterval(intervalKey2);

		}else{
			$(this).addClass('pause');
			
			intervalKey2 = setInterval(function(){
				$btnNext.trigger('click');
			},3500);            
		}
	});



	$(window).on('load', function(){
		intervalKey2 = setInterval(function(){
			$btnNext.trigger('click');
		},3500);
	});
}

//culture 슬라이드 
{
const $Ccontainer = $('#cont > .culture > .culture-slides > .culture-container');

const $CbtnPrev = $('.culture > .culture-navigation.prev');
const $CbtnNext = $('.culture > .culture-navigation.next');

let nowIdx = 0;

$Ccontainer.stop().animate({left:-1200*nowIdx},500);


$CbtnPrev.on('click',function(evt){
	evt.preventDefault();
	nowIdx<1 ? nowIdx=1 : nowIdx--;

	$Ccontainer.stop().animate({left:-1200*nowIdx},500);
});

$CbtnNext.on('click',function(evt){
	evt.preventDefault();

	nowIdx<1 ? nowIdx++ : nowIdx=0;

	$Ccontainer.stop().animate({left:-1200*nowIdx},500);
});

}


//introduce 슬라이드 (tab 제이쿼리)
{
	//tab 제이쿼리
	$(document).ready(function(){
		$('ul.introduce-nav li').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('ul.introduce-nav li').removeClass('on');
			$('.introduce-slides').removeClass('on');

			$(this).addClass('on');
			$('#'+tab_id).addClass('on');

		});
 
	});


	//Swiper JS
	var swiperOption = (elNo) =>  {
		return {
			slidesPerView: 5,
			spaceBetween: 20,
			slidesPerGroup: 5,
			loop: true,
			// observer: true,
			// observeParents: true,
			// loopFillGroupWithBlank: true,
			// pagination: {
			// 	el: ".swiper-pagination",
			// 	clickable: false,
			// },
			navigation: {
				nextEl: ".next" + elNo,
				prevEl: ".prev" + elNo,
				// observer: true,
				// observeParents: true,
			}
	}}
	var mySwiper1 = new Swiper(".mySwiper1", swiperOption(1));
	var mySwiper2 = new Swiper(".mySwiper2", swiperOption(2));
	var mySwiper3 = new Swiper(".mySwiper3", swiperOption(3));


}


	//cont1 슬라이드
	{
		const $Scontainer = $('#cont > .cont1 > .cont1-slides > .slides > .slides-container > p ');
		const $Sindicator = $('#cont > .cont1 > .cont1-slides > .slides > .slides-pagination > li > a');
		const $SbtnPrev = $('.cont1 > .cont1-slides > .slides > .cont1-navigation.prev');
		const $SbtnNext = $('.cont1 > .cont1-slides > .slides > .cont1-navigation.next');
		const $SbtnAuto = $('.cont1 > .cont1-slides > .slides > .btn_auto');
		


		let contIdx = 0;

		const contAction = function(){
			$Scontainer.eq(contIdx).stop().fadeIn(500).siblings().fadeOut();
			$Sindicator.eq(contIdx).parent().addClass('on').siblings().removeClass('on');
		};

		$Sindicator.on('click',function(evt){
			evt.preventDefault();

			contIdx = $Sindicator.index(this);

			contAction();

	});


	$SbtnPrev.on('click',function(evt){
		evt.preventDefault();
		if(contIdx>0){
			contIdx--;
		}else{
			contIdx=6;
		}
		contAction();
	});

	$SbtnNext.on('click',function(evt){
		evt.preventDefault();
		if(contIdx<6){	
			contIdx++;
		}else{
			contIdx=0;
		}
		contAction();
	});

	$SbtnAuto.on('click', function(evt){
		evt.preventDefault();
		if($(this).hasClass('pause')){

			$(this).removeClass('pause');
			clearInterval(intervalKey);

		}else{
			$(this).addClass('pause');
			
			intervalKey = setInterval(function(){
				$SbtnNext.trigger('click');
			},3000);            
		}
	});


	$(window).on('load', function(){
		intervalKey = setInterval(function(){
			$SbtnNext.trigger('click');
		},3000);
	});



	}

//top 버튼 이벤트 구문
	$(window).scroll(function(){
		if($(window).scrollTop() > 100){
			$(".top").fadeIn();
		}else{
			$(".top").fadeOut();
		}
	});