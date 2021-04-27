import React from "react";

export const AppVisibility = props => {
    return(
        <div className="form-check container">
            <input type="checkbox" className="form-check-input"
                checked={props.isChecked} onChange={e => props.callback(e.target.checked)}/>
                <label>
                    {props.descripcion}
                </label>
        </div>
    )
}