import React, { Component } from 'react'

 class EmployeeData extends Component {
  render(props) {
      console.log(props)
      const values = this.props.fillData;
    return (
      <>
        <h1>EMPLOYEE FEEDBACK DATA</h1>
        <div className='displyBlock'>

        {values.length>0 && values.map((mapVal)=>{
            return (
                // <div className='displyBlock'>
                <div className='displayEmp'>
                         Name: {mapVal.name} <br></br>
                          Department: {mapVal.deptt} <br></br>
                           Rating:{mapVal.rating}</div>
                
                // </div>
            )
        })}
        </div>

        <button className='' onClick={this.props.backFunc}>Go Back</button>
      </>
    )
  }
}

export default EmployeeData