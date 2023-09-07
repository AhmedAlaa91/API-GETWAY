import * as mssql from 'mssql';



let Client  = async (q:string)  => {
    try {
       // make sure that any items are correctly URL encoded in the connection string
       let pool = (await mssql.connect('Server=EQ-EQ6407338;Database=PhoneNumberMgt_Flexible365;User Id=Lilo;Password=Lilo@2023')).request()
     
        const result = await pool.query(q)

        return (result)
    } catch (err) {
        // ... error checks
        console.log(err)
    }
}



export default Client ;