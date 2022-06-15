import styled from 'styled-components'

export const Navbar = styled.nav`
  padding: 40px 0;

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .part {
      display: flex;
      align-items: center;
      gap: 40px;

      .cart {
        i {
          font-size: 2.2rem;
          color: ${props => props.theme.colors.clrPrimary};
        }
      }

      .links {
        ul {
          list-style: none;
          display: flex;
          gap: 20px;
          align-items: center;

          li {
            button {
              font-size: 1.5rem;
              color: ${props => props.theme.colors.clrTextPrimary};
              font-family: 'Sora', sans-serif;

              &.active {
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
`
