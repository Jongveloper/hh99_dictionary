import React, {Component, useState} from 'react';
import styled from 'styled-components';

const AddDict = () => {
    return(    
    <Input>
        <Title>단어 추가하기</Title>
        <InputBox>
          <p>단어</p>
            <input type="text" />
        </InputBox>
        <InputBox>
          <p>설명</p>
            <input type="text"  />
        </InputBox>
        <InputBox>
          <p>예시</p>
            <input type="text"/>
        </InputBox>
        <button>추가하기</button>
      </Input>
    )
}

const Title = styled.h1`
    color: white;
`;


const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #FFAAAF;
  padding: 16px;
  margin: 20px auto;
  border: 1px solid #ddd;
  

  & p{
    text-decoration : underline;
    font-size: 12px;
  }
  & input{
      width: 300px;
      height: 30px;
  }
  & button{
      width: 330px;
      display: block;
      margin: auto;
      height: 40px;
      border: 0;
      ountline: 0;
      color: white;
      font-size: 20px;
      font-weight: 400;
      background-color: #FFC846;
  }
`;
const InputBox = styled.div`
padding: 8px;
margin: 8px;
background-color: #fff;
`;


export default AddDict;