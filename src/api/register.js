import ajax from '../utils/ajax';
import { HOST } from '../constants'; 

export function getCaptcha(params) {
    return ajax.post(`${HOST}/user/getCaptcha`, {data: params});
}