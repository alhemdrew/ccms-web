import { useMemo, useState } from 'react';
import images from '../data/images';

const galleryItems = [
  { label: 'Classroom', title: 'They explore.', meta: 'Curiosity meets real-world learning.', tone: 'story-1', image: '/images/they%20explore.PNG' },
  { label: 'Innovation', title: 'They build.', meta: 'Projects, coding and experimentation in motion.', tone: 'story-2', image: '/images/coding/coding' },
  { label: 'Art', title: 'They create.', meta: 'Expression, craft and imagination become visible.', tone: 'story-3', image: '/images/they%20create.png' },
  { label: 'Events', title: 'They present.', meta: 'Confidence grows through performance and public voice.', tone: 'story-1', image: '/images/They%20present.png' },
  { label: 'Leadership', title: 'They lead.', meta: 'Responsibility, initiative and citizenship in action.', tone: 'story-2', image: '/images/They%20lead.png' },
  { label: 'Community', title: 'They belong.', meta: 'A warm culture of encouragement and purpose.', tone: 'story-3', image: '/images/students/ccms-kids.png' },
  { label: 'Play', title: 'They wonder.', meta: 'Joy, movement and discovery are part of the daily rhythm.', tone: 'story-1', image: '/images/school/IMG_9838.jpg' },
  { label: 'Creativity', title: 'They imagine.', meta: 'Hands-on making turns inspiration into confidence.', tone: 'story-2', image: '/images/they%20question.png' },
  { label: 'Growth', title: 'They thrive.', meta: 'Every achievement is a step toward a fuller sense of self.', tone: 'story-3', image: '/images/campus/sch_build.jpeg' },
  { label: 'Art', title: 'The Cuddles experience.', meta: 'A creative learning culture in full view.', tone: 'story-1', image: '/images/art/the-cuddles-experience.png' },
  { label: 'Technology', title: 'Digital curiosity.', meta: 'Students are building ideas, not just learning tools.', tone: 'story-2', image: '/images/they%20question.png' },
  { label: 'Community', title: 'School life.', meta: 'Daily moments, belonging and authentic togetherness.', tone: 'story-3', image: '/images/students/circle.png' },
];

export function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const filtered = useMemo(() => {
    if (filter === 'All') return galleryItems;
    return galleryItems.filter((item) => item.label === filter);
  }, [filter]);

  return (
    <div className="page-shell-inner">
      <section className="page-intro section-maroon">
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow">Gallery</p>
            <h1>A visual story of childhood, creativity and <span className="spring-accent">confidence</span>.</h1>
          </div>
          <p>
            The gallery captures the rhythm of school life: inquiry, joy, collaboration, performance and growth.
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

      <section className="section-spacing">
        <div className="container gallery-showcase">
          <div className="gallery-featured">
            <img src={images.codingFeature.src} alt={images.codingFeature.alt} data-remote={images.codingFeature.remote} />
          </div>
          <div className="gallery-featured-small">
            <img src={images.schoolFeature.src} alt={images.schoolFeature.alt} data-remote={images.schoolFeature.remote} />
          </div>
          <div className="gallery-featured-small">
            <img src={images.storyMain.src} alt={images.storyMain.alt} data-remote={images.storyMain.remote} />
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="filter-row" aria-label="Gallery filters">
            {['All', 'Classroom', 'Innovation', 'Art', 'Events', 'Leadership', 'Community', 'Play', 'Creativity', 'Growth', 'Technology'].map((value) => (
              <button
                key={value}
                type="button"
                className={filter === value ? 'filter-pill active' : 'filter-pill'}
                onClick={() => setFilter(value)}
              >
                {value}
              </button>
            ))}
          </div>

          <div className="gallery-compact">
            {filtered.map((item: (typeof galleryItems)[number]) => (
              <article
                key={item.title}
                className={`gallery-card ${item.tone}`}
                style={{ backgroundImage: `linear-gradient(180deg, rgba(11, 23, 33, 0.16), rgba(11, 23, 33, 0.72)), url(${item.image})` }}
              >
                <p className="eyebrow small">{item.label}</p>
                <h3>{item.title}</h3>
                <span>{item.meta}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
