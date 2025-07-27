import type {DataEntry} from "../types.ts";

export default function DisplayedData(logs: DataEntry[]) {

    return (
        <>
            <table>
                {logs.map((log, index) => (
                    <tr key={index}>
                        {Object.values(log).map((value) => (
                            <td>{value}</td>
                        ))}
                    </tr>
                ))}
            </table>

        </>
    )
}
