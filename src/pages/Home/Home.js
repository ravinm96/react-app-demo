import * as React from 'react';
import Header from '../../components/Header';
import {PageWrapper, NewList, ListWrapper, ModalWrapper, 
    CloseModal, ModalWrapperMask, ModalContentWrapper, NewListInput, 
    AddButton, CancelButton, List, ListTitle, AddCard, CloseIcon} from '../../elements/PageElements';
import { connect } from 'react-redux';
import * as actions from '../../actions/action';
import Cards from '../../components/Cards';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            boardBgColor : '#0079bf',
            displayMenu: 'none',
            menuWidth : '-300px',
            showModel: 'none',
            newList: false,
            newCard: '',
            listData: []
        };
    }

    async loadData () {
        await this.props.onLoad();
    }

    componentDidMount () {
        this.loadData();
    }

    setTheme = (theme) => {
        this.setState({
            boardBgColor: theme
        });
    }

    showAddListModel = (show) => {
        if (show) {
            this.setState({
                showModel: 'block',
                newList: true
            });
        } else {
            this.setState({
                showModel: 'none',
                newList: false
            });
        }
    }

    openMenu = (event) => {
    //    if(typeof event != "undefined" && typeof event.target != "undefined" && (event.target.className.indexOf('menuWrapper') === -1 || event.target.parentNode.className.indexOf('menuWrapper') === -1))
        if (this.state.displayMenu === 'none') {
            this.setState({
                displayMenu: 'block',
                menuWidth : '0px'
            });
        } else {
            this.setState({
                displayMenu: 'none',
                menuWidth : '-300px'
            });
        }
    }

    addNewList = (event) => {
        let inputEle = document.getElementsByClassName('NewList')[0];
        inputEle = typeof inputEle != "undefined" ? inputEle.value : '';
        if (inputEle) {
            this.props.onNewList(inputEle.toLowerCase());
            document.getElementsByClassName('NewList')[0].value = '';
        }
        this.showAddListModel(false);
    }

    addNewCard = (event, id) => {
        let inputEle = document.getElementsByClassName('NewList')[0];
        inputEle = typeof inputEle != "undefined" ? inputEle.value : '';
        if (inputEle) {
            this.props.onNewCard(id, inputEle.toLowerCase());
            document.getElementsByClassName('NewList')[0].value = '';
        }
        this.showCardModel('');
    }

    showCardModel = (id) => {
        if (id) {
            this.setState({
                newCard : id,
                showModel: 'block'
            });
        } else {
            this.setState({
                newCard : '',
                showModel: 'none'
            });
        }
    }

    onCardDrag = (parentId, newList) => {
        this.props.onUpdateCard(parentId, newList);
    }

    addComment = (event, listId, cardId) => {
        let key = event.keyCode || event.which;
        if (key === 13 && event.target.value !== '') {
            this.props.onAddComments(listId, cardId, event.target.value);
            event.target.value = '';
        }
    }

    deleteList = (listId) => {
        if (listId) {
            this.props.onDeleteList(listId);
        }
    }

    deleteCard = (listId, cardId) => {
        if (cardId) {
            this.props.onDeleteCard(listId, cardId);
        }
    }

    render () {
        let newListForm = <ModalContentWrapper>
            <CloseModal onClick={() => this.showAddListModel(false)}/>
            <NewListInput className="NewList" placeholder="Add List Title" maxLength="30" required/>
            <ListWrapper>
                <AddButton onClick={(e) => this.addNewList(e)}>Add</AddButton>
                <CancelButton onClick={() => this.showAddListModel(false)}>Cancel</CancelButton>
            </ListWrapper>
        </ModalContentWrapper>;
        let newCardForm = <ModalContentWrapper>
            <CloseModal onClick={() => this.showCardModel('')}/>
            <NewListInput className="NewList" placeholder="Add Card" maxLength="30" required/>
            <ListWrapper>
                <AddButton onClick={(e) => this.addNewCard(e,this.state.newCard)}>Add</AddButton>
                <CancelButton onClick={() => this.showCardModel('')}>Cancel</CancelButton>
            </ListWrapper>
        </ModalContentWrapper>
        return (
            <PageWrapper boardBgColor={this.state.boardBgColor}>
                <Header  themeSetter={this.setTheme} menuWidth={this.state.menuWidth} displayMenu={this.state.displayMenu} openMenu={this.openMenu}/>
                {this.props.listData.length ? 
                    <ListWrapper>
                        {
                            this.props.listData.map(listItem => (
                                <List key={listItem.id}>
                                    <CloseIcon onClick={() => this.deleteList(listItem.id)}/>
                                    <ListTitle>{listItem.title}</ListTitle>
                                    {listItem.cards.length ?
                                    <React.Fragment>
                                        <Cards 
                                            items={listItem.cards} 
                                            onUpdateCard={this.onCardDrag} 
                                            parentId={listItem.id} 
                                            addComment={this.addComment} 
                                            deleteCard={this.deleteCard}
                                        />
                                    </React.Fragment>
                                    : null }
                                    <AddCard onClick={() => this.showCardModel(listItem.id)}>Add Card +</AddCard>
                                </List>
                            ))
                        }
                        <NewList onClick={() => this.showAddListModel(true)}>+</NewList>
                    </ListWrapper>
                    : <ListWrapper>
                        <NewList onClick={() => this.showAddListModel(true)}>+</NewList>
                    </ListWrapper>
                }
                <ModalWrapper style={{display: this.state.showModel}}>
                    {this.state.newList ? newListForm : this.state.newCard ? newCardForm : null}
                </ModalWrapper>
                <ModalWrapperMask style={{display: this.state.showModel}}/>
            </PageWrapper>
        );
    }
}

const mapStateToProps = state => {
    return {
        listData: state.card.listData,
        loading: state.card.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onLoad: () => dispatch(actions.loadData()),
        onNewList: (value) => dispatch(actions.newList(value)),
        onNewCard: (id, value) => dispatch(actions.newCard(id, value)),
        onUpdateCard: (id, value) => dispatch(actions.updateCard(id, value)),
        onAddComments: (listId, cardId, value) => dispatch(actions.addCommentSuccess(listId, cardId, value)),
        onDeleteCard: (listId, cardId) => dispatch(actions.deleteCard(listId, cardId)),
        onDeleteList: (id) => dispatch(actions.deleteList(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
