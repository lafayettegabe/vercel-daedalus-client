import { FacebookFilled, LinkedinFilled, TwitterSquareFilled } from '@ant-design/icons';

const Footer: React.FC = () => {
    return (
        <footer className="flex flex-col justify-center items-center border-t mt-8 bg-transparent">
            {/* Footer area from the footer */}
            <div className="flex flex-row justify-between items-center w-full px-8 mb-8 mt-8">
                <div className="flex flex-row justify-center items-center gap-4">
                    <FacebookFilled className="text-xl"/>
                    <LinkedinFilled className="text-xl"/>
                    <TwitterSquareFilled className="text-xl"/>
                </div>
                <span className="font-bold text-sm lg:text-xl text-gray-100">© 2023 Daedalus Institute</span>
            </div>
        </footer>
    );
};

export default Footer;
