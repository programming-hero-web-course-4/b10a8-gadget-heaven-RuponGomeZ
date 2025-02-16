

const Footer = () => {
    return (
        <div className=" pt-40 ">
            <div className="text-center pb-20">
                <h1 className="text-4xl pb-5">Gadget Heaven</h1>
                <p>Leading the way in cutting-edge technology and innovation </p>
            </div>
            <div className="mx-auto container"><hr /></div>
            <footer className="footer p-10 mx-auto justify-center gap-60">
                <nav className="">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;