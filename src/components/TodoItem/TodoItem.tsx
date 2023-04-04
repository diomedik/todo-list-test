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
    const [date, setDate] = React.useState<string>(props.date);
    const handleDeleteTodo = () => dispatch(deleteTodo(props.id));

    const handleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) =>
        setDescription(event.target.value);

    const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value);

    const handleEditTodo = () => {
        setIsEdit(!isEdit);
        if (isEdit) {
            dispatch(editTodo(props.id, description, date));
        }
    };

    return (
        <div className="todo-item-container">
            <Input
                type="date"
                className="input todo-item-date"
                onChange={handleChangeDate}
                disabled={!isEdit}
                value={date}
            />
            <Input
                className="input todo-item-description"
                value={description}
                disabled={!isEdit}
                onChange={handleChangeDescription}
            />
            <div className="todo-item-buttons-container">
                <Button className="button" onClick={handleEditTodo}>
                    {isEdit ? 'Save' : 'Edit'}
                </Button>
                <Button className="button delete" onClick={handleDeleteTodo}>
                    Delete
                </Button>
            </div>
        </div>
    );
};
