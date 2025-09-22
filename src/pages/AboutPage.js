import React from "react";
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <h1 className="about-hero-title">About LookBanana</h1>
                    <p className="about-hero-subtitle">
                        Empowering businesses with subscription-based digital solutions
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="about-main">
                <div className="about-container">
                    {/* Company Introduction */}
                    <div className="about-intro">
                        <div className="about-intro-content">
                            <h2 className="about-section-title">Our Mission</h2>
                            <p className="about-intro-text">
                                LookBanana is a digital service company focused on subscription-based solutions. 
                                We help businesses and creators build, manage, and grow digital products that rely 
                                on subscriptions — from payments and user access to full backend systems.
                            </p>
                            <p className="about-intro-text">
                                Our goal is to make it easier for anyone to launch and run a modern, 
                                subscription-powered platform.
                            </p>
                        </div>
                    </div>

                    {/* Values Grid */}
                    <div className="about-values">
                        <h2 className="about-section-title">Our Values</h2>
                        <div className="values-grid">
                            <div className="value-card">
                                <div className="value-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                    </svg>
                                </div>
                                <h3 className="value-title">Innovation</h3>
                                <p className="value-description">
                                    We continuously innovate to provide cutting-edge subscription solutions 
                                    that adapt to evolving business needs.
                                </p>
                            </div>

                            <div className="value-card">
                                <div className="value-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                        <circle cx="9" cy="7" r="4"/>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                    </svg>
                                </div>
                                <h3 className="value-title">Partnership</h3>
                                <p className="value-description">
                                    We build lasting partnerships with our clients, working together to 
                                    achieve their subscription business goals.
                                </p>
                            </div>

                            <div className="value-card">
                                <div className="value-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M9 12l2 2 4-4"/>
                                        <path d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"/>
                                        <path d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"/>
                                        <path d="M12 3c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z"/>
                                        <path d="M12 21c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z"/>
                                    </svg>
                                </div>
                                <h3 className="value-title">Excellence</h3>
                                <p className="value-description">
                                    We strive for excellence in every aspect of our service, from technical 
                                    implementation to customer support.
                                </p>
                            </div>

                            <div className="value-card">
                                <div className="value-icon">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                        <polyline points="14,2 14,8 20,8"/>
                                        <line x1="16" y1="13" x2="8" y2="13"/>
                                        <line x1="16" y1="17" x2="8" y2="17"/>
                                        <polyline points="10,9 9,9 8,9"/>
                                    </svg>
                                </div>
                                <h3 className="value-title">Simplicity</h3>
                                <p className="value-description">
                                    We believe in making complex subscription systems simple and accessible 
                                    for businesses of all sizes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="about-services">
                        <h2 className="about-section-title">What We Do</h2>
                        <div className="services-content">
                            <div className="service-item">
                                <h3 className="service-title">Subscription Management</h3>
                                <p className="service-description">
                                    Complete subscription lifecycle management from signup to billing and renewals.
                                </p>
                            </div>
                            <div className="service-item">
                                <h3 className="service-title">Payment Processing</h3>
                                <p className="service-description">
                                    Secure payment gateways and automated billing systems for recurring revenue.
                                </p>
                            </div>
                            <div className="service-item">
                                <h3 className="service-title">Backend Infrastructure</h3>
                                <p className="service-description">
                                    Scalable backend systems that support your growing subscription business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;