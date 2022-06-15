import styled from 'styled-components'

export const CartContainer = styled.section`
  .card {
    padding: 40px;
    border-radius: 20px;
    background-color: ${props => props.theme.colors.bgSecondary};

    .divider {
      height: 2px;
      width: 100%;
      background-color: ${props => props.theme.colors.clrTextTertiary};
    }

    .top {
      h1 {
        font-size: 2.5rem;
        font-weight: 700;
        color: ${props => props.theme.colors.clrPrimary};
        padding-bottom: 20px;
      }
    }

    .content {
      margin-top: 20px;

      .grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 20px;

        .item {
          .products {
            table {
              width: 100%;
              text-align: center;

              thead {
                th {
                  font-size: 1.5rem;
                  font-weight: 700;
                  padding: 5px;
                  font-family: 'Sora', sans-serif;
                }
              }

              tbody {
                .tablerow {
                  td {
                    padding: 8px 0;
                    border-bottom: 2px solid
                      ${props => props.theme.colors.clrTextTertiary};

                    .buttons {
                      display: flex;
                      justify-content: center;

                      button {
                        width: 30px;
                        height: 30px;
                        background-color: ${props =>
                          props.theme.colors.clrError};
                        border-radius: 2px;
                        color: #fff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                      }
                    }
                  }
                }
              }
            }
          }

          .methods {
            margin-top: 30px;

            h2 {
              font-size: 1.5rem;
              color: ${props => props.theme.colors.clrTextSecondary};
            }

            .flex {
              display: flex;
              align-items: center;
              justify-content: space-around;
              flex-wrap: wrap;
              margin-top: 20px;

              button {
                width: fit-content;

                img {
                  max-width: 200px;
                  width: 100%;
                  filter: grayscale(1);
                  transition: 0.2s all ease;
                }

                &:hover,
                &:focus {
                  img {
                    filter: grayscale(0);
                    transition: 0.2s all ease;
                  }
                }
              }
            }
          }

          .finaldata {
            margin: 20px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            h2 {
              font-size: 1.5rem;
              margin-bottom: 10px;
              width: 100%;
            }

            .divider {
              margin-bottom: 10px;
            }

            p {
              text-align: center;
              padding: 5px 0;
            }

            p:not(:last-child) {
              font-size: 1.2rem;
            }

            p:last-child {
              font-size: 0.8rem;
              max-width: 70%;
              width: 100%;
              margin-left: 10px;
            }
          }

          .player {
            display: flex;
            justify-content: center;

            input {
              width: 70%;
              border: none;
              padding: 10px 20px;
              border-radius: 5px;
              transition: 0.2s all ease;
              background-color: ${props => props.theme.colors.bgThird};
              color: #fff;
              cursor: pointer;

              &:hover,
              &:focus {
                outline: none;
                transition: 0.2s all ease;
                color: ${props => props.theme.colors.clrPrimary};
                border-bottom: 2px solid
                  ${props => props.theme.colors.clrPrimary};
              }
            }
          }

          .buy {
            display: flex;
            justify-content: center;

            button {
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 1.2rem;
              margin-top: 20px;
              padding: 20px;
              border-radius: 5px;
              color: #fff;
              text-transform: uppercase;
              font-weight: 700;
              background-color: ${props => props.theme.colors.clrPrimary};
              transition: 0.2s all ease;

              &:hover {
                filter: brightness(0.9);
              }
            }
          }
        }
      }
    }
  }
`
