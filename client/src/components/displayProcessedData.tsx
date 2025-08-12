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
            <div className="font-serif text-center p-3">
                <h2 className="font-bold text-xl pb-1 bg-purple-200 rounded-2xl p-0.5"> Interesting Info About the
                    Data!</h2>
                <h4 className="font-semibold"> Most Popular Categories:</h4>
                <ul className="p-0.5">
                    <li>Clothing: {processedData[0]}</li>
                    <li>Stuffed Animals/Toys: {processedData[1]}</li>
                    <li>Household Item: {processedData[2]}</li>
                    <li>Other: {processedData[3]}</li>
                    <li>Did Not Vote: {processedData[4]}</li>
                </ul>
            </div>


            <BarChart
                borderRadius={6}
                height={300}
                series={[{data: processedData}]}
                xAxis={[{
                    data: ["Clothing", "Stuffed Animals/Toys", "Household Item", "Other", "No Vote"],
                    colorMap: {type: 'ordinal', colors: ['oklch(81% 0.117 11.638)', 'oklch(82.3% 0.12 346.018)', 'oklch(82.7% 0.119 306.383)', 'oklch(81.1% 0.111 293.571)', 'oklch(78.5% 0.115 274.713)']}
                }]}
                yAxis={[{width: 50}]}
            />

        </>

    )


}
