import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../assets/not-found.svg'

const ErrorPage = () => {
  return (
    <div className="space-y-6 text-center p-6 mx-4">
      <div className='flex justify-center items-start'>
        <img className='w-full h-full md:h-[500px]' src={notFound} alt="" />
      </div>
      <h3 className="text-4xl font-medium">404 - Page Not Found</h3>
      <p className="text-xl">Oops! It looks like the page you're looking for doesn't exist.</p>
      <Link to="/"><p className="btn btn-primary text-white text-lg mt-6">Go back to Home</p></Link>
    </div>
  );
};

export default ErrorPage;