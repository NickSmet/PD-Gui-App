// ==UserScript==
// @name     PD Gui Autocomplete
// @version            0.5
// @author 	Nikolai Smetannikov

// @include      https://support.parallels.com/Ticket/Update.html?Action=Respond&id=*

// @updateURL    http://cdn.jsdelivr.net/gh/NickSmet/Pd-Gui-App@master/PdGuiDepl.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js

// @require      https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js
// @resource    bootstrapCSS https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css

// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery.devbridge-autocomplete/1.2.24/jquery.autocomplete.min.js

// @require    https://cdn.jsdelivr.net/gh/NickSmet/Pd-Gui-App@master/PdGui.js
// @resource   PDGuiCSS https://cdn.jsdelivr.net/gh/NickSmet/Pd-Gui-App@master/PdGui.css

// @run-at       document-end


// @grant          GM_getResourceText
// @grant          GM_addStyle
// @grant          GM_xmlhttpRequest
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_setClipboard

// ==/UserScript==

GM_addStyle(GM_getResourceText('PDGuiCSS'));




