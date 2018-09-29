import React, { Component } from 'react';
import {
    Container,
    Menu,
} from 'semantic-ui-react'

export class HeaderBar extends Component {
    render() {
        return (
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as='a' header>
                        Product validator
                    </Menu.Item>
                </Container>
            </Menu>
        );
    }
}
