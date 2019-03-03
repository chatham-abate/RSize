
// Margin for each block when displaying sample layouts.
const BLOCK_MARGIN = 3;
var data; 
chrome.storage.sync.get(["data"], function(storedData) {
  data = storedData.data;
  // console.log(data);
  initExtension();
});
// console.log(data);
/**
 * Initialize the extension.
 */
function initExtension() {
  let body = document.getElementById("body");

  // Set Up Menu Bars.
  appendMenuBar(body, "Templates", getTemplate, data.templates, null);
  // appendMenuBar(body, "Custom", getTemplate, data.custom, () => {});
  appendMenuBar(body, "Favorite", getFavorite, data.favorites, 
    () => {
      let url = chrome.extension.getURL("prompt.html");
      window.open(url, 'popUpWindow','height=300,width=700,left=50,top=50,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
    });

  // Create other section.
  let logo = document.createElement("img");
  logo.src = "icons/icon300.png";
  logo.className = "bigIcon";
  logo.onclick = () => combine();

  let text = document.createElement("div");
  text.innerHTML = "Click on a template to rearrange your open tabs in the desired arrangement.<br> If you have less tabs open than the template requires, the template will be filled with mnew tabs.<br> Click on a favorite to open the arrangement of your favorite sites.<br>Clicking on the logo will recoll;ect your tabs into a single window.";

  // Other section.
  body.appendChild(getMenuLayout("About", [
    logo, text
  ]));
}


// Append a menu bar to a parent.
function appendMenuBar(parent, title, generator, options, additionFunc) {
  // Make the menu.
  let menu = getMenuLayout(title);

  // Add the templates as a selection bar.
  appendSelectionBar(menu, options, generator, additionFunc);

  parent.appendChild(menu);
}

function getMenuLayout(title, contents = null) {
  let menu = document.createElement("div");
  menu.className = "menu";
  menu.id = title;

  // Add the title bar.
  appendTitleBar(menu, title);

  if (contents) {
    let info = document.createElement("div");
    info.className = "baseLayout";

    for (content of contents) {
      info.appendChild(content);
    }

    menu.appendChild(info);
  }

  return menu;
}

function appendTitleBar(parent, title) {
  let titleBar = document.createElement("div");
  titleBar.className = "dark titleBar";
  titleBar.textContent = title;
  parent.appendChild(titleBar);
}

// Append a selection bar to a parent.
function appendSelectionBar(parent, options, generator, additionFunc) {
  let bar = document.createElement("div");
  bar.className = "selectionBar";

  for (option in options) {
    bar.appendChild(generator(option, options[option]));
  }

  if (additionFunc) {
    let addition = document.createElement("div")
    addition.className = "selection flexDisplay";
    
    let additionScreen = document.createElement("div");
    additionScreen.className = "softBorder slow additionButton";
    additionScreen.innerHTML = "+";
    additionScreen.style.marginBottom = (BLOCK_MARGIN + 1) + "%";
    additionScreen.onclick = additionFunc;
    addition.appendChild(additionScreen);
    bar.appendChild(addition);
  }

  parent.appendChild(bar);
}

// Apeend selction bar to a parent. 
function getTemplate(name, template) {
  let selection = document.createElement("span");
  selection.className = "clickableChildren selection";
  selection.name = name;
  selection.onclick = () => resize(template);

  appendvView(selection, template);

  return selection;
}

function appendvView(ele, winds, urls = []) {
  let i = 0;
  for (key in winds) {
    let wind = winds[key];
    let block = document.createElement("div");
    block.className = "purpleTint slow softBorder absolute imgHolder";

    // Set Up dimensions.
    block.style.left = (100 * wind.x) + "%";
    block.style.top = (100 * wind.y) + "%";

    // Height and width with margin size.
    block.style.width =  ((100 * wind.width) - BLOCK_MARGIN) + "%";
    block.style.height = ((100 * wind.height) - BLOCK_MARGIN) + "%";

    if (urls.length != 0) {
      let url = urls[i];
      let imgsSrc = url + "favicon.ico";
      let img = document.createElement("img");
      img.className = "icon";
      img.src = imgsSrc;
      block.appendChild(img);
    }

    i++;
    ele.appendChild(block);
  }
}

function getFavorite(name, favorite) {
  let option1 = document.createElement("span");
  option1.className = "clickableChildren selection";
  appendvView(option1, data.templates[favorite.template], favorite.paths);
  option1.onclick = () => resize(data.templates[favorite.template], 
    favorite.paths);

  return option1;
}

function clearElement(ele) {
  while (ele.firstChild) {
    ele.removeChild(ele.firstChild);
  }
}

// Initialize the extension.
// document.addEventListener('DOMContentLoaded', initExtension);
 
