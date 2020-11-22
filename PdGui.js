/*http://laravel.io/forum/02-08-2014-ajax-autocomplete-input*/

   
   function SetUpPdg(){
   var bgt_html = '<div class="pdgui-wrapper">\
   <p align="right">\
   <button id="suggest-button" class="btn btn-light btn-xs"  style="/* background: white; */background-color: rgb(210 219 241 / 81%);color: #7f0505;" >Send as suggestion</button>\
   </p>\
   <form action="javascript:void(0)"; class = "pdgui-list"; id="form"; method="get">\
   <input type="text" name="country" id="autocomplete" autocomplete="off" placeholder="Type PD GUI element name"/>\
   </form>\
   <button class="pdgui-button">\
   <img src="https://static.techspot.com/images2/downloads/topdownload/2015/03/Parallels.png" style= "display: linline !important; height: 2em; opacity: 0.8;">\
   </button>\
   </div>'
   
   
   $("body").append($(bgt_html))
   $("#autocomplete").hide()
   $(".pdgui-button").on("click", function() {

    
    $(".pdgui-wrapper").toggleClass("expanded");
    $(" #autocomplete").toggle()
    $('input#autocomplete')[0].focus()

    // $('input#autocomplete').get(0).focus()
    
});

// Initialize ajax autocomplete:


$('#autocomplete').autocomplete({
    // serviceUrl: '/autosuggest/service/url',
    //lookup: countriesString,
    lookup: menuArray,
    // lookupFilter: function(suggestion, originalQuery, queryLowerCase) {
    //     var re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi');
    //     return re.test(suggestion.value);
    // },
});




$("#suggest-button").on("click",function() {
    let suggestion = $("#autocomplete").val()
    console.log(suggestion);
    SubmitSuggestion(suggestion)
    
 });



$(".autocomplete-suggestions").on("click",function() {
    GM_setClipboard($(".autocomplete-selected").text())
    // $(".pdgui-wrapper").toggleClass("expanded");
    $(".pdgui-button").text('Copied!')
    setTimeout(PdGuiToNormal, 850);
    $("#suggest-button").hide()
 });

 $("#autocomplete").focusout(function() {
    $(".pdgui-wrapper, #autocomplete").removeClass("expanded");
    $(" #autocomplete").hide()




 });

 $("#suggest-button").hide()
 $("#autocomplete").on('input focus',
function(){
if ($(this).val()==""){$("#suggest-button").hide()}
else{
  
  $("#suggest-button").show()}

})


   }
function PdGuiToNormal(){
    $(".pdgui-button").html('<img src="https://static.techspot.com/images2/downloads/topdownload/2015/03/Parallels.png" style= "display: linline !important; height: 2em;opacity: 0.8;">')
    $(".pdgui-wrapper, #autocomplete").removeClass("expanded");
    $("#autocomplete").val(""); 
}


function SubmitSuggestion(suggestion){
    let url = "https://script.google.com/macros/s/AKfycbyIieYDWx-25wYZmpEuB4o8j6Tj03c_MjIoMIes/exec"
    let curr_url = window.location.href

    $.get(url, '&type=PdGui&feedback='+suggestion+'&url='+curr_url.replace("&","%26"))//because url contains '&' which is '%26' in curl (otherwise everything after & is percieved as next parameter)
   
   setTimeout(PdGuiToNormal, 1200);
  
   $(".pdgui-button").text('Sent!')
   $("#suggest-button").hide()
   $("#form").trigger("reset");

   // Prevent reload page
  }
  





let requestLink = "https://docs.google.com/spreadsheets/d/1ks6Mn-XrbApLL3eQMQLmI-elZYKP_PfK2wYUCGWxHnI/gviz/tq?tqx=out:csv&sheet=PdGuiReady"

$.ajaxSetup({
    'beforeSend' : function(xhr) {
        xhr.overrideMimeType('text/html; charset=UTF-8');
    },
});


var menuArray

$.get(requestLink, function ldd(data) {

    console.log(data);
    //$("head").append($('<meta charset="utf-8">'))
    
    menuArray = data.split(/\"\r?\n\"/);
    console.log(menuArray);
    SetUpPdg()

})


