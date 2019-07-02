import * as React from 'react';
import styled, {css} from 'styled-components/primitives';

const ButtonView = styled.View`

  width:fit-content;
  padding: 0px 10px
  border-radius: 14px;
  ${props => props.childIndex === 'first' && css`
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
  `}
  ${props => props.childIndex === 'middle' && css`
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
  `}
 ${props => props.childIndex === 'last' && css`
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
  `}
 
  margin: 4px 0px 4px 0px;
  background-color: ${props => props.selected ? '#5DFC71' : (props.hex || '#F2F2F2')};
  justify-content: center;
  align-items: center;
`;
export default ButtonView;
