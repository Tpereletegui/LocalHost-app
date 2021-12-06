const { findById } = require('../../../models/User');
const User = require('../../../models/User');
const Product = require('../../../models/Product');
const { 
  verificacionId,
  verificacionP
} = require('./middleware');


const addCart = async (req, res) => {
  const { id } = req.params;
  const { product } = req.body;
  console.log('producto addCart:', product);
  console.log('userId addCart:', userId);
  try {
    let verificacionUser = await verificacionId(id);
    console.log('verificacionUser addCart:', verificacionUser);
    if (verificacionUser.bool) {
      let verificacionProduct = await verificacionP()
    }
    res.send('No estas logueado o no se encontro el user');
  } catch (error) {
    console.log(error);
  }
};






// const addCart = async( req, res) => {
//     //const{ idUser,idItem } =req.params;
//     const { id } = req.params;  
//     const { product } = req.body;
//     console.log('producto addCart:', product);
//     console.log('userId addCart:',userId);
//     try {
//         let verificacionUser = await verificacionId(id);
//         console.log('verificacionUser addCart:', verificacionUser);

//         if(verificacionUser.bool){
//           let cart = user.cart;
//            let filtered= cart.filter(x => {
//                x.product._id === producto.product._id
//                && 
//             (x.product.talle === producto.product.talle)
//            }) 
//            if(filtered.length === 0) {
//                let carrito = [...cart, producto]

//                let edit = await User.findByIdAndUpdate(userId, {
//                 cart: carrito 
//             }, { new: true });
//             editUser = await edit.save();
//             console.log(editUser.cart)
//             res.json( editUser.cart);
//            }
//            if (filtered.length === 1){
//             let item = filtered[0];
//             item = {
//               ...item,
//               count: item.count + producto.count
//             }
//             let carrito = [];
//             cart.forEach(x => {
//             if ((x.product._id !== item.product._id) && (x.talle !== item.talle)) {
//               carrito.push(x)
//             }
//           })
//             carrito = [...carrito, item]
//           let edit = await User.findByIdAndUpdate(userId, {
//             cart: carrito 
//             }, { new: true });
//             editUser = await edit.save();
//             console.log(editUser)
//             res.json( editUser.cart);
//            }
//         }

//         let edit = await User.findOneAndUpdate({email: email}, {
//             cart: [ producto] 
//         }, { new: true });
//             editUser = await edit.save();
//             console.log(editUser)
//             res.json( editUser.cart);

//     } catch (error) {
//         console.log(error);
//     }
// }






module.exports = {
  addCart
};