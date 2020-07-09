import styled from "styled-components";

const GeneralColumnWrapper = styled.div`
  height: ${({ columnHeight }) => columnHeight || "inherit"};
  width: ${({ columnWidth }) => columnWidth || "inherit"};
  display: flex;
  flex-direction: column;
  align-items: ${({ columnAlign }) => columnAlign || "center"};
  justify-content: ${({ columnJustify }) => columnJustify || "center"};
`;

export default GeneralColumnWrapper;