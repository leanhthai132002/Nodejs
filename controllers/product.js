import Product from '../models/product'

// API list san pham
export const list = async (req, res) => {
    try {
        const products = await Product.find().sort({createAt: -1});
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Khong tim duoc san pham"
        })
    }
}

            

// API them san pham
export const creat = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product)    
    } catch (error) {
        res.status(400).json({
            message: "Khong them duoc"
        })
    }
}

// API Lay san pham theo id
export const read = async (req ,res) =>{
    const filter = { _id: req.params.id}
    try {
        const product = await Product.findOne(filter);
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Khong lay duoc san pham"
        })
    }
    // res.json(products.find(item => item.id === +req.params.id))
}

// API Xoa san pham
export const remove = async (req, res) => {
    const condition = { _id: req.params.id}
    try {
        const product = await Product.findOneAndDelete(condition);
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Khong the xoa"
        })
    }
    // res.json(products.filter(item => item.id !== +req.params.id))
}


// API Cap nhat san pham
export const update = async (req, res) => {
    const condition = { _id: req.params.id};
    const doc = req.body;
    const option = { new: true};
    try {
        const product = await Product.findOneAndUpdate(condition, doc, option);
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Khong the cap nhat"
        })
    }
    // res.json(products.map(item => item.id == req.params.id ? req.body : item))
}
