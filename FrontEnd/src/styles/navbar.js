import styled from "styled-components";

export const NavContainer = styled.nav`
  background-color: #1672cd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0px 50px;
  min-height: 66px;
  position: relative; /* Añadido */

  img {
    border-radius: 50%;
    width: 110px;
  }

  @media (max-width: 900px) {
    img {
      border-radius: 50%;
      width: 120px;
    }
  }
`;

export const ListContentDesktop = styled.ul`
  display: none;
  list-style: none;
  margin-right: 20px;
  margin-left: 20px;

  @media (min-width: 768px) {
    display: flex;
  }

  li {
    line-height: 80px;
    margin: 0px 30px 0px 0px;
    

    a {
      padding: 0.5rem;
      font-size: 25px;
      color: white;
      text-transform: uppercase;
      text-decoration: none;
      &.active,
      &:hover {
        background-color: #000090;
        transition: 0.5s;
      }
    }

    @media (max-width: 900px) {
      li {
        line-height: 40px;
        margin: 0px 15px 0px 0px;
      }
      a {
        font-size: 15px;
      }
    }
  }
`;

export const ListContentMobile = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-right: 20px;
  margin-left: 20px;

  @media (min-width: 768px) {
    display: none;
  }

  li {
    line-height: 80px;
    margin: 0px 30px 0px 0px;

    a {
      font-size: 25px;
      color: white;
      text-transform: uppercase;
      text-decoration: none;
      &.active,
      &:hover {
        background-color: #000090;
        transition: 0.5s;
      }
    }
  }
`;

export const ButtonMenuMobile = styled.div`
  display: block;
  background-color: #1672cd;
  padding: 0.5rem;

  svg {
    font-size: 30px;
    color: white;
  }

  &:hover {
    background-color: white;
    border-radius: 10px;

    svg {
      color: #1672cd;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuMobileActive = styled.div`
  display: ${({ active }) => (active ? "block" : "none")};
  width: 100%;
  background-color: #1672cd;
  z-index: 1000;
`;

export const PopOver = styled.div`
  cursor: pointer;
  display: block;
  background-color: #1672cd;
  padding: 1.5rem;
  position: relative; /* Añadido */

  svg {
    font-size: 30px;
    color: white;
  }

  &:hover {
    background-color: white;
    border-radius: 10px;

    svg {
      color: #1672cd;
    }
  }
`;

export const MenuProfileActivate = styled.div`
  display: ${({ active }) => (active ? "block" : "none")};
  width: 200px;
  background-color: #1672cd;
  position: absolute; /* Añadido */
  top: 75%;
  left: 65%;
  transform: translateX(-50%);
  z-index: 1000;
`;

export const ListMenuProfile = styled.div`
  border: 0.5px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;

  li {
    margin: 0px;

    a {
      font-size: 18px;
    }
  }
`;
