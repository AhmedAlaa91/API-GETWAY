import { PhoneNumber } from "../handlers/PhoneNumberst"; 
const phone = new PhoneNumber;

let index = async (req, res) => {
    let x = await phone.index();
    res.json(x);
};

let PhoneNumbers = async (req, res) => {
    let sitename_param=req.query.site
    let x = await phone.GetPhoneNumbers(sitename_param);
    res.json(x);
};


let UpdatePhoneNumberState = async (req, res) => {
    let sitename_param=req.body
    let x = await phone.UpdatePhoneNumberState(sitename_param);
    res.json(x);
};


const PhoneRoutes = (app) => {
    app.get('/getPhoneNumbers', index);
    app.get('/getPhoneNumbersSites', PhoneNumbers);
    app.put('/UpdatePhoneNumberState', UpdatePhoneNumberState);
}
export default  PhoneRoutes;
