import { asset } from '../utils/assets';
import { achievements } from '../data/siteData';
import images from '../data/images';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { pageSeo, Seo } from '../seo/seo';

export function AchievementsPage() {
  const items = achievements;
  const gallery = images.gallery;
  const artExhibition = images.artExhibition.slice(0, 6);
  const [index, setIndex] = useState(0);
  const [achievementSlide, setAchievementSlide] = useState(0);
  const [artIndex, setArtIndex] = useState(0);
  const [achievementAutoPlay, setAchievementAutoPlay] = useState(true);
  const [artAutoPlay, setArtAutoPlay] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const viewerRef = useRef<HTMLDivElement | null>(null);

  const activeAchievement = items[index];
  const achievementSlides = activeAchievement.slides ?? [gallery[index]?.src || asset('/images/achievements/hackathon.png')];
  const currentAchievementImage = achievementSlides[achievementSlide % achievementSlides.length];

  const prev = () => {
    setIndex((i) => (i - 1 + items.length) % items.length);
    setAchievementSlide(0);
    setAchievementAutoPlay(false);
  };

  const next = () => {
    setIndex((i) => (i + 1) % items.length);
    setAchievementSlide(0);
    setAchievementAutoPlay(false);
  };

  const prevArt = () => {
    setArtIndex((i) => (i - 1 + artExhibition.length) % artExhibition.length);
    setArtAutoPlay(false);
  };

  const nextArt = () => {
    setArtIndex((i) => (i + 1) % artExhibition.length);
    setArtAutoPlay(false);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (achievementSlides.length <= 1 || achievementAutoPlay === false) return;
    const timer = window.setInterval(() => {
      setAchievementSlide((current) => (current + 1) % achievementSlides.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [achievementSlides.length, achievementAutoPlay]);

  useEffect(() => {
    if (achievementAutoPlay) return;
    const timer = window.setTimeout(() => setAchievementAutoPlay(true), 2600);
    return () => window.clearTimeout(timer);
  }, [achievementAutoPlay, index]);

  useEffect(() => {
    if (artExhibition.length <= 1 || artAutoPlay === false) return;
    const timer = window.setInterval(() => {
      setArtIndex((current) => (current + 1) % artExhibition.length);
    }, 4300);
    return () => window.clearInterval(timer);
  }, [artExhibition.length, artAutoPlay]);

  useEffect(() => {
    if (artAutoPlay) return;
    const timer = window.setTimeout(() => setArtAutoPlay(true), 2600);
    return () => window.clearTimeout(timer);
  }, [artAutoPlay]);

  useEffect(() => {
    const el = viewerRef.current;
    if (!el) return;
    const onTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      setAchievementAutoPlay(false);
    };
    const onTouchEnd = (e: TouchEvent) => {
      const start = touchStartX.current;
      if (start == null) return;
      const dx = e.changedTouches[0].clientX - start;
      if (dx > 50) prev();
      if (dx < -50) next();
      touchStartX.current = null;
    };
    el.addEventListener('touchstart', onTouchStart);
    el.addEventListener('touchend', onTouchEnd);
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [viewerRef.current]);

  return (
    <>
      <Seo {...pageSeo.achievements} />
      <div className="page-shell-inner">
      <section className="achievements-hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">CCMS ACHIEVEMENTS</p>
            <div className="hero-number">{String(index + 1).padStart(2, '0')}</div>
          </div>
          <div>
            <h1>IDEAS. EFFORT. ACHIEVEMENT.</h1>
            <p>
              Our students take what they learn beyond the classroom — into competitions, innovation, technology and the wider community. These achievements are a reflection of curiosity, persistence and guided opportunity.
            </p>
          </div>
        </div>
      </section>

      <section className="container section-spacing">
        <div className="achievements-viewer" ref={viewerRef}>
          <div className="viewer-stage">
            <div
              className="viewer-image"
              key={`${index}-${achievementSlide}`}
              style={{ backgroundImage: `url(${currentAchievementImage})` }}
            />
            <div className="viewer-meta">
              <div className="viewer-number">{String(index + 1).padStart(2, '0')}</div>
              <h3 className="viewer-title">{items[index].title}</h3>
              <div className="viewer-result">{items[index].result} • {items[index].year}</div>
            </div>
          </div>

          <div className="viewer-controls">
            <button type="button" aria-label="Previous achievement" onClick={prev} className="viewer-btn">←</button>
            <div className="viewer-progress">
              <div className="viewer-progress-line" style={{ width: `${((index + 1) / items.length) * 100}%` }} />
            </div>
            <button type="button" aria-label="Next achievement" onClick={next} className="viewer-btn">→</button>
          </div>

          <div className="achievement-timeline">
            {items.map((a, idx) => (
              <button
                key={a.title}
                className={`achievement-entry ${idx === index ? 'active' : ''}`}
                onClick={() => setIndex(idx)}
                aria-current={idx === index}
              >
                <div className="entry-number">{String(idx + 1).padStart(2, '0')}</div>
                <div>
                  <div className="entry-title">{a.title}</div>
                  <div className="entry-meta">{a.result} — {a.year}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container">
          <div className="young-authors-editorial">
            <div className="young-authors-copy">
              <p className="eyebrow">From Cuddles</p>
              <h2>THREE YOUNG AUTHORS.</h2>
              <p className="young-authors-intro">Three young writers have turned their ideas into their first books.</p>
              <div className="first-books" aria-label="Their first books">
                <span className="first-word">FIRST</span>
                <span className="books-word">BOOKS.</span>
              </div>
              <p>
                At Cuddles, creativity is not only something children learn about. Sometimes, it becomes something they create and share with the world.
              </p>
            </div>

            <div className="young-authors-image-wrap">
              <img src={asset('/images/authors.jpg')} alt="Three young authors from Cuddles" />
              <div className="image-caption">Three young writers from Cuddles.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing section-paper">
        <div className="container">
          <div className="section-header split-header">
            <div>
              <p className="eyebrow">Art Exhibition</p>
              <h2>Student artwork with a growing presence beyond the school.</h2>
            </div>
            <p>
              Selected works from the exhibition have already found homes across Nigeria, with a few pieces now held in Washington, D.C. and elsewhere in the United States.
            </p>
          </div>

          <div className="art-showcase" aria-live="polite">
            <div className="art-showcase-image-wrap">
              <img src={artExhibition[artIndex]?.src} alt={artExhibition[artIndex]?.alt} />
            </div>

            <div className="art-showcase-meta">
              <div className="art-showcase-counter">{String(artIndex + 1).padStart(2, '0')} / {String(artExhibition.length).padStart(2, '0')}</div>
              <h3>Art, imagination and growing recognition.</h3>
              <p>
                Some of the works have already found homes across Nigeria, with selected pieces now held in Washington, D.C. and elsewhere in the United States.
              </p>

              <div className="viewer-controls art-controls">
                <button type="button" aria-label="Previous artwork" onClick={prevArt} className="viewer-btn">←</button>
                <div className="viewer-progress">
                  <div className="viewer-progress-line" style={{ width: `${((artIndex + 1) / artExhibition.length) * 100}%` }} />
                </div>
                <button type="button" aria-label="Next artwork" onClick={nextArt} className="viewer-btn">→</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-spacing">
        <div className="section-header split-header">
          <div>
            <p className="eyebrow">Beyond the classroom</p>
            <h2>What our students have achieved</h2>
          </div>
          <Link to="/gallery" className="button button-secondary">See life at Cuddles</Link>
        </div>

        <div className="gallery-compact">
          {items.map((item, i) => (
            <article
              key={item.title}
              className={`gallery-card story-${(i % 3) + 1}`}
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(11, 23, 33, 0.18), rgba(11, 23, 33, 0.76)), url("${item.slides[0]}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <p className="eyebrow small">Achievement</p>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>
      </div>
    </>
  );
}

export default AchievementsPage;
