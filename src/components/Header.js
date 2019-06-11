import * as React from 'react';
import {HeaderWrapper, PancakeIconWrapper, PancakeIcon, HeaderLabel, 
    MenuWrapper, MenuHeader, ThemeSelector, ThemeSelectorWrapper} from '../elements/HeaderElements'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sample : ''
        };
    }

    headerLabel = "TrelloBoards"

    render () {
        return (
           <React.Fragment>
               <HeaderWrapper>
                    <PancakeIconWrapper onClick={() => this.props.openMenu()}>
                        <PancakeIcon/>
                        <PancakeIcon/>
                        <PancakeIcon/>
                    </PancakeIconWrapper>
                    <HeaderLabel>{this.headerLabel}</HeaderLabel>
                </HeaderWrapper>
                <MenuWrapper className={'menuWrapper'} style={{transform: 'translateX(' + this.props.menuWidth + ')'}}>
                    <MenuHeader>Theme</MenuHeader>
                    <ThemeSelectorWrapper>
                        <ThemeSelector style={{background : '#0079bf'}} onClick={() => this.props.themeSetter('#0079bf')}/>
                        <ThemeSelector style={{background : '#000000'}} onClick={() => this.props.themeSetter('#000000')}/>
                        <ThemeSelector style={{background : '#344c5a'}} onClick={() => this.props.themeSetter('#344c5a')}/>
                        <ThemeSelector style={{background : '#cccccc'}} onClick={() => this.props.themeSetter('#cccccc')}/>
                        <ThemeSelector style={{background : '#00243a'}} onClick={() => this.props.themeSetter('#00243a')}/>
                    </ThemeSelectorWrapper>
                </MenuWrapper>
           </React.Fragment>
        );
    }
}

export default Header;
