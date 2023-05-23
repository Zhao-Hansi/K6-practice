import http from "k6/http";
import {metrics} from "../config/MetricsConfig";
import {getSutUrl} from "../config/EnvConfig";

const sutUrl = getSutUrl(process.env)
const handleMetricsErrors = (errorCounter, res) =>{
    if (res.status !== 200){
        errorCounter.add(1);
        metrics.errorCheck.generalErrors.add(1)
    }
}

export const procedure = {
    getNewsApi: () =>{
        let res = http.get('https://test.k6.io/news.php');
        metrics.newsAPI.total_request.add(1);
        metrics.newsAPI.requestDuration.add(res.timings.duration);
        if (res.status !== 200){
            metrics.newsAPI.checkFailureRate.add(1)
        }
        handleMetricsErrors(metrics.newsAPI.errors, res);
        return res;
    },

    calculatePaiApi: ()  =>{
        let res = http.get('https://test.k6.io/pi.php?decimals=3');
        metrics.calculatePai.total_request.add(1);
        handleMetricsErrors(metrics.calculatePai.errors, res);
        if (res.status !== 200){
            metrics.calculatePai.checkFailureRate.add(1);
        }
        metrics.calculatePai.requestDuration.add(res.timings.duration);
        return res;
    },

    loginAPI(){
        const loginBody = {
            username: 'admin',
            password: 123
        }
        let res = http.post('https://test.k6.io/my_messages.php',loginBody);
        metrics.calculatePai.total_request.add(1);
        handleMetricsErrors(metrics.calculatePai.errors, res);
        if (res.status !== 200){
            metrics.calculatePai.checkFailureRate.add(1);
        }
        metrics.calculatePai.requestDuration.add(res.timings.duration);
        return res;
    }
}



