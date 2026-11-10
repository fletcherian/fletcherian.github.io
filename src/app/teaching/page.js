import SectionCard from '../components/SectionCard'
import MaterialSymbol from '../components/MaterialSymbol'
import { JsonLd, personNode, profilePageNode } from '../structuredData'
import { openGraphBase, pages, styles, teaching } from '../settings'

export const metadata = {
  title: pages.teaching.title,
  description: pages.teaching.description,
  keywords: pages.teaching.keywords,
  alternates: { canonical: pages.teaching.path },
  openGraph: {
    ...openGraphBase,
    url: pages.teaching.path,
    title: pages.teaching.title,
    description: pages.teaching.description,
  },
}

function Reviews({ reviews }) {
  return (
    <details className={styles.details.root}>
      <summary className={styles.details.summary}>
        <span className={styles.details.control}>
          <span>{pages.teaching.reviewsLabel} ({reviews.length})</span>
          <span className={styles.details.icon}>
            <MaterialSymbol name="expand_more" className={styles.details.iconSvg} />
          </span>
        </span>
      </summary>
      <div className="mt-3 space-y-3">
        {reviews.map((review, i) => (
          <blockquote
            key={i}
            className="border-l-[3px] border-primary/40 dark:border-dark-primary/50 pl-4 text-[14px] leading-relaxed italic text-ink-muted dark:text-dark-ink-muted"
          >
            {review}
          </blockquote>
        ))}
      </div>
    </details>
  )
}

function Course({ course }) {
  return (
    <SectionCard>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h2 className="font-display text-[22px] sm:text-[24px] leading-8 font-medium tracking-[-0.005em]">{course.title}</h2>
          {course.code && <span className={styles.paperTag}>{course.code}</span>}
        </div>
        {course.term && <p className={styles.cvDate}>{course.term}</p>}
      </div>

      <p className={`${styles.cvEntryInstitution} mt-1`}>
        {[course.role, course.institution].filter(Boolean).join(' · ')}
      </p>

      {course.description && (
        <p className="mt-3 text-[15px] leading-[1.85] text-ink dark:text-dark-ink">{course.description}</p>
      )}

      {(course.syllabus || course.rating) && (
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px]">
          {course.syllabus && (
            <a href={course.syllabus} className={styles.actionLink} target="_blank" rel="noopener noreferrer">
              {pages.teaching.syllabusLabel}
            </a>
          )}
          {course.syllabus && course.rating && <span aria-hidden="true" className={styles.muted}>|</span>}
          {course.rating && (
            <span className={styles.muted}>
              {pages.teaching.ratingLabel}: <span className="font-semibold text-ink dark:text-dark-ink">{course.rating}</span>
            </span>
          )}
        </div>
      )}

      {course.reviews?.length > 0 && <Reviews reviews={course.reviews} />}
    </SectionCard>
  )
}

export default function Teaching() {
  return (
    <article className={styles.page}>
      <JsonLd graph={[personNode(), profilePageNode(pages.teaching)]} />

      <h1 className={styles.pageTitle}>{pages.teaching.heading}</h1>

      <div className={styles.sectionStackCompact}>
        {teaching.map((course) => (
          <Course key={`${course.code}-${course.term}`} course={course} />
        ))}
      </div>
    </article>
  )
}
