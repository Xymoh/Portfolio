const { performance } = require('perf_hooks');

const ProjectInfo = Array.from({ length: 10000 }).map((_, i) => ({
  id: i,
  name: `Project ${i} Test`,
  desc: 'Desc',
  img: 'img',
  url: 'url'
}));

function oldFilter(searchText) {
  if (searchText === "") return ProjectInfo;
  return ProjectInfo.filter((item) =>
    item.name.toLowerCase().match(searchText.toLowerCase())
  );
}

function newFilter(searchText) {
  if (searchText === "") return ProjectInfo;
  const lowerSearchText = searchText.toLowerCase();
  return ProjectInfo.filter((item) =>
    item.name.toLowerCase().includes(lowerSearchText)
  );
}

const searchText = "test";

const oldStart = performance.now();
for (let i = 0; i < 100; i++) {
  oldFilter(searchText);
}
const oldEnd = performance.now();
console.log(`Old filter time: ${oldEnd - oldStart}ms`);

const newStart = performance.now();
for (let i = 0; i < 100; i++) {
  newFilter(searchText);
}
const newEnd = performance.now();
console.log(`New filter time: ${newEnd - newStart}ms`);
