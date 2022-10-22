import React, { useCallback } from 'react';
import { map } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, setText } from '../store';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.items);
  const text = useSelector((state) => state.text);

  const onChange = useCallback(({ target }) => {
    dispatch(setText(target.value));
  }, [dispatch]);

  const onClick = useCallback(() => {
    dispatch(addItem(text));
  }, [dispatch, text]);

  return (
    <div>
      <div>
        <input data-testid="input-add" value={text} onChange={onChange} />
        <button data-testid="button-add" onClick={onClick}>Добавить</button>
      </div>
      <div data-testid="list" className="list">
        {map(items, (text, i) => <TodoItem key={i} index={i} />)}
      </div>
      <h2>Комментарий для PR</h2>
      <h1>Комментарий для PR 2</h1>
    </div>
  );
}
