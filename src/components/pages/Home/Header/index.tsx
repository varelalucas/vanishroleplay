import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import axios from 'axios'

import * as P from './styles'

import { Container } from '../../../../styles/globalComponents'
import { Navbar } from '../../../globals/Navbar'
import { toast, ToastContainer } from 'react-toastify'

import { BiUserCircle } from 'react-icons/bi'

const Header: NextPage = () => {
  const [playersOnline, setPlayersOnline] = useState(0)

  useEffect(() => {
    const fetchIp = async () => {
      const req = await axios.get('https://mtasa.com/api/')
      const res = req.data

      const server = res.filter(
        (server: { ip: string; port: number }) =>
          server.ip === '135.148.13.62' && server.port === 22013
      )

      setPlayersOnline(server[0].players)
    }

    fetchIp()
  }, [])

  const copyIp = () => {
    navigator.clipboard.writeText('135.148.13.62:22013')
    toast.success('IP copiado com sucesso', {
      position: 'bottom-center',
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    })
  }

  return (
    <P.HeaderContainer>
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <Container>
        <div className="hero">
          <div className="grid">
            <div className="item">
              <div className="card" id="primary">
                <h1>O melhor RP da atualidade</h1>
                <p>Seja bem vindo a loja do VanishRoleplay</p>
                <button onClick={() => copyIp()}>Jogue conosco</button>
              </div>
            </div>
            <div className="item">
              <div className="card" id="secondary">
                <div className="icon">
                  <i>
                    <BiUserCircle />
                  </i>
                </div>
                <h3>Venha jogar conosco</h3>
                <p>
                  Estamos com <strong>{playersOnline}</strong> jogadores online
                </p>
                <button onClick={() => copyIp()}>Copiar IP</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </P.HeaderContainer>
  )
}

export { Header }
