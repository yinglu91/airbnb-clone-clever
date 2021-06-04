import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p>
        @ {new Date().getFullYear()} Airbnb clone! No rights reserved - this is
        a demo!
      </p>
      <p>Privacy - Terms - Sitemap - Company Details</p>
    </div>
  );
};

export default Footer;
