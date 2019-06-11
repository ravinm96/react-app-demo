import styled from 'styled-components';

export const PageWrapper = styled.div`
    background : ${props => props.boardBgColor || "#0079bf"};
    width: 100%;
    height: 100%;
`;

export const ModalWrapper = styled.div`
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
    width: 400px;
    height: auto;
    min-height: 150px;
    background: #fff;
    border-radius: 10px;
    z-index: 1;
`;

export const NewList = styled.div`
    min-width: 400px;
    height: 100px;
    line-height: 100px;
    background: #000;
    opacity: 0.5;
    border-radius: 10px;
    border: 1px solid #fff;
    font-size: 40px;
    text-align: center;
    margin: 20px 10px;
    color: #fff;
    cursor: pointer;
`;

export const ContentList = styled.div`
    width: calc(400px - 20px);
    min-height: 100px;
    height: auto;
    border-radius: 10px;
    border: 1px solid #fff;
    margin: 20px 10px;
    padding: 10px;
`;

export const ListWrapper = styled.div`
    width: auto;
    height: calc(100% - 40px);
    display: flex;
    overflow: scroll;
`;

export const CardWrapper = styled.div`
    margin: 10px;
    padding: 10px;
    width: calc(100% - 40px);
    border-radius: 10px;
    border: 1px solid #c5c5c5;
    cursor: move;
    position: relative;
`;

export const CloseModal = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    width: 32px;
    height: 32px;
    ::after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #333;
        transform: rotate(-45deg);
    }
    ::before {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #333;
        transform: rotate(45deg);
    }
`;

export const ModalWrapperMask = styled.div`
    position: fixed;
    top: 0px;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.5;
`;

export const ModalContentWrapper = styled.div`
    padding: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
`;

export const NewListInput = styled.input`
    width: 95%;
    margin: 0 auto;
    height: 60px;
    -webkit-appearance: none;
    border: 1px solid #ccc;
    border-radius: 10px;
    display: -webkit-box;
    position: relative;
    margin-top: 40px;
    padding-left: 10px;
    font-family: sans-serif;
    font-size: 16px;
    ::placeholder {
       
    }
`;

export const AddButton = styled.button`
    -webkit-appearance : none;
    height: 50px;
    width: calc(50% - 10px);
    margin: 10px;
    border-radius: 10px;
    background: green;
    color: #fff;
    font-size: 16px;
    font-family: sans-serif;
`;

export const CancelButton = styled.button`
    -webkit-appearance : none;
    height: 50px;
    width: calc(50% - 10px);
    margin: 10px;
    border-radius: 10px;
    background: red;
    color: #fff;
    font-size: 16px;
    font-family: sans-serif;
`;

export const AddListForm = styled.form`
`;

export const List = styled.div`
    min-width: 400px;
    min-height: 100px;
    height: auto;
    background: #fff;
    border-radius: 10px;
    border: 1px solid #fff;
    margin: 20px 10px;
    color: #000;
    display: inline-table;
    position: relative;
`;

export const ListTitle = styled.span`
    display: inherit;
    margin: 10px;
    width: calc(100% - 40px);
    height: 20px;
    line-height: 20px;
    text-transform: capitalize;
    border-bottom: 1px solid #6b6b6b;
    box-shadow: -2px 17px 21px -13px #888888;
    font-size: 22px;
    font-family: sans-serif;
    padding: 5px 10px;
`;

export const AddCard = styled.div`
    margin: 10px;
    padding: 10px;
    width: calc(100% - 40px);
    height: 20px;
    line-height: 20px;
    background: #c1c1c1;
    opacity: 0.5;
    border-radius: 10px;
    border: 1px solid #fff;
    font-size: inherit;
    color: #000;
`;

export const CardTitle = styled.div`
    display: inherit;
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-transform: capitalize;
    font-family: sans-serif;
`;

export const CardComments = styled.div`
    border-top: 1px solid #ccc;
    padding-top: 10px;
    margin-top: 10px;
`;

export const AddComment = styled.input`
    color: #868686;
    font-family: inherit;
    width: 100%;
    height: auto;
    border: none;
    outline-width: 0;
`;

export const CardCommentText = styled.span`
    display: inherit;
    width: calc(100% - 10px);
    color: #666;
    padding: 5px;
    border: 1px solid #f7f7f7;
    border-radius: 5px;
    background: #f7f7f7;
    margin: 5px 0px;
`;

export const CloseIcon = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    width: 15px;
    height: 15px;
    cursor: pointer;
    ::after {
        position: absolute;
        left: 7px;
        content: ' ';
        height: 15px;
        width: 1px;
        background-color: #333;
        transform: rotate(-45deg);
    }
    ::before {
        position: absolute;
        left: 7px;
        content: ' ';
        height: 15px;
        width: 1px;
        background-color: #333;
        transform: rotate(45deg);
    }
`;