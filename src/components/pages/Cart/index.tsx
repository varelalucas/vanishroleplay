import type { NextPage } from 'next'
import { FaTrashAlt } from 'react-icons/fa'

import { Container } from '../../../styles/globalComponents'
import * as P from './styles'

const CartContent: NextPage = () => {
  return (
    <P.CartContainer>
      <Container>
        <div className="card">
          <div className="top">
            <h1>Meu carrinho</h1>
          </div>
          <div className="divider" />
          <div className="content">
            <div className="grid">
              <div className="item">
                <div className="products">
                  <table>
                    <thead>
                      <th>Item</th>
                      <th>Quantidade</th>
                      <th>Valor Unitário</th>
                      <th>Ações</th>
                    </thead>
                    <tbody>
                      <tr className="tablerow">
                        <td>Vip mensal</td>
                        <td>1</td>
                        <td>R$ 10,00</td>
                        <td>
                          <div className="buttons">
                            <button>
                              <i>
                                <FaTrashAlt />
                              </i>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="tablerow">
                        <td>Vip Trimestral</td>
                        <td>1</td>
                        <td>R$ 10,00</td>
                        <td>
                          <div className="buttons">
                            <button>
                              <i>
                                <FaTrashAlt />
                              </i>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="tablerow">
                        <td>Vip Eterni</td>
                        <td>1</td>
                        <td>R$ 10,00</td>
                        <td>
                          <div className="buttons">
                            <button>
                              <i>
                                <FaTrashAlt />
                              </i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="methods">
                  <h2>Métodos de pagamento</h2>
                  <div className="flex">
                    <button>
                      <img
                        src="/images/methods/mercadopago.png"
                        alt="Mercado Pago"
                      />
                    </button>
                    <button>
                      <img src="/images/methods/picpay.png" alt="PicPay" />
                    </button>
                    <button>
                      <img src="/images/methods/paypal.png" alt="PayPal" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="finaldata">
                  <h2>Dados da doação</h2>
                  <div className="divider" />
                  <p>
                    <strong>Sub-Total:</strong> R$ 30,00
                  </p>
                  <p>
                    <strong>Total:</strong> R$ 30,00
                  </p>
                  <p>
                    Ao realizar a doação você concorda com nossos{' '}
                    <a>
                      <strong>Termos de utilização</strong>
                    </a>{' '}
                    e{' '}
                    <a>
                      <strong>Política de Privacidade</strong>
                    </a>
                    .
                  </p>
                </div>
                <div className="player">
                  <input type="text" placeholder="Insira aqui seu nick"></input>
                </div>
                <div className="buy">
                  <button>Efetuar Doação</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </P.CartContainer>
  )
}

export { CartContent }
