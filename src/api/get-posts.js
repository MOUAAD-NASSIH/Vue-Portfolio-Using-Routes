var names = [
  "Google LandingPage",
  "Starbucks Clone",
  "Facebook LandingPage",
  "Google Clone",
  "Facebook Clone",
  "Starbucks LandingPage",
  "twitter LandingPage",
  "twitter Clone",
  "Instagram LandingPage",
  "Instagram Clone",
  "YouTube LandingPage",
];

const getPosts = (number) => {
  let ret = [];

  for (var i = 0; i < number; i++) {
    ret.push({
      author: names[i % names.length],
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    });
  }

  return ret;
};
export default getPosts;
