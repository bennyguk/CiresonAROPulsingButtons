/* ------------------------------------------------------- */
/* ------- Custom Pulsating Save and Next Buttons -------- */
/* ------------------------------------------------------- */

var observer = new MutationObserver(function (mutations) {
	var targetElement1 = $('#drawer-taskbar .btn .fa.fa-check').parent();
	var targetElement2 = $('#drawer-taskbar .btn .fa-arrow-right').parent();
    if(targetElement1.length > 0 && $(targetElement1).prop('disabled') == false) {       
        //get drawer color
        var drawerColor = $('.drawer').css('background-color');
        //lighten drawercolor (changed to 1 from 0.25 for more impact)
        var pulseColor = ColorLuminance(rgb2hex(drawerColor), 1)
        //Add style to DOM
        ApplyStyleSheet(pulseColor);
        //Add class to save button
        targetElement1.addClass('pulsate-taskbar-save-next-btn');
    }
	else {
	targetElement1.removeClass('pulsate-taskbar-save-next-btn');
	
	}
	
    if(targetElement2.length > 0 && $(targetElement2).prop('disabled') == false) {       
        //get drawer color
        var drawerColor = $('.drawer').css('background-color');
        //lighten drawercolor
        var pulseColor = ColorLuminance(rgb2hex(drawerColor), 1)
        //Add style to DOM
        ApplyStyleSheet(pulseColor);
        //Add class to next button
        targetElement2.addClass('pulsate-taskbar-save-next-btn');
    }
	else {
	targetElement2.removeClass('pulsate-taskbar-save-next-btn');
	}
});


// Notify me of everything!
var observerConfig = {
    attributes: true,
    childList: false,
    characterData: false,
    subtree: true
};
// Node, config
$(document).ready(function () {
        var targetNode = document.getElementById('main_wrapper');
        observer.observe(targetNode, observerConfig);
});
function ColorLuminance(hex, lum) {
	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}

function rgb2hex(rgb) {
    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function ApplyStyleSheet(pulseColor) {
    var addRule = (function(style){
        var sheet = document.head.appendChild(style).sheet;
        return function(selector, css){
            var propText = Object.keys(css).map(function(p){
                return p+":"+css[p]
            }).join(";");
            sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
        }
    })(document.createElement("style"));
    
    var addKeyframes = (function(style){
        var sheet = document.head.appendChild(style).sheet;
        return function(selector, css){
            var keyFrame = Object.keys(css).map(function(k){
                css2 = css[k];
                var keyFramePropText = Object.keys(css2).map(function(t){
                    return t+":"+css2[t];
                }).join(";");
                return k+"{"+keyFramePropText+"}";
            });
            var frames = keyFrame.join('');
            console.log(frames);
            sheet.insertRule(selector + "{" + keyFrame.join('') + "}", sheet.cssRules.length);
        }
    })(document.createElement("style"));
    addRule(".pulsate-taskbar-save-next-btn", {
        "-webkit-animation": "pulsate 2s ease-out",
        "-webkit-animation-iteration-count": "infinite",
        "animation": "pulsate 2s ease-out",
        "animation-iteration-count": "infinite",
        "background-color": pulseColor
    });
    
    addRule(".pulsate-taskbar-save-next-btn:hover", {
        "-webkit-animation": "none",
        "animation": "none"
    });
    
    addRule(".pulsate-taskbar-save-next-btn:hover .fa", {
        "-webkit-animation": "none",
        "animation": "none"
    });
    
    addRule(".pulsate-taskbar-save-next-btn .fa", {
        "-webkit-animation": "pulsate 2s ease-out",
        "-webkit-animation-iteration-count": "infinite",
        "animation": "pulsate 2s ease-out",
        "animation-iteration-count": "infinite",
        "color": "#fff"
    });

    addKeyframes("\@keyframes pulsate", {
        "0\%": { "background-color": pulseColor, "color": "#fff" },
        "50\%": { "background-color": "transparent", "color": "#33909a" },
        "100\%": { "background-color": pulseColor, "color": "#fff" }
    });
}

/* ------------------------------------------------------- */
/* -------- End Custom Pulsating Save Next Button -------- */
/* ------------------------------------------------------- */
