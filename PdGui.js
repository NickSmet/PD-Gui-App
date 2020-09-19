/*http://laravel.io/forum/02-08-2014-ajax-autocomplete-input*/

   
   function SetUpPdg(){
   var bgt_html = '<div class="pdgui-wrapper">\
   <form action="javascript:void(0)"; class = "pdgui-list"; id="form"; method="get">\
   <label>PD GUI</label><br>\
   <input type="text" name="country" id="autocomplete" autocomplete="off" placeholder="Type PD GUI element"/>\
   </form>\
   <button class="pdgui-button">\
   <img src="https://static.techspot.com/images2/downloads/topdownload/2015/03/Parallels.png" style= "display: linline !important; height: 2em; opacity: 0.8;">\
   </button>\
   </div>'
   
   
   $("body").append($(bgt_html))
   $(".pdgui-button").on("click", function() {

    
    $(".pdgui-wrapper").toggleClass("expanded");
    $('input#autocomplete')[0].focus()

    // $('input#autocomplete').get(0).focus()
    
});

// Initialize ajax autocomplete:
$('#autocomplete').autocomplete({
    // serviceUrl: '/autosuggest/service/url',
    //lookup: countriesString,
    lookup: menuArray,
    lookupFilter: function(suggestion, originalQuery, queryLowerCase) {
        var re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi');
        return re.test(suggestion.value);
    },
});

$(".autocomplete-suggestions").on("click",function() {
    GM_setClipboard($(".autocomplete-selected").text())
    // $(".pdgui-wrapper").toggleClass("expanded");
    $(".pdgui-button").text('Copied!')
    setTimeout(PdGuiToNormal, 850);
 });

 $("#autocomplete").focusout(function() {
    $(".pdgui-wrapper").removeClass("expanded");
 });


   }
function PdGuiToNormal(){
    $(".pdgui-button").html('<img src="https://static.techspot.com/images2/downloads/topdownload/2015/03/Parallels.png" style= "display: linline !important; height: 2em;opacity: 0.8;">')
    $("#autocomplete").val("");
  
}
  

var menuElements = ["In the top menu click Actions > Start in Rollback Mode",
"In the top menu click Actions > Enter Travel Mode",
"In the top menu click Actions > Resume",
"In the top menu click Actions > Pause",
"In the top menu click Actions > Suspend",
"In the top menu click Actions > Restart",
"In the top menu click Actions > Reset",
"In the top menu click Actions > Shut Down",
"In the top menu click Actions > Stop",
"In the top menu click Actions > Install Parallels Tools",
"In the top menu click Actions > Take Snapshot",
"In the top menu click Actions > Manage Snapshots",
"In the top menu click Actions > Manage Snapshots",
"In the top menu click Actions > Manage Snapshots,",
"In the top menu click Actions > Revert to Snapshot",
"In the top menu click Devices > Usb & Bluetooth",
"In the top menu click Devices > CD/DVD > Connect image...",
"In the top menu click Devices > CD/DVD > Disconnect",
"In the top menu click Devices > Network > Shared Network",
"In the top menu click Devices > Network > Host Only",
"In the top menu click Devices > Network > Bridged > Default Adapter",
"In the top menu click Devices > Network > Bridged > Wi-Fi",
"In the top menu click Devices > Network > Bridged > Ethernet",
"In the top menu click Help > Send Technical Data",
"In the top menu click Develop > Start SSH Session",
"In the top menu click Develop > Open in Browser",
"In the top menu click Develop > Start Debugging Session",
"In the top menu click Develop > Generate Core Dump",
"In the top menu click File > Convert to Template",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Security > Encrypt with password > Turn On",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Security > Encrypt with password > Turn Off",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Security > Encrypt with password > Change password",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Security > Expiration Date > Set Date",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Security > Expiration Date > Change Date",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Cpu & Memory, and set Processors to 2-16",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Cpu & Memory, and set Memory slider to 2048Mb-...Mb",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Boot Order > Boot Order",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Boot Order > External boot device",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Boot Order > Select boot device on startup",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Boot Order > Advanced Settings, and in BIOS select Legacy|EFI 32-bit|EFI 64-bit",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Boot Order > Advanced Settings > EFI Secure Boot",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Boot Order > Advanced Settings > Boot Flags",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Graphics, and in Memory select Auto|2048 Mb",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Graphics > Advanced Settings > 3D acceleration",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Graphics > Advanced Settings > Vertical synchronization",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Graphics, and in Resolution select Best for retina display|Scaled|Best for External displays",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Mouse & Keyboard, and in Mouse select Auto-detect|Optimize|Don't optimize",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Mouse & Keyboard, and in Keyboard select Auto-detect|Don't optimize|Optimize",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Mouse & Keyboard > Advanced Settings > Mouse pointer sticks at window...",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Mouse & Keyboard > Advanced Settings > Smooth scrolling",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Shared Printers > Share Mac Printers with...",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Shared Printers > Synchronize default printers",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Shared Printers > Show page setup options before printing",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Sound & Camera > Camera",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > USB & Bluetooth > Share Bluetooth devices with...",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > USB & Bluetooth > Share smart card readers with...",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > USB & Bluetooth > Advanced Settings > Enable USB 3.0",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Startup and Shutdown > Custom > Start Automatically",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Startup and Shutdown > Custom > On Mac Shutdown",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Startup and Shutdown > Custom > Startup View",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Startup and Shutdown > Custom > On VM Shutdown",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Startup and Shutdown > Custom > On Window Close",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Startup and Shutdown > Pause Windows when possible",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Security > Rollback Mode",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Cpu & Memory > Advanced Settings, and in Hypervisor select Parallels|Apple",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Cpu & Memory > Advanced Settings > Hypervisor > Adaptive Hypervisor",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Cpu & Memory > Advanced Settings > Hypervisor > Enable nested virtualization",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Cpu & Memory > Advanced Settings > Hypervisor > PMU virtualization",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Optimization > Resource usage",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Sharing > Share Mac > Shared Profile > Map Mac volumes to Windows",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Sharing > Share Mac > Shared Profile",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Sharing > Share Mac > Shared Profile > Configure [Desktop]",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Sharing > Share Mac > Shared Profile > Configure [Documents]",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Configure > Options > Sharing > Share Mac > Shared Profile > Configure [Pictures]",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Sharing > Share Mac > Shared Profile > Configure [Music]",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Sharing > Share Mac > Shared Profile > Configure [Movies]",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Sharing > Share Mac > Shared Profile > Configure [Downloads]",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Applications > Share Mac applications with Windows",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Applications > Share Windows applications with Mac",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Applications > Share Windows applications... > Show Windows application folder in Dock",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Applications > Share Windows applications... > Show Dock icons in Coherence only",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Applications > Share Windows applications... > Dock icons bounce to alert",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Applications > Share Windows applications... > Add new applications to Launchpad",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Web & Email > Web pages [Default, Open in Windows, Open in Mac]",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Web & Email > Safari plugin",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Web & Email > Email [Default, Open in Windows, Open in Mac]",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Web & Email > More Applications [FTP]",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Web & Email > More Applications [Newsgroup]",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Web & Email > More Applications [RSS]",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Web & Email > More Applications [Remote Access]",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Web & Email > Store Internet passwords in Mac keychain",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Sharing > Share Mac > Shared Profile > Share cloud folder with Windows",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Sharing > Share Mac > Shared Profile > Advanced Settings [Assign a driver letter to shared folder, Allow creating executable, Enable DOS 8.3 filenames]",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Applications > Show Windows notification area in Mac menu bar",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Applications > Allow apps to auto-switch to full screen",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Security > Require password to [...]",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Security > Always lock Windows on suspend",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Security > Isolate Windows from Mac",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Security > Custom password > Change Password",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Backup > SmartGuard",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Backup > SmartGuard > Details > Notify me before snapshot creation",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Backup > SmartGuard > Details > Take a Snapshot Every",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Backup > SmartGuard > Details > Snapshots to Keep",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Click the lock to prevent further changes",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Security > Expiration Date > Change Date",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > <... > > '-'",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > <... > > '+'",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Hard Disk > '+' > Path",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Hard Disk > Properties > Expanding disk",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Hard Disk > Properties, and set Size slider to 256Gb-...",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Hard Disk > Advanced Settings > Location",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Hard Disk > Advanced Settings > Enable TRIM",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Hard Disk > Advanced Settings > Sync free space with Mac",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > CD/DVD > '+'",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > CD/DVD > Source",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Floppy Disk > '+'",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Floppy Disk > '+'",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Network > Source",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Network > Network Conditioner",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Network > Advanced Settings > MAC",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Network > Advanced Settings > Open Network Preferences",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Network > Advanced Settings, and in Type select Virtio|Intel PRO/1000|Intel Gigabit|Realtek",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Serial Port > Source",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Printer > Source",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Sound & Camera > Sound Output/Microphone",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Usb & Bluetooth",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Sharing > Share Mac > Share Folders > Custom Folders...",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Sharing > Share Mac > Share Folders > Custom Folders...",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Sharing > Share Mac > Share Folders > Custom Folders...",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Sharing > Share Mac > Share Folders",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Sharing > Share Windows > Access Windows folders from Mac",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Sharing > Share Windows > Access Windows folders from Mac > Share OneDrive with Mac",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Sharing > Share Windows > Advanced Settings > Share Windows network drives with Mac",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Sharing > Share Windows > Advanced Settings > Share Windows-connected drives with Mac",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > More Options, and in Time select Sync from Mac|Sync from either OS|Do not sync",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > More Options > Set VM name as guest OS hostname (Linux guest only)",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > More Options > Authenticate with macOS SSH public key (Linux guest only)",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > More Options > Show developer tools",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Hardware > Mouse & Keyboard > Advanced Settings > Enable swipe from edges",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > General > Name",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > General > Description",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > General > 'Click icon'",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > General, and in Configure for: select Productivity|Software development|Software testing|Design|Game only",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > General > Reclaim",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > More Options > Asset tag",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > More Options > Update Parallels Tools automatically",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Full Screen > Use all displays in full screen",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Full Screen > Use all displays in full screen > Show and hide space on all displays simultaniously",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Full Screen > Optimize full screen for games",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Full Screen > Advanced settings > Use Windows gamma settings",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Full Screen > Advanced settings, and in Scale to fit screen select Off|Auto|Keep ratio|Stretch",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Picture in Picture > Opacity",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Picture in Picture > Keep on top of other windows",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Picture in Picture > Show window on all Spaces",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Picture in Picture > Activate window by Dock icon only",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Travel Mode, and in Enter automatically select Always when on battery power|When battery power is less that|Never",
"Open the virtual machine's Configuration (https://kb.parallels.com/117287) > Options > Travel Mode, and in Quit automatically select When connected to power|Never"
]

var menuArray = menuElements

SetUpPdg()



