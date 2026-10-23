* {
  box-sizing: border-box;
}

:root {
  --bg: #0b1020;
  --bg-soft: #111a2d;
  --panel: rgba(17, 26, 46, 0.8);
  --panel-strong: rgba(18, 30, 53, 0.96);
  --text: #edf5ff;
  --muted: #a8b7d4;
  --line: rgba(168, 183, 212, 0.17);
  --purple: #9d7bff;
  --cyan: #54d7ff;
  --orange: #ffb96b;
  --green: #53e4a6;
  --red: #ff6d7d;
  --yellow: #f7d572;
  --shadow: 0 26px 70px rgba(3, 8, 20, 0.5);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(157, 123, 255, 0.22), transparent 24%),
    radial-gradient(circle at top right, rgba(84, 215, 255, 0.18), transparent 24%),
    linear-gradient(180deg, #091120 0%, #0b1020 100%);
  color: var(--text);
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

button,
input,
textarea,
select {
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

button:hover,
input:hover,
textarea:hover,
select:hover {
  border-color: rgba(84, 215, 255, 0.38);
}

.page-shell {
  max-width: 1220px;
  margin: 0 auto;
  padding: 32px 20px 60px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin-bottom: 28px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 14px;
}

.brand-mark {
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--purple), var(--cyan));
  color: white;
  font-weight: 800;
  box-shadow: var(--shadow);
}

.eyebrow {
  margin: 0 0 4px;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

h1,
h2,
h3,
h4,
p {
  margin-top: 0;
}

h1 {
  margin-bottom: 0;
  font-size: 1.32rem;
}

.main-nav {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  border: 1px solid var(--line);
  background: rgba(16, 24, 39, 0.7);
  border-radius: 999px;
  padding: 10px 14px;
  flex-wrap: wrap;
}

.main-nav a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.92rem;
}

.hero {
  display: grid;
  grid-template-columns: 1.25fr 0.9fr;
  gap: 24px;
  align-items: center;
  margin-bottom: 28px;
}

.hero-copy,
.hero-panel,
.stat-card,
.composer,
.feed,
.feature-panel,
.ai-panel,
.debug-panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow: var(--shadow);
}

.hero-copy {
  padding: 34px;
}

.pill,
.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 999px;
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: 1px solid rgba(84, 215, 255, 0.18);
}

.pill {
  background: rgba(84, 215, 255, 0.08);
  color: var(--cyan);
}

.hero-copy h2 {
  font-size: clamp(2.1rem, 3vw, 3.3rem);
  line-height: 1.08;
  margin: 16px 0 14px;
}

.hero-copy p {
  margin-bottom: 22px;
  line-height: 1.75;
  color: var(--muted);
}

.hero-actions,
.action-row {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.primary-btn,
.secondary-btn,
.link-btn {
  padding: 12px 18px;
  border-radius: 12px;
  border: none;
}

.primary-btn {
  background: linear-gradient(135deg, var(--purple), #7d6bff);
  color: white;
  font-weight: 700;
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  border: 1px solid var(--line);
}

.link-btn {
  background: transparent;
  color: var(--cyan);
  padding: 0;
}

.primary-btn:hover,
.secondary-btn:hover,
.link-btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.04);
}

.hero-metrics {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin-top: 26px;
}

.hero-metrics div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hero-metrics strong {
  font-size: 1.5rem;
}

.hero-metrics span {
  color: var(--muted);
  font-size: 0.78rem;
}

.hero-panel {
  padding: 22px;
}

.panel-header {
  display: flex;
  gap: 8px;
  margin-bottom: 22px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.dot.green { background: var(--green); }
.dot.yellow { background: var(--yellow); }
.dot.red { background: var(--red); }

.panel-content {
  padding-top: 8px;
}

.mini-metric {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  color: var(--muted);
}

.mini-metric strong {
  color: var(--green);
}

.sparkline {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  align-items: end;
  gap: 10px;
  height: 112px;
  padding: 18px 0 16px;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.sparkline span {
  display: block;
  border-radius: 12px 12px 0 0;
  background: linear-gradient(180deg, var(--cyan), var(--purple));
}

.sparkline span:nth-child(1) { height: 24%; }
.sparkline span:nth-child(2) { height: 38%; }
.sparkline span:nth-child(3) { height: 52%; }
.sparkline span:nth-child(4) { height: 46%; }
.sparkline span:nth-child(5) { height: 68%; }
.sparkline span:nth-child(6) { height: 82%; }
.sparkline span:nth-child(7) { height: 96%; }

.panel-list {
  margin: 18px 0 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.8;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 24px;
}

.stat-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 140px;
  padding: 22px 20px;
}

.label {
  color: var(--muted);
  font-size: 0.76rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.stat-card strong {
  font-size: clamp(1.9rem, 2vw, 2.4rem);
}

.stat-card small {
  color: var(--muted);
}

.accent-purple { border-top: 3px solid var(--purple); }
.accent-cyan { border-top: 3px solid var(--cyan); }
.accent-orange { border-top: 3px solid var(--orange); }
.accent-green { border-top: 3px solid var(--green); }

.main-layout {
  display: grid;
  grid-template-columns: 1.45fr 0.8fr;
  gap: 22px;
}

.content-column,
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.composer,
.feed,
.feature-panel,
.ai-panel,
.debug-panel {
  padding: 22px;
}

.section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}

.section-heading h3 {
  margin: 0;
  font-size: 1.22rem;
}

.small-gap {
  margin-bottom: 10px;
}

.status-badge.success {
  background: rgba(83, 228, 166, 0.12);
  color: var(--green);
  border-color: rgba(83, 228, 166, 0.22);
}

.status-badge.warning {
  background: rgba(255, 185, 107, 0.12);
  color: var(--orange);
  border-color: rgba(255, 185, 107, 0.2);
}

label {
  display: block;
  margin-bottom: 8px;
  color: var(--muted);
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

textarea,
input,
select {
  width: 100%;
  background: rgba(10, 15, 28, 0.75);
  color: var(--text);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 12px 14px;
}

textarea {
  min-height: 125px;
  resize: vertical;
}

.composer-tools {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 18px;
  margin-top: 18px;
}

.field-group {
  display: flex;
  flex-direction: column;
}

.action-row {
  margin-top: 18px;
}

.feed-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.post-card {
  border: 1px solid var(--line);
  border-radius: 18px;
  background: rgba(9, 15, 28, 0.8);
  padding: 18px;
}

.post-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;
}

.user-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  font-weight: 700;
  color: white;
}

.user-meta strong {
  display: block;
  font-size: 0.96rem;
}

.user-meta span,
.post-card p,
.post-stats,
.tiny-label {
  color: var(--muted);
}

.user-meta span,
.tiny-label {
  font-size: 0.78rem;
}

.post-card p {
  margin-bottom: 14px;
  line-height: 1.72;
}

.post-stats {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  font-size: 0.82rem;
}

.workflow-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.workflow-list li {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(157, 123, 255, 0.12);
  color: var(--purple);
  font-weight: 700;
}

.workflow-list h4 {
  margin-bottom: 4px;
  font-size: 0.96rem;
}

.workflow-list p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.88rem;
}

.ai-insights {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
}

.insight-card {
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid var(--line);
  background: rgba(11, 17, 31, 0.75);
}

.insight-card strong {
  display: block;
  margin-bottom: 6px;
}

.insight-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.6;
  font-size: 0.88rem;
}

.debug-log {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 12px;
  padding: 14px 12px;
  border-radius: 14px;
  background: rgba(11, 17, 31, 0.75);
  border: 1px solid var(--line);
  color: var(--muted);
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 0.8rem;
}

.debug-log p {
  margin: 0;
}

@media (max-width: 980px) {
  .hero,
  .main-layout,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 560px) {
  .page-shell {
    padding-inline: 14px;
  }

  .hero-copy,
  .composer,
  .feed,
  .feature-panel,
  .ai-panel,
  .debug-panel,
  .hero-panel {
    padding: 16px;
  }

  .composer-tools {
    grid-template-columns: 1fr;
  }

  .hero-actions,
  .action-row {
    flex-direction: column;
  }
}
