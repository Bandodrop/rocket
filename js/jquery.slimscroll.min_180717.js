function clickScroll(t,e){var i=$(t).offset().top,o=$(t).siblings(".slimScrollBar"),s=($(o).position().top,parseInt($(o).css("bottom")),$(t).parent(".slimScrollDiv").find(".nfltr_cont").prop("scrollHeight")),r=e.pageY-i,l=s*(r/$(t).height());$(t).parent(".slimScrollDiv").find(".nfltr_cont").slimScroll({scrollTo:l+"px"})}!function(e){e.fn.extend({slimScroll:function(i){var o={width:"auto",size:"7px",color:"#000",position:"right",distance:"5px",distance1:"6px",start:"top",opacity:.4,alwaysVisible:!0,disableFadeOut:!1,railVisible:!0,railColor:"#e2e2e2",railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!0,wheelStep:20,touchScrollStep:80,borderRadius:"7px",railBorderRadius:"5px"},s=e.extend(o,i);return this.each(function(){function o(t){if(c){var i=0;(t=t||window.event).wheelDelta&&(i=-t.wheelDelta/120),t.detail&&(i=t.detail/3);var o=t.target||t.srcTarget||t.srcElement;e(o).closest("."+s.wrapperClass).is(S.parent())&&r(i,!0),t.preventDefault&&!w&&t.preventDefault(),w||(t.returnValue=!1)}}function r(t,e,i){w=!1;var o=t,r=S.outerHeight()-T.outerHeight();if(e&&(o=parseInt(T.css("top"))+t*parseInt(s.wheelStep)/100*T.outerHeight(),o=Math.min(Math.max(o,0),r),o=t>0?Math.ceil(o):Math.floor(o),T.css({top:o+"px"})),f=parseInt(T.css("top"))/(S.outerHeight()-T.outerHeight()),o=f*(S[0].scrollHeight-S.outerHeight()),i){var l=(o=t)/S[0].scrollHeight*S.outerHeight();l=Math.min(Math.max(l,0),r),T.css({top:l+"px"}),S.animate({scrollTop:o+"px"},"slow")}i||S.scrollTop(o),S.scrollTop(o),S.trigger("slimscrolling",~~o),a(),n()}function l(){g=Math.max(S.outerHeight()/S[0].scrollHeight*S.outerHeight(),m),T.css({height:g+"px"});var t=g==S.outerHeight()?"none":"block";T.css({display:t})}function a(){if(l(),clearTimeout(u),f==~~f){if(w=s.allowPageScroll,v!=f){var t=0==~~f?"top":"bottom";S.trigger("slimscroll",t)}}else w=!1;v=f,g>=S.outerHeight()?w=!0:(T.stop(!0,!0).fadeIn("fast"),s.railVisible&&D.stop(!0,!0).fadeIn("fast"))}function n(){s.alwaysVisible||(u=setTimeout(function(){s.disableFadeOut&&c||h||p||(T.fadeOut("slow"),D.fadeOut("slow"))},1e3))}var c,h,p,u,d,g,f,v,b="<div></div>",m=30,w=!1,S=e(this);if(S.parent().hasClass(s.wrapperClass)){var x=S.scrollTop();if(T=S.siblings("."+s.barClass),D=S.siblings("."+s.railClass),l(),e.isPlainObject(i)){if("height"in i&&"auto"==i.height){S.parent().css("height","auto"),S.css("height","auto");var y=S.parent().parent().height();S.parent().css("height",y),S.css("height",y)}else if("height"in i){var H=i.height;S.parent().css("height",H),S.css("height",H)}if("scrollTo"in i)x=parseInt(s.scrollTo);else if("scrollBy"in i)x+=parseInt(s.scrollBy);else if("destroy"in i)return T.remove(),D.remove(),void S.unwrap();r(x,!1,!0)}}else if(!(e.isPlainObject(i)&&"destroy"in i)){s.height="auto"==s.height?S.parent().height():s.height;var C=e(b).addClass(s.wrapperClass).css({position:"relative",overflow:"hidden",width:s.width,height:s.height});S.css({overflow:"hidden",width:s.width,height:s.height});var D=e(b).addClass(s.railClass).attr("onclick","clickScroll(this,event);").css({width:s.size,height:"100%",position:"absolute",top:0,display:s.alwaysVisible&&s.railVisible?"block":"none","border-radius":s.railBorderRadius,background:s.railColor,opacity:s.railOpacity,zIndex:90}),T=e(b).addClass(s.barClass).css({background:s.color,width:s.size,position:"absolute",top:0,opacity:s.opacity,display:s.alwaysVisible?"block":"none","border-radius":s.borderRadius,BorderRadius:s.borderRadius,MozBorderRadius:s.borderRadius,WebkitBorderRadius:s.borderRadius,zIndex:99}),E="right"==s.position?{right:s.distance1}:{left:s.distance1},R="right"==s.position?{right:s.distance}:{left:s.distance};D.css(E),T.css(R),S.wrap(C),S.parent().append(T),S.parent().append(D),s.railDraggable&&T.bind("mousedown",function(i){var o=e(document);return p=!0,t=parseFloat(T.css("top")),pageY=i.pageY,o.bind("mousemove.slimscroll",function(e){currTop=t+e.pageY-pageY,T.css("top",currTop),r(0,T.position().top,!1)}),o.bind("mouseup.slimscroll",function(t){p=!1,n(),o.unbind(".slimscroll")}),!1}).bind("selectstart.slimscroll",function(t){return t.stopPropagation(),t.preventDefault(),!1}),D.hover(function(){a()},function(){n()}),T.hover(function(){h=!0},function(){h=!1}),S.hover(function(){c=!0,a(),n()},function(){c=!1,n()}),S.bind("touchstart",function(t,e){t.originalEvent.touches.length&&(d=t.originalEvent.touches[0].pageY)}),S.bind("touchmove",function(t){w||t.originalEvent.preventDefault(),t.originalEvent.touches.length&&(r((d-t.originalEvent.touches[0].pageY)/s.touchScrollStep,!0),d=t.originalEvent.touches[0].pageY)}),l(),"bottom"===s.start?(T.css({top:S.outerHeight()-T.outerHeight()}),r(0,!0)):"top"!==s.start&&(r(e(s.start).position().top,null,!0),s.alwaysVisible||T.hide()),function(t){window.addEventListener?(t.addEventListener("DOMMouseScroll",o,!1),t.addEventListener("mousewheel",o,!1)):document.attachEvent("onmousewheel",o)}(this)}}),this}}),e.fn.extend({slimscroll:e.fn.slimScroll})}(jQuery);