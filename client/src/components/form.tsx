import {type ChangeEvent, type FormEvent, useState} from "react";
import DisplayedData from "./fulldisplay.tsx";
import {DisplayProcessedData} from "./displayProcessedData.tsx";

export default function FullForm() {

    // Processed data for chart (submit button)
    const [showChart, setShowChart] = useState(false);
    const [chartData, setChartData] = useState([]);

    // Array of all responses (log button)
    const [showTable, setShowTable] = useState(false);
    const [tableData, setTableData] = useState([]);


    const [tempRequest, setTempRequest] = useState({
        Name: "",
        NumYears: "",
        FavMakeCat: "",
        FavMakeItem: "",
        Comments: "",
        });

    function handleChange(e: ChangeEvent<HTMLSelectElement> |
        ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
        console.log("Change detected:", e.target.name, e.target.value);
        setTempRequest({
            ...tempRequest,
            [e.target.name]: e.target.value
        });
    }

    function hideChart(){
        setShowChart(false);
    }
    function hideTable(){
        setShowTable(false);
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tempRequest)
            });
            const processedData = await response.json();
            setChartData(processedData);
            setShowChart(true);
        }
        catch(error){
            console.log(error);
        }
        setTempRequest({
            Name: "",
            NumYears: "",
            FavMakeCat: "",
            FavMakeItem: "",
            Comments: "",});
    }

    async function handleLogs(){

        try{
            const response = await fetch('http://localhost:3000/logs',{});
            const logs = await response.json();
            setTableData(logs);
            setShowTable(true);
        }
        catch(error){
            console.log(error);
        }
    }

    return(
        <>
            <div className="flex justify-center">
                <img src="/crochet1.jpg" alt="an image of yarn, a crochet hook, and scissors." height="400px" width="400px" className="p-2"/>
                <form onSubmit={handleSubmit} className="pl-3 space-y-3.5 font-serif ">

                    <label htmlFor="Name">Name: </label>
                    <input id="Name" name="Name"
                           value={tempRequest.Name}
                           onChange={handleChange}
                           placeholder={"Name"}
                    />

                    <br/>

                    <label htmlFor="NumYears">How Many Years Have You Been Crocheting? </label>
                    <input id="NumYears" name={"NumYears"}
                           value={tempRequest.NumYears}
                           onChange={(e) => handleChange(e)}
                           placeholder={"NumYears"}
                    />

                    <br/>

                    <label htmlFor="FavMakeCat">What generally was your favorite thing you have made? </label>
                    <select id="FavMakeCat" name={"FavMakeCat"}
                            value={tempRequest.FavMakeCat}
                            onChange={(e) => handleChange(e)}>
                        <option value="default" unselectable={"on"}>Select your option</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Stuffed Animal/Toy">Stuffed Animal/Toy</option>
                        <option value="Household Item">Household Item</option>
                        <option value="Other">Other</option>
                    </select>

                    <br/>

                    <label htmlFor="FavMakeItem">What specifcally was your favorite item you have ever made? </label>
                    <input id="FavMakeItem" name={"FavMakeItem"}
                           value={tempRequest.FavMakeItem}
                           onChange={(e) => handleChange(e)}
                           placeholder={"Item"}
                    />

                    <br/>

                    <label htmlFor="Comments">Additional Comments: </label>
                    <textarea id="Comments" name={"Comments"} rows={4} cols={50}
                              value={tempRequest.Comments}
                              onChange={(e) => handleChange(e)}
                    />

                    <br/>
                    <div className="space-x-1 flex justify-center">
                        <button type="submit"
                                className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full">Submit
                        </button>
                        <button type="button"
                                className="bg-pink-700 hover:bg-pink-900 text-white font-bold py-2 px-4 rounded-full"
                                onClick={hideChart}>Hide Stats
                        </button>
                        <br/>

                    </div>
                    <br/>
                </form>
                <img src="/crochet2.jpg" alt="an image of crochet flowers in a heart." height="400px" width="400px"
                     className="p-2"/>
            </div>
            {showChart && DisplayProcessedData(chartData)}
            <div className="space-x-1 flex justify-center">
                <button type="button"
                        className="font-serif bg-rose-400 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded-full"
                        onClick={handleLogs}>Logs
                </button>
                <button type="button"
                        className="bg-rose-700 hover:bg-rose-900 text-white font-bold py-2 px-4 rounded-full"
                        onClick={hideTable}>Hide Logs
                </button>
                <br/>
                <br/>
            </div>
            <div className="font-serif flex justify-center ">
                {showTable && DisplayedData(tableData)}
            </div>

        </>
    )
}
