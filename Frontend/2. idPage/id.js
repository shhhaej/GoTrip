//---------- 휴대폰번호로 찾기 -----------
var iptPhoneA = $("#cust_phone_a");
var iptPhoneB = $("#cust_phone_b");
var iptPhoneC = $("#cust_phone_c");

iptPhoneA.on("keyup", function(){
	if ($(this).val().length == 3) {
		iptPhoneB.focus();
	}
});
iptPhoneB.on("keyup", function(){
	if ($(this).val().length == 4) {
		iptPhoneC.focus();
		iptPhoneC.attr("maxlength","5");
	}
});
iptPhoneC.on("keyup", function(){
	if ($(this).val().length == 5) {
		if (iptPhoneB.val().length == 3) {
			iptPhoneB.val(iptPhoneB.val() + $(this).val().substr(0,1));
			iptPhoneC.val($(this).val().substr(1,4));
			iptPhoneC.attr("maxlength","4");
		} else if (iptPhoneC.val().length == 5) {
			iptPhoneC.val($(this).val().substr(0,4));
		}
	}
});

//---------- 한/영만 입력 -----------
$("#cust_name").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^(ㄱ-힣a-zA-Z)]/gi, ''));
  }
});

$("#cust_email__b").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^A-Za-z]/ig, ''));
  }
});

//---------- 숫자만 입력 -----------
$("#cust_phone_a").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^0-9]/gi, ''));
  }
});
$("#cust_phone_b").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^0-9]/gi, ''));
  }
});
$("#cust_phone_c").keyup(function(event) {
  if (!(event.keyCode >= 37 && event.keyCode <= 40)) {
     var inputVal = $(this).val();
     $(this).val(inputVal.replace(/[^0-9]/gi, ''));
  }
});

//---------- radio event -----------
function div_OnOff(v, id){
  if (v == "email"){
    document.getElementById(id).style.display=""; //보여줌
  }else{
    document.getElementById(id).style.display="none"; //숨김
  }
}