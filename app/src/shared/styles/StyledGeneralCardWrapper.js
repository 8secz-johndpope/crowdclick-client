import styled from "styled-components";

const StyledGeneralCardWrapper = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({cardJustify}) => cardJustify && `justify-content: ${cardJustify}`}
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 21px;
`;

export default StyledGeneralCardWrapper;
