const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayLesson(data.data));
};


     const loadIfo = (id) => {
            const url = `https://openapi.programming-hero.com/api/level/${id}`
            fetch(url)
            .then(res => res.json())
            .then(data => displayInfo(data.data))
       

     }

     const displayInfo = (words) =>  {

        const wordContainer = document.getElementById('word-container')
            wordContainer.innerHTML = '';
        words.forEach(word => {
            console.log(word);
        })

     }
 
const displayLesson = (lessons) => {
  // getting the lesson container
  const lessonContainer = document.getElementById("lessons-container");
  lessons.forEach((lesson) => {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
        
                        <button onclick="loadIfo(${lesson.level_no})"  class="btn btn-outline btn-primary ">
                  <i class="fa-solid fa-book-open"></i>
                  Lesson -${lesson.level_no}
                </button>

        `;
    lessonContainer.appendChild(btnDiv)
  
    });


};

loadLessons();
