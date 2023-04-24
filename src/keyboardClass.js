class Keyboard {
  constructor() {
    this.language = "EN";
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
      Backspace: { normal: "Backspace", upperCase: "" },
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
    
    root.append(textArea, keyboard);
    
    body.append(root) ;

    // textArea.innerHTML = this.renderArea();



    // let textArea = this.renderArea();
    // let keyboard = this.renderKeyboard();
    // debugger;
  }

  renderArea() {
    const textArea = document.querySelector(".keyboard__text-field");
    // textArea.className = "keyboard__text-field";
    textArea.style.width = "100%";
    // textArea.rows = "20" ;
    // textArea.cols = "80" ;
    return textArea;
  }

  languageListener() {
    let lang = "alphabet" + this.language;
    console.log(this.language); 
    let alphabet = this[lang];
    console.log(alphabet) ;
    return alphabet;
  }

  renderKeyboard() {
    let alphabet = this.languageListener();
    console.log("render keyboard",alphabet) ;
    let keyboard = document.querySelector(".keyboard__area");
    // keyboard.className = "keyboard__area";
    for (let key in alphabet) {
      let square = document.createElement("div");
      square.className = `keyboard__area__square keyboard__area__square__${key} `;
      square.dataset.key = key;
      square.innerText = alphabet[key].normal;
      keyboard.append(square);
    }
    // this.listener() ;
    return keyboard;
  }

  listener() {
    let alphabet = this.languageListener();
    console.log("listener",alphabet) ;
    let keys = Object.keys(alphabet);
    let textArea = document.querySelector(".keyboard__text-field");
    // let keyboard = document.querySelector

    function caseToggler(store) {
      let alphabet = store.languageListener();
      console.log("caseToggler");
      let squares = document.querySelectorAll(".keyboard__area__square");
      for (let i = 0; i < squares.length; i++) {
        squares[i].innerText = alphabet[squares[i].dataset.key][store.case];
      }
    }

    function capsListner(store) {
      console.log("caps listner work");
      let caps = document.querySelector(".keyboard__area__square__CapsLock");
      let shiftR = document.querySelector(".keyboard__area__square__ShiftRight");
      let shiftL = document.querySelector(".keyboard__area__square__ShiftLeft");

      if (caps.classList.contains("pressed") ||
        shiftR.classList.contains("pressed") ||
        shiftL.classList.contains("pressed")
      ) {
        // store.case = store.case === "upperCase" ? "normal" : "upperCase"
        store.case = "upperCase";
        caseToggler(store);
        console.log("upper work");
      } else {
        console.log("upper not work");
        store.case = "normal";
        caseToggler(store);
      }
    }

    function shineKey(code) {
      let key = document.querySelector(`.keyboard__area__square__${code}`);
      // debugger ;
      if (key){
        key.classList.toggle("pressed");
      }
    }

    function langToggler(store) {
      let ctrlL = document.querySelector(".keyboard__area__square__ControlLeft");
      let altLeft = document.querySelector(".keyboard__area__square__AltLeft");
      console.log("langTogler") ;
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
  }

    function keyboardHandler(event, store) {
      let alphabet = store.languageListener();
      console.log(event.code);
      if (event.code === "Delete") return ;
      if (!keys.includes(event.code)) return ;

      // let upperPointer = capsListner() ;
      // let keys = document.querySelectorAll(".keyboard__area__square") ;
      shineKey(event.code);
      event.preventDefault();

      if (event.code === "Backspace") {
        textArea.value = textArea.value.slice(0, -1);
      } else if (event.code === "Tab") {
        textArea.value += "\t";
      } else if (event.code === "Space") {
        textArea.value += " ";
      } else if (event.code === "CapsLock") {
        capsListner(store);
        shineKey(event.code);
      } else if (event.code.includes("Shift")) {
        capsListner(store);
      } else if (event.code === "Enter") {
        textArea.value += "\n";
      // } else if (event.code === "Delete") {
        // textArea.value = textArea.slice(0 , textarea[]);
      // } else if (event.code.includes("Control") && event.code.includes("Alt")) {
      }else if(event.code.includes("Control") || event.code.includes("Alt")){
        langToggler(store) ;
        // do nothing ;
      }else {
        // let upperPointer = capsListner() ;
        textArea.value += alphabet[event.code][store.case];
        // debugger ;
      }
    }



    window.addEventListener("pointerdown", (event) => {
      console.log("click") ;
      console.log(event) ;
      console.log(event.target) ;
      console.log(event.target.dataset.key) ;
      if( !event.target.classList.contains("keyboard__area__square") ) return ;
      let fakeEvent = new Event("keydown") ;
      fakeEvent.code = event.target.dataset.key ;
      console.log(fakeEvent.type) ;
      window.dispatchEvent(fakeEvent) ;
    });

    window.addEventListener("pointerup", () => {
      let button = document.querySelector(".pressed") ;
      if(button.dataset.key === "CapsLock") return ;
      let fakeEvent = new Event("keyup") ;
      fakeEvent.code = button.dataset.key ;
      console.log(fakeEvent.type) ;
      window.dispatchEvent(fakeEvent) ;
    });

    window.addEventListener("keydown", (event) => keyboardHandler(event, this));
    window.addEventListener("keyup", (event) => {
      shineKey(event.code);
      capsListner(this);
    });
  }

  // langListner() {
  //   console.log("langlistener") ;
    
  //   function langToggler(store) {
  //       let root = document.querySelector(".keyboard") ;
  //       let keyboard = document.querySelector(".keyboard__area") ;
  //       let ctrlL = document.querySelector(".keyboard__area__square__ControlLeft");
  //       let altLeft = document.querySelector(".keyboard__area__square__AltLeft");
  //       console.log("langTogler") ;
  //     if (
  //       ctrlL.classList.contains("pressed") &&
  //       altLeft.classList.contains("pressed")
  //     ) {
  //       if (store.language === "EN") {
  //         store.language = "RU";
  //       } else {
  //         store.language = "EN";
  //       }
  //       console.dir(root.children) ;
  //       // root.children[1] = store.renderKeyboard() ;
  //       keyboard.innerHTML = "" ;
  //       store.renderKeyboard() ;
  //       // keyboard.append(store.renderKeyboard());
  //     }
  //   }

  //   window.addEventListener("keydown", () =>  langToggler(this));
  //   // altLeft.addEventListener("keydown", () => langToggler(this));
  // }
}

export { Keyboard };
