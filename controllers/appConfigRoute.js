const { json } = require('express');
const Album = require('../models/Album');
const { checkAuthorOwnAlbum } = require('../services/albumServices');
const { resBuilder } = require('../utils/helper');

const getDownloadUrl = async (req, res, next) => {
    try {
        const downloadUrl = 'https://doc-08-3o-docs.googleusercontent.com/docs/securesc/af5kce5kl7le6v84mk14ss6cob2qc8k9/94g9lepmnshrdbhupj8deg8a1s3e5vuh/1675851150000/05611245833157123706/05611245833157123706/1WLK1lt4Xr2Cisl1vrHlu0uxBnBizJ6cZ?e=download&ax=AB85Z1BzMOaqR8pgQ6-NPbSVo8nVp9qsZl7XWc3xwx_02TuGFqrb52kxhC5ZhiIfbz7sGVlZRgMtYnpEgqqCkqm3BXJ7x05vMAlDy9xeHfWSrkE2nTKRCeBx6rjPqdMTIBZJjlcTVFfj2w9YZfYLyRy9w4wT2_KyQRMj9pf7rjZjNL9m2n0a84EHu69n4ffRjfrKkEIiPNpRuXNhVUZ2ljiznlJNLeBN6vl9CbTcwgNkMRHtNbT3uZrL_U0RB4GE6GIHj3RNAz6f1Xu5ZcoiZDjros8uiBc3dlOjP1myt1L57ln3WWq1-nW8MeBGTY0-Vrb8sLvcWd0zi9KQ-Fzl7g4ZvUdyCtFWK4GcwSi_RJlL2j-Ol03eBMFm4Bk54tBsJ9eSHWAKETBywI3lckbhCbtnOeOeq5yGadBG6b05-5KQ0tuhpjVf5EeTw69LPW-fOOH5wz9jAw4fG4fMreRl39rIYmKx_YVjB7BfocRKcEPfTeavRRfv4Y6EFFKEiZ7T5YJPWaFKggBHwVlkVR5ogzO8-NOIZljDfSgQvzNl07RsMQMaZuQG81t4we55FfHjZ9tjincdiaELcgmNQoJy2doIfoW5IzoMiD03AAl7xEaoj1qPFwBewZH0PVzzCswbFofIeAHlgIDSPdJdhyPPQRXewwHiGv12dAwU8ydGH2n-ZgALVOGGMX77YpQcc1Gr3hocCKB-CLkP2EMNG3kkA5T478E_qHOrE6scIlGHisUumgD1ONGZrdAJMA0NE0QF7X6J828ROFrG5TMkJymuowJWvgeRXHNlQi3kb8BpasgZJsVjkhU1osjAoJuSWC0a9cCOBdfFtgE5NO5PE4MD-9qZfGfiZWkGYozjRmGkB1cPlkbcJM3BsmhrNQCgMI3SE9_eWKjTGi3lKhOjV8b2xaDzX4Lv8W5JG1QAKywXVjZriT2N-1HLr_htnEWebYcAM52L3yua7ra6ie272uUEAXpevEQ8ntQYY3WLu2wlcwCz9CJ1gHXVI2Uy-bdIbDYn757nCifojHmfr8qr7bEY&uuid=d597030c-d4a3-4570-a7a0-e81b8afdf683&authuser=0&nonce=m6msrpfqeq2cg&user=05611245833157123706&hash=7uvi34erb0hu7t5vu6o6tvo4lavsn67v';
        const response = resBuilder('success', { downloadUrl, result: 1 }, 'Success');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

module.exports = { getDownloadUrl };