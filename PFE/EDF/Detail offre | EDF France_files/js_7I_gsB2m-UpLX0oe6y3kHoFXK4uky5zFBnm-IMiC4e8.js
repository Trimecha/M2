/**
 * @file
 * Linkit dialog functions.
 */

(function ($) {

// Create the Linkit namespaces.
Drupal.linkit = Drupal.linkit || {};
Drupal.linkit.currentInstance = Drupal.linkit.currentInstance || {};
Drupal.linkit.dialogHelper = Drupal.linkit.dialogHelper || {};
Drupal.linkit.insertPlugins = Drupal.linkit.insertPlugins || {};

/**
 * Create the modal dialog.
 */
Drupal.linkit.createModal = function() {
  // Create the modal dialog element.
  Drupal.linkit.createModalElement()
  // Create jQuery UI Dialog.
  .dialog(Drupal.linkit.modalOptions())
  // Remove the title bar from the modal.
  .siblings(".ui-dialog-titlebar").hide();

  // Make the modal seem "fixed".
  $(window).bind("scroll resize", function() {
    $('#linkit-modal').dialog('option', 'position', ['center', 50]);
  });

  // Get modal content.
  Drupal.linkit.getDashboard();
};

/**
 * Create and append the modal element.
 */
Drupal.linkit.createModalElement = function() {
  // Create a new div and give it an ID of linkit-modal.
  // This is the dashboard container.
  var linkitModal = $('<div id="linkit-modal"></div>');

  // Create a modal div in the <body>.
  $('body').append(linkitModal);

  return linkitModal;
};

/**
 * Default jQuery dialog options used when creating the Linkit modal.
 */
Drupal.linkit.modalOptions = function() {
  return {
    dialogClass: 'linkit-wrapper',
    modal: true,
    draggable: false,
    resizable: false,
    width: 520,
    position: ['center', 50],
    minHeight: 0,
    zIndex: 210000,
    close: Drupal.linkit.modalClose,
    open: function (event, ui) {
      // Change the overlay style.
      $('.ui-widget-overlay').css({
        opacity: 0.5,
        filter: 'Alpha(Opacity=50)',
        backgroundColor: '#FFFFFF'
      });
    },
    title: 'Linkit'
  };
};

/**
 * Close the Linkit modal.
 */
Drupal.linkit.modalClose = function (e) {
  $('#linkit-modal').dialog('destroy').remove();
  // Make sure the current intstance settings are removed when the modal is
  // closed.
  Drupal.settings.linkit.currentInstance = {};

  // The event object does not have a preventDefault member in
  // Internet Explorer prior to version 9.
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  else {
    return false;
  }
};

/**
 *
 */
Drupal.linkit.getDashboard = function () {
  // Create the AJAX object.
  var ajax_settings = {};
  ajax_settings.event = 'LinkitDashboard';
  ajax_settings.url = Drupal.settings.linkit.dashboardPath +  Drupal.settings.linkit.currentInstance.profile;
  ajax_settings.progress = {
    type: 'throbber',
    message : Drupal.t('Loading Linkit dashboard...')
  };

  Drupal.ajax['linkit-modal'] = new Drupal.ajax('linkit-modal', $('#linkit-modal')[0], ajax_settings);

  // @TODO: Jquery 1.5 accept success setting to be an array of functions.
  // But we have to wait for jquery to get updated in Drupal core.
  // In the meantime we have to override it.
  Drupal.ajax['linkit-modal'].options.success = function (response, status) {
    if (typeof response == 'string') {
      response = $.parseJSON(response);
    }

    // Call the ajax success method.
    Drupal.ajax['linkit-modal'].success(response, status);
    // Run the afterInit function.
    var helper = Drupal.settings.linkit.currentInstance.helper;
    Drupal.linkit.getDialogHelper(helper).afterInit();

    // Set focus in the search field.
    $('#linkit-modal .linkit-search-element').focus();
  };

  // Update the autocomplete url.
  Drupal.settings.linkit.currentInstance.autocompletePathParsed =
    Drupal.settings.linkit.autocompletePath.replace('___profile___',  Drupal.settings.linkit.currentInstance.profile);

  // Trigger the ajax event.
  $('#linkit-modal').trigger('LinkitDashboard');
};

/**
 * Register new dialog helper.
 */
Drupal.linkit.registerDialogHelper = function(name, helper) {
  Drupal.linkit.dialogHelper[name] = helper;
};

/**
 * Get a dialog helper.
 */
Drupal.linkit.getDialogHelper = function(name) {
  return Drupal.linkit.dialogHelper[name];
};

/**
 * Register new insert plugins.
 */
Drupal.linkit.registerInsertPlugin = function(name, plugin) {
  Drupal.linkit.insertPlugins[name] = plugin;
};

/**
 * Get an insert plugin.
 */
Drupal.linkit.getInsertPlugin = function(name) {
  return Drupal.linkit.insertPlugins[name];
};

})(jQuery);
;
Drupal.locale = { 'pluralFormula': function ($n) { return Number(($n>1)); }, 'strings': {"":{"An AJAX HTTP error occurred.":"Une erreur HTTP AJAX s\u0027est produite.","HTTP Result Code: !status":"Code de statut HTTP : !status","An AJAX HTTP request terminated abnormally.":"Une requ\u00eate HTTP AJAX s\u0027est termin\u00e9e anormalement.","Debugging information follows.":"Informations de d\u00e9bogage ci-dessous.","Path: !uri":"Chemin : !uri","StatusText: !statusText":"StatusText: !statusText","ResponseText: !responseText":"ResponseText : !responseText","ReadyState: !readyState":"ReadyState : !readyState","Edit":"Modifier","(active tab)":"(onglet actif)","Extend":"\u00c9tendre","Collapse":"Replier","@label":"@label","Horizontal orientation":"Orientation horizontale","Select all rows in this table":"S\u00e9lectionner toutes les lignes du tableau","Deselect all rows in this table":"D\u00e9s\u00e9lectionner toutes les lignes du tableau","+@count":"+@count","-@count":"-@count","Loading token browser...":"Chargement de l\u0027explorateur de jetons...","Available tokens":"Jetons (tokens) disponibles","Insert this token into your form":"Ins\u00e9rer ce jeton (\u003Cem\u003Etoken\u003C\/em\u003E) dans votre formulaire","First click a text field to insert your tokens into.":"Cliquez d\u0027abord sur un champ de texte pour ins\u00e9rer vos jetons (\u003Cem\u003Etokens\u003C\/em\u003E) dans celui -ci.","Please wait...":"Veuillez patienter...","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"Le fichier s\u00e9lectionn\u00e9 %filename ne peut pas \u00eatre transf\u00e9r\u00e9. Seulement les fichiers avec les extensions suivantes sont permis : %extensions.","Re-order rows by numerical weight instead of dragging.":"R\u00e9-ordonner les lignes avec des poids num\u00e9riques plut\u00f4t qu\u0027en les d\u00e9pla\u00e7ant.","Show row weights":"Afficher le poids des lignes","Hide row weights":"Cacher le poids des lignes","Drag to re-order":"Cliquer-d\u00e9poser pour r\u00e9-organiser","Changes made in this table will not be saved until the form is submitted.":"Les changements effectu\u00e9s dans ce tableau ne seront pris en compte que lorsque la configuration aura \u00e9t\u00e9 enregistr\u00e9e.","Autocomplete popup":"Popup d\u0027auto-compl\u00e9tion","Searching for matches...":"Recherche de correspondances...","Hide":"Masquer","Show":"Afficher","Not in menu":"Pas dans le menu","Automatic alias":"Alias automatique","Alias: @alias":"Alias : @alias","No alias":"Aucun alias","@label: @value":"@label: @value","Using defaults":"Utiliser les param\u00e8tres par d\u00e9faut.","New revision":"Nouvelle r\u00e9vision","No revision":"Aucune r\u00e9vision","By @name on @date":"Par @name le @date","By @name":"Par @name","Not published":"Non publi\u00e9","Requires a title":"Titre obligatoire","Don\u0027t display post information":"Ne pas afficher les informations de la contribution","Content can only be inserted into CKEditor in the WYSIWYG mode.":"Le contenu peut seulement \u00eatre ins\u00e9r\u00e9 dans CKEditor en mode WYSIWYG.","Configure":"Configurer","Close":"Fermer","Portrait":"Portrait","Landscape":"Paysage","Add":"Ajouter","Description":"Description","Mon":"lun","Monday":"Lundi","@count years":"@count ann\u00e9es","@count months":"@count mois","Owner":"Propri\u00e9taire","Disabled":"D\u00e9sactiv\u00e9","Enabled":"Activ\u00e9","None":"Aucun(e)","Thursday":"Jeudi","Tuesday":"Mardi","Wednesday":"Mercredi","Sunday":"Dimanche","Saturday":"Samedi","Friday":"Vendredi","Home":"Accueil","Customize dashboard":"Personnaliser le tableau de bord","Other":"Autre","All":"Tout","Yes":"Oui","No":"Non","Preview":"Aper\u00e7u","Jan":"jan","Feb":"f\u00e9v","Mar":"mar","Apr":"avr","May":"Mai","Jun":"Juin","Jul":"juil","Aug":"ao\u00fb","Sep":"sep","Oct":"oct","Nov":"nov","Dec":"d\u00e9c","Thu":"jeu","Hide summary":"Masquer le r\u00e9sum\u00e9","Edit summary":"Modifier le r\u00e9sum\u00e9","Remove group":"Supprimer le groupe","Apply (all displays)":"Appliquer (tous les affichages)","Revert to default":"R\u00e9tablir par d\u00e9faut","Apply (this display)":"Appliquer (cet affichage)","@count days":"@count jours","List additional actions":"Lister les actions suppl\u00e9mentaires","Tue":"mar","Wed":"mer","1 day":"@count jour","Fri":"ven","Today":"Aujourd\u0027hui","Not restricted":"Non restreint","Restricted to certain pages":"R\u00e9serv\u00e9 \u00e0 certaines pages","Not customizable":"Non personnalisable","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"N\u0027oubliez pas de cliquer sur \u003Cem\u003EEnregistrer les blocs\u003C\/em\u003E pour confirmer les modifications apport\u00e9es ici.","The block cannot be placed in this region.":"Le bloc ne peut pas \u00eatre plac\u00e9 dans cette r\u00e9gion.","1 hour":"@count heure","@count hours":"@count heures","Done":"Termin\u00e9","Prev":"Pr\u00e9c.","Next":"Suivant","January":"Janvier","February":"F\u00e9vrier","March":"Mars","April":"Avril","June":"Juin","July":"Juillet","August":"Ao\u00fbt","September":"Septembre","October":"Octobre","November":"Novembre","December":"D\u00e9cembre","Sun":"dim","Sat":"sam","Su":"Di","Mo":"Lu","Tu":"Ma","We":"Me","Th":"Je","Fr":"Ve","Sa":"Sa","mm\/dd\/yy":"dd\/mm\/yy","@count year from now":"@count ann\u00e9e \u00e0 partir de maintenant","@count years from now":"@count ann\u00e9es \u00e0 partir de maintenant","1 month":"@count mois","No redirects":"Aucune redirection","This permission is inherited from the authenticated user role.":"Ce droit est h\u00e9rit\u00e9e du r\u00f4le de l\u0027utilisateur authentifi\u00e9.","Select all":"Tout s\u00e9lectionner","1 minute":"1 minute","1 year":"@count ann\u00e9e","Inclusion: @value":"Inclusion : @value","Priority: @value":"Priorit\u00e9 : @value","No results":"Pas de r\u00e9sultat","Autre":"Autre","Select all children":"S\u00e9lectionner tous les enfants","@count minutes":"@count minutes","1 second":"1 seconde","@count seconds":"@count secondes"}} };;

// bootstrap
Drupal.behaviors.jstimer = {
  attach: function(context) {
    Drupal.jstimer.countdown_auto_attach(
      new Array(
        new Drupal.jstimer.jst_timer()
      )
    );
  }
}

// Namespace for most of the javascript functions.
Drupal.jstimer = {};

// Array that holds all elements that need to be updated.
Drupal.jstimer.timer_stack = new Array();

// Attach all active widgets to their respective dom objects.
Drupal.jstimer.countdown_auto_attach = function (jstimer_active_widgets) {

  // Call .attach() on the active widget items.
  for (var i=0; i<jstimer_active_widgets.length; i++) {
    jstimer_active_widgets[i].attach();
  }

  // If you have any widget items, start the timing loop.
  if ( Drupal.jstimer.timer_stack.length > 0 ) {
    Drupal.jstimer.timer_loop();
  }

}

// The timing loop.
Drupal.jstimer.timer_loop = function() {
  // run backwards so we can remove items and not messup the loop data.
  for (var i = Drupal.jstimer.timer_stack.length - 1; i >= 0; i--) {
    if ( Drupal.jstimer.timer_stack[i].update() == false ) {
      Drupal.jstimer.timer_stack.splice(i, 1);
    }
  }

  // Stop the timer if there are not more timer items.
  if ( Drupal.jstimer.timer_stack.length > 0 ) {
    setTimeout('Drupal.jstimer.timer_loop()',999);
  }
}


/*
 * Timer widget
 */
Drupal.jstimer.formats = ['<em>(%dow% %moy%%day%)</em><br/>%days% days + %hours%:%mins%:%secs%','Only %days% days, %hours% hours, %mins% minutes and %secs% seconds left','%days% shopping days left','<em>(%dow% %moy%%day%)</em><br/>%days% days + %hours%:%mins%:%secs%'];

Drupal.jstimer.jst_timer = function() {
  this.selector = ".jst_timer";
  this.attach = function() {
    jQuery(this.selector).each(
      function(i) {  // i is the position in the each fieldset
        var t = new Drupal.jstimer.jst_timer_item(jQuery(this));
        if ( t.parse_microformat_success == 1 ) {
          Drupal.jstimer.timer_stack[Drupal.jstimer.timer_stack.length] = t;
        }
      }
    );
  }
}

Drupal.jstimer.jst_timer_item = function(ele) {

  // class methods first so you can use them in the constructor.
  this.loadProps = function() {
    for (var prop in this.props) {
      var prop_selector = "span[class="+prop+"]";
      if ( this.element.children(prop_selector).length > 0 ) {
        this.props[prop] = this.element.children(prop_selector).html();
      }
    }

    if ( String(this.props['format_txt']).match("'") ) {
      this.props['format_txt'] = "<span style=\"color:red;\">Format may not contain single quotes(').</span>";
    }

    // format_txt overrides format_num.
    if ( this.props['format_txt'] != "" ) {
      this.outformat = this.props['format_txt'];
    } else {
      if (Drupal.jstimer.formats[this.props['format_num']] != undefined) {
        this.outformat = Drupal.jstimer.formats[this.props['format_num']];
      }
      else {
        this.outformat = Drupal.jstimer.formats[0];
      }
    }

  }

  this.parse_microformat = function() {

    // ajax calls re-run autoattach, make sure the selector is gone.
    if ( this.element.hasClass("jst_timer") ) {
      this.element.removeClass("jst_timer")
    }

    // If there is an interval, always use it.
    if ( this.props['interval'] != "" ) {
      var interval_val = parseInt(this.props['interval']);
      var date = new Date();
      this.to_date = date;
      this.to_date.setTime(date.getTime() + (interval_val*1000));
    } else {
      if ( this.props['datetime'] == "" ) {
        this.parse_microformat_success = 0;
        throw new Object({name:"NoDate",message:"Javascript Timer: Span with class=datetime not found within the timer span."});
      }
      var date = new Date();
      try {
        date.jstimer_set_iso8601_date(this.props['datetime']);
      }
      catch(e) {
        throw(e);
      }
      this.to_date = date;
      if ( this.props['current_server_time'] != "" ) {
        // this is a feedback time from the server to correct for small server-client time differences.
        // not used for normal block and node timers.
        var date_server = new Date();
        date_server.jstimer_set_iso8601_date(this.props['current_server_time']);
        var date_client = new Date();
        var adj = date_client.getTime() - date_server.getTime();
        // adjust target date to clients domain
        this.to_date.setTime(this.to_date.getTime() + adj);
      }
    }

    this.parse_microformat_success = 1;
  }



  this.update = function() {
    var now_date = new Date();
    var duration = this.get_duration(now_date, this.to_date);

    // If counting down and timer is completed, set timer complete statement, check for redirect, and end.
    if ( this.props['dir'] == "down" && duration.sign > 0 ) {

      // Set the timer complete statement.
      if (this.props['timer_complete_message'] != '') {
        this.element.html(this.props['timer_complete_message'] + '');
        // Clear message as we don't need to reset it again.
        this.props['timer_complete_message'] = '';
      }

      // If there is a complete message, alert it.
      if (this.props['tc_msg'] != '') {
        alert(this.props['tc_msg']);
        // Clear alert msg as we don't need to alert it again.
        this.props['tc_msg'] = '';
      }

      // If there is a redirect url and delay has been met, redirect.
      if (this.props['tc_redir'] != '' && (duration.diff >= this.props['tc_redir_delay'])) {
      	if (this.props['tc_redir'].match('<reload>')) {
      		window.location.reload(true);
      	}
      	else {
        	window.location = this.props['tc_redir'];
        }
        return false;
      }
      // Timer is completed
      return true;
    }


    var outhtml = new String(this.outformat);

    // try to handle counts with units first, use a try block because Drupal.formatPlural breaks javascript sometimes
    try {
      outhtml = outhtml.replace(/%years% years/,  Drupal.formatPlural(duration.years, "1 year", "@count years"));
      outhtml = outhtml.replace(/%ydays% days/,   Drupal.formatPlural(duration.days, "1 day", "@count days"));
      outhtml = outhtml.replace(/%days% days/,    Drupal.formatPlural(duration.tot_days, "1 day", "@count days"));
      outhtml = outhtml.replace(/%hours% hours/,  Drupal.formatPlural(duration.hours, "1 hour", "@count hours"));
      outhtml = outhtml.replace(/%mins% minutes/, Drupal.formatPlural(duration.minutes, "1 minute", "@count minutes"));
      outhtml = outhtml.replace(/%secs% seconds/, Drupal.formatPlural(duration.seconds, "1 second", "@count seconds"));
      outhtml = outhtml.replace(/%months% months/, Drupal.formatPlural(duration.months, "1 month", "@count months"));
      outhtml = outhtml.replace(/%tot_months% months/, Drupal.formatPlural(duration.tot_months, "1 month", "@count months"));
    }
    catch(e){
      // suppress errors
    }

    //handle counts without units
    outhtml = outhtml.replace(/%years%/, duration.years);
    outhtml = outhtml.replace(/%ydays%/, duration.days);
    outhtml = outhtml.replace(/%days%/, duration.tot_days);
    outhtml = outhtml.replace(/%hours%/, LZ(duration.hours));
    outhtml = outhtml.replace(/%mins%/, LZ(duration.minutes));
    outhtml = outhtml.replace(/%secs%/, LZ(duration.seconds));
    outhtml = outhtml.replace(/%hours_nopad%/, duration.hours);
    outhtml = outhtml.replace(/%mins_nopad%/, duration.minutes);
    outhtml = outhtml.replace(/%secs_nopad%/, duration.seconds);
    outhtml = outhtml.replace(/%sign%/, duration.sign < 0 ? '-' : '+');
    outhtml = outhtml.replace(/%months%/, duration.months);
    outhtml = outhtml.replace(/%tot_months%/, duration.tot_months);

    // Proximity styling.
    if (this.props['highlight'][0] != undefined && this.props['highlight'][0] != '' && this.props['dir'] == "down" && (duration.diff <= (this.props['threshold'] * 60))) {
      this.element.html('<span ' + this.props['highlight'][0] + '=' + this.props['highlight'][1] + '>' +  outhtml + '</span>');
    } else {
      this.element.html(outhtml);
    }

    return true;
  }

  this.get_duration = function(now, target) {
    var dur = {diff:0, sign:0, years:0, months:0, days:0, hours:0, minutes:0, seconds:0, tot_months:0, tot_days:0};
    dur.diff = Math.floor((now.getTime() - target.getTime()) / 1000);
    if ( dur.diff < 0 ) {
      dur.sign = -1;
      dur.diff = Math.abs(dur.diff);
    } else {
      dur.sign = 1;
    }

    dur.years = Math.floor(dur.diff / 60 / 60 / 24 / 365.25);

    // Use calendar months, using months based on seconds is problematic.
    if(now.getFullYear() == target.getFullYear()) {
       dur.tot_months = Math.abs(target.getMonth() - now.getMonth());
       dur.months = dur.tot_months;
    } else {
      dur.tot_months = 11 - now.getMonth();
      dur.tot_months += target.getMonth() + 1;
      dur.tot_months += (target.getFullYear() - now.getFullYear() - 1) * 12;
      dur.months = dur.tot_months - (dur.years * 12);
    }

    dur.tot_days = Math.floor(dur.diff / 60 / 60 / 24);
    dur.days = Math.ceil(dur.tot_days - (dur.years * 365.25));
    dur.hours = Math.floor(dur.diff / 60 / 60) - (dur.tot_days * 24);
    dur.minutes = Math.floor(dur.diff / 60) - (dur.hours * 60) - (dur.tot_days * 24 * 60);
    dur.seconds = dur.diff - (dur.minutes * 60) - (dur.hours * 60 * 60) - (dur.tot_days * 24 * 60 * 60);
    return dur;
  }



  // begin constructor
  this.element = ele;

  // Defaults for each timer.
  this.props = {
    datetime: '',
    dir: 'down',
    format_num: 0,
    format_txt: '',
    timer_complete_message: new String('<em>Timer Completed</em>'),
    highlight: new String('style="color:red"').split(/=/),
    threshold: new Number('5'),
    tc_redir: new String(''),
    tc_redir_delay: new Number('3'),
    tc_msg: new String(''),
    interval: '',
    current_server_time: ''
  };
  this.loadProps();


  /* bootstrap, parse microformat, load object */
  try {
    this.parse_microformat();
  }
  catch(e) {
    alert(e.message);
    alert(jQuery(ele).html());
    this.parse_microformat_success = 0;
    return;
  }

  // replace the static stuff in the format string
  // this only needs to be done once, so here is a good spot.
  this.outformat = this.outformat.replace(/%day%/,   this.to_date.getDate());
  this.outformat = this.outformat.replace(/%month%/, this.to_date.getMonth() + 1);
  this.outformat = this.outformat.replace(/%year%/,  this.to_date.getFullYear());
  this.outformat = this.outformat.replace(/%moy%/,   this.to_date.jstimer_get_moy());
  this.outformat = this.outformat.replace(/%dow%/,   this.to_date.jstimer_get_dow());
}
// End of timer widget.





// Util functions
function LZ(x) {
  return (x >= 10 || x < 0 ? "" : "0") + x;
}

// iso8601 date parsing routines.  Extends the built-in javascript date object.
Date.prototype.jstimer_set_iso8601_date = function (string) {
  var iso8601_re = /^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:[T ](\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/;
  var date_bits = iso8601_re.exec(string);
  var date_obj = null;
  if ( date_bits ) {
    date_bits.shift();
    date_bits[1] && date_bits[1]--; // normalize month
    date_bits[6] && (date_bits[6] *= 1000); // convert mils
    date_obj = new Date(date_bits[0]||1970, date_bits[1]||0, date_bits[2]||0, date_bits[3]||0, date_bits[4]||0, date_bits[5]||0, date_bits[6]||0);

    //timezone handling
    var zone_offset = 0;  // in minutes
    var zone_plus_minus = date_bits[7] && date_bits[7].charAt(0);
    // get offset from isostring time to Z time
    if ( zone_plus_minus != 'Z' ) {
      zone_offset = ((date_bits[8] || 0) * 60) + (Number(date_bits[9]) || 0);
      if ( zone_plus_minus != '-' ) {
        zone_offset *= -1;
      }
    }
    // convert offset to localtime offset, will include daylight savings
    if ( zone_plus_minus ) {
      zone_offset -= date_obj.getTimezoneOffset();
    }
    if ( zone_offset ) {
      date_obj.setTime(date_obj.getTime() + zone_offset * 60000);
    }
  }

  // set this object to current localtime representation
  try {
    this.setTime(date_obj.getTime());
  }
  catch(e) {
    throw new Object({name:"DatePatternFail",message:"jstimer: Date does not have proper format (ISO8601, see readme.txt)."});
  }
}
Date.prototype.jstimer_get_moy = function () {
  var myMonths=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
  return myMonths[this.getMonth()];
}
Date.prototype.jstimer_get_dow = function () {
  var myDays=["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  return myDays[this.getDay()];
}
;
(function ($) {

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
  this.element.html('<div class="bar"><div class="filled"></div></div>' +
                    '<div class="percentage"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage + '%');
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="messages error"></div>').html(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);
;
/**
 * @file
 * Linkit ckeditor dialog helper.
 */
(function ($) {

// Abort if Drupal.linkit is not defined.
if (typeof Drupal.linkit === 'undefined') {
  return ;
}

Drupal.linkit.registerDialogHelper('ckeditor', {
  init : function() {},

  /**
   * Prepare the dialog after init.
   */
  afterInit : function () {
     var editor = Drupal.settings.linkit.currentInstance.editor;
     var element = CKEDITOR.plugins.link.getSelectedLink( editor );

    // If we have selected a link element, lets populate the fields in the
    // modal with the values from that link element.
    if (element) {
      link = {
        path: element.data('cke-saved-href') || element.getAttribute('href') || '',
        attributes: {}
      },
      // Get all attributes that have fields in the modal.
      additionalAttributes = Drupal.linkit.additionalAttributes();

      for (var i = 0; i < additionalAttributes.length; i++) {
        link.attributes[additionalAttributes[i]] = element.getAttribute(additionalAttributes[i]);
      }

      // Populate the fields.
      Drupal.linkit.populateFields(link);
    }
  },

  /**
   * Insert the link into the editor.
   *
   * @param {Object} link
   *   The link object.
   */
  insertLink : function(link) {
    var editor = Drupal.settings.linkit.currentInstance.editor;
    CKEDITOR.tools.callFunction(editor._.linkitFnNum, link, editor);
  }
});

})(jQuery);;
