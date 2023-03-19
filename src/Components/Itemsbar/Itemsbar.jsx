import React from "react";

const Itemsbar = () => {
    return (

        <nav style={{
            background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
            animation: 'gradient 15s ease infinite'
        }} className="relative h-full w-full bg-gray rounded-sm bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray w-full flex flex-wrap items-center justify-center py-3 bg-gray text-white focus:text-md shadow-lg">

            <div className="container-fluid w-full flex flex-wrap items-center justify-evenly overflow-scrollx">
                <div className="container-fluid hover:text-gray-dark hover:shadow-sm px-0">
                   <img src="https://o.remove.bg/downloads/0ac4a62a-bccd-4f5d-946d-9e0a0fef7a24/pngtree-farm-house-png-image_5412129-removebg-preview.png"  className="h-10 w-10"/>
                    <a className="text-xl text-black font-semibold" href="#">Trending</a>
                </div>
                <div className="container-fluid hover:text-gray-dark hover:shadow-sm px-0 ">
                   <img src="https://www.pngall.com/wp-content/uploads/5/John-Deere-Tractor-Transparent.png" className="h-12 w-12" />
                    <a className="text-xl text-black font-semibold" href="#">Tractor</a>
                </div>
                <div className="container-fluid hover:text-gray-dark hover:shadow-sm px-0">
                   <img src="https://o.remove.bg/downloads/6b68d0b8-9079-45d4-9b0a-96a95a1523de/images-removebg-preview.png" className="h-11 w-17" />
                    <a className="text-xl text-black font-semibold" href="#">Harvester</a>
                </div>
                <div className="container-fluid hover:text-gray-dark hover:shadow-sm px-0">
                   <img src="https://o.remove.bg/downloads/3ff92501-7479-4117-9da9-7b072811328e/wheat-crops-white-background-isolated-44782002-removebg-preview.png" className="h-10 w-17" />
                    <a className="text-xl text-black font-semibold" href="#">Rabi Season</a>
                </div>
                <div className="container-fluid hover:text-gray-dark hover:shadow-sm px-0">
                   <img src="https://o.remove.bg/downloads/02e46200-55be-40ea-9195-12f20e4a45cc/508-5080115_rice-plant-png-transparent-png-removebg-preview.png" className="h-10 w-15" />
                    <a className="text-xl text-black font-semibold" href="#">Kharif season</a>
                </div>

            </div>
        </nav>
    );
};

export default Itemsbar;
