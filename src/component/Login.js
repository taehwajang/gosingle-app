import React from 'react'
import {Input , Button , Divider, Form, Grid, Segment} from "semantic-ui-react" ; 


function LoginI(e){
  return(
    (e)=>{alert("환영합니다." + e.target.value + "님")}
  )
}

class Login extends React.Component{
  constructor(){
    super()
    this.state ={ id :"방문자"}
  }
  render(){
  return (
  //   <div>
  //     <Input  onChange ={ (e)=>this.setState({id : e.target.value})}/>
  //     <Button 
  //      value= {this.state.id}
  //      inverted color='blue' 
  //      onClick={LoginI()}> Login</Button>
  //   </div>
  <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />

          <Button content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
  )

  }
}

export default Login
