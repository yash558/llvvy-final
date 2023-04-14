import React, { useState, useEffect } from "react";
import Faq from "react-faq-component";
import './Faq.css'
const FaqHome = () => {
    const data = {
        rows: [
            {
                title: <h4>What is Livvy, and how does it work?</h4>,
                content: `Livvy is a LIVE social commerce platform that allows you to shop for products directly from your favourite creators and influencers live. You can browse a wide range of products, watch product demos and reviews, and make purchases within the app.
                .`,
            },
            {
                title: <h4>How do I make a purchase on Livvy?</h4>,
                content:
                    "To make a purchase on Livvy, simply find the product you want to buy, add it to your cart, and check out using your preferred payment method. Livvy offers a variety of payment options, including credit cards, debit cards, UPI, and online banking.",
            },
            {
                title: <h4>What if I have a problem with my purchase or need to return an item?</h4>,
                content: `If you have any issues with your purchase, you can contact Livvy's customer support team for assistance. Terms and Conditions apply. `,
            },
            {
                title: <h4>Can I trust the product reviews on Livvy?</h4>,
                content: `Yes, Livvy takes authenticity and transparency seriously. We encourage our creators and influencers to provide honest and unbiased reviews of the products they promote. You can also leave your own reviews and ratings to help other users make informed purchasing decisions.
                `,
            },
            {
                title: <h4>What if I have a question about a product or need more information before making a purchase?</h4>,
                content: `Livvy offers a live messaging feature that lets you communicate directly with the seller or creator trying out the product live on the Livvy app. You can ask questions, request more information or clarification, and make a purchase.
                `,
            },
            {
                title: <h4>How do I track my order after making a purchase?</h4>,
                content: `Livvy provides real-time updates on the status of your order, including shipping and delivery information.                `,
            },
        {
            title: <h4>Can I cancel or change my order after placing it?</h4>,
            content: `Livvy allows you to cancel or modify your order within a certain time frame, depending on the seller's policies. Terms and Conditions apply.                 `,
            },
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

        setTimeout(() => {
            rows[0].scrollIntoView();
            // rows[0].scrollIntoView(true);
        }, 10000);
    }
}, [rows]);

return (
    <div className="faq p-70">
        <div className="container">


            <div className="p-5 border-2 border-dark">
                <h1 className="section-title text-center mx-auto mb-5 fw-bold fs-1">
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

export default FaqHome;