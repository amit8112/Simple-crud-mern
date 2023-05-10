import userModel from "../models/User.model.js";

class UserController {
    static getAllUsers = async (req, res) => {
        try {
            const allUsers = await userModel.find({});
            if (allUsers) {
                return res.status(200).json(allUsers)
            }
        } catch (error) {
            return res.status(404).json(error);

        }
    }

    static createUser = async (req, res) => {
        const { name, email, phone, age } = req.body;
        try {
            if (name && email && phone && age) {
                const newUser = userModel({
                    name: name,
                    email: email,
                    phone: phone,
                    age: age
                })
                const saved_User = await newUser.save();
                if (saved_User) {
                    return res.status(201).json(saved_User);
                } else {
                    return res.status(400).json({ message: "Something went wrong" })

                }
            }
            else {
                return res.status(400).json({ message: "All fields are required" })

            }

        } catch (error) {
            return res.status(404).json(error);

        }
    }

     


    static getSingleUser = async (req, res) => {
        const { id } = req.params;
        try {
            if (id) {
                const getSingleData = await userModel.findById(id);
                return res.status(200).json(getSingleData);

            } else {
                return res.status(404).json({ "message": "ID Not Found" });
            }

        } catch (error) {
            return res.status(404).json(error);
        }

    }


    //update user data 

    static updateUser = async (req, res) => {
        const { id } = req.params;
        try {
            if (id) {
                const getUpdatedData = await userModel.findByIdAndUpdate(id, req.body);
                return res.status(200).json(getUpdatedData);

            } else {
                return res.status(400).json({ "message": "ID Not Found" });
            }

        } catch (error) {
            return res.status(404).json(error);
        }
    }

    // delete user data 

    static deleteUser = async (req, res) => {
        const { id } = req.params;
        try {
            if (id) {
                const getDeletedData = await userModel.findByIdAndDelete(id, req.body);
                return res.status(200).json(getDeletedData);

            } else {
                return res.status(400).json({ "message": "ID Not Found" });
            }

        } catch (error) {
            return res.status(404).json(error);
        }
    }





}
export default UserController;