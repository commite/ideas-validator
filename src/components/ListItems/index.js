import React, { Component } from 'react';
import { FieldArray, Field } from 'formik';
import {
    Form,
    Button,
    Input
} from 'semantic-ui-react'

export class ListItems extends Component {
    render() {
        const { name, values = [] } = this.props;

        return (
            <FieldArray
                name={name}
                render={arrayHelpers =>
                    <React.Fragment>
                        {
                            values.map((value, index) => (
                                <Form.Field key={index}>
                                    <Field name={`${name}.${index}`}>
                                        {({ field, form }) =>
                                            <Input   {...field}  action={{ color: 'red', icon: 'trash', onClick: () => arrayHelpers.remove(index) }} />
                                        }
                                    </Field>
                                </Form.Field>
                            ))
                        }
                        <Button style={{ margin: '15px 0'}} type="button" icon='plus square' color='green' onClick={() => arrayHelpers.push("")} />
                    </React.Fragment>
                }
            />
        );
    }
}
