import React, { useState, useRef } from "react"
import { useHistory } from "react-router-dom"
import axios from 'axios'

import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'

import H1 from '../../components/Title'
import ContainerItens  from '../../components/ContainerItens'
import Button from "../../components/Button"

import {
  Container,
  Image,
  InputLabel,
  Input,
} from './styles'

function App() {
  const [project, setProject] = useState([]);
  const history = useHistory();

  const InputName = useRef();
  const InputAge = useRef();

  async function addNewUsers() {
    const { data: newProject } = await axios.post('http://localhost:3003/project', {
      name: InputName.current.value,
      age: InputAge.current.value
    });

    setProject([...project, newProject]);

    history.push("/project")
  };

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens isBlur={true}>
        <H1>Olá!</H1>

        <InputLabel >Nome</InputLabel>
        <Input ref={InputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={InputAge} placeholder="Idade" />

        <Button onClick={addNewUsers}>Cadastrar <img alt="" src={Arrow} /></Button>
      </ContainerItens>
    </Container >
  );
}

export default App