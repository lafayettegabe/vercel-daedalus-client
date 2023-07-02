import { useState } from 'react';

interface Image {
    id: number;
    url: string;
    name: string;
}

const images: Image[] = [
    { id: 1, url: '/images/image1.png', name: 'Wireframing and Prototyping' },
    { id: 2, url: '/images/image2.png', name: 'Visual Design' },
    { id: 3, url: '/images/image3.png', name: 'Front-End Development' },
    { id: 4, url: '/images/image4.png', name: 'Back-End Development' },
    { id: 5, url: '/images/image5.png', name: 'Content Creation' },
    { id: 6, url: '/images/image6.png', name: 'Testing and Quality Assurance' },
    { id: 7, url: '/images/image7.png', name: 'Deployment and Maintenance' },
    // Add more image objects as needed
];

const MyComponent: React.FC = () => {
    const [activeImage, setActiveImage] = useState(images[0]);

    const handleImageClick = (image: Image) => {
        setActiveImage(image);
    };

    const handleButtonClick = () => {
        console.log('btn clicked');
    };
    
    const handleClose = () => {
        document.querySelector('#web-design-overlay')?.classList.add('hidden')
    }
    return (
        <div id='web-design-overlay' className="flex flex-col absolute bg-gray-500 my-4 hidden" style={{ zIndex: '999' }}>
            <div className='text-4xl text-center flex flex-row'>
                <div className='w-full'>Web-Design</div>
                <div className='w-[75px]' onClick={ handleClose }>X</div>
            </div>
            <div className='flex flex-row w-full h-full'>
                <div className="w-1/4 bg-gray-200">
                    {images.map((image) => (
                        <label
                            key={image.id}
                            htmlFor={`image-${image.id}`}
                            className="block cursor-pointer p-2"
                            onClick={() => handleImageClick(image)}
                        >
                            {image.name}
                        </label>
                    ))}
                </div>
                <div className="w-3/4 bg-red">
                    <div className="p-4">
                        <img
                            src={activeImage.url}
                            alt={`Image ${activeImage.id}`}
                            className="border-2 border-blue-500"
                        />
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 mt-auto mx-auto" onClick={handleButtonClick}>
                        Go to Next Page
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
