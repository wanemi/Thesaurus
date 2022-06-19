import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.fline}>
                <h2>Thesaurus</h2>
                <p>Home</p>
                <p>Plans</p>
                <p>Pricing</p>
                <p>FAQ</p>
            </div>
            <div className={classes.fline}>
                <h2>Courses</h2>
                <p>All Courses</p>
                <p>Free Courses</p>
                <p>Learn Javascript</p>
                <p>Learn React</p>
            </div>
            <div className={classes.fline}>
                <h2>Company</h2>
                <p>About Us</p>
                <p>Terms</p>
                <p>Privacy</p>
                <p>Support</p>
            </div>
            <div className={classes.fline}>
                <h2>Community</h2>
                <p>Blog</p>
                <p>Podcast</p>
                <p>YouTube</p>
                <p>FAQ</p>
            </div>
        </footer>
    )
}

export default Footer;