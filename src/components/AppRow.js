import React from 'react';

export const AppRow = props => (
    <tr key={props.task.name}>
        <td>{props.task.name}</td>
        <td>
            <input type="checkbox" checked={props.task.done} onChange={ () => props.ActualizarTarea(props.task)}/>
        </td>
      </tr>
);