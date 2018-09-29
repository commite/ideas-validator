import React, { Component } from 'react';
import { Formik, FieldArray, Field } from 'formik';
import {
    Button, Form, Header, TextArea, Card
} from 'semantic-ui-react'
import { ManipulationMatrix } from "../ManipulationMatrix/index";
import { PainMatrix } from "../PainMatrix/index";
import { ListItems } from "../ListItems/index";
import { createInform } from "../../createInform";

const COMPETITOR_EMPTY = {
    name: '',
    doesWell: '',
    doesBad: ''
}

export class IdeaValidatorForm extends Component {
    generateInform = createInform

    render() {
        return (
            <Formik
                initialValues={{
                    name: '',
                    what: '',
                    why: '',
                    who: '',
                    manipulationMatrix: '',
                    painMatrix: '',
                    pressReleaseTitle: '',
                    pressReleaseSubtitle: '',
                    pressReleaseProblem: '',
                    pressReleaseSolution: '',
                    competitiveAnalysis: [{
                        name: '',
                        doesWell: '',
                        doesBad: ''
                    }],
                    redRoutesKeyTasks: [''],
                    redRoutesSecondaryTasks: ['']
                }}
                onSubmit={this.generateInform}
                render={props => (
                    <Form onSubmit={props.handleSubmit}>
                        <Header as='h1'>Product definition</Header>
                        <Header as='h2'>Initial idea</Header>
                        <Form.Field>
                            <label>Product name</label>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.name}
                                name="name"
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>What do we want create?</label>
                            <TextArea
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.what}
                                name="what"
                                rows={3}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Why do we want create it?</label>
                            <TextArea
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.why}
                                name="why"
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Who is going to use it?</label>
                            <TextArea
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.who}
                                name="who"
                            />
                        </Form.Field>
                        <Header as='h2'>Manipulation matrix</Header>
                        <ManipulationMatrix
                            value={props.values.manipulationMatrix}
                            onChange={(value) => {
                                props.setFieldValue('manipulationMatrix', value)
                            }}
                        />
                        <Header as='h2'>Pain matrix</Header>
                        <Header as='h4'>Is your product like candy, vitamins, or pain-killers for your market?</Header>
                        <PainMatrix
                            value={props.values.painMatrix}
                            onChange={(value) => {
                                props.setFieldValue('painMatrix', value)
                            }}
                        />
                        <Header as='h2'>Press release</Header>
                        <Form.Field>
                            <label>Title</label>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.pressReleaseTitle}
                                name="pressReleaseTitle"
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Subtitle</label>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.pressReleaseSubtitle}
                                name="pressReleaseSubtitle"
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Problem</label>
                            <TextArea
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.pressReleaseProblem}
                                name="pressReleaseProblem"
                                rows={3}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Solution</label>
                            <TextArea
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.pressReleaseSolution}
                                name="pressReleaseSolution"
                                rows={3}
                            />
                        </Form.Field>
                        <Header as='h2'>Competitive analysis</Header>
                        <FieldArray
                            name="competitiveAnalysis"
                            render={arrayHelpers => (
                                <React.Fragment>
                                    <Card.Group itemsPerRow={2}>
                                        {props.values.competitiveAnalysis.map((competitor, index) => (
                                            <Card key={index}>
                                                <Card.Content>
                                                    <Form.Field>
                                                        <label>Name</label>
                                                        <Field name={`competitiveAnalysis.${index}.name`} />
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <label>Strong points</label>
                                                        <Field name={`competitiveAnalysis.${index}.doesWell`} component="textarea" rows="3" />
                                                    </Form.Field>
                                                    <Form.Field>
                                                        <label>Weak points</label>
                                                        <Field name={`competitiveAnalysis.${index}.doesBad`} component="textarea" rows="3" />
                                                    </Form.Field>
                                                </Card.Content>
                                                <Card.Content extra textAlign="right">
                                                    <Button type="button" icon='trash'  color='red' onClick={() => arrayHelpers.remove(index)} />
                                                </Card.Content>
                                            </Card>
                                        ))}
                                    </Card.Group>
                                    <Button style={{ margin: '15px 0'}} type="button" icon='plus square' color='green' onClick={() => arrayHelpers.push(COMPETITOR_EMPTY)} />
                                </React.Fragment>
                            )}
                        />
                        <Header as='h2'>Red routes</Header>
                        <Header as='h4'>Main tasks (All time / All users)</Header>
                        <ListItems name="redRoutesKeyTasks" values={props.values.redRoutesKeyTasks} />
                        <Header as='h4'>Secondary tasks (Sometimes / Some users)</Header>
                        <ListItems name="redRoutesSecondaryTasks" values={props.values.redRoutesSecondaryTasks} />
                        <div style={{ marginBottom: '30px'}}>
                            <Button type='submit'>Generate document</Button>
                        </div>
                    </Form>
                )}
            />

        );
    }
}
