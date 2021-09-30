import React from 'react'
import {Button ,Icon, Label} from "semantic-ui-react"
class Buttons extends React.Component{
  constructor(){
    super()
    this.state ={
      likes : 0 , 
      hates  : 0
    }
  }
  render(){
  return (
    
      <div>
    <Button
      color='red'
      content='Like'
      icon='heart'
      label={{ basic: true, color: 'red', pointing: 'left', content: this.state.likes, }}
      onClick = {()=>this.setState(prevState => {
        return {
          likes : prevState.likes +1
        }
      })}
    />
    <Button
      basic
      color='blue'
      content='hate'
      icon='thumbs down outline'
      label={{
        as: 'a',
        basic: true,
        color: 'blue',
        pointing: 'left',
        content: this.state.hates,
      }}
      onClick = {()=>this.setState(prevState =>{
        return {
          hates : prevState.hates +1  
        }
      })}
    />
  </div>
   
  )
}
}

export default Buttons
