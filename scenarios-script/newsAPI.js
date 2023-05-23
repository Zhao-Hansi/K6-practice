import {checking} from "../utils/responseCheck";
import {procedure} from "../featureAPI/requestProcedures";

export default function newsAPI(){
    const res = procedure.getNewsApi();
    checking.requestSucceedCheck(res, "newsAPI")
}