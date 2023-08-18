const projects = [
    {
        id: 1,
        num:1,
        img: "/Assets/Weather.png",
        name: "Neural Style Transfer",
        about: `I have developed a web application using Streamlit that performs neural style transfer. This technique allows you to apply the style of one image (referred to as the ”style image”) onto another image (referred to as the ”content image”), resulting in a visually appealing combination of the two. The app utilizes a pre-trained VGG-19 model, which has been trained on a large dataset of images.`,
        tech: ["Python"],
        github: "https://github.com/HB2k2/Neural_Style_Transfer",
        // link: "https://weather-web-26z9.onrender.com/"
    },
    {
        id: 2,
        num:2,
        img: "./Assets/Screenshot 2023-08-18 184640.png",
        name: "Pinterest Clone",
        about: `I have developed a Pinterest Clone using the Flutter framework, Android Studio and Firebase hosted.
        This app is look alike of the popular Pinterest platform.`,
        tech: ["Dart", "HTML", "Swift", "Kotlin", "Objective-C"],
        github: "https://github.com/HB2k2/Pinterest-UI_Design",
        link: "https://pinterest-demo-e7574.web.app/#/"
    },
    {
        id: 3,
        num:3,
        img: "/Assets/URL_Shortener.png",
        name: "Student-teacher Feedback",
        about: `I have developed a Pinterest Clone using the Flutter framework, Android Studio and Firebase hosted.
        This app is look alike of the popular Pinterest platform.`,
        tech: ["Php", "XAMPP", "HTML", "CSS", "JS"],
        github: "https://github.com/HB2k2/Student_Registration_web_portal",
        // link: "https://shortenurl-zmns.onrender.com/"
    },
]

const experiences = [
    {
        id:1,
        logo: 'LogoUpwork',
        logoAlt: 'Upwork logo',
        position: 'Digital Engineer Intern',
        // startDate: new Date(2021, 10),
        // currentlyWorkHere: true,
        DateExp: "June 2022 - May 2023",
        summary: [
            "FLUTTER FRONTEND DEVELOPER I’m part of the native commerce team. My role involve developing and maintaining the user interface of the Tata Neu mobile application using the Flutter framework.",
            "JARVIS ANALYTICS Built Analytics Engine from scratch which captures +2 Billion customer events per day across Tata brands and generates business insights through visualization (Tata Brands: Croma, TataCliq, Big Basket, AirAsia, 1MG, Taj Hotels, Westside, Qmin, CultFit, Tata Neu) (Across: Android,iOS, PWA)."
        ],
      }
]

export {projects,experiences};