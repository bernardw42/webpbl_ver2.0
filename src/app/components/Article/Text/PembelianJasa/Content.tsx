"use client"

export default function Text() {
    // Function to scroll the page to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return(
        <div className="flex flex-col bg-white w-full h-full justify-center items-center px-[5%]">
            <div className="max-w-7xl flex flex-col pt-[70px] pb-[100px] ">
                <h1 className="text-[26px] font-semibold text-black">Pembelian Jasa dengan Momentum Tahun 2024</h1>
                <p className="text-gray-500 text-[12px]">8 January 2021 | Panca Budi Logistindo</p>
                <div className="text-justify flex flex-col mt-[50px] gap-y-[20px]">
                    <p className="text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat libero id efficitur venenatis. Sed eu magna id lorem consectetur ultricies non vitae lacus. Curabitur cursus euismod nibh, id facilisis ex vulputate ut. Nullam vehicula ex non lectus venenatis, ut tristique nunc scelerisque. In vel aliquet nunc, nec convallis sapien. Etiam fermentum sem nec enim tincidunt gravida. Phasellus convallis, ante in tempus dignissim, ex orci bibendum neque, at scelerisque dolor urna at lacus. Proin dapibus consequat turpis, non luctus velit aliquet sed. Fusce et quam sed magna cursus volutpat non sit amet lectus. Sed tempus sapien vel metus consequat, vitae faucibus lorem congue. Ut sit amet mollis nunc. Duis ac purus felis. Donec fringilla lectus ac metus egestas gravida.
                    </p>
                    <p className="text-black">
                    Suspendisse sollicitudin efficitur felis, at cursus libero mollis eget. Praesent a dui et ex bibendum dapibus. Pellentesque finibus, augue ac placerat mollis, justo ligula malesuada nulla, ut tincidunt metus dolor id nunc. Sed nec magna convallis, vehicula turpis ac, tincidunt ipsum. Proin rhoncus, enim eget volutpat volutpat, magna ipsum lobortis lectus, vel molestie neque dolor sit amet purus. Duis efficitur, velit id aliquam placerat, risus nulla consectetur sem, nec ornare orci magna eget dolor. Nullam hendrerit bibendum libero, ac tincidunt felis tincidunt eget. Nunc non libero at lectus feugiat feugiat in vitae ipsum. Aenean tempor vehicula lacus non fringilla.
                    </p>
                    <p className="text-black">
                    Mauris sit amet est in leo pharetra ultricies. Aliquam erat volutpat. Fusce tempus libero in malesuada ullamcorper. Nullam eget augue diam. Suspendisse in feugiat dolor. Proin lobortis posuere turpis, vel convallis odio fermentum et. Aliquam et mauris at lectus faucibus vehicula nec at leo. In ullamcorper, tortor ut convallis egestas, odio elit viverra enim, et feugiat dolor ex at nulla. Maecenas et sapien id nulla tristique pharetra. Pellentesque in eros vehicula, sollicitudin justo id, pharetra arcu. Aliquam erat volutpat. Curabitur vehicula massa sit amet justo eleifend efficitur.
                    </p>
                    <p className="text-black">
                    Fusce hendrerit lacus at lectus pretium, a scelerisque nisl lobortis. Integer tincidunt orci eget nisi cursus auctor. Vivamus et ipsum sed justo ultrices feugiat. Duis ac odio eros. Nulla ut suscipit mi. Sed pellentesque mi vel sapien hendrerit, vel malesuada eros auctor. Quisque sollicitudin purus ac ex laoreet dignissim. Phasellus aliquam efficitur nibh, nec efficitur quam viverra vel. Donec sed ornare leo. Pellentesque viverra velit sit amet nulla dignissim, sed posuere odio iaculis. Integer vehicula dui sit amet elit fermentum, ut ultricies orci fringilla. In non tellus eget sapien dictum ultrices ut vel nulla.
                    </p>
                    <p className="text-black">
                    Integer efficitur condimentum risus, nec malesuada leo. Duis pharetra sapien ut risus venenatis, ut fringilla libero tincidunt. Suspendisse id arcu ligula. Vestibulum id feugiat dolor, a sagittis erat. Nulla eu turpis ultricies, interdum velit eu, posuere turpis. Nam tincidunt, magna eget gravida vehicula, ante ex rutrum velit, sed luctus felis neque et dolor. Proin rhoncus est eget nibh fermentum, sed ullamcorper purus pharetra. Nunc fermentum feugiat volutpat. Pellentesque tempor velit et risus ultrices, ut rhoncus felis congue. Praesent sit amet ipsum id tortor tincidunt volutpat. Proin a tincidunt urna.
                    </p>
                </div>
                <button
                    onClick={scrollToTop}
                    className="mt-[30px] bg-[#033C5A] text-white w-8 h-8 rounded-full shadow-lg hover:bg-[#CC0033] duration-300 focus:outline-none self-end"
                >
                    &#x2191; {/* Unicode for a simple up arrow */}
                </button>
            </div>
        </div>
        
    )
}