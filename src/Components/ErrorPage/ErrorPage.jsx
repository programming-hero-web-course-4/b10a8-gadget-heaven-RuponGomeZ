import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Error 404</h1>
                <p className='text-xl'>Page not found</p>
            </div>
        </div>
    );
};

export default ErrorPage;