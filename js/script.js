
//가로스크롤
let wheelDelta=0;
let browser=0;

 $('.section').each(function(index){
	$(this).on('mousewheel DOMMouseScroll',function(e){
		e.preventDefault();
		browser=window.navigator.userAgent.toLowerCase().indexOf('firefox') //indexof에서 찾는 문자가 없으면 -1이 나타남.
		if(browser>=0){ //파이어폭스이면 (순번을 나타냄), 파이어폭스가 없으면(-1)
			wheelDelta=-e.detail*40;
		}else{
			wheelDelta=e.originalEvent.wheelDelta
		}
		//console.log(wheelDelta)
		
		if(wheelDelta<0){
			if(index<$('.section').length-1){  //index가 섹션보다 작다는 건 아래로 스크롤할 게 있다는 뜻!
				$('html, body').stop().animate({scrollLeft:$(this).next().offset().left},200)
			}
		}else{
			if(index>0){
				$('html, body').stop().animate({scrollLeft:$(this).prev().offset().left},200)
			}
		}
	}); 

	//progress
	$(window).scroll(function(){
		let scl=$(window).scrollLeft();
		console.log(scl)
		let windowleft=$('#skill').offset();
		console.log(windowleft)
		//console.log(windowleft)
		if(scl>=windowleft.left-1300){
			  
			  $('.progress-bar').each(function(){
				 let progressWrap=$(this),
				 progressBar=progressWrap.find('.bar'),
				 progressText=progressWrap.find('.num'),
				 progressNum=progressText.attr('data-num');
				 console.log(progressNum)
			  
			  
				 progressBar.animate({width:progressNum+"%"},2000);
				 progressText.text(90)
			  
				 setInterval(textAni, 1000/10)
				 function textAni(){
					let currentWidth=progressBar.width() / progressWrap.width()*100;
					progressText.text(Math.ceil(currentWidth)+'%')
				 }
			  });
			}
	 })



	//클릭 시 이동
	 $("#ovalWrap1").click(function(){
		var position=$("#section4").offset();
		$("body").stop().animate({scrollTop:position.Top},500);
	 });

})