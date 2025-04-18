// select all elements with class card into a NodeList
const cards = document.querySelectorAll(".card");

// define IntersectionObserver variable
var observer = new IntersectionObserver(
  (entries) => {
    // perform action on each entry into the IntersectionObserver
    entries.forEach((entry) => {
      // toggle class show when the item switches between intersecting and not intersecting. If intersecting show, else dont show
      entry.target.classList.toggle("show", entry.isIntersecting);
      //stop observing when the above has been executed
      //   if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    // value between 0 and 1 that specifies when .isIntersecting is true. 0 is just before it comes on screen 1 is when its fully on screen
    // threshold: 1,
    //this reduces the size of the area being observed by 100px, same happens when it is positive
    // rootMargin: "-100px",
    //Set a root for the IO. The default root is the body
    // root: ""
  }
);

// loop thru NodeList and observe each item on it
cards.forEach((card) => {
  observer.observe(card);
});

var lastCardObserver = new IntersectionObserver((entries) => {
  const lastCard = entries[0];
  if (!lastCard.isIntersecting) return;
  loadNewCards();
  lastCardObserver.unobserve(lastCard.target);
  lastCardObserver.observe(document.querySelector(".card:last-child"));
}, {});

lastCardObserver.observe(document.querySelector(".card:last-child"));

cardContainer = document.querySelector(".card-container");

//function to add 10 new cards
var loadNewCards = () => {
  for (let index = 0; index < 10; index++) {
    const card = document.createElement("div");
    card.textContent = "New Card";
    card.classList.add("card");
    observer.observe(card);
    cardContainer.append(card);
  }
};
