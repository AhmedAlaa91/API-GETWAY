import * as express from 'express';

import PhoneRoutes  from './routes/PhoneNumbers';

const app = express();
const port = 3000;



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

PhoneRoutes(app);
app.listen(port, () => {
    console.log(` listening on port ${port}`);
  });
  
export default app;