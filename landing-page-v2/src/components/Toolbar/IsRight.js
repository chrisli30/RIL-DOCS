import styled from 'styled-components';

const StyledIsRight = styled.div`
  display: flex;
  height: 5em;
  justify-content: flex-end;
  @media ${(props) => props.theme.phone} {
    padding-right:2em;
  }
  li {
        position: relative;
        padding-left: 18px;
        padding-right: 18px;
        display: inline-block;
        height: 100%;
        line-height: 5em;
        @media ${(props) => props.theme.tabletStrict} {
            padding-left: 8px;
            padding-right: 8px;
        }

        a {
            transform: scale(.9);
            i {
                padding-left: 6px;
                font-size: 12px;
                font-weight: 200;
                
            }
        }

    }
`;
export default StyledIsRight;
