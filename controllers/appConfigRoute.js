const { json } = require('express');
const Album = require('../models/Album');
const { checkAuthorOwnAlbum } = require('../services/albumServices');
const { resBuilder } = require('../utils/helper');

const getDownloadUrl = async (req, res, next) => {
    try {
        const downloadUrl = 'https://doc-08-3o-docs.googleusercontent.com/docs/securesc/af5kce5kl7le6v84mk14ss6cob2qc8k9/nie8hq1rq0totarnjlmf6bv9iio1rdhf/1675848150000/05611245833157123706/05611245833157123706/1WLK1lt4Xr2Cisl1vrHlu0uxBnBizJ6cZ?e=download&ax=AB85Z1ABleAoza1O4ryiVvoW7t0P1WcghZPWNiINUAQwD5w1XIdDqBXsrXAh_jSBTtRpddodnzBQiBInsJ2XzLORf4IWuU9zLTIivYXD-Simeq0pYtp2jXxa7lnBmgKgQgxeIutbE2p1xyOJGUpC_n7x-DPy1_LYw6tZPLfrDos6Ax63yZws_VxXFgmPW4OveroSd6_xG0d9Ih66khTEXQbIwIQHa6h1nVLo82I0239vxckONoWqpDBzZNrxQbK8i__3tjIkdACh7YQlZvwZzRbXzO62p4zdZ7hqUth8Cf8wvgrLWm2SmRdEXqbb4ZN_LKaET2rLrqUbXW4qDO06NcbnyIyKcTbaF78Ls66M3rIY3LBumSTVl_46XSM7FW7bfxaZiA2fwR4oROFa0DvT7rqfngcvhcKfAleRbnF7750WFx0ohxO1Fl5D53nLApRm78n3dOiDVCMogsU9uQyDFhTUEdBW2S9GaizqP5FY0oWLK6xP0tBHaXQ5EuAHMFjGidrlhQK2SMIzmSQdRSsNyiuV2_TteS8SM87WWgoctQyagfJhEZrvF7hePwpGcx-GOIaGOMomxESpQtgiP0m2tGVSzQ3NH3FsmQUIQjHYQyrxeUHbI9e3lBAGv8rduQGrpOH9BgHZ_IaQHgus_NshLcAHWJs2V3xMXWIo5nIu1daSGIRUmJKiFPU8nDcRUk-3vx9PSdjnMSppWefES17bjy0vjkaHy_qsGekPSdIA6fZt5fnOlGxoSDq7EZn4UtDaSkD84-ckkoos8YM0Rwd-gsugrX-pieJR-RSTGuqhRMVtzvctAp8nEWMvC8-k1F6wViMKBd9qGRl0X3JwpCLAfvn-R3mO5Q7FlIHzyfPlCryGOfSygD83hFLdFmJr98BtxsfxbVBSnQNenUtKmI-p-_z-v7xirNZhKhi_q0rNhCnU12sQuAoFoiPrUDpGbKbR7oSAFlyVngs9XGN9UgQca66YXKCOYBs75JQSNuORxXT-FInRUB-h8krJXsBCrWxri8jOXNSzvE9GBRTu8yjO&uuid=25ff23a4-2527-430f-8d05-3276655c9809&authuser=0&nonce=2ggv9243dr4m0&user=05611245833157123706&hash=d3geo94nnm7vfhshp409n5gtlfgfkp58';
        const response = resBuilder('success', { downloadUrl, result: 1 }, 'Success');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

module.exports = { getDownloadUrl };