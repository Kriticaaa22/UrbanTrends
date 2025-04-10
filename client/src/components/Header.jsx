const Header = () => {
  return (
    <div className='w-full h-[80vh] flex justify-center pt-12'>
      <div className='relative w-full h-full max-w-5xl overflow-hidden rounded-lg shadow-lg animate-slideLeft'>
        <img
          className='object-cover w-full h-full transition-transform duration-500 hover:scale-105 '
          src="https://img.freepik.com/free-photo/woman-model-business-suit-wearing-hat_1303-17693.jpg?t=st=1729283665~exp=1729287265~hmac=ac955ed8798d6f8c820fb9748db62838aa551f404aff86d2674f3fd620746da0&w=1380"
          alt="Model in Business Suit"
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white'>
          <h1 className='text-4xl md:text-6xl font-bold'>Fashion Trends 2024</h1>
          <p className='mt-2 text-lg md:text-2xl font-bold'>Discover the latest styles and trends</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
