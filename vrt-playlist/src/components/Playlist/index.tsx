import React from 'react';
import ListItem from './components/ListItem';
import VBox from '../../core/Layout/VBox';


const List = (props) =>
    <VBox style={{width:'70%',marginLeft:'15%'}}>
    {([1,2,3,4,5,6,7,8,9,10,11]).map(x=>
         <ListItem 
            hover={ x == props.selectedIndex} 
            edit={props.edit} 
            key={x}
            />
        )}
    </VBox>
    
export default List;