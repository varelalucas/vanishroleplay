import styled from 'styled-components'

export const HeaderContainer = styled.header`
  .hero {
    .grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 20px;

      .item {
        .card {
          &#primary {
            background: url(/images/backgrounds/headercard.png);
            padding: 0 30px;
            min-height: 352px;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-radius: 20px;

            h1 {
              font-size: 3rem;
            }

            p {
              font-size: 1.1rem;
              color: ${props => props.theme.colors.clrTextSecondary};
              margin-top: 5px;
            }

            button {
              width: fit-content;
              color: #fff;
              font-size: 1.1rem;
              font-weight: 700;
              text-transform: uppercase;
              padding: 20px;
              border-radius: 5px;
              background-color: ${props => props.theme.colors.clrPrimary};
              transition: 0.2s all ease;
              margin-top: 10px;

              &:hover {
                filter: brightness(0.9);
              }
            }
          }

          &#secondary {
            background-color: ${props => props.theme.colors.bgSecondary};
            border-radius: 20px;
            min-height: 352px;
            display: flex;
            flex-direction: column;
            text-align: center;
            align-items: center;
            justify-content: center;

            .icon {
              i {
                font-size: 100px;
                color: ${props => props.theme.colors.clrPrimary};
              }
            }

            h3 {
              color: ${props => props.theme.colors.clrPrimary};
            }

            p {
              font-size: 1.1rem;
              margin-top: 3px;
              max-width: 320px;
            }

            button {
              width: fit-content;
              color: ${props => props.theme.colors.clrPrimary};
              font-size: 1.5rem;
              font-weight: 700;
              text-transform: uppercase;
              padding: 10px 20px;
              border-radius: 5px;
              border: 2px solid ${props => props.theme.colors.clrPrimary};
              transition: 0.2s all ease;
              margin-top: 10px;

              &:hover {
                background-color: ${props => props.theme.colors.clrPrimary};
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
`
