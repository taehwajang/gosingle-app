import React from 'react' ; 
import {Image , Button, Comment,  Header , Divider, Icon , Label, Grid} from "semantic-ui-react" ;
import Comments from "./Comments" ;
import Buttons from './Buttons';

 
function QR(){
  return(
    <Icon qrcode/>
  )
}
const Product = () => {

  return (
    <div>
    <Divider horizontal>
    \
      <Icon name='golf ball' style={{fontSize  : "50px"}}/>
      BEST 30
   
  </Divider>
    <div className="productZoon">
    <Image src="img/product1.jpeg" centered />
    <div>
    <Buttons/>
    </div>
      <p>디봇 매트</p>
      <p>25.000</p>

  <Button onClick = {()=>alert("준비중입니다.")}>구매하기</Button>
      <Comment.Group>
      
    <Header as='h3' dividing style ={{width : "600px"}}>
        후기를 작성해주세요.
    </Header>
    
    

    <Comments />  {/* */}
  </Comment.Group>
  
  <Divider horizontal>
    <Icon  name="share"/>
    공유하기
  </Divider>
  <Grid centered style={{margin : "10px "}}>
    <Button circular color='facebook' icon='facebook' />
    <Button circular color='twitter' icon='twitter' />
    <Button circular color='linkedin' icon='linkedin' />
    <Button circular color='google plus' icon='google plus' />
    </Grid>
  
  </div>
  </div>
  )
}

export default Product ;
