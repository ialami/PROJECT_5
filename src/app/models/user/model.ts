import { model, Model } from 'mongoose';
import { IUser } from './interface';
import { UserSchema } from './schema';

export interface IUserModel extends Model<IUser> {}

export const User: IUserModel = model<IUser, IUserModel>('User', UserSchema);