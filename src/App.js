import React, { useState, useEffect} from "react";
import {AppRow} from './components/AppRow'
import {AppBanner} from './components/AppBanner'
import { AppCreator } from './components/AppCreator';
import { AppVisibility } from './components/AppVisibility';

function App() {
  const [userName, setUserName] = useState('Roca Funnels');
  const [taskItems, setTaskItems] = useState([
  ]);

  useEffect(() => {
    let data = localStorage.getItem('task')
    if (data != null) {
      setTaskItems(JSON.parse(data))
    } else{
      setTaskItems([
        { name: 'Dato de ejemplo', done: false },
        { name: 'Dato de ejemplo',  done: false },
        { name: 'Dato de ejemplo', done: false },
        { name: 'Dato de ejemplo', done: true  },
      ])
      settareaCompleta(true)
    }
  }, [])

  useEffect(() => {
      localStorage.setItem('task', JSON.stringify(taskItems))
  }, [taskItems])

  const CreaTarea = taskName => {
    if (!taskItems.find(t => t.name === taskName)){
      setTaskItems([...taskItems, {name: taskName, done: false}])
    }
  }

  const ActualizarTarea = task =>
    setTaskItems(taskItems.map( t => ( t.name === task.name ? {...t, done : !t.done } : t )))

  const ImprimirTarea = value =>
     taskItems
     .filter(task => task.done === value)
     .map( task => (
      <AppRow task={task} key={task.name} ActualizarTarea={ActualizarTarea} />
  ))

  const [tareaCompleta, settareaCompleta] = useState(true)

  return (
    <div>
      <div >
      <AppBanner userName={userName} taskItems={taskItems} />
      <AppCreator callback={CreaTarea}/>
      </div>
      <div className="container">
     <table className="table table-striped table-bordered">
        <thead>
        <tr>
          <th>Descripción</th>
          <th>Estado</th>
        </tr>
        </thead>       
        <tbody>
          {ImprimirTarea(false)}
          </tbody>
      </table>
      <div className="bg-secondary-text-white text-center p-2">
        <AppVisibility descripcion="Tarea Completada" isChecked={tareaCompleta} callback = {checked => settareaCompleta(checked)}/>
      </div>
      {
        tareaCompleta && (
          <table className="table table-striped table-bordered">
            <thead>
          <tr>
            <th>Descripción</th>
            <th>Estado</th>
          </tr>
          </thead>
          <tbody>
            {ImprimirTarea(true)}
          </tbody>
          </table>
        )
       }
     </div>     
    </div>
  );
}

export default App;
