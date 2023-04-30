"use strict" ;
import { Keyboard } from "./keyboardClass.js" ;
import "./style.scss" ;


let keyboard = new Keyboard ;

keyboard.renderRoot() ;
keyboard.renderKeyboard() ;
keyboard.showDescription() ;
keyboard.listener() ;