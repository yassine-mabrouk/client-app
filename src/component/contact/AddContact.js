import React, { Component } from 'react'
import {Consumer} from '../context';
 class AddContact extends Component {
     state={
         name:"",
         email:"",
         phone:""
     }
    setContact = ()=> {
        this.setState({
            name: "",
            email:"",
            phone:""
        })
    }
    // $event :varibale globale en reactJs represente seulemtn par e 
//    // this is imortant 
//     e: evenemt declenche 
//     e.target :pemet d'acceder aux elemetn du dom 

    onChangeInput =(e) => this.setState( {
        [e.target.name]:e.target.value
    })
      submit =(dispatch ,size,e)=> {
          //pour stoper le submet de data 
          e.preventDefault();
          console.log(this.state)
          //dispatch une fonction qui a en parametr un objet de deuct filed type and payload 
          dispatch({
            type:"ADD_CONTACT",
            payload:{
                id:size+1,
                name:this.state.name,
                email:this.state.email,
                tel:this.state.phone
            }
        })
        this.setState({
            name:"",
            email:"",
            tel:"",
        })
      };
    render() {
        const {name,email,phone}= this.state;

        return (
            <Consumer>
           
           { value => {
               const {dispatch}= value;
              return (
                <div>
                <form onSubmit={this.submit.bind(this,dispatch,value.contacts.length)}>
                  <div class="card">
                      <div class="card-body">
                          <h4 class="card-title">Add Contact</h4>
                          <div class="card-text">
                            <div class="form-group">
                                <label for="">Nom</label>
                                <input type="text" defaultValue={name} onChange={this.onChangeInput} name="name" id="" className="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="">Email</label>
                                <input type="text" name="email"defaultValue={email} onChange={this.onChangeInput} id="" className="form-control" />
                            </div>
                            <div class="form-group">
                                <label for="">Phone</label>
                                <input type="text" name="phone" id="" defaultValue={phone} onChange={this.onChangeInput} className="form-control" />
                            </div>
                            <button  className="btn btn-primary "  > add Contact </button>
                          </div>
                      </div>
                  </div>
                  </form>
                </div>
            )
            
           }}
            </Consumer>
        )

       
    }
}
export default AddContact;