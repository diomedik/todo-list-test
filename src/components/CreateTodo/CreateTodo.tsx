import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../Input';
import { Button } from '../Button';
import { addTodo } from '../../store/actions/actions';
import { generateId } from '../../utils';
import './CreateTodo.css';

export const CreateTodo = () => {
    const dispatch = useDispatch();
    const [description, setDescription] = React.useState<string>('');
    const [isEmpty, setIsEmpty] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (description.trim() !== '') {
            setIsEmpty(false);
        }
    }, [description]);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setDescription(event.target.value);

    const saveTodo = () => {
        if (description.trim() !== '') {
            dispatch(addTodo({ id: generateId(), description, date: new Date().toDateString() }));
            setDescription('');
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }
    };

    return (
        <div className="create-todo-container">
            <Input
                allowClear
                value={description}
                onChange={handleChange}
                status={isEmpty ? 'error' : ''}
                className="create-todo-input"
            />
            <Button className="create-todo-button" onClick={saveTodo}>
                Create todo
            </Button>
        </div>
    );
};
