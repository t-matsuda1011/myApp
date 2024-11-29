"use client";

import Button from '@mui/material/Button';

type Props = { name: string, nickname: string, bio:string };

const CardContents = ({name, nickname, bio}: Props) => {
    const handleClick = () => {
        alert(`これは${name}のカードです。`);
    };

    return (
        <div className='mb-5'>
            <Button variant="contained" onClick={handleClick}> 
                <div className="profile-card__info">
                    <h2 className="profile-card__name">{name}</h2>
                    <p className="profile-card__nickname">@{nickname}</p>
                    <p className="profile-card__bio"> {bio ?? "まだ情報が入力されていません。"}</p>
                </div>
            </Button>
        </div>
    );
};

CardContents.displayName = 'CardContents';
export default CardContents;