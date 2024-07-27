// import { NextResponse } from 'next/server';
// import { verify } from 'jsonwebtoken';
// import dbConnect from '../../../../../../lib/mongodb';
// import User from '../../../../../../models/User';
// import Profile from '../../../../../../models/Profile';



// const JWT_SECRET = process.env.JWT_SECRET;

// export async function PUT(req, { params }) {
//   const { id } = params;
//   const authHeader = req.headers.get('authorization');

//   if (!authHeader) {
//     return NextResponse.json({ message: 'No token provided' }, { status: 403 });
//   }

//   const token = authHeader.split(' ')[1];

//   try {
//     await dbConnect();
//     const decoded = verify(token, JWT_SECRET);

//     if (decoded.userId !== id) {
//       return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
//     }

//     const user = await User.findById(id);
//     if (!user) {
//       return NextResponse.json({ message: 'User not found' }, { status: 404 });
//     }

//     const { profile, phoneNumber, kycStatus } = await req.json();
//     let profileData = await Profile.findOne({ user: id });

//     if (!profileData) {
//       profileData = new Profile({
//         user: id,
//         profile,
//         phoneNumber,
//         kycStatus,
//       });
//     } else {
//       if (profile) profileData.profile = profile;
//       if (phoneNumber) profileData.phoneNumber = phoneNumber;
//       if (kycStatus) profileData.kycStatus = kycStatus;
//       profileData.updatedAt = Date.now();
//     }

//     await profileData.save();

//     return NextResponse.json(profileData, { status: 200 });
//   } catch (err) {
//     console.error('Error updating profile:', err);
//     return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
//   }
// }



import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';
import User from '../../../../../../models/User';
import Profile from '../../../../../../models/Profile';

import connectToDatabase from '../../../../../../lib/mongodb';

const JWT_SECRET = process.env.JWT_SECRET;

export async function PUT(req, { params }) {
  const { id } = params;
  const authHeader = req.headers.get('authorization');

  if (!authHeader) {
    return NextResponse.json({ message: 'No token provided' }, { status: 403 });
  }

  const token = authHeader.split(' ')[1];

  try {
    await connectToDatabase();
    const decoded = verify(token, JWT_SECRET);

    if (decoded.userId !== id) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
    }

    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const {
      profile,
      phoneNumber,
      kycStatus,
      userreferlink,
      address1,
      address2,
      state,
      pincode,
      bankname,
      accountnumbar,
      ifcecode,
      bankbranch,
      bankfulladdress,
      realname,
      qr,
      upiid,
    } = await req.json();

    let profileData = await Profile.findOne({ user: id });

    if (!profileData) {
      profileData = new Profile({
        user: id,
        profile,
        phoneNumber,
        kycStatus,
        userreferlink,
        address1,
        address2,
        state,
        pincode,
        bankname,
        accountnumbar,
        ifcecode,
        bankbranch,
        bankfulladdress,
        realname,
        qr,
        upiid,
      });
    } else {
      if (profile) profileData.profile = profile;
      if (phoneNumber) profileData.phoneNumber = phoneNumber;
      if (kycStatus) profileData.kycStatus = kycStatus;
      if (userreferlink) profileData.userreferlink = userreferlink;
      if (address1) profileData.address1 = address1;
      if (address2) profileData.address2 = address2;
      if (state) profileData.state = state;
      if (pincode) profileData.pincode = pincode;
      if (bankname) profileData.bankname = bankname;
      if (accountnumbar) profileData.accountnumbar = accountnumbar;
      if (ifcecode) profileData.ifcecode = ifcecode;
      if (bankbranch) profileData.bankbranch = bankbranch;
      if (bankfulladdress) profileData.bankfulladdress = bankfulladdress;
      if (realname) profileData.realname = realname;
      if (qr) profileData.qr = qr;
      if (upiid) profileData.upiid = upiid;

      profileData.updatedAt = Date.now();
    }

    await profileData.save();

    return NextResponse.json(profileData, { status: 200 });
  } catch (err) {
    console.error('Error updating profile:', err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
