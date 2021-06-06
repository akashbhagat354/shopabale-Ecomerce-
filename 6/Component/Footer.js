import React from 'react'

export default function Footer() {
    return (
        <div>
            <body>
            
        <footer class="footer">
            <div class="footer-top">
                <div class="container top-border d-flex align-items-center justify-content-between flex-wrap">
                    <div class="footer-left widget-newsletter d-md-flex align-items-center">
                        <div class="widget-newsletter-info">
                            <h5 class="widget-newsletter-title text-uppercase m-b-1">subscribe newsletter</h5>
                            <p class="widget-newsletter-content mb-0">Get all the latest information on Events, Sales and Offers.</p>
                        </div>
                        <form action="#">
                            <div class="footer-submit-wrapper d-flex">
                                <input type="email" class="form-control" placeholder="Email address..." size="40" required />
                                <button type="submit" class="btn btn-dark btn-sm">Subscribe</button>
                            </div>
                        </form>
                    </div>
                    <div class="footer-right">
                        <div class="social-icons">
                            <a href="#" class="social-icon social-facebook icon-facebook" target="_blank"></a>
                            <a href="#" class="social-icon social-twitter icon-twitter" target="_blank"></a>
                            <a href="#" class="social-icon social-instagram icon-instagram" target="_blank"></a>
                        </div>
                        {/* <!-- End .social-icons --> */}
                    </div>
                </div>
            </div>
            <div class="footer-middle">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-xl-4">
                            <div class="widget">
                                <h4 class="widget-title">Contact Info</h4>

                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="contact-widget">
                                            <h4 class="widget-title">ADDRESS</h4>
                                            <a href="#">1234 Street Name, City, England</a>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="contact-widget email">
                                            <h4 class="widget-title">EMAIL</h4>
                                            <a href="mailto:mail@example.com">mail@example.com</a>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="contact-widget">
                                            <h4 class="widget-title">PHONE</h4>
                                            <a href="#">Toll Free (123) 456-7890</a>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="contact-widget">
                                            <h4 class="widget-title">WORKING DAYS/HOURS</h4>
                                            <a href="#">Mon - Sun / 9:00 AM - 8:00 PM</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-lg-3 col-xl-4">
                            <div class="widget">
                                <h4 class="widget-title">My Account</h4>
                                <ul class="links link-parts row">
                                    <div class="link-part col-xl-4">
                                        <li><a href="about.html">About Us</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                        <li><a href="my-account.html">My Account</a></li>
                                    </div>
                                    <div class="link-part col-xl-8">
                                        <li><a href="#">Orders History</a></li>
                                        <li><a href="#">Advanced Search</a></li>
                                    </div>
                                </ul>
                            </div>
                            {/* <!-- End .widget --> */}
                        </div>
                        <div class="col-sm-6 col-lg-3 col-xl-4">
                            <div class="widget">
                                <h4 class="widget-title">Main Features</h4>
                                <ul class="links link-parts row">
                                    <div class="link-part col-xl-6">
                                        <li><a href="#">Super Fast WordPress Theme</a></li>
                                        <li><a href="#">1st Fully working Ajax Theme</a></li>
                                        <li><a href="#">33 Unique Shop Layouts</a></li>
                                    </div>
                                    <div class="link-part col-xl-6">
                                        <li><a href="#">Powerful Admin Panel</a></li>
                                        <li><a href="#">Mobile &amp; Retina Optimized</a></li>
                                    </div>
                                </ul>
                            </div>
                            {/* <!-- End .widget --> */}
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="container top-border d-flex align-items-center justify-content-between flex-wrap">
                    <p class="footer-copyright mb-0 py-3 pr-3">Porto eCommerce. &copy; 2020. All Rights Reserved</p>
                    <img class="py-3" src="assets/images/payments.png" alt="payment image" />
                </div>
            </div>
        </footer>
        </body>
        </div>
    )
}
