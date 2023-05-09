
import Constants from './Constants'
let LOG_LEVEL = Constants.LOG_LEVEL_DEBUG;

var Log = {
    d:function(obj,str)
    {
        if(LOG_LEVEL < Constants.LOG_LEVEL_INFO)
        {
            console.debug(obj,str);
        }
        
    },
    i:function(obj,str)
    {
        if(LOG_LEVEL < Constants.LOG_LEVEL_ERROR)
        {
            console.log(obj,str);
        }
        
    },
    e:function(obj,str)
    {
        console.error(obj,str);
    }
}

export default Log;









