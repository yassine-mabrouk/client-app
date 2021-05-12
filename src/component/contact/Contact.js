import React, { Component } from 'react'
import './contact.css'
import PropTypes from 'prop-types'


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
        deleteContact= () =>{
            this.props.deleteContact();
        }
        
    render() {
        const {name ,tel,email}=this.props.data;

        return (
            
            <div>
               <div className="card">
                   <div className="card-body">
                       <div className="card-title">
                       <h4 className="card-title">Name :{name}
                       <i onClick={this.showContact.bind(this,name)} className="fa fa-sort-down "></i>
                       <i style ={{color:'red',float:'right' ,cursor:'pointer'}} onClick={this.deleteContact} className="fa fa-times "></i>
                       </h4>
                       </div>
                       <div className="cart-text">
                        {(this.state.showContactToogle) ?(
                            <ul className="list-group">
                            <li className="list-group-item">Phone :{tel}</li>
                            <li className="list-group-item">Email:{email}</li>
                            <li className="list-group-item">Phone :{tel}</li>
                            </ul>
                        ): null}
                        
                           <button  onClick={this.showmore.bind(this,name)}  className="btn btn-sm btn-primary ">Read more </button>
                            {(this.state.showDescription) ? (
                                  <div><p className="lead">
                                  {name} est un ingenieur en informatique avec une grande experience ,ouverte pour le travail <br/> 
                                  Email:{email}<br/> 
                                  phone:{tel} <br/>
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

// set a default input 

Contact.defaultProps={
    data: {
        name :"My name ",
        tel: "000000",
        email:"Myemail@gmail.com"
    }
}
// pour la validation 
Contact.propTypes={
    name:PropTypes.string.isRequired

}

export default Contact;
