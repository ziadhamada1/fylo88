// Typed Text Animation
var typed = new Typed(".text", {
  strings: ["التصاميم", "التصاميم"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// Sticky Header on Scroll
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Particles JS Initialization (Wrapped in try-catch)

try {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 1020,  // زيادة عدد النجوم
        "density": {
          "enable": true,
          "value_area": 1600  // زيادة الكثافة لتغطية أكبر مساحة
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "star"  // النجوم
      },
      "opacity": {
        "value": 0.9,
        "random": true
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 0.5,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "window",  // التفاعل يكون على مستوى نافذة الصفحة
      "events": {
        "onmousemove": {  // التفاعل مع الماوس
          "enable": true,
          "mode": "repulse"  // جعل النجوم تتحرك بعيدًا عن الماوس
        },
        "onclick": {
          "enable": false
        }
      },
      "modes": {
        "repulse": {  // عندما يمر الماوس، تتحرك النجوم بعيدًا
          "distance": 100,
          "duration": 0.4
        }
      }
    },
    "retina_detect": true
  });
} catch (e) {
  console.warn("particles.js error:", e.message);
}


window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = 0;  // جعل اللودر شفافاً
    setTimeout(() => {
      loader.style.display = "none";  // إخفاء اللودر بعد وقت قصير
    }, 500);  // وقت التأخير
  }, 750);  // وقت انتظار قبل بدء التلاشي
});

// Progress Bar Animation for Skills Section
window.addEventListener("load", () => {
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach(bar => {
    const progress = bar.querySelector(".progress");
    const percent = bar.getAttribute("data-percent");
    const percentageElement = bar.querySelector(".percent");

    let current = 0;

    const interval = setInterval(() => {
      if (current <= percent) {
        progress.style.width = current + "%";
        percentageElement.textContent = current + "%";
        current++;
      } else {
        clearInterval(interval);
      }
    }, 20);  // Adjust the speed of progress here
  });
});

// Circle Progress Animation
const circles = document.querySelectorAll(".circle-wrap");

circles.forEach((circle) => {
  const number = circle.querySelector(".number");
  const progress = circle.querySelector(".progress");
  const percent = parseInt(circle.getAttribute("data-percent"));
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  progress.style.strokeDasharray = circumference;
  progress.style.strokeDashoffset = circumference;

  let current = 0;

  const updateProgress = () => {
    if (current <= percent) {
      const offset = circumference - (current / 100) * circumference;
      progress.style.strokeDashoffset = offset;
      number.textContent = current + "%";
      current++;
      setTimeout(updateProgress, 20);
    }
  };

  updateProgress();
});

// Smooth Scroll for Navigation Links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    });
  });
});







window.addEventListener("load", function () {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.opacity = 1;  // تأكد من أن اللودر مرئي أولاً
    setTimeout(() => {
      loader.style.opacity = 0;  // ثم اجعل اللودر شفافاً بعد فترة قصيرة
      setTimeout(() => {
        loader.style.display = "none";  // إخفاء اللودر بعد التلاشي
      }, 500);
    }, 1000);  // تأخير قبل بدء التلاشي
  }, 100);  // إضافة تأخير بسيط لإظهار اللودر أولاً
});












const rocketBtn = document.getElementById("rocketBtn");
const smokeContainer = document.getElementById("smokeContainer");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  if (scrollY >= 500) {
    rocketBtn.classList.add("rocket-show");
  } else {
    rocketBtn.classList.remove("rocket-show");
  }
});

rocketBtn.addEventListener("click", () => {
  rocketBtn.classList.add("rocket-launch");

  // دخان متكرر أثناء الطيران
  let smokeInterval = setInterval(() => {
    createSmokePuff();
  }, 150); // كل 150ms تطلع نفثة

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  setTimeout(() => {
    rocketBtn.classList.remove("rocket-launch");
    rocketBtn.classList.remove("rocket-show");
    clearInterval(smokeInterval);
  }, 2500);
});

function createSmokePuff() {
  const puff = document.createElement("div");
  puff.classList.add("smoke-puff");

  // مكان عشوائي بسيط حول الصاروخ
  puff.style.left = `${Math.random() * 30 - 15}px`;

  smokeContainer.appendChild(puff);

  // شيله بعد الأنيميشن
  setTimeout(() => {
    puff.remove();
  }, 1500);
}






const emailInput = document.getElementById("emailInput");
const submitBtn = document.getElementById("submitBtn");

function isEmailValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener("mouseenter", () => {
  const email = emailInput.value;

  if (!isEmailValid(email)) {
    // Random movement to left or right
    const moveDistance = Math.random() * 150 + 50; // between 50px and 200px
    const direction = Math.random() > 0.5 ? 1 : -1;
    submitBtn.style.transform = `translateX(${moveDistance * direction}px)`;

    submitBtn.classList.remove("valid");
    submitBtn.classList.add("invalid");
  } else {
    submitBtn.style.transform = "translateX(0)";
    submitBtn.classList.remove("invalid");
    submitBtn.classList.add("valid");
  }
});

submitBtn.addEventListener("mouseleave", () => {
  submitBtn.style.transform = "translateX(0)";
  submitBtn.classList.remove("invalid", "valid");
});

function handleSubmit(e) {
  e.preventDefault();
  const email = emailInput.value;

  if (!isEmailValid(email)) {
    alert("Please enter a valid email!");
    return;
  }

  alert("Form submitted successfully!");
  // You can send the form here
}





const menuIcon = document.getElementById('menuIcon');
const menuIconIcon = menuIcon.querySelector('i'); // الأيقونة جوا الديف
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  // نغير شكل الأيقونة
  if (navbar.classList.contains('active')) {
    menuIconIcon.classList.remove('fa-bars');
    menuIconIcon.classList.add('fa-times');
  } else {
    menuIconIcon.classList.remove('fa-times');
    menuIconIcon.classList.add('fa-bars');
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIconIcon.classList.remove('fa-times');
    menuIconIcon.classList.add('fa-bars');
  });
});











