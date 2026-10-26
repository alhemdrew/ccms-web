import { asset } from '../utils/assets';
import { useEffect, useMemo, useState } from 'react';
import { pageSeo, Seo } from '../seo/seo';
import images from '../data/images';


const hikingSlides = [
  { src: asset('/images/MOUNTAIN HIKING/IMG_8240.JPG'), alt: 'Mountain hiking activity photograph.', title: 'Mountain hiking', caption: 'Exploring nature and learning beyond the classroom.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8242.JPG'), alt: 'Outdoor hiking experience photograph.', title: 'Mountain hiking', caption: 'Building confidence through outdoor experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8244.JPG'), alt: 'Mountain hiking gallery photograph.', title: 'Mountain hiking', caption: 'Discovering new experiences beyond the classroom.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8247.JPG'), alt: 'School hiking activity photograph.', title: 'Mountain hiking', caption: 'Learning, exploration and outdoor adventure.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8248.JPG'), alt: 'Outdoor learning activity photograph.', title: 'Mountain hiking', caption: 'Creating memorable learning experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8265.JPG'), alt: 'Mountain hiking activity photograph.', title: 'Mountain hiking', caption: 'Shared effort, steady pace and outdoor confidence.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8284.JPG'), alt: 'Mountain hiking gallery photograph.', title: 'Mountain hiking', caption: 'Exploration, discovery and personal growth.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8292.JPG'), alt: 'Outdoor adventure photograph.', title: 'Mountain hiking', caption: 'Growing through experiences beyond the classroom.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8293.JPG'), alt: 'School outdoor activity photograph.', title: 'Mountain hiking', caption: 'Building confidence through shared experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8309.JPG'), alt: 'Mountain hiking experience photograph.', title: 'Mountain hiking', caption: 'An opportunity to explore and discover.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8318.JPG'), alt: 'Outdoor learning photograph.', title: 'Mountain hiking', caption: 'Connecting learning with the world around us.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8339.JPG'), alt: 'Mountain hiking activity photograph.', title: 'Mountain hiking', caption: 'Adventure, teamwork and new perspectives.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8341.JPG'), alt: 'School hiking gallery photograph.', title: 'Mountain hiking', caption: 'Encouraging curiosity through outdoor experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8350.JPG'), alt: 'Outdoor exploration photograph.', title: 'Mountain hiking', caption: 'Learning and growing through exploration.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8376.JPG'), alt: 'Mountain hiking photograph.', title: 'Mountain hiking', caption: 'A memorable journey beyond the classroom.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8377.JPG'), alt: 'Mountain hiking gallery photograph.', title: 'Mountain hiking', caption: 'Discovering the value of outdoor learning.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8378.JPG'), alt: 'Outdoor hiking activity photograph.', title: 'Mountain hiking', caption: 'New experiences and lasting memories.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8379.JPG'), alt: 'School mountain hiking photograph.', title: 'Mountain hiking', caption: 'Developing confidence through adventure.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8380.JPG'), alt: 'Mountain hiking experience photograph.', title: 'Mountain hiking', caption: 'Exploration and learning in the outdoors.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8381.JPG'), alt: 'Outdoor adventure gallery photograph.', title: 'Mountain hiking', caption: 'A journey of discovery and growth.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8382.JPG'), alt: 'Mountain hiking activity photograph.', title: 'Mountain hiking', caption: 'Creating meaningful experiences outdoors.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8383.JPG'), alt: 'School hiking photograph.', title: 'Mountain hiking', caption: 'Building resilience through new experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8384.JPG'), alt: 'Outdoor learning gallery photograph.', title: 'Mountain hiking', caption: 'Exploring the world beyond the classroom.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8385.JPG'), alt: 'Mountain hiking photograph.', title: 'Mountain hiking', caption: 'Curiosity, adventure and learning together.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8386.JPG'), alt: 'Outdoor exploration photograph.', title: 'Mountain hiking', caption: 'Learning through experience and discovery.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8387.JPG'), alt: 'Mountain hiking gallery photograph.', title: 'Mountain hiking', caption: 'Moments of exploration and connection.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8388.JPG'), alt: 'School outdoor adventure photograph.', title: 'Mountain hiking', caption: 'Confidence and growth through outdoor activities.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8389.JPG'), alt: 'Mountain hiking experience photograph.', title: 'Mountain hiking', caption: 'A wider world of learning and discovery.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8390.JPG'), alt: 'Mountain hiking activity photograph.', title: 'Mountain hiking', caption: 'A wider world of learning beyond the classroom.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8391.JPG'), alt: 'Outdoor hiking gallery photograph.', title: 'Mountain hiking', caption: 'Building memorable experiences through adventure.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8392.JPG'), alt: 'School hiking photograph.', title: 'Mountain hiking', caption: 'Discovering nature and developing confidence.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8393.JPG'), alt: 'Mountain hiking photograph.', title: 'Mountain hiking', caption: 'Outdoor experiences that inspire growth.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8395.JPG'), alt: 'Outdoor learning photograph.', title: 'Mountain hiking', caption: 'Learning through exploration and shared experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8396.JPG'), alt: 'Mountain hiking gallery photograph.', title: 'Mountain hiking', caption: 'Creating memories through outdoor discovery.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8397.JPG'), alt: 'School hiking activity photograph.', title: 'Mountain hiking', caption: 'Adventure and learning beyond familiar spaces.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8398.JPG'), alt: 'Outdoor exploration gallery photograph.', title: 'Mountain hiking', caption: 'Every experience brings an opportunity to learn.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8399.JPG'), alt: 'Mountain hiking experience photograph.', title: 'Mountain hiking', caption: 'Growing confidence through exploration.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8400.JPG'), alt: 'School outdoor activity photograph.', title: 'Mountain hiking', caption: 'Discovering new perspectives through adventure.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8401.JPG'), alt: 'Mountain hiking gallery photograph.', title: 'Mountain hiking', caption: 'Exploring, learning and growing together.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8402.JPG'), alt: 'Outdoor adventure photograph.', title: 'Mountain hiking', caption: 'Meaningful moments of discovery outdoors.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8403.JPG'), alt: 'Mountain hiking photograph.', title: 'Mountain hiking', caption: 'Learning through new environments and experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8404.JPG'), alt: 'School hiking gallery photograph.', title: 'Mountain hiking', caption: 'Developing curiosity and a spirit of adventure.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8405.JPG'), alt: 'Outdoor learning activity photograph.', title: 'Mountain hiking', caption: 'A memorable experience beyond the classroom.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8406.JPG'), alt: 'Mountain hiking experience photograph.', title: 'Mountain hiking', caption: 'Building resilience and discovering possibilities.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8407.JPG'), alt: 'Outdoor hiking photograph.', title: 'Mountain hiking', caption: 'Adventure that encourages confidence and growth.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8408.JPG'), alt: 'School mountain hiking photograph.', title: 'Mountain hiking', caption: 'Exploration as part of meaningful learning.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8409.JPG'), alt: 'Mountain hiking gallery photograph.', title: 'Mountain hiking', caption: 'Discovering the joy of outdoor experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8410.JPG'), alt: 'Outdoor adventure activity photograph.', title: 'Mountain hiking', caption: 'New challenges and opportunities for growth.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8411.JPG'), alt: 'Mountain hiking photograph.', title: 'Mountain hiking', caption: 'Learning through discovery and exploration.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8412.JPG'), alt: 'School hiking experience photograph.', title: 'Mountain hiking', caption: 'Building confidence one experience at a time.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8414.JPG'), alt: 'Outdoor learning gallery photograph.', title: 'Mountain hiking', caption: 'Connecting curiosity with real-world experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8415.JPG'), alt: 'Mountain hiking activity photograph.', title: 'Mountain hiking', caption: 'Adventure and discovery in every experience.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8416.JPG'), alt: 'Outdoor exploration photograph.', title: 'Mountain hiking', caption: 'Developing resilience through shared adventures.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8420.JPG'), alt: 'Mountain hiking gallery photograph.', title: 'Mountain hiking', caption: 'Discovering new environments and perspectives.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8421.JPG'), alt: 'School hiking activity photograph.', title: 'Mountain hiking', caption: 'Learning and connecting beyond the classroom.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8422.JPG'), alt: 'Outdoor hiking photograph.', title: 'Mountain hiking', caption: 'An experience filled with discovery and growth.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8423.JPG'), alt: 'Mountain hiking experience photograph.', title: 'Mountain hiking', caption: 'Building courage through outdoor experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8424.JPG'), alt: 'School outdoor adventure photograph.', title: 'Mountain hiking', caption: 'Exploring nature and learning together.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8425.JPG'), alt: 'Mountain hiking gallery photograph.', title: 'Mountain hiking', caption: 'Opportunities for adventure and personal growth.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8426.JPG'), alt: 'Outdoor learning photograph.', title: 'Mountain hiking', caption: 'Creating meaningful memories beyond the classroom.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8427.JPG'), alt: 'Mountain hiking activity photograph.', title: 'Mountain hiking', caption: 'A journey of curiosity, confidence and discovery.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8428.JPG'), alt: 'School hiking gallery photograph.', title: 'Mountain hiking', caption: 'New surroundings and valuable learning experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8429.JPG'), alt: 'Outdoor exploration activity photograph.', title: 'Mountain hiking', caption: 'Growing through adventure and shared discovery.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8430.JPG'), alt: 'Mountain hiking photograph.', title: 'Mountain hiking', caption: 'Exploring possibilities beyond everyday learning.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8431.JPG'), alt: 'Outdoor hiking experience photograph.', title: 'Mountain hiking', caption: 'Adventure, discovery and lasting memories.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8432.JPG'), alt: 'School hiking activity photograph.', title: 'Mountain hiking', caption: 'Learning from the world around us.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8433.JPG'), alt: 'Mountain hiking gallery photograph.', title: 'Mountain hiking', caption: 'Building confidence through exploration.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8434.JPG'), alt: 'Outdoor learning photograph.', title: 'Mountain hiking', caption: 'Discovering the value of real-world experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8435.JPG'), alt: 'Mountain hiking activity photograph.', title: 'Mountain hiking', caption: 'Curiosity and growth through outdoor adventure.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8436.JPG'), alt: 'School hiking gallery photograph.', title: 'Mountain hiking', caption: 'Creating lasting memories through exploration.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8437.JPG'), alt: 'Outdoor adventure photograph.', title: 'Mountain hiking', caption: 'Learning through challenges and new experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8438.JPG'), alt: 'Mountain hiking experience photograph.', title: 'Mountain hiking', caption: 'Exploring together and growing in confidence.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8439.JPG'), alt: 'School outdoor activity photograph.', title: 'Mountain hiking', caption: 'Discovering opportunities for learning outdoors.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8440.JPG'), alt: 'Mountain hiking gallery photograph.', title: 'Mountain hiking', caption: 'Adventure and learning in every moment.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8441.JPG'), alt: 'Outdoor hiking photograph.', title: 'Mountain hiking', caption: 'Exploration that inspires confidence and curiosity.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8442.JPG'), alt: 'Mountain hiking activity photograph.', title: 'Mountain hiking', caption: 'Growing through discovery and outdoor experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8443.JPG'), alt: 'School hiking experience photograph.', title: 'Mountain hiking', caption: 'Building meaningful connections through adventure.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8444.JPG'), alt: 'Outdoor learning gallery photograph.', title: 'Mountain hiking', caption: 'Learning beyond the classroom walls.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8445.JPG'), alt: 'Mountain hiking photograph.', title: 'Mountain hiking', caption: 'New discoveries and memorable experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8446.JPG'), alt: 'Outdoor exploration photograph.', title: 'Mountain hiking', caption: 'Developing courage through new experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8447.JPG'), alt: 'Mountain hiking gallery photograph.', title: 'Mountain hiking', caption: 'Adventure and exploration beyond familiar spaces.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8448.JPG'), alt: 'School hiking activity photograph.', title: 'Mountain hiking', caption: 'Learning, discovery and personal development.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8449.JPG'), alt: 'Outdoor adventure gallery photograph.', title: 'Mountain hiking', caption: 'Creating memories through meaningful experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8450.JPG'), alt: 'Mountain hiking photograph.', title: 'Mountain hiking', caption: 'Discovering new possibilities through exploration.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8451.JPG'), alt: 'School outdoor learning photograph.', title: 'Mountain hiking', caption: 'Building confidence and curiosity outdoors.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8452.JPG'), alt: 'Mountain hiking activity photograph.', title: 'Mountain hiking', caption: 'Exploring, learning and creating lasting memories.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8454.JPG'), alt: 'Outdoor hiking experience photograph.', title: 'Mountain hiking', caption: 'A meaningful journey of discovery.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8455.JPG'), alt: 'School hiking gallery photograph.', title: 'Mountain hiking', caption: 'Adventure that encourages resilience and growth.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8456.JPG'), alt: 'Mountain hiking photograph.', title: 'Mountain hiking', caption: 'Learning through exploration and shared experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8457.JPG'), alt: 'Outdoor adventure photograph.', title: 'Mountain hiking', caption: 'Discovering the world beyond the classroom.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8458.JPG'), alt: 'School mountain hiking photograph.', title: 'Mountain hiking', caption: 'Observation, teamwork and physical confidence in one experience.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8459.JPG'), alt: 'Mountain hiking gallery photograph.', title: 'Mountain hiking', caption: 'Creating meaningful outdoor learning experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8460.JPG'), alt: 'Outdoor exploration photograph.', title: 'Mountain hiking', caption: 'A journey of learning, confidence and discovery.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8461.JPG'), alt: 'School hiking activity photograph.', title: 'Mountain hiking', caption: 'Growing through challenges and shared adventure.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8462.JPG'), alt: 'Mountain hiking photograph.', title: 'Mountain hiking', caption: 'Exploring new perspectives beyond the classroom.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8463.JPG'), alt: 'Outdoor learning gallery photograph.', title: 'Mountain hiking', caption: 'Memorable experiences that inspire curiosity.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8464.JPG'), alt: 'Mountain hiking activity photograph.', title: 'Mountain hiking', caption: 'Learning and growing through outdoor discovery.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8465.JPG'), alt: 'School outdoor adventure photograph.', title: 'Mountain hiking', caption: 'Building confidence through meaningful experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8466.JPG'), alt: 'Mountain hiking gallery photograph.', title: 'Mountain hiking', caption: 'Adventure and exploration in the natural world.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8467.JPG'), alt: 'Outdoor hiking photograph.', title: 'Mountain hiking', caption: 'Discovering new opportunities to learn and grow.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8468.JPG'), alt: 'Mountain hiking experience photograph.', title: 'Mountain hiking', caption: 'Learning through real-world exploration.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8470.JPG'), alt: 'School hiking gallery photograph.', title: 'Mountain hiking', caption: 'Building memories through outdoor adventures.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8475.JPG'), alt: 'Outdoor exploration activity photograph.', title: 'Mountain hiking', caption: 'Confidence, curiosity and shared experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8476.JPG'), alt: 'Mountain hiking photograph.', title: 'Mountain hiking', caption: 'Exploring the world with curiosity and courage.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8477.JPG'), alt: 'School outdoor learning photograph.', title: 'Mountain hiking', caption: 'Meaningful learning beyond the classroom.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8478.JPG'), alt: 'Mountain hiking gallery photograph.', title: 'Mountain hiking', caption: 'Discovering nature and building confidence.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8479.JPG'), alt: 'Outdoor hiking activity photograph.', title: 'Mountain hiking', caption: 'A shared experience of learning and exploration.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8480.JPG'), alt: 'Mountain hiking photograph.', title: 'Mountain hiking', caption: 'New experiences that encourage personal growth.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8481.JPG'), alt: 'School hiking gallery photograph.', title: 'Mountain hiking', caption: 'Adventure, curiosity and memorable discoveries.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8482.JPG'), alt: 'Outdoor learning activity photograph.', title: 'Mountain hiking', caption: 'Exploring beyond the classroom with confidence.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8483.JPG'), alt: 'Mountain hiking experience photograph.', title: 'Mountain hiking', caption: 'Learning through outdoor adventure and discovery.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8485.JPG'), alt: 'School outdoor exploration photograph.', title: 'Mountain hiking', caption: 'Creating lasting memories through new experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8486.JPG'), alt: 'Mountain hiking gallery photograph.', title: 'Mountain hiking', caption: 'Building confidence and a spirit of exploration.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8490.JPG'), alt: 'Outdoor hiking photograph.', title: 'Mountain hiking', caption: 'Discovering new perspectives through adventure.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8491.JPG'), alt: 'Mountain hiking activity photograph.', title: 'Mountain hiking', caption: 'Learning, exploration and shared experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8492.JPG'), alt: 'School hiking gallery photograph.', title: 'Mountain hiking', caption: 'An opportunity for growth beyond the classroom.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8493.JPG'), alt: 'Outdoor adventure photograph.', title: 'Mountain hiking', caption: 'Creating meaningful moments through exploration.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8495.JPG'), alt: 'Mountain hiking photograph.', title: 'Mountain hiking', caption: 'Discovering the joy of outdoor learning.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8496.JPG'), alt: 'School hiking experience photograph.', title: 'Mountain hiking', caption: 'Confidence, discovery and personal growth.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8497.JPG'), alt: 'Outdoor exploration gallery photograph.', title: 'Mountain hiking', caption: 'Learning through new challenges and experiences.' },
  { src: asset('/images/MOUNTAIN HIKING/IMG_8498.JPG'), alt: 'Mountain hiking activity photograph.', title: 'Mountain hiking', caption: 'Lasting memories from learning beyond the classroom.' },
].map((slide) => ({
  ...slide,
  src: slide.src.replace(/\.JPG$/, '.webp'),
}));

const galleryItems = [
  { label: 'Classroom', title: 'They explore.', meta: 'Curiosity meets real-world learning.', tone: 'story-1', image: asset('/images/they-explore.png') },
  { label: 'Innovation', title: 'They build.', meta: 'Projects, coding and experimentation in motion.', tone: 'story-2', image: asset('/images/coding/coding.png') },
  { label: 'Art', title: 'They create.', meta: 'Expression, craft and imagination become visible.', tone: 'story-3', image: asset('/images/they-create.png') },
  { label: 'Events', title: 'They present.', meta: 'Confidence grows through performance and public voice.', tone: 'story-1', image: asset('/images/they-present.png') },
  { label: 'Leadership', title: 'They lead.', meta: 'Responsibility, initiative and citizenship in action.', tone: 'story-2', image: asset('/images/they-lead.png') },
  { label: 'Community', title: 'They belong.', meta: 'A warm culture of encouragement and purpose.', tone: 'story-3', image: asset('/images/students/ccms-kids.png') },
  { label: 'Play', title: 'They wonder.', meta: 'Joy, movement and discovery are part of the daily rhythm.', tone: 'story-1', image: asset('/images/school/IMG_9838.jpg') },
  { label: 'Creativity', title: 'They imagine.', meta: 'Hands-on making turns inspiration into confidence.', tone: 'story-2', image: asset('/images/they-question.png') },
  { label: 'Growth', title: 'They thrive.', meta: 'Every achievement is a step toward a fuller sense of self.', tone: 'story-3', image: asset('/images/campus/sch_build.jpeg') },
  { label: 'Art', title: 'The Cuddles experience.', meta: 'A creative learning culture in full view.', tone: 'story-1', image: asset('/images/art/the-cuddles-experience.png') },
  { label: 'Technology', title: 'Digital curiosity.', meta: 'Students are building ideas, not just learning tools.', tone: 'story-2', image: asset('/images/they-question.png') },
  { label: 'Mountain hiking', title: 'Trail learning.', meta: 'Confidence, teamwork and outdoor discovery on the move.', tone: 'story-3', image: asset('/images/MOUNTAIN HIKING/IMG_8240.webp') },
  { label: 'Community', title: 'School life.', meta: 'Daily moments, belonging and authentic togetherness.', tone: 'story-1', image: asset('/images/students/circle.png') },
];

const filterOptions = ['All', 'Classroom', 'Innovation', 'Art', 'Events', 'Leadership', 'Community', 'Play', 'Creativity', 'Growth', 'Technology', 'Mountain hiking'];

export function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % hikingSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const filtered = useMemo(() => {
    if (filter === 'All') return galleryItems;
    return galleryItems.filter((item) => item.label === filter);
  }, [filter]);

  const currentSlide = hikingSlides[activeSlide];
  const thumbnailStartIndex = Math.min(Math.max(activeSlide - 2, 0), hikingSlides.length - 5);
  const visibleSlides = hikingSlides.slice(thumbnailStartIndex, thumbnailStartIndex + 5);

  return (
    <>
      <Seo {...pageSeo.gallery} />
      <div className="page-shell-inner">
        <section className="page-intro section-maroon" data-reveal>
          <div className="container page-intro-grid">
            <div>
              <p className="eyebrow">Gallery</p>
              <h1>A Visual Story Of Childhood, Creativity And <span className="spring-accent">Confidence</span>.</h1>
            </div>
            <p>
              School life extends beyond the classroom — through discovery, performance, teamwork, leadership and outdoor adventure.
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
          <div className="container gallery-showcase">
            <div className="gallery-showcase-main">
              <div className="gallery-featured gallery-hero-card">
                <img src={currentSlide.src} alt={currentSlide.alt} decoding="async" />
              </div>
              <div className="gallery-hero-caption">
                <span className="eyebrow small">Featured experience</span>
                <h2>{currentSlide.title}</h2>
                <p>{currentSlide.caption}</p>
              </div>
            </div>

            <div className="gallery-featured-small gallery-hero-side">
              <img src={images.schoolFeature.src} alt={images.schoolFeature.alt} data-remote={images.schoolFeature.remote} loading="lazy" decoding="async" />
            </div>
            <div className="gallery-featured-small gallery-hero-side">
              <img src={images.storyMain.src} alt={images.storyMain.alt} data-remote={images.storyMain.remote} loading="lazy" decoding="async" />
            </div>
          </div>

          <div className="container gallery-hero-controls" aria-label="Featured image controls">
            <div className="gallery-mini-rail" aria-label="Featured gallery thumbnails">
              {visibleSlides.map((slide, visibleIndex) => {
                const index = thumbnailStartIndex + visibleIndex;
                return (
                  <button
                    key={slide.src}
                    type="button"
                    className={index === activeSlide ? 'gallery-thumb active' : 'gallery-thumb'}
                    onClick={() => {
                      setActiveSlide(index);
                      setIsPaused(true);
                    }}
                    aria-label={`View hiking photo ${index + 1} of ${hikingSlides.length}`}
                    aria-current={index === activeSlide ? 'true' : undefined}
                  >
                    <img src={slide.src} alt="" loading="lazy" decoding="async" />
                  </button>
                );
              })}
            </div>

            <div className="gallery-slide-actions">
              <span className="gallery-slide-count" aria-live="polite">
                {String(activeSlide + 1).padStart(2, '0')} / {String(hikingSlides.length).padStart(2, '0')}
              </span>
              <button type="button" className="button button-secondary" onClick={() => setActiveSlide((current) => (current - 1 + hikingSlides.length) % hikingSlides.length)}>
                Previous photo
              </button>
              <button type="button" className="button button-secondary" onClick={() => setActiveSlide((current) => (current + 1) % hikingSlides.length)}>
                Next photo
              </button>
              <button type="button" className="button button-primary" onClick={() => setIsPaused((paused) => !paused)}>
                {isPaused ? 'Resume slideshow' : 'Pause slideshow'}
              </button>
            </div>
          </div>
        </section>

        <section className="section-spacing" data-reveal>
          <div className="container">
            <div className="filter-row" aria-label="Gallery filters">
              {filterOptions.map((value) => (
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
                  key={`${item.label}-${item.title}`}
                  className={`gallery-card ${item.tone}`}
                  data-reveal
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
    </>
  );
}
