import styled from 'styled-components'

const StyledGeneralColumnWrapper = styled.div`
  height: ${({ columnHeight }) => columnHeight || 'inherit'};
  width: ${({ columnWidth }) => columnWidth || 'inherit'};
  ${({ columnMargin }) => columnMargin && `margin: ${columnMargin}`};
  display: flex;
  flex-direction: column;
  align-items: ${({ columnAlign }) => columnAlign || 'center'};
  justify-content: ${({ columnJustify }) => columnJustify || 'center'};
`

export default StyledGeneralColumnWrapper
