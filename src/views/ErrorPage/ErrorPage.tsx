import { type ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Footer, Navbar } from '../../components'
import { Button, Center } from '../../components/common'

export default function ErrorPage(): ReactElement {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <Container>
        <ImageContainer>
          <img src="./assets/img/lazz-error-page.svg" alt="error" />
          <ErrorText>tenemos que hablar</ErrorText>
          <ErrorText style={{ top: '90%' }}> esto no funciona</ErrorText>
        </ImageContainer>
        <Center>
          <Button px={2.8} py={1.2} onClick={() => navigate('/')}>
            Back Home
          </Button>
        </Center>
      </Container>
      <Footer />
    </>

  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
margin: 1.2rem 9.2rem;
margin-top: -3.8rem;
justify-content: center;
align-items: center;
    img {
        width: 850px;
        max-width: 100%;
    }

    flex:1;
`

const ImageContainer = styled.div`
text-align: center;
position: relative;

`

const ErrorText = styled.p`
    font-size: 1.8rem;
    font-weight: 400;
    background-color: #EB2873;
    padding: 0.4rem 1.2rem;
    border-radius: 45px;
    align-self: center;
    position: absolute;
    top: 80%;
    text-transform: uppercase   ;
    left: 50%;
    color: white;
    transform: translate(-50%, -50%);
`
