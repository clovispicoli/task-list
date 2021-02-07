import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from './List';
import Form from './Form';

const Tasks = () => {
    return (
        <div>
            <Switch>
                <Route path="/admin/tasks" exact>
                   <List />
                </Route>
                <Route path="/admin/tasks/create">
                    <Form />
                </Route>
                <Route path="/admin/tasks/:productId">
                    <h1>
                        Editar uma tarefa
                    </h1>
                </Route>                    
            </Switch>
        </div>
    );
}

export default Tasks;