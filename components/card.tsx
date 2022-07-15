import { IItem } from "@models/todo";

const Card = ({ data }: { data: IItem }) => {
    return (
        <div className="w-fit text-lg p-2 rounded-md shadow-sm hover:shadow-lg duration-100 m-2 bg-slate-400">
            {data.title}
        </div>
    );
}

export default Card;