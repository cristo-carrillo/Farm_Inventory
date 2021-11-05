const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/animals-db-app').then(db=>console.log('DB is connect'))
.catch(err=>console.log(err));
