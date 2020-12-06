/*http://laravel.io/forum/02-08-2014-ajax-autocomplete-input*/

    function googleCsv2Json(csv){

    csv = csv.replace(/\"\,\"/gm,";").replace(/\"/gm,"")
 
    var lines=csv.split("\n");
  
    var result = [];
  
    var headers=lines[0].split(";");
  
    for(var i=1;i<lines.length;i++){
  
        var obj = {};
        var currentline=lines[i].split(";");
  
        for(var j=0;j<headers.length;j++){

            if(currentline[j].match('{')){
                
                currentline[j]=JSON.parse(currentline[j].replace(/(\w+)/gm,'"$1"'))}
            obj[headers[j]] = currentline[j];
        }
  
        result.push(obj);
  
    }
    
    //return result; //JavaScript object
    return result; //JSON
  }
   
   function SetUpPdg(lookupData){
   var bgt_html = '<div class="pdgui-wrapper" id="pdguiWrapper">\
   <p align="right">\
   <div class=pdgui-feedback align="right">\
   <button id="suggest" class="btn btn-light btn-xs suggest-button"  style="/* background: white; */background-color: rgb(210 219 241 / 81%);color: #7f0505;" >Send as suggestion</button>\
   <button id="add" class="btn btn-light btn-xs suggest-button"  style="/* background: white; */background-color: rgb(210 219 241 / 81%);color: #7f0505;" >Add directly</button>\
   <select name="types" class = "suggest-button" id="types"></select>\
   </div>\
   </p>\
   <form action="javascript:void(0)"; class = "pdgui-list"; id="form"; method="get">\
   <input type="text" name="country" id="autocomplete" autocomplete="off" placeholder="Type PD GUI element name"/>\
   </form>\
   <button class="pdgui-button">\
   <img src="https://static.techspot.com/images2/downloads/topdownload/2015/03/Parallels.png" style= "display: linline !important; height: 2em; opacity: 0.8;">\
   </button>\
   </div>'

   var clearButton = '<button id="btn_clear" style="margin-left: -3.9em; opacity: 0.7;" class="btn btn-light suggest-button">Clear</button>'
 
   
   $("body").append($(bgt_html))
   $(clearButton).insertAfter($("#autocomplete"))
   $('#btn_clear').on("click", function(){PdGuiToNormal()})
//    $("pdgui-wrapper > p").append($(feedbackTypeDropdown))
   $("#autocomplete").hide()
   $(".pdgui-button").on("click", function() {

    
    $(".pdgui-wrapper").toggleClass("expanded");
    $(" #autocomplete").toggle()
    $('input#autocomplete')[0].focus()

    // $('input#autocomplete').get(0).focus()
    
});

// Initialize ajax autocomplete:
typeIcons = {
    'pd':'https://insmac.org/uploads/posts/2017-08/1503641514_parallels.png',
    'mac':'https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/OS_Apple.png',
    'win':'https://cdn2.iconfinder.com/data/icons/designer-skills/128/windows-512.png',
    'undefined':'https://i.dlpng.com/static/png/48540_preview.png',
}

for (const [key, value] of Object.entries(typeIcons)) {
    $('#types').append($('<option value="'+key+'">'+key+'</option>'))
  }
 

$('#autocomplete').autocomplete({

    // serviceUrl: '/autosuggest/service/url',
    //lookup: countriesString,
    lookup: lookupData,
    lookupFilter: function (suggestion, query, queryLowerCase) {

        value = suggestion.value.toLowerCase();
        
        return value.match(queryLowerCase) && suggestion.data.type=="pd" ;
    },

    formatResult: function(suggestion, currentValue){
        return '<img src="'+typeIcons[suggestion.data.type]+'"; title="'+suggestion.data.type+'"  style="display: linline; height: 1.5em"> '+suggestion.value;
    }
    // lookupFilter: function(suggestion, originalQuery, queryLowerCase) {
    //     var re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi');
    //     return re.test(suggestion.value);
    // },
});


$("#add").on("click",function() {
    let suggestion = $("#autocomplete").val()
    SubmitSuggestion('direct_addition',suggestion)
    
 });

$("#suggest").on("click",function() {
    let suggestion = $("#autocomplete").val()
    console.log(suggestion);
    SubmitSuggestion('suggestion',suggestion)
    
 });


 $("#types").on("focus",function() {
    $("#autocomplete").show()
    
 });


$(".autocomplete-suggestions").on("click",function() {
    GM_setClipboard($(".autocomplete-selected").text())
    // $(".pdgui-wrapper").toggleClass("expanded");
    $(".pdgui-button").text('Copied!')
    setTimeout(PdGuiToNormal, 850);
    $(".suggest-button").hide()
 });

 $("#autocomplete").focusout(function() {
     if($(this).val()==""){PdGuiToNormal()}
 });

 $(".suggest-button").hide()
 $("#autocomplete").on('input focus',
function(){
if ($(this).val()==""){$(".suggest-button").hide()}
else{
  
  $(".suggest-button").show()}

})


   }





function PdGuiToNormal(){
    $(".pdgui-button").html('<img src="https://static.techspot.com/images2/downloads/topdownload/2015/03/Parallels.png" style= "display: linline !important; height: 2em;opacity: 0.8;">')
    $("#autocomplete").val("")
    $(".pdgui-wrapper, #autocomplete").removeClass("expanded");
    $(".suggest-button").hide()
    $("#autocomplete").hide()
}


function SubmitSuggestion(kind, suggestion){
    let type = $('#types').val()
    console.log({type},{kind});
    let url = "https://script.google.com/macros/s/AKfycbzceZH-qMkFgl0OHC2gCxTSYkV0MG9P2kOXSq0THmsqJWrHBXOl/exec"
    let curr_url = window.location.href

    $.get(url, '&kind='+kind+'&type='+type+'&content='+suggestion+'&url='+curr_url.replace("&","%26"))//because url contains '&' which is '%26' in curl (otherwise everything after & is percieved as next parameter)
   
   setTimeout(PdGuiToNormal, 1200);
   $("#autocomplete").hide()
   $(".pdgui-button").text('Sent!')
   $(".suggest-button").hide()
   $("#form").trigger("reset");

   // Prevent reload page
  }
  





let requestLink = "https://docs.google.com/spreadsheets/d/1ks6Mn-XrbApLL3eQMQLmI-elZYKP_PfK2wYUCGWxHnI/gviz/tq?tqx=out:csv&sheet=PdGuiReady"

$.ajaxSetup({
    'beforeSend' : function(xhr) {
        xhr.overrideMimeType('text/html; charset=UTF-8');
    },
});


$.get(requestLink, function ldd(data) {
    
    let lookupData = googleCsv2Json(data)
 
      
    SetUpPdg(lookupData)

})

