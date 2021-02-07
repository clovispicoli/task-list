import React from 'react';
import BaseForm from 'core/pages/Admin/components/BaseForm';
import './styles.scss';

const Form = () => {
    return (
       <BaseForm title="cadastrar uma tarefa">
           <div className="row">
            <div className="col-6">
                <input type="text" className="form-control" />
            </div>
           </div>
       </BaseForm>
    )
}

export default Form; 
