var DSX_RECRUITMENT_SETUP = (function(){
var SETUP = {
 detail_remoteScripting:'https://jobs.extranet.3ds.com/xhr?q=',
 liens88:'https://is5.extranet.3ds.com/psc/ERPRD/EMPLOYEE/HRMS/c/ROLE_APPLICANT.ER_VIEW_JOBS.GBL?Page=HR_JOB_POST_L&Action=U&languageCd=',
 liens91:'https://is4.extranet.3ds.com/psc/ERPRD/EMPLOYEE/HRMS/c/HRS_HRAM.HRS_CE.GBL?Page=HRS_APP_LOGIN_EXP&Action=A&SiteId=1&languageCd='
};

function get(key) { return key in SETUP ? SETUP[key] : key; }
return {get:get};
})();

