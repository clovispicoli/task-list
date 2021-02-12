import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Select from 'react-select';
import { makePrivateRequest, makeRequest } from 'core/utils/request';
import { Category } from 'core/types/Tasks';
import BaseForm from '../../BaseForm';
import './styles.scss';

type FormState = {
    name: string;
    date: string;
    description: string;
    categories: Category[];
}

type ParamsType = {
    homeId: string;
}

const FormHome = () => {
    const { register, handleSubmit, errors, setValue, control } = useForm<FormState>();
    const history = useHistory();
    const { homeId } = useParams<ParamsType>();
    const [isLoadingCategories, setIsLoadingCategories] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const isEditing = homeId !== 'create';
    const formTitle = isEditing ? 'Editar tarefa Home' : 'cadastrar uma tarefa home';
    
    useEffect(() => {
        if (isEditing) {
            makeRequest({ url: `/homes/${homeId}` })
                .then(response => {
                    setValue('name', response.data.name);
                    setValue('date', response.data.date);
                    setValue('description', response.data.description);
                    setValue('categories', response.data.categories);
                })
        }
    }, [homeId, isEditing, setValue]);

    useEffect(() => {
        setIsLoadingCategories(true);
        makeRequest({ url: '/categories' })
        .then((response) => setCategories(response.data.content))
        .finally(() => setIsLoadingCategories(false));
    }, []);

    const onSubmit = (data: FormState) => {
        makePrivateRequest({
            url: isEditing ? `/homes/${homeId}` : '/homes',
            method: isEditing ? 'PUT' : 'POST',
            data
        })
            .then(() => {
                toast.info('Tarefa salva com sucesso!');
                history.push('/admin/homes');
            })
            .catch(() => {
                toast.error('Erro ao salvar a tarefa!')
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
                                    minLength: { value: 5, message: 'O campo deve ter no mínimo 5 caracteres' },
                                    maxLength: { value: 60, message: 'O campo deve ter no máximo 60 caracteres' }
                                })}
                                name="name"
                                type="text"
                                className="form-control imput-base"
                                placeholder="Nome da tarefa"
                            />
                            {errors.name && (
                                <div className="invalid-feedback d-block">
                                    {errors.name.message}
                                </div>
                            )}
                        </div>
                        <div className="margin-bottom-30">
                            <Controller
                                as={Select}
                                name="categories"
                                rules={{ required: true }}
                                control={control}
                                isLoading={isLoadingCategories}
                                options={categories}
                                getOptionLabel={(option: Category) => option.name}
                                getOptionValue={(option: Category) => String(option.id)}
                                classNamePrefix="categories-select"
                                placeholder="Categorias"
                                isMulti
                            />
                             {errors.categories && (
                              <div className="invalid-feedback d-block">
                                    Campo obrigatório
                              </div>
                            )}
                        </div>
                        <div className="margin-bottom-30">
                            <input
                                ref={register({ required: "Campo obrigatório" })}
                                name="name"
                                type="text"
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

export default FormHome;