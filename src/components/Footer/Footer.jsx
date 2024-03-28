import LefNewsSection from "./LeftNewsSection";
import RightNewsSection from "./RightNewsSection";
import img from '../../assets/download.png';
import Logo from './../../assets/Logo.svg'
import Company_Footer from "./Company_Footer";
import IQTest from "./IQTest";
import Support from "./Support";
import Legal from "./Legal";
import Copyright from "./Copyright";
import Social_Icons from "./Social_Icons";
import Instagram from "./../../assets/Instagram.png"
import Facebook from "./../../assets/facebook.png"
import Twitter from "./../../assets/Twitter.png"
import LinkedIn from "./../../assets/LinkedIn.png"



const Footer = () => {
    return (
        <div>
            <div className="newslettersection">
                <footer>
                    <div className="footer">
                        <RightNewsSection
                            imageUrl={img}
                            title="Keep up with the latest"
                            description="Join our newsletter to stay up to date on features and releases."
                        />
                        <LefNewsSection
                            subTitle="Stay up to date"
                            buttonText="Subscribe"
                            privacyText="By subscribing you agree with our Privacy Policy."
                        />
                    </div>
                    <hr />
                    <div className="company_footer">
                        <Company_Footer
                            Logo={Logo}
                            Description="Test Your IQ in a very Easy and simple steps not complex."

                        />
                        <IQTest
                            IQTEST="IQTEST"
                            Quiz="Quiz"
                            Results="Results"
                            Pricing="Pricing"
                        />
                        <Support
                            Support="Support"
                            Help="Help"
                            FAQ="FAQ"
                            Contact="Contact"
                        />
                        <Legal
                            Legal="Legal"
                            Privacy_Policy="Privacy Policy"
                            Terms_of_Service="Terms of Service"
                            Cookies_Policy="Cookies Policy"
                        />
                    </div>

                </footer>

            </div>
            <div className="copyright">
                <Copyright
                    copyright="© 2023 IQTEST.AI"
                />
                <Social_Icons
                    Instagram={Instagram}
                    Facebook={Facebook}
                    Twitter={Twitter}
                    LinkedIn={LinkedIn}
                />
            </div>
        </div>

    );
};

export default Footer;
