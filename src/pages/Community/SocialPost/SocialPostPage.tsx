import React, { useState } from 'react';
import * as S from './Styles';

function SocialPostPage() {
    const [isLiked, setIsLiked] = useState(false);

    const dummyPost = {
        title: "게시물 제목은 예시랍니다",
        content: "로렘 입숨(dolor)은 일종의 표준 더미 텍스트로, 인쇄 및 타이포그래피 산업에서 사용되고 있는 표준 더미 텍스트 중 하나입니다. (좋음과 나쁨의 끝에서) 중에서 왔습니다. 는 어그로 글이었구용",
        likeCount: 15,
        commentCount: 5,
        heartCount: 7,
        comments: [
            { username: "User1", content: "댓글 내용 1", likes: 3 },
            { username: "User2", content: "댓글 내용 2", likes: 1 },
        ],
    };

    const handleLikeClick = () => {
        setIsLiked((prev) => !prev);
      };

    return (
        <>
            <S.Layout>
                <S.Title>{dummyPost.title}</S.Title>
                <S.Divider />
                <S.Content>{dummyPost.content}</S.Content>
                <S.Divider />
                <S.InteractionContainer>
                    <S.LikeButton isActive={isLiked} onClick={handleLikeClick}>
                        공감하기 🙂
                    </S.LikeButton>
                    <S.CommentCount>{dummyPost.commentCount} 댓글</S.CommentCount>
                    <S.HeartCount>{dummyPost.heartCount} ♡</S.HeartCount>
                </S.InteractionContainer>
                <S.Divider />
                {dummyPost.comments.map((comment, index) => (
                    <React.Fragment key={index}>
                        <S.CommentContainer>
                            <S.CommentUsername>{comment.username}</S.CommentUsername>
                            <S.CommentContent>{comment.content}</S.CommentContent>
                            <S.CommentLikes>{comment.likes} ♡</S.CommentLikes>
                        </S.CommentContainer>
                        <S.Divider />
                    </React.Fragment>
                ))} 
            </S.Layout>
            <S.CommentInput placeholder="댓글을 입력해주세요." />
        </>
    );
}

export default SocialPostPage;

