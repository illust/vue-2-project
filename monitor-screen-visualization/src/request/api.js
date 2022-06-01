/**   
 * api接口统一管理
 */
 import { post } from './http'


 export const getThisYearScale = p => post('data/SJ/DEJF_SHDP_BNYWGM', p)

 export const getMultiTypeScale = p => post('data/SJ/DEJF_SHDP_GYWLXJJGM', p)

 export const getSpecialProductScale = p => post('data/SJ/DEJF_SHDP_TSCPBNLJGM', p)

 export const getMap = p => post('data/SJ/DEJF_SHDP_DT', p)