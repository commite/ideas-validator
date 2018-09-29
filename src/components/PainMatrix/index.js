import React, { Component } from 'react';
import {
    Form,
    Checkbox
} from 'semantic-ui-react'

export const PAIN_MATRIX_EQUIVALENCY = {
    candy: `Candy - Low Pain / Low Frequency`,
    vitaminHF: `Vitamin - Low Pain / High Frequency`,
    vitaminHP: `Vitamin - High Pain / Low Frequency`,
    painKiller: `Pain killer - High Pain / High Frequency`
}

export class PainMatrix extends Component {
    render() {
        const { value, onChange } = this.props;

        return (
            <React.Fragment>
                <Form.Field>
                    <Checkbox
                        radio
                        label={PAIN_MATRIX_EQUIVALENCY.candy}
                        name='painMatrix'
                        value='candy'
                        checked={value === 'candy'}
                        onChange={() => onChange('candy')}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        radio
                        label={PAIN_MATRIX_EQUIVALENCY.vitaminHF}
                        name='painMatrix'
                        value='vitaminHF'
                        checked={value === 'vitaminHF'}
                        onChange={() => onChange('vitaminHF')}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        radio
                        label={PAIN_MATRIX_EQUIVALENCY.vitaminHP}
                        name='painMatrix'
                        value='vitaminHP'
                        checked={value === 'vitaminHP'}
                        onChange={() => onChange('vitaminHP')}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        radio
                        label={PAIN_MATRIX_EQUIVALENCY.painKiller}
                        name='painMatrix'
                        value='painKiller'
                        checked={value === 'painKiller'}
                        onChange={() => onChange('painKiller')}
                    />
                </Form.Field>
            </React.Fragment>
        );
    }
}
