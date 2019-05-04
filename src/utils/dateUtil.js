import Format from 'date-fns/format';
import IsToday from 'date-fns/is_today';

export function getMessageTime(date) {
    if(IsToday(date)){
        return(Format(date,'hh:mm:ss'))
    }else{
        return(Format(date,'DD/MM hh:mm:ss'))
    }
}