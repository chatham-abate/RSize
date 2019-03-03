// let button = document.getElementById('button');
// let button1 = document.getElementById('button1');
// let button2 = document.getElementById('button2');
// let button3 = document.getElementById('button3');
// let button11 = document.getElementById('button1-1');
// fetch(chrome.extension.getURL('/scripts/templates.json'))
//       .then((resp) => resp.json())
//       .then(function (jsonData) {
//           console.log(jsonData)
//       });

// let arraySplit = [
//       {
//         "x" : 0,
//         "y" : 0,
//         "width" : 0.5,
//         "height" : 1
//       },
//       {
//         "x" : 0.5,
//         "y" : 0,
//         "width" : 0.5,
//         "height" : 1
//       }
// ]
// let stringsSplit = [
//         "https://youtube.com",
//         "https://facebook.com"
// ]
// let arrayStrongRight = [
//       {
//         "x" : 0.5,
//         "y" : 0,
//         "width" : 0.5,
//         "height" : 1
//       },
//       {
//         "x" : 0,
//         "y" : 0,
//         "width" : 0.5,
//         "height" : 0.5
//       },
//       {
//         "x" : 0,
//         "y" : 0.5,
//         "width" : 0.5,
//         "height" : 0.5
//       }
// ]
// let stringsStrongRight = [
//         "https://netflix.com",
//         "https://canvas.rice.edu",
//         "https://news.google.com"
// ]
// button.onclick = function () {
//         chrome.windows.getCurrent(function (window) {
//                 chrome.windows.update(window.id,{left:0, top:0, width: screen.width*0.5, height: screen.height*1});
//                 chrome.windows.create({left: 0.5*screen.width, top: 0, width: screen.width*0.5, height: screen.height*1});
//         });
// };

        // console.log(0);
function resize(array, strings = []) {
    console.log(array);
    // console.log(array.length)
    // let wId = 0;
    if (strings.length != 0) {
        for (var i = 0; i <= array.length - 1; i++) {
            console.log(array[i].x);
                if (i == 0) {
                    chrome.windows.getCurrent(function (window) {
                        chrome.windows.update(window.id,
                        trim({left: array[0].x * screen.availWidth,
                        top: array[0].y * screen.availHeight,
                        width: screen.availWidth * array[0].width,
                        height: screen.availHeight * array[0].height}),
                        function(window) {
                            chrome.tabs.update({url: strings[0]});
                        });
                    });
                } else {
                    chrome.windows.create(
                        trim({url: strings[i],
                        left: array[i].x * screen.availWidth,
                        top: array[i].y * screen.availHeight,
                        width: screen.availWidth * array[i].width,
                        height: screen.availHeight * array[i].height}));
                    }
        }
    } else {
        chrome.tabs.query({currentWindow: true}, function(tabs) {
            let excess = 0;
            for (var i = 0; i <= array.length - 1; i++) {
                // console.log(array[i].x);
                {
                    if (i >= tabs.length) {
                        chrome.windows.create(
                            trim({left: array[i].x * screen.availWidth,
                            top: array[i].y * screen.availHeight,
                            width: screen.availWidth * array[i].width,
                            height: screen.availHeight * array[i].height}));
                    } else {
                        //     chrome.windows.getCurrent(function (window) {
                        //         console.log(array[i]);
                        //         chrome.windows.update(window.id,
                        //         {left: arrayEntry.x * screen.availWidth,
                        //         top: arrayEntry.y * screen.availHeight,
                        //         width: screen.availWidth * arrayEntry.width,
                        //         height: screen.availHeight * arrayEntry.height});
                        //     });
                        //     excess++;
                        // }
                        chrome.windows.create(
                            trim({tabId: tabs[i].id,
                            left: array[i].x * screen.availWidth,
                            top: array[i].y * screen.height,
                            width: screen.availWidth * array[i].width,
                            height: screen.availHeight * array[i].height})
                                    /*
                                     *Attempt to allocate tabs
                                    */
                                    // function(window) {
                                    //         if (i == array.length - 1 && i < tabs.length) {
                                    //                 for (var j = i; j < tabs.length - 1; j++) {
                                    //                         chrome.tabs.move(tabs[j].id, {windowId: window.id, index: -1});
                                    //                 }
                                    //         }
                                        // }
                        );
                    }
                }
            }
        });
    }
};

function trim(windowData) {
  windowData.left = Math.floor(windowData.left);
  windowData.top = Math.floor(windowData.top);
  windowData.width = Math.floor(windowData.width);
  windowData.height = Math.floor(windowData.height);

  return windowData;
} 



// button.onclick = () => resize(arrayStrongRight);
// button1.onclick = () => resize(arraySplit);
// button2.onclick = () => resize(arraySplit, stringsSplit);
// button3.onclick = () => resize(arrayStrongRight, stringsStrongRight);
