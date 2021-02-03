import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

function SubmitButton({ buttonText, loadingText, isLoading }) {
    return (
        <Button type="submit" variant="primary" disabled={isLoading}>
            {isLoading ? 
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className="align-middle mr-2"
                /> :
                null}
            <span className="align-middle">{ isLoading ? loadingText : buttonText}</span>
        </Button>
    );
};

export default SubmitButton;