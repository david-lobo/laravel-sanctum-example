import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';

function TextInput({ type, label, name, value, error, handleChange }) {
    return (
        <Row className="form-group">
            <Form.Label htmlFor={name} className="col-md-4 col-form-label text-md-right">{label} </Form.Label>
            <Col md={6}>
                <Form.Control
                    className={'form-control' + (error ? ' is-invalid' : '')}
                    type={type}
                    name={name}
                    onChange={handleChange}
                    value={value}
                    required
                    />
                {error
                ? <Form.Control.Feedback type="invalid">
                    <strong>{error}</strong>
                </Form.Control.Feedback> : null}
            </Col>
        </Row>
    );
}

export default TextInput;