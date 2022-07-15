import { IErrorMsg } from '@models/validation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Head from 'next/head';
import { useMutation, useQueryClient } from 'react-query/';
import { postTodo } from '../../helper/helper';

const NewData = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation(postTodo, {
        onSuccess: () => {
            alert('success mutate data')
            queryClient.invalidateQueries('todos')
        }
    })

    return (
        <div className='w-full min-h-screen flex justify-center items-center'>
            <Head>
                <title>Add new</title>
            </Head>

            <Formik
                initialValues={{
                    title: '',
                    completed: false
                }}
                validate={values => {
                    const errors: IErrorMsg = {};
                    if (!values.title) {
                        errors.title = 'Title cannot be empty';
                    }
                    // else if (values.title.length > 5) {
                    //     errors.title = 'Must be 5 characters or less';
                    // }
                    else if (values.title.match(/\d/g)) {
                        errors.title = 'No number allowed';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    mutation.mutate(values)
                    setSubmitting(false)
                }}
            >
                {({ isSubmitting }) => (
                    <Form className='w-[30%] h-full flex flex-col items-center justify-evenly py-6 shadow-lg rounded-lg border border-slate-400'>
                        <Field type="text" name="title" className='w-[50%] outline-none rounded-md px-1 border border-slate-400 my-2' placeholder='Todo' />
                        <ErrorMessage name="title" component="div" className='my-2' />
                        <label htmlFor="completed">
                            <Field type='checkbox' name='completed' id='completed' className='my-2' />&nbsp;
                            Completed?
                        </label>
                        <button type="submit" disabled={isSubmitting} className='border px-4 py-1 my-2 bg-green-200 shadow-md rounded-lg hover:bg-green-300 duration-100'>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default NewData;