import images from '../data/images';
import { pageSeo, Seo } from '../seo/seo';

const dailyMoments = [
  { title: 'Morning arrival', text: 'Warm welcomes, secure routines and a true sense of belonging from the very first step in.', image: '/images/school/IMG_9838.jpg' },
  { title: 'Learning through play', text: 'Discovery, movement and curiosity shape the rhythm of the day.', image: '/images/they%20explore.PNG' },
  { title: 'Creative expression', text: 'Art, making and storytelling build identity, confidence and joy.', image: '/images/art/the-cuddles-experience.png' },
  { title: 'Community connection', text: 'Shared stories, kindness and responsibility become everyday habits.', image: '/images/students/ccms-kids.png' },
  { title: 'School pride', text: 'Students connect with their environment, their teachers and each other with confidence.', image: '/images/campus/sch_build.jpeg' },
  { title: 'Ideas in motion', text: 'A vibrant culture of questioning and building is present in every classroom moment.', image: '/images/coding/coding' },
];

export function LifeAtCuddlesPage() {
  return (
    <>
      <Seo {...pageSeo.life} />
      <div className="page-shell-inner">
      <section className="page-intro section-maroon" data-reveal>
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow">Life at Cuddles</p>
            <h1>A school day shaped by <span className="spring-accent">warmth</span>, confidence and meaningful growth.</h1>
          </div>
          <p>
            Life at Cuddles is designed to help children move through the day with clarity, security and delight — while developing habits that last well beyond school.
          </p>
        </div>
      </section>

      <div className="page-intro-flourish" aria-hidden="true">
        <span className="flourish-line" />
        <span className="flourish-flower flower-rose"><span /></span>
        <span className="flourish-flower flower-gold"><span /></span>
        <span className="flourish-flower flower-mint"><span /></span>
        <span className="flourish-line" />
      </div>

      <section className="section-spacing" data-reveal>
        <div className="container photo-collage life-cuddles-collage">
          <div className="photo-feature" data-reveal>
            <img src={images.codingFeature.src} alt={images.codingFeature.alt} data-remote={images.codingFeature.remote} />
          </div>
          <div className="photo-stack">
            <div className="photo-card tall" data-reveal>
              <img src={images.schoolFeature.src} alt={images.schoolFeature.alt} data-remote={images.schoolFeature.remote} />
            </div>
            <div className="photo-card">
              <img src={images.childmindersScene.src} alt={images.childmindersScene.alt} data-remote={images.childmindersScene.remote} />
            </div>
            <div className="photo-card">
              <img src={images.storyMain.src} alt={images.storyMain.alt} data-remote={images.storyMain.remote} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" data-reveal>
        <div className="container">
          <div className="section-header center">
            <p className="eyebrow">A day in motion</p>
            <h2>The everyday rhythm is gentle, joyful and purposeful.</h2>
          </div>

          <div className="value-panel-grid">
            {dailyMoments.map((item) => (
              <article className="info-card life-moment-card" key={item.title} data-reveal>
                <div className="moment-image" style={{ backgroundImage: `url(${item.image})` }} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
