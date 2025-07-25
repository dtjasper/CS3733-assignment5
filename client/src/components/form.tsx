import {type FormEvent, useState} from "react";



export default function FullForm() {

    const [tempRequest, setTempRequest] = useState({
        Name: "",
        NumYears: 0,
        FavMakeCat: "",
        FavMakeItem: "",
        Comments: "",
        });

    function handleChange(e: any) {
        setTempRequest({
            ...tempRequest,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tempRequest)// Convert the JavaScript object to a JSON string
            })
            const responseData = await response.json()
            console.log(responseData)
            return responseData;
        }
        catch(error){
            console.log(error);
        }
    }

    async function handleLogs(){

        try{
            const response = await fetch('http://localhost:3000/logs',{});
            const logs = await response.json();
            console.log(logs);
            return logs;
        }
        catch(error){
            console.log(error);
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>

                <label htmlFor="Name">Name: </label>
                <input id="Name" name={"Name"}
                       value={tempRequest.Name}
                       onChange={(e) => handleChange(e)}
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
                <button type="submit">Submit</button>
                <br/>
                <br/>
                <button className="logs" onClick={handleLogs}>Logs</button>
            </form>
        </>
    )
}
