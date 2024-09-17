import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import axios from 'axios'

import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

import  H1  from "../../components/Title"
import  ContainerItens  from "../../components/ContainerItens"
import Button from "../../components/Button"

import { Container, Image, Project } from './styles'

function Projects() {
  const [project, setProject] = useState([]);
  const history = useHistory()

  

  useEffect(() => {
    async function fetchProject() {
      const { data: newProjects } = await axios.get('http://localhost:3003/project');

      setProject(newProjects);
    }
    fetchProject();
  }, [])


  async function deleteProject(userId) {
    await axios.delete(`http://localhost:3003/project/${userId}`);

    const newProject = project.filter((user) => user.id !== userId);
    setProject(newProject);
  }

  function goBackPage() {
    history.push('/')
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Usuários</H1>

        <ul>
          {project.map((user) => (
            <Project key={user.id}>
              <p>{user.name}</p>  <p>{user.age}</p>
              <button onClick={() => deleteProject(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </Project>
          ))}
        </ul>

        <Button $isBack={true} onClick={goBackPage}><img alt="seta" src={Arrow} />Voltar </Button>  

      </ContainerItens>
    </Container >
  );
}

export default Projects