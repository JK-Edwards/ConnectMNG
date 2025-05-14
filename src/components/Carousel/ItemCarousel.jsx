import Carousel from "react-bootstrap/Carousel";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { CULTURAL_COMPASS_PROGRAM_DESC, RESUME_BOOST_PROGRAM_DESC } from "../../constants";

export default function ItemCarousel({ slides, interval }) {
  return (
    <div className={"carouselContainer"}>
      <Carousel data-bs-theme="dark">
        {slides.map((slide, index) => (
          <Carousel.Item key={index} interval={interval}>
            {slide}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};
export const translations = {
    en: {
        programs: "Programs",
        getInvolved: "Get Involved",
        blogs: "Blogs",
        about: "About Us",
        resources: "Resources",
        contact: "Contact Us",
        home: "Home",
        careerDevelopment: "Career Development",
        mentorship: "Mentorship",
        networking: "Networking",
        learnMore: "Learn More",
        mission: "Our mission is empowering the Mongolian American college students & young professionals’ success by fostering a strong sense of community providing tailored resources for personal and professional growth, and cultivating an environment where individuals can connect, learn, and thrive together.",
        missionAndImpact: "Mission & Impact",
        donate: "Donate",
        events: "Events",
        volunteer: "Volunteer",
        internships: "Internships",
        connectWithUs: "Connect with us",
        ourStory: "Our story",
        ourTeam: "Our team",
        time: "Time",
        event: "Event",
        location: "Location",
        contactDesc: "Have questions about our programs or Connect MNG in general? Please submit the form below and we'll be in touch shortly!",
        yourName: "Your name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        getInTouch: "Get in touch",
        firstName: "First name",
        lastName: "Last name",
        emailAddress: "email address",
        emailSubject: "email subject",
        contactUs: "contact us",
        workshopDesc: CULTURAL_COMPASS_PROGRAM_DESC,
        resumeBoostDesc: RESUME_BOOST_PROGRAM_DESC,
        fundraising: "Fundraising",
        website: "Website",
        volunteerDesc: "Connect MNG offers various ways for passionate individuals to contribute and make a difference in our community. Whether you're looking to lend a helping hand, raise awareness, or offer your expertise, there's a place for you here. Explore the following avenues to get involved:",
        becomeVolunteer: "Become a volunteer!",
        whatWeOffer: "What We Offer",

        // Donation page translations
        empowerYoungMongolians: "Empower young Mongolian professionals",
        donateConnectMNG: "Donate to Connect MNG",
        onetimeDonation: "Make a one-time gift",
        customAmount: "Custom Amount",

        // support popup translations
        supportConnect: "Support Connect MNG!",
        yourContributionText: "Your contribution will help to inspire, educate, and equip Mongolian students with skills to navigate through today's world and give back to the community.",

        // our story page translations
        ourStory: "Our Story",
        ourStoryText: "Short Paragprah about our story",

        // our team page translations
        aboutUs: "About Us",
        aboutUsDesc: "Description",
        ourValues: "Our Values",
        ourValuesDesc: "Description",
        meetBoard: "Meet the Board",

        // footer translation
        engage: "ENGAGE",
        explore: "EXPLORE",
        termsOfUse: "Terms of Use",
        privacyPolicy: "Privacy Policy",

        // Event page translations
        Date: "Monday 29th January 2024",
        Calendar: "Calendar",
        Time: "Time",
        Event: "Event",
        Location: "Location",
        date: "Monday 29th January 2024",
        time: "3pm",
        time1: "4pm",

        // Happy hour event translations
        date_time: "📅 Monday 29th January 2024 | 🕒 4:00 PM",
        happy_location: "📍 Location: Bangrak",
        happy_desc1: "Join us for a **fun and relaxing Happy Hour** at Bangrak! 🎉",
        happy_desc2: "🥂 Meet new people, network, and unwind with refreshing drinks and great conversations.",
        happy_desc3: "📢 This event is open to all members. Bring your friends!",
        h_back_to_events: "⬅ Back to Events",

        // Resume help event translations
        resume_date_time: "📅 Monday 29th January 2024 | 🕒 3:00 PM",
        resume_location: "📍 Location: Capital One Cafe",
        resume_desc1: "Join us for an interactive **Resume Help Workshop** where industry experts will provide tips on crafting an impressive resume that stands out!",
        resume_desc2: "📝 Learn best practices, formatting tips, and how to highlight your skills effectively.",
        resume_desc3: "🎯 Ideal for job seekers and students looking to refine their resumes.",
        r_back_to_events: "⬅ Back to Events",
    },
    mn: {
        programs: "Хөтөлбөрүүд",
        getInvolved: "Таны Оролцоо",
        blogs: "Блог",
        about: "Бидний Тухай",
        resources: "Нэмэлт Мэдээлэл",
        contact: "Бидэнтэй Холбогдох",
        home: "Нүүр",
        careerDevelopment: "Карьер Хөгжил",
        mentorship: "Мэнторшип",
        networking: "Нетворк",
        learnMore: "Дэлгэрэнгүй",
        mission: "Америк дахь Монгол оюутан залуус болон залуу мэргэжилтнүүдийг хувийн болон мэргэжлийн хөгжилд зориулсан мэдээллийн нөөцөөр хангаж, хувь хүмүүс хоорондоо холбогдож, суралцаж, хамтдаа хөгжих боломжтой орчныг бүрдүүлэх.",
        missionAndImpact: "Зорилго & Нөлөө",
        donate: "Хандив",
        events: "Үйл ажиллагаа",
        volunteer: "Сайн Дурын Ажил",
        internships: 'Дадлага',
        ourStory: "Бидний Түүх",
        ourTeam: "Манай Баг",
        time: "Цаг",
        event: "Эвент",
        location: "Хаяг",
        contactDesc: "Биднээс асуух асуулт байгаа бол доорх формыг бөглөнө үү. Бид удахгүй хариу өгөх болно. Баярлалаа",
        yourName: "Таны Нэр",
        email: "Имэйл",
        subject: "Гарчиг",
        message: "Мессэж",
        getInTouch: "Бидэнтэй Холбогдох",
        firstName: "Нэр",
        getInTouch: "Бидэнтэй Холбогдох",
        firstName: "Нэр",
        lastName: "Овог",
        emailAddress: "Имэйл хаяг",
        emailSubject: "Имэйл гарчиг",
        contactUs: "Холбогдох",
        workshopDesc: "Cultural Compass хөтөлбөр нь Америкт сурч боловсорч байгаа Монгол болон Монгол Америк оюутан залууст зориулсан хөтөлбөр юм. Энэхүү хөтөлбөрөөр оюутан залуус хамтдаа харилцан бие биеэ дэмжин тусалж, соёлын ялгааг даван туулах орчныг бүрдүүлэх нь бидний зорилго юм.",
        resumeBoostDesc: "Resume Boost хөтөлбөр нь хоёр долоо хоногийн ажлын салбарт шинээр гарч буй залууст болон оюутан сурагчдад зориулсан хөтөлбөр юм. Оролцогчид өнөөгийн өрсөлдөөнт хөдөлмөрийн зах зээлд амжилтад хүрэхийн тулд ажлын анкетуудаа оновчтой болгож тухайн салбарын мэргэжилтнүүдээс зөвлөгөө болон санал хүсэлт авах боломжтой.",
        fundraising: "Хандив",
        website: "Вэб Хаяг",
        volunteerDesc: "Connect MNG-тэй хамтран ажиллах болон өөрийн оролцоогоороо Вашингтон мужид байгаа Монголчуудад зорилсан хөтөлбөрүүдийг дэмжих хүсэлтэй бол та дараах байдлаар өөрийн оролцоог нэмэх боломжтой юм:",
        becomeVolunteer: "САЙН ДУРЫН АЖИЛТАН БОЛОХ",
        whatWeOffer: "Бидний санал болгож буй зүйлс",

        // Donation page translations
        empowerYoungMongolians: "Залуу Монгол мэргэжилтнүүдийг дэмжих",
        donateConnectMNG: "Connect MNG-д хандив өгөх",
        onetimeDonation: "Нэг удаагийн хандив өгөх",
        customAmount: "Тохируулсан Дүн",

        // support popup translations
        supportConnect: "Connect MNG-г дэмжих!",
        yourContributionText: "Таны оролцоо нь Монгол оюутнуудын сонирхол, сургалт, боловсролын ур чадварыг хөгжүүлэх, ур чадваруудыг эзэмших зорилготой болно.",


        // our story page translations
        ourStory: "Бидний түүх",
        ourStoryText: "Бидний түүхийн товч тайлбар",

        // our team page translations
        aboutUs: "Бидний тухай",
        aboutUsDesc: "Тайлбар",
        ourValues: "Бидний Зорилго",
        ourValuesDesc: "Тайлбар",
        meetBoard: "Багийн гишүүд",

        // footer translations
        connectWithUs: "Бидэнтэй Холбогдох",
        engage: "Таны Оролцоо",
        explore: "Зочлох",
        termsOfUse: "Ашиглалтын Нөхцөл",
        privacyPolicy: "Нууцлалын Баталгаа",



        // Event page translations
        Date: "2024 оны нэгдүгээр сарын 29-ний даваа",
        Calendar: "Хуанли",
        Time: "Цаг хугацаа",
        Event: "Үйл явдал",
        Location: "Үйл явдал",
        date: "2024 оны нэгдүгээр сарын 29-ний даваа",
        time: "15:00",
        time1: "16:00",

        // Happy hour event translations
        date_time: "📅 2024 оны 1 сарын 29, Даваа гараг | 🕒 16:00",
        happy_location: "📍 Байршил: Bangrak",
        happy_desc1: "Бидэнтэй нэгдэж **хөгжилтэй, тайвширсан Happy Hour**-д хамрагдаарай Bangrak! 🎉",
        happy_desc2: "🥂 Шинэ хүмүүстэй танилцаж, харилцаа холбоо тогтоож, сэтгэл сэргээсэн ундаа ууж, сайхан яриа өрнүүлээрэй.",
        happy_desc3: "📢 Энэхүү арга хэмжээнд бүх гишүүд оролцох боломжтой. Найзуудаа авчир!",
        h_back_to_events: "⬅ Үйл явдал руу буцах",

        // Resume help event translations
        resume_date_time: "📅 2024 оны 1 сарын 29 Даваа гараг | 🕒 15:00",
        resume_location: "📍 Байршил: Capital One Cafe",
        resume_desc1: "Салбарын мэргэжилтнүүд оролцдог интерактив **Resume Help Workshop**-д бидэнтэй нэгдээрэй гайхалтай анкет бүтээх талаар зөвлөгөө өгөх болно!",
        resume_desc2: "📝 Шилдэг туршлага, форматлах зөвлөмж, ур чадвараа хэрхэн үр дүнтэй онцлох талаар суралц.",
        resume_desc3: "🎯 Ажил хайгч болон анкетаа сайжруулах хүсэлтэй оюутнуудад тохиромжтой.",
        r_back_to_events: "⬅ Үйл явдал руу буцах",
    },
};
