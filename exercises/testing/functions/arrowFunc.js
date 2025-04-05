let ask = (question, yes, no) => {
  if (question) {
    yes();
  }
  else no();
}

ask(
  "dasda",
  () => console.log("You agreed."),
  () => console.log("You canceled the execution.")
)