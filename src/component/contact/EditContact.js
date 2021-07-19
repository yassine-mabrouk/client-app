import React, { Component } from 'react'
import {Consumer} from '../context';
import InputGroup from '../helper/InputGroup'
import axios from 'axios'

 class EditContact extends Component {
     state={
         name:"",
         email:"",
         phone:"",
         errors:{}
     }
    setContact = ()=> {
        this.setState({
            name: "",
            email:"",
            phone:"",
     
        
        })
    }
    // $event :varibale globale en reactJs represente seulemtn par e 
//    // this is imortant 
//     e: evenemt declenche 
//     e.target :pemet d'acceder aux elemetn du dom 

      onChangeInput =(e) => this.setState( {
        [e.target.name]:e.target.value
      })

     submit =async (dispatch ,size,e)=> {
          //pour stoper le submet de data 
          e.preventDefault();
          console.log(this.state)
          //dispatch une fonction qui a en parametr un objet de deuct filed type and payload 
      const {name, email,phone}=this.state;
      if (name== "" ){
          this.setState({
              errors:{name:"The name is requiered"}
          })
         return;
      }
      if (email == ""){
        this.setState({
            errors:{email:"The email is requiered"}
        })
       return;
    }

    if (phone == ""){
        this.setState({
            errors:{phone:"The phone is requiered"}
        })
       return;
    }
    // ajouter un contact dans server 
    const updateContact ={
        id:size+1,
        name:name,
        email:email,
        phone:phone
    };
       const id =this.props.match.params.id ;
       const res =await axios.put("https://jsonplaceholder.typicode.com/users/"+id,updateContact);
       dispatch({
                type:"UPDATE_CONTACT",
                payload:res.data
            });
      
       this.setState({
            name:"",
            email:"",
            phone:"", 
        })
        // ajouter un redirection vers la liset e des contact 
        this.props.history.push('/');
      };

      //cette fonction et executer lores dl'exucution du component 
     async componentDidMount(){
        // pour recuperer le sygment dynamique 
      const id =this.props.match.params.id;
      const res=await axios.get("https://jsonplaceholder.typicode.com/users/"+id);
     const{name,email,phone}=res.data;
      this.setState({
          name:name,
          email:email,
          phone:phone
      });
    } 

    render() {
        const {name,email,phone,errors}= this.state;

        return (
            <Consumer>
           
           { value => {
               const {dispatch}= value;
              return (
                <div>
                <form onSubmit={this.submit.bind(this,dispatch,value.contacts.length)}>
                  <div class="card">
                      <div className="card-body">
                          <h4 className="card-title">Add Contact</h4>
                          <div className="card-text">
                          <InputGroup
                          label="Name"
                          name="name"
                          type="text"
                          onChange={this.onChangeInput}
                          value={name}
                          error={errors.name}
                          />
                       
                       <InputGroup
                          label="Email"
                          name="email"
                          type="text"
                          onChange={this.onChangeInput}
                          value={email}
                          error={errors.email}
                          />
                             <InputGroup
                          label="Phone"
                          name="phone"
                          type="text"
                          onChange={this.onChangeInput}
                          value={phone}
                          error={errors.phone}
                          />
                          
                            <button  className="btn btn-primary "  > Edit Contact </button>
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
export default EditContact;