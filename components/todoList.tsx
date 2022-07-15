import { useContext } from "react";
import Card from "@components/card";
import { authContext } from "@contexts/auth";
import { IItem } from "@models/todo";

const TodoList = ({ data }: { data: IItem[] }) => {
    let { authenticated } = useContext(authContext)

    return (
        <>
            <div className='m-2 text-4xl font-bold flex flex-col'>
                <div>
                    {authenticated ? 'A user is logged in' : 'No user is logged in'}
                </div>
                <div className='m-2 text-2xl font-bold'>
                    Todos
                </div>
            </div>
            <div className='flex flex-wrap flex-row'>
                {
                    data ?
                        data.map(item => (
                            <Card data={item} key={item.id} />
                        ))
                        :
                        'Failed fetch data'
                }
            </div>
        </>
    );
}

export default TodoList;