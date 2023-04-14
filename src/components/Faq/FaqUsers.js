import React, { useState, useEffect } from "react";
import Faq from "react-faq-component";
const FaqUsers = () => {
    const data = {        
        rows: [
            {
                title: <h4> What is Livvy, and how can I use it as an influencer?</h4>,
                content: `Livvy is a social commerce platform that allows you to monetize your influence by promoting products and earning commissions on sales. You can create video content showcasing your favorite products, share them with your followers, and earn a commission on any resulting sales.`,
            },
            {
                title: <h4>How do I become a creator/influencer on Livvy?</h4>,
                content:
                    "To become a creator/influencer on Livvy, simply download the app, sign up for an account, and start creating video content showcasing your favorite products. You can apply to become an affiliate marketer on Livvy and start earning commissions on sales.",
            },
            {
                title: <h4>How does Livvy handle commissions and payouts for influencers?
                </h4>,
                content: ` Livvy tracks all sales generated through your video content and pays out commissions on a regular basis.`,
            },
            {
                title: <h4>What kind of support does Livvy offer for influencers?
                </h4>,
                content: ` Livvy offers comprehensive support for influencers, including access to a network of brands and sellers, affiliate marketing tools and resources, and 24/7 customer support. We also offer promotional opportunities and incentives to help you grow your following and increase your earnings.
                `,
            },
            {
                title: <h4>Why should I join Livvy?
                </h4>,
                content: `It’s a short process taking less than the time required to make Maggi 😉
                Download the app through Playstore or App Store, Sign up to Register yourself as a user and voila! You’re all set to go ahead and use the app. 
                Contact creatorsupport@livvy.in for any further assistance! 
                
                `,
            },
            {
                title: <h4> What kind of support does the live shopping app provide to creators?
                </h4>,
                content: `We provide you (creators) with various types of support, such as training on how to use the app, marketing resources, and technical support

                `,
            },
            {
                title: <h4>When does a creator get connected to a brand?
                </h4>,
                content: `A creator will be connected to a brand in 2-3 business days after signing up with us. Creators get to choose brands and vice-versa
                `,
            },
            {
                title: <h4>As a creator how do I track sales?
                </h4>,
                content: ` You can track your sales and commissions on the live shopping app. We will provide you with real-time data on your sales, commissions, and other key performance metrics
                `,
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
            <div className="p-5">
                <h2 className="section-title text-center mx-auto mb-5 fw-bold fs-1">
                    Frequently asked questions
                </h2>

                <div className="faq-style-wrapper">
                    <Faq data={data} getRowOptions={setRowsOption} />
                </div>
            </div>
        </div>
    </div>
    )
}

export default FaqUsers;