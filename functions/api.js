const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();


router.get('/', (req, res) => {
  res.json([
    {
        "number": "03346645683",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03342055989",
        "apid": "46375120,46371872,46379603",
        "code": "000000461,000000469,000000471",
        "name": "100MB - 100 U-U Mins - 1 Day - On Recharge Rs.50,Super Minutes,Mini Super Card - Rs.349"
    },
    {
        "number": "03343983639",
        "apid": "46373574",
        "code": "000000467",
        "name": "Super Internet"
    },
    {
        "number": "03345138995",
        "apid": "46375120,46379603,46371872",
        "code": "000000461,000000471,000000469",
        "name": "100MB - 100 U-U Mins - 1 Day - On Recharge Rs.50,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03347123398",
        "apid": "46379586,46371872,46395169",
        "code": "000000475,000000469,000000465",
        "name": "Super Card Plus - Rs.699,Super Minutes,Weekly Internet Plus"
    },
    {
        "number": "03343462195",
        "apid": "46395169,46379586",
        "code": "000000465,000000475",
        "name": "Weekly Internet Plus,Super Card Plus - Rs.699"
    },
    {
        "number": "03342779216",
        "apid": "46395169,46379586",
        "code": "000000465,000000475",
        "name": "Weekly Internet Plus,Super Card Plus - Rs.699"
    },
    {
        "number": "03342950318",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03344535238",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03348898867",
        "apid": "46395169,46379586",
        "code": "000000465,000000475",
        "name": "Weekly Internet Plus,Super Card Plus - Rs.699"
    },
    {
        "number": "03343000823",
        "apid": "46395169,46379586",
        "code": "000000465,000000475",
        "name": "Weekly Internet Plus,Super Card Plus - Rs.699"
    },
    {
        "number": "03342551515",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03344566965",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03344711236",
        "apid": "46379586,46395169",
        "code": "000000475,000000465",
        "name": "Super Card Plus - Rs.699,Weekly Internet Plus"
    },
    {
        "number": "03342777812",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03341726638",
        "apid": "46371872,46384372,46379603",
        "code": "000000469,000000447,000000471",
        "name": "Super Minutes,200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349"
    },
    {
        "number": "03346205256",
        "apid": "46395169",
        "code": "000000465",
        "name": "Weekly Internet Plus"
    },
    {
        "number": "03348386133",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03341829530",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03345831471",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03342108243",
        "apid": "46384381,46379603,46371872",
        "code": "000000453,000000471,000000469",
        "name": "50 Offnet - 500 MB - 500 Onnet - 15 Days - Rs.200,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03347238043",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03345692588",
        "apid": "46371872,46379603",
        "code": "000000469,000000471",
        "name": "Super Minutes,Mini Super Card - Rs.349"
    },
    {
        "number": "03345706432",
        "apid": "46371872,050505,46379603",
        "code": "000000469,000000788,000000471",
        "name": "Super Minutes,2000 MB Internet FREE,Mini Super Card - Rs.349"
    },
    {
        "number": "03343741963",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03347657593",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03346733937",
        "apid": "46371872,46395019,46379603",
        "code": "000000469,000000635,000000471",
        "name": "Super Minutes,500 MB - 7 Days - Rs.62,Mini Super Card - Rs.349"
    },
    {
        "number": "03341384477",
        "apid": "46384381,46379603,46371872",
        "code": "000000453,000000471,000000469",
        "name": "50 Offnet - 500 MB - 500 Onnet - 15 Days - Rs.200,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03346444066",
        "apid": "050505,46379603,46371872",
        "code": "000000788,000000471,000000469",
        "name": "2000 MB Internet FREE,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03341386124",
        "apid": "46394963,46379603,46371872",
        "code": "000000671,000000471,000000469",
        "name": "100 MB - 1 Day - Rs.12,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03349302999",
        "apid": "46379586,46379603,46371872",
        "code": "000000475,000000471,000000469",
        "name": "Super Card Plus - Rs.699,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03343485030",
        "apid": "46371872,46384372,46379603",
        "code": "000000469,000000447,000000471",
        "name": "Super Minutes,200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349"
    },
    {
        "number": "03343867571",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03349676830",
        "apid": "46383064,46384381,46379603,46371872",
        "code": "000000455,000000453,000000471,000000469",
        "name": "1GB - 100 Offnet - 1000 Onnet - 30 Days - Rs 300,50 Offnet - 500 MB - 500 Onnet - 15 Days - Rs.200,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03344551044",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03343063984",
        "apid": "46379586",
        "code": "000000475",
        "name": "Super Card Plus - Rs.699"
    },
    {
        "number": "03346800898",
        "apid": "46371872,46375120,46384372,46379603",
        "code": "000000469,000000461,000000447,000000471",
        "name": "Super Minutes,100MB - 100 U-U Mins - 1 Day - On Recharge Rs.50,200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349"
    },
    {
        "number": "03346261023",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03344334836",
        "apid": "46384372,46384381,46379603,46371872",
        "code": "000000447,000000453,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,50 Offnet - 500 MB - 500 Onnet - 15 Days - Rs.200,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03349807890",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03346576093",
        "apid": "46394975,46394963,46395019,46379603",
        "code": "000000613,000000671,000000635,000000471",
        "name": "1 GB - 30 Days - Rs.131,100 MB - 1 Day - Rs.12,500 MB - 7 Days - Rs.62,Mini Super Card - Rs.349"
    },
    {
        "number": "03347203999",
        "apid": "46371872,46383064,46379603",
        "code": "000000469,000000455,000000471",
        "name": "Super Minutes,1GB - 100 Offnet - 1000 Onnet - 30 Days - Rs 300,Mini Super Card - Rs.349"
    },
    {
        "number": "03343766588",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03348599734",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03343199731",
        "apid": "050505,46379603,46371872",
        "code": "000000788,000000471,000000469",
        "name": "2000 MB Internet FREE,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03344988927",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03343282270",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03349163115",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03343438338",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03341051092",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03345477234",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03346235737",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03349509422",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03348127878",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03343861017",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03345717855",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03343089445",
        "apid": "46371872,46384372,46379603",
        "code": "000000469,000000447,000000471",
        "name": "Super Minutes,200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349"
    },
    {
        "number": "03341689701",
        "apid": "46371872,46384372,46379603",
        "code": "000000469,000000447,000000471",
        "name": "Super Minutes,200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349"
    },
    {
        "number": "03345098191",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03345477958",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03343244438",
        "apid": "050505,46379603,46371872",
        "code": "000000788,000000471,000000469",
        "name": "2000 MB Internet FREE,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03343057000",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03345926954",
        "apid": "46384381,46379603,46371872",
        "code": "000000453,000000471,000000469",
        "name": "50 Offnet - 500 MB - 500 Onnet - 15 Days - Rs.200,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03342162494",
        "apid": "46371872,46384372,46379603",
        "code": "000000469,000000447,000000471",
        "name": "Super Minutes,200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349"
    },
    {
        "number": "03342364951",
        "apid": "46371872,46375120,46383064,46379603",
        "code": "000000469,000000461,000000455,000000471",
        "name": "Super Minutes,100MB - 100 U-U Mins - 1 Day - On Recharge Rs.50,1GB - 100 Offnet - 1000 Onnet - 30 Days - Rs 300,Mini Super Card - Rs.349"
    },
    {
        "number": "03341753286",
        "apid": "46384372,46371872,46379603",
        "code": "000000447,000000469,000000471",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Super Minutes,Mini Super Card - Rs.349"
    },
    {
        "number": "03345137070",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03344059532",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03342424304",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03346348577",
        "apid": "46379603,46371872,46384372",
        "code": "000000471,000000469,000000447",
        "name": "Mini Super Card - Rs.349,Super Minutes,200 MB - 200 Onnet - 7 Days - Rs.62"
    },
    {
        "number": "03342786970",
        "apid": "46375120,46383062,46379603,46371872",
        "code": "000000461,000000449,000000471,000000469",
        "name": "100MB - 100 U-U Mins - 1 Day - On Recharge Rs.50,300 MB - Onnet Mins - 7 Days - Rs.100,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03343281077",
        "apid": "46375120,46379603,46371872",
        "code": "000000461,000000471,000000469",
        "name": "100MB - 100 U-U Mins - 1 Day - On Recharge Rs.50,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03345009789",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03345216736",
        "apid": "46383064,46384381,46379603,46371872",
        "code": "000000455,000000453,000000471,000000469",
        "name": "1GB - 100 Offnet - 1000 Onnet - 30 Days - Rs 300,50 Offnet - 500 MB - 500 Onnet - 15 Days - Rs.200,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03346883124",
        "apid": "050505,46379603,46371872",
        "code": "000000788,000000471,000000469",
        "name": "2000 MB Internet FREE,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03341024042",
        "apid": "46371872,46384372,46379603",
        "code": "000000469,000000447,000000471",
        "name": "Super Minutes,200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349"
    },
    {
        "number": "03341675374",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03349302277",
        "apid": "46371872,46379603,46394963",
        "code": "000000469,000000471,000000671",
        "name": "Super Minutes,Mini Super Card - Rs.349,100 MB - 1 Day - Rs.12"
    },
    {
        "number": "03346559955",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03347124797",
        "apid": "040404,46379603,46371872",
        "code": "000000786,000000471,000000469",
        "name": "1000 MB Internet FREE ,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03349144296",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03348041167",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03346663225",
        "apid": "46371872,46384372,46379603",
        "code": "000000469,000000447,000000471",
        "name": "Super Minutes,200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349"
    },
    {
        "number": "03347097459",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03345327439",
        "apid": "46375120,46384372,46371872,46379603",
        "code": "000000461,000000447,000000469,000000471",
        "name": "100MB - 100 U-U Mins - 1 Day - On Recharge Rs.50,200 MB - 200 Onnet - 7 Days - Rs.62,Super Minutes,Mini Super Card - Rs.349"
    },
    {
        "number": "03348023404",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03348361495",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03343907146",
        "apid": "46395019,46375120,46379603,46371872",
        "code": "000000635,000000461,000000471,000000469",
        "name": "500 MB - 7 Days - Rs.62,100MB - 100 U-U Mins - 1 Day - On Recharge Rs.50,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03349822318",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03346722076",
        "apid": "46375120,46371872,46383064,46379603",
        "code": "000000461,000000469,000000455,000000471",
        "name": "100MB - 100 U-U Mins - 1 Day - On Recharge Rs.50,Super Minutes,1GB - 100 Offnet - 1000 Onnet - 30 Days - Rs 300,Mini Super Card - Rs.349"
    },
    {
        "number": "03345464583",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03341865343",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03345525527",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03346999850",
        "apid": "46371872,46379603",
        "code": "000000469,000000471",
        "name": "Super Minutes,Mini Super Card - Rs.349"
    },
    {
        "number": "03345853069",
        "apid": "46384381,46379603,46371872",
        "code": "000000453,000000471,000000469",
        "name": "50 Offnet - 500 MB - 500 Onnet - 15 Days - Rs.200,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03343176300",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03343961666",
        "apid": "46375120,46384372,46379603,46371872",
        "code": "000000461,000000447,000000471,000000469",
        "name": "100MB - 100 U-U Mins - 1 Day - On Recharge Rs.50,200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03349182046",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03342109561",
        "apid": "46383064,46371872,46384372,46379603",
        "code": "000000455,000000469,000000447,000000471",
        "name": "1GB - 100 Offnet - 1000 Onnet - 30 Days - Rs 300,Super Minutes,200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349"
    },
    {
        "number": "03343431999",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03349301647",
        "apid": "46384381,46379603,46371872",
        "code": "000000453,000000471,000000469",
        "name": "50 Offnet - 500 MB - 500 Onnet - 15 Days - Rs.200,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03343115575",
        "apid": "050505,46384372,46379603,46371872",
        "code": "000000788,000000447,000000471,000000469",
        "name": "2000 MB Internet FREE,200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03343258614",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03346952267",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03345821786",
        "apid": "46371872,46379603",
        "code": "000000469,000000471",
        "name": "Super Minutes,Mini Super Card - Rs.349"
    },
    {
        "number": "03344004970",
        "apid": "46379603,46384381,46371872",
        "code": "000000471,000000453,000000469",
        "name": "Mini Super Card - Rs.349,50 Offnet - 500 MB - 500 Onnet - 15 Days - Rs.200,Super Minutes"
    },
    {
        "number": "03347027410",
        "apid": "46384372,46384381,46379603,46371872",
        "code": "000000447,000000453,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,50 Offnet - 500 MB - 500 Onnet - 15 Days - Rs.200,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03345788295",
        "apid": "46383064,46384381,46375120,46371872",
        "code": "000000455,000000453,000000461,000000469",
        "name": "1GB - 100 Offnet - 1000 Onnet - 30 Days - Rs 300,50 Offnet - 500 MB - 500 Onnet - 15 Days - Rs.200,100MB - 100 U-U Mins - 1 Day - On Recharge Rs.50,Super Minutes"
    },
    {
        "number": "03347725365",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03348502245",
        "apid": "46384372,46371872,46379603",
        "code": "000000447,000000469,000000471",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Super Minutes,Mini Super Card - Rs.349"
    },
    {
        "number": "03345253701",
        "apid": "46384372,46375120,46379603,46371872",
        "code": "000000447,000000461,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,100MB - 100 U-U Mins - 1 Day - On Recharge Rs.50,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03344098123",
        "apid": "46384381,46383064,46379603,46371872",
        "code": "000000453,000000455,000000471,000000469",
        "name": "50 Offnet - 500 MB - 500 Onnet - 15 Days - Rs.200,1GB - 100 Offnet - 1000 Onnet - 30 Days - Rs 300,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03347398252",
        "apid": "46375120,46379603,46371872",
        "code": "000000461,000000471,000000469",
        "name": "100MB - 100 U-U Mins - 1 Day - On Recharge Rs.50,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03342644033",
        "apid": "46384381,46384372,46375120,46371872",
        "code": "000000453,000000447,000000461,000000469",
        "name": "50 Offnet - 500 MB - 500 Onnet - 15 Days - Rs.200,200 MB - 200 Onnet - 7 Days - Rs.62,100MB - 100 U-U Mins - 1 Day - On Recharge Rs.50,Super Minutes"
    },
    {
        "number": "03345629726",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03347478006",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03345772581",
        "apid": "46379603,46371872,46384372",
        "code": "000000471,000000469,000000447",
        "name": "Mini Super Card - Rs.349,Super Minutes,200 MB - 200 Onnet - 7 Days - Rs.62"
    },
    {
        "number": "03342468997",
        "apid": "46371872,46384372,46379603",
        "code": "000000469,000000447,000000471",
        "name": "Super Minutes,200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349"
    },
    {
        "number": "03345911084",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03342808460",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03346258661",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03344643620",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03349713010",
        "apid": "46384372,46375120,46379603,46371872",
        "code": "000000447,000000461,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,100MB - 100 U-U Mins - 1 Day - On Recharge Rs.50,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03347083703",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03345599967",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03347585507",
        "apid": "46384381,46379603,46371872",
        "code": "000000453,000000471,000000469",
        "name": "50 Offnet - 500 MB - 500 Onnet - 15 Days - Rs.200,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03344103297",
        "apid": "050505,46384372,46379603,46371872",
        "code": "000000788,000000447,000000471,000000469",
        "name": "2000 MB Internet FREE,200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03345543219",
        "apid": "46371872,46384372,46379603",
        "code": "000000469,000000447,000000471",
        "name": "Super Minutes,200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349"
    },
    {
        "number": "03343006692",
        "apid": "46383064,46375120,46379603,46371872",
        "code": "000000455,000000461,000000471,000000469",
        "name": "1GB - 100 Offnet - 1000 Onnet - 30 Days - Rs 300,100MB - 100 U-U Mins - 1 Day - On Recharge Rs.50,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03342768593",
        "apid": "46375120,46383062,46371872,46383064",
        "code": "000000461,000000449,000000469,000000455",
        "name": "100MB - 100 U-U Mins - 1 Day - On Recharge Rs.50,300 MB - Onnet Mins - 7 Days - Rs.100,Super Minutes,1GB - 100 Offnet - 1000 Onnet - 30 Days - Rs 300"
    },
    {
        "number": "03343787095",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03342023532",
        "apid": "46375120,46379603,46371872",
        "code": "000000461,000000471,000000469",
        "name": "100MB - 100 U-U Mins - 1 Day - On Recharge Rs.50,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03346735428",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03342666336",
        "apid": "050505,46384372,46379603,46371872",
        "code": "000000788,000000447,000000471,000000469",
        "name": "2000 MB Internet FREE,200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03348307392",
        "apid": "46379603,46384372,46371872,46384381",
        "code": "000000471,000000447,000000469,000000453",
        "name": "Mini Super Card - Rs.349,200 MB - 200 Onnet - 7 Days - Rs.62,Super Minutes,50 Offnet - 500 MB - 500 Onnet - 15 Days - Rs.200"
    },
    {
        "number": "03349005352",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03347495363",
        "apid": "46371872,46383064,46379603",
        "code": "000000469,000000455,000000471",
        "name": "Super Minutes,1GB - 100 Offnet - 1000 Onnet - 30 Days - Rs 300,Mini Super Card - Rs.349"
    },
    {
        "number": "03348835811",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03347101159",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03343027706",
        "apid": "46384381,46379603,46371872",
        "code": "000000453,000000471,000000469",
        "name": "50 Offnet - 500 MB - 500 Onnet - 15 Days - Rs.200,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03345006072",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03344649849",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03342985448",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03341293255",
        "apid": "46371872,46383064,46379603",
        "code": "000000469,000000455,000000471",
        "name": "Super Minutes,1GB - 100 Offnet - 1000 Onnet - 30 Days - Rs 300,Mini Super Card - Rs.349"
    },
    {
        "number": "03345212082",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03344653175",
        "apid": "46371872,46383064,46384372,46379603",
        "code": "000000469,000000455,000000447,000000471",
        "name": "Super Minutes,1GB - 100 Offnet - 1000 Onnet - 30 Days - Rs 300,200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349"
    },
    {
        "number": "03346100340",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03346778413",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03347974960",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03344502495",
        "apid": "46384381,46379603,46371872",
        "code": "000000453,000000471,000000469",
        "name": "50 Offnet - 500 MB - 500 Onnet - 15 Days - Rs.200,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03345926014",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03347321237",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03343947511",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03347320512",
        "apid": "46371872,46375120,46384372,46379603",
        "code": "000000469,000000461,000000447,000000471",
        "name": "Super Minutes,100MB - 100 U-U Mins - 1 Day - On Recharge Rs.50,200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349"
    },
    {
        "number": "03346048374",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03341987874",
        "apid": "040404,46379603,46371872",
        "code": "000000786,000000471,000000469",
        "name": "1000 MB Internet FREE ,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03342999644",
        "apid": "46384372,46384381,46379603,46371872",
        "code": "000000447,000000453,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,50 Offnet - 500 MB - 500 Onnet - 15 Days - Rs.200,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03344612412",
        "apid": "46384372,46379603,46371872",
        "code": "000000447,000000471,000000469",
        "name": "200 MB - 200 Onnet - 7 Days - Rs.62,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03343878815",
        "apid": "040404,46379603,46371872",
        "code": "000000786,000000471,000000469",
        "name": "1000 MB Internet FREE ,Mini Super Card - Rs.349,Super Minutes"
    },
    {
        "number": "03346070863",
        "apid": "46379603,46371872",
        "code": "000000471,000000469",
        "name": "Mini Super Card - Rs.349,Super Minutes"
    }
]);
});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
