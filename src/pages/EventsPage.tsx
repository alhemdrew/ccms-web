import { useMemo, useState } from 'react';
import { pageSeo, Seo } from '../seo/seo';

const eventData = [
  {
    title: 'Art Work Exhibition',
    type: 'Art',
    text: 'A showcase of imagination, craft and student expression across the school community.',
    badge: 'School event',
    image: '/images/art/the-cuddles-experience.png',
  },
  {
    title: 'Student Showcase',
    type: 'Community',
    text: 'Families and friends gather to celebrate growth, creativity and the joy of learning together.',
    badge: 'Community',
    image: '/images/school/IMG_9838.jpg',
  },
  {
    title: 'Coding Event',
    type: 'Technology',
    text: 'Practical technology experiences that help students think, create and problem-solve with confidence.',
    badge: 'STEM',
    image: '/images/coding/coding',
  },
  {
    title: 'Presentation & Leadership',
    type: 'Entrepreneurship',
    text: 'Students present ideas, develop public voice and grow into confident young leaders.',
    badge: 'Leadership',
    image: '/images/They%20present.png',
  },
  {
    title: 'Campus Life',
    type: 'Community',
    text: 'The rhythm of school life is built on belonging, shared purpose and everyday pride.',
    badge: 'Campus',
    image: '/images/campus/sch_build.jpeg',
  },
  {
    title: 'Creative Discovery',
    type: 'Art',
    text: 'Students explore ideas with materials, stories and imagination that make learning vivid.',
    badge: 'Creative',
    image: '/images/they%20create.png',
  },
];

export function EventsPage() {
  const [filter, setFilter] = useState('All');
  const filtered = useMemo(() => {
    if (filter === 'All') return eventData;
    return eventData.filter((item) => item.type === filter);
  }, [filter]);

  return (
    <>
      <Seo {...pageSeo.events} />
      <div className="page-shell-inner">
      <section className="page-intro section-maroon" data-reveal>
        <div className="container page-intro-grid">
          <div>
            <p className="eyebrow">Events</p>
            <h1><span className="spring-accent">Moments</span> that build memory, confidence and belonging.</h1>
          </div>
          <p>
            A healthy school culture is not only built in classrooms. It grows in exhibitions, performances, competitions and shared community experiences.
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
        <div className="container">
          <div className="filter-row" aria-label="Event filters" data-reveal>
            {['All', 'Art', 'Technology', 'Entrepreneurship', 'Community'].map((value) => (
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

          <div className="event-grid event-grid-featured">
            {filtered.map((event) => (
              <article key={event.title} className="event-card" data-reveal>
                <div className="event-image" style={{ backgroundImage: `url(${event.image})` }} />
                <div className="event-topline">
                  <span className="event-tag">{event.badge}</span>
                  <span>{event.type}</span>
                </div>
                <h3>{event.title}</h3>
                <p>{event.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
