import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormHome from './FormHome';
import FormPersonal from './FormPersonal';
import FormWork from './FormWork';
import ListHome from './ListHome';
import ListPersonal from './ListPersonal';
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
                <Route path="/admin/homes/:homeId" exact>
                    <FormHome />
                </Route>
                <Route path="/admin/personals/:personalId" exact>
                    <FormPersonal />
                </Route>
                <Route path="/admin/works/:workId" exact>
                    <FormWork />
                </Route>
            </Switch>
        </div>
    );
}

export default Tasks;