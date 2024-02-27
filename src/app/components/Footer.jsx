import Image from "next/image";

export const Footer = () => {
    return (
        <div className="footer bg-black-900 text-white py-12 px-6 md:px-12 lg:px-24">
            <div className="footerMid container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">LetzStepIn</h1>
                
            </div>
            <div className="footerEnd container mx-auto mt-6 flex justify-between">
                <div className="text-left">
                    <h2 className="font-bold">Head Office</h2>
                    <p>507 twin tower,</p>
                    <p>Pune, MH 411057</p>
                </div>
                <div className="text-left">
                    <h2 className="font-bold">Contact Us</h2>
                    <p>reachus@letzstepin.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
