import React from 'react'
import {Button} from "semantic-ui-react"

const Category = () => {
  return (
    <div className="category">
      <ul className= "categoryList">
        <li><a href="#" className="categoryMenu">골프 클럽</a></li>
        <li><a href="#" className="categoryMenu">골프 용품</a></li>
        <li><a href="#" className="categoryMenu">골프 패션</a></li>
        <li><a href="#">Best30</a></li>
        <li><a href="#">타임특가</a></li>
        <li><a href="#">강력추천</a></li>
        <li><a href="#">브랜드존</a></li>
        <li><a href="#">기획전</a></li>
      </ul>
      <div className="inputBox">
        <input></input>
        <Button inverted color='blue' type= "submit">검색</Button>
        
      </div>
    </div>
  )
}

export default Category ;
