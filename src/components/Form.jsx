import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/todos';
import { v4 as uuidv4 } from 'uuid';
//UUID는 128비트 길이의 고유한 식별자를 생성

import styled from 'styled-components';

//Form 컴포넌트는 할 일을 추가하기 위한 입력 폼을 담당
function Form() {
  // useDispatch로 액션 객체 리듀서로 보내기
  const dispatch = useDispatch();

  // useState 훅을 사용하여 title과 body라는 두 개의 상태 변수를 정의
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // 제목, 내용 바꾸기
  const onTitleChange = (event) => setTitle(event.target.value);
  const onBodyChange = (event) => setBody(event.target.value);

 //onAddBtn 함수는 "추가하기" 버튼을 클릭할 때 호출되는 핸들러 함수
  const onAddBtn = (event) => {
    event.preventDefault();
    if(title === '' || body === '') {
      alert('빈칸이 있다롱!!.');
      return;
    }
    const newTodo = {
      id: uuidv4(),
      title,
      body,
      OK: false,
    };
    dispatch(addTodo(newTodo));
    setTitle('');
    setBody('');
  };

  return (
    <Section>
      <FormArea>
        <Label htmlFor="form-title">
          제목
          <Input 
            type="text"
            id="form-title"
            value={title}
            onChange={onTitleChange}
          />
        </Label>
        <Label htmlFor="form-body">
          내용
          <Input
            type="text"
            id="form-body"
            value={body}
            onChange={onBodyChange}
          />
        </Label>
        <FormButton
          onClick={onAddBtn}
        >
          추가하기
        </FormButton>
      </FormArea>
    </Section>
  )
}

export default Form

//제목과 내용,추가하기버튼 담은 섹션
const Section = styled.section`
  height: 100px;
  display: flex;
  align-items: center;
  padding: 20px 30px;
  background-color: pink;
  border-radius: 10px;
`;

const FormArea = styled.form`
  width: 100%;
`;

const Label = styled.label`
  margin-right: 5px;
`;

const FormButton = styled.button`//추가하기 버튼
  border: none;
  float: right;
  background-color: #e7788b;
  color: white;
`;
const Input = styled.input`
  width: 260px;
  height: 40px;
  margin: 0 20px;
  border: none;
  border-radius: 100px;
`;