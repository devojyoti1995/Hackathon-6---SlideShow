import React, {Component, useState} from "react";
import '../styles/App.css';
import slides from '../data';

const App = (props) => {
  const arr = props.slides;
  //console.log(arr[0].title);
  const[i,useNext]=useState(0);
  function goNextSlide(){
     if(i != arr.length-1){
       useNext(i+1);
     }
  }
  function goPrevSlide(){
    if(i != 0){
      useNext(i-1);
    }
  }

  function reStart(){
    
      useNext(0);
  }
  return (
    <>
      <h1 data-testid="title">{arr[i].title}</h1>
      <p data-testid="text">{arr[i].text}</p>
      <button data-testid="button-next" onClick={goNextSlide} disabled={i == arr.length-1}>Next</button>
      <button data-testid="button-prev" onClick={goPrevSlide} disabled={i == 0}>Prev</button>
      <button data-testid="button-restart" onClick={reStart} disabled={i == 0}>Restart</button>
    </>
  )
}


export default App;
