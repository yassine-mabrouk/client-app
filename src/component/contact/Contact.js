import React, { Component } from 'react'
import './contact.css'
import PropTypes from 'prop-types'
import {Consumer} from '../context';
import axios from 'axios'
import {Link} from 'react-router-dom'
 class Contact extends Component {
    
        // creation d'un state 
        state = {
            showContactToogle :true,
            showDescription: false 
        }
        showContact (name){
            this.setState({
               showContactToogle:!this.state.showContactToogle 
            });        
        }
        showmore (name){
            this.setState({
                showDescription:!this.state.showDescription
            })
        }
        // il faut que la fonction soit arrow function pour lire date in props 
        deleteContact= async (id,dispatch) =>{
            // supprimer un contact dans le serverur $
            try{
         const res=  await axios.delete("https://jsonplaceholder.typicode.com/users/"+id);
             dispatch({
                type:"DELETE_CONTACT",
                payload:id
               });
            }catch(e){
                console.log("Canoot delete :"+e);
            }
        }
        
    render() {
        const {id,name ,phone,email}=this.props.data;
        return (
           <Consumer>
              
               {value => {
                   const { dispatch}=value;
                   return(
                    <div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                            <h4 className="card-title">Name :{name}
                            <i onClick={this.showContact.bind(this,name)} className="fa fa-sort-down "></i>
                               {/* /to est dynamique  */}
                            <Link  to={`/contact/edit/${id}`}>
                               <i style={{
                                   color:"orange",
                                   cursor:"pointer",
                                   float:"right",
                                   marginLeft:"10px"
                                
                               }} className="fa fa-pencil"></i>
                             </Link>
                            <i style ={{color:'red',float:'right' ,cursor:'pointer'}} onClick={this.deleteContact.bind(this,id,dispatch)} className="fa fa-times "></i>
                     
                        
                            </h4>
                            </div>
                            <div className="cart-text">
                             {(this.state.showContactToogle) ?(
                                 <ul className="list-group">
                                 <li className="list-group-item">Phone :{phone}</li>
                                 <li className="list-group-item">Email:{email}</li>
                                 <li className="list-group-item">Phone :{phone}</li>
                                 </ul>
                             ): null}
                             
                                <button  onClick={this.showmore.bind(this,name)}  className="btn btn-sm btn-primary ">Read more </button>
                                 {(this.state.showDescription) ? (
                                       <div><p className="lead">
                                       {name} est un ingenieur en informatique avec une grande experience ,ouverte pour le travail <br/> 
                                       Email:{email}<br/> 
                                       phone:{phone} <br/>
                                       Localion :casa-Rabat-Mohamadia
                                       Meci 
                                            </p></div>
                                 ):""}
                              
                            </div>
                           
                        </div>
                    </div>
                 </div>
                   )

               }
                   
                  
               }
           </Consumer>   
         
        )
    }
}

// set a default input 

Contact.defaultProps={
    data: {
        name :"My name ",
        phone: "000000",
        email:"Myemail@gmail.com"
    }
}
// pour la validation 
Contact.propTypes={
  //  name:PropTypes.string.isRequired

}

export default Contact;
