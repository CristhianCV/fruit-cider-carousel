import AppleImage from "../../assets/apple.webp";
import PassionImage from "../../assets/passion-fruit.webp";
import PearImage from "../../assets/pear.webp";

const HorizontalSection = ({ fruits }) => {
    return (
        <div className="fixed w-screen h-screen overflow-hidden">
            <div className="pear-pieces absolute top-[-100vh] w-screen h-screen overflow-hidden z-[5]">
                <img
                    src={PearImage}
                    alt="Imagen de pera"
                    className="absolute top-[70%] left-0 w-20 rotate-[320deg] sm:w-28 md:w-36 lg:w-44 xl:w-48 sm:top-[62%] md:top-[55%] blur-[3px]"
                />
                <img
                    src={PearImage}
                    alt="Imagen de pera"
                    className="absolute top-[20%] left-[24%] w-12 rotate-[60deg] sm:w-16 md:w-20 lg:w-20 xl:w-24 z-[25]"
                />
                <img
                    src={PearImage}
                    alt="Imagen de pera"
                    className="absolute top-[15%] right-[26%] w-12 rotate-[110deg] sm:w-16 md:w-20 lg:w-24 xl:w-28 blur-[1.5px]"
                />
                <img
                    src={PearImage}
                    alt="Imagen de pera"
                    className="absolute top-[75%] right-0 w-16 rotate-[75deg] sm:w-24 md:w-32 lg:w-40 xl:w-44 sm:top-[67%] md:top-[60%] blur-[0.5px]"
                />
            </div>
            <div className="exotic-pieces absolute top-[-100vh] w-screen h-screen overflow-hidden z-[5]">
                <img
                    src={PassionImage}
                    alt="Imagen de maracuya"
                    className="absolute top-[70%] left-0 w-24 rotate-[70deg] sm:w-32 md:w-40 lg:w-48 xl:w-52 sm:top-[62%] md:top-[55%] blur-[3px]"
                />
                <img
                    src={PassionImage}
                    alt="Imagen de maracuya"
                    className="absolute top-[15%] left-[24%] w-16 rotate-[150deg] sm:w-20 md:w-24 lg:w-24 xl:w-28 z-[25]"
                />
                <img
                    src={PassionImage}
                    alt="Imagen de maracuya"
                    className="absolute top-[75%] right-[26%] w-16 rotate-[325deg] sm:w-20 md:w-24 lg:w-28 xl:w-32 sm:top-[67%] md:top-[60%] blur-[1.5px]"
                />
                <img
                    src={PassionImage}
                    alt="Imagen de pera"
                    className="absolute top-[40%] right-0 w-20 rotate-[225deg] sm:w-28 md:w-36 lg:w-44 xl:w-48 blur-[0.5px]"
                />
            </div>
            <div className="apple-pieces absolute top-[-100vh] w-screen h-screen overflow-hidden z-[5]">
                <img
                    src={AppleImage}
                    alt="Imagen de manzana"
                    className="absolute top-[70%] left-0 w-24 rotate-[320deg] sm:w-32 md:w-40 lg:w-48 xl:w-52 sm:top-[62%] md:top-[55%] blur-[3px]"
                />
                <img
                    src={AppleImage}
                    alt="Imagen de manzana"
                    className="absolute top-[20%] left-[24%] w-16 rotate-[90deg] sm:w-20 md:w-24 lg:w-24 xl:w-28 z-[25]"
                />
                <img
                    src={AppleImage}
                    alt="Imagen de manzana"
                    className="absolute top-[15%] right-[22%] w-16 rotate-[280deg] sm:w-20 md:w-24 lg:w-28 xl:w-32 blur-[1.5px]"
                />
                <img
                    src={AppleImage}
                    alt="Imagen de manzana"
                    className="absolute top-[62%] right-0 w-20 rotate-[75deg] sm:w-28 md:w-36 lg:w-44 xl:w-48 sm:top-[56%] md:top-[50%] blur-[0.5px]"
                />
            </div>
            <div className="section-container flex w-[300vw] h-full text-[0]">
                {fruits.map((x) => (
                    <section
                        key={x.id}
                        className="w-screen h-screen flex grow items-center"
                        style={{ backgroundColor: x.backColor }}
                    >
                        <h1 className="w-full font-semibold text-white text-center text-[28vw] capitalize">{x.name}</h1>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default HorizontalSection;
