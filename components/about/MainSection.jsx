// import { useIntl } from "react-intl";
import { aboutGif } from "../../assets";
import { Container } from "../../shared";
import Image from "next/image";

const MainSection = () => {
    // const intl = useIntl();
    return (
        <Container className={"px-5 mt-28 md:mt-0"}>
            <div className="h-[110vh] flex items-center flex-wrap md:flex-nowrap gap-5 justify-between">
                <div className="md:w-1/2">
                    <div className="flex flex-col gap-5 w-full lg:w-[561px]">
                        <h1 className="titleWithDark !leading-[61px] !text-[48px]">
                            {/* {intl.formatMessage({ id: "aboutPageHeroTitle" })} */}
                            We provide truly prominent IT solutions for yoursuccess
                        </h1>
                        <p className="textWithDark w-full lg:w-[450px] !leading-[36px] !text-[24px]">
                            Our team of experts is dedicated to staying at the
                            forefront of the latest technology trends and
                            innovations, so we can deliver cutting-edge
                            solutions that drive results
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <Image
                        className="w-[612px] ml-auto md:h-[584px] rounded-[32px]"
                        src={aboutGif}
                        fill={false}
                        alt="elmo solutions about-us page"
                    />
                </div>
            </div>
        </Container>
    );
};

export default MainSection;
