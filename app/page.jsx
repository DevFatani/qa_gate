'use client';
import {React} from 'react';
import Image from 'next/image';

export default () => {
   return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
        <Image
            src={'/assets/images/page-4.png'} 
            alt='logo'
            width={1230}
            height={1200}
            className="max-w-lg rounded-s-xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Welcome to QA Gate</h1>
            <p className="py-6">We open to you the gate to manage your QA activities and to deliver high-quality output</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      );
}