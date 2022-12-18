const Album = require('../models/Album');
const Post = require('../models/Post');
const { checkAuthorOwnPost } = require('../services/postServices');
const { resBuilder } = require('../utils/helper');

const json1 = {
    "e": 0,
    "m": "Success",
    "r": [
        {
            "ID": 583376,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-11-07T07:44:41.657",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"943547ATE16678070650MucR\",\"requestId\":\"943547ATE16678070652cEPJ\",\"amount\":500000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":31651655734,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1667781881123,\"extraData\":\"ttkv\",\"signature\":\"7165d27ad802dbfdb1e04d9c43ad2c602f299ccd3c4bd652a61f262bd3a77414\"}",
            "TransID": "31651655734",
            "StatusReCharges": "1",
            "CurrentAmount": "160",
            "AfterChargedAmount": "4910"
        },
        {
            "ID": 506591,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "200000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-10-16T21:50:24.62",
            "GameName": "ttkv",
            "PackageName": "MoMo-200000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"943547ATE1665957015oUH0c\",\"requestId\":\"943547ATE1665957015sT8sG\",\"amount\":200000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":29957866598,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1665931824307,\"extraData\":\"ttkv\",\"signature\":\"c59fb6b23fe5a69b1c7eb95000c070f7c1040cea17336884ebc1876138247500\"}",
            "TransID": "29957866598",
            "StatusReCharges": "1",
            "CurrentAmount": "130",
            "AfterChargedAmount": "2030"
        },
        {
            "ID": 472685,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "20000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-10-08T10:46:51.827",
            "GameName": "ttkv",
            "PackageName": "MoMo-20000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"943547ATE1665225988H9tOx\",\"requestId\":\"943547ATE1665225988vkgK5\",\"amount\":20000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":29638296748,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1665200811504,\"extraData\":\"ttkv\",\"signature\":\"0faa3f2f68a4bd7cb66920478333812c9d8c5184af30c1a31d8f4d07a413c618\"}",
            "TransID": "29638296748",
            "StatusReCharges": "1",
            "CurrentAmount": "3130",
            "AfterChargedAmount": "3320"
        },
        {
            "ID": 466279,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-10-06T21:57:12.077",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"943547ATE1665093409Lpftg\",\"requestId\":\"943547ATE1665093409JY80Y\",\"amount\":500000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":29586658721,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1665068231688,\"extraData\":\"ttkv\",\"signature\":\"64b0dd9ed363ca88e16b34b7a6f28f12ee329ac1d3a60599c5407579c5d340ee\"}",
            "TransID": "29586658721",
            "StatusReCharges": "1",
            "CurrentAmount": "1420",
            "AfterChargedAmount": "6170"
        },
        {
            "ID": 449191,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "1000000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-10-02T14:22:48.333",
            "GameName": "ttkv",
            "PackageName": "MoMo-1000000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1664720546\",\"requestId\":\"ATE1664720546\",\"amount\":1000000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":29427320750,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1664695368046,\"extraData\":\"ttkv\",\"signature\":\"99b0be9b939f29dac23679e463fa680dedb4d0a08b320620295fc54cf76351dd\"}",
            "TransID": "29427320750",
            "StatusReCharges": "1",
            "CurrentAmount": "90",
            "AfterChargedAmount": "9590"
        },
        {
            "ID": 449141,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "1000000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-10-02T14:01:55.453",
            "GameName": "ttkv",
            "PackageName": "MoMo-1000000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1664719299\",\"requestId\":\"ATE1664719299\",\"amount\":1000000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":29426848869,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1664694115130,\"extraData\":\"ttkv\",\"signature\":\"c65d80a962a08c98b9add114c25a278a47e4aa644ea8b837de07da146f72ecba\"}",
            "TransID": "29426848869",
            "StatusReCharges": "1",
            "CurrentAmount": "590",
            "AfterChargedAmount": "10090"
        },
        {
            "ID": 441971,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-09-30T21:36:12.3",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1664573740\",\"requestId\":\"ATE1664573740\",\"amount\":500000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":29373070872,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1664548571855,\"extraData\":\"ttkv\",\"signature\":\"f9bcb4e891976997cd428be50705eb81e3865bf02c57cc27eaac35a7a7e30893\"}",
            "TransID": "29373070872",
            "StatusReCharges": "1",
            "CurrentAmount": "2770",
            "AfterChargedAmount": "7520"
        },
        {
            "ID": 432252,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "200000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-09-28T05:00:48.193",
            "GameName": "ttkv",
            "PackageName": "MoMo-200000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1664341236\",\"requestId\":\"ATE1664341236\",\"amount\":200000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":29281084242,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1664316047884,\"extraData\":\"ttkv\",\"signature\":\"b3a850645821c622a90cf119569561f573031dd6b514613aa247630a0fc88561\"}",
            "TransID": "29281084242",
            "StatusReCharges": "1",
            "CurrentAmount": "6210",
            "AfterChargedAmount": "8110"
        },
        {
            "ID": 429272,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "1000000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-09-27T09:37:11.72",
            "GameName": "ttkv",
            "PackageName": "MoMo-1000000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1664271421\",\"requestId\":\"ATE1664271421\",\"amount\":1000000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":29255035523,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1664246231349,\"extraData\":\"ttkv\",\"signature\":\"061bed341151eb57cc38dfe5e23ed7fc8ac7ede25543147e7450ee0e0e9657f6\"}",
            "TransID": "29255035523",
            "StatusReCharges": "1",
            "CurrentAmount": "310",
            "AfterChargedAmount": "9810"
        },
        {
            "ID": 424714,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-09-26T04:55:51.493",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1664168131\",\"requestId\":\"ATE1664168131\",\"amount\":500000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":29216296555,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1664142951183,\"extraData\":\"ttkv\",\"signature\":\"b05e5b088313c5c70588f8c9e9f3843786fe8a958569d5c9242a0c419f9992f9\"}",
            "TransID": "29216296555",
            "StatusReCharges": "1",
            "CurrentAmount": "70",
            "AfterChargedAmount": "4820"
        },
        {
            "ID": 420413,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "1000000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-09-25T04:59:36.723",
            "GameName": "ttkv",
            "PackageName": "MoMo-1000000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1664081966\",\"requestId\":\"ATE1664081966\",\"amount\":1000000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":29182455593,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1664056776509,\"extraData\":\"ttkv\",\"signature\":\"76ce564353e2fe0a3a088225fc549ef56e23f4fbd5617f438e2813bb607e93e2\"}",
            "TransID": "29182455593",
            "StatusReCharges": "1",
            "CurrentAmount": "4570",
            "AfterChargedAmount": "14070"
        },
        {
            "ID": 415710,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-09-24T05:04:58.747",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1663995890\",\"requestId\":\"ATE1663995890\",\"amount\":500000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":29149758148,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1663970698497,\"extraData\":\"ttkv\",\"signature\":\"ecdd185b4f5612b45b36c99e850e25c3a962c2e55668df467e6c31b9c85dd3e0\"}",
            "TransID": "29149758148",
            "StatusReCharges": "1",
            "CurrentAmount": "320",
            "AfterChargedAmount": "5070"
        },
        {
            "ID": 408531,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-09-22T06:09:58.667",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1663826983\",\"requestId\":\"ATE1663826983\",\"amount\":500000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":29082584361,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1663801798400,\"extraData\":\"ttkv\",\"signature\":\"e418c609aa8b2cbeed0e41958ad1949d98df2c3436e512624c44b2e73f3b3fbe\"}",
            "TransID": "29082584361",
            "StatusReCharges": "1",
            "CurrentAmount": "570",
            "AfterChargedAmount": "5320"
        },
        {
            "ID": 392834,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-09-18T05:10:27.21",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1663477808\",\"requestId\":\"ATE1663477808\",\"amount\":500000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":28946546549,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1663452626928,\"extraData\":\"ttkv\",\"signature\":\"ab6f099bf8afacf7706171cf4010c15172fe7063f23fb6c0081a713f4cdc4379\"}",
            "TransID": "28946546549",
            "StatusReCharges": "1",
            "CurrentAmount": "1160",
            "AfterChargedAmount": "5910"
        },
        {
            "ID": 384317,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "200000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-09-16T05:03:34.43",
            "GameName": "ttkv",
            "PackageName": "MoMo-200000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1663304607\",\"requestId\":\"ATE1663304607\",\"amount\":200000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":28879984045,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1663279414151,\"extraData\":\"ttkv\",\"signature\":\"4751a6e2afaa81b1f3b9b9f42f988613513866bd1eaf9e7eb3bf2584424c154c\"}",
            "TransID": "28879984045",
            "StatusReCharges": "1",
            "CurrentAmount": "430",
            "AfterChargedAmount": "2330"
        },
        {
            "ID": 377135,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "100000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-09-14T05:04:40.02",
            "GameName": "ttkv",
            "PackageName": "MoMo-100000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1663131862\",\"requestId\":\"ATE1663131862\",\"amount\":100000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":28781005325,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1663106679766,\"extraData\":\"ttkv\",\"signature\":\"c85bc09af9f26b99deaa1e0f42e970a12f46f00d7e34a96403934809d4ca0a97\"}",
            "TransID": "28781005325",
            "StatusReCharges": "1",
            "CurrentAmount": "520",
            "AfterChargedAmount": "1470"
        },
        {
            "ID": 369503,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "200000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-09-12T06:04:19.577",
            "GameName": "ttkv",
            "PackageName": "MoMo-200000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1662962643\",\"requestId\":\"ATE1662962643\",\"amount\":200000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":28709298769,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1662937459329,\"extraData\":\"ttkv\",\"signature\":\"44e634ad4e2c7c10af8fbeff67f67809b7b505c3d0b8186415021741b2ea787c\"}",
            "TransID": "28709298769",
            "StatusReCharges": "1",
            "CurrentAmount": "120",
            "AfterChargedAmount": "2020"
        },
        {
            "ID": 369400,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "100000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-09-12T05:07:08.01",
            "GameName": "ttkv",
            "PackageName": "MoMo-100000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1662959198\",\"requestId\":\"ATE1662959198\",\"amount\":100000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":28708293218,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1662934027789,\"extraData\":\"ttkv\",\"signature\":\"36da0b4e8497bf564945d2cf39331d7177eb6df48ce4dbe85bd2c0de1dd75d6a\"}",
            "TransID": "28708293218",
            "StatusReCharges": "1",
            "CurrentAmount": "2170",
            "AfterChargedAmount": "3120"
        },
        {
            "ID": 369385,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "200000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-09-12T04:51:56.217",
            "GameName": "ttkv",
            "PackageName": "MoMo-200000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1662958303\",\"requestId\":\"ATE1662958303\",\"amount\":200000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":28708291930,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1662933115833,\"extraData\":\"ttkv\",\"signature\":\"4c3413af87dba5d71f00fabd48f92b2aff376b14095c68df29566ee1e6b131a9\"}",
            "TransID": "28708291930",
            "StatusReCharges": "1",
            "CurrentAmount": "270",
            "AfterChargedAmount": "2170"
        },
        {
            "ID": 352316,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-09-08T05:13:26.3",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1662613979\",\"requestId\":\"ATE1662613979\",\"amount\":500000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":28553144702,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1662588805884,\"extraData\":\"ttkv\",\"signature\":\"9b8fd0c3ae0447d7edf9a57fb62ae2c0566c2c35df953cbf7f07a76300eaa7c0\"}",
            "TransID": "28553144702",
            "StatusReCharges": "1",
            "CurrentAmount": "6030",
            "AfterChargedAmount": "10780"
        },
        {
            "ID": 349360,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "1000000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-09-07T09:48:11.127",
            "GameName": "ttkv",
            "PackageName": "MoMo-1000000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1662544071\",\"requestId\":\"ATE1662544071\",\"amount\":1000000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":28520157094,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1662518890718,\"extraData\":\"ttkv\",\"signature\":\"cb291f32df59cd4d360a0b12dd09ef345dadf348d1cd0e110b4e3689d32892ba\"}",
            "TransID": "28520157094",
            "StatusReCharges": "1",
            "CurrentAmount": "30",
            "AfterChargedAmount": "9530"
        },
        {
            "ID": 341847,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-09-05T06:05:16.203",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1662357900\",\"requestId\":\"ATE1662357900\",\"amount\":500000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":28436281197,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1662332715814,\"extraData\":\"ttkv\",\"signature\":\"47fc4d176bcb053539d383048e85287ab1c305baa40845efb6b85c6107d574a2\"}",
            "TransID": "28436281197",
            "StatusReCharges": "1",
            "CurrentAmount": "120",
            "AfterChargedAmount": "4870"
        },
        {
            "ID": 330071,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-09-02T06:04:56.723",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1662098680\",\"requestId\":\"ATE1662098680\",\"amount\":500000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":28336913619,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1662073496261,\"extraData\":\"ttkv\",\"signature\":\"3d44db5d042eb495bfcfa324f8916ed5430cc13ce61e0f0c00a117f3fee689ac\"}",
            "TransID": "28336913619",
            "StatusReCharges": "1",
            "CurrentAmount": "410",
            "AfterChargedAmount": "5160"
        },
        {
            "ID": 325595,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-08-31T22:20:34.207",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1661984416\",\"requestId\":\"ATE1661984416\",\"amount\":500000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":28296832418,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1661959233677,\"extraData\":\"ttkv\",\"signature\":\"be25c468c7d47e7eea116efc1fe89ff02fc0bd26f8ca6fcdb7fce259b4daa0fd\"}",
            "TransID": "28296832418",
            "StatusReCharges": "1",
            "CurrentAmount": "90",
            "AfterChargedAmount": "4840"
        },
        {
            "ID": 315843,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-08-28T17:28:06.127",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1661707672\",\"requestId\":\"ATE1661707672\",\"amount\":500000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":28144578239,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1661682485626,\"extraData\":\"ttkv\",\"signature\":\"f62a0e4c081c800db52d63d4487b40cdcbbfe649ae2f9c26cf46b02fb35dd906\"}",
            "TransID": "28144578239",
            "StatusReCharges": "1",
            "CurrentAmount": "12520",
            "AfterChargedAmount": "17270"
        },
        {
            "ID": 315839,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-08-28T17:27:08.62",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1661707613\",\"requestId\":\"ATE1661707613\",\"amount\":500000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":28145131573,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1661682428292,\"extraData\":\"ttkv\",\"signature\":\"ed4e82a6659e911d2cd97e26c16c0b95fa00298cd3fad21019441d17165d1053\"}",
            "TransID": "28145131573",
            "StatusReCharges": "1",
            "CurrentAmount": "7770",
            "AfterChargedAmount": "12520"
        },
        {
            "ID": 315835,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-08-28T17:25:43.93",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1661707534\",\"requestId\":\"ATE1661707534\",\"amount\":500000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":28145130977,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1661682343562,\"extraData\":\"ttkv\",\"signature\":\"0e7267388e2e67542fea93e3d1ef4be5429dfe9da291f9299da7a4cf8275191b\"}",
            "TransID": "28145130977",
            "StatusReCharges": "1",
            "CurrentAmount": "3020",
            "AfterChargedAmount": "7770"
        },
        {
            "ID": 315149,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-08-28T11:59:45.147",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1661687961\",\"requestId\":\"ATE1661687961\",\"amount\":500000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":28135759228,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1661662784738,\"extraData\":\"ttkv\",\"signature\":\"a033d1300cc24d359fc180f4ffc573e6ba8c00d390c1df5f3706125c25f85ec9\"}",
            "TransID": "28135759228",
            "StatusReCharges": "1",
            "CurrentAmount": "270",
            "AfterChargedAmount": "5020"
        },
        {
            "ID": 300437,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-08-23T19:53:47.687",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1661284418\",\"requestId\":\"ATE1661284418\",\"amount\":500000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":27956005638,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1661259227280,\"extraData\":\"ttkv\",\"signature\":\"abe2debf6a6e14cceef8b33f0f03fe8a367cbb9fcd71a3868ace22e9afab14aa\"}",
            "TransID": "27956005638",
            "StatusReCharges": "1",
            "CurrentAmount": "700",
            "AfterChargedAmount": "5450"
        },
        {
            "ID": 300420,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "200000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-08-23T19:51:08.21",
            "GameName": "ttkv",
            "PackageName": "MoMo-200000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1661284242\",\"requestId\":\"ATE1661284242\",\"amount\":200000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":27956201159,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1661259067827,\"extraData\":\"ttkv\",\"signature\":\"c2947c07595983e475a43ed7ca54fd29ef10af85d1f624dc93013bca13280852\"}",
            "TransID": "27956201159",
            "StatusReCharges": "1",
            "CurrentAmount": "1800",
            "AfterChargedAmount": "3700"
        },
        {
            "ID": 298980,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "200000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-08-23T09:19:32.243",
            "GameName": "ttkv",
            "PackageName": "MoMo-200000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1661246348\",\"requestId\":\"ATE1661246348\",\"amount\":200000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":27935904489,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1661221171887,\"extraData\":\"ttkv\",\"signature\":\"291e8669f4be5e774d1842dae6d0f80c363c95259c4f7e858757bcf08b6df8e7\"}",
            "TransID": "27935904489",
            "StatusReCharges": "1",
            "CurrentAmount": "400",
            "AfterChargedAmount": "2300"
        },
        {
            "ID": 295331,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "50000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-08-22T06:33:43.947",
            "GameName": "ttkv",
            "PackageName": "MoMo-50000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1661150000\",\"requestId\":\"ATE1661150000\",\"amount\":50000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":27895594888,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1661124823544,\"extraData\":\"ttkv\",\"signature\":\"248df68d06428c00acf2ec5553e273f18adf8a20dcf004c4f20b21cea88604df\"}",
            "TransID": "27895594888",
            "StatusReCharges": "1",
            "CurrentAmount": "765",
            "AfterChargedAmount": "1240"
        },
        {
            "ID": 291369,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "100000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-08-20T22:25:42.983",
            "GameName": "ttkv",
            "PackageName": "MoMo-100000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1661034288\",\"requestId\":\"ATE1661034288\",\"amount\":100000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":27858275089,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1661009142701,\"extraData\":\"ttkv\",\"signature\":\"611ed616994c5f7943b15b13cbfe92907f0c0519ad3e3c8d93cad160552a5276\"}",
            "TransID": "27858275089",
            "StatusReCharges": "1",
            "CurrentAmount": "155",
            "AfterChargedAmount": "1105"
        },
        {
            "ID": 291260,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "20000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-08-20T21:36:34.293",
            "GameName": "ttkv",
            "PackageName": "MoMo-20000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1661031354\",\"requestId\":\"ATE1661031354\",\"amount\":20000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":27857262192,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1661006193926,\"extraData\":\"ttkv\",\"signature\":\"47190b6de1ca56d62f9d93462d699342380efbffb7035708eaacc347c86e6d1e\"}",
            "TransID": "27857262192",
            "StatusReCharges": "1",
            "CurrentAmount": "135",
            "AfterChargedAmount": "325"
        },
        {
            "ID": 291215,
            "IsEnabled": true,
            "UserId": 943547,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "50000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-08-20T21:21:29.2",
            "GameName": "ttkv",
            "PackageName": "MoMo-50000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"ATE1661030423\",\"requestId\":\"ATE1661030423\",\"amount\":50000,\"orderInfo\":\"943547\",\"orderType\":\"momo_wallet\",\"transId\":27856417276,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1661005288884,\"extraData\":\"ttkv\",\"signature\":\"4e3f950c7d10d0eeddfc79d21e48aa4f695f47d7659efaafb38783eecb024e82\"}",
            "TransID": "27856417276",
            "StatusReCharges": "1",
            "CurrentAmount": null,
            "AfterChargedAmount": null
        }
    ],
    "c": null
}

const json = {
    "e": 0,
    "m": "Success",
    "r": [
        {
            "ID": 664818,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-12-11T04:59:06.8",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE1670734734sGmxo\",\"requestId\":\"940788ATE16707347343FO5E\",\"amount\":500000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":33124057391,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1670709546069,\"extraData\":\"ttkv\",\"signature\":\"f097ac5e6355238aae217604da3334e3bd80a9bce59aeccbee81bfe36ce113f1\"}",
            "TransID": "33124057391",
            "StatusReCharges": "1",
            "CurrentAmount": "2310",
            "AfterChargedAmount": "7060"
        },
        {
            "ID": 654571,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "1000000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-12-05T16:52:17.49",
            "GameName": "ttkv",
            "PackageName": "MoMo-1000000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE1670259125XC6n4\",\"requestId\":\"940788ATE1670259125U9oDb\",\"amount\":1000000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":32859748172,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1670233936771,\"extraData\":\"ttkv\",\"signature\":\"8495e2568c823e015406fec99c07fcbdf5ffc64d19da14604f822a15d9794569\"}",
            "TransID": "32859748172",
            "StatusReCharges": "1",
            "CurrentAmount": "4960",
            "AfterChargedAmount": "14460"
        },
        {
            "ID": 652316,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "1000000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-12-04T19:53:36.59",
            "GameName": "ttkv",
            "PackageName": "MoMo-1000000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE1670183608tZsUe\",\"requestId\":\"940788ATE1670183608KGZ4j\",\"amount\":1000000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":32824065034,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1670158415833,\"extraData\":\"ttkv\",\"signature\":\"90d0dc334c4d58ca6a011597c95682a5b731618d970bc2dbd3317db09a66b043\"}",
            "TransID": "32824065034",
            "StatusReCharges": "1",
            "CurrentAmount": "1460",
            "AfterChargedAmount": "10960"
        },
        {
            "ID": 648353,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-12-03T04:58:25.703",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE16700434528GTyk\",\"requestId\":\"940788ATE16700434527khWs\",\"amount\":500000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":32752584193,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1670018304990,\"extraData\":\"ttkv\",\"signature\":\"6eac38806d913c3897de12f9198f5a6a8d19c565fa71073ef415f7d3a330c2c5\"}",
            "TransID": "32752584193",
            "StatusReCharges": "1",
            "CurrentAmount": "1050",
            "AfterChargedAmount": "5800"
        },
        {
            "ID": 644010,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-11-30T22:04:30.383",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE1669845859oyCKB\",\"requestId\":\"940788ATE1669845859dBS3z\",\"amount\":500000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":32661609914,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1669820669969,\"extraData\":\"ttkv\",\"signature\":\"85c2d033f3889d1b15fe216229175fc5de1980b43e34eb0baeddbfa50045729e\"}",
            "TransID": "32661609914",
            "StatusReCharges": "1",
            "CurrentAmount": "810",
            "AfterChargedAmount": "5560"
        },
        {
            "ID": 640702,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-11-28T22:46:22.317",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE1669675565HWFEA\",\"requestId\":\"940788ATE16696755659Vb10\",\"amount\":500000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":32582503735,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1669650381739,\"extraData\":\"ttkv\",\"signature\":\"cb97320d62704b51c7e2211d7de010adbe3bca2771092dfb05c906ca0a8659e5\"}",
            "TransID": "32582503735",
            "StatusReCharges": "1",
            "CurrentAmount": "570",
            "AfterChargedAmount": "5320"
        },
        {
            "ID": 635125,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-11-26T20:10:09.01",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE1669493397SBwWh\",\"requestId\":\"940788ATE1669493397fH4F9\",\"amount\":500000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":32499937952,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1669468208265,\"extraData\":\"ttkv\",\"signature\":\"a9b7bce5da629b4301a7c50ccd5b430611beb92faecaf22f09bda3c30e924e78\"}",
            "TransID": "32499937952",
            "StatusReCharges": "1",
            "CurrentAmount": "8490",
            "AfterChargedAmount": "13240"
        },
        {
            "ID": 633357,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "1000000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-11-26T04:51:01.533",
            "GameName": "ttkv",
            "PackageName": "MoMo-1000000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE1669438244cZfdW\",\"requestId\":\"940788ATE16694382447qTb1\",\"amount\":1000000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":32469695344,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1669413061110,\"extraData\":\"ttkv\",\"signature\":\"9d04fe5c76853182397bb3f815cb2f3bd0b1f651bdc630e591e241d25c2ee58a\"}",
            "TransID": "32469695344",
            "StatusReCharges": "1",
            "CurrentAmount": "1160",
            "AfterChargedAmount": "10660"
        },
        {
            "ID": 631017,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-11-25T05:04:06.613",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE1669352615CCQSj\",\"requestId\":\"940788ATE1669352615PPiwF\",\"amount\":500000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":32417292571,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1669327446186,\"extraData\":\"ttkv\",\"signature\":\"31d1b5f7e36b8b2d5bf3c0cfe438d2ab7efdeff34c7f9edb5245ccee2bb4c552\"}",
            "TransID": "32417292571",
            "StatusReCharges": "1",
            "CurrentAmount": "10",
            "AfterChargedAmount": "4760"
        },
        {
            "ID": 610507,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "200000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-11-16T20:06:53.783",
            "GameName": "ttkv",
            "PackageName": "MoMo-200000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE1668629140VTvVd\",\"requestId\":\"940788ATE1668629140Q5h14\",\"amount\":200000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":32081347221,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1668604013051,\"extraData\":\"ttkv\",\"signature\":\"0636a97b1aba8f1e7d0e46c6c60b36996ed21660c957f0de90f3acf04dc149a3\"}",
            "TransID": "32081347221",
            "StatusReCharges": "1",
            "CurrentAmount": "1660",
            "AfterChargedAmount": "3560"
        },
        {
            "ID": 606874,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "200000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-11-15T05:04:37.383",
            "GameName": "ttkv",
            "PackageName": "MoMo-200000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE1668488665dTksE\",\"requestId\":\"940788ATE16684886651r9Q0\",\"amount\":200000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":31992931122,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1668463476677,\"extraData\":\"ttkv\",\"signature\":\"f77e2725316b5801c5deb731a913e6db68b9c7b8a167bbaa3f357cd56816e7ea\"}",
            "TransID": "31992931122",
            "StatusReCharges": "1",
            "CurrentAmount": "100",
            "AfterChargedAmount": "2000"
        },
        {
            "ID": 596027,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "1000000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-11-11T21:15:21.77",
            "GameName": "ttkv",
            "PackageName": "MoMo-1000000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE1668201289JZzL8\",\"requestId\":\"940788ATE1668201289WEsQF\",\"amount\":1000000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":31858608103,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1668176121182,\"extraData\":\"ttkv\",\"signature\":\"f05728a71f3ba5b31532596a11cbf2b7fe11d5d65d0ea5f10b09468be6f1547e\"}",
            "TransID": "31858608103",
            "StatusReCharges": "1",
            "CurrentAmount": "940",
            "AfterChargedAmount": "10440"
        },
        {
            "ID": 584505,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-11-07T15:14:45.163",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE1667834064uqZ9g\",\"requestId\":\"940788ATE1667834064VGqNH\",\"amount\":500000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":31667897803,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1667808884774,\"extraData\":\"ttkv\",\"signature\":\"10ffc28a9ebc7fab88dccc4c74f977cfece3584ba9ae39ea231ef03771ccea2e\"}",
            "TransID": "31667897803",
            "StatusReCharges": "1",
            "CurrentAmount": "9700",
            "AfterChargedAmount": "14450"
        },
        {
            "ID": 584502,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "1000000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-11-07T15:12:07.007",
            "GameName": "ttkv",
            "PackageName": "MoMo-1000000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE1667833906BS4HP\",\"requestId\":\"940788ATE1667833906DPJ6x\",\"amount\":1000000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":31668115362,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1667808726474,\"extraData\":\"ttkv\",\"signature\":\"06148f0bd3a85c6599a29e026e432d25e4ffe73f9b1fd839b7a338ac135830f7\"}",
            "TransID": "31668115362",
            "StatusReCharges": "1",
            "CurrentAmount": "200",
            "AfterChargedAmount": "9700"
        },
        {
            "ID": 583060,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "100000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-11-07T05:02:59.03",
            "GameName": "ttkv",
            "PackageName": "MoMo-100000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE1667797366p0abF\",\"requestId\":\"940788ATE16677973662BOQ6\",\"amount\":100000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":31648724235,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1667772178512,\"extraData\":\"ttkv\",\"signature\":\"f1ba5829165d8201ff3ebb1930f32f734706eaba07182599931cb702b49145d6\"}",
            "TransID": "31648724235",
            "StatusReCharges": "1",
            "CurrentAmount": "90",
            "AfterChargedAmount": "1040"
        },
        {
            "ID": 570415,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-11-03T13:18:06.123",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE1667481448e0ZSL\",\"requestId\":\"940788ATE1667481448dsBHH\",\"amount\":500000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":31494553615,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1667456285730,\"extraData\":\"ttkv\",\"signature\":\"188d869b966c4afe322722cd9b460b0daa5fd8b856a3c900271a429bd947236f\"}",
            "TransID": "31494553615",
            "StatusReCharges": "1",
            "CurrentAmount": "220",
            "AfterChargedAmount": "4970"
        },
        {
            "ID": 552128,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "1000000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-10-29T05:57:23.333",
            "GameName": "ttkv",
            "PackageName": "MoMo-1000000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE1667023015oY43F\",\"requestId\":\"940788ATE1667023015hAVoP\",\"amount\":1000000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":30523476056,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1666997842770,\"extraData\":\"ttkv\",\"signature\":\"dbad320328c78b0ea8522702a00e63361645a6d4c752400464441a6e91822201\"}",
            "TransID": "30523476056",
            "StatusReCharges": "1",
            "CurrentAmount": "1570",
            "AfterChargedAmount": "11070"
        },
        {
            "ID": 519706,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "1000000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-10-20T09:54:44.883",
            "GameName": "ttkv",
            "PackageName": "MoMo-1000000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE16662596694KxxX\",\"requestId\":\"940788ATE16662596695X6Zf\",\"amount\":1000000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":30092832756,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1666234484622,\"extraData\":\"ttkv\",\"signature\":\"3db16f3dfde0a64891ed5d86cc659cb50bdb6f4b11bf6b09070e2f699174a722\"}",
            "TransID": "30092832756",
            "StatusReCharges": "1",
            "CurrentAmount": "1030",
            "AfterChargedAmount": "10530"
        },
        {
            "ID": 515526,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "200000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-10-19T05:40:07.153",
            "GameName": "ttkv",
            "PackageName": "MoMo-200000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE16661579908tRYw\",\"requestId\":\"940788ATE1666157990KmUzW\",\"amount\":200000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":30040876298,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1666132806845,\"extraData\":\"ttkv\",\"signature\":\"0cf3896107ac1c35f0b5062249209ccff2ac82aa92a03d5d9dc244abbdee682e\"}",
            "TransID": "30040876298",
            "StatusReCharges": "1",
            "CurrentAmount": "1300",
            "AfterChargedAmount": "3200"
        },
        {
            "ID": 505638,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-10-16T16:22:57.12",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE16659373611M0QW\",\"requestId\":\"940788ATE1665937361Zd810\",\"amount\":500000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":29947950130,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1665912176636,\"extraData\":\"ttkv\",\"signature\":\"5cf4b74d1bbec90581f035b313a169d0f2a63e666da81cf417610c1bb5d0f968\"}",
            "TransID": "29947950130",
            "StatusReCharges": "1",
            "CurrentAmount": "1560",
            "AfterChargedAmount": "6310"
        },
        {
            "ID": 503745,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "200000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-10-16T05:27:08.46",
            "GameName": "ttkv",
            "PackageName": "MoMo-200000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE16658980041CgOy\",\"requestId\":\"940788ATE1665898004YE6mL\",\"amount\":200000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":29930345992,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1665872828162,\"extraData\":\"ttkv\",\"signature\":\"de4b6e8149c3f55fd7efbf08428d2bbf3be24f0509c83af5c7a66172e70a3b93\"}",
            "TransID": "29930345992",
            "StatusReCharges": "1",
            "CurrentAmount": "1830",
            "AfterChargedAmount": "3730"
        },
        {
            "ID": 499128,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-10-15T05:06:29.133",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE1665810376bmPsA\",\"requestId\":\"940788ATE1665810376fa57d\",\"amount\":500000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":29895686150,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1665785188812,\"extraData\":\"ttkv\",\"signature\":\"a4989c09a41233174c5b24a68caca94708e7891ab1d4e9079ee583553572bd91\"}",
            "TransID": "29895686150",
            "StatusReCharges": "1",
            "CurrentAmount": "80",
            "AfterChargedAmount": "4830"
        },
        {
            "ID": 485144,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-10-11T15:16:35.093",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE16655013742tzNG\",\"requestId\":\"940788ATE1665501374Ocb3v\",\"amount\":500000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":29760171460,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1665476194825,\"extraData\":\"ttkv\",\"signature\":\"23591099304824e92bcebc048cdf65c749092df7ea36f5f3814783569ca37cab\"}",
            "TransID": "29760171460",
            "StatusReCharges": "1",
            "CurrentAmount": "1000",
            "AfterChargedAmount": "5750"
        },
        {
            "ID": 480608,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "2000000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-10-10T11:12:52.45",
            "GameName": "ttkv",
            "PackageName": "MoMo-2000000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE1665400365WCZBC\",\"requestId\":\"940788ATE1665400365DuYXD\",\"amount\":2000000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":29706321815,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1665375172067,\"extraData\":\"ttkv\",\"signature\":\"17e7169cb514f7d865b8c1e5d98e8bfad2285d6f23e09ab3bcffa0bf2d23c1f1\"}",
            "TransID": "29706321815",
            "StatusReCharges": "1",
            "CurrentAmount": "4670",
            "AfterChargedAmount": "23670"
        },
        {
            "ID": 480424,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "MoMo",
            "PaymentMethod": "MoMo",
            "Amount": "500000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-10-10T10:26:19.99",
            "GameName": "ttkv",
            "PackageName": "MoMo-500000",
            "ResponseData": "{\"partnerCode\":\"MOMOUPFI20220622\",\"orderId\":\"940788ATE1665397558kH9EP\",\"requestId\":\"940788ATE1665397558Ux2uC\",\"amount\":500000,\"orderInfo\":\"940788\",\"orderType\":\"momo_wallet\",\"transId\":29704689340,\"resultCode\":0,\"message\":\"Giao dịch thành công.\",\"payType\":\"qr\",\"responseTime\":1665372379687,\"extraData\":\"ttkv\",\"signature\":\"f7f88d6392dfd3db92791b85de0a92cba5c4f9167e2b7f8c939418b33ed18a3c\"}",
            "TransID": "29704689340",
            "StatusReCharges": "1",
            "CurrentAmount": "90",
            "AfterChargedAmount": "4840"
        },
        {
            "ID": 457902,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "100000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-10-04T19:43:04",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #221004ATEZaloPayLp1Un",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"221004ATEZaloPayLp1Un\\\",\\\"app_time\\\":1664887372864,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":100000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":100000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":100000}]\\\",\\\"zp_trans_id\\\":221004001359194,\\\"server_time\\\":1664887380844,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"d2a508bad635166fff01533f290de7f925fcc3ac7bf9b58ef245694fb0d331fa\",\"type\":1}",
            "TransID": "221004ATEZaloPayLp1Un",
            "StatusReCharges": "1",
            "CurrentAmount": "100",
            "AfterChargedAmount": "1100"
        },
        {
            "ID": 450060,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "200000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-10-02T19:38:41",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #221002ATEZaloPayDA6qC",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"221002ATEZaloPayDA6qC\\\",\\\"app_time\\\":1664714311815,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":200000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}]\\\",\\\"zp_trans_id\\\":221002001294828,\\\"server_time\\\":1664714317532,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"bf474da7a5a53f9384e7b80c695c27b41940052b93b78c3ba6ae5322ed704395\",\"type\":1}",
            "TransID": "221002ATEZaloPayDA6qC",
            "StatusReCharges": "1",
            "CurrentAmount": "600",
            "AfterChargedAmount": "2600"
        },
        {
            "ID": 444688,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "100000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-10-01T12:50:30",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #221001ATEZaloPaySLaNA",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"221001ATEZaloPaySLaNA\\\",\\\"app_time\\\":1664603419759,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":100000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":100000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":100000}]\\\",\\\"zp_trans_id\\\":221001000795258,\\\"server_time\\\":1664603427450,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"52460d216f71934587eb40081fe2a94c78aee86a46666bbab5c2a57e8148f6c6\",\"type\":1}",
            "TransID": "221001ATEZaloPaySLaNA",
            "StatusReCharges": "1",
            "CurrentAmount": "130",
            "AfterChargedAmount": "1130"
        },
        {
            "ID": 420717,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "50000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-09-25T07:19:22",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220925ATEZaloPayq4RbZ",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220925ATEZaloPayq4RbZ\\\",\\\"app_time\\\":1664065153572,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":50000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":50000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":50000}]\\\",\\\"zp_trans_id\\\":220925000244892,\\\"server_time\\\":1664065159004,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"4ad0406c5fbdf4f8e4b396e164a1178342120ff27034ab9f2c03ab828dc05bc2\",\"type\":1}",
            "TransID": "220925ATEZaloPayq4RbZ",
            "StatusReCharges": "1",
            "CurrentAmount": "1230",
            "AfterChargedAmount": "1730"
        },
        {
            "ID": 410433,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "200000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-09-22T17:51:41",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220922ATEZaloPayP99C8",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220922ATEZaloPayP99C8\\\",\\\"app_time\\\":1663843886236,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":200000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}]\\\",\\\"zp_trans_id\\\":220922001571829,\\\"server_time\\\":1663843897728,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"854a31ff4d58c6286292acd4d9c8eb8b351649fbe6fafc7914c381e192f477dc\",\"type\":1}",
            "TransID": "220922ATEZaloPayP99C8",
            "StatusReCharges": "1",
            "CurrentAmount": "460",
            "AfterChargedAmount": "2460"
        },
        {
            "ID": 11699,
            "IsEnabled": null,
            "UserId": 940788,
            "ServiceName": "Nạp trực tiếp",
            "PaymentMethod": "BIDV",
            "Amount": "1000000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-09-13T17:33:16.54",
            "GameName": "ttkv",
            "PackageName": "Nạp trực tiếp",
            "ResponseData": null,
            "TransID": "ATE4TTTKV3686",
            "StatusReCharges": null,
            "CurrentAmount": null,
            "AfterChargedAmount": null
        },
        {
            "ID": 11253,
            "IsEnabled": null,
            "UserId": 940788,
            "ServiceName": "Nạp trực tiếp",
            "PaymentMethod": "BIDV",
            "Amount": "1000000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-09-09T17:36:41.497",
            "GameName": "ttkv",
            "PackageName": "Nạp trực tiếp",
            "ResponseData": null,
            "TransID": "ATE4TTTKV3292",
            "StatusReCharges": null,
            "CurrentAmount": null,
            "AfterChargedAmount": null
        },
        {
            "ID": 10069,
            "IsEnabled": null,
            "UserId": 940788,
            "ServiceName": "Nạp trực tiếp",
            "PaymentMethod": "BIDV",
            "Amount": "1000000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-08-28T10:41:19.98",
            "GameName": "ttkv",
            "PackageName": "Nạp trực tiếp",
            "ResponseData": null,
            "TransID": "ATE4TTTKV2250",
            "StatusReCharges": null,
            "CurrentAmount": null,
            "AfterChargedAmount": null
        },
        {
            "ID": 9495,
            "IsEnabled": null,
            "UserId": 940788,
            "ServiceName": "Nạp trực tiếp",
            "PaymentMethod": "BIDV",
            "Amount": "1000000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-08-21T16:21:31.217",
            "GameName": "ttkv",
            "PackageName": "Nạp trực tiếp",
            "ResponseData": null,
            "TransID": "ATE4TTTKV1765",
            "StatusReCharges": null,
            "CurrentAmount": null,
            "AfterChargedAmount": null
        },
        {
            "ID": 9157,
            "IsEnabled": null,
            "UserId": 940788,
            "ServiceName": "Nạp trực tiếp",
            "PaymentMethod": "BIDV",
            "Amount": "1000000",
            "Note": "1-Giao dịch thành công.",
            "RequestTime": "2022-08-16T18:45:59.547",
            "GameName": "ttkv",
            "PackageName": "Nạp trực tiếp",
            "ResponseData": null,
            "TransID": "ATE4TTTKV1501",
            "StatusReCharges": null,
            "CurrentAmount": null,
            "AfterChargedAmount": null
        },
        {
            "ID": 270281,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "200000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-08-14T07:18:25",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220814ATEZaloPayHuf96",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220814ATEZaloPayHuf96\\\",\\\"app_time\\\":1660436295057,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":200000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}]\\\",\\\"zp_trans_id\\\":220814000183282,\\\"server_time\\\":1660436303060,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"332c0c65f02c8ef6cffa4244adff9580abea3dffdccde331dacd994b31ab77cd\",\"type\":1}",
            "TransID": "220814ATEZaloPayHuf96",
            "StatusReCharges": "1",
            "CurrentAmount": "1900",
            "AfterChargedAmount": "3900"
        },
        {
            "ID": 266800,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "500000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-08-13T06:51:19",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220813ATEZaloPayJs04h",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220813ATEZaloPayJs04h\\\",\\\"app_time\\\":1660348268320,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":500000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":500000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":500000}]\\\",\\\"zp_trans_id\\\":220813000160153,\\\"server_time\\\":1660348276543,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"1de1caa090450b7240cae63b4da80316ae4f7aab4b30808a689c1fd3788319cb\",\"type\":1}",
            "TransID": "220813ATEZaloPayJs04h",
            "StatusReCharges": "1",
            "CurrentAmount": "1900",
            "AfterChargedAmount": "6900"
        },
        {
            "ID": 262944,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "500000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-08-12T06:57:16",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220812ATEZaloPayvMiDN",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220812ATEZaloPayvMiDN\\\",\\\"app_time\\\":1660262225614,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":500000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":500000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":500000}]\\\",\\\"zp_trans_id\\\":220812000170168,\\\"server_time\\\":1660262234207,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"a3a04714c4eea26476ad56ad36ba8edf8a0b620a1bbab4916a8118e4ccccdbaa\",\"type\":1}",
            "TransID": "220812ATEZaloPayvMiDN",
            "StatusReCharges": "1",
            "CurrentAmount": "900",
            "AfterChargedAmount": "5900"
        },
        {
            "ID": 259471,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "200000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-08-11T06:36:18",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220811ATEZaloPay90s2N",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220811ATEZaloPay90s2N\\\",\\\"app_time\\\":1660174571729,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":200000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}]\\\",\\\"zp_trans_id\\\":220811000171138,\\\"server_time\\\":1660174576679,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"505a2b3ad3baf4e96c0013bbe2a55c843573960a8c69f7c67c0130afd44be3bc\",\"type\":1}",
            "TransID": "220811ATEZaloPay90s2N",
            "StatusReCharges": "1",
            "CurrentAmount": "2300",
            "AfterChargedAmount": "4300"
        },
        {
            "ID": 258921,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "200000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-08-11T00:14:17",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220811ATEZaloPayFEaYm",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220811ATEZaloPayFEaYm\\\",\\\"app_time\\\":1660151646227,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":200000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}]\\\",\\\"zp_trans_id\\\":220811000009382,\\\"server_time\\\":1660151654958,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"3f20266c137b8f091cc707eb9de2a448baf784d2057193723a1981cdc4792f9e\",\"type\":1}",
            "TransID": "220811ATEZaloPayFEaYm",
            "StatusReCharges": "1",
            "CurrentAmount": "300",
            "AfterChargedAmount": "2300"
        },
        {
            "ID": 244707,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "500000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-08-06T06:52:01",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220806ATEZaloPayTnYXW",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220806ATEZaloPayTnYXW\\\",\\\"app_time\\\":1659743499728,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":500000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":500000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":500000}]\\\",\\\"zp_trans_id\\\":220806000162096,\\\"server_time\\\":1659743518826,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"64013975e312054cd63e347707fbb13e37a7abbd7fb85b33b045e97d37c8a280\",\"type\":1}",
            "TransID": "220806ATEZaloPayTnYXW",
            "StatusReCharges": "1",
            "CurrentAmount": "900",
            "AfterChargedAmount": "5900"
        },
        {
            "ID": 243494,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "200000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-08-05T18:55:37",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220805ATEZaloPayEwfic",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220805ATEZaloPayEwfic\\\",\\\"app_time\\\":1659700527196,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":200000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}]\\\",\\\"zp_trans_id\\\":220805001244097,\\\"server_time\\\":1659700534573,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"63b4c7d2ad6718a201234d43a743cb8d67e518496426b7055763430e39351be7\",\"type\":1}",
            "TransID": "220805ATEZaloPayEwfic",
            "StatusReCharges": "1",
            "CurrentAmount": "700",
            "AfterChargedAmount": "2700"
        },
        {
            "ID": 240760,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "200000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-08-04T17:51:50",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220804ATEZaloPay4m0vR",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220804ATEZaloPay4m0vR\\\",\\\"app_time\\\":1659610301232,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":200000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}]\\\",\\\"zp_trans_id\\\":220804001014497,\\\"server_time\\\":1659610308149,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"b3dbf1f6ac0e4253f77b8ea8e695d0aafb86d39c87a826c2a2bfa8dcde18d742\",\"type\":1}",
            "TransID": "220804ATEZaloPay4m0vR",
            "StatusReCharges": "1",
            "CurrentAmount": "500",
            "AfterChargedAmount": "2500"
        },
        {
            "ID": 235805,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "200000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-08-02T17:52:35",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220802ATEZaloPayxM17s",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220802ATEZaloPayxM17s\\\",\\\"app_time\\\":1659437548193,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":200000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}]\\\",\\\"zp_trans_id\\\":220802001028873,\\\"server_time\\\":1659437553552,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"2efb4560b75cd98208de6e6632429273f5e1374f6d28a117efba313e65f89127\",\"type\":1}",
            "TransID": "220802ATEZaloPayxM17s",
            "StatusReCharges": "1",
            "CurrentAmount": "700",
            "AfterChargedAmount": "2700"
        },
        {
            "ID": 234592,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "200000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-08-02T06:20:20",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220802ATEZaloPayovRwp",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220802ATEZaloPayovRwp\\\",\\\"app_time\\\":1659396012751,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":200000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}]\\\",\\\"zp_trans_id\\\":220802000125047,\\\"server_time\\\":1659396018913,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"6036a0c2d15ee4656ab5834343557e07d19084ce6f1344dc2184dd91a6a6efbe\",\"type\":1}",
            "TransID": "220802ATEZaloPayovRwp",
            "StatusReCharges": "1",
            "CurrentAmount": "1900",
            "AfterChargedAmount": "3900"
        },
        {
            "ID": 230216,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "500000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-07-31T12:44:48",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220731ATEZaloPayFg9EP",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220731ATEZaloPayFg9EP\\\",\\\"app_time\\\":1659246281048,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":500000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":500000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":500000}]\\\",\\\"zp_trans_id\\\":220731000608186,\\\"server_time\\\":1659246286509,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"698a58a7af3b3bf3a380886997ddd66918687b9879ce1d736deda5260961f236\",\"type\":1}",
            "TransID": "220731ATEZaloPayFg9EP",
            "StatusReCharges": "1",
            "CurrentAmount": "3900",
            "AfterChargedAmount": "8900"
        },
        {
            "ID": 228965,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "500000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-07-31T00:29:34",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220731ATEZaloPayHjFh4",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220731ATEZaloPayHjFh4\\\",\\\"app_time\\\":1659202165568,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":500000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":500000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":500000}]\\\",\\\"zp_trans_id\\\":220731000044540,\\\"server_time\\\":1659202172441,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"597f48f7f0349f06eed2a6b1c30e9ed7aa06612f7d1e5b4eb45697000260b0d8\",\"type\":1}",
            "TransID": "220731ATEZaloPayHjFh4",
            "StatusReCharges": "1",
            "CurrentAmount": "100",
            "AfterChargedAmount": "5100"
        },
        {
            "ID": 222819,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "200000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-07-28T12:01:43",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220728ATEZaloPaycsDNM",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220728ATEZaloPaycsDNM\\\",\\\"app_time\\\":1658984495535,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":200000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}]\\\",\\\"zp_trans_id\\\":220728000579330,\\\"server_time\\\":1658984501662,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"6f14c0503459330a9f0fc96b548ffb06e6737d0d6d80fd107e52e47076ad7f29\",\"type\":1}",
            "TransID": "220728ATEZaloPaycsDNM",
            "StatusReCharges": "1",
            "CurrentAmount": "2350",
            "AfterChargedAmount": "4350"
        },
        {
            "ID": 222815,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "200000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-07-28T12:00:52",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220728ATEZaloPayPsDhh",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220728ATEZaloPayPsDhh\\\",\\\"app_time\\\":1658984441575,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":200000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}]\\\",\\\"zp_trans_id\\\":220728000586043,\\\"server_time\\\":1658984449979,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"437d2400d76acb8f0f79a52dba78648373812eaff98c7224c3644e2e8d2a247e\",\"type\":1}",
            "TransID": "220728ATEZaloPayPsDhh",
            "StatusReCharges": "1",
            "CurrentAmount": "350",
            "AfterChargedAmount": "2350"
        },
        {
            "ID": 219147,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "500000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-07-26T20:23:54",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220726ATEZaloPayWmyug",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220726ATEZaloPayWmyug\\\",\\\"app_time\\\":1658841824531,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":500000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":500000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":500000}]\\\",\\\"zp_trans_id\\\":220726001313663,\\\"server_time\\\":1658841831830,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"1eedc5287e4cec1eeb7c6f8c99465e75bc033770984047581b2100df859dd913\",\"type\":1}",
            "TransID": "220726ATEZaloPayWmyug",
            "StatusReCharges": "1",
            "CurrentAmount": "750",
            "AfterChargedAmount": "5750"
        },
        {
            "ID": 217188,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "200000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-07-25T22:19:07",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220725ATEZaloPayDDBVK",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220725ATEZaloPayDDBVK\\\",\\\"app_time\\\":1658762337476,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":200000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}]\\\",\\\"zp_trans_id\\\":220725001556900,\\\"server_time\\\":1658762345359,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"7b2b02e146d8a4327fb5854d48a7abc24f820593e85459dcdcdd3cb5089030a2\",\"type\":1}",
            "TransID": "220725ATEZaloPayDDBVK",
            "StatusReCharges": "1",
            "CurrentAmount": "0",
            "AfterChargedAmount": "2000"
        },
        {
            "ID": 216952,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "200000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-07-25T20:26:08",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220725ATEZaloPaykWpCF",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220725ATEZaloPaykWpCF\\\",\\\"app_time\\\":1658755558531,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":200000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}]\\\",\\\"zp_trans_id\\\":220725001398779,\\\"server_time\\\":1658755566543,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"08bb06a4694c4bd72ab4efe572a56a52cd161ab2660808a2684304932990153c\",\"type\":1}",
            "TransID": "220725ATEZaloPaykWpCF",
            "StatusReCharges": "1",
            "CurrentAmount": "0",
            "AfterChargedAmount": "2000"
        },
        {
            "ID": 214933,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "100000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-07-24T19:29:44",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220724ATEZaloPayzJrmB",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220724ATEZaloPayzJrmB\\\",\\\"app_time\\\":1658665777424,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":100000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":100000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":100000}]\\\",\\\"zp_trans_id\\\":220724001147415,\\\"server_time\\\":1658665782967,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"a55e5e860c4af19826dc9237f0509e2f8b00e682948d0ed455e68b5c9bd1592e\",\"type\":1}",
            "TransID": "220724ATEZaloPayzJrmB",
            "StatusReCharges": "1",
            "CurrentAmount": "0",
            "AfterChargedAmount": "1000"
        },
        {
            "ID": 214556,
            "IsEnabled": true,
            "UserId": 940788,
            "ServiceName": "ZaloPay",
            "PaymentMethod": "ZaloPay",
            "Amount": "200000",
            "Note": "1 - Thanh toán thành công",
            "RequestTime": "2022-07-24T14:29:14",
            "GameName": "ttkv",
            "PackageName": "Gamate - Thanh toán đơn hàng #220724ATEZaloPayW3QM3",
            "ResponseData": "{\"data\":\"{\\\"app_id\\\":1930,\\\"app_trans_id\\\":\\\"220724ATEZaloPayW3QM3\\\",\\\"app_time\\\":1658647738617,\\\"app_user\\\":\\\"ATE TTKV\\\",\\\"amount\\\":200000,\\\"embed_data\\\":\\\"{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}\\\",\\\"item\\\":\\\"[{\\\\\\\"userId\\\\\\\":940788,\\\\\\\"amount\\\\\\\":200000}]\\\",\\\"zp_trans_id\\\":220724000775898,\\\"server_time\\\":1658647753100,\\\"channel\\\":38,\\\"merchant_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"zp_user_id\\\":\\\"pNOpMu8L9mwT2bADcYzJ6zNf0i2vkOcVdg5S-A3camA\\\",\\\"user_fee_amount\\\":0,\\\"discount_amount\\\":0}\",\"mac\":\"387576816721764813741f818f2d32cdb1298a512aa68f69b562ceef1ce43136\",\"type\":1}",
            "TransID": "220724ATEZaloPayW3QM3",
            "StatusReCharges": "1",
            "CurrentAmount": "0",
            "AfterChargedAmount": "2000"
        }
    ],
    "c": null
}

const getAll = async (req, res, next) => {
    try {
        const allPost = await Post.find({})
            .populate('post_created_by', 'user_name')
            .populate('album', 'album_name album_desc')
            .sort([['createdAt', -1]]);

        let total = 0;
        json.r.forEach((item) => {
            if (item.PaymentMethod === 'MoMo') {
                total += +item.Amount
            }
        });

        console.log('total :>> ', total);
        const response = resBuilder('success', { posts: allPost, result: allPost.length }, 'Success');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

const getOne = async (req, res, next) => {
    try {
        const { postId } = req.params;
        const post = await Post.findById(postId)
            .populate('post_created_by', 'user_name')
            .populate('album', 'album_name album_desc');
        if (!post) {
            const err = new Error('Post not found');
            err.statusCode = 404;
            next(err);
            return;
        }

        const response = resBuilder('success', { post, result: 1 }, 'Success');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

const createOne = async (req, res, next) => {
    try {
        const { userId } = req.user;
        console.log('userId :>> ', userId);
        let post = await Post.create({
            ...req.body, post_created_by: userId
        });
        post = await (await post.populate('post_created_by', 'user_name')).populate('album', 'album_name album_desc');
        const response = resBuilder('success', { post, result: 1 }, 'Create post successfully');
        res.status(201).json(response);
    } catch (error) {
        next(error);
    }
};

const updateOne = async (req, res, next) => {
    try {
        const postId = req.params.postId;

        // check post exist
        const post = await Post.findById(postId);
        if (!post) {
            const err = new Error('Post not found');
            err.statusCode = 400
            next(err);
            return;
        }

        // check current user own post
        const { userId } = req.user;
        const isOwnPost = checkAuthorOwnPost(userId, post);
        if (isOwnPost) {
            const err = new Error('Cannot update post of other author');
            err.statusCode = 403
            next(err);
            return;
        }

        // process update post
        const postUpdated = await Post.findOneAndUpdate({ _id: postId }, {
            ...req.body
        }, {
            new: true,
            runValidators: true
        })
            .populate('post_created_by', 'user_name')
            .populate('album', 'album_name album_desc');

        const response = resBuilder('success', { post: postUpdated, result: 1 }, 'Update post successfully');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

const deleteOne = async (req, res, next) => {
    try {
        const postId = req.params.postId;

        // check post exist
        const post = await Post.findById(postId).populate('post_created_by', 'post_desc post_title').populate('album', 'album_name');
        if (!post) {
            const err = new Error('Post not found');
            err.statusCode = 400
            next(err);
            return;
        }

        // check current user own post
        const { userId } = req.user;
        const isOwnPost = checkAuthorOwnPost(userId, post);
        if (isOwnPost) {
            const err = new Error('Cannot delete post of other author');
            err.statusCode = 403
            next(err);
            return;
        }

        // delete
        await Post.deleteOne({ _id: postId });
        const response = resBuilder('success', { result: 1 }, 'Remove post successfully');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}

const getByAuthor = async (req, res, next) => {
    try {
        const authorId = req.params.post_created_by;
        const listPost = await Post.find({
            post_created_by: authorId
        })
            .populate('post_created_by', 'user_name')
            .populate('album', 'album_name album_desc');
        const response = resBuilder('success', { posts: listPost, result: listPost.length }, 'Success');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}

const getByAlbum = async (req, res, next) => {
    try {
        const albumId = req.params.albumId;
        const listPost = await Post.find({
            album: albumId
        })
            .populate('post_created_by', 'user_name')
            .populate('album', 'album_name album_desc');
        let album = await Album.findById(albumId);
        const response = resBuilder('success', {
            posts: listPost, album, result: listPost.length
        }, 'Success');
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
}

const massCreate = async (req, res, next) => {
    try {
        const listPost = req.body.listPost;
        const { userId } = req.user;
        listPost.forEach((item) => {
            Post.create({
                ...item, post_created_by: userId
            })
        });
        const response = resBuilder('success', {}, 'Success');
        res.status(201).json(response);
    } catch (error) {
        console.log('error :>> ', error);
        res.json(error);
    }
}

module.exports = { getAll, getOne, createOne, updateOne, deleteOne, getByAuthor, massCreate, getByAlbum };