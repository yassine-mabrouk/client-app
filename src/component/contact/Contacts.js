import React, { Component } from 'react'
import Contact from './Contact';
import {Consumer} from '../context';
 class Contacts extends Component {

    // state ={
    //     contacts : [
    //       {id :1,name : "yassine", tel:"087454",email:"ùabr@gmail.com"},
    //       {id :2,name : "mabrouk", tel:"087454",email:"ùabr@gmail.com"},
    //       {id :2,name : "Amine", tel:"087454",email:"ùabr@gmail.com"},
    //     ]
    // };
    deleteContact =(id)=> {
        // alert("delete contact from contacts ")
        // const {contacts}= this.state;
        // // uliliser la methode filter 
        // const newContact =contacts.filter((ele)=>ele.id!==id)
       
        // this.setState({
        //   contacts:newContact
        // });
    }

    render() {
        return ( 
            <Consumer >
              {value=> (
                      <div>
                      {value.contacts.map((contact) => (
                          <Contact  
                          data ={contact} deleteContact ={this.deleteContact.bind (this,contact.id)} />
                      ))
                      }
                  </div>
              )}
            </Consumer>
        )
    
    }
}
export default Contacts;
