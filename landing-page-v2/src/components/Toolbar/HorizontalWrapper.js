import styled from 'styled-components';

const HorizontalWrapper = styled.div`
    margin:0 auto;
    display: flex;
    @media ${(props) => props.theme.phone} {
        margin:0 auto;
        padding-left: 0;
        padding-right: 0;
    }
    @media ${(props) => props.theme.tabletStrict} {
        margin-left:-24px;
        margin-right:-24px;
        padding-left: 24px;
        padding-right: 24px;
    }
    @media ${(props) => props.theme.desktopStrict} {
        max-width: 940px;
        padding-left: 0px;
        padding-right: 0px;
    }
    @media ${(props) => props.theme.xl} {
        max-width: 80%;
        padding-left: 0px;
        padding-right: 0px;
    }
    @media ${(props) => props.theme.xxl}{
        max-width: 60%;
        padding-left: 0px;
        padding-right: 0px;
    }
`;
export default HorizontalWrapper;
