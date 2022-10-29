import React from 'react';
import {Logo, Nav, StyledHeader} from "./styled/Header.styled";
import {Container} from "./styled/Container.styled";
import {Button} from "./styled/Button.styled";

const Header = (props) => (
    <StyledHeader>
        <Container>
            <Nav>
                <Logo src='./images/logo.svg' alt=''/>
                <Button>Try It Free</Button>
            </Nav>
        </Container>
    </StyledHeader>
);

export default Header;