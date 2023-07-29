import { model, Schema, SchemaTypes } from 'mongoose';
import User from '../../users/domain/user.model';

const userSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  orderHistory: [
    {
      type: SchemaTypes.ObjectId,
      ref: 'Order',
    },
  ],
  currentOrder: {
    type: SchemaTypes.ObjectId,
    ref: 'Order',
  },
});

userSchema.set('toJSON', {
  transform(_document, returnedObject) {
    returnedObject.id = returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject._id;
    delete returnedObject.password;
  },
});

export const UserModel = model('User', userSchema, 'users');
