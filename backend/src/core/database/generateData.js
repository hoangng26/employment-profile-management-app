const initialTl = [
  ['Javascript', 'ReactJS', 'VueJS', 'AngularJS', 'Jquery'],
  ['PHP', 'Python', 'Ruby', 'Java', 'Nodejs', 'C', 'C++', '.NET'],
  ['Adobe XD', 'Figma', 'Illustrator', 'InvisionStudio', 'Photoshop', 'Sketch'],
];

function randomNumber(limit) {
  return Math.floor(Math.random() * limit + 1);
}

function randomArray(length) {
  return Array.from(Array(length).keys());
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomPositions(employeeId, num) {
  let result = [];
  for (let id of randomArray(num)) {
    let positionResourceId = randomNumber(3);
    while (result.find((item) => item.positionResourceId === positionResourceId)) {
      positionResourceId = randomNumber(3);
    }
    result.push({
      employeeId,
      positionResourceId,
      displayOrder: id + 1,
    });
  }

  return result;
}

function TLIndex(tid, pid) {
  let id = 0;
  for (let i = 0; i < pid - 1; i++) {
    id += initialTl[i].length;
  }

  return id + tid;
}

function randomToolLanguages(item, index) {
  const { positionResourceId } = item;
  const toolLanguageResourceId = randomNumber(initialTl[positionResourceId - 1].length);
  const from = randomDate(new Date(2014, 1, 1), new Date());
  let to = randomDate(new Date(2014, 1, 1), new Date());
  while (to - from < 0) {
    to = randomDate(new Date(2014, 1, 1), new Date());
  }

  return {
    toolLanguageResourceId: TLIndex(toolLanguageResourceId, positionResourceId),
    positionId: index + 1,
    displayOrder: 1,
    from: from.toISOString(),
    to: to.toISOString(),
  };
}

function helloAction() {
  const data = randomArray(30).map((item) => {
    const numPosition = randomNumber(3);
    const positions = randomPositions(item + 1, numPosition);
    return positions;
  });

  const toolLanguages = data.flat().map(randomToolLanguages);

  console.log(data.flat());
  console.log(toolLanguages);
}

helloAction();
