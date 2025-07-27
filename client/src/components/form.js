import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
export default function FullForm() {
    const [tempRequest, setTempRequest] = useState({
        Name: "",
        NumYears: 0,
        FavMakeCat: "",
        FavMakeItem: "",
        Comments: "",
    });
    function handleChange(e) {
        setTempRequest({
            ...tempRequest,
            [e.target.name]: e.target.value
        });
    }
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tempRequest) // Convert the JavaScript object to a JSON string
            });
            const responseData = await response.json();
            console.log(responseData);
            return responseData;
        }
        catch (error) {
            console.log(error);
        }
    }
    async function handleLogs() {
        try {
            const response = await fetch('http://localhost:3000/logs', {});
            const logs = await response.json();
            console.log(logs);
            return logs;
        }
        catch (error) {
            console.log(error);
        }
    }
    return (_jsx(_Fragment, { children: _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("label", { htmlFor: "Name", children: "Name: " }), _jsx("input", { id: "Name", name: "Name", value: tempRequest.Name, onChange: (e) => handleChange(e), placeholder: "Name" }), _jsx("br", {}), _jsx("label", { htmlFor: "NumYears", children: "How Many Years Have You Been Crocheting? " }), _jsx("input", { id: "NumYears", name: "NumYears", value: tempRequest.NumYears, onChange: (e) => handleChange(e), placeholder: "NumYears" }), _jsx("br", {}), _jsx("label", { htmlFor: "FavMakeCat", children: "What generally was your favorite thing you have made? " }), _jsxs("select", { id: "FavMakeCat", name: "FavMakeCat", value: tempRequest.FavMakeCat, onChange: (e) => handleChange(e), children: [_jsx("option", { value: "default", unselectable: "on", children: "Select your option" }), _jsx("option", { value: "Clothing", children: "Clothing" }), _jsx("option", { value: "Stuffed Animal/Toy", children: "Stuffed Animal/Toy" }), _jsx("option", { value: "Household Item", children: "Household Item" }), _jsx("option", { value: "Other", children: "Other" })] }), _jsx("br", {}), _jsx("label", { htmlFor: "FavMakeItem", children: "What specifcally was your favorite item you have ever made? " }), _jsx("input", { id: "FavMakeItem", name: "FavMakeItem", value: tempRequest.FavMakeItem, onChange: (e) => handleChange(e), placeholder: "Item" }), _jsx("br", {}), _jsx("label", { htmlFor: "Comments", children: "Additional Comments: " }), _jsx("textarea", { id: "Comments", name: "Comments", rows: 4, cols: 50, value: tempRequest.Comments, onChange: (e) => handleChange(e) }), _jsx("br", {}), _jsx("button", { type: "submit", children: "Submit" }), _jsx("br", {}), _jsx("br", {}), _jsx("button", { className: "logs", onClick: handleLogs, children: "Logs" })] }) }));
}
