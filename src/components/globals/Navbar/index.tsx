import type { NextPage } from 'next'

import { useRouter } from 'next/router'

import * as P from './styles'
import { Container } from '../../../styles/globalComponents'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar: NextPage = () => {
  const router = useRouter()

  return (
    <P.Navbar>
      <Container>
        <div className="flex">
          <div className="part">
            <div className="brand">
              <button>
                <img src="/images/brand/logo.png" alt="Logo" />
              </button>
            </div>
            <div className="links">
              <ul>
                <li>
                  <button
                    className={router.pathname === '/' ? 'active' : ''}
                    onClick={() => router.push('/')}
                  >
                    Início
                  </button>
                </li>
                <li>
                  <button
                    className={router.pathname === '/loja' ? 'active' : ''}
                    onClick={() => router.push('/loja')}
                  >
                    Loja
                  </button>
                </li>
                <li>
                  <button
                    className={router.pathname === '/equipe' ? 'active' : ''}
                    onClick={() => router.push('/equipe')}
                  >
                    Equipe
                  </button>
                </li>
                <li>
                  <button
                    className={router.pathname === '/regras' ? 'active' : ''}
                    onClick={() => router.push('/regras')}
                  >
                    Regras
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="part">
            <button className="cart" onClick={() => router.push('/carrinho')}>
              <i>
                <FaShoppingCart />
              </i>
            </button>
          </div>
        </div>
      </Container>
    </P.Navbar>
  )
}

export { Navbar }
