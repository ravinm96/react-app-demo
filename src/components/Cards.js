import React from 'react';
import Sortable from 'react-sortablejs';
import {CardWrapper, CardTitle, CardComments, AddComment, CardCommentText, CloseIcon} from '../elements/PageElements';
 
// Functional Component
const Cards = ({items,onUpdateCard,parentId,addComment, deleteCard}) => {
    items = items.map(cardItem => (
        <CardWrapper key={cardItem.id} data-id={cardItem.id}>
            <CloseIcon onClick={() => deleteCard(parentId, cardItem.id)}/>
            <CardTitle>{cardItem.cardName}</CardTitle>
            <CardComments>
                {cardItem.comments.length ? 
                    cardItem.comments.map(item => (
                        <CardCommentText key={item.id}>{item.text}</CardCommentText>
                    )): null}
                <AddComment placeholder="Add Comment" onKeyPress={(e) => addComment(e, parentId, cardItem.id)}></AddComment>
            </CardComments>
        </CardWrapper>
    ));
 
    return (
        <Sortable
            options={{
                group: 'shared',
                pull: true,
                put: true
            }}
            onChange={(items) => {
                // console.log(items);
                onUpdateCard(parentId, items);      
            }}
        >
            {items}
        </Sortable>
    );
};
 
export default Cards;