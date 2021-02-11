import { makePrivateRequest, makeRequest } from 'core/utils/request';
import React, { useEffect } from 'react'
import BaseForm from 'core/pages/Admin/components/BaseForm';
import './styles.scss';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import history from 'core/utils/history';

type FormState = {
    name: string;
    date: string;
    category: string;
    description: string;
}

type ParamsType = {
    categoryId: string;
}

const FormCategory = () => {
    const { register, handleSubmit, errors, setValue } = useForm<FormState>();
    const { categoryId } = useParams<ParamsType>();
    const isEditing = categoryId !== 'create';
    const formTitle = isEditing ? 'Editar produto' : 'cadastrar um produto';

    useEffect(() => {
        if (isEditing) {
            makeRequest({ url: `/categories/${categoryId}` })
                .then(response => {
                    setValue('name', response.data.name);
                    setValue('date', response.data.date);
                    setValue('description', response.data.description);
                })
        }
    }, [categoryId, isEditing, setValue]);

    const onSubmit = (data: FormState) => {
        makePrivateRequest({
            url: isEditing ? `/categories/${categoryId}` : '/categories',
            method: isEditing ? 'PUT' : 'POST',
            data
        })
            .then(() => {
                toast.info('Produto salvo com sucesso!');
                history.push('/admin/categories');
            })
            .catch(() => {
                toast.error('Erro ao salvar produto!')
            })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <BaseForm
                title={formTitle}
            >
           <div className="row">
            <div className="col-6">
            
            <div className="margin-bottom-30">
                            <input
                                ref={register({
                                    required: "Campo obrigatório",
                                    minLength: { value: 5, message: 'O campo deve ter no mínimo 5 caracteres'},
                                    maxLength: { value: 60, message: 'O campo deve ter no máximo 60 caracteres'}
                                })}
                                name="name"
                                type="text"
                                className="form-control imput-base"
                                placeholder="Nome do produto"
                            />
                            {errors.name && (
                                <div className="invalid-feedback d-block">
                                    {errors.name.message}
                                </div>
                            )}
                        </div>
                        <div className="margin-bottom-30">
                            <input
                                ref={register({ required: "Campo obrigatório" })}
                                name="date"
                                type="number"
                                className="form-control imput-base"
                                placeholder="Data"
                            />
                            {errors.date && (
                                <div className="invalid-feedback d-block">
                                    {errors.date.message}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-6">
                        <textarea
                            ref={register({ required: "Campo obrigatório" })}
                            name="description"
                            className="form-control imput-base"
                            placeholder="Descrição"
                            cols={30}
                            rows={10}
                        />
                        {errors.description && (
                                <div className="invalid-feedback d-block">
                                    {errors.description.message}
                                </div>
                            )}
                    </div>
                </div>
            </BaseForm>
        </form>
    )
}

export default FormCategory;