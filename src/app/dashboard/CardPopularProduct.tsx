import { useGetDashboardMetricsQuery } from '@/state/api'
import React from 'react'
import Rating from '../(components)/Raiting';

const CardPopularProduct = () => {
    const { data: dashboardMetrics, isLoading} = useGetDashboardMetricsQuery();
  return (
    <div className='row-spa-3 xl:row-span-6 bg-white shadow-sm rounded-2xl pb-16'>
        {
            isLoading ? (
                <div className='m-5'> Loading... </div>
            ): (
                <>
                <h3 className='text-lg font-semibold px-7 pt-5 pb-2'>
                    Popular Product
                </h3>
                <hr/>
                <div className='overflow-auto h-full'>
                    {dashboardMetrics?.popularProducts.map((product) => (
                        <div 
                        key={product.productId}
                        className='flex items-center justify-between  gap-3 px-5 py-7 border-b'>
                            <div className='flex items-center gap-3'>
                            <div>img </div>
                            <div className='flex flex-col justify-between gap-1'>
                                <div className='font-bold text-gray-700'>{product.name}</div>
                                <div className='flex text-sm items-center'>
                                    <span className='font-bold text-blue-500 text-xl'>
                                    ${product.price}
                                    </span> 
                                    <span className='mx-2'>|</span>
                                    <Rating rating={product.rating || 0 }/>
                                </div>
                            </div>
                            </div>
                            <div className='text-sm flex items-center'>
                                <button className='p-2 rounded-full bg-blue-100 text-blue-600 mr-2'>
                                </button>
                                {Math.round(product.stockQuantity/1000)}k sold
                            </div>
                        </div>
                    ))}
                </div>
                </>
            )
        }
    </div>
  )
}

export default CardPopularProduct
