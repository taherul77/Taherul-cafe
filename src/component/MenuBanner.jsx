/* eslint-disable react/prop-types */

const MenuBanner = ({ img,heading,description}) => {
    return (
        <div
            style={{ "--image-url": `url(${img})` }}
            className="bg-[image:var(--image-url)] object-cover bg-no-repeat p-5 md:p-10 lg:px-20 lg:py-24"
        >
            <div className=''>
                <div className="text-center">
                    <h3 className="uppercase text-[#D99904]  text-5xl mb-5">{heading}</h3>
                    <h3 className="uppercase text-white  text-4xl">
                        {description}
                    </h3>
                </div>
            </div>
        </div>
            
      
    );
};

export default MenuBanner;