// let recollect = document.getElementById('recollect');

// recollect.onclick = () => combine();
function combine() {
        chrome.windows.getAll({populate: true}, function(windows) {
                let currWinId = windows[0].id;
                let listTabs = [];
                for (var i = 1; i < windows.length; i++){
                        let tabs = windows[i].tabs;
                        for (var j = 0; j < tabs.length; j++) {
                                listTabs.push(tabs[j  ].id);
                        }

                }
                chrome.tabs.move(listTabs, {windowId: currWinId, index: -1});
                chrome.windows.update(currWinId, {left:0, top:0,
                        height: screen.height,
                        width: screen.width});
        });
}
