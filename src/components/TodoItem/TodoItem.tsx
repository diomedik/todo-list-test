import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../Input';
import { Button } from '../Button';
import { deleteTodo, editTodo } from '../../store/actions/actions';
import { ITodo } from '../../interfaces/ITodo';

export const TodoItem = (props: ITodo) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = React.useState<boolean>(false);
    const [description, setDescription] = React.useState<string>(props.description);
    const handleDelete = () => dispatch(deleteTodo(props.id));

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setDescription(event.target.value);

    const handleEdit = () => {
        setIsEdit(!isEdit);
        if (isEdit) {
            dispatch(editTodo(props.id, description));
        }
    };

    return (
        <div className="todo-item-container">
            <Input value={props.date} disabled />
            <Input value={description} disabled={!isEdit} onChange={handleChange} />
            <Button onClick={handleDelete}>Delete</Button>
            <Button onClick={handleEdit}>{isEdit ? 'Save' : 'Edit'}</Button>
        </div>
    );
};
