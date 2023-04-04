import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../Input';
import { Button } from '../Button';
import { addTodo } from '../../store/actions/actions';
import { generateId } from '../../utils';

export const CreateTodo = () => {
    const dispatch = useDispatch();
    const [description, setDescription] = React.useState<string>('');
    const [isEmpty, setIsEmpty] = React.useState<boolean>(false);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setDescription(event.target.value);

    const saveTodo = () => {
        const date = new Date();
        if (description.trim() !== '') {
            dispatch(addTodo({ id: generateId(), description, date: date.toDateString() }));
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }
    };

    return (
        <div>
            <Input value={description} onChange={handleChange} status={isEmpty ? 'error' : ''} />
            <Button onClick={saveTodo}>Create todo</Button>
        </div>
    );
};
