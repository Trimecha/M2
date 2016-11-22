var modifyInput = false;
var currentFocus;
var focus;

var RecaptchaOptions = {
    theme : 'clean'
};

$.ajaxSetup({
  // default parameter when javascript is enabled
  cache: false,
  data: {'jsEnabled': 'true'}
});
//FONCTION pour supprimer un element d'un Array par son libellé
Array.prototype.remove = function(p_val) {
	var toRemove = null;
	var l = this.length; 
	for(var i = 0; i < l; i++) {
		if(this[i] == p_val) { toRemove = { id: i, value: this[i] }; }
	}
 
	if (toRemove != null) {
		for (var i = toRemove.id; i < this.length; i++) {
			this[i] = this[i+1];
		}
		this.pop();
		return toRemove.value;
	}
 
	return null;
}
//FONCTION pour savoir un element est contenue dans un Array par son libellé
Array.prototype.contains = function (element) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == element) {
			return true;
		}
	}
	return false;
}
//startsWith to check if a string starts with a particular character sequecnce:
String.prototype.startsWith = function(str){
	return (this.match("^"+str)==str);
}

var reg = new RegExp("(.+)[-](.+)");
var adddocument=0;
jQuery(document).ready(function() {

	/* Footer DELETE */
	//stick the footer at the bottom of the page if we're on an iPad/iPhone due to viewport/page bugs in mobile webkit 
	// if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod') 
	// { 
	// 	 $("#footer").css("position", "device-fixed"); 
	// };
	/* /Footer DELETE */

	if(getURLParameter("popinCallback")!="null" && getURLParameter("popinCallback")!=""){
		if($("#" + getURLParameter("popinCallback")).length > 0){
			$.colorbox({
				inline : true,
				title : "&nbsp;",
				close : "&nbsp;",
				opacity : 0.5,
				transition : "none",
				href : "#" + getURLParameter("popinCallback")
			});
		}
	}
	
	if(getURLParameter("videoCallback") == "save"){
		$.colorbox({
			inline : true,
			title : "&nbsp;",
			close : "&nbsp;",
			opacity : 0.5,
			transition : "none",
			href : "#saveAlert",
			onClosed : function(){
				if($('.home').html()) {
					openVideo(getURLParameter("wrapperId"), getURLParameter("videoId"), getURLParameter("articleId"));
				}
			}
		});
	}

	videoTabs();

	// TEST existance classe 
	//var ifClassExist = $(".on");
	//if (ifClassExist.length){alert("ok");}else{alert("Pas ok");}

	//TEST case coché
	$(document).ready(function(){
		var isCoche = $(".cr-1 .search-rslt label.checked");

		if(isCoche.length){
			var allOffers = $('#sidebarRight .short-link li.all_offers');
	    	var selectOffers = $('#sidebarRight .short-link li.select_offers');

			allOffers.hide();
	        selectOffers.show();
	        $('.btn-tools a').show();
	    }
	    else{}
	});
	

    // FIN TEST coché

	//Pour traduction du bouton browse #7545
	if ($('.fileStyle').width()) {
                var imgWidth , inputWidth;
        switch ($('html').attr('lang')){
            case "fr": 
                imgWidth = 115;
                inputWidth = 214;
            break;
            case "de": 
                imgWidth = 140;
                inputWidth = 234;
            break;
            case "es": 
                imgWidth = 95;
                inputWidth = 210;
            break;
            case "ru": 
                imgWidth = 88;
                inputWidth = 192;
            break;
            case "it": 
                imgWidth = 95;
                inputWidth = 210;
            break;
            case "cs": 
                imgWidth = 120;
                inputWidth = 220;
            break;
            default:
                imgWidth = 88;
                inputWidth = 202;
            break;
        }
	$(".fileStyle").width(imgWidth+inputWidth+30);
        $("#browse").filestyle({ 
            image: "/resources/images/btn/browse-"+$('html').attr('lang')+".gif",
            imageheight : 25,
            imagewidth : imgWidth,
            width : inputWidth
        }).css({'height':'22px','padding-right':'12px'});
	$(".fileStyle > div").css({'padding-left':'10px','padding-right':'15px','margin-left':'-15px'});
      }
$('.fileStyle div,.fileStyle div input').css({'cursor':'pointer'});
var w_browse=$('#browse').width()+20;
$('#browse').width(w_browse);
	//Pour déstructuration du sitemap #7557	  
	  $('.sitemap .item').each(function(){
        var maxHeight = 0;
        $(this).find('.menu-map > li').each(function(){
            if ($(this).height()> maxHeight)
                maxHeight = $(this).height();
        });
        $(this).find('.menu-map>li').height(maxHeight); 
    });
	
	//Pour corriger pages avec peu de contenu #7558
	/*if ($('#mainContainer').height()+275< $('body').height()){
        $('#mainContainer').height( $('body').height());
    }*/

	// Add focus event to all your different form elements
	$("input, textarea, select, a").focus(function(){
	
		var padding = 70;

		// Check their position relative to the window's scroll
		var elementBottom = $(this).offset().top + $(this).height();
		var windowScroll = $(window).scrollTop();
		var windowBottom = windowScroll + $(window).height();

		if(elementBottom + padding > windowBottom){
			$(window).scrollTop(windowScroll + padding);
		}

	});

	$('.bloc2 .smenu dd,.shadowBox dd').each(function(){
        $(this).css('min-height',$(this).prev('dt').height());
    });
	
	$("a, input, button", "div.bloc-slide").focus(function() {
		var parentDiv = $(this).parents('div.bloc-slide');
		parentDiv.addClass("on");
		parentDiv.slideDown();
		parentDiv.prev("a.showCtrl").hide();
		parentDiv.next("a.hideCtrl").show();
		return false;
	});
	
	/*if(document.location.hash){
	//launch colorbox and use this hash
	   
	   $.colorbox({
			inline : true,
			title : "&nbsp;",
			close : "&nbsp;",
			opacity : 0.5,
			transition : "none",
			href : document.location.hash
		});
	}*/
	
	$('input, textarea, a').focus(function() {
		currentFocus = this;
	});
	
    jQuery('#pass-edit-input-fake, #newpwd-input-fake, #confirmpwd-input-fake').live('focusin',function() {

        if ($(this).val()  == $(this).attr('title') ) {
            var fakeInput = $(this).hide();
			var passwordInput = $(this).prev("input").show();
			//We hide the text input
			$(fakeInput).hide();
			//We Show the password input
			$(passwordInput).show();
			//We use a timeout because of a IE8 bug which is not capable to set the focus on a input right away
            setTimeout(function(){
                $(passwordInput).focus();
            },100);
        }
       
    });
	
    jQuery('#pass-edit-input, #newpwd-input, #confirmpwd-input').live('focusout',function() {
        if ($(this).val()  == '' ) {
			$(this).hide();
			$(this).next("input").show();
        }
    });

	/*jQuery('#email').focus(function() {
        if ($(this).val() == 'email') {
            $(this).val('');
        }


    });
	
    jQuery('#email').focusout(function() {
        if (($(this).val()  == '')) {
            $(this).val("email");
        }
    });*/

    jQuery('#email, #password, #name, #contact_email, #msg, #namevalue, #surname, #emailvalue, #confirm, #keyword, #searchKeywords').focus(function() {
		// get the value only if it is not already stored
		var attribute = $(this).attr("default-value");
		if(typeof(attribute) === 'undefined') {
			$(this).attr("default-value", $(this).val());
		}
        if ($(this).val() == $(this).attr("default-value")) {
            $(this).val('');
        }
    });

    /*jQuery('#email, #password, #name, #contact_email, #msg, #namevalue, #surname, #emailvalue, #confirm, #keyword, #searchKeywords').focusout(function() {
		var defaultValue = $(this).attr("default-value");
        if (($(this).val()  == '')) {
            $(this).val(defaultValue);
        }
    });*/

   /* jQuery('#name').focus(function() {
        if ($(this).val() == 'ex.: John Smith') {
            $(this).val('');
        }


    });
	
    jQuery('#name').focusout(function() {

        if (($(this).val()  == '')) {
            $(this).val("ex.: John Smith");
        }

    });
*/
    /*jQuery('#contact_email').focus(function() {
        if ($(this).val() == 'ex.: john.smith@myprovider.com') {
            $(this).val('');
        }


    });
	
    jQuery('#contact_email').focusout(function() {

        if (($(this).val()  == '')) {
            $(this).val("ex.: john.smith@myprovider.com");
        }

    });

    jQuery('#msg').focus(function() {
        if ($(this).val() == 'Your message') {
            $(this).val('');
        }


    });
	
    jQuery('#msg').focusout(function() {
        if (($(this).val()  == '')) {
            $(this).val("Your message");
        }


    });
	
    jQuery('#namevalue').focus(function() {
        if ($(this).val() == 'Your lastname') {
            $(this).val('');
        }


    });
	
    jQuery('#namevalue').focusout(function() {
        if (($(this).val()  == '')) {
            $(this).val("Your lastname");
        }


    });
	
    jQuery('#surname').focus(function() {
        if ($(this).val() == 'Your firstname') {
            $(this).val('');
        }


    });
	
    jQuery('#surname').focusout(function() {

        if (($(this).val()  == '')) {
            $(this).val("Your firstname");
        }

    });

    jQuery('#emailvalue').focus(function() {
        if ($(this).val() == 'Your email') {
            $(this).val('');
        }
    });
	
    jQuery('#emailvalue').focusout(function() {
        if (($(this).val()  == '')) {
            $(this).val("Your email");
        }
    });
	
    jQuery('#confirm').focus(function() {
        if ($(this).val() == 'Confirm your email') {
            $(this).val('');
        }

    });
	
    jQuery('#confirm').focusout(function() {
        if (($(this).val()  == '')) {
            $(this).val("Confirm your email");
        }


    });

    jQuery('div.searchInput input.searchTxt').focus(function() {
        if ($(this).val() == 'keyword') {
            $(this).val('');
        }


    });
	
    jQuery('div.searchInput input.searchTxt').focusout(function() {
        if (($(this).val()  == '')) {
            $(this).val("keyword");
        }


    });
    	*/
	/*
    jQuery('#keyword').focus(function() {
        if ($(this).val() == 'keyword') {
            $(this).val('');
        }
    });
	
    jQuery('#keyword').focusout(function() {
        if (($(this).val()  == '')) {
            $(this).val("keyword");
        }
    });
    
    jQuery('#searchKeywords').focus(function() {
        if ($(this).val() == 'Search') {
            $(this).val('');
        }
    });
	
    jQuery('#searchKeywords').focusout(function() {
        if (($(this).val()  == '')) {
            $(this).val("Search");
            searchPreviewFunction();
        }
    });
	*/
	if($('ul.options').html()) {
		$('ul.options input').prettyCheckboxes({
			checkboxWidth : 12, // The width of your custom checkbox
			checkboxHeight : 12, // The height of your custom checkbox
			display : 'inline'
		});
	}
	
//	$(".myOffer").unbind("click");
//	$(".myOffer").find(".holderWrap").each(function(){
//	$(this).attr("class","holderWrapMyOffer");
//	});
	/*
	$(".myOffer").each(function(){
		 var imgHtml = "<img class='holderWrapMyOffer' src='/resources/images/ico-remove.gif'>";
		 //si id renseigné c'est que l'objet $this est celui present ds view.jsp de myofffer
		 //qui est un img donc pas besoin de rajouter un img
		 if ($(this).attr("id") == "") {
			 $(this).append(imgHtml);
		 }
	});
	 add checkbox for deletion document (cv) : not used !
	$(".cvContent .to-delete").each(function(){
	    var forName = $(this).find("label").attr("for");
		var inputHtml = "<input class='desable_pretty' title='' checked='checked' type='checkbox' value='' id='"+forName+"'/>";
		$(this).append(inputHtml);

		
		if(!$(this).find("label").find('.holderWrap').html()){
			$(this).find("label").prepend("<span class='holderWrap'><span class='holder'></span></span>"); 
		}
		
	});
	*/
	/* add checkbox for deletion document (cover letter) : not used !
	$(".docContent .to-delete").each(function(){
		var forName = $(this).find("label").attr("for");
		var inputHtml = "<input class='desable_pretty' title='' checked='checked' type='checkbox' value='' id='"+forName+"'/>";
		$(this).append(inputHtml);
		
	
		if(!$(this).find("label").find('.holderWrap').html()){
			$(this).find("label").prepend("<span class='holderWrap'><span class='holder'></span></span>"); 
		}
		 
	});
*/
	/*
	var applyJobClassCol6 = 0;
	$('.applyJobClass .col6').each(function(){
//		<input checked="checked" title="uncheck to remove ${job.title}" type="checkbox" value="" id="apply_job${joStatus.index}"/>
		var inputHtml = "<input checked='checked' title='uncheck to remove' type='checkbox' value='' id='apply_job" + applyJobClassCol6 +"'/>"; 
		$(this).append(inputHtml);
		applyJobClassCol6++;
	});

	var savedJobClassCol6 = 0;
	$('.savedJobClass .col6').each(function(){
		var inputHtml = "<input checked='checked' title='uncheck to remove' type='checkbox' value='' id='saved_job" + savedJobClassCol6 +"'/>"; 
		$(this).append(inputHtml);
		savedJobClassCol6++;
	});

	var alertJobClassCol6 = 0;
	$('.alertJobClass .col6').each(function(){
		var inputHtml = "<input checked='checked' title='uncheck to remove' type='checkbox' value='' id='alert_job" + alertJobClassCol6 +"'/>"; 
		$(this).append(inputHtml);
		alertJobClassCol6++;
	});
	*/
	
	$('.activateFlash').click(function() {
		$('param[name=wmode]').attr('value', '0');
		return false;
	});
	$('param[name=wmode]').attr('value', 'transparent');
	if($('.addUl').width()) {
	//	$('.addUl').html('<ul class="options form-element"></ul>');
	}
	
	$('a.activateFlash').focus(function(){
		$(this).addClass("on")
	});
	
	$('a.activateFlash').focusout(function(){
		$(this).removeClass("on")
	});
	
	$('#modify-update a').click(function() {
		$('.popinContent .form').addClass('edit-mode');
		$.colorbox.resize();
		return false;
	});
	
	$('div.modify-update a').click(function() {
		$('.popinContent .form').addClass('edit-mode');
		$.colorbox.resize();
		return false;
	});

	$(document).bind('cbox_closed', function() {
		$('.popinContent .form').removeClass('edit-mode');
	});

	$('#rss-opt').change(function() {
		if($(this).is(':checked')) {
			$("#rss-select").addClass('on');
		} else {
			$("#rss-select").removeClass('on');
		}
		// $.colorbox.resize();
		return false;
	});
	
	initCandidateSpace();

	$('.question').change(function() {
		var answerid = $(this).val();
		var correctAnsTrigger = $('#' + answerid + 'TRUE').val();
		if (null != correctAnsTrigger) {
			if ($(this).get(0).tagName.toLowerCase() == 'input') {
				//Si input et case coché on affiche la question trigger
				if ($(this).attr('checked')) {
					$('#' + answerid + 'TRUE').next("div").show();
				} else {
					//Sinon on cache
					$('#' + answerid + 'TRUE').next("div").hide();
				}
			} else {
				$('#' + answerid + 'TRUE').next("div").show();
			}
		} else {
			// Si pas la bonne reponse et select on cache la question trigger
			if ($(this).get(0).tagName.toLowerCase() == 'select') {
				$(this).parents('div.item').find('.trigger').hide();
			}
		}
	});
	
	
	// load contrast css
	$('.switchColor').click(function() {
		$("body").toggleClass("contrast");
		return false;
	});
	
	// execute print function
	$('#printLink').click(function() {
		print();
	});
	// show hidden block
	$('.slide-controller.show').click(function() {
		$(this).hide();
		$(this).parent().find('.slide-controller.hide').css('display', 'block');
		$(this).parent().find('.scroll-content').slideDown();
		$.cookie($(this).attr("reminder-position"), "open", { path: '/' });
		return false;
	});
	// hide block
	$('.slide-controller.hide').click(function() {
		$(this).parent().find('.scroll-content').slideUp(function() {
			$(this).parent().find('.slide-controller.hide').hide();
			$(this).parent().find('.slide-controller.show').css('display', 'block');
		});
		$.cookie($(this).attr("reminder-position"), "close", { path: '/' });
		return false;
	});
	
	// hide block if empty
	$("#sidebarRight fieldset select").each(function() {
		$(this).prev('ul.options').find(' li').each(function() {
			var idoption = $(this).attr('class');
			$(this).parents('fieldset').find('select option[value=' + idoption.substr(3, idoption.length) + ']').remove();
		});
	});
	// check/incheck all input
	$(".selectAll input").click(function() {
		if($(this).attr('checked'))
			$(this).parents('fieldset').find('input[type=checkbox]').attr('checked', 'checked');
		else
			$(this).parents('fieldset').find('input[type=checkbox]').removeAttr('checked');
		
	});
	
	$('#myForm').find("input[id^='selectAll']").each(function(){
		$(this).click(function(){
			searchPreviewFunction();
		});
	});

	$("#sidebarRight .options input").live('focus', function() {
		$('.options .prettyCheckbox ').removeClass('focus');
		$(this).prev('.prettyCheckbox').addClass('focus');
	});
	$("#sidebarRight .options input").live('blur', function() {
		$('.options .prettyCheckbox ').removeClass('focus');
	});
	// remove continent/country/region/department in search bloc right
	$("#sidebarRight .options input").live('change', function() {
		if($(this).parents('fieldset.location-selects').html()) {
			$(this).parent().remove();
			$("select#search_continent").val("");
			$('.sideForm .countrybloc').hide().find("select").val("");
			$('.sideForm .regionbloc').hide().find("select").val("");
			$('.sideForm .departmentbloc').hide().find("select").val("");
			$('.btn1').show();
		} else {
			classname = $(this).parent().attr('class');
			var value = classname.substr(3,classname.length);	
			var text = $(this).parent().text();
			$(this).parents('fieldset').find('select').append('<option value=' + value + '>' + text + '</option>').show();
			$(this).parent().remove();
		}
		//refreshCounter(true);
		showOptions();
		searchPreviewFunction();
		return false;
	})

	$('.disabled a').click(function() {
		return false;
	});
	// auto fill input

	jQuery('#email').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.email.input.sample']) {$(this).val('');}
	});
	
	jQuery('#email').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.email.input.sample']);}
	});
	
	jQuery('#popinEmail2').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.email.input.sample']) {$(this).val('');}
	});
	
	jQuery('#popinEmail2').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.email.input.sample']);}
	});
	
	jQuery('#popinHomePassword').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.password.input.sample']) {$(this).val('');}
	});
	
	jQuery('#popinHomePassword').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.password.input.sample']);}
	});
	
	jQuery('#videoPassword').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.password.input.sample']) {$(this).val('');}
	});
	
	jQuery('#videoPassword').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.password.input.sample']);}
	});
	
	jQuery('#popinHomeEmail').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.email.input.sample']) {$(this).val('');}
	});
	
	jQuery('#popinHomeEmail').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.email.input.sample']);}
	});
	
	jQuery('#videoEmail').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.email.input.sample']) {$(this).val('');}
	});
	
	jQuery('#videoEmail').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.email.input.sample']);}
	});
	
	jQuery('#popinEmail').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.email.input.sample']) {$(this).val('');}
	});
	
	jQuery('#popinEmail').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.email.input.sample']);}
	});
	
	jQuery('#popinSearchEmail').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.email.input.sample']) {$(this).val('');}
	});
	
	jQuery('#popinSearchEmail').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.email.input.sample']);}
	});
	
	jQuery('#popinAlertEmail').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.email.input.sample']) {$(this).val('');}
	});
	
	jQuery('#popinAlertEmail').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.email.input.sample']);}
	});
	
	jQuery('#popinApplyEmail').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.email.input.sample']) {$(this).val('');}
	});
	
	jQuery('#popinApplyUnsollicitedEmail').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.email.input.sample']) {$(this).val('');}
	});
	
	jQuery('#popinJobEmail').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.email.input.sample']);}
	});
	
	jQuery('#popinJobEmail').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.email.input.sample']) {$(this).val('');}
	});
	
	jQuery('#popinApplyEmail').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.email.input.sample']);}
	});
	
	jQuery('#popinApplyUnsollicitedEmail').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.email.input.sample']);}
	});
	
	jQuery('#popinPassword2').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.password.input.sample']) {$(this).val('');}
	});
	
	jQuery('#popinPassword2').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.password.input.sample']);}
	});
	
	jQuery('#popinPassword').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.password.input.sample']) {$(this).val('');}
	});
	
	jQuery('#popinPassword').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.password.input.sample']);}
	});
	
	jQuery('#popinSearchPassword').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.password.input.sample']) {$(this).val('');}
	});
	
	jQuery('#popinSearchPassword').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.password.input.sample']);}
	});
	
	jQuery('#popinAlertPassword').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.password.input.sample']) {$(this).val('');}
	});
	
	jQuery('#popinAlertPassword').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.password.input.sample']);}
	});
	
	jQuery('#popinApplyPassword').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.password.input.sample']) {$(this).val('');}
	});
	
	jQuery('#popinApplyPassword').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.password.input.sample']);}
	});
	
	jQuery('#popinApplyUnsollicitedPassword').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.password.input.sample']) {$(this).val('');}
	});
	
	jQuery('#popinApplyUnsollicitedPassword').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.password.input.sample']);}
	});
	
	jQuery('#popinJobPassword').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.password.input.sample']) {$(this).val('');}
	});
	
	jQuery('#popinJobPassword').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.password.input.sample']);}
	});
	
	jQuery('#password').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.password.input.sample']) {$(this).val('');}
	});
	
	jQuery('#password').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.password.input.sample']);}
	});
	
	jQuery('#emailForgotPwd').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.email.input.sample']) {$(this).val('');}
	});
	
	jQuery('#name').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.name.input.sample']) {$(this).val('');}
	});
	
	jQuery('#name').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.name.input.sample']);}
	});

	jQuery('#contact_email').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.contact.email.input.sample']) {$(this).val('');}
	});
	
	jQuery('#contact_email').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.contact.email.input.sample']);}
	});

	jQuery('#msg').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.your.message.input.sample']) {$(this).val('');}
	});
	
	jQuery('#msg').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.your.message.input.sample']);}
	});
	
	jQuery('#namevalue').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.your.name.input.sample']) {$(this).val('');}
	});
	
	jQuery('#namevalue').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.your.name.input.sample']);}
	});
	
	jQuery('#surname').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.your.surname.input.sample']) {$(this).val('');}
	});
	
	jQuery('#surname').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.your.surname.input.sample']);}
	});

	jQuery('#emailvalue').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.your.email.input.sample']) {$(this).val('');}
	});
	
	jQuery('#emailvalue').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.your.email.input.sample']);}
	});
	
	jQuery('#confirm').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.confirm.email.input.sample']) {$(this).val('');}
	});
	
	jQuery('#confirm').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.confirm.email.input.sample']);}
	});
	
	jQuery('div.searchInput input').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.keyword.input.sample']) {$(this).val('');}
	});
	
	jQuery('div.searchInput input').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.keyword.input.sample']);}
	});
	
	jQuery("#searchForm").focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.search.input.sample']);}
	});
	
	jQuery("#searchForm").focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.search.input.sample']) {$(this).val('');}
	});
	
	jQuery('#keyword').focus(function() {
		if ($(this).val() == js_bundle_map['Label.javascript.keyword.input.sample']) {$(this).val('');}
	});
	
	jQuery('#keyword').focusout(function() {
		if (($(this).val()  == '')) {$(this).val(js_bundle_map['Label.javascript.keyword.input.sample']);}
	});
	
	// end auto fill input

	
	// show error form popin profile
	$('.popEdit .submit-btn.ok-btn').click(function() {
		var emtyField = 0;
		$('.popEdit').find('.required:visible').each(function() {
			if($(this).find('input').val() == "") {
				$(this).addClass('error');
				if($(this).find('input').attr('disabled') == '')
				emtyField++;
			} else if($(this).find('select').val() == "") {
			$(this).addClass('error');
			if($(this).find('select').attr('disabled') == '')
				emtyField++;
			} else {
				$(this).removeClass('error');
			}
		});

		if(emtyField > 0) {
			$(this).parents('.tab-content').find('.error-message').show();
			return false;
		} else {
			$(this).parents('.tab-content').find('.error-message').hide();
			$(this).parents('form').removeClass('editMode');
		}
		$('.tab-block .tabs li.on').next().find('a').focus();
		$('.popEdit form').submit();
	}); 	
	
	// add continent/country/region/department in search bloc right
	$(".add-btn", "#sidebarRight").live('click', function() {

		if($(this).parents('fieldset.location-selects').html()) {
			var continentValue = $('#sidebarRight #search_continent').val();
			var continentTxt = $('#sidebarRight #search_continent').find('option:selected').text();
			var continentId = continentValue.replace(/\//g,"");
			var countryValue = $('#sidebarRight #search_continent_country').val();
			var countryTxt = $('#sidebarRight #search_continent_country').find('option:selected').text();
			var countryId = "";
			if(countryValue != null && countryValue != ""){
				countryId = countryValue.replace(/\//g,"");
			}
			countryValue.replace(/\//g,"");
			var regionValue = $('#sidebarRight #search_continent_country_region').val();
			var regionTxt = $('#sidebarRight #search_continent_country_region').find('option:selected').text();
			var regionId = "";
			if(regionValue != null && regionValue != ""){
				regionId = regionValue.replace(/\//g,"");
			}
			var departmentValue = $('#sidebarRight #search_continent_country_region_department').val();
			var departmentTxt = $('#sidebarRight #search_continent_country_region_department').find('option:selected').text();
			var departmentId = "";
			if(departmentValue != null && departmentValue != ""){
				departmentId = departmentValue.replace(/\//g,"");
			}
			
			if(continentId) {
				var list = '<li class="ctn-opt' + continentId + '"><label for="ctn-opt' + continentId + '">' + continentTxt + '</label>  <input type="checkbox" checked="checked" id="ctn-opt' + continentId + '" name="search_continent[]" value="' + continentValue + '"/> <ul class="country-list"></ul></li>';
				$(this).parents('fieldset').find('ul.options:not(:has(.ctn-opt' + continentId + '))').append(list);
			}
			if(countryId) {
				var slist = '<li class="ctry-opt' + countryId + '"><label for="ctry-opt' + countryId + '">' + countryTxt + '</label> <input type="checkbox" checked="checked" id="ctry-opt' + countryId + '" name="search_country[]" value="' + countryValue + '"/> <ul class="region-list"></ul></li>';
				$(this).parents('fieldset').find('ul.options li.ctn-opt' + continentId + ' ul.country-list:not(:has(.ctry-opt' + countryId + '))').append(slist);
			}
			if(regionId) {
				var sslist = '<li class="reg-opt' + regionId + '"><label for="reg-opt' + regionId + '">' + regionTxt + '</label> <input type="checkbox" checked="checked" id="reg-opt' + regionId + '" name="search_region[]" value="' + regionValue + '"/> <ul class="departement-list"></ul></li>';
				$(this).parents('fieldset').find('ul.options li.ctry-opt' + countryId + '  ul.region-list:not(:has(.reg-opt' + regionId + '))').append(sslist);
			}
			if(departmentId) {
				console.log(departmentId);
				var sslist = '<li class="dep-opt' + departmentId + '"><label for="dep-opt' + departmentId + '">' + departmentTxt + '</label> <input type="checkbox" checked="checked" id="dep-opt' + departmentId + '" name="search_department[]" value="' + departmentValue + '"/> </li>';
				console.log(sslist);
				$(this).parents('fieldset').find('ul.options li.reg-opt' + regionId + '  ul.department-list:not(:has(.dep-opt' + departmentId + '))').append(sslist);
			}
		} else {
			var text = $(this).prev('select').find('option:selected').text();
			var value = $(this).prev('select').val();
			if(value) {
				var list = '<li class="opt' + value + '"><label for="opt' + value + '">' + text + '</label> <input type="checkbox" checked="checked" id="opt' + value + '" name="' + $(this).prev('select').attr('name') + '" value="' + value + '"/> </li>';
				$(this).parents('fieldset').find('ul.options').append(list);
				$(this).prev('select').find('option:selected').remove();
			}
		}
		if($('.form-element').html()) {
			$('ul.options input').prettyCheckboxes({
				checkboxWidth : 12, // The width of your custom checkbox
				checkboxHeight : 12, // The height of your custom checkbox
				display : 'inline'
			});
		}
		showOptions();
		
		$('#myForm').find("input[id^=opt]").each(function(){
			$(this).click(function(){
				searchPreviewFunction();
			});
		});
		
		searchPreviewFunction();

		return false;
	});
	
	// Handle buttons for advanced search reminder
	$(".location-selects select", "#sidebarRight").live('change', function() {
		
		if($(this).attr('class') == 'search_continent') {
			$(".location-selects .add-btn", "#sidebarRight").addClass('pos');
			$(".location-selects .btnLocation", "#sidebarRight").hide();
			$(".location-selects .btn1", "#sidebarRight").show();
		}
		if($(this).attr('class') == 'search_country') {
			$(".location-selects .add-btn", "#sidebarRight").addClass('pos');
			$(".location-selects .btnLocation", "#sidebarRight").hide();
			$(".location-selects .btn2", "#sidebarRight").show();
		}
		if($(this).attr('class') == 'search_region') {
			$(".location-selects .add-btn", "#sidebarRight").addClass('pos');
			$(".location-selects .btnLocation", "#sidebarRight").hide();
			$(".location-selects .btn3", "#sidebarRight").show();
		}
		if($(this).attr('class') == 'search_department') {
			$(".location-selects .add-btn", "#sidebarRight").addClass('pos');
			$(".location-selects .btnLocation", "#sidebarRight").hide();
			$(".location-selects .btn4", "#sidebarRight").show();
		}

		$.colorbox.resize();
		
	})

	$('#searchKeywords').keyup(function(e) {
		clearTimeout($.data(this, 'timer'));
		$(this).data('timer', setTimeout(advancedSearch, 500));
	});

	function checkSubmit(e,element)
	{
	   if(e && e.keyCode == 13)
	   {	   
		   if (validateAdvSearch()){
			   //$('.form-bloc .add-btn').unbind();   
			   document.forms['myForm'].submit();
		   }		  
	   }
	   return false;
	}


	function validateAdvSearch(){
		if (($('#searchKeywords').val().length<2 && $('#searchKeywords').val().length>0) || $('#searchKeywords').val().indexOf("*")>=0){				
			$('#searchErrorSpan').show();
			$('.searchInput').addClass('redBorder');
			return false;
		}
		else{
			$('#searchErrorSpan').hide();
			$('.searchInput').removeClass('redBorder');
			return true;
		}		
	}


	$('#myForm').submit(
		function(){
			return validateAdvSearch();
		}
	);
	
	$(".searchKey").keypress( function(){
			checkSubmit(event,this);
		}
	);

	// Used when selecting a continent in advanced search form
	$(".locationsBloc .add-btn, .selectsBloc .add-btn").click(function(){
		var newLine = $(this).parents(".locationsBloc, .selectsBloc").find("div.line:first").clone();
		$(newLine).find("select").each(function(){
			$(this).get(0).selectedIndex = 0;
		});
		$(newLine).find(".countrybloc, .regionbloc, .departmentbloc").hide(); // Modifié
		$(newLine).insertBefore(this);
		
		$.colorbox.resize();
		$("#colorbox").css({'top':'0'});
		return false;
	});
	
	function addElementToSelect(select, name, value){
		$(select).append("<option value=\""+value+"\">"+name+"</option>");
	}
	// Used when selecting a continent in advanced search form
	$(".locationsBloc select[name^=search_continent], .location-selects select[name^=search_continent]").live("change", function(){
		if($(this).val() != "") {
			$(this).parent(".continentbloc").next(".countrybloc").show();
			var countrySelect = $(this).parent(".continentbloc").next(".countrybloc").children("select");
			$(countrySelect).children().remove();
			$(countrySelect).removeAttr("disabled");
			var node = taxonomyMap[$(this).val()];
			addElementToSelect(countrySelect, js_bundle_map['Label.Search.TextSelectCountry'], "");
			for (var i=0;node && node.children && i<node.children.length;i++){
				if (node.children[i].name && node.children[i].taxonomy){
					addElementToSelect(countrySelect, node.children[i].name, node.children[i].taxonomy);
				}
			}
			$(this).parent(".continentbloc").next(".countrybloc").next(".regionbloc").hide().find("select").val("");
			$(this).parent(".continentbloc").next(".countrybloc").next(".regionbloc").next(".departmentbloc").hide().find("select").val("");
		} else {
			$(this).parent(".continentbloc").next(".countrybloc").hide().find("select").val("");
			$(this).parent(".continentbloc").next(".countrybloc").next(".regionbloc").hide().find("select").val("");
			$(this).parent(".continentbloc").next(".countrybloc").next(".regionbloc").next(".departmentbloc").hide().find("select").val("");
		}
		$.colorbox.resize();
		$("#colorbox").css({'top':'0'});
		searchPreviewFunction();
	});
	
	// Used when selecting a country in advanced search form
	$(".locationsBloc select[name^=search_country], .location-selects select[name^=search_country]").live("change", function(){
		if($(this).val() != "") {
			$(this).parent(".countrybloc").next(".regionbloc").show();
			var regionSelect = $(this).parent(".countrybloc").next(".regionbloc").children("select");
			$(regionSelect).children().remove();
			$(regionSelect).removeAttr("disabled");
			var node = taxonomyMap[$(this).val()];
			if (node && node.children && node.children.length > 1){
				addElementToSelect(regionSelect, js_bundle_map['Label.Search.TextSelectRegion'], "");
				for (var i=0;node && node.children &&  i<node.children.length;i++){
					if (node.children[i].name && node.children[i].taxonomy){
						addElementToSelect(regionSelect, node.children[i].name, node.children[i].taxonomy);
					}
				}
			}else{						
				$(this).parent(".countrybloc").next(".regionbloc").hide();
				$(this).parent(".countrybloc").next(".regionbloc").next(".departmentbloc").hide();
			}
		} else {
			$(this).parent(".countrybloc").next(".regionbloc").hide().find("select").val("");
			$(this).parent(".countrybloc").next(".regionbloc").next(".departmentbloc").hide().find("select").val("");
		}
		$.colorbox.resize();
		$("#colorbox").css({'top':'0'});
		searchPreviewFunction();
	});

	// Used when selecting a region in advanced search form
	$(".locationsBloc select[name^=search_region], .location-selects select[name^=search_region]").live("change", function(){
		if($(this).val() != "") {
			$(this).parent(".regionbloc").next(".departmentbloc").show();
			var departmentSelect = $(this).parent(".regionbloc").next(".departmentbloc").children("select");
			$(departmentSelect).children().remove();
			$(departmentSelect).removeAttr("disabled");
			var node = taxonomyMap[$(this).val()];
			if (node && node.children && node.children.length > 1){
				addElementToSelect(departmentSelect, js_bundle_map['Label.Search.TextSelectDepartment'], "");
				for (var i=0;node && node.children &&  i<node.children.length;i++){
					if (node.children[i].name && node.children[i].taxonomy){
						addElementToSelect(departmentSelect, node.children[i].name, node.children[i].taxonomy);
					}
				}
			}else{
				$(this).parent(".regionbloc").next(".departmentbloc").hide();
			}
		} else {
			$(this).parent(".regionbloc").next(".departmentbloc").hide().find("select").val("");
		}
		$.colorbox.resize();
		$("#colorbox").css({'top':'0'});
		return false;
	});
	
	// AJOUT pour panel Entité
	$("#entity_fieldset .add-btn").click(function() {
		var monClone= $(this).parent().find('.entitybloc:first').clone();
		$(this).parent().find('.entitybloc:last').after(monClone);
	});
	// Fin AJOUT pour panel Entité
	//$("#activity_fieldset .add-btn").click(function() {
	//	var monClone= $(this).parent().find('select:first').clone();
	//	$(this).parent().find('select:last').after(monClone);
	//});
	$('.tabHeader a').click(function() {
		//alert('Lorem Ipsum');
	});

	$('.showCtrl').click(function() {
		if($(this).parent().find('.on').html()) {
			$(this).parent().find('.on .bloc-slide').addClass("on").slideDown();
			$(this).parent().find('.bloc-slide button').attr('tab-index','0')
		} else {
			$(this).parent().find('.bloc-slide').addClass("on").slideDown();
		}
		//$(this).removeClass('showCtrl').addClass('hideCtrl');
		$(this).hide();
		//$("#showCtrl2").removeClass('hideCtrl').addClass('showCtrl');
		$(this).parent().find('.hideCtrl').show();

		return false;
		
	});

	$('.hideCtrl').click(function() {
		$(this).parent().find('.bloc-slide').slideUp(function(){
			$(this).removeClass("on");
			$(this).removeAttr("style");
		});
		$(this).parent().find('.bloc-slide button').attr('tab-index','-1')
		//$(this).removeClass('showCtrl').addClass('hideCtrl');
		//$("#showCtrl1").removeClass('hideCtrl').addClass('showCtrl');
		$(this).hide();
		$(this).parent().find('.showCtrl').show();
		return false;
	});

	$('#selectAll').click(function() {
		if($(this).is(':checked'))
			$('.checkJob').attr('checked', 'checked');
		else
			$('.checkJob').removeAttr('checked');
	});
	$('.checkJob').click(function() {
		$('#selectAll').removeAttr('checked');
	});
	// add z-index for li in result keywords page
	$('.keywords-result .result-list li').each(function(i) {
		$(this).mouseenter(function() {
			$('.bloc-list').removeClass('super');
			$(this).parents('.result-list').parent().addClass('super');
		});
		$(this).mouseleave(function() {
			$('.bloc-list').removeClass('super');
		});

		$(this).css('z-index', (90 - i));
	});

	$('.keywords-result .result-list li a').focus(function() {
		$('.shadowBox').removeClass('showBox');
		$(this).parent().parent().children('.shadowBox').addClass('showBox');
	});
	$('.keywords-result .result-list li a').focusout(function() {
		$('.shadowBox').removeClass('showBox');
	});
	
	// use for accessibility (display all block per default hiden)
	// $('.accountInfo .inputValue').toggle();
	// $('.accountInfo .inputContent').hide();
	

	//show edit input "CANDIDATE space"
	$('.edit').click(function() {
		$(this).parent().children('.inputValue').toggle()
		$(this).parent().children('.inputContent').toggle();
		$(this).hide().parent().children('.editInput').removeClass('editInput').addClass('editOk');
		return false;
	});
	$('.editOk').live('click', function() {

		if ($(this).attr("id") != 'editPwd2') {
			if(!$(this).parent().children('.inputContent').children('.inputText').val() || $(this).parent().children('.inputContent').children('.inputText').val() == $(this).parent().children('.inputContent').children('.inputText').attr('title')) {
				$(this).parent().children('.inputContent').children('.errorText').show();
				return false;
			} else {
				$(this).parent().children('.inputContent').children('.errorText').hide();
				$(this).parent().children('.inputValue').toggle()
				$(this).parent().children('.inputContent').toggle();
				$(this).addClass('editInput').parent().children('.edit').show();
			}
		} else {
			if(!$(this).parent().children('.inputContent').children().children('.inputText').val() || $(this).parent().children('.inputContent').children().children('.inputText').val() == $(this).parent().children('.inputContent').children().children('.inputText').attr('title')) {
				$(this).parent().children('.inputContent').children('.errorText').show();
				return false;
			} else {
				$(this).parent().children('.inputContent').children('.errorText').hide();
				$(this).parent().children('.inputValue').toggle()
				$(this).parent().children('.inputContent').toggle();
				$(this).addClass('editInput').parent().children('.edit').show();
			}
		}


	});

	jQuery('#application').click(function() {

		if(!$('.form-app select').val()) {
			$('.form-app .errorText').show();
			return false;
		} else
			$('.form-app .errorText').hide();
	});
	
	jQuery('#applicationguest').click(function() {
		if(!$('.form-app select').val()) {
			$('.form-app .errorText').show();
			return false;
		} else if($('.form-app select').val() == "-1") {
			var url = $("#unsollicitedLink").val();
			window.location.href = url;
			return false;

		} else {
			$('.form-app .errorText').hide();
			$('#applicationguest').val("?OSIRISID=unsolicited&COUNTRYID=" +$('#COUNTRYID').val());
			$('#applyUnsollicitedSessionFailParam').val("?OSIRISID=unsolicited&COUNTRYID=" +$('#COUNTRYID').val());
			$.colorbox({
				inline : true,
				title : " ",
				close : " ",
				opacity : 0.5,
				transition : "none",
				href : "#applyUnsollicitedSessionFail" 
			});
			return false;
		}
	});
	
	/* contact text area controle size*/

    $("#msg").keyup(function(){
        if($(this).val().length > 800){
            $(this).val($(this).val().substr(0, 800));
        }
    });
      
    $('.multiple_2 option').click(function(){
        var str = $(this).parent().val().toString();
        var nb = str.split(',').length;
        if (nb>2)
            $(this).context['selected']=false;
    
    });  
    
    $('.multiple_5 option').click(function(){
        var str = $(this).parent().val().toString();
        var nb = str.split(',').length;
        if (nb>5)
            $(this).context['selected']=false;
    
    }); 
    
    $('.multiple_3 option').click(function(){
        var str = $(this).parent().val().toString();
        var nb = str.split(',').length;
        if (nb>3)
            $(this).context['selected']=false;
    
    }); 
    
	/*site map*/

	calculHeight();
	showOptions();
	languageMenu();
	slideupMenu();
	sharePanel();
	popin();
	validateSignIn();
	appFormValidation();
	candidateForm();
	//advancedSearch();
	validateContact();
	/* Footer ADD */
	initFooterCarouselVideo(".footerSlide");
	/* /Footer ADD */
	
	if($('.home').html()) {
		initHomePageJs();
	}
	
	$.fn.check = function() {
		return this.each(function() {
			this.checked = true;
		});
	};

	// Function to uncheck radio input
	$.fn.uncheck = function() {
		return this.each(function() {
			this.checked = false;
		});
	};
	
	// Init functions
	initSidebarSubmenu();
	/* Footer DELETE */
	//slideFooter();
	/* /Footer DELETE */

	/* Footer ADD */
	positionFooter();
	/* /Footer ADD */

	
	$("#menu").find("li:first").addClass("first");
	
	
	//Temporary fix
	$(".bloc-slide", "#myProfileBlock").each(function(){
		if($(this).parent().hasClass("on")){
			$(this).show();
		}else{
			$(this).hide();
		}
	});
	
	/* Footer DELETE */
	/* Footer rev1 ADD */
	$("#videoBrick .carousel a, .video-result .carousel a, #savedVideos a.launcher").live("click", function(){ // Modifié -> lien video page "search-result"
	/* /Footer rev1 ADD */
	/* /Footer DELETE */
	/* Footer ADD */
	/* Footer rev1 DELETE */
	//$("#videoBrick .carousel a, #savedVideos a.launcher, .footerSlide .carousel a").live("click", function(){
	/* Footer rev1 DELETE */
	/* /Footer ADD */

		var videoId = $(this).attr("videoId");
		var wrapperId = $(this).attr("wrapperId");
		var articleId = $(this).attr("articleId");
		return openVideo(wrapperId, videoId, articleId);
	});
	
		/* show hide error message for all form */
	$('.submitForm').bind("click",function(){ 
		$(this).closest('form').find('label').removeClass('error');
		$(this).closest('form').find('.error').each(function(){
			$(this).parent('label').addClass('error');
		} );
	});
	
});


/****************** HOME START ******************/
function initHomePageJs(){

	// hide footer after 1s
	setTimeout("$('.home .footerBtn').trigger('click')", 1000);
    
	// Called when clicking on a criterion
	$('.bloc-search-criteria input').change(function() {
		var regexResult = reg.exec($(this).attr("id"));
		var type = regexResult[1];
		var name = regexResult[2];
		var checkboxId = "";
		if(type.indexOf("all")==0){
			checkboxId = "#" + type.substring(3,type.length) + "-" + name;
		}else{
			checkboxId = "#all" + type + "-" + name;
		}
		if($(this).is(':checked')) {
			$(this).parent("label").addClass('on');	
			$(checkboxId).check();
			$(checkboxId).parent("label").addClass('on');
		} else{
			$(this).parent("label").removeClass('on');
			$(checkboxId).uncheck();
			$(checkboxId).parent("label").removeClass('on');
		}
		homeEngineSearch();
	});
	
	$('.search-criteria .cr-2 .scrallCtn').append("<ul></ul>");
	$('.search-criteria .cr-3 .scrallCtn').append("<ul></ul>");
	$('.search-criteria .cr-4 .scrallCtn').append("<ul></ul>");
	


	jQuery('.scrallCtn').jScrollPane({
		isScrollableH : false
	});
	
	$('.scrallCtn').find('.jspDrag').attr('tabindex', 0);
	$('.scrallCtn').find('.jspDrag').attr('role', "slider");

	$('#searchEngine input[type="checkbox"]').focus(function() {
		$(this).parent().addClass('focus');
	});
	$('#searchEngine input[type="checkbox"]').blur(function() {
		$(this).parent().removeClass('focus');
	});
	// Called when clicking on COUNTRY/ENTITY/JOB blocks to display criteria
	$('#searchEngine li.global-item').click(function() {
		if(!$(this).is('.on')) {
			if($(this).is('.cr-1')) {
				$(this).addClass('on');
			} else {
				modifyInput = false;
				classId = $(this).attr('class').replace('global-item cr-', '');
				$('.bloc-search-criteria').addClass('tab' + classId);
				$('.bloc-search-criteria.tab' + classId).tabIndex = -1;
				$('.tab-content:visible input:first').focus();
				$('.tab-content:visible label:first').addClass('focus');
			}
		}
		jQuery('.scrallCtn').jScrollPane({
			isScrollableH : false
		});
	});
	
	$('#searchEngine li.global-item').keypress(function(e) {
		code = (e.keyCode ? e.keyCode : e.which);
		if(code == 13) {
			if(!$(this).is('.on')) {
				if($(this).is('.cr-1')) {
					$(this).addClass('on');
				} else {
					modifyInput = false;
					classId = $(this).attr('class').replace('global-item cr-', '');
					$('.bloc-search-criteria').addClass('tab' + classId);
					$('.bloc-search-criteria.tab' + classId).tabIndex = -1;
					$('.tab-content:visible input:first').focus();
					$('.tab-content:visible label:first').addClass('focus');
				}
			}
		}
		jQuery('.scrallCtn').jScrollPane({
			isScrollableH : false
		});
	});
	
	// show active criteria of search engine using link in <h2>
	$('#searchEngine .search-criteria a').click(function() {
		if($(this).parents('.global-item').is('.cr-1')) {
			$(this).parents('.global-item').addClass('on');
		} else {
			modifyInput = false;
			classId = $(this).parents('.global-item').attr('class').replace('global-item cr-', '');
			$('.bloc-search-criteria').addClass('tab' + classId);
			$('bloc-search-criteria.tab' + classId).tabIndex = -1;
			$('.tab-content:visible input:first').focus();
			$('.tab-content:visible label:first').addClass('focus');
		}
		jQuery('.scrallCtn').jScrollPane({
			isScrollableH : false
		});
		return false;
	});

	// show layout of search criteria
	$('#searchEngine .tabsCtrl a, .submitBtn a').click(function() {
		classId = $(this).attr('class').replace('cr-', '');
		$('.bloc-search-criteria').attr('class', 'bloc-search-criteria');

		$('.bloc-search-criteria').addClass('tab' + classId);
		$('.tab-content:visible input:first').focus();
		$('.tab-content:visible label:first').addClass('focus');
		jQuery('.scrallCtn').jScrollPane({
			isScrollableH : false
		});
		return false;
	});

	// refresh counter
	$('.global-item.cr-1 input').live('change', function() {
		modifyInput = true;
		var parameters = $("#searchEngine").serialize();
		addToQueue(parameters);
	});
	
	// validate options
	$('.submitBtn .loginBtn, .closeSearchBloc').live('click', function() { // Modifié
		$('.bloc-search-criteria').tabIndex = -1;
		$('#searchEngine .on h2 a').focus();
		$('.bloc-search-criteria').attr('class', 'bloc-search-criteria');
		return false;
	});
	
	$('#searchEngine input[type=radio]').focus(function() {
		$(this).prev('.holderWrap').addClass('focus');
	});
	
	$('#searchEngine input[type=radio]').blur(function() {
		$(this).prev('.holderWrap').removeClass('focus');
	});
	
	if($('#searchEngine input[type=radio]')) {
		$('#searchEngine input[type=radio]').prettyCheckboxes({
			checkboxWidth : 22, // The width of your custom checkbox
			checkboxHeight : 22, // The height of your custom checkbox
			display : 'inline'
		});
	}
	
	// home carousel video
	initHomeCarouselVideo(".group-identity");

	// home carousel agenda
	initHomeCarouselAgenda(".agenda");
	
	// close home brick
	$('.close-brick').live('click', function() {
		$(this).parents('li').animate({
			left : 1
		}, {
			duration : 200,
			step : function(now, fx) {
				$(this).children().css("opacity", (1 - now));
			}
		}).animate({
			width : -10
		}, 200, 'linear', function() {
			$(this).remove();
			$.get("/vgn-ext-templating/ajaxCategorySearchServlet.servlet?command=remove&hash="+$(this).attr("id"), function(results){
			});
		});
		return false;
	});
}

function homeEngineSearch() {

	// TEST existance classe 
	// var ifClassExist = $(".on");
	// if (ifClassExist.length){alert("ok");}else{alert("Pas ok");}



	// Ajout pour Profil (bouton  'all offers' ou 'select offers' )
	existingInput = new Array();
	html = '';
	//Profil bloc
	$("input[type='radio']:checked", ".global-item cr-1 open").each(function() {
		var value = $(this).val();
		if($.inArray(value, existingInput) == -1){
			html += '<li>' + $.trim($(this).parent().text()) + '</li>';
		}
		existingInput.push(value);
	});

	if(html.length > 0) {
		$('.global-item cr-1 open').addClass('on');
	} else {
		$('.global-item cr-1 open').removeClass('on');
	}
	// FIN Ajout pour Profil (bouton  'all offers' ou 'select offers' )

	existingInput = new Array();
	html = '';
	//Countries bloc
	$("input[type='checkbox']:checked", "#tab-cr-2,#tab-cr-5").each(function() {
		var value = $(this).val();
		if($.inArray(value, existingInput) == -1){
			html += '<li>' + $.trim($(this).parent().text()) + '</li>';
		}
		existingInput.push(value);
	});

	if(html.length > 0) {
		//$('.search-criteria .cr-2 .scrallCtn ul').html(html);
		$('.search-criteria .cr-2').addClass('on');
		$('.search-criteria .cr-2 .scrallCtn ul').html(html);

		$('.search-criteria .cr-2 .scrallCtn').jScrollPane({
			isScrollableH : false
		});
		$('.scrallCtn').find('.jspDrag').attr('tabindex', 0);
		$('.scrallCtn').find('.jspDrag').attr('role', "slider");
	} else {
		$('.search-criteria .cr-2').removeClass('on');
	}
	
	existingInput = new Array();
	html = '';
	//Entities bloc
	$("input[type='checkbox']:checked", "#tab-cr-3,#tab-cr-6").each(function() {
		var value = $(this).val();
		if($.inArray(value, existingInput) == -1){
			html += '<li>' + $.trim($(this).parent().text()) + '</li>';
		}
		existingInput.push(value);
	});

	if(html.length > 0) {
		//html = "<ul>" + html + "</ul>";
		$('.search-criteria .cr-3').addClass('on');
		$('.search-criteria .cr-3 .scrallCtn ul').html(html);
		
		$('.search-criteria .cr-3 .scrallCtn').jScrollPane({
			isScrollableH : false
		});
		$('.scrallCtn').find('.jspDrag').attr('tabindex', 0);
		$('.scrallCtn').find('.jspDrag').attr('role', "slider");
	} else {
		$('.search-criteria .cr-3').removeClass('on');
	}
	
	existingInput = new Array();
	html = '';
	//Job function bloc
	$("input[type='checkbox']:checked", "#tab-cr-4").each(function() {
		var value = $(this).val();
		if($.inArray(value, existingInput) == -1){
			html += '<li>' + $.trim($(this).parent().text()) + '</li>';
		}
		existingInput.push(value);
	});

	if(html.length > 0) {
		html = "<ul>" + html + "</ul>";
		$('.search-criteria .cr-4').addClass('on');
		$('.search-criteria .cr-4 .scrallCtn ul').html(html);
		
		$('.search-criteria .cr-4 .scrallCtn').jScrollPane({
			isScrollableH : false
		});
		$('.scrallCtn').find('.jspDrag').attr('tabindex', 0);
		$('.scrallCtn').find('.jspDrag').attr('role', "slider");
	} else {
		$('.search-criteria .cr-4').removeClass('on');
	}

	
	var parameters = $("#searchEngine").serialize();
	addToQueue(parameters);
		
}

function addToQueue(parameters){
	//We use a queue to fire ajax request sequentialy
	$("#home-search-bloc").queue(function() {
		var parameters = $("#searchEngine").serialize();
		executeHomeSearch(parameters);
	});
}

// Ajout function HallDeGare
function clockHallDeGare() {
	// Compteur dynamique style Hall de gare
	var clock;
    var strCompteur = $('#sidebarRight .compteur span').text();
    
    //Instantiate a counter
    clock = new FlipClock($('.clock'), strCompteur, {
        clockFace: 'Counter',
        minimumDigits: 1
    });
}
// FIN Ajout function HallDeGare

// Ajout function compteurBtnOffers
function compteurBtnOffers() {
    clockHallDeGare();

    var allOffers = $('#sidebarRight .short-link li.all_offers');
    var selectOffers = $('#sidebarRight .short-link li.select_offers');

    if($('.global-item').is('.on')){ // modifiée
        allOffers.hide();
        selectOffers.show();
        $('.btn-tools a').show();
    }
    else{
        allOffers.show();
        selectOffers.hide();
        $('.btn-tools a').not('.advanced-search').hide();
    }
}
// FIN Ajout function compteurBtnOffers

function executeHomeSearch(parameters) {
	jQuery.getJSON('/vgn-ext-templating/ajaxCategorySearchServlet.servlet?' + parameters, function(data) {
		var finishedAddBricks = false;
		var finishedAddJobs = false;
		if(data != null){
			if(data.bricks.length > 0){
				for(i = 0 ; i < data.bricks.length ; i++){
					var brickId = data.bricks[i].id;
					if(brickId.startsWith("agenda_")){
						$("#dd_"+brickId.substring(7, brickId.length)).remove();
						$("#dt_"+brickId.substring(7, brickId.length)).remove();
					}else if(brickId.startsWith("video_")){
						$("#video_"+brickId.substring(6, brickId.length)).children().remove();
					}else{
						$("#"+brickId).animate({
							left : 1
						}, {
							duration : 200,
							step : function(now, fx) {
								$(this).children().css("opacity", (1 - now));
							}
						}).animate({
							width : -10
						}, 200, 'linear', function() {
							$(this).remove();
						});
					}
				}
				if(data.bricks[0].id.startsWith("agenda_")){
					var elements = new Array();
					var containers = $(".jcarousel-item dl *", "#agendaBrick");
					for(var i = 0 ; i < containers.length ; i++){
						elements.push(containers[i]);
						$(containers[i]).remove();
					}
					var agendaBlocs = $(".jcarousel-item dl", "#agendaBrick");
					var blocNumber = 0;
					for(var i = 0 ; i < elements.length ; i++){
						if(i>0 && i%8 == 0){
							blocNumber++;
						}
						$(agendaBlocs[blocNumber]).append(elements[i]);
					}
					var carouselSize = 0;
					for(var i = 0 ; i < agendaBlocs.length ; i++){
						if($.trim($(agendaBlocs[i]).html()) != ""){
							carouselSize++;
						}
					}
					jQuery(".carousel", "#agendaBrick").data("carousel").size(carouselSize);
				}else if(data.bricks[0].id.startsWith("video_")){
					var elements = new Array();
					var containers = $(".jcarousel-item *", "#videoBrick");
					for(var i = 0 ; i < containers.length ; i++){
						elements.push(containers[i]);
						$(containers[i]).remove();
					}
					var videoBlocs = $(".jcarousel-item", "#videoBrick");
					var blocNumber = 0;
					for(var i = 0 ; i < elements.length ; i++){
						if(i>0 && i%8 == 0){
							blocNumber++;
						}
						$(videoBlocs[blocNumber]).append(elements[i]);
					}
					var carouselSize = 0;
					for(var i = 0 ; i < videoBlocs.length ; i++){
						if($.trim($(videoBlocs[i]).html()) != ""){
							carouselSize++;
						}
					}
					jQuery(".controler a:nth-child("+carouselSize+")", "#videoBrick").nextAll().remove();
					jQuery(".carousel", "#videoBrick").data("carousel").size(carouselSize);
					jQuery(".carousel", "#videoBrick").data("carousel").scroll(1);
					jQuery(".controler a", "#videoBrick").removeClass("on")
					jQuery(".controler a:nth-child(1)", "#videoBrick").addClass("on")
				}
			}
			if(data.status == "ADD"){	
				$.get("/vgn-ext-templating/ajaxCategorySearchServlet.servlet?command=get_bricks", function(results){
					$('.home-brick').prepend(results);
					$('.home-brick li.brick:hidden').each(function(i) {
						$(this).delay(i * 200).animate({
							width : 'toggle',
							height : 'toggle',
							opacity : 'toggle'
						}, {
							duration : 400,
							complete : function(){
								if($(this).hasClass("agenda")){
									initHomeCarouselAgenda(this);
								}else if($(this).hasClass("group-identity")){
									initHomeCarouselVideo(this);
								}
							}
						});
					});
				
				if(finishedAddJobs){
						//If all ajax request are done, then we fire next element in queue
						$("#home-search-bloc").dequeue();
					}else{
						finishedAddBricks = true;
					}
				});
				$(".jobOffers", "#sidebarRight").load("/vgn-ext-templating/ajaxCategorySearchServlet.servlet?command=get_job_offers", function(){
                    
					compteurBtnOffers(); // Ajout appel fonction compteurBtnOffers
				    
					initSidebarSubmenu();
					calculHeight();
					if(finishedAddBricks){
						//If all ajax request are done, then we fire next element in queue
						$("#home-search-bloc").dequeue();
					}else{
						finishedAddJobs = true;
					}
				});
			}else if(data.status == "REMOVE"){
				$(".jobOffers", "#sidebarRight").load("/vgn-ext-templating/ajaxCategorySearchServlet.servlet?command=get_job_offers", function(){
                    
                    compteurBtnOffers(); // Ajout appel fonction compteurBtnOffers
                    
					initSidebarSubmenu();
					calculHeight();
					//If all ajax request are done, then we fire next element in queue
					$("#home-search-bloc").dequeue();
				});
			}
		}
	});
}
/****************** HOME END ******************/

/****************** CARROUSEL START ******************/

function initHomeCarouselAgenda(context){
	jQuery(".carousel", context).jcarousel({
		scroll : 1,
		initCallback : function(carousel) {
			if(jQuery(carousel.list).find('li').size() < 2) {
				jQuery(carousel.clip).parents('.item-content').find('.controler .next').remove();
				jQuery(carousel.clip).parents('.item-content').find('.controler .prev').remove();
			}
			jQuery(carousel.clip).parents('.item-content').find('.controler .next').bind('click', function() {
				carousel.next();
				return false;
			});
			jQuery(carousel.clip).parents('.item-content').find('.controler .prev').bind('click', function() {
				carousel.prev();
				return false;
			});
			jQuery(".carousel", context).data("carousel", carousel);
		},
		buttonNextCallback: nextChange,
		buttonPrevCallback: prevChange,
		// This tells jCarousel NOT to autobuild prev/next buttons
		buttonNextHTML : null,
		buttonPrevHTML : null
	});
}


function initHomeCarouselVideo(context){
	jQuery(".carousel", context).jcarousel({
		scroll : 1, 
		auto:3,
		wrap: 'last',
		initCallback : function(carousel, state) { 
			jQuery(carousel.clip).parents('.item-content').find('.controler a').bind('click', function() {
				jQuery(this).parent().find('a').removeClass('on');
				jQuery(this).addClass('on');
				carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
				return false;
			});
			jQuery(".carousel", context).data("carousel", carousel);
			
			if (state == 'init') { 
				 
				
				carousel.startAutoOrig = carousel.startAuto; 
				carousel.startAuto = function() { 
				  if (!carousel.paused) { 
					carousel.startAutoOrig(); 
				  } 
				} 

				carousel.pause = function() { 
				  jQuery(carousel.clip).parents('.item-content').find('div.jcarousel-toggle').removeClass('jcarousel-play').addClass('jcarousel-pause'); 
				  jQuery('.jcarousel-toggle img').attr('alt','Lecture'); 
				  jQuery('.jcarousel-toggle img').attr('title','Lecture'); 
				  carousel.paused = true; 
				  carousel.stopAuto(); 
				}; 

				carousel.play = function() { 
				  jQuery(carousel.clip).parents('.item-content').find('div.jcarousel-toggle').removeClass('jcarousel-pause').addClass('jcarousel-play'); 
				  jQuery('.jcarousel-toggle img').attr('alt','Pause'); 
				  jQuery('.jcarousel-toggle img').attr('title','Pause'); 
				  carousel.paused = false; 
				  carousel.startAuto(); 
				}; 

				jQuery(carousel.clip).parents('.item-content').find('div.jcarousel-toggle img').wrap("<a href='#'></a>");
				
				jQuery('div.jcarousel-toggle a').focusin(function(){
					jQuery(this).parent().addClass('focus');
				});				
				
				jQuery('div.jcarousel-toggle a').focusout(function(){
					jQuery(this).parent().removeClass('focus');
				});
					
				jQuery(carousel.clip).parents('.item-content').find('div.jcarousel-toggle a').click(function(){ 
					if (carousel.paused) { 
							carousel.play(); 
					} else { 
							carousel.pause(); 
					} 
					return false;
				}); 
			} 


			  carousel.play(); 
			
		},itemVisibleInCallback:{
		onBeforeAnimation:function(carousel, item, idx, state) {
		    jQuery(carousel.clip).parents('.item-content').find('.controler a').parent().find('a').removeClass('on');
		    jQuery(carousel.clip).parents('.item-content').find('.controler a').parent().find('a').eq(jQuery(item).attr('jcarouselindex')-1).addClass('on');
		       
		}
		},
		// This tells jCarousel NOT to autobuild prev/next buttons
		buttonNextHTML : null,
		buttonPrevHTML : null
	});
}

/* Footer ADD */
function initFooterCarouselVideo(context){
	jQuery(".carousel", context).jcarousel({
		scroll : 1, 
		auto:3,
		wrap: 'last'
	});
}
/* /Footer ADD */
function nextChange(carousel, control, flag){		
	if (flag){
		$(".next").show();
	}
	else{
		$(".next").hide();
	}
}

function prevChange(carousel, control, flag){
	if (flag){
		$(".prev").show();
	}
	else{
		$(".prev").hide();
	}
}

function initSidebarSubmenu(){
	// show submenu in sidebar right
	$('.bloc2 ul.menu li').mouseenter(function() {
		$(this).addClass('on');
	});
	// hide submenu in sidebar right
	$('.bloc2 ul.menu li').mouseleave(function() {
		$(this).removeClass('on');
	});
	// show submenu in sidebar right for accessibility
	$('.bloc2 ul.menu li a').focus(function() {
		$('.bloc2 ul.menu li').removeClass('on');
		$(this).parent().addClass('on');
	});
	// initialize the buttons
	var allOffers = $('#sidebarRight .short-link li.all_offers');
	var selectOffers = $('#sidebarRight .short-link li.select_offers');
	if($('.global-item').is('.on')){
		allOffers.hide();
		selectOffers.show();
		$('.btn-tools a').show();
	}
	else{
		allOffers.show();
		selectOffers.hide();
		$('.btn-tools a').not('.advanced-search').hide();
	}
}


/****************** CARROUSEL END ******************/

/****************** FOOTER START ******************/
/* Footer DELETE */
// function slideFooter() {
// 	jQuery('.footerBtn,.footerPanel').click(function() {

// 		if($('.footerSection').position().left == -5000) {
// 			$('.footerSection').hide();
// 			jQuery('#footer').addClass('deployed');
// 			jQuery('.footerSection').slideDown('slow', function() {
// 				jQuery('.footerSection').css('display', 'block');
// 			});
// 		} else {
// 			jQuery('.footerSection').slideUp('slow', function() {
// 				jQuery('#footer').removeClass('deployed');
// 				jQuery('.footerSection').css('display', 'block');
// 			});
// 		}

// 		return false;
// 	});
// }
/* /Footer DELETE */

/* Footer ADD */
function positionFooter() {
	var heightHeader = $("#header").height();
	var heightWrapper = $("#wrapper").height();
	var heightFooter = $("#footer").height();
	var totalHeight = heightHeader + heightWrapper + heightFooter;
	var winHeight = $(window).height();

	if (winHeight > totalHeight ) {
		var newHeight = winHeight - heightHeader - heightFooter;
		$("#wrapper").height(newHeight) ;
	}
}

/* /Footer ADD */

/****************** FOOTER END ******************/

/****************** CANDIDATE START ******************/
function initCandidateSpace(){
	$('.tab-block .tabs li a.ctrl-tabl').click(function() {
		$('.tab-block .tabs li').removeClass('on');
		$(this).parents('li').addClass('on');
		$(this).parents().find('li div.bloc-slide').addClass('on');
		$('.tab-block .tabs li').find('.tab-content').hide();
		$('.tab-block .tabs li.on').find('.tab-content').show();
		$('.container-list').attr('class', 'container-list').addClass($(this).attr('class').replace('l', 't'));
		var tab = $(this).attr('href');
		$(this).parents('.list-tabs').find('.ctrl-visibility').hide();
		$(this).parents('.list-tabs').find('.hideCtrl').show();
		return false;
	});
	
	// clone block in form tab profile (other experience) :: candidate space
    $('.clone-other-experience').click(function() {
        var nb = $(this).parents('.fieldset').find('.clone-block').size();
        if(nb<2){
		
			// add 1 to the number of other experiences
			var size = parseInt($("input[name='nbOtherExperience']").val(),10) +1;
			$("input[name='nbOtherExperience']").val(size);
			// display
            if (!$(this).parents('.fieldset').find('.clone-block:first').is(':visible')){
                $(this).parents('.fieldset').find('.clone-block:first').show();
            }
            else{
                var option = $(this).parents('.fieldset').find('.clone-block:first').clone();
                $(option).find('.countrybloc select').val('');
                $(option).find('.countrybloc input').val('');
                $(this).parents('.fieldset').find('.clone-other-experience').parent().before(option);
                $(this).hide();
				// *** change the name of all the inputs  ***
				$(option).find('input').each(function(){
					var oldName = $(this).attr('name');
					var oldId = $(this).attr('id');
					var labelParent = $(this).parents('label');
					var newName;
					var newId;
					// if name already is 'something2', new name is 'something'
					// if max number of other exp changes, change this number too
					// or check if last char is numeric, for instance
					if(oldName.charAt(oldName.length-1) == 2) {
						newName = oldName.substring(0, oldName.length-1);
					} else {
						newName = $(this).attr('name') + size;
					}

					if(oldId.charAt(oldId.length-1) == 2) {
						newId = oldId.substring(0, oldId.length-1);
					} else {
						newId = $(this).attr('id') + size;
					}

					$(this).attr('name', newName);
					$(this).attr('id', newId);
					if (labelParent) {
						labelParent.attr('for', newId);
					}
					$(this).val("");
				});
				// *** change the name of all the selects  ***
				$(option).find('select').each(function(){
					var oldName = $(this).attr('name');
					var oldId = $(this).attr('id');
					var labelParent = $(this).parents('label');
					var newName;
					var newId;
					// if name already is 'something2', new name is 'something'
					// if max number of other exp changes, change this number too
					// or check if last char is numeric, for instance
					if(oldName.charAt(oldName.length-1) == 2) {
						newName = oldName.substring(0, oldName.length-1);
					} else {
						newName = $(this).attr('name') + size;
					}
					if(oldId.charAt(oldId.length-1) == 2) {
						newId = oldId.substring(0, oldId.length-1);
					} else {
						newId = $(this).attr('id') + size;
					}

					$(this).attr('name', newName);
					$(this).attr('id', newId);
					if (labelParent) {
						labelParent.attr('for', newId);
					}
					$(this).val("");
					// change option value for experienceOtherWorkingTime
					if (newId == 'experienceOtherWorkingTime2') {
						var list = $("#"+newId);
						list.html('');   
						list.append('<option value=""></option>');
						$.each(selectedOtherExpWorkingTime3, function(index,item) {
						  list.append('<option value="'+item.id+'">'+item.value+'</option>');
						});
					}
				});
				// *** end change the name of all the inputs  ***
				return false;
            }
            return false;
        }
        return false;
    });
	// delete an added experience block
	jQuery('.delete-brick-experience').live('click',function(){
        jQuery(this).parents('.fieldset').find('.clone-other-experience').show();
        var nb = jQuery(this).parents('.fieldset').find('.clone-block').size();
        if(nb>1){
            var deletedDiv = jQuery(this).parents('.clone-block') ;
			var deletedDivId = $(deletedDiv).attr("id");
			$(deletedDiv).remove();
			if(deletedDivId.charAt(deletedDivId.length-1) != 2) { 
				// select the remaining div
				var remainingDiv = $('#expClone2');
				// *** change the name of all the inputs  ***
				$(remainingDiv).find('input').each(function(){
					var oldName = $(this).attr('name');
					var oldId = $(this).attr('id');
					var labelParent = $(this).parents('label');
					var newName;
					var newId;
					// if name already is 'something2', new name is 'something'
					if(oldName.charAt(oldName.length-1) == 2) {
						newName = oldName.substring(0, oldName.length-1);
					}
					if(oldId.charAt(oldId.length-1) == 2) {
						newId = oldId.substring(0, oldId.length-1);
					}
					$(this).attr('name', newName);
					$(this).attr('id', newId);
					if (labelParent) {
						labelParent.attr('for', newId);
					}
				});
				// *** change the name of all the selects  ***
				$(remainingDiv).find('select').each(function(){
					var oldName = $(this).attr('name');
					var oldId = $(this).attr('id');
					var labelParent = $(this).parents('label');
					var newName;
					var newId;
					// if name already is 'something2', new name is 'something'
					if(oldName.charAt(oldName.length-1) == 2) {
						newName = oldName.substring(0, oldName.length-1);
					} 
					if(oldId.charAt(oldId.length-1) == 2) {
						newId = oldId.substring(0, oldId.length-1);
					}
					$(this).attr('name', newName);
					$(this).attr('id', newId);
					if (labelParent) {
						labelParent.attr('for', newId);
					}
				});	
			}
        }
        else {
            var lastDiv = jQuery(this).parents('.clone-block');
			$(lastDiv).hide();
			// empty all values
			$(lastDiv).find('input').each(function(){
				$(this).val("");
			});
			$(lastDiv).find('select').each(function(){
				$(this).val("");
			});
			
		}
		// substract 1 to the number of other experiences
		var otherExp = parseInt($("input[name='nbOtherExperience']").val(),10) -1;
		$("input[name='nbOtherExperience']").val(otherExp);
        return false;
    });
		
	
	//clone block in form tab profile (other education) :: candidate space
    $('.clone-other-diploma').click(function() {
        var nb = $(this).parents('.fieldset').find('.clone-block').size();
        if(nb<2){
			// add 1 to the number of other educations
			var size = parseInt($("input[name='nbOtherEducation']").val(),10) +1;
			$("input[name='nbOtherEducation']").val(size);
			// display
            if (!$(this).parents('.fieldset').find('.clone-block:first').is(':visible')){
                $(this).parents('.fieldset').find('.clone-block:first').show();
            }
            else{
                var option = $(this).parents('.fieldset').find('.clone-block:first').clone();
                $(option).find('.countrybloc select').val('');
                $(option).find('.countrybloc input').val('');
                $(this).parents('.fieldset').find('.clone-other-diploma').parent().before(option);
                $(this).hide();
				// *** change the name of all the inputs  ***
				$(option).find('input').each(function(){
					var oldName = $(this).attr('name');
					var oldId = $(this).attr('id');
					var labelParent = $(this).parents('label');
					var newName;
					var newId;
					// if name already is 'something2', new name is 'something'
					// if max number of other exp changes, change this number too
					// or check if last char is numeric, for instance
					if(oldName.charAt(oldName.length-1) == 2) {
						newName = oldName.substring(0, oldName.length-1);
					} else {
						newName = $(this).attr('name') + size;
					}
					
					if(oldId.charAt(oldId.length-1) == 2) {
						newId = oldId.substring(0, oldId.length-1);
					} else {
						newId = $(this).attr('id') + size;
					}

					$(this).attr('name', newName);
					$(this).attr('id', newId);
					if (labelParent) {
						labelParent.attr('for', newId);
					}
					$(this).val("");
				});
				// *** change the name of all the selects  ***
				$(option).find('select').each(function(){
					var oldName = $(this).attr('name');
					var oldId = $(this).attr('id');
					var labelParent = $(this).parents('label');
					var newName;
					var newId;
					// if name already is 'something2', new name is 'something'
					// if max number of other exp changes, change this number too
					// or check if last char is numeric, for instance
					if(oldName.charAt(oldName.length-1) == 2) {
						newName = oldName.substring(0, oldName.length-1);
					} else {
						newName = $(this).attr('name') + size;
					}
					if(oldId.charAt(oldId.length-1) == 2) {
						newId = oldId.substring(0, oldId.length-1);
					} else {
						newId = $(this).attr('id') + size;
					}
					$(this).attr('name', newName);
					$(this).attr('id', newId);
					if (labelParent) {
						labelParent.attr('for', newId);
					}
					$(this).val("");
				});
				 return false;
				// *** end change the name of all the inputs  ***
            }
            return false;
        }
        return false;
    });
	// delete an added diploma block
	jQuery('.delete-brick-diploma').live('click',function(){
        jQuery(this).parents('.fieldset').find('.clone-other-diploma').show();
        var nb = jQuery(this).parents('.fieldset').find('.clone-block').size();
        if(nb>1){
			var deletedDiv = jQuery(this).parents('.clone-block') ;
			var deletedDivId = $(deletedDiv).attr("id");
			$(deletedDiv).remove();
			if(deletedDivId.charAt(deletedDivId.length-1) != 2) { 
				// select the remaining div
				var remainingDiv = $('#eduClone2');
				// *** change the name of all the inputs  ***
				$(remainingDiv).find('input').each(function(){
					var oldName = $(this).attr('name');
					var oldId = $(this).attr('id');
					var labelParent = $(this).parents('label');
					var newName;
					var newId;
					// if name already is 'something2', new name is 'something'
					if(oldName.charAt(oldName.length-1) == 2) {
						newName = oldName.substring(0, oldName.length-1);
					}
					if(oldId.charAt(oldId.length-1) == 2) {
						newId = oldId.substring(0, oldId.length-1);
					}
					$(this).attr('name', newName);
					$(this).attr('id', newId);
					if (labelParent) {
						labelParent.attr('for', newId);
					}
				});
				// *** change the name of all the selects  ***
				$(remainingDiv).find('select').each(function(){
					var oldName = $(this).attr('name');
					var oldId = $(this).attr('id');
					var newName;
					var labelParent = $(this).parents('label');
					var newId;
					// if name already is 'something2', new name is 'something'
					if(oldName.charAt(oldName.length-1) == 2) {
						newName = oldName.substring(0, oldName.length-1);
					}
					if(oldId.charAt(oldId.length-1) == 2) {
						newId = oldId.substring(0, oldId.length-1);
					} 
					$(this).attr('name', newName);
					$(this).attr('id', newId);
					if (labelParent) {
						labelParent.attr('for', newId);
					}
				});	
			}
        }
        else {
            var lastDiv = jQuery(this).parents('.clone-block');
			$(lastDiv).hide();
			// empty all values
			$(lastDiv).find('input').each(function(){
				$(this).val("");
			});
			$(lastDiv).find('select').each(function(){
				$(this).val("");
			});
		}
		// substract 1 to the number of other educations
		var otherEdu = parseInt($("input[name='nbOtherEducation']").val(),10)-1;
		$("input[name='nbOtherEducation']").val(otherEdu);
        return false;
    });
		
	// hide form tab profile :: candidate space
	$('.cancelForm').click(function() {
		$(this).parents('form').removeClass('editMode');
		$('.tab-block .tabs li.on').find('a').focus();
		return false;
	});
	// view form tab profile :: candidate space
	$('.experienced-hide').hide();
	if($("#experienced-hide").val()=="false"){
		$('#t4 .fieldset-recap p,#t4 .fieldset-recap div').hide();
		$('#t4 .fieldset-recap .shift').show();
		$('#t4 .fieldset-recap .submit-block').show();
	}
	$('.other-hide').hide();
	if($("#other-hide").val() != "") {
		$('.other-hide').show();
	}
	$('.other-hide2').hide();
	if($("#other-hide2").val() != "") {
		$('.other-hide2').show();
	}
	$('.other-hide3').hide();
	if($("#other-hide3").val() != "") {
		$('.other-hide3').show();
	}
	//if javascript is enabled : set "under28" required and hide select
	// that way if js isn't enabled the form can be submitted
	$('.select-age').hide();
	$("#under28RequiredLabel").addClass("required");
	$("#under28RequiredSup").show();
	
	$('.select-contract').hide();
	if ($("#select-contract").val()=="FP00000002"){
        $('.select-contract').show();
        $('.select-contract select').attr('disabled', '');
    }
	// if the contract type is international volunteer show "under 28"
    if ($("#select-contract").val()=="FP00000004"){
        $('.select-age').show();
        $('.select-age select').attr('disabled', '');
    } 
    
    $('#addOtherDiploma').show();
    $('#addOtherExperience').show();
	
	$('.editForm').click(function() {
		$(this).parents('form').addClass('editMode');
		$(this).parents('form').find('.fieldset').find('label:first').focus();

		if (($("#experienced-hide").val()=="true" )){
			$('.experienced-hide').show();
		}  
		return false;
	});
	
	$("#eductationLevelSelect").change(function(){
		if($(this).val() == "21"){
			$("#diplomaDetails").hide();
			$("#diplomaDetails").find("input").val("");
			$("#diplomaDetails").find("select").each(function(){
				$(this).get(0).selectedIndex = 0;
			});
		}else{
			$("#diplomaDetails").show();
		}
	});
	
	
	// show error form tab profile :: candidate space
	$('.tab-content .submitForm').click(function() {
	
		var checkForm = true;
		
		//Test for experience tab if "no diploma" is selected, then we don't check the form.
		if($(this).parents("li.l2").hasClass("on")){
			if($("#eductationLevelSelect").val() == "21"){
				checkForm = false;
			}else{
				checkForm = true;
			}
		}
	
		var numericInput = new Array("salaryCurrency","bonusCurrency");
		var maxSizeMultiSelect = [];
		maxSizeMultiSelect['areaProfExp'] = 2;
		
		var errorInputs = new Array();
		var emtyField = 0;

		if(checkForm){	
			$(this).parents('.tab-content').find('.required').each(function() {
				if ($(this).parents('.clone-block').css('display') != 'none'){
					if($(this).find('input').val() == "" && $(this).find('input').is(":visible")) {
		
						errorInputs.push($(this).find('input').attr("name"));
						$(this).find('input').addClass('error');
						$(this).find('input').addClass('redBorder');
						if($(this).find('input').attr('disabled') == '')
							emtyField++;
					} else if(($(this).find('select').val() == "" || $(this).find('select').val() == null) && $(this).find('select').is(":visible")) {
			
						errorInputs.push($(this).find('input').attr("name"));
						$(this).find('select').addClass('error');

						$(this).find('select').addClass('redBorder');
						if($(this).find('select').attr('disabled') == '')
							emtyField++;
					}else {
						if(errorInputs.contains($(this).find('input').attr("name"))){
							errorInputs.remove($(this).find('input').attr("name"));
							$(this).removeClass('error');
							$(this).removeClass('redBorder');
						}
					} 
				}
			});
			if($("#t5").is(':visible') ){
				if (!$("input[name='availability']:checked").val()) {
						errorInputs.push("availability");
						$("input[name='availability']").parents('label').parent().addClass('error');
						$("input[name='availability']").parents('label').addClass('redBorder');
						emtyField++;
				}
				$(this).parents('.tab-content').find('input').each(function() {
					var name = $(this).attr("name");
					var WTest = new RegExp("^[0-9]+$");
					var salaire=numericInput[0];
					if ($.inArray(name, numericInput) != -1){
						if($(this).val() && WTest.test($(this).val())==false) {
							errorInputs.push(name);
							$(this).addClass('error');
							$(this).addClass('redBorder');
							emtyField++;
						}
					}
					if($(this).val().indexOf("<script") !=-1){
						errorInputs.push(name);
						$(this).addClass('error');
						$(this).addClass('redBorder');
						emtyField++;
					}
				});
			}
			if ($('#experienceMainFromMonth')) {
				if (validateDate("experienceMainFromMonth","experienceMainFromYear","experienceMainToMonth","experienceMainToYear")==false) {
					emtyField++;
					$("#experienceMainFromYear").addClass('error');
					$("#experienceMainFromYear").addClass('redBorder');
					$("#experienceMainFromMonth").addClass('error');
					$("#experienceMainFromMonth").addClass('redBorder');
					$("#experienceMainToYear").addClass('error');
					$("#experienceMainToYear").addClass('redBorder');
					$("#experienceMainToMonth").addClass('error');
					$("#experienceMainToMonth").addClass('redBorder');
					$("#experience-error-dateValidation").show();
				} else {
					$("#experienceMainFromYear").removeClass('error');
					$("#experienceMainFromYear").removeClass('redBorder');
					$("#experienceMainFromMonth").removeClass('error');
					$("#experienceMainFromMonth").removeClass('redBorder');
					$("#experienceMainToYear").removeClass('error');
					$("#experienceMainToYear").removeClass('redBorder');
					$("#experienceMainToMonth").removeClass('error');
					$("#experienceMainToMonth").removeClass('redBorder');
					$("#experience-error-dateValidation").hide();
				}
			}
			if ($('#experienceOtherFromMonth') && $('#experienceOtherFromMonth').is(':visible')) {
				if (!validateDate("experienceOtherFromMonth","experienceOtherFromYear","experienceOtherToMonth","experienceOtherToYear")) {
					emtyField++;
					$("#experienceOtherFromYear").addClass('error');
					$("#experienceOtherFromYear").addClass('redBorder');
					$("#experienceOtherFromMonth").addClass('error');
					$("#experienceOtherFromMonth").addClass('redBorder');
					$("#experienceOtherToYear").addClass('error');
					$("#experienceOtherToYear").addClass('redBorder');
					$("#experienceOtherToMonth").addClass('error');
					$("#experienceOtherToMonth").addClass('redBorder');
					$("#experience-error-dateValidation").show();
				} else {
					$("#experienceOtherFromYear").removeClass('error');
					$("#experienceOtherFromYear").removeClass('redBorder');
					$("#experienceOtherFromMonth").removeClass('error');
					$("#experienceOtherFromMonth").removeClass('redBorder');
					$("#experienceOtherToYear").removeClass('error');
					$("#experienceOtherToYear").removeClass('redBorder');
					$("#experienceOtherToMonth").removeClass('error');
					$("#experienceOtherToMonth").removeClass('redBorder');
					$("#experience-error-dateValidation").hide();
				}
			}
			if ($('#experienceOtherFromMonth2') && $('#experienceOtherFromMonth2').is(':visible')) {
				if (!validateDate("experienceOtherFromMonth2","experienceOtherFromYear2","experienceOtherToMonth2","experienceOtherToYear2")) {
					emtyField++;
					$("#experienceOtherFromYear2").addClass('error');
					$("#experienceOtherFromYear2").addClass('redBorder');
					$("#experienceOtherFromMonth2").addClass('error');
					$("#experienceOtherFromMonth2").addClass('redBorder');
					$("#experienceMainToYear").addClass('error');
					$("#experienceMainToYear").addClass('redBorder');
					$("#experienceOtherToMonth2").addClass('error');
					$("#experienceOtherToMonth2").addClass('redBorder');
					$("#experience-error-dateValidation").show();
				} else {
					$("#experienceOtherFromYear2").removeClass('error');
					$("#experienceOtherFromYear2").removeClass('redBorder');
					$("#experienceOtherFromMonth2").removeClass('error');
					$("#experienceOtherFromMonth2").removeClass('redBorder');
					$("#experienceOtherToYear2").removeClass('error');
					$("#experienceOtherToYear2").removeClass('redBorder');
					$("#experienceOtherToMonth2").removeClass('error');
					$("#experienceOtherToMonth2").removeClass('redBorder');
					$("#experience-error-dateValidation").hide();
				}
			}
			if ($('#select-contract') && $('#select-contract').is(':visible')) {
				if ($("#select-contract").val() == 'FP00000004' && ($("#under28").val() == 'false' || $("#under28").val() == '')) {
					//emtyField++;
					$("#under28").addClass('error');
					$("#under28").addClass('redBorder');
					$("#preference-error-vie").show();
				} else {
					$("#under28").removeClass('error');
					$("#under28").removeClass('redBorder');
					$("#preference-error-vie").hide();
					$('#t5 .error-message').show();
				}
			}
		}
		
		if(emtyField ==1 &&($('#preference-error-vie').is(':visible') || $("#experience-error-dateValidation").is(':visible') )){
			$('#t5 .error-message').css('visibility','hidden');
		}else{
			$('#t5 .error-message').css('visibility','visible');
		}
		
		if(emtyField > 0) {
			$(this).parents('.tab-content').find('.error-message').show();

			return false;
		} else {
			$(this).parents('.tab-content').find('.error-message').hide();
			$(this).parents('form').removeClass('editMode');
		}
		$('.tab-block .tabs li.on').find('a').focus();
		return true;
	});
	
	$('.popinContent .submitForm').click(function() {
		var numericInput = new Array("salaryCurrency","bonusCurrency");
		var maxSizeMultiSelect = [];
		maxSizeMultiSelect['areaProfExp'] = 2;
		maxSizeMultiSelect['areaProfExp'] = 2;
		
		var errorInputs = new Array();
		var emtyField = 0;
		var errorPersonalData = 0;
		var errorEducation = 0;
		var errorLanguage = 0;
		var errorExperience = 0;
		var errorPreference = 0;
		$(this).parents('.popinContent').find('.required').each(function() {
			if ($(this).parents('.clone-block').css('display') != 'none'){
				if($(this).find('input').val() == "" && $(this).find('input').is(":visible")) {
					errorInputs.push($(this).find('input').attr("name"));
					$(this).addClass('error');
					$(this).addClass('redBorder');
					if($(this).find('input').attr('disabled') == '') {
						emtyField++;
						if ($(this).find('input').parents(".personalData").size() > 0) {
							errorPersonalData++;
						} else if ($(this).find('input').parents(".education").size() > 0) {
							errorEducation++
						} else if ($(this).find('input').parents(".language").size() > 0) {
							errorLanguage++
						} else if ($(this).find('input').parents(".experience").size() > 0) {
							errorExperience++
						} else if ($(this).find('input').parents(".preference").size() > 0) {
							errorPreference++
						}
					}
				} else if(($(this).find('select').val() == "" || $(this).find('select').val() == null || $(this).find('select').val() == -1)  && $(this).find('select').is(":visible")) {
					errorInputs.push($(this).find('input').attr("name"));
					$(this).addClass('error');
					$(this).addClass('redBorder');
					if($(this).find('select').attr('disabled') == '') {
						emtyField++;
						if ($(this).find('select').parents(".personalData").size() > 0) {
							errorPersonalData++;
						} else if ($(this).find('select').parents(".education").size() > 0) {
							errorEducation++
						} else if ($(this).find('select').parents(".language").size() > 0) {
							errorLanguage++
						} else if ($(this).find('select').parents(".experience").size() > 0) {
							errorExperience++
						} else if ($(this).find('select').parents(".preference").size() > 0) {
							errorPreference++
						}
					}
				} else if(!$("input[name='availability']:checked").val()) {
						errorInputs.push("availability");
						$("input[name='availability']").parents('label').parent().addClass('error');
						$("input[name='availability']").parents('label').addClass('redBorder');
						errorPreference++;
				
				}else{
					$(this).removeClass('error');
					$(this).removeClass('redBorder');
				}
				
			}
		});
		$(this).parents('.popinContent').find('input').each(function() {
			var name = $(this).attr("name");
			if ($.inArray(name, numericInput) != -1){
				if($(this).val() != "" && isNaN($(this).val())) {
					errorInputs.push(name);
					$(this).addClass('error');
					$(this).addClass('redBorder');
					emtyField++;
				} else {
					$(this).removeClass('error');
					$(this).removeClass('redBorder');
				}
			}
			if($(this).val().indexOf("<script") !=-1){
				errorInputs.push(name);
				$(this).addClass('error');
				$(this).addClass('redBorder');
				emtyField++;
			}
		});
		if(emtyField > 0) {
			if (errorPersonalData > 0) {
				$(this).parents('.popinContent').find('.error-personalData').show();
			} else {
				$(this).parents('.popinContent').find('.error-personalData').hide();
			}
			if (errorEducation > 0) {
				$(this).parents('.popinContent').find('.error-education').show();
			} else {
				$(this).parents('.popinContent').find('.error-education').hide();
			}
			if (errorLanguage > 0) {
				$(this).parents('.popinContent').find('.error-language').show();
			} else {
				$(this).parents('.popinContent').find('.error-language').hide();
			}
			if (errorExperience > 0) {
				$(this).parents('.popinContent').find('.error-experience').show();
			} else {
				$(this).parents('.popinContent').find('.error-experience').hide();
			}
			if (errorPreference > 0) {
				$(this).parents('.popinContent').find('.error-preference').show();
			} else {
				$(this).parents('.popinContent').find('.error-preference').hide();
			}
			return false;
		} else {
			$(this).parents('.popinContent').find('.error-message').hide();
			$(this).parents('form').removeClass('editMode');
		}
		$('.tab-block .tabs li.on').next().find('a').focus();
		return true;
	});
	
	$('.clone-other-language').click(function(){
		
		var size = parseInt($('#formLanguageSkills').find("input[name='nbOther']").val(),10) + 1;
		$('#formLanguageSkills').find("input[name='nbOther']").val(size);
		
		var option = $(this).parents('.fieldset').find('.clone-block-language:first').clone();
		var tmp;
		$(option).find('select').each(function(){
			var oldName = $(this).attr('name');
    		var newName = $(this).attr('name') + size;
			$(this).attr('name', newName);
			$(this).val("");
			
			if ($(this).attr('id') != ""){
				var newId = $(this).attr('id') + size;
				$(this).attr('id', newId);
				$(this).change(function(){
					var obj = '.' + $(this).attr('id');
					if($(this).val() == '') {
						$(obj).hide();
						$(obj).find('input').attr('disabled', 'disabled');
						$(obj).find('select').attr('disabled', 'disabled');
					} else {
						$(obj).show();
						$(obj).find('input').attr('disabled', '');
						$(obj).find('select').attr('disabled', '');
					}
				});
			}else{
				$(this).parents('label').removeClass('other-hide');
				$(this).parents('label').addClass('other-hide'+size);
			}
		});
		
		$(option).find('label').each(function(){
			var newId = $(this).attr('id') + size;
			$(this).attr('id', newId);
		});
		
		$(this).parents('.fieldset').find('.clone-other-language:first').parent().before(option);
		$(option).show();
		
		return false;
	});
	
	$('.item.b-doc .add-btn').click(function(){adddocument=1;});	
	$('.appformDocumentError').hide();
	
}
/****************** CANDIDATE END ******************/

// popin aria
$('#colorbox').attr("aria-live","assertive").attr("aria-atomic","true");

// popin focus focusout


$(document).bind('cbox_complete', function() {
	Focus = currentFocus;
	if($('#mailAlert').is(':visible')) {
		$('#colorbox').css('top', 0);
	}
	
	$('#header *').attr("tabIndex", "-1");
	$('#wrapper *').attr("tabIndex", "-1");
	$('#footer *').attr("tabIndex", "-1");
	$('#colorbox').tabIndex = 0;
	$('#colorbox *').tabIndex = 0;
	$('#colorbox *').removeAttr("tabIndex");
	$('#cboxMiddleLeft').html('<a href="#" class="popinFocus" ></a>');
	$('#cboxClose').html('<a href="#" style="float:left; width:10px; height:10px" tabindex="0"></a>');
	$('.popinFocus').focus();
	
	if($('#experienced-hide').val()=='true'){
		$('.experienced-hide').show();
	}
});
$(document).bind('cbox_closed', function() {
	$('#header *').removeAttr("tabIndex");
	$('#wrapper *').removeAttr("tabIndex");
	$('#footer *').removeAttr("tabIndex");
	$('#colorbox *').removeAttr("tabIndex");
	$('#colorbox').tabIndex = 0;
	$('#cboxClose a').focusout(function() {
		$('#cboxClose a').removeClass('focus');
		//Focus.focus();
	});
});
// end popin focus focusout

function popin() {

	$("a", "#cboxClose").live("click", function(){
		return false;
	});

	$('#linktoForgot,#linktoForgot2,#linktoForgot3').click(function() {
		$.colorbox({
			inline : true,
			title : "&nbsp;",
			close : "&nbsp;",
			opacity : 0.5,
			transition : "none",
			href : "#forgotPwd"
		});
		return false;
	});
	
	$('#linktoForgot4,#linktoForgot5,#linktoForgot6,#linktoForgot7,#linktoForgot8,#linktoForgot9,#linktoForgot10,#linktoForgot11,#linktoForgot12, #linktoForgot13').click(function() {
		$.colorbox({
			inline : true,
			title : "&nbsp;",
			close : "&nbsp;",
			opacity : 0.5,
			transition : "none",
			href : "#forgotPwd"
		});
		return false;
	});
	
	$('#validateJobAlertCreate,.validateJobAlertUpdate').click(function() {
		var input = $(this).parent().parent().find('.alertUnique:first');
		if(!input.val() || input.val() == input.attr('title')) {
				input.parent().find('.ftext:first').show();
				input.addClass('redBorder');
				$.colorbox.resize();
				return false;
		} else {
			input.parent().parent().parent().find('.ftext:first').hide();
			input.removeClass('redBorder');
			$.colorbox.resize();
		}
		return true;
	});
	
	$('#validateJobAlert').click(function() {

		if($('#nameAlert').val() == "") {
			$('#mailAlert .errorText').show();
			$('#nameAlert').addClass('inputError');
			$.colorbox.resize();
		} else {
			var name = $("#mailAlert input[name='alert_name']").val();
			$('#saveHomeSearch .errorText').hide();
			$('#saveHomeSearch .inputText').removeClass('inputError');
			var parameters = $("#job_alert_form").serialize();
			jQuery.getJSON("/portal/site/Careers/template.SAVE?vgn-ppReq=true&action=saveAlert&name="+encodeURIComponent(name)+"&"+parameters, function(data) {
				if(data.error=="limit"){
					$.colorbox({
						inline : true,
						title : "&nbsp;",
						close : "&nbsp;",
						opacity : 0.5,
						transition : "none",
						href : "#savePopAlert"
					});
					$.colorbox.resize();
				}else{
					$.colorbox({
						inline : true,
						title : "&nbsp;",
						close : "&nbsp;",
						opacity : 0.5,
						transition : "none",
						href : "#updateConfirm"
					});
					$.colorbox.resize();
				}
			});
		}
		return false;
	});
	
	
	$("#create-alert-popin").click(function(){
		if($("#create-alert-popin").hasClass("connected")){
			$.colorbox({
				inline : true,
				title : "&nbsp;",
				close : "&nbsp;",
				opacity : 0.5,
				transition : "none",
				href : "#mailAlert",
				onComplete : function(){
					populateAlertForm();
				}
			});
		}else{
			$.colorbox({
				inline : true,
				title : "&nbsp;",
				close : "&nbsp;",
				opacity : 0.5,
				transition : "none",
				href : "#alertSessionFail"
			});
		}
		return false;
	});
	
	jQuery('.delete-brick').live('click',function(){
        jQuery(this).parents('.fieldset').find('.clone-other-diploma').show();
        var nb = jQuery(this).parents('.fieldset').find('.clone-block').size();
        if(nb>1){
            jQuery(this).parents('.clone-block').remove();
          
        }
        else 
            jQuery(this).parents('.clone-block').hide();
        return false;
    });
    
    jQuery('#diploma').change(function(){
        if(jQuery(this).val()==0 && jQuery(this).val()){
            jQuery('.hide,.hide2').hide();
        }
        else {
            jQuery('.hide').show();
        }
    });

	$('#btnSaveHomeSearch').click(function() {

		if($('#saveHomeSearch select.inputText').val() == -1 && $('#saveHomeSearch input[type=text].inputText').val() == "") {
			$('#saveHomeSearch .errorText').show();
			$('#saveHomeSearch .inputText').addClass('inputError');
			$.colorbox.resize();
		} else {
			var name;
			if($('#saveHomeSearch input[type=text].inputText').val() != ""){
				name = $('#saveHomeSearch input[type=text].inputText').val();
			}else if($('#saveHomeSearch select.inputText').val() != -1){
				name = $('#saveHomeSearch select.inputText').val();
			}
			$('#saveHomeSearch .errorText').hide();
			$('#saveHomeSearch .inputText').removeClass('inputError');
			$.colorbox.resize();
			var parameters = $("#searchEngine").serialize();
			jQuery.getJSON("/portal/site/Careers/template.SAVE?vgn-ppReq=true&action=saveHomeSearch&name="+encodeURIComponent(name)+"&"+parameters, function(data) {
				if(data.error=="limit"){
					$.colorbox({
						inline : true,
						title : "&nbsp;",
						close : "&nbsp;",
						opacity : 0.5,
						transition : "none",
						href : "#savePopAlert"
					});
				}else{
					var cleanedName = data.name;
					var nameExist = false;
					$('#saveHomeSearch select.inputText option').each(function(){
						if($(this).attr("value") == cleanedName){
							nameExist = true;
						}
					});
					if(!nameExist){
						$('#saveHomeSearch select.inputText').append('<option value="'+cleanedName+'">'+cleanedName+'</option>');
						$('#saveHomeSearch .saveForm li').show();
					}
					document.searchSaveForm.savedSearches.selectedIndex = 0;
					$('#saveHomeSearch input[type=text].inputText').val("");
					$.colorbox({
						inline : true,
						title : "&nbsp;",
						close : "&nbsp;",
						opacity : 0.5,
						transition : "none",
						href : "#saveAlert"
					});
				}
			});
			
		}
		return false;
	});
	
	$('#btnSaveAdvancedSearch').click(function() {

		if($('#saveAdvancedSearch select.inputText').val() == -1 && $('#saveAdvancedSearch input[type=text].inputText').val() == "") {
			$('#saveAdvancedSearch .errorText').show();
			$('#saveAdvancedSearch .inputText').addClass('inputError');
			$.colorbox.resize();
		} else {
			var name;
			if($('#saveAdvancedSearch input[type=text].inputText').val() != ""){
				name = $('#saveAdvancedSearch input[type=text].inputText').val();
			}else if($('#saveAdvancedSearch select.inputText').val() != -1){
				name = $('#saveAdvancedSearch select.inputText').val();
			}
			$('#saveAdvancedSearch .errorText').hide();
			$('#saveAdvancedSearch .inputText').removeClass('inputError');
			$.colorbox.resize();
			var parameters = $("#myForm").serialize();
			jQuery.getJSON("/portal/site/Careers/template.SAVE?vgn-ppReq=true&action=saveAdvancedSearch&name="+encodeURIComponent(name)+"&"+parameters, function(data) {
				if(data.error=="limit"){
					$.colorbox({
						inline : true,
						title : "&nbsp;",
						close : "&nbsp;",
						opacity : 0.5,
						transition : "none",
						href : "#savePopAlert"
					});
				}else{
					var cleanedName = data.name;
					var nameExist = false;
					$('#saveAdvancedSearch select.inputText option').each(function(){
						if($(this).attr("value") == cleanedName){
							nameExist = true;
						}
					});
					if(!nameExist){
						$('#saveAdvancedSearch select.inputText').append('<option value="'+cleanedName+'">'+cleanedName+'</option>');
						$('#saveAdvancedSearch .saveForm li').show();
					}
					document.searchSaveForm.savedSearches.selectedIndex = 0;
					$('#saveAdvancedSearch input[type=text].inputText').val("");
					$.colorbox({
						inline : true,
						title : "&nbsp;",
						close : "&nbsp;",
						opacity : 0.5,
						transition : "none",
						href : "#saveAlert"
					});
				}
			});
			
		}
		return false;
	});
	
	$('#btnSavePage').click(function() {
	
		if($("#btnSavePage").attr("href") != "#sessionFail"){
			var name = encodeURIComponent($("#contentTitle").val());
			var oid = $("#contentOid").val();
			jQuery.getJSON("/portal/site/Careers/template.SAVE?vgn-ppReq=true&action=savePage&oid=" + oid + "&name="+encodeURIComponent(name), function(data) {
				if(data.error=="limit"){
					$.colorbox({
						inline : true,
						title : "&nbsp;",
						close : "&nbsp;",
						opacity : 0.5,
						transition : "none",
						href : "#savePopAlert"
					});
				}else{
					$.colorbox({
						inline : true,
						title : "&nbsp;",
						close : "&nbsp;",
						opacity : 0.5,
						transition : "none",
						href : "#saveAlert"
					});
				}
			});
			return false;
		}
			
		
	});

	$('#saveLinkJob').click(function() {
		var name = $("#saveJobName").val();
		var oid = $("#saveJobOid").val();
		jQuery.getJSON("/portal/site/Careers/template.SAVE?vgn-ppReq=true&action=saveJob&oid=" + oid + "&name="+encodeURIComponent(name), function(data) {
			if(data.error=="limit"){
				$.colorbox({
					inline : true,
					title : "&nbsp;",
					close : "&nbsp;",
					opacity : 0.5,
					transition : "none",
					href : "#savePopAlert"
				});
			}else{
				$.colorbox({
					inline : true,
					title : "&nbsp;",
					close : "&nbsp;",
					opacity : 0.5,
					transition : "none",
					href : "#saveJob"
				});
			}
		});
		return false;
	});

	
	$('#sendToBtn').click(function() {
		var valid = 1;
		if(! validateEmail(jQuery('#sendEmail').val())) {
			$('#sendEmail').parent().addClass('showError');
			valid = 0;
		} else {
			$('#sendEmail').parent().removeClass('showError');

		}
		if(! validateEmail(jQuery('#yourEmail').val())) {
			$('#yourEmail').parent().addClass('showError');
			valid = 0;
		} else {
			$('#yourEmail').parent().removeClass('showError');
		}
		if(valid == 0)
			$('.nb.sendFriend').addClass('showError');
		else
			$('.nb.sendFriend').removeClass('showError');
		$.colorbox.resize();
		if(valid == 0)
			return false;
		else
			$.colorbox.close();
	});
	
	jQuery('.colorBoxBtn').colorbox({
		inline : true,
		title : "&nbsp;",
		close : "&nbsp;",
		opacity : 0.5,
		transition : "none",
		scrolling : false
	});
	
	$('.to-delete input').focus(function() {
		$(this).prev('label').addClass('focus');
	});
	$('.to-delete input').blur(function() {
		$(this).prev('label').removeClass('focus');
	});
	$('.to-delete ').keypress(function(e) {
		code = (e.keyCode ? e.keyCode : e.which);
		if(code == 13 || code == 32) {
			$(this).find('.holderWrap').click();
		}
	});
	$('.to-delete input').blur(function() {
		$(this).prev('label').removeClass('focus');

	});
	var dl = false;
	var del_item = false;
	var del_item_form = false;
	var reasonId_target = "";
/*	$('.to-delete .holderWrap').click(function() {
		var link = $(this).parent("a").attr("href");
		if ($(this).attr('class') != "myOffer holderWrap") {
			$("#deleteSaveConfirmBtn").click(function(){
				window.location.href = link;
			});
			$.colorbox({
				inline : true,
				title : "&nbsp;",
				close : "&nbsp;",
				opacity : 0.5,
				transition : "none",
				href : "#delete_save_confirm"
			});
		}
		return false;
	});*/

	
	$('.cvContent .to-delete .holderWrap2').click(function() {
		del_item = $(this);
		del_item_form = $(this).parents('li:first').find('form');
		var link = $(this).parent("a").attr("href");
		dl = false;
		$("#deleteConfirmBtn").click(function(){
			window.location.href = link;
		}); 
		$.colorbox({
			inline : true,
			title : "&nbsp;",
			close : "&nbsp;",
			opacity : 0.5,
			transition : "none",
			href : "#delete_confirm"
		});
		return false;

	});
	
	$('.docContent .to-delete .holderWrap2').click(function() {
		del_item = $(this);
		var link = $(this).parent("a").attr("href");
		del_item_form = $(this).parents('li:first').find('form');
		dl = false;
		$("#deleteConfirmBtn").click(function(){
			window.location.href = link;
		}); 
		$.colorbox({
			inline : true,
			title : "&nbsp;",
			close : "&nbsp;",
			opacity : 0.5,
			transition : "none",
			href : "#delete_confirm"
		});
		return false;

	});
	

	$('.submit-btn.ok-btn:not(#deleteConfirmBtn)').click(function() {
		dl = true;
		if ("" != reasonId_target){
			var reason = $("#reason").val();
			$("#"+reasonId_target).val(reason);
		}
		
		if (del_item_form){
			$.colorbox.close();
			del_item_form.submit();
		}
	});
	
	$('#deleteConfirmBtn').click(function() {
		dl = true;
		if ("" != reasonId_target){
			var reason = $("#reason").val();
			$("#"+reasonId_target).val(reason);
		}
		$.colorbox.close();
		del_item_form.submit();
	});
	
	$(document).bind('cbox_cleanup', function() {
		if(dl) {
			$(del_item).parents('.to-delete').fadeOut(function() {
				$(this).remove();
			});
		}
		del_item = false;
	});
	/**
	$('#reason').change(function() {
		if($(this).val() == 0) {
			$('.other').show();
			$.colorbox.resize();
		}
	});
	**/
	//connexion block control
	jQuery('#loginBtn').click(function() {
		$('input').removeClass('inputError');
		var response = false;
		if(! validateEmail(jQuery('#email').val())) {
			$('#email,#password').addClass('inputError');
			$.colorbox({
				inline : true,
				title : "&nbsp;",
				close : "&nbsp;",
				opacity : 0.5,
				transition : "none",
				href : "#errorFormLogin"
			});
		} else {
			// submit process response=true
			response = true;
			// ajax response from login process
			if(!response) {
				$.colorbox({
					inline : true,
					title : "&nbsp;",
					close : "&nbsp;",
					opacity : 0.5,
					transition : "none",
					href : "#sessionFail"
				});
			}
		}
		return response;
	});
	

	//forgot password popin & control
	jQuery('#btnForgotPwd').click(function() {
		$('input').removeClass('inputError');
		$('#forgotPwd .errorText').hide();
		if(!validateEmail(jQuery('#emailForgotPwd').val())) {
			$('#emailForgotPwd').addClass('inputError');
			$('#forgotPwd .errorText').show();
			$.colorbox.resize();
			return false;
		} else {
			var result = false;
			var mail = $("#emailForgotPwd").val();
			var portalResponse = false;
			$.getJSON("/portal/site/Careers/template.POPIN",{popin:'forgotPwd',email:mail,jsEnabled:'true'},function(result){
				if (result.code == 'sendEmail') {


					$.colorbox({
						inline : true,
						title : "&nbsp;",
						close : "&nbsp;",
						opacity : 0.5,
						transition : "none",
						href : "#forgotAlert"
						});
					 
				} else { 
					$.colorbox({
						inline : true,
						title : "&nbsp;",
						close : "&nbsp;",
						opacity : 0.5,
						transition : "none",
						href : "#forgotError"
					});
				}
			});
			return false;
		}
	});
	
	//delete account popin & control
	jQuery('#delete-btn-account').click(function() {
			$.colorbox({
				inline : true,
				title : "&nbsp;",
				close : "&nbsp;",
				opacity : 0.5,
				transition : "none",
				href : "#delete_account"
			});
	});
	
	//login popin & control
	$('#popinLoginBtn').click(function() {
		$('input').removeClass('inputError');
		$('.errorText').hide();
		if(! validateEmail(jQuery('#popinEmail').val())) {
			$('#popinEmail,#popinPassword').addClass('inputError');
			$('#errorFormLogin .errorText').show();
			$('#sessionFail .errorText').show();
			$.colorbox.resize();
			return false;
		} 
	});
	
	
	
	//login popin & control (in apply form)
	$('#popinLoginApplyBtn').click(function() {
		$('input').removeClass('inputError');
		$('.errorText').hide();
		if(! validateEmail(jQuery('#popinApplyEmail').val())) {
			$('#popinApplyEmail,#popinApplyPassword').addClass('inputError');
			$('#errorFormLogin .errorText').show();
			$('#applySessionFail .errorText').show();
			$.colorbox.resize();
			return false;
		}
	});
	
	//login popin & control (in apply form)
	$('#popinLoginApplyUnsolicitedBtn').click(function() {
		$('input').removeClass('inputError');
		$('.errorText').hide();
		if(! validateEmail(jQuery('#popinApplyUnsollicitedEmail').val())) {
			$('#popinApplyUnsollicitedEmail,#popinApplyUnsollicitedPassword').addClass('inputError');
			$('#applyUnsollicitedSessionFail .errorText').show();
			$.colorbox.resize();
			return false;
		}
	});
	
	//login popin & control (in jo form)
	$('#popinJobLoginBtn').click(function() {
		$('input').removeClass('inputError');
		$('.errorText').hide();
		if(! validateEmail(jQuery('#popinJobEmail').val())) {
			$('#popinJobEmail,#popinJobPassword').addClass('inputError');
			$('#errorFormLogin .errorText').show();
			$('#sessionJobFail .errorText').show();
			$.colorbox.resize();
			return false;
		}
	});
	
	//login popin & control (in home form)
	$('#popinLoginHomeBtn').click(function() {
		$('input').removeClass('inputError');
		$('.errorText').hide();
		if(! validateEmail(jQuery('#popinHomeEmail').val())) {
			$('#popinHomeEmail,#popinHomePassword').addClass('inputError');
			$('#errorFormLogin .errorText').show();
			$('#saveHomeSessionFail .errorText').show();
			$.colorbox.resize();
			return false;
		} 
	});
	
	//login popin & control (for update criteria)
	$('#popinAlertLoginBtn').click(function() {
		$('input').removeClass('inputError');
		$('.errorText').hide();
		if(! validateEmail(jQuery('#popinAlertEmail').val())) {
			$('#popinAlertEmail, #popinAlertPassword').addClass('inputError');
			$('#errorFormLogin .errorText').show();
			$('#sessionFail .errorText').show();
			$.colorbox.resize();
			return false;
		}else{
			authenticate($("#popinAlertEmail").val(), $("#popinAlertPassword").val(), 
				function(){
					$.colorbox({
						inline : true,
						title : "&nbsp;",
						close : "&nbsp;",
						opacity : 0.5,
						transition : "none",
						href : "#mailAlert",
						onComplete : function(){
							populateAlertForm();
						}
					});
				}, 
				function(){
					$('#popinAlertEmail, #popinAlertPassword').addClass('inputError');
					$('#alertSessionFail .errorText').show();
					$.colorbox.resize();
				}
			);
		}
		return false;
	});
	
	//login popin & control (save search advanced)
	$('#popinSearchLoginBtn').click(function() {
		$('input').removeClass('inputError');
		$('.errorText').hide();
		if(! validateEmail(jQuery('#popinSearchEmail').val())) {
			$('#popinSearchEmail,#popinSearchPassword').addClass('inputError');
			$('#errorFormLogin .errorText').show();
			$('#sessionSearchFail .errorText').show();
			$.colorbox.resize();
			return false;
		}
	});
	
	//login popin & control
	$('#popinLoginBtn2').click(function() {
		$('input').removeClass('inputError');
		$('.errorText').hide();
		if(! validateEmail(jQuery('#popinEmail2').val())) {
			$('#popinEmail2,#popinPassword2').addClass('inputError');
			$('#errorFormLogin .errorText').show();
			$('#sessionFail .errorText').show();
			$.colorbox.resize();
			return false;
		}
	});
	
	//login popin & control
	$('#popinLoginBtn3').click(function() {
		$('input').removeClass('inputError');
		$('.errorText').hide();
		if(! validateEmail(jQuery('#videoEmail').val())) {
			$('#videoEmail,#videoPassword').addClass('inputError');
			$('#saveVideoFail .errorText').show();
			$.colorbox.resize();
			return false;
		}
	});
	
	//print
	jQuery('#printCheck').click(function() {
		if(!$('.checkJob').is(':checked')) {
			$.colorbox({
				inline : true,
				title : "&nbsp;",
				close : "&nbsp;",
				opacity : 0.5,
				transition : "none",
				href : "#printAlert"
			});
			return false;
		} else
			print();
			return false;
	});
	//login search & control
	jQuery('.btnSearch').click(function() {
		if(jQuery('.searchTxt').val() == jQuery('.searchTxt').attr('title') || jQuery('.searchTxt').val().length < 2 || jQuery('.searchTxt').val().indexOf("*") != -1)
			$.colorbox({
				inline : true,
				title : "&nbsp;",
				close : "&nbsp;",
				opacity : 0.5,
				transition : "none",
				href : "#searchFail"
			});
	});

	jQuery('.loginForm form').submit(function() {
		return true;
	});
	
	jQuery('#searchForm form').submit(function() {
		if(jQuery('.searchForm .searchTxt').val() == jQuery('.searchForm .searchTxt').attr('title') || jQuery('.searchForm .searchTxt').val().length < 2 || jQuery('.searchForm .searchTxt').val().indexOf("*") != -1)
			return false;
	
		return true;
	});

	$('#validateUpdate').click(function() {

		if(!$('input[name=search_date]').is(':checked')) {
			$('.errorText.ftext').show();
			$('.sepF').addClass('redBorder');
			$.colorbox.resize();
		} else {
			$('.errorText.ftext').hide();
			$('.sepF').removeClass('redBorder');
			$.colorbox.resize();
		}
		if(!$('input[name=format]').is(':checked')) {
			$('.errorText.fotext').show();
			$('.sepFo').addClass('redBorder');
			$.colorbox.resize();
		} else {
			$('.errorText.fotext').hide();
			$('.sepFo').removeClass('redBorder');
			$.colorbox.resize();
		}

		if(!$('#nameAlert').val() || $('#nameAlert').val() == $('#nameAlert').attr('title')) {
			$('.errorText.Ntext').show();
			$('.sepN').addClass('redBorder');
			$.colorbox.resize();

		} else {
			$('.errorText.Ntext').hide();
			$('.sepN').removeClass('redBorder');
			$.colorbox.resize();
		}
		$('body,html').animate({
			scrollTop : $(document).height()
		}, 0);
		return false;
	});
	jQuery('.cancel-btn').click(function() {
		$.colorbox.close();
	});

	jQuery('.ok-btn:not(#okBtnModifProfil)').click(function() {
		var emtyField =0;
		if($(this).parent('form.form2')){
			if($(this).parent('form.form2').find('select').val()==-1){
				$("#cboxLoadedContent").css({'overflow':'hidden'});
				$(this).parent('form.form2').find('select').addClass('error');
				$(this).parent('form.form2').find('select').addClass('redBorder');
				emtyField++;
			}
		}
		if($(this).parents('form.form2').find('.other').is(':visible') && !$(this).parents('form.form2').find('.other input').val()){
			$(this).parents('form.form2').find('.other input').addClass('error');
			$(this).parents('form.form2').find('.other input').addClass('redBorder');
			emtyField++;
		}
		if (emtyField == 0) {
			$.colorbox.close();
			return true;
		}
		return false;
	});	
	
	jQuery('.modify-btn').click(function() {
		$.colorbox({
			inline : true,
			title : "&nbsp;",
			close : "&nbsp;",
			opacity : 0.5,
			transition : "none",
			href : "#profile_edit"
		});
	});

	$('.colorBoxBtn').click(function() {
		$('.cboxWrapper').attr("tabindex", '1');
	});
	// upload cv popin :: candidate space
	jQuery('#addFile,#add-file-application').click(function() {

		var nb = 0;
		if($('#opt-cv').is(':checked'))
			nb = $(".cvContent li.to-delete:visible").size();
		else if($('#opt-doc').is(':checked'))
			nb = $(".docContent li.to-delete:visible").size();
		
		if(nb < 5) {
			if(!$('#browse').val()) {
				$('#browse').addClass('redBorder');
				$('.fileError').show();
				return false;
			} else {
				$('#browse').removeClass('redBorder')
				$('.fileError').hide();
			}
			var maxSize = 2048*1024;
			var size = -1;
			if (navigator.appName=="Microsoft Internet Explorer"){
				var myFSO = new ActiveXObject("Scripting.FileSystemObject");
			    var filepath = document.getElementById("browse").value;
			    var thefile = myFSO.getFile(filepath);
			    size = thefile.size;
			}else{
				size = $('#browse').files[0].size;
			}
			
			$("#pleaseVerifyDocValidity").hide();
			$("#myDocMaxSizeError").hide();
			if (size > maxSize){
				$("#pleaseVerifyDocValidity").show();
				$("#myDocMaxSizeError").show();
				return false;
			}
				
			
			var ext = $('#browse').val().split('.').pop().toLowerCase();
			$("#myDocFormatError").hide();
			if($.inArray(ext, ['doc','docx','xls','xlsx','ppt','pptx','pdf','rft','txt']) == -1) {
				$("#pleaseVerifyDocValidity").show();
				$("#myDocFormatError").show();
				return false;
			}	
			
			

			return true;
		} else {
			$.colorbox({
				inline : true,
				title : "&nbsp;",
				close : "&nbsp;",
				opacity : 0.5,
				transition : "none",
				href : "#cvAlert"
			});
			return false;
		}
	});
	
	

	jQuery('#editPwd2').click(function() {
		if($(this).parent().children('.inputContent').children('.inputText').val() && $(this).parent().children('.inputContent').children('.inputText').val() != $(this).parent().children('.inputContent').children('.inputText').attr('title'))
			if($('#newpwd').val() != $('#confirmpwd').val()) {
				$(this).parent().children('.inputContent').children('.errorText').show();
				return false;
			} 
	});
}

function showPopinPwdChange() {
	$.colorbox({
		inline : true,
		title : "&nbsp;",
		close : "&nbsp;",
		opacity : 0.5,
		transition : "none",
		href : "#pwdMod"
	});
}


function validateEmail(str) {
	  // These comments use the following terms from RFC2822:
	  // local-part, domain, domain-literal and dot-atom.
	  // Does the address contain a local-part followed an @ followed by a domain?
	  // Note the use of lastIndexOf to find the last @ in the address
	  // since a valid email address may have a quoted @ in the local-part.
	  // Does the domain name have at least two parts, i.e. at least one dot,
	  // after the @? If not, is it a domain-literal?
	  // This will accept some invalid email addresses
	  // BUT it doesn't reject valid ones. 
	  var atSym = str.lastIndexOf("@");
	  if (atSym < 1) { return false; } // no local-part
	  if (atSym == str.length - 1) { return false; } // no domain
	  if (atSym > 64) { return false; } // there may only be 64 octets in the local-part
	  if (str.length - atSym > 255) { return false; } // there may only be 255 octets in the domain
	 
	  // Is the domain plausible?
	  var lastDot = str.lastIndexOf(".");
	  // Check if it is a dot-atom such as example.com
	  if (lastDot > atSym + 1 && lastDot < str.length - 1) { return true; }
	  //  Check if could be a domain-literal.
	  if (str.charAt(atSym + 1) == '[' &&  str.charAt(str.length - 1) == ']') { return true; }
	  return false;
	}




function languageMenu() {
	jQuery('.btnLang').click(function() {
		if(!$('.btnLang').hasClass('on')) {
			$('.switchLanguage').hide();
			$('.switchLanguage').addClass('open');
			$('.switchLanguage').slideDown('fast');
			$('.btnLang').addClass('on');
			$('.btnLang img').attr('alt', 'Hide language');
			$('.switchLanguage.open a:first').focus();

		} else {
			jQuery('.switchLanguage').slideUp('fast', function() {
				$('.switchLanguage').removeClass('open');
				jQuery('.btnLang').removeClass('on');
				$('.btnLang img').attr('alt', 'Display language');
			});
		}
		return false
	});
}
/* test */
function slideupMenu() {
	jQuery("body").click(function(){
			jQuery('.switchLanguage').slideUp('fast', function() {
			$('.switchLanguage').removeClass('open');
			jQuery('.btnLang').removeClass('on');
			$('.btnLang img').attr('alt', 'Display language');
		});
	});
}
/* test */

function sharePanel() {
	var $box = $('#shareLink,.shareToolsBox,.rssLink,.rssContent');
	$(document.body).click(function() {
		if(!$box.has(this).length) {// if the click was not within $box
			$(".iconeTools li.on ").removeClass('on');
			jQuery('#shareLink').removeClass('on');
			jQuery('.moreShare').removeClass('on');
			jQuery('.rssContent').removeClass('on');
			jQuery('.rssLink').removeClass('on');
			
		}
	});
	$('a').click(function() {
		if(!$(this).hasClass('rssLink')) {
			jQuery('.rssContent').removeClass('on');
			jQuery('.rssLink').removeClass('on');
		}
	});
	$(document.body).focus(function() {
		if($box.has(this).length) {// if the click was not within $box
			$(".iconeTools li.on ").removeClass('on');
			jQuery('#shareLink').removeClass('on');
			jQuery('.moreShare').removeClass('on');
			jQuery('.moreShareLink.more a').show();
			jQuery('.rssContent').removeClass('on');
			jQuery('.rssLink').removeClass('on');
		}
	});

	jQuery('#shareLink,.shareToolsBox').click(function() {
		if(jQuery('.shareToolsBox').position().left == -5000) {
			$(this).parent().addClass('on');
			jQuery('.moreShareLink.more a').removeAttr("style");
			jQuery('#shareLink').addClass('on');
		} else {
			$(this).parent().removeClass('on');
			jQuery('#shareLink').removeClass('on');
			jQuery('.moreShare').removeClass('on');
			
		}
		return false;
	});

	jQuery('.moreShareLink.more a').click(function() {
		if(jQuery('.moreShare').position().left == -5000) {
			jQuery(this).hide();
			jQuery('.moreShare').addClass('on');
			jQuery('.moreShare').hide();
			jQuery('.moreShare').slideDown('fast');
		}
		return false;
	});

	jQuery('.moreShareLink.less a').click(function() {
		jQuery('.moreShare').slideUp(function() {
			jQuery('.moreShareLink.more a').show();
			jQuery('.moreShare').removeClass('on');
			jQuery('.moreShare').css('display', 'block');

		});
		jQuery('.shareToolsBox').show();
		return false;
	});

	jQuery('.rssLink,.rssContent').click(function() {
		if(jQuery('.rssContent').css("left") == "-5000px") {
			jQuery('.rssContent').addClass('on');
			jQuery('.rssLink').addClass('on');
		} else {
			jQuery('.rssContent').removeClass('on');
			jQuery('.rssLink').removeClass('on');
		}
		return false;
	});
}



function addCommas(nStr) {
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while(rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

function showOptions() {
	$('#sidebarRight .options').each(function() {
		if($(this).find('li:visible').size() > 0) {
			$(this).removeClass('hideElmt');
		} else {
			$(this).addClass('hideElmt');
		}
	});
}

function validateContact(){
	$('#contact').submit(function(){
		var valid = 1;
		
		if ($('#name').val() == $('#name').attr('title') || !$('#name').val()  || $('#name').val().indexOf('ex.:')!=-1 ){
			$('#name').parent().addClass('error');
			valid = 0
		}else{
			$('#name').parent().removeClass('error');
		}
		
		if ($('#contact_email').val() == $('#contact_email').attr('title') || !$('#contact_email').val() || !validateEmail($('#contact_email').val()) || $('#contact_email').val().indexOf('ex.:') != -1){
			$('#contact_email').parent().addClass('error');
			valid = 0
		}else{
			$('#contact_email').parent().removeClass('error');
		}
		
		$(this).find("select").each(function(){
			if($(this).hasClass('inputText') && $(this).val() == '--'){
				$(this).parent().addClass('error');
				valid = 0
			}else {
				$(this).parent().removeClass('error');
			}
		});
		
		if(valid == 0)
			$('.submitError').show();
		else {
			$('.submitError').hide();
			return true;
		}
		return false;
	
	});
}
function validateSignIn() {
	
    $('#signIn2').submit(function() {
        var valid = 1;
        var validEmail = 0;
        $('#signIn2 input.inputText,#signIn2 select').each(function() {
            if($(this).val() == $(this).attr('title') || !$(this).val() || $(this).val()==js_bundle_map['Label.javascript.your.surname.input.sample'] || $(this).val()==js_bundle_map['Label.javascript.your.name.input.sample']) {
                $(this).parent().addClass('error');
                valid = 0
            } else if($(this).hasClass('inputEmail') && ! validateEmail($(this).val())) {
                $(this).parent().addClass('error');
                valid = 0
            } else if($(this).hasClass('inputConfirm') && $(this).val() != $('.inputEmail').val()) {
                $(this).parent().addClass('error');
                valid = 0
            } 
            else if($(this).hasClass('inputPwd') && $(this).val().length <6) {
                $(this).parent().addClass('error');
                valid = 0
            }
            else if($(this).hasClass('inputConfirmPwd') && $(this).val() != $('.inputPwd').val()) {
                $(this).parent().addClass('error');
                valid = 0
            } else {
                $(this).parent().removeClass('error');
            }


        });

        if(valid == 0)
            $('.submitError').show();
        else {
            $('.submitError').hide();
            if(validEmail == 0 && valid == 1) {
                $('.loginEmailError').hide();
            	return true;
            }
            else {
                $('.loginEmailError').show();
            	
            }
        }
        return false;
    });
    
    
    $('#signIn').submit(function() {
	jQuery('#signIn .formItem').find('label').each(function(){
	    var balise_deplace=jQuery(this).children('.errorText');
	    jQuery(this).children('.errorText').remove();
	    jQuery(this).parent('.formItem').find('label').before(balise_deplace);
	});
        var valid = 1;
        var validEmail = 0;
        $('#signIn input.inputText,#signIn select').each(function() {
            if($(this).val() == $(this).attr('title') || !$(this).val() || $(this).val()==js_bundle_map['Label.javascript.your.surname.input.sample'] || $(this).val()==js_bundle_map['Label.javascript.your.name.input.sample']) {
                $(this).parent().addClass('error');
                valid = 0
            } else if($(this).hasClass('inputEmail') && ! validateEmail($(this).val())) {
                $(this).parent().addClass('error');
                valid = 0
            } else if($(this).hasClass('inputConfirm') && $(this).val() != $('.inputEmail').val()) {
                $(this).parent().addClass('error');
                valid = 0
            } 
            else if($(this).hasClass('inputPwd') && $(this).val().length <6) {
                $(this).parent().addClass('error');
                valid = 0
            }
            else if($(this).hasClass('inputConfirmPwd') && $(this).val() != $('.inputPwd').val()) {
                $(this).parent().addClass('error');
                valid = 0
            } else {
                $(this).parent().removeClass('error');
            }


        });
        if(!$('#cgu').is(':checked')) {
            valid = 0;
            $('.borderCgu').addClass('redBorder');
            $('.optionCheck .errorText').show();
        } else {
            $('.borderCgu').removeClass('redBorder');
            $('.optionCheck .errorText').hide();
        }
        if(valid == 0)
            $('.submitError').show();
        else {
            $('.submitError').hide();
            if(validEmail == 0 && valid == 1) {
                $('.loginEmailError').hide();
            	return true;
            }
            else {
                $('.loginEmailError').show();
            	
            }
        }
        return false;
    });
}

/*function calculHeight() {
	var maxHeight = 0;
	var minHeight = 0;
	var ind = 0;
	height = $('.home .bloc2 ul.menu').height();

	if(height > 224) {
		$('.home .bloc2 ul.menu li').each(function(i) {
			if($(this).height() > maxHeight) {
				maxHeight = $(this).height();
				ind = $(this).index();
			}
			if($(this).height() <= maxHeight) {
				minHeight = $(this).height();
			}
		});
		var resizeLi = $('.home .bloc2 ul.menu li:eq(' + ind + ')');

		if(resizeLi.height() > minHeight) {
			var string = $.trim(resizeLi.find('a:first').text());
			var re = /\s[^\s.]+$/;
			newtext = string.replace(re, "");
			var string = resizeLi.find('a:first').text(newtext);
			calculHeight();
		} else {
			$('.home .bloc2 ul.menu li:last').remove();
			calculHeight();
		}
	}
}*/

function calculHeight() { 
	var max = 65 ; // Set character limit to display     
    $('.home .bloc2 ul.menu li').each(function(){
        var temp = $(this).find('a').html();
        while($(this).height()>42){
            max-=3;
            var str = temp.substr(0, max);
            $(this).find('a').html(str+'...');
        }
    });
    height = $('.home .bloc2 ul.menu').height();
    if(height > 224) {
        $('.home .bloc2 ul.menu li:last').remove();
    }
    else return false;
    calculHeight();

}

function appFormValidation() {

	$('#appForm').submit(function() {
		
		//Gestion Ajout Document
		if (adddocument==1)
		{
			return true;
		}	
		// On cache les messages d'erreurs
		$('.appformError').hide();
		$('.appformDocumentError').hide();
		$('.infoError').hide();
		
		//Gestion des champs obligatoires des questions
		var errorInputs = new Array();
		var emtyField = 0;
		$('input.infoCheck').parents().find('.required').each(function() {
			if((
				$(this).find('input').val() == "" 
				|| 
				(
					$(this).find('input').val() != undefined 
					&& 
					$.trim($(this).find('input').val()) == ""
				)
				) 
				&& $(this).find('input').is(":visible")) {
				errorInputs.push($(this).find('input').attr("name"));
				$(this).addClass('error');
				$(this).find('input').addClass('redBorder');
				$(this).find('textarea').addClass('redBorder');
				if($(this).find('input').attr('disabled') == '') {
					$('.infoError').show();
					emtyField++;
				}
			} else if(($(this).find('select').val() == "" || $(this).find('select').val() == null) && $(this).find('select').is(":visible")) {
				errorInputs.push($(this).find('input').attr("name"));
				$(this).addClass('error');
				if($(this).find('select').attr('disabled') == '') {
					$('.infoError').show();
					emtyField++;
				}
			} else if ($(this).find('input').val() != undefined || $(this).find('select').val() != undefined){
				$(this).removeClass('error');
				$(this).find('input').removeClass('redBorder');
				$(this).find('textarea').removeClass('redBorder');
			}
		});
		
		$('textarea.infoCheck').parents().find('.required').each(function() {
			if($(this).find('textarea').val() == "" && $(this).find('textarea').is(":visible")) {
				errorInputs.push($(this).find('input').attr("name"));
				$(this).addClass('error');
				$(this).find('textarea').addClass('redBorder');
				if($(this).find('textarea').attr('disabled') == '') {
					$('.infoError').show();
					emtyField++;
				}
			} else if ($(this).find('textarea').val() != undefined) {
				$(this).removeClass('error');
				$(this).find('textarea').removeClass('redBorder');
			}
		});
	
		
		if(($('.item.b-cv-cl input').is(':checked')) && $('.item.b-cv-cl input[type=radio]').is(':checked')) {
			//CV is OK
		} else {
			$('.appformDocumentError').show();
			$('.item.b-cv-cl').parent().addClass('redBorder')
			emtyField++;
		}

		if (emtyField == 0) {
			return true;
		}
		return false;
	});
}

function candidateForm() {
    $('.select-ctl').change(function() {
        var obj = '.' + $(this).attr('id');
        if ($(this).hasClass('radioPeriod')){
            $('.period1,.period2').hide()
        }
        if($(this).val() == 'false' || $(this).val() == '') {
            if ($(this).attr("id")=="select-contract"){
                $('.select-contract,.select-age').hide();
            }
            if ($(this).attr('id')=="select-sought1"){
                $('.select-sought1,.select-sought2').hide();
                $('.select-sought1,.select-sought2').find('select').val('').attr('disabled', 'disabled');
            }
            if ($(this).attr('id')=="area1") {
            	$('.area1').hide();
            } else {
            	$(obj).hide();
            	$(obj).find('input').attr('disabled', 'disabled');
            	$(obj).find('select').attr('disabled', 'disabled');
            }
        } else {
        	if ($(this).attr("id")=="select-contract"){
                $('.select-contract,.select-age').hide();
                if ($(this).val()=="FP00000002"){
                    $('.select-contract').show();
                    $('.select-contract select').attr('disabled', '');
                }  
                if ($(this).val()=="FP00000004"){
                    $('.select-age').show();
                    $('.select-age select').attr('disabled', '');
                }  
            }else{
            	if ($(this).attr('id')=="area1"){
            		$(obj).show();
            		$('.area1').show();
					$('.area1').find('select').removeAttr('disabled');
				} else if(obj != ".select-age") {
					$(obj).show();
					$(obj).find('input').attr('disabled', '');
					$(obj).find('select').attr('disabled', '');
				} 
				
            }
        }
    });
    $('.select-parent').change(function() {
        if($(this).next('.select-child').val() == '') {
            $(this).parents('.label2').addClass('error');
        } else
            $(this).parents('.label2').removeClass('error');
    });
	
	// hide team size if managed team is false
	if($('#team-hide').val() == "false") {
		$('.team-hide').hide();
	}
	// show area of education 1 if fill
    var area1 = $('#area1');
    if(area1.val() == '') {
    	var area2 = $('#area2');
    	area2.parents('.area1').hide();
    } else {
    	var area2 = $('#area2');
    	area2.parents('.area1').show();
	}
    area1.parents('.hide').show();
    // hide  area experience
    areaxp4 = $('#areaxp4');
    if (areaxp4.val() == '') {
    	$('.areaxp4').hide();
    }
    areaxp3 = $('#areaxp3');
    if (areaxp3.val() == '') {
    	$('.areaxp3').hide();
    }
    areaxp2 = $('#areaxp2');
    if (areaxp2.val() == '') {
    	$('.areaxp2').hide();
    }
    areaxp1 = $('#areaxp1');
    if (areaxp1.val() == '') {
    	$('.areaxp1').hide();
    }
    //hide job
    job1 = $('select-sought1');
    if (job1.val() == '') {
    	$('.select-sought1').hide();
    }
    job2 = $('select-sought2');
    if (job2.val() == '') {
    	$('.select-sought2').hide();
    }
	// hide availability notice period if empty / hide availability date if empty
	var availability = $('input:radio[name=availability]:checked').val() ;
	if( availability == 'availabilityNoticePeriod') {
    	$('.period1').show();
		$('.period2').hide();
    }
	else if (availability == 'availabilityDate') {
		$('.period1').hide();
		$('.period2').show();
	}
	else {
		$('.period1').hide();
		$('.period2').hide();
	}
	// hide add exp buttons if max size has been reached
	if(parseInt($("input[name='nbOtherExperience']").val(),10) == 2) {
		$('.clone-other-experience').hide();
	}
	// hide add educ buttons if max size has been reached
	if(parseInt($("input[name='nbOtherEducation']").val(),10) == 2) {
		$('.clone-other-diploma').hide();
	}
    //$('.select-contract,.select-age,.other-hide,.other-hide2,.other-hide3,.select-sought1,.select-sought2,.period1,.period2,.area1,.area2,.areaxp1,.areaxp2,.areaxp3,.areaxp4').hide();
}

function changeReasonFunction(reasonId) {
	if($("#reason"+reasonId).val() == 4) {
		$("#otherReason"+reasonId).show();
		$.colorbox.resize();
	} else {
		$("#otherReason"+reasonId).hide();
	}
	$.colorbox.resize();
}
function searchPreviewFunction() {
		var querystring = $('#myForm').serialize();
		querystring = querystring.replace(/searchType/g,"unknown");
		$.get("/vgn-ext-templating/advancedSearch?searchType=2&"+querystring, function(total){
			var labelJobCount = js_bundle_map['Label.Common.JobOffers.Counter.Level.1'];
			if (total == 1) {
				labelJobCount = js_bundle_map['Label.Common.JobOffers.Counter.Level.1'];
			} else if (total > 1 && total < 5) {
				labelJobCount = js_bundle_map['Label.Common.JobOffers.Counter.Level.2'];
			} else {
				labelJobCount = js_bundle_map['Label.Common.JobOffers.Counter.Level.3'];
			}
			$("#compteuradv").parent().html('<span id="compteuradv">' + total + '</span> ' + labelJobCount);
			$("#compteuradv_unsolicitedapp").parent().html('<span id="compteuradv_unsolicitedapp">' + total + '</span> ' + labelJobCount);
		});
}

function authenticate(mail, pass, callbackSuccess, callbackError) {
	$.getJSON("/portal/site/Careers/template.POPIN",{popin:'authentification', email:mail, password:pass, jsEnabled:'true'},function(result){
		if (result.code == 'authentified'){
			callbackSuccess();
		}else{
			callbackError();
		}
	});
}

function initAdvancedSearchForm(){
	$('#myForm').find("input[id^='el_']").each(function(){
		$(this).click(function(){
			searchPreviewFunction();
		});
	});
	$('#myForm').find("input[id^='pro_']").each(function(){
		$(this).click(function(){
			searchPreviewFunction();
		});
	});
	$('#myForm').find(".search_department, .search_region, .search_country, .search_continent").each(function(){
		$(this).change(function(){
			searchPreviewFunction();
		});
	});
	
	$('#myForm .search_entity').live("change",function(){		
			searchPreviewFunction();		
	});
	
	$('#myForm').find("input[id^='act01_']").each(function(){
		$(this).click(function(){
			searchPreviewFunction();
		});
	});
	$('#myForm').find("input[id^='act02_']").each(function(){
		$(this).click(function(){
			searchPreviewFunction();
		});
	});
	$('#myForm').find("input[id^='act03_']").each(function(){
		$(this).click(function(){
			searchPreviewFunction();
		});
	});

	$('#myForm').find("input[id^='jf01_']").each(function(){
		$(this).click(function(){
			searchPreviewFunction();
		});
	});
	$('#myForm').find("input[id^='jf02_']").each(function(){
		$(this).click(function(){
			searchPreviewFunction();
		});
	});
	$('#myForm').find("input[id^='jf03_']").each(function(){
		$(this).click(function(){
			searchPreviewFunction();
		});
	});

	$('#myForm').find("input[id^='ct_']").each(function(){
		$(this).click(function(){
			searchPreviewFunction();
		});
	});
	
	$('#myForm').find("input[id^='ct01_']").each(function(){
		$(this).click(function(){
			searchPreviewFunction();
		});
	});
	
	$('#myForm').find("input[id^='ct02_']").each(function(){
		$(this).click(function(){
			searchPreviewFunction();
		});
	});
	
	$('#myForm').find("input[id^='ct03_']").each(function(){
		$(this).click(function(){
			searchPreviewFunction();
		});
	});
	
	$('#myForm').find("input[id^='jt_']").each(function(){
		$(this).click(function(){
			searchPreviewFunction();
		});
	});
	
	$('#myForm').find("input[id^='date_']").each(function(){
		$(this).click(function(){
			searchPreviewFunction();
		});
	});
}

function advancedSearch(){
	searchPreviewFunction();
}

function openVideo(wrapperId, videoId, articleId){
	var metadataUrl = encodeURIComponent('/vgn-ext-templating/video.servlet?action=metadata&videoId='+wrapperId);
	var locale = $('html').attr('lang');
	var share = "on";
	if(articleId == undefined || articleId == "null" || articleId == ""){
		share = "off"
	}
	$.colorbox({
		title : "&nbsp;",
		close : "&nbsp;",
		opacity : 0.5,
		transition : "none",
		href : "/vgn-ext-templating/sgcareers/popins/video.jsp?wrapperId="+wrapperId,
		onComplete : function(){
			var player = new playerProxy();
			player.init(
				  {
						xmlUrl: escape(playerXmlUrl + '?dockey='+videoId),
						autoStart: 'on',
						loadStream: 'off',
						remotePath: playerRemotePath,
						useDebug: true,                    
						skins: 'v3Skin.swf',
						callBackEnabled: 'on',
						vTagDisplay: 'on',
						width: 640,
						height: 360,
						wmode: 'window',
						infoButton: 'off',
						saveButton: share,
						locale: locale,
						socialButton: share,
						hideEmbedCode: 'off',
						wemdata: metadataUrl,
						showInElement: 'contentVideoPopin'
				  }
			);
			$("#"+player.playerObj.getAttribute("id")).ready(function(){
				//displayVideoAlert(player.playerObj.getAttribute("id"), "testtstsdgsdf");
			});
			
			videoTabs();
		}
	});
	return false;
}

function saveVideo(message, flashId){

	var elements = message.split("__");
	var name = elements[0];
	var wrapperId = elements[1];
	var videoId = elements[2];
	var articleId = elements[3];
	
	var saveUrl = "/portal/site/Careers/template.SAVE?vgn-ppReq=true&action=saveVideo&oid=" + wrapperId + "&name="+encodeURIComponent(name);
	jQuery.getJSON(saveUrl, function(data) {
		if(data.error=="notLogged"){
			$.colorbox({
				inline : true,
				title : "&nbsp;",
				close : "&nbsp;",
				opacity : 0.5,
				transition : "none",
				href : "#saveVideoFail",
				onComplete : function(){
					$("input[name='actionProcess']", "#saveVideoFail").val(saveUrl + "&actionProcess=" +  encodeURIComponent($("input[name='user.auth.redirect.source.friendly']", "#saveVideoFail").val() + "?videoCallback=save&wrapperId=" + wrapperId + "&videoId=" + videoId + "&articleId=" + articleId));
				}
			});
		}else if(data.error=="limit"){
			$.colorbox({
				inline : true,
				title : "&nbsp;",
				close : "&nbsp;",
				opacity : 0.5,
				transition : "none",
				href : "#savePopAlert"
			});
		}else{
			displayVideoAlert(flashId, js_bundle_map['Label.Save.Video.OK']);
		}
		
	});
}

function displayVideoAlert(flashId, message){
	var playerObj = document.getElementById(flashId);
	if(typeof(playerObj.saveVideo) == 'undefined') {
		playerObj = document.getElementsByName(flashId)[0];
	}
	playerObj.saveVideo('<?xml version="1.0" encoding="UTF-8"?><message><![CDATA[' + message + ']]></message>');
}

function videoTabs(){
	$('.videoHeder li a').removeClass('on');
	$('.videoHeder li:eq(1) a').addClass('on');
	$(".videoHeder a.on").attr("title",$(".videoHeder a.on").html()+" - "+$(".videoHeder a.on").attr("rel"));
    $('.leftVideoPlayer .transcript').each(function(){
		//$(this).find(".videoText:eq(0)").show();
		$(this).find(".videoText:eq(0)").hide();
		$(this).find(".videoText:eq(1)").show();
	});
    jQuery('.leftVideoPlayer .scrallCtn').jScrollPane({
        isScrollableH : false
    });
    $('.leftVideoPlayer .videoHeder a').click(function(){
		var contentBlock = $(this).parents(".transcript");
		$(contentBlock).find(".videoHeder a").removeClass("on");
        $(this).addClass('on');
		if($(this).hasClass('on'))
			$(this).attr("title",$(this).html()+" - "+$(this).attr("rel"));
        else 
			$(this).attr("title",$(this).html());
		$(contentBlock).find(".videoText").hide();
        $($(this).attr('href')).show(0,function(){
            $(contentBlock).find(".scrallCtn").jScrollPane({
                isScrollableH : false,
                maintainPosition :false
            });
        });
        return false
    });
}

function validateDate(idMonthFrom, idYearFrom, idMonthTo, idYearTo) {
	var monthFrom=  $('#' + idMonthFrom).val();
	var yearFrom=  $('#' + idYearFrom).val();
	var monthTo=  $('#' + idMonthTo).val();
	var yearTo=  $('#' + idYearTo).val();
	
	if ((monthFrom == "" || monthFrom == null) && (yearFrom == "" || yearFrom == null) && (monthTo == "" || monthTo == null ) && ( yearTo == "" || yearTo == null)) {
		return true;
	}
	
	if ((monthFrom != "" || monthFrom != null) && (yearFrom != "" || yearFrom != null) && (monthTo == "" || monthTo == null ) && ( yearTo == "" || yearTo == null)) {
		return true;
	}
	
	if ((monthFrom == "" || monthFrom == null) && (yearFrom != "" || yearFrom != null)) {
		return false;
	}
	
	if ((monthFrom != "" || monthFrom != null ) && ( yearFrom == "" || yearFrom == null)) {
		return false;
	}
	
	if ((monthTo == "" || monthTo == null ) && ( yearTo != "" || yearTo != null)) {
		return false;
	}
	
	if ((monthTo != "" || monthTo != null ) && ( yearTo == "" || yearTo == null)) {
		return false;
	}
	
	var dateFrom = new Date("01/" + monthFrom + "/" + yearFrom);
	var dateTo = new Date("01/" + monthTo + "/" + yearTo);
	
	return (dateFrom < dateTo);
}

function getURLParameter(name) {
    return decodeURI(
        (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
    );
}

function openPopin(id,element) {
	if ($(element).attr('class').indexOf('myOffer holderWrap') != -1) {
		$.colorbox({
			inline : true,
			title : "&nbsp;",
			close : "&nbsp;",
			opacity : 0.5,
			transition : "none",
			href : id
		});
	} else {
		var link = $(element).attr("href");
		$("#deleteSaveConfirmBtn").click(function(){
			window.location.href = link;
		});
		$.colorbox({
			inline : true,
			title : "&nbsp;",
			close : "&nbsp;",
			opacity : 0.5,
			transition : "none",
			href : "#delete_save_confirm"
		});
	}

	return false;
}

jQuery(document).ready(function($) {
	if ($.cookie) {
		/* CONTENT */
		var COOKIE_LAW_CONTENT = {
			'cs' : {
				content_text_1: "Dal&#353;&#237;m prohl&#237;&#382;en&#237;m techto str&#225;nek vyjadrujete svuj souhlas s pou&#382;it&#237;m cookies, kter&#233; usnadnuj&#237; surfov&#225;n&#237; a slou&#382;&#237; k statistick&#253;m prehledum.",
				content_text_2: "V&#237;ce info",
				link_text: "Kliknout zde",
				link_url: "https://careers.societegenerale.com/footer/Cookies-cs/Cookies-CS",
				button_text: "OK"
			},
			'de' : {
				content_text_1: "Durch die Fortsetzung Ihrer Navigation auf dieser Website willigen Sie in die Verwendung von Cookies ein, durch die Ihre Navigation erleichtert und Statistiken erstellt werden k&#246;nnen",
				content_text_2: "Weitere Informationen",
				link_text: "hier klicken",
				link_url: "https://careers.societegenerale.com/footer/Cookies-de/Cookies-DE",
				button_text: "OK"
			},
			'en' : {
				content_text_1: "By continuing your visit on this site, you accept the use of cookies to facilitate your navigation and permit us to perform statistics.",
				content_text_2: "For more information",
				link_text: "click here",
				link_url: "https://careers.societegenerale.com/footer/Cookies-en/Cookies",
				button_text: "OK"
			},
			'es' : {
				content_text_1: "Al continuar su navegaci&#243;n por este sitio, usted acepta la utilizaci&#243;n de cookies destinados a facilitar su navegaci&#243;n y realizar estad&#237;sticas.",
				content_text_2: "Para m&#225;s informaci&#243;n",
				link_text: "haga clic aqui",
				link_url: "https://careers.societegenerale.com/footer/Cookies-es/Cookies-ES",
				button_text: "OK"
			},
			'fr' : {
				content_text_1: "En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies visant &#224; faciliter votre navigation et r&#233;aliser des statistiques.",
				content_text_2: "Pour en savoir plus ",
				link_text: "cliquez ici",
				link_url: "https://careers.societegenerale.com/footer/Cookies-fr/Cookies-FR",
				button_text: "OK"
			},
			'it' : {
				content_text_1: "Procedendo con la navigazione su questo sito, accettate l&#8217;utilizzo di cookie volti ad agevolare la navigazione ed elaborare statistiche",
				content_text_2: "Per saperne di pi&#249;",
				link_text: " cliccate qui",
				link_url: "https://careers.societegenerale.com/footer/Cookies-it/Cookies-IT",
				button_text: "OK"
			},
			'ru' : {
				content_text_1: "&#1055;&#1088;&#1086;&#1076;&#1086;&#1083;&#1078;&#1072;&#1103; &#1085;&#1072;&#1074;&#1080;&#1075;&#1072;&#1094;&#1080;&#1102; &#1087;&#1086; &#1076;&#1072;&#1085;&#1085;&#1086;&#1084;&#1091; &#1089;&#1072;&#1081;&#1090;&#1091;, &#1074;&#1099; &#1087;&#1088;&#1080;&#1085;&#1080;&#1084;&#1072;&#1077;&#1090;&#1077; &#1088;&#1072;&#1079;&#1084;&#1077;&#1097;&#1077;&#1085;&#1080;&#1077; &#1092;&#1072;&#1081;&#1083;&#1086;&#1074; cookies, &#1095;&#1100;&#1103; &#1094;&#1077;&#1083;&#1100; &#8211; &#1086;&#1073;&#1083;&#1077;&#1075;&#1095;&#1080;&#1090;&#1100; &#1085;&#1072;&#1074;&#1080;&#1075;&#1072;&#1094;&#1080;&#1102; &#1080; &#1089;&#1086;&#1073;&#1088;&#1072;&#1090;&#1100; &#1089;&#1090;&#1072;&#1090;&#1080;&#1089;&#1090;&#1080;&#1095;&#1077;&#1089;&#1082;&#1080;&#1077; &#1076;&#1072;&#1085;&#1085;&#1099;&#1077;.",
				content_text_2: "&#1059;&#1079;&#1085;&#1072;&#1090;&#1100; &#1073;&#1086;&#1083;&#1100;&#1096;&#1077;",
				link_text: "&#1085;&#1072;&#1078;&#1084;&#1080;&#1090;&#1077; &#1089;&#1102;&#1076;&#1072;",
				link_url: "https://careers.societegenerale.com/footer/Cookies-ru/Cookies-RU",
				button_text: "OK"
			}
		};

		/* MODULE */
		// no need to instantiate object as COOKIE_LAW is an IIFE
		var COOKIE_LAW = (function(options){
			var _self = this;
			_self.settings = $.extend({
				content : {},
				cookie_index: 'n2g_cookie_law_index',
				valid_cookie: false,
				current_lang: undefined,
				tpl_message: '<div id="cookie_law_msg" style="background:#efefef;display:none;position:fixed;top:0;left:0;right:0;overflow:hidden;border-bottom:solid 1px #efefef;">' +
					'<div style="position:relative;width:982px;margin:0 auto;">' +
					'<p id="cookie_law_content_1" style="padding-right:50px;font-size:12px;color:#8e8e8e;"></p><a href="#" id="cookie_law_button" style="overflow:hidden;position:absolute;bottom:2px;right:0;display:block;width:35px;height:20px;line-height:20px;margin-left:15px;background-color:#6b6868;border:1px solid #333333;border-radius:5px;font-size:11px;color:#ffffff;text-align:center;text-decoration:none;"></a>' +
					'<p style="font-size:12px;color:#8e8e8e;"><span id="cookie_law_content_2"></span> : <a id="cookie_law_link" href="" style="color:#a7a7a7;text-decoration:underline;"></a></p>' +
					'</div>' +
					'</div>'
			}, options);


			_self.init = function () {
				_self.$container = $(_self.settings.tpl_message);
				_self.current_lang = _self.settings.current_lang;
				_self.valid_cookie = _self.settings.valid_cookie;
				_self.cookie_key = _self.settings.cookie_index;
				_self._content = _self.settings.content;

				// checks if the client hasn't already accepted the cookie
				if (_self.hasNoValidatedCookie()) {
					_self.deleteCookie();
					_self.initCookie();

					// add container to page's BODY (still hidden by display:none)
					$('body').append(_self.$container);

					// listen to button click
					_self.$container.delegate('#cookie_law_button', 'click', function (e) {
						e.preventDefault();

						_self.setCookie();
						_self.hideMessage();

						return false;
					});

					if(_self.setLang(_self.getLang())) {
						if(_self.updateMessage()) {
							_self.showMessage();
						}
					}
				}
			};

			_self.getLang = function () {
				return $('html').attr('lang');
			};

			_self.setLang = function (lang) {
				if (lang && lang.length === 2 && lang.toLowerCase() !== _self.current_lang) {
					_self.current_lang = lang.toLowerCase();
					return true;
				} else {
					return false;
				}
			};

			_self.updateMessage = function () {
				if (_self.current_lang) {
					var content = _self.getContentFromLang(_self.current_lang);

					if (content) {
						for (var index in content) {
							switch(index) {
								case 'content_text_1':
									_self.$container.find('#cookie_law_content_1').html(content[index]);
									break;
								case 'content_text_2':
									_self.$container.find('#cookie_law_content_2').html(content[index]);
									break;
								case 'button_text':
									_self.$container.find('#cookie_law_button').html(content[index]);
									break;
								case 'link_text':
									_self.$container.find('#cookie_law_link').html(content[index]);
									break;
								case 'link_url':
									_self.$container.find('#cookie_law_link').attr('href', content[index]);
									break;

							}
						}

						return true;
					}

					return false;
				}
			};

			_self.getContentFromLang = function(lang) {
				if(lang && _self._content.hasOwnProperty(lang) && _self._content[lang]) {
					return _self._content[lang];
				}
				return null;
			};

			/* MESSAGE */
			_self.showMessage = function () {
				_self.$container.slideDown({duration:500, queue:false});
				$('body').animate({'padding-top':40}, {duration:500, queue:false});
			};
			_self.hideMessage = function () {
				_self.$container.slideUp({duration:500, queue:false});
				$('body').animate({'padding-top':0}, {duration:500, queue:false});
			};

			/* COOKIE */
			_self.initCookie = function() {
				$.cookie(_self.cookie_key, false, {path:'/', expires:365});
			};
			_self.setCookie = function () {
				$.cookie(_self.cookie_key, true, {path:'/', expires:365});
			};
			_self.deleteCookie = function () {
				$.removeCookie(_self.cookie_key, {path:'/'});
			};
			_self.hasNoValidatedCookie = function () {
				return $.cookie(_self.cookie_key) === undefined || $.cookie(_self.cookie_key) === null || $.cookie(_self.cookie_key) === 'false';
			};


			_self.init();

			return _self;
		})({
			content : COOKIE_LAW_CONTENT
		});


	}
});

//main evols
jQuery(document).ready(function() {

	// Bouton de validation des critères de recherche 
    
	var allOffers = $('#sidebarRight .short-link li.all_offers');
	var selectOffers = $('#sidebarRight .short-link li.select_offers');

	// Problème de l'affichage des deux boutons des offres au changmement de langue
    // allOffers.show(); // commentée -> à supprimée
    
	// Décommentée
	if($('.global-item').is('.on')){
		allOffers.hide();
		selectOffers.show();
		$('.btn-tools a').show();
	}
	else{
		allOffers.show();
		selectOffers.hide();
		$('.btn-tools a').not('.advanced-search').hide();
	}
	// FIN - Problème de l'affichage des deux boutons des offres au changmement de langue
    
	$('.col').delegate('label input', 'click', function(){
    	// Firefox bug : nécessite un délai d'un milliesconde…
		setTimeout(function() {
			if($('.global-item').is('.on')){
				allOffers.hide();
				selectOffers.show();
				$('.btn-tools a').show();
			}
			else{
				allOffers.show();
				selectOffers.hide();
				$('.btn-tools a').not('.advanced-search').hide();
			}
		}, 0);
	});
    
    
    
    
	// Affichage permanent du compteur au Scroll
    
	if($('.advancedSearch .bloc2.open-block').length){
		var offset = $('.advancedSearch .bloc2.open-block').offset().top;
	}
	var widthBloc = $('.advancedSearch .bloc2.open-block').width();
	
	$(window).scroll(function() {
		if ($(window).scrollTop() >= offset) {
			// fixed
			$('.advancedSearch .bloc2.open-block').not('.jobOffers').addClass("floatable").width(widthBloc);
			if($("#cookie_law_msg").is(":visible")){
				heightCookie = $("#cookie_law_msg").height();
				$('.advancedSearch .bloc2.open-block').css('top', heightCookie);
			}
			else {
				$('.advancedSearch .bloc2.open-block').css('top', 0);
			}
		} 
		else {
			// relative
			$('.advancedSearch .bloc2.open-block').removeClass("floatable").width('');
		}
	});
    
    
    
    // Compteur dynamique style Hall de gare
    // Déplacé dans "function clockHallDeGare" lignes 1673 -> 1685 
//	var clock;
//    var strCompteur = $('#sidebarRight .compteur span').text();
//    
//    //Instantiate a counter
//    clock = new FlipClock($('.clock'), strCompteur, {
//        clockFace: 'Counter',
//        minimumDigits: 1
//    });
    // FIN Déplacé dans "function clockHallDeGare"
    
    
    // A SUPPRIMER ------------------------------------------------------
    //Attach a click event to a button a increment the clock
//	$("label[for='location-france']").addClass('cptInit');
//    $("label[for='location-france']").mousedown(function(){
//    	if($(this).hasClass('cptInit')){
//    		newCompteurValue = 65;	// Valeur à remplacer suite au choix de critères
//			clock.setValue(newCompteurValue);
//    		$(this).addClass('cptUpDate');
//    		$(this).toggleClass('cptInit');
//    	}	
//    	else{
//    		clock.setValue(strCompteur);
//    		$(this).removeClass('cptUpDate');
//    		$(this).toggleClass('cptInit');
//    	}
//    });
    // FIN A SUPPRIMER ------------------------------------------------------
    
    // Ajout pour init le compteur dynamique style Hall de gare
    clockHallDeGare();
    // Fin Ajout
    
    // carousel campagnes / vidéos / agenda sur la page Search Result
    // Ajout d'un time out de 2 secondes pour test bug fleches carousels
    setTimeout(function() {
		initSearchCarouselCampagne(".campagne-result");
		initSearchCarouselVideo(".video-result");
		initSearchCarouselAgenda(".agenda-result");
		heightAgendaBoxVideoBox();
    }, 2000);
    
    // Search carousel campagnes
	function initSearchCarouselCampagne(context){
		jQuery('.carousel', context).jcarousel({
			scroll : 1, 
			auto: 0,
			wrap: 'both',
			initCallback : function(carousel, item) {
				jQuery(carousel.clip).parents('.campagnes-result-list').find('.controler .next-campagne').bind('click', function() {
					carousel.next();
					return false;
				});
				jQuery(carousel.clip).parents('.campagnes-result-list').find('.controler .prev-campagne').bind('click', function() {
					carousel.prev();
					return false;
				});
				jQuery('.carousel', context).data("carousel", carousel);
				var totalNumber = jQuery(carousel.clip).parents('.campagne-result').find('li').length;
				jQuery(carousel.clip).parents('.campagne-result').find('.resultNb').siblings('span').text(' / '+totalNumber);
			},
			buttonNextCallback: nextChangeCampagne,
			buttonPrevCallback: prevChangeCampagne,
			// This tells jCarousel NOT to autobuild prev/next buttons
			buttonNextHTML : null,
			buttonPrevHTML : null,
			itemVisibleInCallback:{
				onBeforeAnimation:function(carousel, item, idx, state) {
				    jQuery(carousel.clip).parents('.campagne-result').find('.resultNb').text(jQuery(item).attr('jcarouselindex'));
				}
			}
		});
	}
    
    function nextChangeCampagne(carousel, control, flag){		
		if (flag){
			$(".next-campagne").show();
		}
		else{
			$(".next-campagne").hide();
		}
	} 
	function prevChangeCampagne(carousel, control, flag){
			$(".prev-campagne").show();
	}
    
    
    // Search carousel Agenda
    function initSearchCarouselAgenda(context){
		jQuery('.carousel', context).jcarousel({
			scroll : 1, 
			initCallback : function(carousel, item) {
				if(jQuery(carousel.list).find('li').size() < 2) {
					jQuery(carousel.clip).parents('.agenda-result-list').find('.controler .next-agenda').remove();
					jQuery(carousel.clip).parents('.agenda-result-list').find('.controler .prev-agenda').remove();
				}
				jQuery(carousel.clip).parents('.agenda-result-list').find('.controler .next-agenda').bind('click', function() {
					carousel.next();
					return false;
				});
				jQuery(carousel.clip).parents('.agenda-result-list').find('.controler .prev-agenda').bind('click', function() {
					carousel.prev();
					return false;
				});
				jQuery('.carousel', context).data("carousel", carousel);
				var totalNumber = jQuery(carousel.clip).parents('.agenda-result').find('li').length;
				jQuery(carousel.clip).parents('.agenda-result').find('.resultNb').siblings('span').text(' / '+totalNumber);
			},
			buttonNextCallback: nextChangeAgenda,
			buttonPrevCallback: prevChangeAgenda,
			// This tells jCarousel NOT to autobuild prev/next buttons
			buttonNextHTML : null,
			buttonPrevHTML : null,
			itemVisibleInCallback:{
				onBeforeAnimation:function(carousel, item, idx, state) {
				    jQuery(carousel.clip).parents('.agenda-result').find('.resultNb').text(jQuery(item).attr('jcarouselindex'));
				}
			}
		});
	}
    
    function nextChangeAgenda(carousel, control, flag){		
		if (flag){
			$(".next-agenda").show();
		}
		else{
			$(".next-agenda").hide();
		}
	}
	function prevChangeAgenda(carousel, control, flag){
		if (flag){
			$(".prev-agenda").show();
		}
		else{
			$(".prev-agenda").hide();
		}
	}
    
    
    // Search carousel Video
	function initSearchCarouselVideo(context){
		jQuery('.carousel', context).jcarousel({
			scroll : 1, 
			auto: 0,
			wrap: 'both',
			initCallback : function(carousel, item) {
				jQuery(carousel.clip).parents('.video-result-list').find('.controler .next-video').bind('click', function() {
					carousel.next();
					return false;
				});
				jQuery(carousel.clip).parents('.video-result-list').find('.controler .prev-video').bind('click', function() {
					carousel.prev();
					return false;
				});
				jQuery('.carousel', context).data("carousel", carousel);
				var totalNumber = jQuery(carousel.clip).parents('.video-result').find('li').length;
				jQuery(carousel.clip).parents('.video-result').find('.resultNb').siblings('span').text(' / '+totalNumber);
			},
			buttonNextCallback: nextChangeVideo,
			buttonPrevCallback: prevChangeVideo,
			// This tells jCarousel NOT to autobuild prev/next buttons
			buttonNextHTML : null,
			buttonPrevHTML : null,
			itemVisibleInCallback:{
				onBeforeAnimation:function(carousel, item, idx, state) {
				    jQuery(carousel.clip).parents('.video-result').find('.resultNb').text(jQuery(item).attr('jcarouselindex'));
				}
			}
		});
	}

    function nextChangeVideo(carousel, control, flag){		
		if (flag){
			$(".next-video").show();
		}
		else{
			$(".next-video").hide();
		}
	}
	function prevChangeVideo(carousel, control, flag){
			$(".prev-video").show();
	}
    
	
    
    
    // Pour que les blocs Agenda et Vidéos aient la même hauteur
    function heightAgendaBoxVideoBox() {
		var heightAgendaBox = $('.agenda-result-list').innerHeight();
		var heightVideoBox = $('.video-result-list').innerHeight();
	    
		if(heightAgendaBox > heightVideoBox){
	        var paddingBase = parseInt($('.video-result-list').css('paddingTop'));
			var paddingDiff = heightAgendaBox - heightVideoBox;
	        $('.video-result-list').css({
	            paddingTop: paddingDiff/2 + paddingBase,
	            paddingBottom: paddingDiff/2 + paddingBase
	        });
		}
		else if(heightVideoBox > heightAgendaBox){
	        var paddingBase = parseInt($('.agenda-result-list').css('paddingTop'));
	        var paddingDiff = heightVideoBox - heightAgendaBox;
	        $('.agenda-result-list').css({
	            paddingTop: paddingDiff/2 + paddingBase,
	            paddingBottom: paddingDiff/2 + paddingBase
	        });
		}
    }

	// $(".selectyze").Selectyze({
	// 	theme:'sg'
	// });
    
});