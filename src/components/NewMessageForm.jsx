import { useState } from 'react';

const NewMessageForm = ({ onSend }) => {
    const [inputText, setInputText] = useState('');

    const _handleChange = (e) => {
        setInputText(e.target.value);
    };

    const _handleSend = (e) => {
        e.preventDefault();
        onSend(inputText);
        setInputText('');
    }

    return (
        <div>
        <input 
        type='text'
        data-testid='messageText'
        value={inputText}
        onChange={_handleChange}
        />
        <button data-testid='sendButton' onClick={_handleSend}>Send</button>
        </div>
    );
}

export default NewMessageForm;


