import React from "react";
import "./App.css";
import IndexPage from "./components/IndexPage/IndexPage";
import {HashRouter, Route} from "react-router-dom";
import FullPortfolio from "./components/FullPortfolio/FullPortfolio";

class App extends React.Component {
    state = {
        socials: [
            {
                name: "vk",
                image: "images/icons/vk.png"
            },
            {
                name: "telegram",
                image: "images/icons/telegram.png"
            },
            {
                name: "viber",
                image: "images/icons/viber.svg"
            },
            {
                name: "linkedin",
                image: "images/icons/linkedin.png"
            }
        ],
        isChoose: false,
        specializations: [
            {
                name: "SEO promotion",
                isDone: false,
                skills:
                    [
                        {
                            name: "integrated promotion",
                            isDone: false,
                            url: "images/icons/integrated_promotion.jpg",
                            description: "Integrated promotion is the co-ordination and integration of all marketing communications tools, avenues, and sources within a company into a seamless program that maximizes the impact on consumer and other end users at a minimal cost.",
                        },
                        {
                            name: "promotion in Yandex",
                            isDone: false,
                            url: "images/icons/yandex.jpg",
                            description: "Yandex holds a leading position among search engines in the CIS countries and one of the leading worldwide. Thanks to convenient search tools, accurate ranking algorithms and an intuitive interface, the search engine attracts more and more users every day.",
                        },
                        {
                            name: "traffic promotion",
                            isDone: false,
                            url: "images/icons/traffic.jpg",
                            description: "Traffic promotion is a scheme of work in which the client pays for user clicks from search engines using the previously designated list of search phrases. The main task is to get the maximum number of clicks to the site from search engines.",
                        },
                        {
                            name: "promotion of new sites",
                            isDone: false,
                            url: "images/icons/new.jpg",
                            description: "Promotion of a new site - meaning SEO promotion of a new site for a search engine. ... at the time of the site promotion, there were no more than 3 months of search in the search engine.",
                        },
                        {
                            name: "SEO audit",
                            isDone: false,
                            url: "images/icons/seo_audit.jpg",
                            description: "Search engine optimization - a set of measures for internal and external optimization to increase the position of the site in the results of search engines for specific user requests, in order to increase network traffic and potential customers and the subsequent monetization of this traffic.",
                        },
                        {
                            name: "e-commerce shops promotion",
                            isDone: false,
                            url: "images/icons/shops.png",
                            description: "An online store is a resource that requires a large number of pages with product information, mandatory order forms and feedback. Particular attention should be paid to filling the site and its usability. This can lead to sad consequences.",
                        },
                    ]
            },
            {
                name: "Context advertising",
                isDone: false,
                skills: [
                    {
                        name: "Yandex Direct",
                        isDone: false,
                        url: "images/icons/yandex_direct.png",
                        description: "Yandex.Direct is a contextual advertising system on Yandex pages and partner sites of the Yandex Advertising System. Direct in 2001 became the first search engine advertising service on the Russian-speaking Internet, while competitors AdWords and Begun only appeared on the Russian Internet segment in 2002.",
                    },
                    {
                        name: "Google advertising",
                        isDone: false,
                        url: "images/icons/google_ads.png",
                        description: "DescriptionAds is a contextual, mainly search engine advertising service from Google that provides a convenient interface and many tools for creating effective advertising messages.",
                    },
                    {
                        name: "Audit",
                        isDone: false,
                        url: "images/icons/audit.png",
                        description: "In a broad sense and in accordance with the customs of business turnover, as well as business vocabulary, auditing and as a synonym for auditing is an independent verification and assessment of reporting, accounting data and activities of an organization, as well as a system, process, project or product.",
                    },
                ]
            }, {
                name: "SMM promotion",
                isDone: false,
                skills: [
                    {
                        name: "promotion in Instagram",
                        isDone: false,
                        url: "images/icons/promotion_instagram.png",
                        description: "SMM - promotion in social media SMM promotion is an effective way to attract an audience to a site through social networks, blogs, forums, communities. SMM advertising refers to non-standard methods of promotion. Social Media Marketing is the most promising promotion method.",
                    },
                    {
                        name: "promotion in VK",
                        isDone: false,
                        url: "images/icons/promotion_vk.jpg",
                        description: "SMM - promotion in social media SMM promotion is an effective way to attract an audience to a site through social networks, blogs, forums, communities. SMM advertising refers to non-standard methods of promotion. Social Media Marketing is the most promising promotion method.",
                    },
                    {
                        name: "promotion in Facebook",
                        isDone: false,
                        url: "images/icons/promotion_facebook.png",
                        description: "SMM - promotion in social media SMM promotion is an effective way to attract an audience to a site through social networks, blogs, forums, communities. SMM advertising refers to non-standard methods of promotion. Social Media Marketing is the most promising promotion method.",
                    },
                    {
                        name: "target advertising",
                        isDone: false,
                        url: "images/icons/target_advertising.jpg",
                        description: "In turn, targeted advertising is advertising aimed at attracting and convincing the audience. The task of advertising is to reveal the pain of the client and immediately offer him a cure for it. Flyers.",
                    },
                ]
            }, {
                name: "Website development",
                isDone: false,
                skills: [
                    {
                        name: "Wordpress",
                        isDone: false,
                        url: "images/icons/wordpress.png",
                        description: "WordPress is an open source site content management system; written in PHP; database server - MySQL; released under the GNU GPL version 2 license. The scope is from blogs to fairly complex news resources. The built-in system of “themes” and “plug-ins” together with a successful architecture allows you to design projects of wide functional complexity.",
                    },
                    {
                        name: "Joomla",
                        isDone: false,
                        url: "images/icons/joomla.png",
                        description: "Joomla! - a content management system written in PHP and JavaScript, using MySQL or other standard industrial relational DBMSs as the database storage. Free software distributed under the GNU GPL.",
                    },
                    {
                        name: "Drupal",
                        isDone: false,
                        url: "images/icons/drupal.png",
                        description: "",
                    },
                    {
                        name: "React",
                        isDone: false,
                        url: "images/icons/reactjs.png",
                        description: "Drupal is a content management system, also used as a framework for web applications, written in PHP and using a relational database as a data warehouse. Drupal is free GPL-protected software and is being developed by enthusiasts from around the world.",
                    },
                    {
                        name: "Vue",
                        isDone: false,
                        url: "images/icons/vue.png",
                        description: "Vue.js is an open source JavaScript framework for creating user interfaces. Easily integrates into projects using other JavaScript libraries. It can function as a web framework for developing single-page reactive-style applications.",
                    },
                    {
                        name: "Angular",
                        isDone: false,
                        url: "images/icons/angular.png",
                        description: "Angular is an open and free web application development platform written in TypeScript, developed by a team from Google, as well as a community of developers from various companies. Angular is a completely rewritten framework from the same team that wrote AngularJS.\n",
                    },
                    {
                        name: "Typescript",
                        isDone: false,
                        url: "images/icons/typescript.png",
                        description: "TypeScript is a programming language introduced by Microsoft in 2012 and positioned as a web application development tool that extends JavaScript. TypeScript is developed by Anders Halesberg.",
                    },
                    {
                        name: "Vanilla JS",
                        isDone: false,
                        url: "images/icons/js.png",
                        description: "VanillaJS is a name to refer to using plain JavaScript without any additional libraries like jQuery. People use it as a joke to remind other developers that many things can be done nowadays without the need for additional JavaScript libraries. Or, in our case, without new, fancy frameworks.",
                    },
                    {
                        name: "PHP",
                        isDone: false,
                        url: "images/icons/php.png",
                        description: "PHP: Hypertext Preprocessor - “PHP: Hypertext Preprocessor”; originally Personal Home Page Tools - “Tools for creating personal web pages”) is a general-purpose scripting language that is intensively used for developing web applications.",
                    },
                    {
                        name: "Java",
                        isDone: false,
                        url: "images/icons/java.png",
                        description: "Java is a strongly typed object-oriented programming language developed by Sun Microsystems. The development is conducted by a community organized through the Java Community Process, the language and the main technologies implementing it are distributed under the GPL license.",
                    },
                ]
            },
        ],
        projects: [
            {
                name: "Social Network",
                description: "Network for social communications of cactus collectors",
                img: "images/projects/social_network.png",
                url: "https://Saveliy-Georgiy.github.io/my_social_network"
            },
            {
                name: "Counter",
                description: "Counter of numbers",
                img: "images/projects/counter.png",
                url: "https://Saveliy-Georgiy.github.io/counter"
            },
            {
                name: "Practice page",
                description: "Practice page with visitors and todo-list",
                img: "images/projects/practice.png",
                url: "https://saveliy-georgiy.github.io/homework4/"
            },
            {
                name: "Swimming.by",
                description: "SEO promotion",
                img: "images/projects/swimming.png",
                url: "https://swimming.by/"
            },
            {
                name: "swimming_minsk VK",
                description: "SMM promotion VK",
                img: "images/projects/swimming.png",
                url: "https://vk.com/swimming_minsk"
            },
            {
                name: "Andrew2",
                description: "Practice page with visitors and todo-list",
                img: "images/projects/practice.png",
                url: "https://saveliy-georgiy.github.io/homework4/"
            },
            {
                name: "Andrew1",
                description: "Practice page with visitors and todo-list",
                img: "images/projects/practice.png",
                url: "https://saveliy-georgiy.github.io/homework4/"
            },
            {
                name: "GOLDEN LION SPA",
                description: "SMM promotion Instagram",
                img: "images/projects/golden_lion.png",
                url: "https://www.instagram.com/goldenlion_spa/"
            },
            {
                name: "GOLDEN LION SPA",
                description: "SMM promotion Facebook",
                img: "images/projects/golden_lion.png",
                url: "https://www.facebook.com/goldenlion.by/"
            },
            {
                name: "GOLDEN LION SPA",
                description: "SEO promotion",
                img: "images/projects/golden_lion.png",
                url: "https://goldenlion.by/"
            },
            {
                name: "Practice page",
                description: "Practice page with visitors and todo-list",
                img: "images/projects/practice.png",
                url: "https://saveliy-georgiy.github.io/homework4/"
            },
            {
                name: "Counter",
                description: "Counter of numbers",
                img: "images/projects/counter.png",
                url: "https://Saveliy-Georgiy.github.io/counter"
            },
            {
                name: "bridal salon Wega",
                description: "SEO promotion",
                img: "images/projects/wega.png",
                url: "http://wega.by/"
            },
            {
                name: "Practice page",
                description: "Practice page with visitors and todo-list",
                img: "images/projects/practice.png",
                url: "https://saveliy-georgiy.github.io/homework4/"
            },
            {
                name: "Counter",
                description: "Counter of numbers",
                img: "images/projects/counter.png",
                url: "https://Saveliy-Georgiy.github.io/counter"
            },
            {
                name: "X-wing",
                description: "X-wing game",
                img: "images/projects/game.png",
                url: "https://github.com/wldyslw/x-wing"
            },
            {
                name: "r-427",
                description: "Radio relay station",
                img: "images/projects/radio.png",
                url: "https://github.com/wldyslw/r-427"
            },
            {
                name: "Cities",
                description: "Cities game",
                img: "images/projects/cities.png",
                url: "https://github.com/wldyslw/cities"
            },
            {
                name: "Tour operator",
                description: "Context advertising",
                img: "images/projects/tour.webp",
                url: "https://globe.by/"
            },
            {
                name: "construction company",
                description: "SEO promotion",
                img: "images/projects/construction.png",
                url: "https://stroyaz.by/"
            },

        ],
        portfolios: [
            {
                id: 0,
                name: "Saveliy-Georgiy Biryukov",
                age: 20,
                position: "frontend developer",
                photo: "images/photos/biryukov.jpg",
                specializations: [
                    {specialization: 3, skills: [0, 3, 7]},
                    ],
                projects: [0, 1, 2],
                contacts:
                    [
                        {vk: "https://vk.com/sav4ik33"},
                        {linkedin: "https://www.linkedin.com/in/%D1%81%D0%B0%D0%B2%D0%B5%D0%BB%D0%B8%D0%B9-%D0%B3%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D0%B9-%D0%B1%D0%B8%D1%80%D1%8E%D0%BA%D0%BE%D0%B2-81a83419a/"},
                        {telegram: "https://t.me/Sav4ik33"},
                        {viber: "viber://chat?number=%2B375293096500"}
                    ]
            },
            {
                id: 1,
                name: "Elizaveta-Luiza Biryukova",
                age: 26,
                position: "marketer",
                photo: "images/photos/biryukova.jpg",
                specializations: [{specialization: 0, skills: [1, 2, 3]},
                    {specialization: 2, skills: [0, 1, 2, 3]}],
                projects: [3, 4],
                contacts:
                    [
                        {vk: "https://vk.com/lilu17"},
                        {telegram: "https://t.me/Lilu1721"},
                        {viber: "viber://chat?number=%2B375296180893"}
                    ]
            },
            {
                id: 2,
                name: "Andrey Kukshinov",
                age: 21,
                position: "full stack developer",
                photo: "images/photos/kukshinov.jpg",
                specializations: [
                    {specialization: 3, skills: [5, 6, 7, 9]}],
                projects: [5, 6], //change
                contacts:
                    [
                        {vk: "https://vk.com/id11h24730"},
                    ]
            },
            {
                id: 3,
                name: "Alexandra Dayneko",
                age: 20,
                position: "marketer",
                photo: "images/photos/dayneko.jpg",
                specializations: [{specialization: 1, skills: [0, 1, 2]},
                    {specialization: 2, skills: [0, 2, 3]}
                    ],
                projects: [7, 8, 9],
                contacts:
                    [
                        {vk: "https://vk.com/alexandra.dayneko"},
                    ]
            },
            {
                id: 4,
                name: "Artur Krantsevich",
                age: 19,
                position: "full stack developer",
                photo: "images/photos/krancevich.jpg",
                specializations: [{specialization: 3, skills: [7, 9]}],
                projects: [10, 11],
                contacts:
                    [
                        {vk: "https://vk.com/arthur_j_ra"},
                    ]
            },
            {
                id: 5,
                name: "Sofia Lulkovich",
                age: 24,
                position: "marketer",
                photo: "images/photos/lulkovich.jpg",
                specializations: [{specialization: 0, skills: [0, 2, 3, 5]},
                    {specialization: 1, skills: [0, 1]}],
                projects: [12],
                contacts:
                    [
                        {vk: "https://vk.com/rtoni"},
                        {telegram: "https://t.me/Celty7"},
                    ]
            },
            {
                id: 6,
                name: "Dmitriy Tsybulski",
                age: 34,
                position: "full stack developer",
                photo: "images/photos/tsybulski.jpg",
                specializations: [
                    {
                    specialization: 3,
                    skills: [0, 1, 2, 4, 6, 7, 8]
                },],
                projects: [13, 14],
                contacts:
                    [
                        {vk: "https://vk.com/dimkatsi"},
                        {telegram: "https://t.me/dmitry_flynet"},
                        {viber: "viber://chat?number=%2B375445478861"}
                    ]
            },
            {
                id: 7,
                name: "Uladzislau Maltsau",
                age: 23,
                position: "frontend developer",
                photo: "images/photos/maltsev.jpg",
                specializations: [{specialization: 3, skills: [3, 4, 6, 7]}],
                projects: [15, 16, 17],
                contacts:
                    [
                        {vk: "https://vk.com/wldyslw"},
                    ]
            },
            {
                id: 8,
                name: "Vadim Yarmoshyk",
                age: 20,
                position: "marketer",
                photo: "images/photos/yarmoshyk.jpg",
                specializations: [{specialization: 0, skills: [0, 1, 4, 5]},
                    {specialization: 1, skills: [0, 1, 2]}
                ],
                projects: [18, 19],
                contacts:
                    [
                        {vk: "https://vk.com/id320009255"},
                    ]
            },
        ]
    };

    changeStatus = (specializationName, isDone) => {
        let newSpecializations = this.state.specializations.map(s => {
            console.log(s);
            if (s.name === specializationName) {
                if (isDone === false) {
                    this.checkSkills(s);
                }
                return {...s, isDone: isDone};
            } else {
                return s;
            }
        });
        this.setState({
            specializations: newSpecializations,
        },   () => {this.choose()});
    };

    checkSkills = (s) => {
        s.skills.map(skill => {
            if(skill.isDone===true) {
                skill.isDone = false;
            }
        })
    }

    changeStatusSkill = (skillName, isDone) => {
        let newSpecializations = this.state.specializations.map(specialization => {
            specialization.skills.map((skill, index) => {
                if(skill.name===skillName) {
                    specialization.skills[index].isDone = isDone;
                }
            })
            return specialization;
        });

        this.setState({
            specializations: newSpecializations
        });
    };

    choose = () => {
        this.state.specializations.some(d => {
            if (d.isDone === true) {
                this.setState({
                    isChoose: true,
                })
                return true;
            } else {
                this.setState({
                    isChoose: false,
                })
            }
        });
    };

    render = () => {

        return (
            <HashRouter>
                <div className="App">
                    <Route exact path="/"
                           component={() => <IndexPage
                               state={this.state}
                               changeStatus={this.changeStatus}
                               changeStatusSkill={this.changeStatusSkill}
                               isChoose={this.state.isChoose}/>}/>
                    <Route path="/employees/:id"
                           component={({match}) => <FullPortfolio match={match} state={this.state}/>}/>
                </div>
            </HashRouter>
        );
    };
}

export default App;
