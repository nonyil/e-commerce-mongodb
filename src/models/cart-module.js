const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  }],
  address: {
    street: {
      type: String,
      required: true,
    },
    number: {
      type: string,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    paymant: {
      card: {
        number: {
          type: String,
        },
        cvc : {
          type: String,
        }
      }
    }
  }
});

module.exports = mongoose.model('Cart', Schema);