 // ----- DOM refs -----
    const form = document.getElementById('loginForm');
    const input = document.getElementById('combinedInput');
    const loginBtn = document.getElementById('loginBtn');
    const feedback = document.getElementById('feedback');

    // ----- helper: set feedback -----
    function setFeedback(msg, type = '') {
      feedback.textContent = msg;
      feedback.className = 'feedback ' + type;
    }

    // ----- handle login (with validation & animation) -----
    function handleLogin(e) {
      e.preventDefault();
      
      // reset states
      input.classList.remove('success', 'error');
      loginBtn.classList.remove('loading');
      setFeedback('', '');

      const val = input.value.trim();

      // basic validation: check if something is entered
      if (!val) {
        input.classList.add('error');
        setFeedback('⛔ please enter username, phone, or password', 'error');
        return;
      }

      // simulate loading
      loginBtn.classList.add('loading');
      loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> logging in...';

      // simulate async login (demo)
      setTimeout(() => {
        // success feedback
        input.classList.add('success');
        setFeedback('✅ welcome back! (demo)', 'success');
        
        loginBtn.classList.remove('loading');
        loginBtn.innerHTML = '<i class="fas fa-arrow-right-to-bracket"></i> log in';
        
        // show success state, but reset after 2.5s (just for demo)
        setTimeout(() => {
          input.classList.remove('success');
          setFeedback('', '');
        }, 2500);
      }, 1200);
    }

    // ----- handle Google (demo) -----
    function handleGoogle() {
      feedback.className = 'feedback';
      feedback.textContent = '🌐 redirecting to Google...';
      feedback.style.color = '#8a8a8a';
      
      // simulate
      setTimeout(() => {
        alert('continue with Google · demo');
        feedback.textContent = '';
      }, 400);
    }

    // ----- handle sign in (demo) -----
    function handleSignIn(e) {
      e.preventDefault();
      feedback.className = 'feedback';
      feedback.textContent = '📝 redirecting to sign up...';
      feedback.style.color = '#8a8a8a';
      
      setTimeout(() => {
        alert('sign up / sign in demo');
        feedback.textContent = '';
      }, 400);
    }

    // ----- extra hover & interaction JS: input focus glow + live feedback -----
    input.addEventListener('focus', function() {
      // subtle hint on focus
      if (!this.value.trim()) {
        setFeedback('💡 enter your username, phone, or password', '');
      }
    });

    input.addEventListener('blur', function() {
      if (!this.value.trim()) {
        setFeedback('', '');
      }
    });

    // live typing: remove error state while typing
    input.addEventListener('input', function() {
      if (this.classList.contains('error')) {
        this.classList.remove('error');
        setFeedback('', '');
      }
      // if it was success, keep but we can optionally remove
      if (this.classList.contains('success')) {
        this.classList.remove('success');
      }
    });

    // ----- extra hover effect: button shine (already in css) -----
    // also add a tiny hover effect on the card via js (optional)
    const card = document.querySelector('.login-card');
    card.addEventListener('mouseenter', function() {
      // subtle pulse on the input label (just for fun)
      const label = this.querySelector('label');
      if (label) {
        label.style.transition = 'color 0.2s';
      }
    });

    console.log('✨ login ready — classic black, hover & JS active');