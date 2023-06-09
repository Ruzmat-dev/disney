import React from 'react'
import styled from 'styled-components'

const Detali = () => {
  return (
    <Container>
        <Background>
            <img src="/images/images/superJumbo.jpg"/>
        </Background>
        <ImgeTitle>
            <img src='/images/images/kindpng_1484520.png'/>
        </ImgeTitle>
        <Controls>
            <PlayButton>
                {/* <button> */}
                <img src='/images/images/play-icon-black.png'/>
                <span>Play</span>
                {/* </button> */}
            </PlayButton>
            <TrailerButton>
                <img src='/images/images/play-icon-white.png'/>
                <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src="/images/images/group-icon.png"/>
            </GroupWatchButton>
        </Controls>
        <SubTitle>
            2018 - 7m - Family, Fantasy, Kids, Animation
        </SubTitle>
        <Descriotion>
            A Chinese mom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
        </Descriotion>
    </Container>
  )
}

export default Detali

const Container = styled.div`
    min-height:calc(100vh -70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index:-1;
    opacity:0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImgeTitle = styled.div`
    height: 30vh;
    min-height:170px;
    width: 35vw;
    min-width:200px;
    margin-top:60px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`
const PlayButton = styled.button`
    border-radius:4px;
    font-size:15px;
    padding: 0px 24px;
    margin-right:22px;
    display: flex;
    align-items: center;
    height:56px;
    background-color: rgb (249 , 249, 249) ;
    border:none;
    letter-spacing:1.8px;
    cursor:pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0 , 0 ,0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;

`
const AddButton = styled.button`
    margin-right:16px;
    width:44px;
    height:44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:50%;
    border: 2px solid white;
    background-color:rgba(0, 0, 0, 0.6);
    cursor:pointer;
    span {
        font-size:30px;
        color:white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background: rgb(0,0,0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size:15px;
    min-height:28px;
    margin-top:26px;
`

const Descriotion = styled.div`
    line-height:1.4;
    font-size:20px;
    margin-top:16px;

    max-width:760px;
`