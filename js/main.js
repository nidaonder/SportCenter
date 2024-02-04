/* ------Navbar------ */

window.addEventListener('scroll', function() {
    let navElement = document.querySelector('#navbar');
    if(this.window.scrollY > 0 ) {
        navElement.classList.add('scrolled');
    } else {
        navElement.classList.remove('scrolled');
    }
});

document.querySelector('.hamburger-menu').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
})

/* ------Our Classes------ */ 

const classContent = [
    {
        name: "Yoga",
        content: `
        <div class="text">
        <h4>Why are your Yoga</h4><br>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing <br> elit. Autem expedita quidem rem ratione
            cumque <br> ex provident ad quas, inventore atque magni <br> perspiciatis nisi accusamus?
            Labore,
            quis odio. Velit,<br> temporibus a
        </p> <br>
        <h4>When comes Yoga Your Time.</h4> <br>
        <p>
            Saturday-Sunday: 8:00 am - 10:00 am <br><br>
            Monday-Tuesday: 10:00 am - 12:00 pm <br><br>
            Wednesday-Friday: 3:00 pm - 6:00 pm
        </p><br>
        </div>`,
        photo: "images/yoga.jpg"
    },
    {
        name: "Group",
        content: `
        <div class="text">
        <h4>Why are your Group</h4><br>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing <br> elit. Autem expedita quidem rem ratione
            cumque <br> ex provident ad quas, inventore atque magni <br> perspiciatis nisi accusamus?
            Labore,
            quis odio. Velit,<br> temporibus a
        </p> <br>
        <h4>When comes Group Your Time.</h4> <br>
        <p>
            Saturday-Sunday: 8:00 am - 10:00 am <br><br>
            Monday-Tuesday: 10:00 am - 12:00 pm <br><br>
            Wednesday-Friday: 3:00 pm - 6:00 pm
        </p><br>
        </div>`,
        photo: "images/group.webp"
    },
    {
        name: "Solo",
        content: `
        <div class="text">
        <h4>Why are your Solo</h4><br>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing <br> elit. Autem expedita quidem rem ratione
            cumque <br> ex provident ad quas, inventore atque magni <br> perspiciatis nisi accusamus?
            Labore,
            quis odio. Velit,<br> temporibus a
        </p> <br>
        <h4>When comes Solo Your Time.</h4> <br>
        <p>
            Saturday-Sunday: 8:00 am - 10:00 am <br><br>
            Monday-Tuesday: 10:00 am - 12:00 pm <br><br>
            Wednesday-Friday: 3:00 pm - 6:00 pm
        </p><br>
        </div>`,
        photo: "images/solo.jpg"
    },
    {
        name: "Stretching",
        content: `
        <div class="text">
        <h4>Why are your Stretching</h4><br>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing <br> elit. Autem expedita quidem rem ratione
            cumque <br> ex provident ad quas, inventore atque magni <br> perspiciatis nisi accusamus?
            Labore,
            quis odio. Velit,<br> temporibus a
        </p> <br>
        <h4>When comes Stretching Your Time.</h4> <br>
        <p>
            Saturday-Sunday: 8:00 am - 10:00 am <br><br>
            Monday-Tuesday: 10:00 am - 12:00 pm <br><br>
            Wednesday-Friday: 3:00 pm - 6:00 pm
        </p><br>
        </div>`,
        photo: "images/stret.webp"
    }
]

document.querySelectorAll('.box.box-3 a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const className = this.textContent;
      updateClassContent(className);
    });
  });
  
  function updateClassContent(className) {
    const content = classContent.find(c => c.name === className);
    if (!content) return;
  
    const box4 = document.querySelector('.box.box-4');
    box4.querySelector('.text').innerHTML = content.content;
    box4.querySelector('.photo img').src = content.photo;
    box4.querySelector('.photo img').alt = `${className} image`;
  }

/*  ------ BMİ ------ */

const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const cursor = document.querySelector('.cursor');

function updateBMICursor() {
    if(!height.value || !weight.value) return;

    let bmi = weight.value / ((height.value / 100) * (height.value / 100));
    let leftPercent;

    if (bmi < 18.5) {
        leftPercent = "14%";
    } else if(bmi < 24.9) {
        leftPercent = "30%";
    } else if(bmi < 29.9) {
        leftPercent = "47%";
    } else if(bmi < 34.9) {
        leftPercent = "64%";
    } else if (bmi >= 35) {
        leftPercent = "79%";
    }
    cursor.style.left = leftPercent;
}

height.addEventListener('input', updateBMICursor);
weight.addEventListener('input', updateBMICursor);