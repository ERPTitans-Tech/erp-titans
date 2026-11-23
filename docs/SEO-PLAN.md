# ERP Titans SEO Plan
*Goal: rank as the leading Odoo partner for Calgary, and be found across Canada and the USA (TX, CA, MT, NY, FL, AZ and beyond).*
*Last updated: November 23, 2026*

---

## 0. Status right now (Nov 23, 2026) and why the site isn't showing yet

- **Google has indexed only 4 pages, and they're the old versions** (crawled ~5 days ago with the old titles). None of the new SEO work (titles, Calgary page, location and service pages) has been crawled yet, so it cannot rank yet.
- **Fix:** submit the site to Google Search Console and request indexing (section 3, "Do today"). Without this, Google may take weeks to discover the new pages on its own.
- **"odoo implementation" with no location** is one of the most competitive Odoo searches in North America: odoo.com itself, large Gold partners and directories hold those spots. Realistic path: win the specific searches first (Calgary, Alberta, "Odoo rescue", "QuickBooks to Odoo Canada", cannabis ERP), then climb the broad terms as reviews, links and listings build up.
- **Domains:** two regional sites from one codebase. **https://erptitans.ca is the Canadian site (en-CA)** and **https://erptitans.com is the US / international site (en-US, default)**. Each is canonical to itself and lists the other as an hreflang alternate, so Google shows .ca to Canadian searchers and .com elsewhere, without treating them as duplicates. Each domain has its own sitemap and robots.txt. www.erptitans.com redirects to erptitans.com.
- **Offices:** Calgary, Alberta and Austin, Texas. erptitans.ca shows Calgary; erptitans.com shows both Calgary and Austin (site text, footer and structured data). The Odoo partner listing (Austin, TX) is consistent with the .com site.
- **Odoo partner listing:** naming the cannabis client there is fine (confirmed); only the ERP Titans website keeps the client anonymous.

---

## 1. Reality check: how rankings work

No one can guarantee the #1 position. Google decides. Local results are based on three things:

- **Relevance:** how well your website and Google Business Profile match the search. *The website work below covers this.*
- **Distance:** how close you are to the searcher. Calgary searches favour a verified Calgary business.
- **Prominence:** how well-known and trusted you are: reviews, review score, links, articles and directory listings across the web. *This is mostly off-site work you need to do (section 3).*

**What ranks today for "Odoo partner Calgary":** mostly odoo.com partner directory listings, Clutch, GoodFirms and ERPResearch profiles, and dedicated Calgary landing pages. Competitors with Gold status and many references rank on that prominence, not on their websites alone.

**Rule:** never name competitors or make unprovable "best" / "#1" claims on the website. That creates advertising-law risk and costs buyers' trust. Win with proof: case studies, reviews, certifications.

---

## 2. Done on the website (November 2026)

### Technical foundation
- Keyword-focused title and description on every page (e.g. homepage: "Odoo Partner in Calgary, Canada & USA").
- Two regional sites: erptitans.ca (en-CA) and erptitans.com (en-US), each self-canonical with hreflang alternates; per-domain sitemaps.
- Structured data (schema.org): ERP Titans as a ProfessionalService in Calgary, AB; Service, FAQPage and Breadcrumb data on every location and service page.
- Auto-generated `sitemap.xml` and `robots.txt`; default social-share image (LinkedIn, Facebook, X previews).
- Homepage line: "Official Odoo Ready Partner · Calgary, Alberta · Serving Canada & USA".

### Location pages (each with genuinely local content: tax setup in Odoo, time zone, regulators, industries, cities, FAQs)
| Page | URL |
|---|---|
| Calgary (priority) | /odoo-partner-calgary |
| Alberta | /odoo-implementation-alberta |
| British Columbia | /erp-consulting-british-columbia |
| Canada | /odoo-partner-canada |
| USA | /odoo-partner-usa |
| Texas | /odoo-partner-texas |
| California | /odoo-partner-california |
| Montana | /odoo-partner-montana |
| New York | /odoo-partner-new-york |
| Florida | /odoo-partner-florida |
| Arizona | /odoo-partner-arizona |
| Hub | /locations |

### Service pages (what people search besides location)
| Search intent | URL |
|---|---|
| Fix a failed / stalled Odoo implementation (our differentiator) | /odoo-rescue |
| Odoo implementation | /odoo-implementation |
| Migration from QuickBooks / Sage / NetSuite, Odoo upgrades | /odoo-migration |
| Customization & development | /odoo-customization |
| Integrations (Shopify, ShipStation, Power BI, APIs) | /odoo-integration |
| Support & managed services | /odoo-support |

### Internal linking
Footer links to every service and location page; location pages link to all services; industry pages link to Calgary/Canada/USA; service pillars link to their pages.

---

## 3. Your action list (off-site: needed to rank first)

### Do today (30 minutes)
- [ ] **Google Search Console:** go to search.google.com/search-console → *Add property* → **Domain** → `erptitans.com`. Verify with the DNS TXT record (add it in Hostinger → Domains → DNS). Then:
  - *Sitemaps* → submit `https://erptitans.com/sitemap.xml`.
  - *URL Inspection* → paste each priority URL → **Request indexing**: `/`, `/odoo-partner-calgary`, `/odoo-implementation`, `/odoo-rescue`, `/odoo-partner-canada`, `/odoo-partner-usa`, `/odoo`, `/services`.
- [ ] **Add erptitans.ca as a second Search Console property** (Domain property, DNS TXT record in Cloudflare) and submit `https://erptitans.ca/sitemap.xml`. Request indexing for the .ca home and `/odoo-partner-calgary`.
- [ ] **Cloudflare: redirect www.erptitans.ca → erptitans.ca** (stays on .ca). Cloudflare currently forwards www.erptitans.ca to the server as erptitans.com, so the site can't tell it's the Canadian address. In Cloudflare → erptitans.ca → Rules → Redirect Rules → Create rule: when *Hostname equals www.erptitans.ca*, dynamic redirect to `concat("https://erptitans.ca", http.request.uri.path)`, status 301, preserve query string → Deploy.
- [ ] **Bing Webmaster Tools:** *Import from Google Search Console* (Bing also powers Copilot and parts of ChatGPT search).

### Do this week
- [ ] **Keep office details consistent:** same business name, city and phone on the website, Odoo partner listing, Google Business Profile and directories (Calgary for Canadian listings; Calgary + Austin where US listings allow it).
- [ ] **Odoo partner portal:** make sure the description mentions both Calgary and Austin and links to the website.
- [ ] **Google Business Profile:** create and verify "ERP Titans" at the official address. Primary category: *Software company* (or *Business management consultant*). Add services (Odoo implementation, migration, support, rescue), service areas (Calgary, Alberta, Canada, USA), hours, real team/office photos, and the website link. **Single biggest factor for Calgary searches.** Create a profile only for the Calgary office: Google's rules don't allow profiles for virtual offices, and a profile found to be at a virtual address can be suspended. For Austin, use the website, the Odoo listing and directories instead.

### Do this month
- [ ] **Directory profiles with reviews:** Clutch, GoodFirms, ERPResearch, ERP Pilot, LinkedIn company page. Same name, address, phone everywhere.
- [ ] **Reviews:** ask every satisfied client for a Google review mentioning "Odoo" and "Calgary". Aim for 2–4 per month, steadily. Reply to every review.
- [ ] **Odoo certifications:** get consultants certified on the current Odoo version. Certifications + references move you from Ready → Silver → Gold, which ranks higher in Odoo's directory.
- [ ] **Hostinger CDN AI-crawler setting:** currently blocks GPTBot, ClaudeBot, Google-Extended, etc. Decide whether you want to be visible in AI assistants; if yes, turn the block off.
- [ ] **Optional, faster visibility:** a small Google Ads campaign on "odoo partner calgary" / "odoo implementation canada" gets you on page one immediately while organic rankings build.

### Ongoing (monthly maintenance, ~4–6 hours)
- [ ] Publish **one new piece of proof** per month: a case study (anonymized is fine) or an expert article, e.g. "How to recover a failed Odoo implementation", "QuickBooks to Odoo migration checklist for Canadian businesses", "Odoo for cannabis: COA and CTLS reporting".
- [ ] Earn links: Calgary Chamber of Commerce, Calgary Economic Development, industry associations, guest articles, podcast/webinar appearances, Odoo events.
- [ ] Post updates on Google Business Profile (case studies, events).
- [ ] Check Search Console monthly: which queries you appear for, click-through rate, pages with errors.
- [ ] Refresh location and service pages once a year (tax rates, Odoo versions, new FAQs).

---

## 4. KPIs to track monthly
| Metric | Where |
|---|---|
| Pages indexed (should reach ~35) | Search Console → Pages |
| Impressions & clicks for "odoo partner calgary", "odoo implementation canada", "odoo consultant", "odoo rescue", "fix odoo implementation" | Search Console → Performance |
| Average position for priority queries | Search Console |
| Google reviews count & average rating | Google Business Profile |
| GBP calls, website clicks, direction requests | Google Business Profile → Performance |
| Contact-form leads by landing page | Website analytics |

**Expect:** new pages indexed within days to two weeks after Search Console submission; first ranking movement in 4–8 weeks; competitive Calgary rankings typically take 3–6 months of steady reviews, listings and content; broad terms like "odoo implementation" take longer.

---

## 5. Open items to confirm
- Street address and phone for each office, if they can be public (then added to the website and structured data).
- Next.js security update (Hostinger pull request #1): applied on main on Nov 23, 2026 (Next.js 16.4.1, nodemailer 9.1.1). The pull request can be closed.
