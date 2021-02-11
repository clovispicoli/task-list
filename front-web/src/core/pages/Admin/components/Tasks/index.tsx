import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListCategory from './ListCategory';
import ListHome from './ListHome';
import ListPersonal from './ListPersonal';
import ListUser from './ListUser';
import ListWork from './ListWork';

const Tasks = () => {
    return (
        <div>
            <Switch>
                <Route path="/admin/homes" exact>
                    <ListHome />
                </Route>
                <Route path="/admin/personals" exact>
                    <ListPersonal />
                </Route>
                <Route path="/admin/works" exact>
                    <ListWork />
                </Route>
                <Route path="/admin/categories" exact>
                    <ListCategory />
                </Route>
                <Route path="/admin/users" exact>
                   <ListUser />
                </Route>
                <Route path="/admin/homes/:homeId" exact>
                    <h1>Editar uma tarefa Home</h1>
                </Route>
                <Route path="/admin/personals/:personalId" exact>
                    <h1>Editar uma tarefa Personal</h1>
                </Route>
                <Route path="/admin/works/:workId" exact>
                    <h1>Editar uma tarefa Work</h1>
                </Route>
                <Route path="/admin/categories/:categoryId" exact>
                    <h1>Editar uma tcategoria</h1>
                </Route>
                <Route path="/admin/users/:userId" exact>
                    <h1>Editar uma usuário</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default Tasks;