var MOUSE_UP = 'ontouch' in window
  /* istanbul ignore next */ ? 'touchend'
  /* istanbul ignore next */ : 'mouseup'
  ;
var selection =getSelection();


function getSelectionText(){
    var selectedText = "";
    if (window.getSelection){ // all modern browsers and IE9+
        selectedText = window.getSelection().toString();
    }
    return selectedText;
  }

  function removeFirstMouseUp() {
    removeFirstMouseUp = function(){};
    document.removeEventListener( MOUSE_UP , firstMouseUp );
  }

  function firstMouseUp( e ) {
    if ( selection.toString().trim() ) {
      removeFirstMouseUp();
    var thetext = getSelectionText();
    if (thetext.length > 0){ // check there's some text selected
          console.log(thetext) ;// logs whatever textual content the user has selected on the page
    }
   var url = "https://fanyi.youdao.com/openapi.do?keyfrom=xxx&key=xxx&type=data&doctype=json&version=1.1&q=" + thetext;
   var xhr = new XMLHttpRequest();
   xhr.open("GET", url, true);
   xhr.onreadystatechange = function() {
   if (xhr.readyState == 4) {
      console.log(xhr.responseText);
      var resp = JSON.parse(xhr.responseText);
    }
  }
      xhr.send();
  }

  document.addEventListener(MOUSE_UP, firstMouseUp);
}

document.addEventListener(MOUSE_UP, firstMouseUp);
