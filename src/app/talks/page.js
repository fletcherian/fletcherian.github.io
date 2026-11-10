import Link from 'next/link'
import SectionCard from '../components/SectionCard'
import { JsonLd, personNode, profilePageNode } from '../structuredData'
import { openGraphBase, pages, papers, site, styles, talks } from '../settings'
import { paperPath } from '../papers'

export const metadata = {
  title: pages.talks.title,
  description: pages.talks.description,
  keywords: pages.talks.keywords,
  alternates: { canonical: pages.talks.path },
  openGraph: {
    ...openGraphBase,
    url: pages.talks.path,
    title: pages.talks.title,
    description: pages.talks.description,
  },
}

// "2026-04-25" becomes "Apr 2026".
function formatTalkDate(iso) {
  const [year, month] = (iso || '').split('-').map(Number)
  if (!year) return ''
  if (!month) return String(year)
  return new Intl.DateTimeFormat((site.locale || 'en-US').replace('_', '-'), { month: 'short', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(Date.UTC(year, month - 1, 1)))
}

function TalkEntry({ talk }) {
  const paper = talk.paper && papers.find((p) => p.slug === talk.paper)
  return (
    <article className={styles.cvEntry}>
      <div className={styles.cvDate}>
        <p>{formatTalkDate(talk.date)}</p>
      </div>
      <div className={styles.cvEntryBody}>
        <h3 className={styles.cvEntryTitle}>{talk.title}</h3>
        <p className={styles.cvEntryInstitution}>
          {talk.venue}{talk.location ? ` · ${talk.location}` : ''}
        </p>
        {talk.note && <p className={styles.paperSecondary}>{talk.note}</p>}
        {paper && (
          <p className="mt-1 text-[14px]">
            <Link href={paperPath(paper)} className={styles.actionLink}>{pages.talks.paperLinkLabel}</Link>
          </p>
        )}
      </div>
    </article>
  )
}

export default function Talks() {
  const byYear = talks.reduce((groups, talk) => {
    const year = (talk.date || '').slice(0, 4) || 'Other'
    ;(groups[year] ||= []).push(talk)
    return groups
  }, {})
  const years = Object.keys(byYear).sort((a, b) => b.localeCompare(a))

  return (
    <article className={styles.page}>
      <JsonLd graph={[personNode(), profilePageNode(pages.talks)]} />

      <h1 className={styles.pageTitle}>{pages.talks.heading}</h1>

      <div className={styles.sectionStackCompact}>
        {years.map((year) => (
          <SectionCard key={year} title={year} titleClassName={styles.sectionTitleSpacious}>
            <div className={styles.cvEntryList}>
              {byYear[year].map((talk) => (
                <TalkEntry key={`${talk.date}-${talk.title}`} talk={talk} />
              ))}
            </div>
          </SectionCard>
        ))}
      </div>
    </article>
  )
}
