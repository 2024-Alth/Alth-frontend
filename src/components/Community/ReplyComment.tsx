import { useState } from 'react';
import styled from 'styled-components';

interface ReplyProps {
  onRecommentSubmit: (replyContent: string) => void;
//   onSubmitToServer: (replyContent: string) => Promise<void>;
}

const ReplyComponent = ({ onRecommentSubmit, /*onSubmitToServer*/ }: ReplyProps) => {
  const [replyContent, setReplyContent] = useState('');

  const handleBlur = () => {
    onRecommentSubmit(replyContent);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplyContent(e.target.value);
  };

  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
    //   await onSubmitToServer(replyContent);
      console.log(replyContent);
    }
  };

  return (
    <ReplyContainer>
        <CommentInput
        placeholder="댓글을 입력해주세요."
        onBlur={handleBlur}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </ReplyContainer>
  );
};

export default ReplyComponent;

export const ReplyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  position: relative;
  padding: 5px;
  background-color: #F1F1F1;
  border: none;
`;

export const CommentInput = styled.input`
  width: 80%;
  display: flex;
  flex-direction: column; 
  padding: 5px;
  border: none;
  background-color: transparent;
`;