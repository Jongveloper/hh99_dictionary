import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddDict from './AddDict';
import { Link, withRouter } from 'react-router-dom';
import { firestore } from './firebase';
import { loadDict, loadDictFB } from './redux/modules/dictionary';
import { useDispatch, useSelector } from 'react-redux';

const Dict = (props) => {
    const dispatch = useDispatch();
    const dict_list = useSelector(state => state.dictionary.list);

    useEffect(()=>{
        dispatch(loadDictFB());
    }, [dispatch]);

    return (
        <Wrap>
            <Title>나의 사전</Title>
            <Container>
                {dict_list.map((list, index) => {
                    return (
                        <DictListStyle key={index}
                            onClick={() => {
                                props.history.push("/adddict" + index);
                            }}
                        >
                            <p>단어</p>
                            <h3>{list.word}</h3>
                            <p>설명</p>
                            <h3>{list.desc}</h3>
                            <p>예시</p>
                            <h3 style={{ color: "#E6749D" }}>{list.example}</h3>
                        </DictListStyle>

                    );
                })}
            </Container>
            <Link to="/adddict">
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
  background-color: #FFAAAF;
  padding: 5px;
  margin: 0px auto;
  border : 1px;
  & p{
    text-decoration : underline;
    font-size: 12px;
  }
  & h3{
      margin-top: -10px;
  }
`;

const DictListStyle = styled.div`
    padding: 8px;
    margin: 8px;
    background-color: #fff;
`;

const InputButton = styled.button`
  color : white;
  background-color : #FFC846;
  text-align: center;
  font-size: 100px;
  font-weight : 800;
  height: 120px;
  width: 120px;
  border: 0;
  outline: 0;
  margin-left: 220px;
  border-radius: 100px;
`;

export default Dict;