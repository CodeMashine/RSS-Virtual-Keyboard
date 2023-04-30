class Keyboard {
  constructor() {
    this.language = localStorage.getItem("language") || "EN";
    this.case = "normal";
    this.alphabetEN = {
      Backquote: { normal: "`", upperCase: "~" },
      Digit1: { normal: "1", upperCase: "!" },
      Digit2: { normal: "2", upperCase: "@" },
      Digit3: { normal: "3", upperCase: "#" },
      Digit4: { normal: "4", upperCase: "$" },
      Digit5: { normal: "5", upperCase: "%" },
      Digit6: { normal: "6", upperCase: "^" },
      Digit7: { normal: "7", upperCase: "&" },
      Digit8: { normal: "8", upperCase: "*" },
      Digit9: { normal: "9", upperCase: "(" },
      Digit0: { normal: "0", upperCase: ")" },
      Minus: { normal: "-", upperCase: "_" },
      Equal: { normal: "=", upperCase: "+" },
      Backspace: { normal: "Backspace", upperCase: "Backspace" },
      Tab: { normal: "Tab", upperCase: "Tab" },
      KeyQ: { normal: "q", upperCase: "Q" },
      KeyW: { normal: "w", upperCase: "W" },
      KeyE: { normal: "e", upperCase: "E" },
      KeyR: { normal: "r", upperCase: "R" },
      KeyT: { normal: "t", upperCase: "T" },
      KeyY: { normal: "y", upperCase: "Y" },
      KeyU: { normal: "u", upperCase: "U" },
      KeyI: { normal: "i", upperCase: "I" },
      KeyO: { normal: "o", upperCase: "O" },
      KeyP: { normal: "p", upperCase: "P" },
      BracketLeft: { normal: "[", upperCase: "{" },
      BracketRight: { normal: "[", upperCase: "}" },
      Backslash: { normal: "\\", upperCase: "|" },
      Delete: { normal: "Del", upperCase: "Del" },
      CapsLock: { normal: "CapsLock", upperCase: "CapsLock" },
      KeyA: { normal: "a", upperCase: "A" },
      KeyS: { normal: "s", upperCase: "S" },
      KeyD: { normal: "d", upperCase: "D" },
      KeyF: { normal: "f", upperCase: "F" },
      KeyG: { normal: "g", upperCase: "G" },
      KeyH: { normal: "h", upperCase: "H" },
      KeyJ: { normal: "j", upperCase: "J" },
      KeyK: { normal: "k", upperCase: "K" },
      KeyL: { normal: "l", upperCase: "L" },
      Semicolon: { normal: ";", upperCase: ":" },
      Quote: { normal: `'`, upperCase: `"` },
      Enter: { normal: "Enter", upperCase: "Enter" },
      ShiftLeft: { normal: "Shift", upperCase: "Shift" },
      KeyZ: { normal: "z", upperCase: "Z" },
      KeyX: { normal: "x", upperCase: "X" },
      KeyC: { normal: "c", upperCase: "C" },
      KeyV: { normal: "v", upperCase: "V" },
      KeyB: { normal: "b", upperCase: "B" },
      KeyN: { normal: "n", upperCase: "N" },
      KeyM: { normal: "m", upperCase: "M" },
      Comma: { normal: ",", upperCase: "<" },
      Period: { normal: "/", upperCase: ">" },
      Slash: { normal: ".", upperCase: "?" },
      ArrowUp: { normal: "↑", upperCase: "↑" },
      ShiftRight: { normal: "Shift", upperCase: "Shift" },
      ControlLeft: { normal: "Ctrl", upperCase: "Ctrl" },
      Super: { normal: "Super", upperCase: "Super" },
      AltLeft: { normal: "Alt", upperCase: "Alt" },
      Space: { normal: "    ", upperCase: "    " },
      AltRight: { normal: "Alt", upperCase: "Alt" },
      // ContextMenu:{normal:"`" , upperCase:"~"} ,
      ControlRight: { normal: "Ctrl", upperCase: "Ctrl" },
      ArrowLeft: { normal: "←", upperCase: "←" },
      ArrowDown: { normal: "↓", upperCase: "↓" },
      ArrowRight: { normal: "→", upperCase: "→" },
    };
    this.alphabetRU = {
      Backquote: { normal: "ё", upperCase: "Ё" },
      Digit1: { normal: "1", upperCase: "!" },
      Digit2: { normal: "2", upperCase: '"' },
      Digit3: { normal: "3", upperCase: "№" },
      Digit4: { normal: "4", upperCase: ";" },
      Digit5: { normal: "5", upperCase: "%" },
      Digit6: { normal: "6", upperCase: ":" },
      Digit7: { normal: "7", upperCase: "?" },
      Digit8: { normal: "8", upperCase: "*" },
      Digit9: { normal: "9", upperCase: "(" },
      Digit0: { normal: "0", upperCase: ")" },
      Minus: { normal: "-", upperCase: "_" },
      Equal: { normal: "=", upperCase: "+" },
      Backspace: { normal: "Backspace", upperCase: "Backspace" },
      Tab: { normal: "Tab", upperCase: "Tab" },
      KeyQ: { normal: "й", upperCase: "Й" },
      KeyW: { normal: "ц", upperCase: "Ц" },
      KeyE: { normal: "у", upperCase: "У" },
      KeyR: { normal: "к", upperCase: "К" },
      KeyT: { normal: "е", upperCase: "Е" },
      KeyY: { normal: "н", upperCase: "Н" },
      KeyU: { normal: "г", upperCase: "Г" },
      KeyI: { normal: "ш", upperCase: "Ш" },
      KeyO: { normal: "щ", upperCase: "Щ" },
      KeyP: { normal: "з", upperCase: "З" },
      BracketLeft: {normal: "х",upperCase: "Х",},
      BracketRight: { normal: "ъ", upperCase: "Ъ" },
      Backslash: { normal: "\\", upperCase: "/" },
      Delete: { normal: "Del", upperCase: "Del" },
      CapsLock: { normal: "CapsLock", upperCase: "CapsLock" },
      KeyA: { normal: "ф", upperCase: "Ф" },
      KeyS: { normal: "ы", upperCase: "Ы" },
      KeyD: { normal: "в", upperCase: "В" },
      KeyF: { normal: "а", upperCase: "А" },
      KeyG: { normal: "п", upperCase: "П" },
      KeyH: { normal: "р", upperCase: "Р" },
      KeyJ: { normal: "о", upperCase: "О" },
      KeyK: { normal: "л", upperCase: "Л" },
      KeyL: { normal: "д", upperCase: "Д" },
      Semicolon: { normal: "ж", upperCase: "Ж" },
      Quote: { normal: `э`, upperCase: `Э` },
      Enter: { normal: "Enter", upperCase: "Enter" },
      ShiftLeft: { normal: "Shift", upperCase: "Shift" },
      KeyZ: { normal: "я", upperCase: "Я" },
      KeyX: { normal: "ч", upperCase: "Ч" },
      KeyC: { normal: "с", upperCase: "С" },
      KeyV: { normal: "м", upperCase: "М" },
      KeyB: { normal: "и", upperCase: "И" },
      KeyN: { normal: "т", upperCase: "Т" },
      KeyM: { normal: "ь", upperCase: "Ь" },
      Comma: { normal: "б", upperCase: "Б" },
      Period: { normal: "ю", upperCase: "Ю" },
      Slash: { normal: ".", upperCase: "," },
      ArrowUp: { normal: "↑", upperCase: "↑" },
      ShiftRight: { normal: "Shift", upperCase: "Shift" },
      ControlLeft: { normal: "Ctrl", upperCase: "Ctrl" },
      Super: { normal: "Super", upperCase: "Super" },
      AltLeft: { normal: "Alt", upperCase: "Alt" },
      Space: { normal: "    ", upperCase: "    " },
      AltRight: { normal: "Alt", upperCase: "Alt" },
      // ContextMenu:{normal:"`" , upperCase:"~"} ,
      ControlRight: { normal: "Ctrl", upperCase: "Ctrl" },
      ArrowLeft: { normal: "←", upperCase: "←" },
      ArrowDown: { normal: "↓", upperCase: "↓" },
      ArrowRight: { normal: "→", upperCase: "→" },
      }
  } 

  renderRoot() {
    const body = document.querySelector("body") ;
    const root = document.createElement("div") ;
    root.className = "keyboard" ;
    const textArea = document.createElement("textarea") ;
    textArea.className = "keyboard__text-field" ;
    
    const keyboard = document.createElement("div") ;
    keyboard.className = "keyboard__area" ;
    
    const description = document.createElement("div") ;
    description.className = "keyboard__description" ;
    
    root.append(textArea, keyboard , description);
    
    body.append(root) ;

    // textArea.innerHTML = this.renderArea();



    // let textArea = this.renderArea();
    // let keyboard = this.renderKeyboard();
    // debugger;
  }

  // renderArea() {
  //   const textArea = document.querySelector(".keyboard__text-field");
  //   // textArea.className = "keyboard__text-field";
  //   // textArea.style.width = "100%";
  //   // textArea.rows = "20" ;
  //   // textArea.cols = "80" ;
  //   return textArea;
  // }

  alphabetCreator() {
    let lang = "alphabet" + this.language;
    let alphabet = this[lang];
    return alphabet;
  }

  renderKeyboard() {
    let alphabet = this.alphabetCreator();
    // console.log("render keyboard",alphabet) ;
    let keyboard = document.querySelector(".keyboard__area");
    // keyboard.className = "keyboard__area";
    for (let key in alphabet) {
      let square = document.createElement("div");
      square.className = `keyboard__square keyboard__square__${key} `;
      square.dataset.key = key;
      square.innerText = alphabet[key].normal;
      keyboard.append(square);
    }
    // this.listener() ;
    return keyboard;
  }

  listener() {
    let alphabet = this.alphabetCreator();
    // console.log("listener",alphabet) ;
    let keys = Object.keys(alphabet);
    let textArea = document.querySelector(".keyboard__text-field");

    function caseToggler(store) {
      let alphabet = store.alphabetCreator();
      // console.log("caseToggler");
      let squares = document.querySelectorAll(".keyboard__square");
      for (let i = 0; i < squares.length; i++) {
        squares[i].innerText = alphabet[squares[i].dataset.key][store.case];
      }
    }

    function capsListner(store) {
      console.log("caps listner work");
      let caps = document.querySelector(".keyboard__square__CapsLock");
      let shiftR = document.querySelector(".keyboard__square__ShiftRight");
      let shiftL = document.querySelector(".keyboard__square__ShiftLeft");

      let shiftPressed = shiftR.classList.contains("pressed") || shiftL.classList.contains("pressed") ;
      let capsPressed = caps.classList.contains("pressed") ;


      if ( capsPressed && shiftPressed ) {
        store.case = "normal";
        // caseToggler(store);
        // console.log("upper work");
      } else if ( capsPressed || shiftPressed ) {
        // console.log(capsPressed && shiftPressed) ;
        store.case = "upperCase";
        // console.log("upper not work");
      }else{
        store.case = "normal";
      }
      caseToggler(store);

    }

    function shineKey(code) {
      let key = document.querySelector(`.keyboard__square__${code}`);
      if (key){
        key.classList.toggle("pressed");
      }
    }

    function langToggler(store) {
      let ctrlL = document.querySelector(".keyboard__square__ControlLeft");
      let altLeft = document.querySelector(".keyboard__square__AltLeft");
      // console.log("langTogler") ;
    if (
      ctrlL.classList.contains("pressed") &&
      altLeft.classList.contains("pressed")
    ){
       if (store.language === "EN") {
        store.language = "RU";
      } else {
        store.language = "EN";
      }
      caseToggler(store) ;
    }


    store.showDescription() ;

    localStorage.setItem("language" , store.language) ;
  }
  
    function insert(area , pos , letter , toDelete = 0){
      let arr = Array.from(area.value) ;

      arr.splice(pos,toDelete,letter) ;
      area.value = arr.join("") ;

      let caretPlace = pos + 1 ;

      if( toDelete != 0){
       caretPlace = pos ;
      } 
        area.selectionStart = caretPlace  ;
        area.selectionEnd = caretPlace  ;
    }

    function keyboardHandler(event, store) {
      let position = textArea.selectionStart ;
      console.log('Caret position:' , position);
      // console.dir(textArea);
      let { code } = event ;
      console.log("event" , code) ;
      let alphabet = store.alphabetCreator();

      if (!keys.includes(code)) return ;
      
      shineKey(code);
      
      if ( code === "Super" ) return ;

      event.preventDefault();

      if (code === "Backspace") {
        insert(textArea, position - 1 , "" , 1) ;
      } else if(code === "Delete"){
        insert(textArea, position , "" , 1) ;
      } else if (code === "Tab") {
        insert(textArea, position , "\t") ;
      } else if (code === "Space") {
        insert(textArea, position , " ") ;
      } else if (code === "CapsLock") {
        capsListner(store);
        shineKey(code);
      } else if (code.includes("Shift")) {
        capsListner(store);
      } else if (code === "Enter") {
        insert(textArea, position , "\n") ;
      }else if(code.includes("Control") || code.includes("Alt")){
        langToggler(store) ;
      }else {
        let letter = alphabet[code][store.case];
        insert(textArea, position , letter) ;
      }
    }

    window.addEventListener("keydown", (event) => keyboardHandler(event, this));
    window.addEventListener("keyup", (event) => {
      shineKey(event.code);
      capsListner(this);

    });
    

    // click handler

    let keyboardField = document.querySelector(".keyboard__area") ;
    // let textarea = document.querySelector(".keyboard__area") ;



    keyboardField.addEventListener("pointerdown", (event) => {
      // let position = textArea.selectionStart ;
      // console.log('Caret position:' , position);
      event.preventDefault() ;
      if( !event.target.classList.contains("keyboard__square") ) return ;
      let fakeEvent = new Event("keydown") ;
      fakeEvent.key = event.target.dataset.key ;
      fakeEvent.code = event.target.dataset.key ;
      window.dispatchEvent(fakeEvent) ;
      // localStorage.setItem("pressed" ,event.target.className ) ;
    });

    keyboardField.addEventListener("pointerup", (event) => {
      event.preventDefault() ;
      if( !event.target.classList.contains("keyboard__square") ) return ;
      let code = document.querySelector(`.${event.target.classList[1]}`).dataset.key ; 

      shineKey(code);
      capsListner(this);
    });

  }

  showDescription(){
    let container = document.querySelector(".keyboard__description") ;
    container.innerHTML = "" ;

    let p1 = document.createElement("p") ;
    p1.className = "keyboard__made-in" ;
    
    let p2 = document.createElement("p2") ;
    p2.className = "keyboard__switch-lang" ;


    let { language } = this ;
    
    let createMessage ;
    let changeMessage ;

    if ( language === "RU" ){
      createMessage = "Клавиатура создана в Ubuntu 22.04" ;
      changeMessage = "Для смены языка нажмите левые Ctrl + Alt" ;
    } else {
      createMessage = "Keboard created in Ubuntu 22.04" ;
      changeMessage = "Press left Ctrl + Alt to change the language" ;
    }

    p1.innerText = createMessage ;
    p2.innerText = changeMessage ;
    
    container.append( p1 ,p2 ) ;
  }
 
}

export { Keyboard };
