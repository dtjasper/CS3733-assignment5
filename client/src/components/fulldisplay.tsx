import type {DataEntry} from "../types.ts";

export default function DisplayedData(logs: DataEntry[]) {

    return (
        <>
            <br/>
            <br/>
            <div className="relative overflow-x-auto">
                <table className="table-auto border-black">
                    <thead className="text-xs text-black uppercase bg-lime-100">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Years Crocheting
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Favorite Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Favorite Item
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Comments
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {logs.map((log, index) => (
                        <tr key={index} className="odd:bg-pink-200 even:bg-indigo-200 border-b border-black">
                            {Object.values(log).map((value) => (
                                <td className="px-6 py-4">{value}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            </>


            )
            }
