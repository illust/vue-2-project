/**   
 * api接口统一管理
 */
 import { post } from './http'


 export const apiAddress = p => post('data/SJ/DEJF_SHDP_BNYWGM', p);