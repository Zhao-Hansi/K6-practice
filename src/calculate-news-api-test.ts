import {group, sleep} from "k6";
import newsAPI from "../scenarios-script/newsAPI";

const stageTotal =[
    {duration: "5m", target: 50},
    {duration: "10m", target: 100},
    {duration: "15m", target: 120}
];

const stages1 = (occurrence:number) =>{
    return[
        { duration: stageTotal[0].duration, target: Math.ceil(stageTotal[0].target * occurrence)},
        { duration: stageTotal[1].duration, target: Math.ceil(stageTotal[1].target * occurrence)},
        { duration: stageTotal[2].duration, target: Math.ceil(stageTotal[2].target * occurrence)}
    ]
}

export let options = {
    scenarios:{
        scenarios_1:{
            executor: "ramping-vus",
            startVUs: 0,
            stages: stages1(0.02),
            gracefulRampDown: "0s",
            exec: "scenarios1"
        },
        scenarios_2:{
            executor: "ramping-arrival-rate",
            startVUs: 0,
            stages: stages1(3),
            gracefulRampDown: "0s",
            exec: "scenarios2"
        },
        scenarios_3:{
            executor: "shared-iterations",
            startVUs: 0,
            stages: stages1(0.6),
            gracefulRampDown: "0s",
            exec: "scenarios3"
        }
    }
}

const scenarioWithSleep = (scenario :any) =>{
    scenario();
    sleep(1)
}
export function scenarios1(){
    group("scenarios1", function (){
        scenarioWithSleep(newsAPI)
    })
}
