document.addEventListener("DOMContentLoaded", () => {
  const arrows = document.querySelector(".arrows");
  const mainpic = document.getElementById("mainpic");
  const info = document.getElementById("info");
  const name = document.getElementById("name");
  const jop = document.getElementById("jop");

  const slides = {
    girl: {
      image: "images/image-tanya.jpg",
      text: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
                    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
                    excited about the future. ”`,
      name: "Tanya Sinclair",
      job: "UX Engineer",
    },
    boy: {
      image: "images/image-john.jpg",
      text: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
                    The depth the instructors go into is incredible. I now feel so confident about 
                    starting up as a professional developer. ”`,
      name: "John Tarkpor",
      job: "Junior Front-end Developer",
    },
  };

  const keys = Object.keys(slides);
  let currentIndex = 0;

  function updateContent(index) {
    const key = keys[index];
    mainpic.src = slides[key].image;
    info.innerHTML = slides[key].text;
    name.innerHTML = slides[key].name;
    jop.innerHTML = slides[key].job;
  }

  function changeSlide(direction) {
    currentIndex = (currentIndex + direction + keys.length) % keys.length;
    updateContent(currentIndex);
  }

  arrows.addEventListener("click", (event) => {
    if (event.target.id === "next") {
      changeSlide(1);
    } else if (event.target.id === "prev") {
      changeSlide(-1);
    }
  });

  // Initialize with the first slide
  updateContent(currentIndex);
});
