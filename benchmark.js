const { performance } = require('perf_hooks');

const ProjectInfo = Array.from({ length: 1000 }, (_, i) => ({
  name: `Project ${i} Test`,
  id: i,
}));

function oldFilter(searchText) {
  return ProjectInfo.filter((item) =>
    item.name.toLowerCase().match(searchText.toLowerCase())
  );
}

function newFilter(searchText) {
  if (!searchText) return ProjectInfo;
  const lowerSearchText = searchText.toLowerCase();
  return ProjectInfo.filter((item) =>
    item.name.toLowerCase().match(lowerSearchText)
  );
}

const searchText = "test";
const iterations = 10000;

let start = performance.now();
for (let i = 0; i < iterations; i++) {
  oldFilter(searchText);
}
const oldTime = performance.now() - start;

start = performance.now();
for (let i = 0; i < iterations; i++) {
  newFilter(searchText);
}
const newTime = performance.now() - start;

console.log(`Old Time: ${oldTime.toFixed(2)}ms`);
console.log(`New Time: ${newTime.toFixed(2)}ms`);
console.log(`Improvement: ${((oldTime - newTime) / oldTime * 100).toFixed(2)}%`);
