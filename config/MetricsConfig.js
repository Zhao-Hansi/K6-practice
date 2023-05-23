import {Counter, Trend, Rate} from "k6/metrics";

export const metrics = {
    newsAPI: {
        errors : new Counter('get new failed'),
        total_request : new Counter('totally request number'),
        requestDuration : new Trend('newAPI request duration'),
        checkFailureRate : new Rate('check_failure_rate')
    },
    calculatePai: {
        errors: new Counter('get calculate API errors'),
        total_request: new Counter('totally request number'),
        requestDuration : new Trend('calculateAPI request duration'),
        checkFailureRate : new Rate('check_failure_rate')
    },
    errorCheck :{
        generalErrors: new Counter('Errors')
    }
}

