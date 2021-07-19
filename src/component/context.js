import React, { Component } from 'react'
import axios from 'axios'

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
     contacts:[action.payload,...state.contacts]
      
    } ;
    case "UPDATE_CONTACT": 
    return {
      // payload : stocker data 
      // une nouvel ecritur en js [ nuveau obj ,les encien objs]
      contacts:state.contacts.map(contact=> contact.id === action.payload.id ? contact=action.payload : contact)
       
     } ;
   
   
   default :
   return state;
}
}

// default si tu veut expoeter seulemt un seul chose 
export  class Provider extends Component {
    state ={
        contacts : [
          {id :1,name : "yassine", phone:"087454",email:"ùabr@gmail.com"},
          {id :2,name : "mabrouk", phone:"087454",email:"ùabr@gmail.com"},
          {id :3,name : "Amine", phone:"087454",email:"ùabr@gmail.com"},
        ],
        dispatch :action => this.setState(state =>reducer(state,action))
    };
    // le chargement du component 
  //  componentWillMount(){
  //    console.log("ana hay ")
  // //   axios.get('https://jsonplaceholder.typicode.com/users')
  // //   .then(res=> {
  // //    this.setState({
  // //      contacts:res.data
  // //    })
  // //  })
  // //  .catch(err=> console.log("kay error awld 3abd "))
  //  console.log('ana hay .;;;;;;')
  //  }
    // en vas utiliser autre methode  Await and async 
      async componentDidMount(){
        console.log("fin de chargement ");
        // attender justa la recupuration de data 
        try{
             const res =await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({
               contacts:res.data
             })
        }catch(e){console.log("coannot show contacts  ")}
     
      }

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