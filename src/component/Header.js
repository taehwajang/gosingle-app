import React from 'react'


const Header = () => {
  return (
    <div className = "HeadLine">
      <ul className="UserZoon">
        <li><a href="naver.com">마이페이지</a></li>
        <li><a href="google.com">장바구니</a></li>
        <li><a href="daum.net">주문 배송</a></li>
      </ul>

      <div>
        <img className= "logo" alt ="logoimg" src="img/gosingle.png"></img>
      </div>

      <ul className="Login">
        <li>로그인</li>
        <li>회원가입</li>
      </ul>
    </div>
  )
}

export default Header
