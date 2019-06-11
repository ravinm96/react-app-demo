import styled from 'styled-components';

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 40px;
    background: #0067a3;
`;

export const HeaderLabel = styled.div`
    height: 20px;
    line-height: 20px;
    width: auto;
    padding: 10px;
    color: #fff;
    font-family: sans-serif;
`;

export const PancakeIcon = styled.div`
    width: 30px;
    height: 4px;
    background-color: #fff;
    margin: 6px 0;
`;

export const PancakeIconWrapper = styled.button`
    float: left;
    background: transparent;
    -webkit-appearance: none;
    margin: 0px 5px;
    border: 0px;
`;

export const MenuWrapper = styled.div`
    position: fixed;
    background: #fff;
    left: 0;
    width: 300px;
    overflow-x: hidden;
    overflow-y: hidden;
    transition: .5s;
    z-index: 1;
    height: -webkit-calc(100% - 40px);
    transition-timing-function: ease;
`;

export const MenuHeader = styled.div`
    width: calc(100% - 20px);
    padding: 10px;
    height: 30px;
    line-height: 30px;
    font-family: sans-serif;
`;

export const ThemeSelector = styled.div`
    display: inline-block;
    border-radius: 50%;
    box-shadow: 0px 0px 2px;
    width: 15px;
    height: 15px;
    border: 2px solid #ccc;
    margin: 0px auto;
`;

export const ThemeSelectorWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
`;