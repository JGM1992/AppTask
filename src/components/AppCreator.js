import React, {useState} from "react";

export const AppCreator = props =>{

    const [nuevaTarea, setnuevaTarea] = useState('')
    const ActualizaTarea = e => setnuevaTarea(e.target.value);
    const CreaTarea = () => {
        props.callback(nuevaTarea)
        setnuevaTarea('')
    }

    return (
        <div className="my-1 container">
        <input type="text" className="form-control" value={nuevaTarea} onChange={ActualizaTarea} >
        </input>
        <button className="btn btn-primary mt1" onClick={CreaTarea}>
            guardar
        </button>
    </div>
    )
    
}