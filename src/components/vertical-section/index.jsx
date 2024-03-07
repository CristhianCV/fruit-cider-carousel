const VerticalSection = ({ fruits }) => {
    return (
        <>
            <div className="fixed">
                <svg>
                    <clipPath id="myPath" clipPathUnits="objectBoundingBox">
                        <path d="M.31.02C.37 0 .65 0 .69.02Q.71.03.69.05L.75.16.75.88C.75.9.75.9.69.94L.69.96A.112.02 0 01.31.96L.31.94C.25.9.25.9.25.88L.25.16.31.05Q.29.03.31.02" />
                        {/* <path d="M4 0 21 0C23.5 0 23.5 2.5 22.5 3L25 8 25 39C25 40 24.3 40.1 23.3 40.3L23.3 41.5A5.6 1 0 011.8 41.5L1.8 40.3C.7 40.1 0 40 0 39L0 8 2.5 3C1.5 2.5 1.5 0 4 0" /> */}
                    </clipPath>
                </svg>
            </div>

            <div
                className="scroll-container relative w-screen h-screen overflow-x-hidden overflow-y-scroll snap-mandatory snap-y z-10"
                style={{ scrollbarWidth: "none" }}
            >
                <div className="sticky top-0 flex-col flex items-center justify-center w-screen h-screen pt-20 z-20">
                    <div className="grow w-full flex items-center justify-center py-6">
                        <div className="can-background h-full aspect-square"></div>
                    </div>
                    <div className="pt-6 pb-8">
                        <button className="shop-button py-2 px-4 font-semibold text-[1.1rem] text-pear-font rounded-full bg-white hover:bg-gray-200">
                            Shop Taste
                        </button>
                    </div>
                </div>
                {fruits.map((x) => (
                    <div
                        key={x.id}
                        className={`scroll-section-${x.id} absolute w-screen h-screen snap-center snap-always`}
                        style={{ top: `${(x.id - 1) * 100}vh` }}
                    ></div>
                ))}
            </div>
        </>
    );
};

export default VerticalSection;
