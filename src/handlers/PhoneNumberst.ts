import Client from  '../database' ;


import axios from 'axios';


export class PhoneNumber {
     index = async () => {
       const query = "SELECT top 10 phone_number FROM phone_number";

        let prodResults = await Client(query);
    
        return(prodResults.recordset);
      };



      GetPhoneNumbers = async(sitename :string) => { try {
       let config = {

        params: {
          customer_site: sitename
        },
      }
       const response = await axios.get('http://127.0.0.1:8000/ddi/api/v1.0/GetPhoneNumbers',config);
        const result = response.data;
        

        return(result);
     } catch (error) {
        console.error('Error fetching users:', error.message);
     }};
      


     UpdatePhoneNumberState = async (PhoneData : string  ) =>{


      type PhoneDataResponse = {
        phone_number: string;
        state: string;
        availability_date: string;
      };
      try {
        // 👇️ const data: UpdateUserResponse
        const { data } = await axios.put<PhoneDataResponse>(
          'http://127.0.0.1:8000/ddi/api/v1.0/UpdatePhoneNumberState',
          PhoneData,
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          },
        );
    

    
        return data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
         
          return error.message;
        } else {
          console.log('unexpected error: ', error);
          return 'An unexpected error occurred';
        }
      }
    }

      
}


