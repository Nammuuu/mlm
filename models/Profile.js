// import mongoose from 'mongoose';

// const ProfileSchema = new mongoose.Schema({
 
//   email: { type: mongoose.Schema.Types.ObjectId, ref: 'User', },
//   username: {  type: mongoose.Schema.Types.ObjectId, ref: 'User',},
//   key: {  type: mongoose.Schema.Types.ObjectId, ref: 'User',},
//   profile: { type: String,  },
//   phoneNumber: { type: String, unique: true },  
//   kycStatus: { type: String, default: 'non kyc' },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },

// });

// export default mongoose.models.User || mongoose.model('Profile', ProfileSchema);



import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  profile: { type: String },
  phoneNumber: { type: String, unique: true },
  kycStatus: { type: String, default: 'non kyc' },
 
  userreferlink: { type: String, unique: true, required: true, },

  address1: { type: String, required: true, },
  address2: { type: String },
  state: { type: String , required: true, },
  pincode: { type: String, required: true, },



  bankname: { type: String, required: true,},
  accountnumbar: { type: String, unique: true, required: true, },
  ifcecode: { type: String, required: true,},
  bankbranch: { type: String, required: true, },
  bankpincode: { type: String },
  bankfulladdress: { type: String },

  realname: { type: String , required: true,},
  qr: { type: String, required: true, },
  upiid: { type: String, required: true, unique: true },
  


  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Profile || mongoose.model('Profile', ProfileSchema);
