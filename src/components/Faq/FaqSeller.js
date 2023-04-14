import React, { useState, useEffect } from "react";
import Faq from "react-faq-component";
import './Faq.css'
const FaqSeller = () => {
    const data = {
        rows: [
            {
                title: <h4>How do I list my products on Livvy?</h4>,
                content: `To list your products on Livvy, simply sign up as a seller and get verified by our team, and you’re all set to go. You can upload product images, descriptions, and pricing, and manage your sales online. We promise complete onboarding within 12 hours.`,
            },
            {
                title: <h4>Why should I join Livvy and how can it help my business?</h4>,
                content:
                    "Livvy is a social commerce platform that allows you to reach a new audience of buyers and connect with influencers and creators to promote your products. By listing your products on Livvy, you can increase your brand visibility and drive more sales.",
            },
            {
                title: <h4>Who goes live on Livvy?</h4>,
                content: `Anyone can go live on Livvy. You (Business) can go live with your products and interact with customers directly. Creators also can endorse your products to their followers and help increase your reach`,
            },
            {
                title: <h4>Do I get to choose the creators who can promote my brand?                </h4>,
                content: `Yes, we’ll help you connect with the creators who are a perfect fit to promote your brand based on their content style, demographics, and followers`,
            },
            {
                title: <h4>What are the charges to be a seller at Livvy? </h4>,
                content: `It’s completely FREE to register on the Livvy app as a seller. There are ZERO subscription charges as well.`,
            },
            {
                title: <h4> How will I know if a customer has purchased my brand?</h4>,
                content: `We’ll update you with live tracking of orders and the logistics behind them through our interactive seller dashboard.`,
            },
            {
                title: <h4>Do I need to ship the product to the customer?</h4>,
                content: `Yes, once the customer makes a purchase, we’ll share the order information (the product ordered and the delivery address) with you.`,
            },
            {
                title: <h4>How does Livvy handle payments for my products?</h4>,
                content: ` Livvy processes all payments on your behalf and transfers the funds to your designated bank account.                 `,
            },
            {
                title: <h4>What kind of support does Livvy offer for sellers?</h4>,
                content: `Livvy offers comprehensive support for sellers, including a dedicated account manager, seller education resources, and 24/7 customer support. Contact us at brandsupport@livvy.in for any assistance!`,
            }
        ],
    };

    const [rows, setRowsOption] = useState(null);

    useEffect(() => {
        if (rows) {
            setTimeout(() => {
                rows[0].expand();
            }, 2500);

            setTimeout(() => {
                rows[0].close();
            }, 5000);

            
        }
    }, [rows]);

    return (
        <div className="faq p-70">
            <div className="container">


                <div className="p-5 border-2 border-dark">
                    <h1 className="section-title text-center mx-auto mb-5 fw-bold">
                        Frequently asked questions
                    </h1>

                    <div className="faq-style-wrapper">
                        <Faq data={data} getRowOptions={setRowsOption} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqSeller;