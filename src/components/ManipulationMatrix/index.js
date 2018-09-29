import React, { Component } from 'react';
import {
    Table, Radio, Segment
} from 'semantic-ui-react'

export const MANIPULATION_MATRIX_EQUIVALENCY = {
    peddler: `The maker does not use it / Improve the user's life`,
    facilitator: `The maker user it / Improve the user's life`,
    dealer: `The maker does not use it / Does not improve the user's life`,
    entertainer: `The maker user it / Does not improve the user's life`,
}

export class ManipulationMatrix extends Component {
    render() {
        const { value, onChange } = this.props;

        return (
            <Table definition celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell>The maker does not use it</Table.HeaderCell>
                        <Table.HeaderCell>The maker user it</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            Materially improves the user's life
                        </Table.Cell>
                        <Table.Cell>
                            <Segment compact>
                                <label>Peddler</label>
                                <Radio
                                    name='manipulationMatrix'
                                    value='peddler'
                                    checked={value === 'peddler'}
                                    onChange={() => onChange('peddler')}
                                    toggle
                                />
                            </Segment>
                        </Table.Cell>
                        <Table.Cell>
                            <Segment compact>
                                <label>Facilitator</label>
                                <Radio
                                    name='manipulationMatrix'
                                    value='facilitator'
                                    checked={value === 'facilitator'}
                                    onChange={() => onChange('facilitator')}
                                    toggle
                                />
                            </Segment>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>
                            Does not improve the user's life
                        </Table.Cell>
                        <Table.Cell>
                            <Segment compact>
                                <label>Dealer</label>
                                <Radio
                                    name='manipulationMatrix'
                                    value='dealer'
                                    checked={value === 'dealer'}
                                    onChange={() => onChange('dealer')}
                                    toggle
                                />
                            </Segment>
                        </Table.Cell>
                        <Table.Cell>
                            <Segment compact>
                                <label>Entertainer</label>
                                <Radio
                                    name='manipulationMatrix'
                                    value='entertainer'
                                    checked={value === 'entertainer'}
                                    onChange={() => onChange('entertainer')}
                                    toggle
                                />
                            </Segment>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }
}
