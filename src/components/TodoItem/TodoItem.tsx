import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../Input';
import { Button } from '../Button';
import { deleteTodo, editTodo } from '../../store/actions/actions';
import { ITodo } from '../../interfaces/ITodo';
import './TodoItem.css';

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
            <Input className="input todo-item-date" value={props.date} disabled />
            <Input
                className="input todo-item-description"
                value={description}
                disabled={!isEdit}
                onChange={handleChange}
            />
            <Button className="button" onClick={handleEdit}>
                {isEdit ? 'Save' : 'Edit'}
            </Button>
            <Button className="button delete" onClick={handleDelete}>
                Delete
            </Button>
        </div>
    );
};
