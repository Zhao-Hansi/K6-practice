import {checking} from "../utils/responseCheck";
import {procedure} from "../featureAPI/requestProcedures";

export default function calculateAPI(){
    const res = procedure.calculatePaiApi();
    checking.requestSucceedCheck(res, "calculatePaiApi")
}