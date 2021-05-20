import React, { Component } from 'react'

const Context =React.createContext();
// redux function 
const reducer =(state,action)=> {
  //  le type de l'action 
switch(action.type){
  case "DELETE_CONTACT": 
  return {
    // payload : stocker data 
    contacts:state.contacts.filter((ele)=>ele.id!==action.payload)
     
   } ;

   case "ADD_CONTACT": 
   return {
     // payload : stocker data 
     // une nouvel ecritur en js [ nuveau obj ,les encien objs]
     contacts:[...state.contacts,action.payload]
      
    } ;
   
   
   default :
   return state;
}
}

// default si tu veut expoeter seulemt un seul chose 
export  class Provider extends Component {
    state ={
        contacts : [
          {id :1,name : "yassine", tel:"087454",email:"ùabr@gmail.com"},
          {id :2,name : "mabrouk", tel:"087454",email:"ùabr@gmail.com"},
          {id :3,name : "Amine", tel:"087454",email:"ùabr@gmail.com"},
        ],
        dispatch :action => this.setState(state =>reducer(state,action))

    };

    render() {
        return (
        <Context.Provider value={this.state}>
           {this.props.children}
        </Context.Provider> 
        )
    }
}
//pour consommer ce provider 
export const Consumer =Context.Consumer;
