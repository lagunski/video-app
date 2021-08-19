import {ID_PARAM_PREFIX} from "../constans/common";

const videosIdsToStringConverter = (data: Array<string>):string => ID_PARAM_PREFIX+data.reduce((finalStr:string, item:string)=>{
        return finalStr+ID_PARAM_PREFIX+item;
    });

export default videosIdsToStringConverter;