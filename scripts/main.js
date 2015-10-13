$(function() {
   	var w = window.innerWidth ? window.innerWidth: $(window).width();
   	var x = 950;
   	if (w < x) {$('html').css('width', '950px');}else{$('html').css('width', '100%');}
});



$(function() {
	$(window).resize(function() {
   	    var w = window.innerWidth ? window.innerWidth: $(window).width();
   		var x = 950;
   		if (w < x) {$('html').css('width', '950px');}else{$('html').css('width', '100%');}
	});
});

$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('.jump').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");

      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('.link').hover(function() {
         $(this).css("color","#FFC0CB");
      },
      function(){
         $(this).css("color","#000000");
   });
});

$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('.nLink').hover(function() {
         $(this).css("color","#FFC0CB");
      },
      function(){
         $(this).css("color","#000000");
   });
});