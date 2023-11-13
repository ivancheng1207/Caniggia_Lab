const BioData = [
  {
    member: "Julien",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ad aliquam consequuntur, molestias adipisci iure repellat deleniti totam ipsa. Nulla tempora sapiente praesentium doloribus similique repellendus repudiandae numquam voluptate pariatur."
  },
  {
    member: "Nicole",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ad aliquam consequuntur, molestias adipisci iure repellat deleniti totam ipsa. Nulla tempora sapiente praesentium doloribus similique repellendus repudiandae numquam voluptate pariatur."
  }
];

const memberImage = document.querySelector(".member-modal");
const memberModal = document.querySelector(".julien-modal");

memberImage.addEventListener("click", function() {
  console.log('hellllo')
  memberModal.classList.add("member-modal-active");
});