export const getSutUrl = (env) =>{
    switch (env) {
        case "sit" :
            return "https://sit.****.com";
        case "uat":
            return "https://uat.****.com";
        case "dev":
            return "https://dev.****.com";
    }
}