import styled from 'styled-components';

interface CommentProps {
  username: string;
  content: string;
  onRecommentClick: () => void;
}

const CommentComponent = ({ username, content, onRecommentClick }: CommentProps) => (
  <CommentContainer>
    <CommentUsername>{username}</CommentUsername>
    <CommentContent>{content}</CommentContent>
    <RecommentBtn onClick={onRecommentClick}>💬</RecommentBtn>
  </CommentContainer>
);

export default CommentComponent;

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  position: relative;
  padding: 5px;
`;

export const CommentUsername = styled.div`
  font-size: 12pt;
  margin-bottom: 5px;  
  text-align: left;
`;

export const CommentContent = styled.div`
  font-size: 10pt;
  text-align: left;
`;

export const RecommentBtn = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  cursor: pointer;
`;