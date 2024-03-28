const LefNewsSection = ({ subTitle, buttonText, privacyText }) => {
    return (
        <div className="left-section">
            <h3>{subTitle}</h3>
            <div className="subscribe-form">
                <input type="email" placeholder="Enter your email" />
                <button>{buttonText}</button>
            </div>
            <p>{privacyText}</p>
        </div>
    );
};

export default LefNewsSection