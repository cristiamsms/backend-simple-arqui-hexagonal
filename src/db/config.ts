import mongoose from 'mongoose';

export const mongoConnection = async() =>{

    try {
  
        await mongoose.connect(process.env.MONGO || '' )
        console.log('Base de Datos online!')
        
    } catch (error) {

        console.log(error);
        throw new Error("Error en la base de datos ");
        
        
    }


}