import React from 'react';

function PortCard({ title, imgUrl, stack, link }) {
  const cardStyles = {
    border: '2px solid #333333', 
    backgroundColor: 'lightgoldenrodyellow', 
    borderRadius: '0.5rem', 
    overflow: 'hidden',
  };

  return (
    <div style={cardStyles} className='rounded-md'>
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className='w-full p-4'>
        <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>{title}</h3>
        <p className='flex felx-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
          {stack.map(item => (
            <span
              key={item} // Add a unique key for each stack item
              className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md'
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default PortCard;
