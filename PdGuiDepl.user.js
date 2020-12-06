// ==UserScript==
// @name     PD Gui Autocomplete
// @version            1.0.0
// @author 	Nikolai Smetannikov

// @include      https://support.parallels.com/Ticket/Update.html?Action=Respond&id=*
// @include      https://support.parallels.com/Ticket/Update.html?Action=both&id=*
// @include      https://support.parallels.com/Ticket/Update.html?Action=Comment&id=*
// @include     https://support.parallels.com/Ticket/Update.html?id=*&QuoteTransaction=*&Action=*


// @updateURL    https://github.com/NickSmet/PD-Gui-App/raw/master/PdGuiDepl.user.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js

// @require      https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js
// @resource    bootstrapCSS https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css

// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery.devbridge-autocomplete/1.2.24/jquery.autocomplete.min.js

// @require    https://raw.githubusercontent.com/NickSmet/PD-Gui-App/master/PdGui.js?1
// @resource   PDGuiCSS https://raw.githubusercontent.com/NickSmet/PD-Gui-App/master/PDGui.css

// @run-at       document-end


// @grant          GM_getResourceText
// @grant          GM_addStyle
// @grant          GM_xmlhttpRequest
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_setClipboard

// ==/UserScript==

GM_addStyle(GM_getResourceText('PDGuiCSS'));




