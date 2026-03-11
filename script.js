'use strict';

// ===== QUESTIONS DATA =====
const questions = [
  {
    topic: "Economic Survey Ch.7 — Services",
    tag_class: "tag-survey",
    question: "Consider the following statements regarding India's services sector as per the Economic Survey 2025-26:\n\n1. Services sector GVA grew at 9.3% in the first half of FY26.\n2. India's share in global services exports has risen to approximately 4.3%.\n3. India's rank in the Global Innovation Index improved to 38th in 2025.\n\nWhich of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    correct: 3,
    explanation: "As per the Economic Survey 2025-26 (Ch. 7), Services GVA grew 9.3% in H1 FY26, India's global services export share rose to 4.3%, and GII rank improved to 38th. All three statements are correct."
  },
  {
    topic: "Insurance Sector",
    tag_class: "tag-insurance",
    question: "The 'Sabka Bima Sabki Raksha Bill, 2025' relates to which of the following?\n\n1. Raising the FDI cap in the insurance sector to 100%.\n2. Granting IRDAI the power of disgorgement similar to SEBI.\n3. Reducing the Net Owned Fund requirement for foreign reinsurance branches from ₹5,000 crore to ₹1,000 crore.\n\nSelect the correct answer using the code given below:",
    options: ["1 only", "1 and 2 only", "1, 2 and 3", "2 and 3 only"],
    correct: 2,
    explanation: "The Sabka Bima Sabki Raksha Bill, 2025, raised the FDI cap to 100%, granted IRDAI disgorgement powers, and reduced NOF requirements for foreign reinsurers to ₹1,000 crore."
  },
  {
    topic: "Economic Survey Ch.8 — Industry",
    tag_class: "tag-survey",
    question: "With reference to industrial performance in India as noted in the Economic Survey 2025-26, consider the following statements:\n\n1. Industry GVA rose by 7% year-on-year in H1 FY26.\n2. Government capital expenditure reached a historic 4% of GDP in FY25.\n3. India's merchandise export market share nearly doubled to 1.8%.\n\nWhich of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 only", "1, 2 and 3", "1 and 3 only"],
    correct: 2,
    explanation: "All three statements are correct as highlighted in Chapter 8 of the Economic Survey 2025-26."
  },
  {
    topic: "Infrastructure",
    tag_class: "tag-infra",
    question: "Consider the following statements regarding infrastructure in India:\n\n1. As per the Union Budget 2025-26, capital investment outlay for infrastructure was increased to ₹11.21 lakh crore.\n2. 50-year interest-free loans are being provided to states for capital expenditure on infrastructure projects.\n3. The National Monetisation Plan targets ₹10 lakh crore for monetizing public assets over 2025-30.\n\nWhich of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1, 2 and 3", "1 only"],
    correct: 2,
    explanation: "The Union Budget 2025-26 increased infrastructure capex to ₹11.21 lakh crore, continued the 50-year interest-free loan scheme for states, and announced the NMP target of ₹10 lakh crore for 2025-30."
  },
  {
    topic: "Economic Survey Ch.14 — AI Ecosystem",
    tag_class: "tag-survey",
    question: "With reference to the Economic Survey 2025-26 chapter on the Evolution of the AI Ecosystem in India, which of the following is/are correctly stated?\n\n1. The Survey recommends India adopt capital-intensive frontier AI models.\n2. The Survey advocates for decentralized, application-driven AI systems.\n3. AI is identified as critical for productivity in healthcare, agriculture, education, and governance.\n\nSelect the correct answer using the code given below:",
    options: ["1 and 3 only", "2 and 3 only", "1, 2 and 3", "3 only"],
    correct: 1,
    explanation: "The Economic Survey warns against capital-intensive frontier models and recommends decentralized, application-driven AI systems tailored to India's challenges. Statement 1 is incorrect."
  },
  {
    topic: "Service Sector — Current Affairs",
    tag_class: "tag-current",
    question: "India's services exports in January 2025 grew by approximately:",
    options: ["8.5% year-on-year", "12.3% year-on-year", "16.5% year-on-year", "22.1% year-on-year"],
    correct: 2,
    explanation: "India's services exports grew 16.5% YoY in January 2025 to $38.55 billion, as per RBI and Business Standard data."
  },
  {
    topic: "Indian Industry — PLI Scheme",
    tag_class: "tag-industry",
    question: "Consider the following statements about the Production Linked Incentive (PLI) Scheme:\n\n1. PLI schemes have attracted investments worth approximately ₹1.76 lakh crore across 14 sectors.\n2. Mobile phone exports under PLI grew by over 775% since FY 2020-21.\n3. The government has decided to expand PLI to 20 sectors under 'PLI 2.0'.\n\nWhich of the statements given above is/are correct?",
    options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
    correct: 0,
    explanation: "Statements 1 and 2 are correct. PLI will NOT be expanded beyond the original 14 sectors; PLI 2.0 discussions pertain to restructuring existing schemes. Statement 3 is incorrect."
  },
  {
    topic: "Economic Survey Ch.9 — Investment & Infra",
    tag_class: "tag-survey",
    question: "As per the Economic Survey 2025-26 (Chapter 9), which of the following statements is/are correct?\n\n1. Gross Fixed Capital Formation (GFCF) grew by 7.8%.\n2. Investment as a share of GDP was around 30%.\n3. India was ranked among the top five globally for private investment in infrastructure among low- and middle-income countries.\n\nSelect the correct answer:",
    options: ["1 and 2 only", "2 and 3 only", "1, 2 and 3", "1 only"],
    correct: 2,
    explanation: "All three are key highlights from Chapter 9 of the Economic Survey 2025-26."
  },
  {
    topic: "Insurance — IRDAI Reforms",
    tag_class: "tag-insurance",
    question: "Which of the following is NOT a feature of IRDAI's regulatory reforms introduced in early 2025?",
    options: ["Introduction of a one-time registration system for intermediaries", "Expansion of the Regulatory Sandbox for innovation pilots", "Merger of IRDAI with SEBI to form a unified financial regulator", "Compliance with the Digital Personal Data Protection Act, 2023"],
    correct: 2,
    explanation: "No merger of IRDAI with SEBI was proposed. All other features were part of the IRDAI reforms in 2025."
  },
  {
    topic: "Indian Industry — Current Affairs",
    tag_class: "tag-current",
    question: "With reference to India's electronics manufacturing sector in early 2025, consider the following:\n\n1. Electronics emerged as the third-largest export category of India.\n2. Five states — Maharashtra, Gujarat, Tamil Nadu, Karnataka, and Uttar Pradesh — contributed over 54% of manufacturing GVA.\n\nWhich of the statements given above is/are correct?",
    options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
    correct: 2,
    explanation: "Electronics became the third-largest export category by early 2025, and the five named states dominate manufacturing GVA."
  },
  {
    topic: "Infrastructure — Railways",
    tag_class: "tag-infra",
    question: "With reference to Indian Railways and logistics developments in early 2025, which of the following is/are correct?\n\n1. Indian Railways aims for 100% electrification by FY 2025-26.\n2. 26 states have formulated their own logistics policies under the National Logistics Policy.\n3. Vande Bharat trains are exclusively manufactured by BEML.\n\nSelect the correct answer:",
    options: ["1 and 2 only", "1 only", "2 and 3 only", "1, 2 and 3"],
    correct: 0,
    explanation: "Statements 1 and 2 are correct. Vande Bharat trains are manufactured by the Integral Coach Factory (ICF), Chennai — not BEML. Statement 3 is incorrect."
  },
  {
    topic: "Economic Survey — Macro",
    tag_class: "tag-survey",
    question: "According to the Economic Survey 2025-26, India's real GDP growth for FY26 is estimated at:",
    options: ["6.2%", "7.4%", "8.1%", "5.8%"],
    correct: 1,
    explanation: "The Economic Survey 2025-26 estimates FY26 real GDP growth at 7.4%."
  },
  {
    topic: "Insurance — Insurance for All by 2047",
    tag_class: "tag-insurance",
    question: "The 'Insurance for All by 2047' vision of the Government of India aims to:\n\n1. Achieve universal insurance coverage for every Indian citizen.\n2. Deepen insurance penetration through digital platforms and microinsurance.\n3. Limit foreign investment in insurance to 49%.\n\nWhich of the above is/are correctly stated?",
    options: ["1 and 2 only", "2 and 3 only", "1, 2 and 3", "1 only"],
    correct: 0,
    explanation: "The 'Insurance for All by 2047' goal aims at universal coverage and deepening penetration. FDI has been raised to 100%, not limited to 49%. Statement 3 is incorrect."
  },
  {
    topic: "Infrastructure — Ports & Shipping",
    tag_class: "tag-infra",
    question: "With reference to India's maritime infrastructure in 2025, consider the following:\n\n1. The Sagarmala Programme focuses on port modernization and port-led development.\n2. The Harit Nauka Guidelines aim to green 1,000 inland vessels over the next decade.\n3. Chabahar Port is located in Afghanistan.\n\nWhich of the statements given above is/are correct?",
    options: ["1 and 2 only", "1, 2 and 3", "1 only", "2 and 3 only"],
    correct: 0,
    explanation: "Sagarmala focuses on port modernization (correct). Harit Nauka aims to green inland vessels (correct). Chabahar Port is in Iran, not Afghanistan. Statement 3 is incorrect."
  },
  {
    topic: "Economic Survey — Banking",
    tag_class: "tag-survey",
    question: "As per the Economic Survey 2025-26, which of the following statements about the Indian banking sector is/are correct?\n\n1. Gross NPAs fell to a multi-decade low of 2.2%.\n2. Credit growth accelerated to 14.5%.\n3. GST collections reached ₹17.4 lakh crore.\n\nSelect the correct answer:",
    options: ["1 and 2 only", "2 and 3 only", "1, 2 and 3", "1 only"],
    correct: 2,
    explanation: "All three are correct as per the macro highlights of the Economic Survey 2025-26."
  },
  {
    topic: "Service Sector — IT/GCC",
    tag_class: "tag-service",
    question: "With reference to India's IT and services sector:\n\n1. India is the second-largest exporter of telecommunications, computer, and information services globally.\n2. Over 19 lakh professionals are employed in Global Capability Centres (GCCs) in India.\n3. The US, UK, and Japan are the top three destinations for India's IT exports.\n\nWhich of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1, 2 and 3", "1 only"],
    correct: 2,
    explanation: "India is the 2nd largest exporter of telecom/computer/information services globally, GCCs employ over 19 lakh professionals, and the US, UK, and Japan are top IT export destinations."
  },
  {
    topic: "Infrastructure — Energy",
    tag_class: "tag-infra",
    question: "Consider the following statements regarding India's power and renewable energy sector as of early 2025:\n\n1. India's total installed electricity capacity had crossed 450 GW.\n2. Renewables constituted approximately 47% of total installed capacity.\n3. The SAUBHAGYA scheme aims to provide universal household electrification.\n\nWhich of the statements given above is/are correct?",
    options: ["1 and 2 only", "1 and 3 only", "1, 2 and 3", "3 only"],
    correct: 2,
    explanation: "Installed capacity reached 456.7 GW by Nov 2024, renewables at ~47%, and SAUBHAGYA aims at universal household electrification."
  },
  {
    topic: "Economic Survey — External Sector",
    tag_class: "tag-survey",
    question: "As per the Economic Survey 2025-26, India's current account deficit was comfortable at:",
    options: ["2.1% of GDP", "1.5% of GDP", "0.8% of GDP", "3.2% of GDP"],
    correct: 2,
    explanation: "The Economic Survey 2025-26 pegged the current account deficit at 0.8% of GDP."
  },
  {
    topic: "Industry — MSMEs",
    tag_class: "tag-industry",
    question: "Which of the following statements regarding MSMEs as highlighted in the Economic Survey 2025-26 is/are correct?\n\n1. MSMEs are described as the backbone of industrial development and job creation.\n2. Around 70 MSMEs were enrolled under the PLI scheme.\n3. MSMEs contribute only to the domestic market and not to exports.\n\nSelect the correct answer:",
    options: ["1 and 2 only", "1 only", "1, 2 and 3", "2 and 3 only"],
    correct: 0,
    explanation: "MSMEs are the backbone of industry and jobs (correct). About 70 MSMEs enrolled under PLI (correct). MSMEs also contribute significantly to India's exports. Statement 3 is incorrect."
  },
  {
    topic: "Infrastructure — Roads & Highways",
    tag_class: "tag-infra",
    question: "With reference to the Bharatmala Pariyojana, consider the following statements:\n\n1. It is a centrally-sponsored scheme for highway construction and development.\n2. By early 2025, about 76% of awarded projects were completed.\n3. Economic corridors and digital highways are prioritized under this scheme.\n\nWhich of the statements given above is/are correct?",
    options: ["1 and 2 only", "2 and 3 only", "1, 2 and 3", "1 only"],
    correct: 2,
    explanation: "Bharatmala is a centrally-sponsored scheme, about 76% of awarded projects met targets by early 2025, and economic corridors and digital highways are prioritized."
  },
  {
    topic: "Insurance — Consumer Reforms",
    tag_class: "tag-insurance",
    question: "Which of the following consumer-focused changes were introduced in the insurance sector in 2025?\n\n1. Removal of GST on health and life insurance premiums.\n2. Establishment of a Policyholders' Education and Protection Fund.\n3. Revamp of the Ombudsman system for grievance redressal.\n\nSelect the correct answer:",
    options: ["1 and 2 only", "2 and 3 only", "1, 2 and 3", "1 only"],
    correct: 2,
    explanation: "All three consumer-focused changes — GST removal, Policyholders' Fund, and Ombudsman revamp — were introduced in 2025."
  },
  {
    topic: "Economic Survey — Inflation",
    tag_class: "tag-survey",
    question: "According to the Economic Survey 2025-26, India's retail inflation fell to a historic low of:",
    options: ["3.2% in April–December 2025", "1.7% in April–December 2025", "4.5% in April–December 2025", "2.8% in April–December 2025"],
    correct: 1,
    explanation: "Retail inflation hit a historic low of 1.7% in April–December 2025 as per the Economic Survey 2025-26."
  },
  {
    topic: "Service Sector — Exports",
    tag_class: "tag-service",
    question: "India's total services exports in FY 2024-25 were approximately:",
    options: ["$250 billion", "$310 billion", "$387.5 billion", "$420 billion"],
    correct: 2,
    explanation: "India's services exports hit a record $387.5 billion in FY 2024-25."
  },
  {
    topic: "Infrastructure — Smart Cities & Urban",
    tag_class: "tag-infra",
    question: "With reference to urban infrastructure initiatives in early 2025:\n\n1. The Urban Challenge Fund of ₹1 lakh crore was launched for city redevelopment, water, and sanitation.\n2. The government committed to developing 120 new airports in the next decade.\n3. The UDAN scheme was discontinued.\n\nWhich of the statements given above is/are correct?",
    options: ["1 and 2 only", "1, 2 and 3", "2 and 3 only", "1 only"],
    correct: 0,
    explanation: "The Urban Challenge Fund and the 120 airports commitment are correct. The UDAN scheme was extended, not discontinued."
  },
  {
    topic: "Industry — FDI",
    tag_class: "tag-industry",
    question: "As per the Economic Survey 2025-26, FDI inflows into India in 2025 were approximately:",
    options: ["$45 billion", "$63 billion", "$81 billion", "$97 billion"],
    correct: 2,
    explanation: "The Economic Survey 2025-26 noted FDI inflows at $81 billion (up 13% YoY)."
  },
  {
    topic: "Economic Survey — Remittances",
    tag_class: "tag-survey",
    question: "India's inward remittances in FY25, as per the Economic Survey 2025-26, were approximately:",
    options: ["$89.4 billion", "$108.2 billion", "$135.4 billion", "$150.7 billion"],
    correct: 2,
    explanation: "Remittances reached a record $135.4 billion in FY25 as per the Survey."
  },
  {
    topic: "Economic Survey Ch.14 — AI",
    tag_class: "tag-survey",
    question: "The Economic Survey 2025-26 warns against India's over-reliance on:",
    options: ["Agricultural exports for economic growth", "Capital-intensive frontier AI models that may create fragile dependencies", "Services sector for GDP contribution", "Bilateral trade agreements for market access"],
    correct: 1,
    explanation: "Chapter 14 specifically warns against capital-intensive frontier AI models and recommends decentralized, application-driven AI systems for India."
  },
  {
    topic: "Infrastructure — Logistics",
    tag_class: "tag-infra",
    question: "India's Logistics Performance Index rank, as noted in recent developments, improved to:",
    options: ["44th", "38th", "52nd", "29th"],
    correct: 1,
    explanation: "India's Logistics Performance Index improved to 38 from 44."
  },
  {
    topic: "Insurance — Reinsurance",
    tag_class: "tag-insurance",
    question: "Consider the following statements regarding reinsurance reforms in India in 2025:\n\n1. The Net Owned Fund requirement for foreign reinsurance branches was reduced.\n2. Lloyd's entities are now required to maintain a minimum NOF of ₹1,000 crore.\n3. These reforms were aimed at increasing global reinsurer participation in India.\n\nWhich of the statements given above is/are correct?",
    options: ["1 only", "1 and 3 only", "1, 2 and 3", "2 and 3 only"],
    correct: 2,
    explanation: "All three are correct — the NOF requirement was reduced to ₹1,000 crore for foreign reinsurers and Lloyd's entities, with the aim of boosting global participation."
  },
  {
    topic: "Mixed — Match the Following",
    tag_class: "tag-current",
    question: "Match the following initiatives with their primary objectives:\n\nA. Sagarmala Programme → 1. Port-led development and modernization\nB. Bharatmala Pariyojana → 2. National highway construction and economic corridors\nC. UDAN Scheme → 3. Regional air connectivity\nD. PLI Scheme → 4. Boosting domestic manufacturing through incentives\n\nSelect the correct answer:",
    options: ["A-1, B-3, C-2, D-4", "A-1, B-2, C-3, D-4", "A-2, B-1, C-4, D-3", "A-3, B-4, C-1, D-2"],
    correct: 1,
    explanation: "Sagarmala → Port-led development; Bharatmala → Highways & economic corridors; UDAN → Regional air connectivity; PLI → Manufacturing incentives."
  }
];

// ===== STATE =====
let currentQ = 0;
let answers = new Array(30).fill(null); // null=unanswered, {selected, correct, skipped}
let timerInterval = null;
let timeLeft = 60;
let quizStartTime = null;
let quizEndTime = null;
let reviewIndex = 0;

const TIMER_DURATION = 60;
const CIRCUMFERENCE = 2 * Math.PI * 34; // r=34

// ===== DOM HELPERS =====
const $ = id => document.getElementById(id);
const show = el => el.classList.remove('hidden');
const hide = el => el.classList.add('hidden');

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

// ===== START =====
$('start-btn').addEventListener('click', startQuiz);

function startQuiz() {
  currentQ = 0;
  answers = new Array(30).fill(null);
  quizStartTime = Date.now();
  showScreen('quiz-screen');
  loadQuestion(0);
}

// ===== LOAD QUESTION =====
function loadQuestion(idx) {
  const q = questions[idx];
  currentQ = idx;

  // Header
  $('question-number').textContent = `Q ${idx + 1} / 30`;
  const badge = $('topic-badge');
  badge.textContent = q.topic;
  badge.className = 'tag ' + q.tag_class;

  // Progress bar
  $('progress-bar').style.width = ((idx / 30) * 100) + '%';

  // Question text
  $('question-text').textContent = q.question;

  // Options
  const container = $('options-container');
  container.innerHTML = '';
  const letters = ['a', 'b', 'c', 'd'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
    btn.addEventListener('click', () => selectAnswer(i));
    container.appendChild(btn);
  });

  // Hide explanation and next button
  const expBox = $('explanation-box');
  expBox.className = 'explanation-box hidden';
  expBox.innerHTML = '';
  hide($('next-btn'));

  // Nav grid
  updateNavGrid();

  // Timer
  startTimer();
}

// ===== TIMER =====
function startTimer() {
  clearInterval(timerInterval);
  timeLeft = TIMER_DURATION;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 1000);
}

function updateTimerDisplay() {
  $('timer-text').textContent = timeLeft;
  const ring = $('timer-circle');
  const offset = CIRCUMFERENCE * (1 - timeLeft / TIMER_DURATION);
  ring.style.strokeDashoffset = offset;

  ring.className = 'timer-ring';
  if (timeLeft <= 10) ring.classList.add('red');
  else if (timeLeft <= 30) ring.classList.add('yellow');
}

function handleTimeout() {
  answers[currentQ] = { selected: -1, correct: false, skipped: true };
  disableOptions();
  showExplanation('timeout');
  show($('next-btn'));
  updateNavGrid();
}

// ===== ANSWER SELECTION =====
function selectAnswer(idx) {
  clearInterval(timerInterval);
  const q = questions[currentQ];
  const isCorrect = idx === q.correct;
  answers[currentQ] = { selected: idx, correct: isCorrect, skipped: false };

  const btns = $('options-container').querySelectorAll('.option-btn');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct');
    else if (i === idx && !isCorrect) btn.classList.add('wrong');
  });

  showExplanation(isCorrect ? 'correct' : 'wrong');
  show($('next-btn'));
  updateNavGrid();
}

function disableOptions() {
  const btns = $('options-container').querySelectorAll('.option-btn');
  const q = questions[currentQ];
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct');
  });
}

// ===== EXPLANATION =====
function showExplanation(type) {
  const box = $('explanation-box');
  const q = questions[currentQ];
  let title, cls;

  if (type === 'correct') {
    title = '✅ Correct!';
    cls = 'explanation-box';
  } else if (type === 'wrong') {
    title = '❌ Incorrect';
    cls = 'explanation-box wrong-exp';
  } else {
    title = '⏰ Time Up!';
    cls = 'explanation-box timeout-exp';
  }

  box.className = cls;
  box.innerHTML = `<div class="explanation-title">${title}</div><div>${q.explanation}</div>`;
}

// ===== NEXT BUTTON =====
$('next-btn').addEventListener('click', () => {
  if (currentQ < 29) {
    loadQuestion(currentQ + 1);
  } else {
    endQuiz();
  }
});

// ===== NAV GRID =====
function updateNavGrid() {
  const grid = $('nav-grid');
  grid.innerHTML = '';
  for (let i = 0; i < 30; i++) {
    const btn = document.createElement('button');
    btn.className = 'nav-btn';
    btn.textContent = i + 1;
    if (i === currentQ) btn.classList.add('nav-current');
    else if (answers[i] !== null) {
      if (answers[i].skipped) btn.classList.add('nav-skipped');
      else if (answers[i].correct) btn.classList.add('nav-correct');
      else btn.classList.add('nav-wrong');
    }
    btn.addEventListener('click', () => jumpToQuestion(i));
    grid.appendChild(btn);
  }
}

function jumpToQuestion(idx) {
  clearInterval(timerInterval);
  loadQuestion(idx);
}

// ===== END QUIZ =====
function endQuiz() {
  clearInterval(timerInterval);
  quizEndTime = Date.now();
  $('progress-bar').style.width = '100%';
  showScreen('results-screen');
  renderResults();
}

// ===== RESULTS =====
function renderResults() {
  let correct = 0, wrong = 0, skipped = 0;
  answers.forEach(a => {
    if (a === null || a.skipped) skipped++;
    else if (a.correct) correct++;
    else wrong++;
  });

  const totalTimeSec = Math.round((quizEndTime - quizStartTime) / 1000);
  const pct = Math.round((correct / 30) * 100);

  $('score-value').textContent = correct;
  $('stat-correct').textContent = correct;
  $('stat-wrong').textContent = wrong;
  $('stat-skipped').textContent = skipped;
  $('stat-time').textContent = formatTime(totalTimeSec);
  $('stat-pct').textContent = pct + '%';

  // Animate score ring
  const scoreRing = $('score-ring');
  const scoreCircumference = 2 * Math.PI * 68;
  const scoreOffset = scoreCircumference * (1 - correct / 30);
  setTimeout(() => {
    scoreRing.style.strokeDashoffset = scoreOffset;
  }, 100);

  // Topic breakdown
  const topicMap = {};
  questions.forEach((q, i) => {
    const t = q.topic.split(' — ')[0];
    if (!topicMap[t]) topicMap[t] = { correct: 0, total: 0, color: getTagColor(q.tag_class) };
    topicMap[t].total++;
    if (answers[i] && answers[i].correct) topicMap[t].correct++;
  });

  const table = $('topic-table');
  table.innerHTML = '';
  Object.entries(topicMap).forEach(([topic, data]) => {
    const pctTopic = data.total > 0 ? (data.correct / data.total) * 100 : 0;
    const div = document.createElement('div');
    div.className = 'topic-item';
    div.innerHTML = `
      <div class="topic-item-header">
        <span class="topic-row-label">${topic}</span>
        <span class="topic-score-text">${data.correct}/${data.total}</span>
      </div>
      <div class="topic-bar-wrap">
        <div class="topic-bar" style="width: 0%; background: ${data.color};" data-width="${pctTopic}"></div>
      </div>
    `;
    table.appendChild(div);
  });

  // Animate bars
  setTimeout(() => {
    table.querySelectorAll('.topic-bar').forEach(bar => {
      bar.style.width = bar.dataset.width + '%';
    });
  }, 300);
}

function getTagColor(tagClass) {
  const colors = {
    'tag-survey': '#1a237e',
    'tag-industry': '#ff6f00',
    'tag-service': '#1565c0',
    'tag-infra': '#2e7d32',
    'tag-insurance': '#7b1fa2',
    'tag-current': '#c62828'
  };
  return colors[tagClass] || '#607d8b';
}

function formatTime(totalSec) {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

// ===== REVIEW =====
$('review-btn').addEventListener('click', () => {
  reviewIndex = 0;
  showScreen('review-screen');
  renderReview(reviewIndex);
});

$('back-to-results').addEventListener('click', () => {
  showScreen('results-screen');
});

$('review-prev').addEventListener('click', () => {
  if (reviewIndex > 0) {
    reviewIndex--;
    renderReview(reviewIndex);
  }
});

$('review-next').addEventListener('click', () => {
  if (reviewIndex < 29) {
    reviewIndex++;
    renderReview(reviewIndex);
  }
});

function renderReview(idx) {
  const q = questions[idx];
  const userAnswer = answers[idx];

  $('review-counter').textContent = `${idx + 1} / 30`;
  const badge = $('review-topic-badge');
  badge.textContent = q.topic;
  badge.className = 'tag ' + q.tag_class;

  $('review-question-text').textContent = q.question;

  const container = $('review-options-container');
  container.innerHTML = '';
  const letters = ['a', 'b', 'c', 'd'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.disabled = true;
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span>${opt}</span>`;
    if (i === q.correct) btn.classList.add('correct');
    else if (userAnswer && !userAnswer.skipped && userAnswer.selected === i) btn.classList.add('wrong');
    container.appendChild(btn);
  });

  const expBox = $('review-explanation-box');
  let statusText = '⏰ Skipped (Time Up)';
  if (userAnswer && !userAnswer.skipped) {
    statusText = userAnswer.correct ? '✅ Your Answer: Correct' : '❌ Your Answer: Incorrect';
  }
  expBox.className = 'explanation-box' + (userAnswer && userAnswer.correct ? '' : (userAnswer && !userAnswer.skipped ? ' wrong-exp' : ' timeout-exp'));
  expBox.innerHTML = `<div class="explanation-title">${statusText}</div><div>${q.explanation}</div>`;

  // Update prev/next button states
  $('review-prev').disabled = idx === 0;
  $('review-next').disabled = idx === 29;
}

// ===== RESTART =====
$('restart-btn').addEventListener('click', () => {
  showScreen('start-screen');
});
