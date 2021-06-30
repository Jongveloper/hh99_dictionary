import React, {Component, useState, useRef, useSelector} from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { createDict } from './redux/modules/dictionary';


const AddDict = (props) => {
  const dispatch = useDispatch();
    const input_word = React.useRef();
    const input_desc = React.useRef();
    const input_example = React.useRef();
    return(
    <Input>
        <Title>단어 추가하기</Title>
        <InputBox>
          <p>단어</p>
            <input type="text" placeholder="단어를 입력해주세요" ref={input_word}/>
        </InputBox>
        <InputBox>
          <p>설명</p>
            <input type="text" placeholder="설명을 입력해주세요" ref={input_desc}/>
        </InputBox>
        <InputBox>
          <p>예시</p>
            <input type="text" placeholder="예시를 입력해주세요" ref={input_example}/>
        </InputBox>
        <button onClick={()=>{
          let input_text = {
            word: input_word.current.value,
            desc: input_desc.current.value,
            example: input_example.current.value
          };
          dispatch(createDict(input_text));
          props.history.push("/");
          console.log(createDict(input_text));
          
        }}>추가하기</button>
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
      outline: 0;
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