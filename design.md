# Enterprise AI, Cybersecurity & IT Staffing Solutions

## Mission
Create implementation-ready, token-driven UI guidance for Enterprise AI, Cybersecurity & IT Staffing Solutions that is optimized for consistency, accessibility, and fast delivery across content site.

## Brand
- Product/brand: Enterprise AI, Cybersecurity & IT Staffing Solutions
- URL: https://www.enfycon.com/
- Audience: readers and knowledge seekers
- Product surface: content site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=Mona Sans`, `font.family.stack=Mona Sans, Mona Sans Fallback`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=24px`
- Typography scale: `font.size.xs=12px`, `font.size.sm=14px`, `font.size.md=15px`, `font.size.lg=16px`, `font.size.xl=17.6px`, `font.size.2xl=18px`, `font.size.3xl=20px`, `font.size.4xl=22px`
- Color palette: `color.border.default=#ffffff`, `color.text.secondary=#4361ee`, `color.text.tertiary=#364e52`, `color.text.inverse=#0c1e21`, `color.surface.base=#000000`, `color.surface.strong=#565656`
- Spacing scale: `space.1=4px`, `space.2=5px`, `space.3=6px`, `space.4=8px`, `space.5=10px`, `space.6=12px`, `space.7=13px`, `space.8=15px`
- Radius/shadow/motion tokens: `radius.xs=8px`, `radius.sm=10px`, `radius.md=12px`, `radius.lg=50px` | `shadow.1=rgba(79, 70, 229, 0.5) 0px 4px 20px 0px`, `shadow.2=rgb(255, 255, 255) 0px 0px 0px 0px`, `shadow.3=rgb(54, 78, 82) 0px 0px 0px 0px` | `motion.duration.instant=150ms`, `motion.duration.fast=200ms`, `motion.duration.normal=300ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (359), lists (28), buttons (22), cards (5), navigation (3), inputs (2).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
