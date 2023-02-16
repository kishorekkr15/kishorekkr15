import mongoose from "mongoose"

const PersonaldetailSchema = new mongoose.Schema({
    fathername:{
        type:String,
        required:[true,'please provide father name']
    },
    mothername:{
        type:String,
        required:[true,'please provide mother name']
    },
    street:{
        type:String,
        required:[true,'please provide street name']
    },
   area:{
        type:String,
        required:[true,'please provide area area']
    },
    city:{
        type:String,
        required:[true,'please provide city name']
    },
    state:{
        type:String,
        required:[true,'please provide state name']
    },
    country:{
        type:String,
        required:[true,'please provide country name']
    },
    pincode:{
        type:Number,
        required:[true,'please provide pincode']
    },
    educationalDetails:[
        {
            qualification:{
                type:String,
                required:[true,'please provide qualification']
            },      
            since:{
                type:Number,
                required:[true,'please provide starting year']
            },
            to:{
                type:Number,
                required:[true,'please provide complted year']
            },
            percentage:{
                type:Number,
                required:[true,'please provide percentage']
            },
            completed:{
                type:String,
                enum:['true','false'],
                default:'true'
            }

        }
    ],
    
    
})

export default mongoose.model('Personaldetail',PersonaldetailSchema)