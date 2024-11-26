import styled from "styled-components";

export const MyPostosContainer = styled.main`
  background-color: ${(props) => props.theme["gray200"]};
  display: flex;
  flex-direction: column;
  gap: 40px;
  .blocks {
    display: grid;
    padding-left: 60px;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
`;
export const HeaderContainer = styled.header`
  height: 200px;
  position: relative;
  background-color: ${(props) => props.theme["gray700"]};
  h1 {
    position: absolute;
    bottom: 30px;
    left: 65px;
    color: ${(props) => props.theme["gray200"]};
    font-size: 40px;
  }
  .buttonBack {
    display: flex;
    align-items: center;
    margin-top: 25px;
    margin-left: 25px;
    gap: 5px;
    background-color: transparent;
    color: ${(props) => props.theme["gray200"]};
    border: none;
    transition: 0.2s;
    p {
      font-size: 20px;
    }
    .icon{
        font-size: 20px;
    }
  }
  .newPosto{
    position: absolute;
    right: 30px;
    bottom: 30px;
    font-size: 25px;
    padding: 8px;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    background-color: ${(props) => props.theme["yellow300"]};
    color: ${(props) => props.theme.white};
    transition: 0.2s;
  }
  .newPosto:hover {
    background-color: ${(props) => props.theme["yellow500"]};
  }
  .buttonBack:hover {
    color: ${(props) => props.theme.white};
  }
`;
