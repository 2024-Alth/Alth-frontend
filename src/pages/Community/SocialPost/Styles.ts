import styled from "styled-components";

type LikeButtonProps = {
    isActive: boolean;
    onClick: () => void;
  };

export const Layout = styled.div`
  background-color: #FFFFFF;
  width: 100vw;
  height: 100vh;
  padding: 28px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 18pt;
  font-weight: bold;
  text-align: left;
`;

export const Content = styled.div`
  font-size: 13pt;
  margin-bottom: 10%;
  margin-top: 10%;
  height: 30%;
`;

export const InteractionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const LikeButton = styled.button<LikeButtonProps>`
  border: 2px solid #FFCE4E;
  border-radius: 30px;
  padding: 10px;
  background-color: ${({ isActive }) => (isActive ? '#FFCE4E' : '#FFFFFF')};
  color: ${({ isActive }) => (isActive ? '#FFFFFF' : '#000000')};
  cursor: pointer;

  &:active {
    border-color: #FFCE4E;
    background-color: #FFCE4E;
    color: #FFFFFF;
  }
`;

export const CommentCount = styled.div`
  margin-left: 10px;
`;

export const HeartCount = styled.div`
position: absolute;
top: 50%;
right: 0;
transform: translateY(-50%);
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #CCCCCC;
  width: 100%;
  margin: 5px 0;
`;

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  position: relative;
  padding: 5px;
`;

export const CommentUsername = styled.div`
  font-size: 14pt;
  margin-bottom: 5px;  
  text-align: left;
`;

export const CommentContent = styled.div`
  font-size: 12pt;
  text-align: left;
`;

export const CommentLikes = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

export const CommentInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #CCCCCC;
  border-radius: 5px;
  font-size: 14pt;
  outline: none;
  position: fixed;
  bottom: 0;

  &::placeholder {
    color: #CCCCCC;
  }
`;