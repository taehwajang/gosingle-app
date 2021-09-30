import React from 'react'
import {Form , Comment , Button} from "semantic-ui-react" ; 
import moment from "moment"; 

function SingleComment (detail){
  return (
    <Comment>
      <Comment.Content>
        <Comment.Avatar src='img/people.jpeg'/>
        <Comment.Author as='a'>방문자</Comment.Author>
        <Comment.Metadata>
          <div>{detail.info.time}</div>
        </Comment.Metadata>
        <Comment.Text>{detail.info.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  )
}


class Comments extends  React.Component{
  constructor(){
    super()
    this.state = {
      inputcontent : "" ,
      inputTime :  "",
      commentsList : [] ,
    }
  }

  render(){
    return(
      <div>
      
      {this.state.commentsList.map(comments => <SingleComment info = { comments } />)}
      <Form reply>
        <Form.TextArea  placeholder={moment().format("YYYY년 MM월 DD일 HH시 MM분 SS초")} value={this.state.inputcontent} onChange ={(e)=>this.setState({inputcontent : e.target.value })}/>
        <Button 
        content='작성하기' 
        labelPosition='left' 
        icon='edit' 
        primary 
        onClick={()=>{ if (this.state.inputcontent != "") {
          this.setState((prevState)=>{
            return {
              commentsList : [...prevState.commentsList, {
                content : this.state.inputcontent , 
                time: moment().format("YYYY년 MM월 DD일 HH시 MM분 SS초")}],
              inputcontent : "",
            };
          })
        } else {
          alert("내용을 입력하세요")
        }
      }
          } />
      </Form>
      </div>
    )
  }
}
export default Comments ;
