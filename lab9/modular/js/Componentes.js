import React, { useState, useEffect} from 'react';
import './Componentes.css'

const App = () => {
  const botones = [
    {key: '17', value:'C'},
    {key: '18', value: '+/-'},
    {key: '16', value: '%'},
    {key: '13', value: '/'},
    {key: '7', value: 7},
    {key:'8', value: 8},
    {key: '9', value: 9},
    {key:'12', value:'*'},
    {key: '4', value: 4},
    {key: '5', value: 5},
    {key: '6', value: 6},
    {key: '11', value:'-'},
    {key:'1', value: 1},
    {key:'2', value: 2},
    {key:'3', value: 3},
    {key: '10', value: '+'},
    {key: '0', value: 0},
    {key: '15', value: '.'},
    {key:'14', value:'='},
  ]

  const [text, setText] = useState(0)
  const [num1, setNum1] = useState(0)
  const [operador, setOperador] = useState()

  const action = (valor) => {
    switch (valor) {
      case 0:
        if(String(text).length<9){
          setText(parseFloat(String(text) + String(valor)))
        }
        else{
          setText(parseFloat(String(text)))
        }
        break;
      case 1:
        if(String(text).length<9){
          setText(parseFloat(String(text) + String(valor)))
        }
        else{
          setText(parseFloat(String(text)))
        }        
        break;
      case 2:
        if(String(text).length<9){
          setText(parseFloat(String(text) + String(valor)))
        }
        else{
          setText(parseFloat(String(text)))
        }        
        break;  
      case 3:
        if(String(text).length<9){
          setText(parseFloat(String(text) + String(valor)))
        }
        else{
          setText(parseFloat(String(text)))
        }
        break;
      case 4:
        if(String(text).length<9){
          setText(parseFloat(String(text) + String(valor)))
        }
        else{
          setText(parseFloat(String(text)))
        }
        break;
      case 5:
        if(String(text).length<9){
          setText(parseFloat(String(text) + String(valor)))
        }
        else{
          setText(parseFloat(String(text)))
        }
        break;
      case 6:
        if(String(text).length<9){
          setText(parseFloat(String(text) + String(valor)))
        }
        else{
          setText(parseFloat(String(text)))
        }
        break;
      case 7:
        if(String(text).length<9){
          setText(parseFloat(String(text) + String(valor)))
        }
        else{
          setText(parseFloat(String(text)))
        }
        break;
      case 8:
        if(String(text).length<9){
          setText(parseFloat(String(text) + String(valor)))
        }
        else{
          setText(parseFloat(String(text)))
        }
        break;  
      case 9:
        if(String(text).length<9){
          setText(parseFloat(String(text) + String(valor)))
        }
        else{
          setText(parseFloat(String(text)))
        }
        break;
      case '+':
        setNum1(text)
        setText('')
        setOperador('+')
        break;
      case '-':
        setNum1(text)
        setText('')
        setOperador('-')
        break;     
      case '*':
        setNum1(text)
        setText('')
        setOperador('*')
        break;
      case '/':
        setNum1(text)
        setText('')
        setOperador('/')
        break;
      case '=':
        operacion(num1,text,operador)
        break;    
      case '.':
        if(String(text).length<9){
          setText(text + valor)
        }
        else{
          setText(parseFloat(String(text)))
        }
        break; 
      case '%':
        setNum1(text)
        setText('')
        setOperador('MOD')
        break; 
      case 'C':
        setText('') 
        break; 
      case '+/-':
        if(String(text).length<9){
          setText(text * -1)
        }
        else{
          setText(parseFloat(String(text)))
        }
        break;
    }
  }

  const operacion =(num1, num2, operador)=>{
    switch(operador) {
      case '+':
        if((num1+num2)>999999999){
          setText('ERROR')
        }
        else {
          setText(num1 + num2)
        }
        break;
      case '-':
        setText(num1 - num2)
        break;
      case '*':
        if((num1*num2)>999999999){
          setText('ERROR')
        }
        else {
          setText(num1 * num2)
        }
        break;
      case '/':
        setText(num1 / num2)
        break;
      case 'MOD':
        setText(num1 % num2)
        break;
    }
  }

  return (
    <div className='container'>
      <div className = 'head'>
        <h1 className='h1'>Calculadora</h1>
        <input placeholder = {String(text)} readOnly='readOnly'></input> 
      </div>
      <div className = 'content'>
        {botones.map((boton) => (
            <button className='button' key={boton.key} onClick={()=>{action(boton.value)}}>{boton.value}</button>
        ))}
      </div>
    </div>
  );
};

export default App;
