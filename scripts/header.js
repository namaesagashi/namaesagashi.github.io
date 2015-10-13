var ColorTable1 = new Array ("#000000","#101010","#181818","#202020","#282828","#303030","#383838","#404040","#484848","#505050","#585858","#606060","#686868","#707070","#787878","#808080","#888888","#909090","#989898","#A0A0A0","#A8A8A8","#B0B0B0","#B8B8B8","#C0C0C0","#C8C8C8","#D0D0D0","#D8D8D8","#E0E0E0","#E8E8E8","#F0F0F0","#F8F8F8","#FFFFFF");
var Count1 = 0;
var Count12 = 32;
var Count101 = 0;
var Count121 = 32;
var Count102 = 0;
var Count122 = 32;
var Count2 = 0;
var Count22 = 32;
var Count201 = 0;
var Count221 = 32;
var Count202 = 0;
var Count222 = 32;
var Count3 = 0;
var Count32 = 32;
var Count301 = 0;
var Count321 = 32;
var Count302 = 0;
var Count322 = 32;
var Count4 = 0;
var Count42 = 32;
var Count401 = 0;
var Count421 = 32;
var Count402 = 0;
var Count422 = 32;
var Count5 = 0;
var Count52 = 32;
var Count501 = 0;
var Count521 = 32;
var Count502 = 0;
var Count522 = 32;
var C1m1;
var C1m11;
var C1m12;
var C1m2;
var C1m21;
var C1m22;
var C1m3;
var C1m31;
var C1m32;
var C1m4;
var C1m41;
var C1m42;
var C1m5;
var C1m51;
var C1m52;

function CC11 (){
	Count1 = 0;
	Count12 = 32;
	C1m1 = setInterval("CC11m()",10);
}
function CC111 (){
	Count101 = 0;
	Count121 = 32;
	C1m11 = setInterval("CC111m()",10);
}
function CC112 (){
	Count102 = 0;
	Count122 = 32;
	C1m12 = setInterval("CC112m()",10);
}
function CC12 (){
	Count2 = 0;
	Count22 = 32;
	C1m2 = setInterval("CC12m()",10);
}
function CC121 (){
	Count201 = 0;
	Count221 = 32;
	C1m21 = setInterval("CC121m()",10);
}
function CC122 (){
	Count202 = 0;
	Count222 = 32;
	C1m22 = setInterval("CC122m()",10);
}
function CC13 (){
	Count3 = 0;
	Count32 = 32;
	C1m3 = setInterval("CC13m()",10);
}
function CC131 (){
	Count301 = 0;
	Count321 = 32;
	C1m31 = setInterval("CC131m()",10);
}
function CC132 (){
	Count302 = 0;
	Count322 = 32;
	C1m32 = setInterval("CC132m()",10);
}
function CC14 (){
	Count4 = 0;
	Count42 = 32;
	C1m4 = setInterval("CC14m()",10);
}
function CC141 (){
	Count401 = 0;
	Count421 = 32;
	C1m41 = setInterval("CC141m()",10);
}
function CC142 (){
	Count402 = 0;
	Count422 = 32;
	C1m42 = setInterval("CC142m()",10);
}
function CC15 (){
	Count5 = 0;
	Count52 = 32;
	C1m5 = setInterval("CC15m()",10);
}
function CC151 (){
	Count501 = 0;
	Count521 = 32;
	C1m51 = setInterval("CC151m()",10);
}
function CC152 (){
	Count502 = 0;
	Count522 = 32;
	C1m52 = setInterval("CC152m()",10);
}


function CC11m () {
	Count1++;
	Count12--;
	if (Count1 >= 32) {
		clearInterval(C1m1);
	}
	
	document.getElementById("divMenuItem1").style.backgroundColor = ColorTable1[Count1];
	document.getElementById("divMenuItem1").style.color = ColorTable1[Count12];
}
function CC111m () {
	Count101++;
	Count121--;
	if (Count101 >= 32) {
		clearInterval(C1m11);
	}
	
	document.getElementById("divMenuItem11").style.backgroundColor = ColorTable1[Count101];
	document.getElementById("divMenuItem11").style.color = ColorTable1[Count121];
}
function CC112m () {
	Count102++;
	Count122--;
	if (Count102 >= 32) {
		clearInterval(C1m12);
	}
	
	document.getElementById("divMenuItem12").style.backgroundColor = ColorTable1[Count102];
	document.getElementById("divMenuItem12").style.color = ColorTable1[Count122];
}
function CC12m () {
	Count2++;
	Count22--;
	if (Count2 >= 32) {
		clearInterval(C1m2);
	}
	
	document.getElementById("divMenuItem2").style.backgroundColor = ColorTable1[Count2];
	document.getElementById("divMenuItem2").style.color = ColorTable1[Count22];
}
function CC121m () {
	Count201++;
	Count221--;
	if (Count201 >= 32) {
		clearInterval(C1m21);
	}
	
	document.getElementById("divMenuItem21").style.backgroundColor = ColorTable1[Count201];
	document.getElementById("divMenuItem21").style.color = ColorTable1[Count221];
}
function CC122m () {
	Count202++;
	Count222--;
	if (Count202 >= 32) {
		clearInterval(C1m22);
	}
	
	document.getElementById("divMenuItem22").style.backgroundColor = ColorTable1[Count202];
	document.getElementById("divMenuItem22").style.color = ColorTable1[Count222];
}
function CC13m () {
	Count3++;
	Count32--;
	if (Count3 >= 32) {
		clearInterval(C1m3);
	}
	
	document.getElementById("divMenuItem3").style.backgroundColor = ColorTable1[Count3];
	document.getElementById("divMenuItem3").style.color = ColorTable1[Count32];
}
function CC131m () {
	Count301++;
	Count321--;
	if (Count301 >= 32) {
		clearInterval(C1m31);
	}
	
	document.getElementById("divMenuItem31").style.backgroundColor = ColorTable1[Count301];
	document.getElementById("divMenuItem31").style.color = ColorTable1[Count321];
}
function CC132m () {
	Count302++;
	Count322--;
	if (Count302 >= 32) {
		clearInterval(C1m32);
	}
	
	document.getElementById("divMenuItem32").style.backgroundColor = ColorTable1[Count302];
	document.getElementById("divMenuItem32").style.color = ColorTable1[Count322];
}
function CC14m () {
	Count4++;
	Count42--;
	if (Count4 >= 32) {
		clearInterval(C1m4);
	}
	
	document.getElementById("divMenuItem4").style.backgroundColor = ColorTable1[Count4];
	document.getElementById("divMenuItem4").style.color = ColorTable1[Count42];
}
function CC141m () {
	Count401++;
	Count421--;
	if (Count401 >= 32) {
		clearInterval(C1m41);
	}
	
	document.getElementById("divMenuItem41").style.backgroundColor = ColorTable1[Count401];
	document.getElementById("divMenuItem41").style.color = ColorTable1[Count421];
}
function CC142m () {
	Count402++;
	Count422--;
	if (Count402 >= 32) {
		clearInterval(C1m42);
	}
	
	document.getElementById("divMenuItem42").style.backgroundColor = ColorTable1[Count402];
	document.getElementById("divMenuItem42").style.color = ColorTable1[Count422];
}
function CC15m () {
	Count5++;
	Count52--;
	if (Count5 >= 32) {
		clearInterval(C1m5);
	}
	
	document.getElementById("divMenuItem5").style.backgroundColor = ColorTable1[Count5];
	document.getElementById("divMenuItem5").style.color = ColorTable1[Count52];
}
function CC151m () {
	Count501++;
	Count521--;
	if (Count501 >= 32) {
		clearInterval(C1m51);
	}
	
	document.getElementById("divMenuItem51").style.backgroundColor = ColorTable1[Count501];
	document.getElementById("divMenuItem51").style.color = ColorTable1[Count521];
}
function CC152m () {
	Count502++;
	Count522--;
	if (Count502 >= 32) {
		clearInterval(C1m52);
	}
	
	document.getElementById("divMenuItem52").style.backgroundColor = ColorTable1[Count502];
	document.getElementById("divMenuItem52").style.color = ColorTable1[Count522];
}


function CC21 (){		
	setTimeout("CC21m()",350);
}

function CC21m () {
	document.getElementById("divMenuItem1").style.backgroundColor = '#000000';
	document.getElementById("divMenuItem1").style.color = '#FFFFFF';
}

function CC211 (){
	setTimeout("CC211m()",350);
}

function CC211m () {
	document.getElementById("divMenuItem11").style.backgroundColor = '#000000';
	document.getElementById("divMenuItem11").style.color = '#FFFFFF';
}

function CC212 (){
	setTimeout("CC212m()",350);
}

function CC212m () {
	document.getElementById("divMenuItem12").style.backgroundColor = '#000000';
	document.getElementById("divMenuItem12").style.color = '#FFFFFF';
}

function CC22 (){		
	setTimeout("CC22m()",350);
}

function CC22m () {
	document.getElementById("divMenuItem2").style.backgroundColor = '#000000';
	document.getElementById("divMenuItem2").style.color = '#FFFFFF';
}

function CC221 (){
	setTimeout("CC221m()",350);
}

function CC221m () {
	document.getElementById("divMenuItem21").style.backgroundColor = '#000000';
	document.getElementById("divMenuItem21").style.color = '#FFFFFF';
}

function CC222 (){
	setTimeout("CC222m()",350);
}

function CC222m () {
	document.getElementById("divMenuItem22").style.backgroundColor = '#000000';
	document.getElementById("divMenuItem22").style.color = '#FFFFFF';
}

function CC23 (){		
	setTimeout("CC23m()",350);
}
function CC23m () {
	document.getElementById("divMenuItem3").style.backgroundColor = '#000000';
	document.getElementById("divMenuItem3").style.color = '#FFFFFF';
}

function CC231 (){
	setTimeout("CC231m()",350);
}

function CC231m () {
	document.getElementById("divMenuItem31").style.backgroundColor = '#000000';
	document.getElementById("divMenuItem31").style.color = '#FFFFFF';
}

function CC232 (){
	setTimeout("CC232m()",350);
}

function CC232m () {
	document.getElementById("divMenuItem32").style.backgroundColor = '#000000';
	document.getElementById("divMenuItem32").style.color = '#FFFFFF';
}

function CC24 (){		
	setTimeout("CC24m()",350);
}

function CC24m () {
	document.getElementById("divMenuItem4").style.backgroundColor = '#000000';
	document.getElementById("divMenuItem4").style.color = '#FFFFFF';
}

function CC241 (){
	setTimeout("CC241m()",350);
}

function CC241m () {
	document.getElementById("divMenuItem41").style.backgroundColor = '#000000';
	document.getElementById("divMenuItem41").style.color = '#FFFFFF';
}

function CC242 (){
	setTimeout("CC242m()",350);
}

function CC242m () {
	document.getElementById("divMenuItem42").style.backgroundColor = '#000000';
	document.getElementById("divMenuItem42").style.color = '#FFFFFF';
}

function CC25 (){		
	setTimeout("CC25m()",350);
}

function CC25m () {
	document.getElementById("divMenuItem5").style.backgroundColor = '#000000';
	document.getElementById("divMenuItem5").style.color = '#FFFFFF';
}

function CC251 (){
	setTimeout("CC251m()",350);
}

function CC251m () {
	document.getElementById("divMenuItem51").style.backgroundColor = '#000000';
	document.getElementById("divMenuItem51").style.color = '#FFFFFF';
}

function CC252 (){
	setTimeout("CC252m()",350);
}

function CC252m () {
	document.getElementById("divMenuItem52").style.backgroundColor = '#000000';
	document.getElementById("divMenuItem52").style.color = '#FFFFFF';
}

$(function(){
	$("#divMenu1").hover(function(){
		$("#MenuC1").stop().show(300);
	},
	function(){
		$("#MenuC1").hide(0);
	});
});
$(function(){
	$("#divMenu2").hover(function(){
		$("#MenuC2").stop().show(300);
	},
	function(){
		$("#MenuC2").hide();
	});
});
$(function(){
	$("#divMenu3").hover(function(){
		$("#MenuC3").stop().show(300);
	},
	function(){
		$("#MenuC3").hide();
	});
});
$(function(){
	$("#divMenu4").hover(function(){
		$("#MenuC4").stop().show(300);
	},
	function(){
		$("#MenuC4").hide();
	});
});
$(function(){
	$("#divMenu5").hover(function(){
		$("#MenuC5").stop().show(300);
	},
	function(){
		$("#MenuC5").hide();
	});
});

$(function(){
	$("#divmenu").hover(function(){
		$("#divmenu").css('height','210px');
		$(".divMenus").css('height','140px');
	},
	function(){
		$("#divmenu").css('height','70px');
		$(".divMenus").css('height','70px');
	});
});
