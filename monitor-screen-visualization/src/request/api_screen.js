import request from '@/utils/request';

  export const getThisYearScale = data =>
  request({
    url: "/data/SJ/DEJF_SHDP_BNYWGM",
    method: "POST",
    data
  });

  export const getMultiTypeScale = data =>
  request({
    url: "/data/SJ/DEJF_SHDP_GYWLXJJGM",
    method: "POST",
    data
  });

  export const getSpecialProductScale = data =>
  request({
    url: "/data/SJ/DEJF_SHDP_TSCPBNLJGM",
    method: "POST",
    data
  });

  export const getMap = data =>
  request({
    url: "/data/SJ/DEJF_SHDP_DT",
    method: "POST",
    data
  });
