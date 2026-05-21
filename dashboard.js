(function () {
  const badges = ["MULTIMODAL AI", "COMPUTER VISION", "LLM SECURITY", "FEDERATED LEARNING"];
  const badgeEl = document.getElementById("badges");
  badges.forEach(function (text) {
    const span = document.createElement("span");
    span.className = "badge";
    span.textContent = text;
    badgeEl.appendChild(span);
  });

  const tech = [
    "Python", "PyTorch", "TensorFlow", "OpenCV", "Scikit-learn", "HuggingFace",
    "LangChain", "FastAPI", "Streamlit", "Jupyter", "Pandas", "NumPy",
    "React", "TypeScript", "Docker", "MongoDB", "PostgreSQL", "Git", "CUDA", "RAG"
  ];
  const orbit = document.getElementById("orbit");
  tech.forEach(function (name, i) {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = name;
    chip.style.animationDuration = 6 + (i % 5) + "s";
    orbit.appendChild(chip);
  });

  const metricsData = [
    { label: "Deep Learning (PyTorch / TF)", pct: 94, cls: "cyan" },
    { label: "Medical Imaging & Fusion", pct: 88, cls: "coral" },
    { label: "NLP · Speech · LLM Research", pct: 86, cls: "gold" },
    { label: "MLOps · APIs · Product Engineering", pct: 82, cls: "cyan" }
  ];
  const metricsRoot = document.getElementById("metrics");
  metricsData.forEach(function (m) {
    const block = document.createElement("div");
    block.className = "metric-block";
    const row = document.createElement("div");
    row.className = "metric-row";
    const lbl = document.createElement("span");
    lbl.textContent = m.label;
    const val = document.createElement("span");
    val.textContent = m.pct + "%";
    row.appendChild(lbl);
    row.appendChild(val);
    const track = document.createElement("div");
    track.className = "bar-track";
    const fill = document.createElement("div");
    fill.className = "bar-fill " + m.cls;
    fill.dataset.width = String(m.pct);
    track.appendChild(fill);
    block.appendChild(row);
    block.appendChild(track);
    metricsRoot.appendChild(block);
  });

  const projects = [
    { hot: true, icon: "🚀", name: "AquireIQ", url: "https://github.com/abd84/AquireIQ", desc: "Intelligent acquisition & analytics — active production development." },
    { hot: true, icon: "🎙️", name: "StutterNet", url: "https://github.com/abd84/StutterNet-", desc: "Speech pathology AI — deep learning on disfluency patterns." },
    { hot: false, icon: "🧠", name: "AlzFed", url: "https://github.com/abd84/AlzFed", desc: "Federated learning for Alzheimer's research pipelines." },
    { hot: false, icon: "📄", name: "ai-pdf-editor", url: "https://github.com/abd84/ai-pdf-editor", desc: "Humanized AI document editing via natural language." },
    { hot: false, icon: "🛡️", name: "Adversarial ResNet", url: "https://github.com/abd84/Adversarial-ResNet-Resilience-Gradient-Perturbation-Fidelity-Analysis-", desc: "FGSM/PGD attacks — 97.91% clean accuracy with noise defense." }
  ];
  const projectsRoot = document.getElementById("projects");
  projects.forEach(function (p) {
    const card = document.createElement("div");
    card.className = "project-card" + (p.hot ? " hot" : "");
    const icon = document.createElement("div");
    icon.textContent = p.icon;
    const body = document.createElement("div");
    const link = document.createElement("a");
    link.href = p.url;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = p.name;
    const desc = document.createElement("p");
    desc.textContent = p.desc;
    body.appendChild(link);
    body.appendChild(desc);
    card.appendChild(icon);
    card.appendChild(body);
    projectsRoot.appendChild(card);
  });

  const lines = [
    { t: "> boot neural_lab --profile abd84", c: "" },
    { t: "> loading multimodal_weights... OK", c: "ok" },
    { t: "> mounting healthcare_cv module... OK", c: "ok" },
    { t: "> scanning adversarial_defense... 97.9% fidelity", c: "ok" },
    { t: "> federated node AlzFed sync... connected", c: "ok" },
    { t: "> WARNING: prompt_injection sandbox active", c: "warn" },
    { t: "> deploy AquireIQ + StutterNet pipelines... running", c: "ok" },
    { t: "> status: READY FOR COLLAB", c: "ok" }
  ];
  const term = document.getElementById("terminal");
  lines.forEach(function (l, i) {
    const d = document.createElement("div");
    d.className = "line " + l.c;
    d.style.animationDelay = i * 0.35 + "s";
    d.textContent = l.t;
    term.appendChild(d);
  });

  document.querySelectorAll("[data-width]").forEach(function (el) {
    setTimeout(function () {
      el.style.width = el.dataset.width + "%";
    }, 400);
  });

  var repoEl = document.getElementById("repo-count");
  var target = 21;
  var n = 0;
  function countUp() {
    n += Math.ceil(target / 30);
    if (n >= target) {
      repoEl.textContent = String(target);
      return;
    }
    repoEl.textContent = String(n);
    requestAnimationFrame(countUp);
  }
  setTimeout(countUp, 600);

  if (typeof THREE === "undefined") return;

  var canvas = document.getElementById("canvas-bg");
  var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
  camera.position.z = 28;

  var N = 1200;
  var geo = new THREE.BufferGeometry();
  var pos = new Float32Array(N * 3);
  for (var i = 0; i < N; i++) {
    var t = Math.random() * Math.PI * 2;
    var p = Math.random() * Math.PI;
    var r = 8 + Math.random() * 4;
    pos[i * 3] = r * Math.sin(p) * Math.cos(t);
    pos[i * 3 + 1] = r * Math.sin(p) * Math.sin(t) * 1.2;
    pos[i * 3 + 2] = r * Math.cos(p);
  }
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  var mat = new THREE.PointsMaterial({
    size: 0.08,
    color: 0x00f5d4,
    transparent: true,
    opacity: 0.75,
    blending: THREE.AdditiveBlending
  });
  var points = new THREE.Points(geo, mat);
  scene.add(points);

  function resize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);

  var mx = 0;
  var my = 0;
  window.addEventListener("mousemove", function (e) {
    mx = (e.clientX / window.innerWidth - 0.5) * 0.6;
    my = (e.clientY / window.innerHeight - 0.5) * 0.4;
  });

  function animate() {
    requestAnimationFrame(animate);
    points.rotation.y += 0.0018;
    points.rotation.x += 0.0006;
    camera.position.x += (mx * 6 - camera.position.x) * 0.02;
    camera.position.y += (-my * 4 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }
  animate();
})();
