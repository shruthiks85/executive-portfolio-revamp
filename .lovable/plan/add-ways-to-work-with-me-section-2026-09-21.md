# Add "Ways to Work With Me" Section

## Outcome
Insert a new engagement-models section between "Selected Work" and "What I Believe", presenting the three ways to work with Shruthi (full-time leadership, interim/fractional leadership, delivery & transformation advisory) verbatim as provided.

## Changes

### src/components/portfolio.tsx
- Add an `engagementModels` data array (number, title, description, tag) with the exact wording supplied for the three modes:
  - 01 Full-time leadership
  - 02 Interim / fractional leadership
  - 03 Delivery & transformation advisory
- Add a `WaysToWork` section component rendered in `Portfolio` between `ExperienceTimeline` and `Principles`:
  - id="engagements", `SectionHeading` with eyebrow "Engagement models", title "How this could work", short intro.
  - Three numbered cards reusing the existing card visual language (index number, heading, body), with a small descriptive tag per card (e.g. "Long-term capability", "Embedded gap-fill", "Focused engagements").
- Add "Ways to work" to `navItems` between Experience and Principles so active-section highlighting covers the new section.

### src/styles.css
- Add a `.engagement-grid` / `.engagement-card` style block following the existing operating-card pattern (thin borders, white cards, hover elevation, primary-colored tag), tuned to a 3-column layout.
- Extend the 860px breakpoint (2 columns) and 600px breakpoint (1 column) rules for the new grid; reduced-motion behavior is inherited from existing rules.

## Notes
- Content preserved verbatim — no rewriting of the supplied descriptions.
- No changes to other sections, data, or metadata.
- Verify with a Playwright check at desktop and mobile widths: section renders between Selected Work and What I Believe, nav highlights it when in view, no console errors, no overflow.
