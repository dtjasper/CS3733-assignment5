import {BarChart} from "@mui/x-charts";

export function DisplayProcessedData(processedData: number[]){

    /*
    ClothingVotes: 0;
    StuffedAnimalVotes: 1;
    HouseItemVotes: 2;
    OtherVotes: 3;
    NoVotes: 4;
     */

    return(
        <>
            <h3> Most Popular Categories:</h3>
            <ul>
                <li>Clothing: {processedData[0]}</li>
                <li>Stuffed Animals/Toys: {processedData[1]}</li>
                <li>Household Item: {processedData[2]}</li>
                <li>Other: {processedData[3]}</li>
                <li>Did Not Vote: {processedData[4]}</li>
            </ul>

            <BarChart
                height={300}
                series={[{data: processedData}]}
                xAxis={[{ data: ["Clothing", "Stuffed Animals/Toys", "Household Item", "Other", "No Vote"] }]}
                yAxis={[{ width: 50 }]}
            />
            
        </>

    )


}
