import React from "react";

function Message({ text, type }) {
    const context = type === 'error' ? 'danger' : type;
    if (text) {
        return (
            <div className={'alert alert-' + context} role="alert">{text}</div>
        )
    }
    return null;
}

export default Message;