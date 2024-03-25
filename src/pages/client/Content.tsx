import { Link } from "react-router-dom";

// Function to get the dominant color from an image
function getDominantColor(imageSrc: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.crossOrigin = 'Anonymous'; // Enable CORS
        image.src = imageSrc;

        image.onload = () => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            if (!context) {
                reject('Could not create canvas context');
                return;
            }

            canvas.width = image.width;
            canvas.height = image.height;

            context.drawImage(image, 0, 0);

            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            let r = 0,
                g = 0,
                b = 0;

            for (let i = 0; i < data.length; i += 4) {
                r += data[i];
                g += data[i + 1];
                b += data[i + 2];
            }

            r = Math.floor(r / (data.length / 4));
            g = Math.floor(g / (data.length / 4));
            b = Math.floor(b / (data.length / 4));

            resolve(`rgb(${r}, ${g}, ${b})`);
        };

        image.onerror = () => {
            reject('Failed to load image');
        };
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const divs = document.querySelectorAll('.background-color');

    divs.forEach((div: Element) => {
        const imageSrc = div.querySelector('img')?.getAttribute('src');
        if (imageSrc) {
            getDominantColor(imageSrc)
                .then((color) => {
                    if (div instanceof HTMLElement) {
                        div.style.backgroundColor = color.toString(); // Chuyển đổi sang chuỗi trước khi gán
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    });
});



const Content = () => {
    return (
        <div className="py-5 w-[980px] mx-auto ">
            <p className="text-left text-2xl font-medium leading-normal opacity-100 mb-4">TUYẾN ĐƯỜNG PHỔ BIẾN</p>
            <div className="gap-2.5 grid grid-cols-4">
                <div className="bg-transparent">
                    <Link to={`/detail`} className="block rounded-sm bg-gray-300 shadow-sm shadow-indigo-100 background-color text-white ">
                        <img src="img/sg_nt.png" className="h-36 w-full object-cover" />
                        <div className="mt-2 pb-8 px-4 pt-2">
                            <div className="font-bold">
                                Sài Gòn - Nha Trang
                            </div>
                            <div className="my-1 text-xs flex items-center">
                                Từ 240,000đ
                                <span className="ml-4 text-xs line-through text-gray-400">
                                    130.000đ
                                </span>

                            </div>
                        </div>
                    </Link>
                </div>
                <div>
                    <a href="#" className="block rounded-sm bg-gray-300 shadow-sm shadow-indigo-100 background-color text-white ">
                        <img src="img/hn_hp.png" className="h-36 w-full object-cover" />
                        <div className="mt-2 pb-8 px-4 pt-2">
                            <div className="font-bold">
                                Hà Nội - Hải Phòng
                            </div>
                            <div className="my-1 text-xs flex items-center">
                                Từ 240,000đ
                                <span className="ml-4 text-xs line-through text-gray-400">
                                    130.000đ
                                </span>

                            </div>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="#" className="block rounded-sm bg-gray-300 shadow-sm shadow-indigo-100 background-color text-white ">
                        <img src="img/sg_dl.png" className="h-36 w-full object-cover" />
                        <div className="mt-2 pb-8 px-4 pt-2">
                            <div className="font-bold">
                                Sài Gòn - Đà Lạt
                            </div>
                            <div className="my-1 text-xs flex items-center">
                                Từ 240,000đ
                                <span className="ml-4 text-xs line-through text-gray-400">
                                    130.000đ
                                </span>

                            </div>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="#" className="block rounded-sm bg-gray-300 shadow-sm shadow-indigo-100 background-color text-white ">
                        <img src="img/sai_gon.png" className="h-36 w-full object-cover" />
                        <div className="mt-2 pb-8 px-4 pt-2">
                            <div className="font-bold">
                                Sài Gòn - Phan Thiết
                            </div>
                            <div className="my-1 text-xs flex items-center">
                                Từ 240,000đ
                                <span className="ml-4 text-xs line-through text-gray-400">
                                    130.000đ
                                </span>

                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Content