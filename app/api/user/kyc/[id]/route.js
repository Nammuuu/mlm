import { NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

import User from '../../../../../models/User';
// import Profile from '../../../../../../models/Profile';
// import Profile from '../../../../../models/kyc';
import Profile from '../../../../../models/Kyc.js';

import connectToDatabase from '../../../../../lib/mongodb';


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

    const { aadhar, pan, kycStatus } = await req.json();
    let aadhardata = await Profile.findOne({ user: id });

    if (!aadhardata) {
        aadhardata = new Profile({
        user: id,
        pan,
        aadhar,
        kycStatus,
      });
    } else {
      if (aadhar) aadhardata.aadhar = aadhar;
      if (pan) aadhardata.pan = pan;
      if (kycStatus) aadhardata.kycStatus = kycStatus;
      aadhardata.updatedAt = Date.now();
    }

    await aadhardata.save();

    return NextResponse.json(aadhardata, { status: 200 });
  } catch (err) {
    console.error('Error updating profile:', err);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
