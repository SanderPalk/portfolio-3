function Work() {
    const works = [
        {
            title: "Employment @ Snowhound OÜ",
            timeFrame: "January - ...",
            sections: [
                "Estiko Plastar AS Client Portal - Web Application for customers that included statistics dashboard, orders, product inventory, complaints and much more.",
                "VeeRa - Cloud based financial planning and budget monitoring software.",
                "MinuPatisent - In-house developed product that allows doctors to handle visits & reservations, patients and much more. Includes online booking functionality. In this project I also filled the role of project manager: setting up workflows, analyzing & creating tickets and more...",
            ]
        },
        {
            title: "Employment @ Codelab OÜ",
            timeFrame: "June - November 2023",
            sections: [
                'Robust back-end management system tailored to address specific business requirements- streamlining workflow processes, particularly in conjunction with the associated mobile application.',
                'Crafted a customized mobile application using Vue Ionic.'
            ]
        },
        {
            title: "Internship @ Codelab OÜ",
            timeFrame: "January - April 2023",
            sections: [
                "Imported over 300 000 user accounts, orders and products from client's legacy database to Wordpress database with PHP.",
                "Built Wordpress plugin to sync client's database with WordPress database, so the warehouse logistics logic could be brought over and learned by employees step by step. This included users, products information and stock, order information and statuses."
            ]
        },
        {
            title: "Employment @ Codelab OÜ",
            timeFrame: "June - August 2022",
            sections: [
                "Worked with considerable data models for investment company, mostly make big queries and reports faster and more efficient.",
                "Front-end implementation to ACF plugin on Wordpress pages."
            ]
        },
        {
            title: "Internship @ Codelab OÜ",
            timeFrame: "April - June 2022",
            sections: [
                "Added back-end logic to start-up company.",
                "Developed Wordpress pages with ACF."
            ]
        },
    ]

    return (
        <div className="section-experience-content-wrapper">

            {works.map((w) => (
                <div className="section-experience-content-item">
                    <h2>{w.title}</h2>
                    <p className="time-frame">{w.timeFrame}</p>
                    {w.sections && (
                        <ul>
                            {w.sections.map((s) => (
                                <li>{s}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Work
