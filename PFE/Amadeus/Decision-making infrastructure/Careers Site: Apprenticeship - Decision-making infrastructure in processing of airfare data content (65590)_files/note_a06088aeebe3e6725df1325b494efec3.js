function openNotePopup(d,e,f,b){b=height=b?800:550;b="dependent\x3d1,resizable\x3d1,innerWidth\x3d"+b+",width\x3d"+b+",innerHeight\x3d"+height+",height\x3d"+height;var c=null,a="/note";pageHeaderJsonData&&pageHeaderJsonData.accessibilityPreferences&&(c=pageHeaderJsonData.accessibilityPreferences.lowVisionType);void 0!=d&&(a+="?param_fb_note_about_id\x3d"+d);a=a+("\x26param_fb_note_time_stamp\x3d"+e)+("\x26param_fb_note_permission_token\x3d"+f);a+="\x26_s.crb\x3d"+ajaxSecKey;c&&(a+="\x26lvmode\x3d"+
c);openCtrWin(a,"Notes",b)};