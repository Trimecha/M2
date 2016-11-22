(function ($) {
	Drupal.behaviors.rzr_custom_forms = {
		attach: function(context, settings) {
			Drupal.behaviors.rzr_custom_forms.submitFormCandidatAjax();
			$(".link-section").click(function( event ) {

				event.preventDefault();
				var val = $( this ).attr('id');
				$(".link-section").removeClass('selected');
				$(this).addClass('selected');
				var cb = function(){};
				if(val == 'candidat') {
					cb = Drupal.behaviors.rzr_custom_forms.submitFormCandidatAjax;
				}
				edf.header.oAuthenticate.getForm(val, cb);
			});

			$('.content_link').on('click', function(e) {
				e.preventDefault();
				var id_content = $(e.target).attr('id');
				$('.content-popin').hide( 1000 );
				$('#content-'+id_content).show( "slow" );
			});
			
			$('#edit-event-timeline').change(function() {
			  
			  var time = $('#edit-event-timeline').val();
			  $('.strate_link_'+time).click();
			});
				
			$('select#edit-field-theme-solution-tid option:selected').each(function( index ) {
					
				var id = $(this).attr('value');
				
				if (id != 0) {
					$('#'+id).addClass('selected');
					$('#all-link').removeClass('selected-all');
				}
			});
			
			$('.filter-link').on('click', function(e) {
				e.preventDefault();
				
				var id = [];
				var i = 0;
				var verif = true;
				var target = $(e.target).attr('id');
				
				$('select option:selected').each(function( index ) {
					
					if ($(this).attr('value') != target) {
						id[i] = $(this).attr('value');
						i++;
					}
					else
					{
						verif = false;
					}
				});
				
				if (verif === true) {
					id[i] = target;
				}
				
				var filter = $('#edit-field-theme-solution-tid');
				filter.val(id);
				filter.trigger('change');
			});
			
			$('.filter-link-all').on('click', function(e) {
				
				e.preventDefault();
				
				value = '';
				var filter = $('#edit-field-theme-solution-tid');
				filter.val(value);
				filter.trigger('change');
				
			});
		},
		submitFormCandidatAjax: function() {
			$('#form-candidat-authentification').on('submit', function(e) {
				e.preventDefault();
				var email = this['email'].value;
				var mdp = this['mdp'].value;
				$.ajax({
					method: "POST",
					url: "/display_auth/candidat/submit-form",
					data: {email: email, mdp: mdp},
					success : function(data, statut){ 
						data = JSON.parse(data);
           				if(data.command && data.content) {
           					if(data.command == 'replace') {
           						$('#form-wrapper-header-account').html(data.content);
           						Drupal.behaviors.rzr_custom_forms.submitFormCandidatAjax();
           					}else if(data.command == 'redirect' && data.content != '') {
           						window.location.href = data.content;
           					}
           				}
       				}
				});
			});
		}
	};
})(jQuery);;
(function($) {
  Drupal.behaviors.uniqueFormSubmission = {
    attach: function (context, settings) {
      var cssClass = 'rzr-unique-form-submission-processed';
      $.each($('form'), function(index, elem) {
        var $elem = $(elem);
        if(!$elem.hasClass(cssClass)) {
          $elem.on('submit', function(e){
            if($elem.data('rzr-unique-form-submission')) {
              e.preventDefault();
            }else{
              $elem.data('rzr-unique-form-submission', true);
            }
          });
          $elem.addClass(cssClass);
        }
      });
    }
  };
})(jQuery);;
