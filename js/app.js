(function(){var e,s,t;window.skip=!1,$(".single-selection-form .candidate.selection").each(function(){return $(this).click(function(){return $(this).hasClass("selected")?($(".candidate.selection").removeClass("selected"),$("#selection").val("")):($("#selection").val($(this).children(".id").html()),$(".candidate.selection").removeClass("selected"),$(this).addClass("selected"))})}),$(".multiple-selection-form .candidate.selection").each(function(){return $(this).click(function(){var e,s,t,n,i;for($(this).hasClass("selected")?($(this).removeClass("selected"),$("#selection").val("")):$(this).addClass("selected"),e=[],i=$(".candidate.selection.selected"),t=0,n=i.length;n>t;t++)s=i[t],e.push($(s).children(".id").html());return $("#selection").val(e.join(","))})}),$(".token-form").submit(function(){return $("#password1").val().match("[A-Z][0-9][A-Z]{2}")&&$("#password2").val().match("[A-Z]{3}")&&$("#password3").val().match("[A-Z]{3}")?!0:($(".input").addClass("error animated shake"),setTimeout(function(){return $(".input").removeClass("shake")},1e3),$("#password3").focus(),!1)}),$(".single-selection-form").submit(function(){return $(".candidate.selection.selected")[0]?window.skip||confirm("\u60a8\u6c7a\u5b9a\u6295\u7d66 "+$("#selection").val()+" \u865f "+$(".candidate.selection.selected").children(".name").html()+"\uff0c\u78ba\u5b9a\u55ce\uff1f\n You\u2019ve decided to vote for No. "+$("#selection").val()+" - "+$(".candidate.selection.selected").children(".name").html()+", is that right?")?($('input[type="submit"]').prop("disabled",!0),$("body").addClass("sending"),!0):!1:window.skip||confirm("\u60a8\u6c7a\u5b9a\u6295\u7a7a\u767d\u5ee2\u7968\uff0c\u78ba\u5b9a\u55ce\uff1f\n You\u2019ve decided to cast a blank ballot, is that right?")?($('input[type="submit"]').prop("disabled",!0),$("body").addClass("sending"),!0):!1}),$(".multiple-selection-form").submit(function(){return window.skip||confirm("\u78ba\u5b9a\u9001\u51fa\uff1f\n Are you sure you want to submit?")?($('input[type="submit"]').prop("disabled",!0),$("body").addClass("sending"),!0):!1}),$(".agree-or-disagree-form").submit(function(){return window.skip||confirm("\u78ba\u5b9a\u9001\u51fa\uff1f\n Are you sure you want to submit?")?($('input[type="submit"]').prop("disabled",!0),$("body").addClass("sending"),!0):!1}),$("button.skip").click(function(){return confirm("\u78ba\u5b9a\u7565\u904e\u6b64\u6295\u7968\uff1f\n Are you sure you want to skip?")?($("input.skipped").val(!0),$(".candidate.selection").removeClass("selected"),$("#selection").val(""),$("input.none").prop("checked",!0),window.skip=!0,$("body").addClass("skipping"),!0):!1}),setTimeout(function(){return $(".input").removeClass("shake")},1e3),((null!=(e=$("#password3").val())?e.length:void 0)>0||(null!=(s=$("#password2").val())?s.length:void 0)>0||(null!=(t=$("#password1").val())?t.length:void 0)>0)&&($("#password1").val(""),$("#password2").val(""),$("#password3").val("")),$("#password1").keyup(function(){return $(this).val($(this).val().toUpperCase()),$(this).val().length>=$(this).attr("maxlength")?($("#password2").focus(),setTimeout(function(){return $("#password2").focus()},1e3)):void 0}),$("#password2").keyup(function(){return $(this).val($(this).val().toUpperCase()),$(this).val().length>=$(this).attr("maxlength")?$("#password3").focus():void 0}),$("#password3").keyup(function(){return $(this).val($(this).val().toUpperCase())}),$("#password1").keydown(function(){return $(".input").removeClass("error")}),$("#password2").keydown(function(e){return $(".input").removeClass("error"),0!==$(this).val().length||8!==e.keyCode&&37!==e.keyCode?void 0:$("#password1").focus()}),$("#password3").keydown(function(e){return $(".input").removeClass("error"),0!==$(this).val().length||8!==e.keyCode&&37!==e.keyCode?void 0:$("#password2").focus()})}).call(this);