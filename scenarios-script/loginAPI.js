import {checking} from "../utils/responseCheck";
import {procedure} from "../featureAPI/requestProcedures";

export function LoginAPI(){
    let res = procedure.loginAPI();
    checking.requestSucceedCheck(res, 'loginAPI');
}