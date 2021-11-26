const Product = require('../../../models/Product');
const Brand = require('../../../models/Brand');
const Category = require('../../../models/Category');
const Types = require('../../../models/Types');

const verificacionName = async (name) => {
    try {
        let find = await Product.find({name: name});
        // console.log('find',find);
        let obj = {
            bool: false
        };
        if(find.lenght !== 0 || find !== null) return obj = { bool: true }
        return obj;
    } catch (error) {
        console.log(error);
    }
};

const verificacionId = async (id) => {
    try {
        let find = await Product.findById(id);
        let obj = {
            bool: false
        };
        if(find.length !== 0 || find !== null) return obj = { bool: true, product: find }
        return obj;
    } catch (error) {
        console.log(error);
    }
};

const verificacionB = async (name) => {
    try {
        let find = await Types.find({name: name}); 
        console.log('find verificacionT', find);
        let obj = {
            bool: false
        };
        if(find.length !== 0 || find !== null) return obj = { bool: true, type: find._id }
        return obj;
    } catch (error) {
        console.log(error);
    }
};

const verificacionC = async (name) => {
    try {
        let find = await Category.find({name: name}); 
        let obj = {
            bool: false
        };    
        if(find.length !== 0 || find !== null) return obj = { bool: true, category: find._id }
        return obj;
    } catch (error) {
        console.log(error);
    }    
};    

const verificacionT = async (name) => {
    try {
        let find = await Types.find({name: name}); 
        console.log('find verificacionT', find);
        let obj = {
            bool: false
        };
        if(find.length !== 0 || find !== null) return obj = { bool: true, type: find._id }
        return obj;
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    verificacionId,
    verificacionName,
    verificacionB,
    verificacionC,
    verificacionT
};