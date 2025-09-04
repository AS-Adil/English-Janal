// 1) Getting the lessons form API-----------
const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayLesson(data.data));
};

loadLessons();

// 2) Creating buttons for every Lessons from API----------
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
    lessonContainer.appendChild(btnDiv);
  });
};

// 3) Getting all the words for every lesson ------------------
const loadIfo = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayInfo(data.data));
};

// 4) Creating Card for every words---------------
const displayInfo = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  words.forEach((word) => {
    console.log(word);
    const div = document.createElement("div");
    div.className = `
  bg-white text-center rounded-xl shadow-md
  flex flex-col items-center justify-center gap-4 py-8
  transition-transform duration-300 ease-in-out
  hover:scale-102 hover:shadow-xl
`;

    // ​
    // level: 5
    // ​
    // meaning: "অসুস্থ বা নিষ্ক্রিয়"
    // ​
    // pronunciation: "লিথারজিক"
    // ​
    // word: "Lethargic"

    div.innerHTML = `
          
          <h3 class="text-2xl font-semibold">${word.word}</h3>
            <p class="font-semibold">
              Meaning / Pronounciation
            </p>
            <p class="font-semibold font-bangla">
             "${word.meaning} / ${word.pronunciation}"   
            </p>
             <div class="flex justify-between w-full px-6">
               <button class="bg-[#1A91FF10] py-2 px-3  rounded-lg hover:bg-[#1A91FF80] cursor-pointer"><i class="fa-solid fa-circle-info"></i></button>
               <button class="bg-[#1A91FF10] py-2 px-3  rounded-lg hover:bg-[#1A91FF80] cursor-pointer"><i class="fa-solid fa-volume-high"></i></button>
             </div>

          `;

    wordContainer.appendChild(div);
  });
};
