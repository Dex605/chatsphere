// ChatSphere — App Logic

var selPlan = {};
var curTab = 'women';
var countryKey = {
  'USA': 'USA',
  'United Kingdom': 'UK',
  'France': 'France',
  'Spain': 'Spain',
  'Germany': 'Germany'
};

// ── Navigation ──────────────────────────────────────────
function go(pageId) {
  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('active');
  });
  var target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }
}

// ── Login ────────────────────────────────────────────────
function doLogin() {
  var u = document.getElementById('lu').value.trim();
  var p = document.getElementById('lp').value.trim();
  var err = document.getElementById('lerr');

  if (!u || !p) {
    err.textContent = 'Please fill in all fields.';
    err.classList.add('on');
    return;
  }

  // Always show error (as per spec)
  err.textContent = 'Incorrect username or password. Please try again.';
  err.classList.add('on');

  ['lu', 'lp'].forEach(function(id) {
    var el = document.getElementById(id);
    el.style.borderColor = 'rgba(239,68,68,0.6)';
    setTimeout(function() { el.style.borderColor = ''; }, 2000);
  });
}

// ── Sign Up ──────────────────────────────────────────────
function doSignup() {
  var u   = document.getElementById('su').value.trim();
  var e   = document.getElementById('se').value.trim();
  var ph  = document.getElementById('sph').value.trim();
  var p   = document.getElementById('sp').value;
  var p2  = document.getElementById('sp2').value;
  var err = document.getElementById('serr');

  if (!u || !e || !ph || !p || !p2) {
    err.textContent = 'Please fill in all fields.';
    err.classList.add('on');
    return;
  }
  if (p !== p2) {
    err.textContent = 'Passwords do not match. Please try again.';
    err.classList.add('on');
    return;
  }
  if (p.length < 6) {
    err.textContent = 'Password must be at least 6 characters.';
    err.classList.add('on');
    return;
  }
  err.classList.remove('on');
  go('plans');  // must choose plan before anything else
}

// ── Plan Selection ───────────────────────────────────────
function pickPlan(el, country, flag, price, desc) {
  document.querySelectorAll('.plan-card').forEach(function(c) {
    c.classList.remove('sel');
  });
  el.classList.add('sel');
  selPlan = { country: country, flag: flag, price: price, desc: desc };

  var btn = document.getElementById('plan-btn');
  btn.textContent = 'Continue with ' + country + ' — KSh ' + price + ' \u2192';
  btn.classList.remove('disabled');
}

function goPay() {
  if (!selPlan.country) return;

  document.getElementById('pay-amt').textContent = 'KSh ' + selPlan.price;
  document.getElementById('pay-country-lbl').textContent = selPlan.flag + ' ' + selPlan.country + ' Plan';
  document.getElementById('pay-plan-lbl').textContent = selPlan.country + ' (' + selPlan.desc + ')';
  go('mpesa');
}

// ── Hub (after payment) ──────────────────────────────────
function goHub() {
  if (!selPlan.country) {
    selPlan = { country: 'USA', flag: '🇺🇸', price: '140' };
  }
  document.getElementById('hub-flag-hdr').textContent = selPlan.flag;
  document.getElementById('hub-country-name').textContent = 'Chatting with ' + selPlan.country;

  curTab = 'women';
  document.querySelectorAll('.gtab').forEach(function(t, i) {
    t.classList.toggle('act', i === 0);
  });

  renderMembers('women');
  go('hub');
}

function switchTab(gender, el) {
  curTab = gender;
  document.querySelectorAll('.gtab').forEach(function(t) { t.classList.remove('act'); });
  el.classList.add('act');
  renderMembers(gender);
}

function renderMembers(gender) {
  var key = countryKey[selPlan.country] || 'USA';
  var countryData = MEMBERS[key] || MEMBERS['USA'];
  var list = countryData[gender] || [];

  var container = document.getElementById('member-list');
  var gIcon = gender === 'women' ? '👩' : '👨';
  container.innerHTML = '<div class="section-lbl">' + gIcon + ' ' +
    gender.charAt(0).toUpperCase() + gender.slice(1) +
    ' from ' + selPlan.country + '</div>';

  list.forEach(function(m) {
    var isOnline = m.status === 'Online';
    var card = document.createElement('div');
    card.className = 'member-card';
    card.onclick = function() { openChat(m); };
    card.innerHTML =
      '<div class="avatar" style="border-color:' + m.color + '">' +
        '<span style="font-size:22px">' + m.emoji + '</span>' +
      '</div>' +
      '<div style="flex:1;min-width:0">' +
        '<div class="m-name">' + m.name + '</div>' +
        '<div class="m-meta">Age ' + m.age + ' · ' + m.bio + '</div>' +
      '</div>' +
      '<div class="m-status' + (isOnline ? '' : ' m-offline') + '">' + m.status + '</div>';
    container.appendChild(card);
  });
}

// ── Chat ─────────────────────────────────────────────────
function openChat(member) {
  document.getElementById('chat-name').textContent = member.name;
  document.getElementById('chat-av').textContent = member.emoji;
  document.getElementById('msgs').innerHTML =
    '<div class="msg min">Hello! Great to meet you on ChatSphere! I\'m ' + member.name +
    '. ' + member.bio + '. How are you? 😊<div class="mtime">Just now</div></div>';
  go('chat');
}

function sendMsg() {
  var input = document.getElementById('ci');
  var text = input.value.trim();
  if (!text) return;

  var msgs = document.getElementById('msgs');
  var now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  var outDiv = document.createElement('div');
  outDiv.className = 'msg mout';
  outDiv.innerHTML = text + '<div class="mtime">' + now + '</div>';
  msgs.appendChild(outDiv);
  input.value = '';
  msgs.scrollTop = msgs.scrollHeight;

  setTimeout(function() {
    var reply = REPLIES[Math.floor(Math.random() * REPLIES.length)];
    var inDiv = document.createElement('div');
    inDiv.className = 'msg min';
    inDiv.innerHTML = reply + '<div class="mtime">' +
      new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + '</div>';
    msgs.appendChild(inDiv);
    msgs.scrollTop = msgs.scrollHeight;
  }, 1000 + Math.random() * 800);
}

// ── Boot ─────────────────────────────────────────────────
go('home');
