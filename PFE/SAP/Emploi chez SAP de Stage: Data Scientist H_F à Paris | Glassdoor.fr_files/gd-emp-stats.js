!function e(t,i,n){function r(a,l){if(!i[a]){if(!t[a]){var o="function"==typeof require&&require;if(!l&&o)return o(a,!0);if(s)return s(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var c=i[a]={exports:{}};t[a][0].call(c.exports,function(e){var i=t[a][1][e];return r(i?i:e)},c,c.exports,e,t,i,n)}return i[a].exports}for(var s="function"==typeof require&&require,a=0;a<n.length;a++)r(n[a]);return r}({1:[function(e,t,i){t.exports=e("./lib/modules/employer/emp-stats/emp-stats")},{"./lib/modules/employer/emp-stats/emp-stats":2}],2:[function(e,t,i){e("gd-charts/svg-donut"),GD.afterBody(function(){var e=66,t="";GD.page.empStats&&GD.page.empStats.idDifferentiator&&(t=GD.page.empStats.idDifferentiator);var i=$("#"+GD.page.empStats.baseId+t),n=i.find("#EmpStats_Recommend"),r=i.find("#EmpStats_Approve"),s=i.find(".lineText").outerHeight();i.find(".line").css({top:(i.find(".ceoApprove").outerHeight()-s)/2+s+"px"}),n.length>0&&n.gdDonut({values:[n.data("percentage")],altTxt:GD.i18n.msg("txtNotApplicable"),size:e}),r.length>0&&r.gdDonut({values:[r.data("percentage")],altTxt:GD.i18n.msg("txtNotApplicable"),size:e});var a="trends-",l=window.location.hash,o=l&&l.startsWith("#"+a),u=GD.flex.getCurrFF();if("tablet"===u||"desktop"===u)i.find(".ratingsDetailsLink").click(function(){var e=$(this);GD.page.ratingDetails.activeEmployerId=e.data("employerId"),$.gdPopup.open({items:{src:e.attr("href")},type:"ajax",callbacks:{beforeOpen:function(){this.contentContainer.css("max-width","650px")},beforeClose:function(){window.location.replace(window.location.href.split("#")[0]+"#")}}})}),o&&i.find(".ratingsDetailsLink").first().click(),window.Highcharts||GD.util.loadFile("/static/js/gd-charts-full.js");else{var c=i.find(".ratingsDetailsLink").on("click",function(e){location.href=$(e.target).closest(".ratingsDetailsLink").data("hh-href")});o&&location.replace(c.first().data("hh-href"))}})},{"gd-charts/svg-donut":3}],3:[function(e,t,i){!function(e,t,i){e.fn.gdDonut=function(t){var n=e.extend({theme:"green",holeColor:"#ffffff",bgColor:"#eaeaea",size:60,innerCircle:.34,fontSize:18,showText:!1},t),r=[];if(!n.hasOwnProperty("values"))return void console.log("Need values to draw a pie chart");1===n.values.length&&"green"==n.theme&&(n.showText=!0,n.theme="unigreen",n.innerCircle=.39),"green"===n.theme?r=["#acf141","#9cdb3b","#96c948","#008cff","#388fd6","#005ca7","#003c75"]:"blue"===n.theme?r=["#b8dfff","#87c5ff","#43aaff","#008cff","#388fd6","#005ca7","#003c75"]:"unigreen"===n.theme&&(r=["#9cdb3b"]);var s="http://www.w3.org/2000/svg",a=i.createElementNS(s,"svg:svg");a.setAttribute("width",n.size),a.setAttribute("height",n.size),a.setAttribute("viewBox","0 0 "+n.size+" "+n.size);var l=i.createElementNS(s,"circle");l.setAttributeNS(null,"cx",n.size/2),l.setAttributeNS(null,"cy",n.size/2),l.setAttributeNS(null,"r",n.size/2),l.setAttributeNS(null,"fill",n.bgColor),a.appendChild(l);for(var o,u,c,f,d,p=2*Math.PI/100,h=0,g=0,b=0,m=n.values.length;m>b;b++){var v=i.createElementNS(s,"path");h=g,g=h+(n.values[b]*p-.001),o=n.size/2+n.size/2*Math.sin(h),u=n.size/2-n.size/2*Math.cos(h),c=n.size/2+n.size/2*Math.sin(g),f=n.size/2-n.size/2*Math.cos(g),big=0,g-h>Math.PI&&(big=1),d="M "+n.size/2+","+n.size/2+" L "+o+","+u+" A "+n.size/2+","+n.size/2+" 0 "+big+" 1 "+c+","+f+" Z",v.setAttribute("d",d),v.setAttribute("fill",r[b]),a.appendChild(v)}var z=i.createElementNS(s,"circle");if(z.setAttributeNS(null,"cx",n.size/2),z.setAttributeNS(null,"cy",n.size/2),z.setAttributeNS(null,"r",n.size*n.innerCircle),z.setAttributeNS(null,"fill",n.holeColor),a.appendChild(z),n.showText){var x=i.createElementNS(s,"text");x.setAttribute("x",n.size/2),x.setAttribute("y",n.size/2+n.innerCircle*n.fontSize-2),x.setAttribute("fill",r[0]),x.setAttribute("font-size",n.fontSize+""),x.setAttribute("font-weight","bold"),x.setAttribute("font-family","'Helvetica Neue', HelveticaNeue, Helvetica, Arial, sans-serif"),x.setAttribute("text-anchor","middle"),parseInt(n.values[0],10)>0?x.textContent=n.values[0]+"%":(x.textContent=n.altTxt,x.setAttribute("font-size",16)),a.appendChild(x)}return e(this).empty().append(a),this}}(jQuery,window,document)},{}],4:[function(e,t,i){e("gd-modules/emp-stats")},{"gd-modules/emp-stats":1}]},{},[4]);
//# sourceMappingURL=gd-emp-stats.js.map
