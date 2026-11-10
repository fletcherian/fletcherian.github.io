// ─────────────────────────────────────────────────────────────────────────────
//  SITE CONTENT — Ian Fletcher
//  Everything specific to you lives in this one file. Edit text here and save;
//  the site rebuilds automatically on GitHub. Files (PDFs, images) go in public/.
//  Field definitions and optional switches are documented in README.md.
// ─────────────────────────────────────────────────────────────────────────────

// Set to false after the job market cycle ends to hide the Job Market page and tags.
const jobMarketActive = true

const content = {

  // ── Site identity ────────────────────────────────────────────────────────
  site: {
    name: 'Ian Fletcher',
    url: 'https://fletcherian.github.io',
    author: 'Ian Fletcher',
    language: 'en',
    locale: 'en_US',
    description: 'Academic website of Ian Fletcher, PhD candidate in Economics at the University of Wyoming, working on behavioral, environmental, and public economics.',
    keywords: ['Ian Fletcher', 'economics job market', '2026-2027 economics job market', 'behavioral economics', 'experimental economics', 'environmental economics', 'public economics', 'intangibility', 'risk reduction', 'prevention policy'],
    license: {
      label: 'CC BY-NC 4.0',
      url: 'https://creativecommons.org/licenses/by-nc/4.0/',
    },
    crawlers: {
      aiTraining: false,
    },
  },

  // ── Profile ──────────────────────────────────────────────────────────────
  profile: {
    title: 'PhD candidate in Economics',
    affiliation: 'University of Wyoming',
    affiliationUrl: 'https://www.uwyo.edu/econ/',
    jobMarket: '2026-2027 economics job market',
    fields: [
      'Behavioral Economics',
      'Experimental Economics',
      'Environmental Economics',
      'Public Economics',
    ],
    // About Me bio. Each entry is a paragraph: a plain string or an array of segments.
    // Segment types: plain string | { text, href } for a link | { text, bold: true } for bold.
    bio: [
      [
        'Welcome! I am a PhD candidate in Economics at the ',
        { text: 'University of Wyoming', href: 'https://www.uwyo.edu/econ/' },
        ' and Assistant Director of the Teton Behavioral and Economic Science Laboratory. I received my B.S. in Mathematics and Economics (2022) and M.S. in Economics (2024) from the University of Wyoming, was a visiting doctoral student at the University of Chicago, and expect to complete my PhD in May 2027.',
      ],
      'I am an applied microeconomist with interests in behavioral, experimental, environmental, and public economics. My research studies how people value investments whose payoffs are uncertain, delayed, or hard to see, with a focus on why prevention policies struggle to earn public support even when they succeed.',
    ],
  },

  // ── Social links ─────────────────────────────────────────────────────────
  // Supported types: email, linkedin, github, x, scholar, orcid.
  socialLinks: [
    { type: 'email', label: 'Email', emailUser: 'ifletche', emailDomain: 'uwyo.edu' },
    { type: 'scholar', label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=HG8q04UAAAAJ&hl=en' },
    { type: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/ianfletcher' },
    { type: 'github', label: 'GitHub', href: 'https://github.com/fletcherian' },
    { type: 'orcid', label: 'ORCID', href: 'https://orcid.org/0009-0007-8292-8951' },
  ],

  // ── Optional features ────────────────────────────────────────────────────
  features: {
    paperPages: false,
    citations: false,
  },

  // ── Research papers ───────────────────────────────────────────────────────
  // section: 'publications' | 'workingPapers' | 'workInProgress' (order set under pages below).
  // Required per entry: slug, section, title, authors, abstract.
  // Optional: date, doiUrl, pdf, slides, code, links[], venue, citation, doi, note, tag,
  //           coauthorLinks, keywords, featured, highlightLabel, summary, featuredNote.
  papers: [
    {
      slug: 'intang-risk-hetrisk',
      section: 'workingPapers',
      title: 'The Intangibility of Risk Reduction under Heterogeneous Risk: Theory and Experimental Evidence',
      authors: ['Ian Fletcher', 'Todd Cherry', 'George Loewenstein'],
      coauthorLinks: { 'Todd Cherry': 'https://tlcherry.weebly.com/' },
      tag: { label: 'Job Market Paper' },
      note: 'Draft available upon request',
      featured: true,
      highlightLabel: 'Job market paper',
      summary: 'Prevention suffers a curse of intangibility: its successes are hard to detect or to attribute to the actions that produced them. A 2×2 lab experiment shows unattributable outcomes push investment the wrong way.',
      date: '2026-08',
      abstract: 'Prevention is systematically underfunded relative to disaster response, even when it yields higher expected returns. Standard explanations (e.g., myopia, discounting, uncertainty, probabilistic reasoning) cannot account for why support erodes after an investment is made. We propose that prevention is cursed by intangibility: its successes are either undetectable or cannot be attributed to the actions that produced them. We formalize this in a model in which the perceived efficacy of a risk-reducing investment updates on realized outcomes rather than on their sources, and show that this generates a two-sided prediction. Following an intangible no-disaster, individuals overinvest; following an intangible disaster, they reverse that increase. We test the model in a 2x2 laboratory experiment in which individuals make repeated investment decisions against both exogenous and endogenous risks, varying baseline exogenous risk (high or low) and the tangibility of the outcome (whether the source of a realized outcome is revealed); outcome detectability is held fixed so that only attributability varies. Both predictions hold, and together they converge: intangibility raises investment by 2.20 tokens after a no-disaster, and a single intangible disaster removes 2.36 of it, leaving the two arms statistically indistinguishable. The pattern survives restricting to uncontrollable disasters, whose incidence is randomly assigned by construction, and risk aversion, ambiguity aversion, and probability weighting cannot generate it, since probabilities are known and fixed across treatments. The difference operates through failed causal attribution rather than risk preferences. The curse of intangibility is therefore structural, not a communication failure.',
      keywords: ['intangibility', 'risk reduction', 'prevention', 'laboratory experiment', 'causal attribution', 'natural disasters'],
    },
    {
      slug: 'hubbard_etal2025_ncee',
      section: 'publications',
      title: 'The public overestimates and prefers greater tolerance for grizzly bear encounters than defined by the United States management guidelines',
      authors: ['Chandler Hubbard', 'Ian Fletcher', 'Todd L. Cherry', 'David Finnoff', 'Jacob Hochard'],
      coauthorLinks: {
        'Chandler Hubbard': 'https://sites.google.com/view/chandlerhubbard',
        'Todd L. Cherry': 'https://tlcherry.weebly.com/',
        'Jacob Hochard': 'https://www.jacobhochard.com/',
      },
      featured: true,
      highlightLabel: 'Published article',
      summary: 'Survey data and predictive mapping show the public tolerates more grizzly bear encounters than federal management guidelines assume.',
      featuredNote: '2025',
      venue: 'Communications Earth & Environment',
      citation: '6, 1022 (2025).',
      date: '2025-11-20',
      doi: '10.1038/s43247-025-02969-9',
      doiUrl: 'https://doi.org/10.1038/s43247-025-02969-9',
      code: 'https://github.com/fletcherian/grizzly-risk',
      links: [{ label: 'BibTeX', href: '/files/bears.bib' }],
      abstract: 'Large predators are returning to landscapes where they have been absent for centuries, but human preferences complicate their recovery. Communities often resist predator recovery because of perceived risks, limiting what managers call social carrying capacity, or the level of human tolerance for coexisting with wildlife. Yet practical methods for measuring and integrating social carrying capacity into management decisions remain limited. To address this, we combine geospatial and survey data to model individual tolerance for the frequency and severity of grizzly bear encounters. The resulting estimates predict and map zip code-level tolerance across the region. Findings show that people tend to overestimate management’s tolerance of encounters than current federal guidelines. This approach provides a pragmatic tool to incorporate social carrying capacity into decisions about predator recovery and reintroduction, helping balance ecological goals with public acceptance.',
      keywords: ['grizzly bears', 'social carrying capacity', 'wildlife management', 'risk tolerance', 'survey'],
    },
    {
      slug: 'carbon',
      section: 'workingPapers',
      title: 'Experiencing Carbon Pricing',
      authors: ['Stefano Carattini', 'Ian Fletcher', 'Chad Kendall', 'Michael Price', 'Arthur Vu'],
      coauthorLinks: {
        'Stefano Carattini': 'https://sites.google.com/site/stefanocarattini/',
        'Chad Kendall': 'https://sites.google.com/site/chadwkendall/home',
      },
      note: 'Under review at the Journal of the European Economic Association',
      date: '2025-10',
      links: [{ label: 'NBER WP #34559', href: 'https://www.nber.org/papers/w34559' }],
      abstract: 'Many socially desirable policies are not implemented because of their ex-ante unpopularity, but this unpopularity may be overcome through experience with the policy. In this paper, we examine how opposition to carbon pricing in the state of Washington turned into support after voters experienced a cap-and-trade policy with revenues earmarked for environmental purposes -- "cap-and-invest." Analyzing voting behavior at the census block group level, we observe that support varies by political affiliation as expected, but experience consistently increases support across the board. Using a proprietary survey, we further show that the higher support among voters in Washington state is specific to the cap-and-invest policy they experienced; support for carbon pricing, or climate policies more generally, is unaffected.',
      keywords: ['carbon pricing', 'cap-and-invest', 'policy experience', 'voting', 'Washington'],
    },
    {
      slug: 'intang-other-policyforum',
      section: 'workingPapers',
      title: 'The Curse of Intangibility in Risk Reduction',
      authors: ['Todd L. Cherry', 'Ian Fletcher', 'George F. Loewenstein', 'Mary F. Evans', 'Paul J. Ferraro', 'David Finnoff', 'Jacob P. Hochard', 'Bryan Leonard', 'Peter Martinsson', 'James J. Murphy', 'Jason F. Shogren', 'Leaf Van Boven', 'Daan van Soest', 'Christian Vossler'],
      note: 'Under review at Science (Policy Forum)',
      date: '2026-01',
      abstract: 'Policies that protect people and property often succeed precisely when nothing happens, while disaster response succeeds only after prevention fails. Because successful prevention leaves no visible trace, people systematically undervalue it—even when risks are well understood and cost-benefit evidence is strong. We call this the "curse of intangibility" and argue it stems from two distinct failures: outcomes that go undetected, and outcomes that cannot be attributed to a specific policy, agency, or official. A simple typology built on these dimensions identifies which risk-reduction policies face the steepest political penalty, with severity-reducing interventions (such as wildfire fuel treatments) the hardest hit, since the disaster the public sees masks the worse one that was averted. Distinguishing intangibility from related concepts like risk, uncertainty, and time discounting, we show why better information alone cannot fix the problem, and propose institutional reforms to make avoided harms visible enough to count and reward.',
      keywords: ['intangibility', 'prevention policy', 'political credit', 'institutions'],
    },
    {
      slug: 'dams',
      section: 'workingPapers',
      title: 'Recovering Ecological Value from Observed Management: A Non-Autonomous Model of Jackson Lake',
      authors: ['Ian Fletcher', 'David Finnoff', 'Sean K. Bertalot'],
      coauthorLinks: { 'Sean K. Bertalot': 'https://seanbertalot.weebly.com/' },
      note: 'Under review at Land Economics',
      date: '2025-10',
      abstract: 'Reservoir managers balance competing economic demands, institutional constraints, and ecological processes, but how these forces jointly determine release decisions is unclear. Focusing on Jackson Lake, we develop a seasonal optimal control model and compare predicted storage and release paths with observed management. We first estimate an economic model using hydrological and economic data, then recover the ecological value implied by the deviations from the observed management. These deviations follow gross primary production, and incorporating ecological processes substantially improves the model’s fit to observed management. Accounting for unpriced ecological services may therefore be important for evaluating reservoir policy and management decisions.',
      keywords: ['reservoir management', 'optimal control', 'ecological value', 'Jackson Lake'],
    },
    {
      slug: 'intang-risk-group',
      section: 'workInProgress',
      title: 'Natural Disasters and the Intangibility of Risk Reduction: Theory and Experimental Evidence',
      authors: ['Ian Fletcher', 'Todd Cherry', 'George Loewenstein'],
      coauthorLinks: { 'Todd Cherry': 'https://tlcherry.weebly.com/' },
      date: '2025-10',
      abstract: 'In this paper, we examine how the observability of disaster sources influences willingness to invest collectively in mitigating an endogenous risk. We begin by developing a theoretical model in which an agent invests to reduce a collective endogenous risk. Feedback on the source of realized losses shifts agents\' beliefs about the efficacy of investment. We then test hypotheses derived from the model in a 2×2 laboratory experiment that varies the mitigation mechanism (continuous vs. threshold) and the tangibility of the outcome (observable vs. unobservable source feedback). From this experiment, we find three main results. First, across both conditions, prior mitigation success encourages future mitigation. Second, with tangible outcomes, participants respond more strongly to endogenous losses than exogenous ones. Third, with intangible outcomes, disasters with unknown sources reduce future contributions. However, the threshold treatment moderates this effect, where coordination failures are most salient. These findings suggest that the effectiveness of mitigation and source feedback jointly determine investment in prevention efforts. This evidence suggests that policymakers should design institutions that make prevention successes visible so they can reward the counterfactual benefits of prevention.',
      keywords: ['intangibility', 'collective risk', 'public goods', 'laboratory experiment'],
    },
    {
      slug: 'ece',
      section: 'workInProgress',
      title: 'From Survival to Learning: The Evolution of Early Childhood Investment Over the Development Cycle',
      authors: ['Faith Fatchen', 'Ian Fletcher', 'Uditi Karna', 'Faisal Kattan', 'John List'],
      coauthorLinks: { 'John List': 'https://voices.uchicago.edu/jlist/' },
      date: '2026-01',
      abstract: 'This paper examines how early childhood development (ECD) investments evolve as economies grow. We develop a conceptual framework that emphasizes the interplay between survival and learning and predicts a shift from health-focused to education-focused investments as incomes rise and survival rates improve. The framework generates testable predictions about investment sequencing, non-linear spending patterns, threshold effects, and heterogeneity in treatment effects across development contexts. Integrating insights from the existing literature with new cross-country evidence, we present suggestive support for several predictions: pre-primary education spending rises sharply with income and healthcare quality; countries prioritize survival-oriented investments before expanding education; and health interventions deliver stronger impacts in low-income settings, whereas education interventions yield greater returns in higher-income contexts. While data limitations constrain comprehensive testing, our findings underscore the need for tailored investment strategies, prioritizing survival-focused interventions where basic health needs remain unmet and scaling up early education once foundational thresholds are met, rather than one-size-fits-all ECD policies.',
      keywords: ['early childhood development', 'health', 'education', 'economic development'],
    },
    {
      slug: 'intang-severity',
      section: 'workInProgress',
      title: 'Uncertain Efficacy and the Intangibility of Risk Reduction: Theory and Experimental Evidence',
      authors: ['Ian Fletcher'],
      note: 'In preparation',
      date: '2025-10',
      abstract: 'The project examines when the structure of a risk environment, rather than withheld feedback, makes the benefits of protection intangible, and how that shapes collective investment in disaster risk reduction. Using a public-goods model and a 2×2 lab experiment with three-person groups, it crosses how protection works (preventing disasters vs. reducing their losses) with whether its effectiveness is certain. Holding the return to investment constant, it tests whether contributions decline when outcomes cannot reveal what protection achieved, separating the roles of non-events, uncertain efficacy, and shared responsibility in sustaining preventive behavior.',
      keywords: ['intangibility', 'severity reduction', 'uncertain efficacy', 'laboratory experiment'],
    },
  ],

  // ── Talks ────────────────────────────────────────────────────────────────
  // Newest first. paper (optional) is a paper slug above; it links the talk to that paper.
  talks: [
    { date: '2026-04-25', title: 'Heterogeneous Risks and the Intangibility of Risk Reduction: Theory and Experimental Evidence', venue: '2026 Appalachian Experimental & Environmental Economics Workshop', location: 'Boone, NC', paper: 'intang-risk-hetrisk' },
    { date: '2025-05-29', title: 'Natural Disasters and the Intangibility of Risk Reduction: Experimental Evidence', venue: 'Association of Environmental and Resource Economists 2025 Summer Meeting', location: 'Albuquerque, NM', paper: 'intang-risk-group' },
    { date: '2025-01-24', title: 'The Illusion of Suboptimal Dam Management: The Role of Ecology in Managed Systems', venue: 'Wyoming Anticipating the Climate-Water Transition (WyACT) All Hands Meeting', location: 'University of Wyoming', paper: 'dams' },
    { date: '2024-11-25', title: 'The Illusion of Suboptimal Dam Management: The Role of Ecology in Managed Systems', venue: 'Southern Economic Association 94th Annual Meeting', location: 'Washington, D.C.', paper: 'dams' },
    { date: '2024-10-18', title: 'The Effect of College Sports on Student Enrollment: Evidence from a 1982 Media-Sharing Agreement', venue: 'University of Wyoming Department of Economics Second-Summer Paper Symposium', location: 'University of Wyoming', note: 'Master’s thesis. Committee: Alexander James, Klaas van ’t Veld, and Jacob Hochard.' },
  ],

  // ── Teaching ─────────────────────────────────────────────────────────────
  // Newest first. rating, syllabus, description, and reviews are optional.
  teaching: [
    {
      title: 'Intermediate Microeconomics (Accelerated)',
      code: 'ECON 3020',
      term: 'Summer 2025',
      role: 'Primary Instructor',
      institution: 'University of Wyoming, Department of Economics',
      description: 'Relative to a beginning course, this is a more advanced course on the theory of demand, production, cost, and supply; and the theory of the firm, including market price under monopoly, monopolistic competition, and oligopoly. Attention is given to the theory of factor prices and topics on welfare economics.',
      syllabus: '/files/ECON3020_Syllabus.pdf',
      rating: '3.86/5',
      reviews: [
        'The instructor was very helpful and responsive to emails. He was flexible and willing to work with students, I really appreciated this. The course was a doozy giving that it is only 3-weeks long but surprisingly manageable.',
        'The instructor was very flexible when it came to the assignments, understanding that we do have lives outside of this summer class and have other priorities as well. He responds to emails in a timely manner and gets the grading done in a timely manner. I appreciated how the class was set up and that I could do as much or little in a day without getting too far ahead or behind.',
      ],
    },
    {
      title: 'Principles of Finance',
      code: 'FIN 2100',
      term: 'Spring 2025',
      role: 'Primary Instructor',
      institution: 'University of Wyoming, Department of Accounting & Finance',
      description: 'Studies the management of capital in a business. Students learn how to use the time value of money to value cash flows and how to perform a financial valuation of a firm\'s assets and liabilities.',
      syllabus: '/files/FIN2100_Syllabus.pdf',
      rating: '3.91/5',
      reviews: [
        'Ian did a great job teaching this course, a standout quality of his was the relationships he formed with his students, he is very understanding and has a great willingness to work with people.',
        'I enjoyed how interactive this course was. I also enjoyed that it felt less pressured and like the professor actually wanted us to learn and feel confident with the material instead of making us feel bad about not knowing it, and really took his time making sure we understood the content.',
        'Ian did absolutely amazing in building 1 on 1 relationships with students as well as helping them whenever they needed it, I have not seen that sort of connection and relation building out of many professors here at UW because of this it was very easy to ask Ian for help and get advice from him. I would definitely take another one of Ian\'s classes.',
      ],
    },
  ],

  // ── Curriculum Vitae ─────────────────────────────────────────────────────
  cv: {
    education: [
      { date: '2027', dateNote: '(expected)', title: 'Ph.D. Economics', institution: 'University of Wyoming', note: 'Dissertation: Decisions under Risk, Uncertainty, and Intangibility' },
      { date: '2024', title: 'M.Sc. Economics', institution: 'University of Wyoming' },
      { date: '2022', title: 'B.S. Mathematics and Economics; Honors Minor', institution: 'University of Wyoming' },
    ],
    experience: [
      { date: '2025–present', title: 'Assistant Director', institution: 'Teton Behavioral and Economic Science Laboratory, University of Wyoming' },
      { date: 'Jun–Jul 2026', title: 'Participant, Summer Institute in Behavioral Economics', institution: 'Russell Sage Foundation, Harvard University' },
      { date: 'Jun–Aug 2024', title: 'Visiting Doctoral Student', institution: 'University of Chicago (Prof. John List)' },
      { date: '2022–2025', title: 'Research Assistant, WyACT (NSF EPSCoR)', institution: 'University of Wyoming' },
    ],
  },

  // ── Assets ───────────────────────────────────────────────────────────────
  assets: {
    profileImage: '/hiking.jpg',
    profileImageAlt: 'Ian Fletcher profile photo',
    socialImage: '/profile-social.jpg',
    profileImageSizes: '(max-width: 768px) 144px, 192px',
    cvPdf: '/files/Fletcher-Oct26.pdf',
    icon: '/favicon.ico',
    appleIcon: '/apple-touch-icon-180x180.png',
  },

  // ── Job Market ────────────────────────────────────────────────────────────
  jobMarket: {
    active: jobMarketActive,
    homeStatus: 'I am on the 2026-27 academic job market.',
    homeLink: {
      text: 'See my job market paper',
      label: 'here',
    },
    fields: ['Behavioral Economics', 'Experimental Economics', 'Environmental Economics', 'Public Economics'],
    contact: { emailUser: 'ifletche', emailDomain: 'uwyo.edu' },
    jmpSlug: 'intang-risk-hetrisk',
    cvPdf: '/files/Fletcher-Oct26.pdf',
    cvDescription: 'A PDF of my current curriculum vitae (updated October 2026).',
    pitch: 'I am on the 2026-27 academic job market. My job market paper shows that prevention suffers a curse of intangibility: because its successes are hard to detect or attribute, people misjudge its efficacy and investment moves the wrong way. Below are my job market paper, CV, and references.',
    references: [
      { name: 'Todd L. Cherry (Chair)', institution: 'University of Wyoming', url: 'https://tlcherry.weebly.com/' },
      { name: 'John A. List', institution: 'University of Chicago', url: 'https://voices.uchicago.edu/jlist/' },
      { name: 'George Loewenstein', institution: 'Carnegie Mellon University' },
      { name: 'Jason F. Shogren', institution: 'University of Wyoming' },
      { name: 'Jacob Hochard', institution: 'University of Wyoming', url: 'https://www.jacobhochard.com/' },
    ],
  },

  // ── Text overrides ───────────────────────────────────────────────────────
  pages: {
    research: {
      featuredTitle: 'Featured',
      sections: [
        { key: 'publications', title: 'Publications' },
        { key: 'workingPapers', title: 'Working Papers' },
        { key: 'workInProgress', title: 'Work in Progress' },
      ],
    },
  },

}

module.exports = content
