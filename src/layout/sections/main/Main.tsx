import React from 'react';
import photo from '../../../../src/assets/images/photo-0(2).jpeg'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import {S} from '../main/Main_Styles'

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Svetlana Dyablo</span></S.Name>
                        <S.MainTitle>A Web Developer.</S.MainTitle>
                    </div>

                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
            
        </S.Main>

    );
}; 