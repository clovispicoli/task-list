import React from 'react';
import { Route, Switch } from 'react-router-dom';
import List from 'core/pages/Admin/components/Tasks/List';
import Form from 'core/pages/Admin/components/Tasks/Form';

const Tasks = () => {
    return (
        <div>
            <Switch>
                <Route path="/admins/tasks" exact>
                   <List />
                </Route>
                <Route path="/admins/tasks/create">
                    <Form />
                </Route>
                <Route path="/admins/tasks/:productId">
                    <h1>
                        Editar uma tarefa
                    </h1>
                </Route>                    
            </Switch>
        </div>
    );
}

export default Tasks;