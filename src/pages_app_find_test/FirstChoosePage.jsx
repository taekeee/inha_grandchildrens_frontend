import React from 'react';
import styled, {css} from "styled-components";
import GrayNavigator from './GrayNavigator';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const BackGround = styled.div`
     background-color: #F7F7F7;
    background-size: cover;
    width: 100vw;
    @media (orientation: portrait) {
    /* Set the height specifically for portrait mode */
    height: 100vh;
    }
    margin: 0;
`

const MidBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    margin-top: 14%;
    margin-bottom: 9%;
`

const ImgArea = styled.img`
    
`
const MainText = styled.p`
    margin-top: 5%;
    font-size: 1.6rem;
    text-align:center;
    font-weight:600;
`

const HighLight = styled.span`
    font-weight: 900;
    font-size: 1.7rem;
`

const SubText = styled.p`
    margin-top: 3%;
    font-size: 1.2rem;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.47);
`

const SelectBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`
const Row1 = styled.div`
    display: flex;
    @media (orientation: portrait) {
    /* Set the height specifically for portrait mode */
    height: 15vh;
    }
    
`

const Row2 = styled.div`
    display: flex;
    @media (orientation: portrait) {
    /* Set the height specifically for portrait mode */
    height: 15vh;
    }
`


const Box = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   background: #FFFFFF;
   box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.07);
   border-radius: 10px;
   border: none;
   width: 46vw;
   margin: 3%;
   padding: 2%;

   &:hover{
    transition:2s;
    background-color: ${({ clicked }) => (clicked ? '#EFC5B9' : '#FFFFFF')};
   }
`

const SelText = styled.p`
    font-size: 1.6rem;
    font-weight: bold;
`

const FirstChoosePage = () => {
    const navigate = useNavigate();
    const [isBoxClicked,setIsBoxClicked]=useState(false);

    const GoToLivingPage = () => {
        setIsBoxClicked(true);
        setTimeout(()=>{
            setIsBoxClicked(false);
            navigate(`/LivingAppsFind1`)
        },600);
    };

    const GoToHobbyPage = () => {
        setIsBoxClicked(true);
        setTimeout(()=>{
            setIsBoxClicked(false);
            navigate(`/HobbyAppTest1`)
        },600);
    };

    
    const GoToCoummnityPage = () => {
        setIsBoxClicked(true);
        setTimeout(()=>{
            setIsBoxClicked(false);
            navigate(`/CommunityAppsFind`)
        },600);
    };

    const GoToHealthyPage = () => {
        setIsBoxClicked(true);
        setTimeout(()=>{
            setIsBoxClicked(false);
            navigate(`/HealthyAppTest1`)
        },600);
    };


    return (
        <>
        <BackGround>
            <GrayNavigator/>
            <MidBox>
                <ImgArea src="/hi.svg"/>
                <MainText><HighLight>어떤 기능</HighLight>이<br/>필요하신가요?</MainText>
                <SubText>아래의 버튼 중 하나를 선택해주세요.</SubText>
            </MidBox>
            <SelectBox>
                <Row1>
                    <Box onClick={GoToLivingPage} clicked={isBoxClicked}>
                        <SelText>생활 편의</SelText>
                    </Box>
                    <Box onClick={GoToHobbyPage} clicked={isBoxClicked}>
                        <SelText>취미</SelText>
                    </Box>
                </Row1>
                
                <Row2>
                    <Box onClick={GoToCoummnityPage} clicked={isBoxClicked}>
                        <SelText>소통</SelText>
                    </Box>
                    <Box onClick={GoToHealthyPage} clicked={isBoxClicked}>
                        <SelText>건강</SelText>
                    </Box>
                </Row2>
            </SelectBox>
        </BackGround>
        </>
    );
};

export default FirstChoosePage;