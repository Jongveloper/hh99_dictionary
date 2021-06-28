import React from 'react';
import styled from 'styled-components';
import DictInput from './DictInput';
import { Link } from 'react-router-dom';

const Dict = (props) => {
    
    return (
        <Wrap>
            <Title>나의 사전</Title>
            <Container>
                <DictList>
                    <p>단어</p>
                    <h3>ㅎ1ㅎ1</h3>
                    <p>설명</p>
                    <h3>히히를 변형한 단어.<br></br>숫자 1을 "l"로 쓴다.</h3>
                    <p>예시</p>
                    <h3 style={{color: "#E6749D"}}>저 친구가 초콜릿을 줬어.ㅎ1ㅎ1</h3>
                </DictList>
                <DictList>
                    <p>단어</p>
                    <h3>ㅎ1ㅎ1</h3>
                    <p>설명</p>
                    <h3>히히를 변형한 단어.<br></br>숫자 1을 "l"로 쓴다.</h3>
                    <p>예시</p>
                    <h3 style={{color: "#E6749D"}}>저 친구가 초콜릿을 줬어.ㅎ1ㅎ1</h3>
                </DictList>
            </Container>
            <Link to="/dictinput">
                <InputButton>+</InputButton>
            </Link>
        </Wrap>
    );
}

const Title = styled.h1`
color: white;
`;

const Wrap = styled.div`
max-width: 350px;
min-height: 10vh;
background-color: #FFAAAF;
padding: 16px;
margin: 20px auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  height: 100%;
  background-color: #FFAAF;
  padding: 5px;
  margin: 10px auto;
  border : 1px solid #black;
  & p{
    text-decoration : underline;
    font-size: 12px;
  }
  & h3{
      margin-top: -10px;
  }
`;

const DictList = styled.div`
    padding: 8px;
    margin: 8px;
    background-color: #fff;
`;

const InputButton = styled.button`
  color : white;
  background-color #FFC846;
  text-align: center;
  font-size: 100px;
  font-weight : 800;
  height: 120px;
  width: 120px;
  border: 0;
  ountline: 0;
  margin-left: 220px;
  border-radius: 100px;
`;

export default Dict;