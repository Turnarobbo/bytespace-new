import "./App.css";
import instructor from "./assets/hero.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <img
        src="images/Vector.png"
        />
        <span>ByteSpace</span>
      </a>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#courses">Courses</a>
        <a href="#creator">Creators</a>
      </div>

      <div className="nav-actions">
        <a href="#login">Sign In</a>
        <a href="#signup" >  Join Us </a>
          <img
          src="images/Style=Outlined.png"
          />
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">

  {/* Figma decorative shapes */}

  {/* Top left yellow squiggle */}
  <img
    src="/images/cone_02.png"
    className="hero-shape shape-left-top"
    alt=""
  />

  {/* Top right yellow shape */}
  <img
    src="/images/Cone_05.png"
    className="hero-shape shape-right-top"
    alt=""
  />

  {/* Left middle white squiggle */}
  <img
    src="/images/cone_03.png"
    className="hero-shape shape-left-middle"
    alt=""
  />

  {/* Right middle white triangle */}
  <img
    src="/images/Cone_04.png"
    className="hero-shape shape-right-middle"
    alt=""
  />

  {/* Bottom left white ring */}
  <img
    src="/images/Cone_01.png"
    className="hero-shape shape-bottom-left"
    alt=""
  />

  {/* Bottom right white squiggle */}
  <img
    src="/images/cone02.png"
    className="hero-shape shape-bottom-right"
    alt=""
  />
    

      <div className="hero-content">
        <h1>
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p>
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <form
          className="search-bar"
          onSubmit={(e) => {
            e.preventDefault();
            document.getElementById("courses")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <span className="search-icon">⌕</span>

          <input
            type="text"
            placeholder="Course, topic, creator"
            aria-label="Search courses"
          />

          <button type="submit">Search</button>
        </form>
      </div>

      <div className="hero-person">
        <img
          src={instructor}
          alt="Online course instructor"
        />
      </div>

      <div className="progress-card">
        <span>Learning Progress</span>
        <strong>55%</strong>

        <div className="progress-track">
          <div className="progress-fill"></div>
        </div>
      </div>

      <div className="uiux-card">
  <div className="uiux-title">UI/UX Design</div>
  <div className="uiux-info">
    <span>200 Courses</span>
    <span>•</span>
    <span>1000+ Students</span>
  </div>
</div>

      <div className="student-card">
        <span>Happy Students</span>
        <span>4.5(240)</span>

        <div className="student-avatars">

          <img
      src="/images/image11.png"
      alt="student"
    />

    <img
      src="/images/image12.png"
      alt="student"
    />

    <img
      src="/images/image13.png"
      alt="student"
    />

    <img
      src="/images/image14.png"
      alt="student"
    />

<img
      src="/images/image15.png"
      alt="student"
    />
    <img
      src="/images/image16.png"
      alt="student"
    />

<img
      src="/images/image17.png"
      alt="student"
    />
          <b>2K+</b>
        </div>
      </div>
    </section>
  );

  
}


/* NEW COURSES SECTION*/

function Courses() {
  const courses = [
    {
      id: 1,
      category: "Design",
      title: "Learn Figma from Basic",
      lessons: "17 Lessons",
      duration: "2 hours 30 mins",
      comments: "60 Comments",
      rating: "4.5",
      image: "/images/course1.jpg",
    },
    {
      id: 2,
      category: "Design",
      title: "Build Digital Asset",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: "4.5",
      image: "/images/course2.jpg",
    },
    {
      id: 3,
      category: "Data Science",
      title: "the Power of Big Data",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: "4.5",
      image: "/images/course3.jpg",
    },
    {
      id: 4,
      category: "Productivity",
      title: "Enhancing Productivity on...",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: "4.5",
      image: "/images/course4.jpg",
    },
    {
      id: 5,
      category: "Business",
      title: "Mastering Money Manage...",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: "4.5",
      image: "/images/course5.jpg",
    },
    {
      id: 6,
      category: "Business",
      title: "From Idea to Success",
      lessons: "17 Lessons",
      duration: "2 hours 16 mins",
      comments: "59 Comments",
      rating: "4.5",
      image: "/images/course6.jpg",
    },
  ];

  return (
    <section className="courses-section" id="courses">

      {/* NEW: COMPANY / LOGO STRIP */}

      <div className="company-logos">

        <div className="company-logo">
          <span className="logo-mark logo-mark-one">≋</span>
          <span>Logoipsum</span>
        </div>

        <div className="company-logo">
          <span className="logo-mark logo-mark-two">☀</span>
          <span>Logoipsum</span>
        </div>

        <div className="company-logo">
          <span className="logo-mark logo-mark-three">ϟ</span>
          <span>Logoipsum</span>
        </div>

        <div className="company-logo">
          <span className="logo-mark logo-mark-four">✤</span>
          <span>Logoipsum</span>
        </div>

        <div className="company-logo">
          <span className="logo-mark logo-mark-five">◉</span>
          <span>Logoipsum</span>
        </div>

      </div>


      {/* NEW: COURSES INTRODUCTION */}

      <div className="courses-intro">

        <h2>
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>

        <p>
          At Bytespace Courses, we bring you closer to life-changing
          knowledge. Explore a variety of courses across different
          fields, from technology to the arts, and make a difference
          in your career and life.
        </p>

      </div>


      {/* NEW: COURSE CATEGORIES */}

      <div className="course-categories">

        <a href="#featured" className="category active">
          Featured
        </a>

        <a href="#music" className="category">
          Music
        </a>

        <a href="#drawing" className="category">
          Drawing & Painting
        </a>

        <a href="#marketing" className="category">
          Marketing
        </a>

        <a href="#animation" className="category">
          Animation
        </a>

        <a href="#social-media" className="category">
          Social Media
        </a>

        <a href="#uiux" className="category">
          UI/UX Design
        </a>

        <a href="#creative-marketing" className="category">
          Creative Marketing
        </a>

        <a href="#digital-illustration" className="category">
          Digital Illustration
        </a>

        <a href="#film-video" className="category">
          Film & Video
        </a>

        <a href="#crafts" className="category">
          Crafts
        </a>

        <a href="#freelance" className="category">
          Freelance & Entrepreneurship
        </a>

        <a href="#graphic-design" className="category">
          Graphic Design
        </a>

        <a href="#photography" className="category">
          Photography
        </a>

        <a href="#productivity" className="category">
          Productivity
        </a>

        <a href="#web-development" className="category">
          Web Development
        </a>

        <a href="#data-science" className="category">
          Data Science
        </a>

        <a href="#cooking" className="category">
          Cooking
        </a>

        <a href="#more" className="category more">
          + More
        </a>

      </div>


      {/* COURSE CARDS*/}

      <div className="courses-grid">

        {courses.map((course) => (
          <div className="course-card" key={course.id}>

            {/* Course Image */}
            <div className="course-image">

              <img
                src={course.image}
                alt={course.title}
              />

              {/* Information on image */}
              <div className="course-image-info">

                <span>
                  {course.lessons}
                </span>

                <span>
                  {course.duration}
                </span>

                <span>
                  {course.comments}
                </span>

              </div>
            </div>

            {/* Course Information */}
            <div className="course-info">

              <div className="course-title-row">

                <div>
                  <h3>{course.title}</h3>

                  <p className="course-instructor">
                    by <span>purepart studio</span>
                  </p>
                </div>

                <div className="course-rating">
                  {course.rating} <span>★</span>
                </div>

              </div>

              {/* Beginner + Students */}
              <div className="course-details">

                <div className="course-level">
                  <img 
                    src="/images/level-icon.png"
                    alt=""
                    className="level-icon"
                  />
                  <span> Beginner</span>
                </div>

                <div className="course-students">

                  <img 
                    src="/images/avatar1.png"
                    alt="student"
                    className="avatar"
                  />

                  <img 
                    src="/images/avatar2.png"
                    alt="student"
                    className="avatar"
                  />

                  <img 
                    src="/images/avatar3.png"
                    alt="student"
                    className="avatar"
                  />

                  <img 
                    src="/images/avatar4.png"
                    alt="student"
                    className="avatar"
                  />

                  <span className="student-count">
                    20+
                  </span>

                </div>

              </div>

              {/* Price */}
              <div className="course-price">
                $25
                <span>/lifetime</span>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}


/* LEARNING PATHS SECTION*/

function LearningPaths() {
  const categories = [
    {
      id: 1,
      name: "Design",
      icon: "/images/Auto Layout Vertical.png",
    },
    {
      id: 2,
      name: "Development",
      icon: "/images/Auto Layout Vertical2.png",
    },
    {
      id: 3,
      name: "IT & Software",
      icon: "/images/Auto Layout Vertical3.png",
    },
    {
      id: 4,
      name: "Business",
      icon: "/images/Auto Layout Vertical4.png",
    },
    {
      id: 5,
      name: "Marketing",
      icon: "/images/Auto Layout Vertical5.png",
    },
    {
      id: 6,
      name: "Photography",
      icon: "/images/Auto Layout Vertical6.png",
    },
  ];

  return (
    <section className="learning-paths-section">

      <div className="learning-paths-heading">
        <h2>Explore Diverse Learning Paths at Bytespace</h2>

        <p>
          At Bytespace, we believe in empowering individuals through
          knowledge. Our diverse range of courses spans various fields,
          ensuring there's something for everyone. Unleash your potential
          and explore our carefully curated categories.
        </p>
      </div>

      <div className="learning-paths-grid">

        {categories.map((category) => (
          <div className="learning-path-card" key={category.id}>

            <div className="learning-path-icon">
              <img
                src={category.icon}
                alt={category.name}
              />
            </div>

            <span>{category.name}</span>

          </div>
        ))}

      </div>

    </section>
  );
}

/* COMBINED PROFESSIONAL GROWTH + CREATE/MANAGE SECTION */

function CombinedGrowthSection() {
  return (
    <section className="combined-growth-section">

      {/* PROFESSIONAL GROWTH - TOP*/}

      <div className="professional-growth-section">

        <div className="growth-content">

          <h2>
            Your Path to Professional
            <br />
            Growth Starts Here!
          </h2>

          <p>
            Explore our curated selection of courses tailored to enhance
            your capabilities and accelerate your career journey.
            Whether you are looking to sharpen specific skills, gain
            industry expertise, or embark on a new career path entirely,
            we have the resources you need.
          </p>

          <div className="growth-stats">

            <div className="growth-stat">
              <strong>12K</strong>
              <span>Students</span>
            </div>

            <div className="growth-stat">
              <strong>70+</strong>
              <span>Courses</span>
            </div>

            <div className="growth-stat">
              <strong>16</strong>
              <span>Creators</span>
            </div>

          </div>

        </div>


        <div className="growth-image-wrapper">

          <img
            src="/images/frame 11.jpeg"
            alt="Student learning with laptop"
            className="growth-image"
          />

        </div>

      </div>


      {/* CREATE & MANAGE - BOTTOM*/}

      <div className="create-manage-section">

        <div className="create-manage-image-wrapper">

          <img
            src="/images/frame 12.jpeg"
            alt="Create and manage courses"
            className="create-manage-image"
          />

        </div>


        <div className="create-manage-content">

          <h2>
            Create &amp; Manage
            <br />
            Courses Easily.
          </h2>

          <p>
            <strong>ByteSpace</strong> supports individuals or entities in the
            creation, publication, and administration of educational courses.
          </p>

          <div className="create-manage-list">

            <div className="create-manage-item">
              <span className="check-icon">✓</span>
              <span>Share Your Expertise</span>
            </div>

            <div className="create-manage-item">
              <span className="check-icon">✓</span>
              <span>Monetize Your Passion</span>
            </div>

            <div className="create-manage-item">
              <span className="check-icon">✓</span>
              <span>Flexibility and Autonomy</span>
            </div>

            <div className="create-manage-item">
              <span className="check-icon">✓</span>
              <span>Build a Community</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}


/* CREATOR SECTION*/

function CreatorSection() {
  return (
    <section className="creator-section" id="creator">
      
{/* Top-left yellow squiggle */}
<img
  src="/images/cone_02.png"
  className="creator-shape creator-shape-left-top"
  alt=""
/>

{/* Left white squiggle */}
<img
  src="/images/cone_02.png"
  className="creator-shape creator-shape-left-middle"
  alt=""
/>

{/* Bottom-left white triangle */}
<img
  src="/images/Cone_04.png"
  className="creator-shape creator-shape-left-bottom"
  alt=""
/>

{/* Bottom-left white ring */}
<img
  src="/images/Cone_01.png"
  className="creator-shape creator-shape-bottom-left"
  alt=""
/>

{/* Top-right yellow triangle */}
<img
  src="/images/Cone_04.png"
  className="creator-shape creator-shape-right-top"
  alt=""
/>

{/* Right white shape */}
<img
  src="/images/Cone_05.png"
  className="creator-shape creator-shape-right"
  alt=""
/>

{/* Bottom-right yellow squiggle */}
<img
  src="/images/cone_02.png"
  className="creator-shape creator-shape-bottom-right"
  alt=""
/>

      <div className="creator-content">

        <h2>
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>

        <p>
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <a href="#signup" className="creator-btn">
          Join as Creator
        </a>

      </div>

    </section>
  );
}

/* COMMUNITY TESTIMONIALS SECTION */

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      role: "Enthusiastic Learner",
      image: "/images/image1.png",
      text: `"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."`,
    },
    {
      id: 2,
      name: "James L.",
      role: "Lifelong Learner",
      image: "/images/image2.png",
      text: `"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."`,
    },
    {
      id: 3,
      name: "Alex B.",
      role: "Inspired Creator",
      image: "/images/image3.png",
      text: `"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."`,
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2>
          Discover What Our
          <br />
          Community Is Saying
        </h2>

        <p>
          At ByteSpace, our vibrant community of learners and creators is at the
          heart of what we do. Hear directly from those who have experienced the
          transformative journey of learning and creating on our platform.
          Explore testimonials that reflect the diverse perspectives of
          enthusiastic learners and accomplished creators.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            
            <div className="testimonial-user">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-avatar"
              />

              <div>
                <h3>{testimonial.name}</h3>
                <span>{testimonial.role}</span>
              </div>
            </div>

            <p className="testimonial-text">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* FOOTER SECTION */

function Footer() {
  return (
    <footer className="footer-section">

      <div className="footer-main">

        {/* LEFT SIDE */}
        <div className="footer-brand">

          <div className="footer-logo">
            <span className="footer-logo-icon">b</span>
            <span>ByteSpace</span>
          </div>

          <p className="footer-description">
            Stay Up to date with our latest features and releases by joining our
            newsletter.
          </p>

          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
            />

            <button type="button">
              Search
            </button>
          </div>

          <p className="footer-privacy-text">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>

        </div>

        {/* LINKS */}
        <div className="footer-links">

          <div className="footer-column">
            <a href="#courses">Featured Courses</a>
            <a href="#courses">Featured Categories</a>
            <a href="#business">Business</a>
            <a href="#it">IT</a>
            <a href="#design">Design</a>
          </div>

          <div className="footer-column">
            <a href="#development">Development</a>
            <a href="#marketing">Marketing</a>
            <a href="#photography">Photography</a>
            <a href="#finance">Finance</a>
            <a href="#sport">Sport</a>
          </div>


          <div className="footer-column">
            <a href="#creator">Become a Creator</a>
            <a href="#affiliate">Affiliate Program</a>
            <a href="#contact">Contact</a>
            <a href="#help">Help</a>
            <a href="#about">About</a>
          </div>

        </div>

      </div>


      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">

        <p>
          @ 2023 ByteSpace. All rights reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookies Settings</a>
        </div>

      </div>

    </footer>
  );
}

function Home() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Courses />
      <LearningPaths/>
      <CombinedGrowthSection />
      <CreatorSection/>
      <TestimonialsSection />
       <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
         <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;