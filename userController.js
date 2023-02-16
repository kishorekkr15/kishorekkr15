import Userdata from '../Model/UserModel.js'


const registerUSer = async (req, res) => {
    try {

        const user = await Userdata.create(req.body)
        res.status(201).json({ user })
    } catch (error) {
        res.status(500).json({ msg: 'there was an error' })
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(500).json({ msg: 'please provide all data' })
    }

    const user = await Userdata.findOne({ email }).select('+password')

    if (!user) {
        res.status(500).json({ msg: 'invalid data' })
    }

    const ispassword = await user.comparePassword(password)
    if (!ispassword) {
        res.status(500).json({ msg: 'invalid password' })
    }
    res.status(200).json({ msg: 'login successful' })
}

const updateUser = async (req, res) => {
    const newData = {role: req.body.role}

    const user = await Userdata.findByIdAndUpdate(req.params.id, newData, {
        new: true,
        runValidators: true
    })
    res.status(200).json({ user })
}

const deleteUser = async (req, res) => {
    await Userdata.findByIdAndDelete(req.params.id)
    res.status(200).json({ msg: 'successfully deleted' })
}

const allUser = async (req, res) => {
    const users = await Userdata.find()
    res.status(200).json({ users })
}

export { registerUSer, loginUser, updateUser, deleteUser, allUser }