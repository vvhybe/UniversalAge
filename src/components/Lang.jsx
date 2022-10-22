import React from 'react'
import { useEffect } from 'react';

function Lang({lang, setLang}) {
  const Langs = ["en", "fr", "ar"];
  
  const switchLang = ()=>{
    let langIdx = Langs.indexOf(lang);
    (langIdx < Langs.length - 1) ? setLang(Langs[langIdx + 1]) : setLang(Langs[0]);
  }
  
  useEffect(()=>{
    localStorage.setItem("lang", lang);
  },[lang]);
  
  useEffect(()=>{
    setLang(localStorage.getItem("lang"));
    document.documentElement.lang = localStorage.getItem("lang");
  },[setLang]);


  return (
    <div className='lang'>
      <button onClick={switchLang}>{lang}</button>
    </div>
  )
}

export default Lang;