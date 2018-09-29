import React, { Component } from 'react';
import {
    Form,
    Checkbox
} from 'semantic-ui-react'

export class PainMatrix extends Component {
    render() {
        const { value, onChange } = this.props;

        return (
            <React.Fragment>
                <Form.Field>
                    <Checkbox
                        radio
                        label='Candy - (a product that is a nice-to-have, that people enjoy and can be wildly successful if it becomes a fad)'
                        name='painMatrix'
                        value='candy'
                        checked={value === 'candy'}
                        onChange={() => onChange('candy')}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        radio
                        label='Vitamins - (a product that is a nice-to-have and serves an emotional need, used to augment and improve things but sometimes harder to quantify and has an unknown market)'
                        name='painMatrix'
                        value='vitamins'
                        checked={value === 'vitamins'}
                        onChange={() => onChange('vitamins')}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        radio
                        label='Pain killer - ( a product that is a need-to-have and serves an obvious need, or solves critical problems that need to be alleviated and has a quantifiable market and thereby immediately monetizable)'
                        name='painMatrix'
                        value='pain_killer'
                        checked={value === 'pain_killer'}
                        onChange={() => onChange('pain_killer')}
                    />
                </Form.Field>
            </React.Fragment>
        );
    }
}
