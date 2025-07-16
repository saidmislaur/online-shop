const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: [100, 'в название продукта не должно быть больше 100 символов'],
  },
  description: {
    type: String,
    required: true,
    maxLength: [200, 'в описании не должно быть больше 200 символов'],
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Цена не может быть меньше 0'],
  },
  originalPrice: {
    type: Number,
    min: [0, 'Original price cannot be negative'],
  },
  category: {
    type: String,
    required: true,
    enum: ['t-shirts', 'sweatshirts', 'hoodies', 'jackets', 'trousers', 'jeans'],
  },
  sizes: [
    {
      size: {
        type: String,
        enum: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: [0, 'количество не может быть меньше 0'],
      },
    },
  ],
  images: [
    {
      url: String,
      alt: String,
      isPrimary: {
        type: Boolean,
        default: false,
      },
    },
  ],
  fabric: {
    type: String,
    maxlength: [200, 'Fabric description cannot exceed 200 characters'],
  },
  composition: {
    type: String,
    maxlength: [200, 'Composition cannot exceed 200 characters'],
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  tags: [String],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

productSchema.index({ name: 'text', description: 'text', tags: 'text' });
productSchema.index({ category: 1, isActive: 1 });
productSchema.index({ price: 1 });

productSchema.virtual('totalQuantity').get(function () {
  return this.sizes.reduce((total, size) => total + size.quantity, 0);
});

productSchema.virtual('discountPercentage').get(function () {
  if (this.originalPrice && this.originalPrice > this.price) {
    return Math.round(((this.originalPrice - this.price) / this.originalPrice) * 100);
  }
  return 0;
});

productSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Product', productSchema);
