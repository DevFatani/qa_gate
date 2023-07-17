"use client"
import Loading from '@components/Loading';
import React, { Suspense }  from 'react';


export default ({ children}) =>
    <dialog data-modal className='w-3/5 h-3/6 rounded-lg bg-base-100'>
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
    </dialog>