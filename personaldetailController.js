import Personaldetail from '../Model/personaldetailModel.js'

const createDetails = async (req, res) => {
    try{
        const data = await Personaldetail.create(req.body)
        res.status(201).json({ data })
    }catch(error){
        res.status(500).json({msg:'there was an error'})
    }
    
}

export { createDetails }
