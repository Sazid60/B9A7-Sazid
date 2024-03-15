

const Banner = () => {
    return (
        <div className="mt-8 lg:mt-14 bg-[url(/src/assets/images/banner.png)] bg-no-repeat bg-cover rounded-3xl mx-4 px-5 lg:px-72 mb-8 lg:mb-16">
            <h1 className="text-white text-2xl lg:text-6xl text-center font-bold pt-12 lg:pt-36">Discover an exceptional cooking <br /> class tailored for you!</h1>
            <div className="flex justify-center items-center">
                <p className="text-white text-center text-xs lg:text-2xl mt-4 lg:mt-7 max-w-[280px] lg:max-w-[850px]">Embark on a personalized culinary journey with our tailored cooking classes. Delve into vibrant flavors</p>
            </div>
            <div className="flex gap-4 justify-center items-center mt-5 lg:mt-10 pb-8 lg:pb-24">
                <button className="btn bg-green-400 font-bold border-0 rounded-full">Explore Now</button>
                <button className="btn bg-transparent text-white rounded-full ">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;