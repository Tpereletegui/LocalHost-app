const { findById } = require('../../../models/User');
const User = require('../../../models/User');
const Product = require('../../../models/Product');


const addCart = async( req, res) => {
    //const{ idUser,idItem } =req.params;
    const {  email } = req.params;  
    const producto =req.body;
    /* console.log('producto',req.body.product)
    console.log('userId',userId) */
   
    try {
        let user= await User.find({email: email})
        console.log('usuario', user)
        let cart = user.cart;
        
        if(cart?.length > 0 ){
           let filtered= cart.filter(x => {
               x.product._id === producto.product._id
               && 
            (x.product.talle === producto.product.talle)
           }) 
           if(filtered.length === 0) {
               let carrito = [...cart, producto]
              
               let edit = await User.findByIdAndUpdate(userId, {
                cart: carrito 
            }, { new: true });
            editUser = await edit.save();
            console.log(editUser.cart)
            res.json( editUser.cart);
           }
           if (filtered.length === 1){
            let item = filtered[0];
            item = {
              ...item,
              count: item.count + producto.count
            }
            let carrito = [];
            cart.forEach(x => {
            if ((x.product._id !== item.product._id) && (x.talle !== item.talle)) {
              carrito.push(x)
            }
          })
            carrito = [...carrito, item]
          let edit = await User.findByIdAndUpdate(userId, {
            cart: carrito 
            }, { new: true });
            editUser = await edit.save();
            console.log(editUser)
            res.json( editUser.cart);
           }
        }
        
        let edit = await User.findOneAndUpdate({email: email}, {
            cart: [ producto] 
        }, { new: true });
            editUser = await edit.save();
            console.log(editUser)
            res.json( editUser.cart);

    } catch (error) {
        console.log(error);
    }
}






module.exports = {
    addCart
};