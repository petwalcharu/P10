const posts = [
  {
    author: 'Maya Chen',
    handle: '@maya.creates',
    time: '2h ago',
    content:
      'We just launched a creator toolkit for teams who want to move faster without losing brand consistency. What feature would you want to see next?',
    likes: 482,
    comments: 29,
    shares: 18,
    accent: 'purple',
  },
  {
    author: 'Eli Brooks',
    handle: '@eliops',
    time: '5h ago',
    content:
      'A/B testing CTA copy changed our top-of-funnel conversion by 18%. Social media teams should be testing hooks the same way they test landing pages.',
    likes: 631,
    comments: 42,
    shares: 33,
    accent: 'cyan',
  },
  {
    author: 'Nora Patel',
    handle: '@nora.social',
    time: 'Yesterday',
    content:
      'Behind the scenes: building smarter content calendars with AI-assisted workflows has cut planning time in half. The future of social is clearly collaborative.',
    likes: 895,
    comments: 61,
    shares: 52,
    accent: 'orange',
  },
];

const feedList = document.querySelector('#feedList');
const composerForm = document.querySelector('#composerForm');
const postInput = document.querySelector('#postInput');
const toneSelect = document.querySelector('#toneSelect');
const tagInput = document.querySelector('#tagInput');
const debugLog = document.querySelector('#debugLog');
const postsCount = document.querySelector('#postsCount');

const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1);

function renderPosts() {
  feedList.innerHTML = posts
    .map(
      (post) => `
        <article class="post-card">
          <div class="post-head">
            <div class="user-meta">
              <div class="avatar" style="background: linear-gradient(135deg, var(--${post.accent}), var(--cyan));">${post.author
                .split(' ')
                .map((name) => name[0])
                .join('')
                .slice(0, 2)}</div>
              <div>
                <strong>${post.author}</strong>
                <span>${post.handle} • ${post.time}</span>
              </div>
            </div>
            <span class="tiny-label">Campaign</span>
          </div>
          <p>${post.content}</p>
          <div class="post-stats">
            <span>♡ ${post.likes}</span>
            <span>💬 ${post.comments}</span>
            <span>↻ ${post.shares}</span>
          </div>
        </article>
      `,
    )
    .join('');
}

function appendDebugLine(message) {
  const line = document.createElement('p');
  line.textContent = message;
  debugLog.appendChild(line);
  debugLog.scrollTop = debugLog.scrollHeight;
}

function generateCaption() {
  const rawInput = postInput.value.trim();

  if (!rawInput) {
    appendDebugLine('[WARN] No content available to generate copy.');
    return;
  }

  const tone = toneSelect.value;
  const hashtags = tagInput.value.trim() || '#SocialMedia #AI';
  const sentence = rawInput
    .replace(/\s+/g, ' ')
    .replace(/\.$/, '');

  const templates = {
    confident: `Here’s a confident caption: ${sentence}. Built for teams that want to move faster, test smarter, and grow with intent. ${hashtags}`,
    playful: `Our favorite kind of launch is the one that keeps the momentum going. ${sentence} — and honestly, it feels good to ship with clarity. ${hashtags}`,
    insightful: `This is the signal: ${sentence}. Great social strategy is a mix of clarity, speed, and consistent experimentation. ${hashtags}`,
    urgent: `Now is the time to act: ${sentence}. The best teams aren’t waiting for perfect conditions — they’re testing, learning, and iterating faster. ${hashtags}`,
  };

  postInput.value = templates[tone];
  appendDebugLine(`[AI] Caption generated in ${capitalize(tone)} tone.`);
}

function refreshPostCount() {
  const currentCount = Number(postsCount.textContent.replace(/[^0-9]/g, '')) || 128;
  postsCount.textContent = `${currentCount + 1}`;
}

composerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const idea = postInput.value.trim();

  if (!idea) {
    appendDebugLine('[WARN] Publish action skipped because the textarea is empty.');
    return;
  }

  posts.unshift({
    author: 'You',
    handle: '@copilot.demo',
    time: 'Just now',
    content: idea,
    likes: Math.floor(Math.random() * 200) + 120,
    comments: Math.floor(Math.random() * 30) + 15,
    shares: Math.floor(Math.random() * 18) + 8,
    accent: ['purple', 'cyan', 'orange', 'green'][Math.floor(Math.random() * 4)],
  });

  renderPosts();
  refreshPostCount();
  appendDebugLine('[OK] New social post published and metrics refreshed.');
  composerForm.reset();
  postInput.value = 'Launching a new creator toolkit for teams that want to move faster, ship smarter, and keep brand voice consistent.';
  toneSelect.value = 'confident';
  tagInput.value = '#LaunchDay #Productivity #AI';
});

document.querySelector('#captionBtn').addEventListener('click', generateCaption);

document.querySelector('#generateIdeaBtn').addEventListener('click', () => {
  const ideas = [
    'Show the behind-the-scenes story of how a small team iterated from idea to launch in under two weeks.',
    'Launch a creator challenge that invites followers to share how they use AI to streamline content workflows.',
    'Share a quick roadmap post highlighting what the team is shipping next and why it matters.',
  ];

  const nextIdea = ideas[Math.floor(Math.random() * ideas.length)];
  postInput.value = nextIdea;
  appendDebugLine('[AI] Campaign idea generated for the next social push.');
});

document.querySelector('#showDebugBtn').addEventListener('click', () => {
  appendDebugLine('[DEBUG] Root cause: engagement metric cache was double-counting shares during a refresh cycle.');
  appendDebugLine('[FIX] Resolved by deduplicating cache keys before rendering the dashboard.');
});

document.querySelector('#refreshFeedBtn').addEventListener('click', () => {
  renderPosts();
  appendDebugLine('[INFO] Feed refreshed with the latest campaign updates.');
});

renderPosts();
