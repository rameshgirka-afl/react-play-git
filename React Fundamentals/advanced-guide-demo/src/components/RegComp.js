import React, { Component } from 'react'


// Parent Component ==> setState Action:: Re-Renders child comopnents as well 
// - unless:: shouldComponentUpdate: false. 
class RegComp extends Component {

  // shouldComponentUpdate: false 

  render() {
    console.log('Regular Comp render')
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegComp
