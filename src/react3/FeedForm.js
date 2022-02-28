










import React, { Component } from 'react'
import EmployeeData from './EmployeeData'
export class FeedForm extends Component {
    state = {
        name: "",
        deptt: "",
        rating: "",
        employee: [],
        redirect: true
    }
    eventUp=(event)=>{
        this.setState({[event.target.name]:event.target.value,});
    }

    ButtonSubmit=(e)=>{
        e.preventDefault()
        this.setState({
            employee:[...this.state.employee,{
                name: this.state.name,
                deptt: this.state.deptt,
                rating: this.state.rating
            }],
            name: "",
            deptt: "",
            rating: "",
            redirect: !this.state.redirect
        })
    }

    goBack = ()=>{
        this.setState({redirect:!this.state.redirect})
    }
    render() {
        console.log(this.state.employee)
        return (
           <>
            <div className='body'>
               {this.state.redirect && ( <>
                <div className='formDiv'>
                <h1>EmployeeFeedBack From</h1>
               <form onSubmit={this.ButtonSubmit} >    
                     <span>Name:</span>
                     <input name='name' id='name' type="text" value={this.state.name}  onChange={this.eventUp}/> <br></br>
            
                     <span>Department:</span>
                     <input name='deptt' id='deptt' type="text" value={this.state.deptt} onChange={this.eventUp}/> <br></br>
            
                     <span>Rating:</span>
                     <input name='rating' id='rating' type="text" value={this.state.rating} onChange={this.eventUp}/> <br></br>
            
                     <button type='Submit' >Submit</button>   
                     {/* onClick={this.ButtonSubmit} */}
                 </form>
                </div>    
               </>)}
               
               {!this.state.redirect && (<EmployeeData  fillData={this.state.employee} backFunc = {this.goBack}/>) }
                {/* <div className='displyBlock'>
                {this.state.employee.map((val, index)=>{
                     return <EmployeeData fillData={val}/> 
                })}
                </div> */}
                </div>  
             
           </>      
             
        )
      }
}

export default FeedForm