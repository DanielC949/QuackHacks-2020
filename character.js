function getUserData(id) {
  return {
    name: "Lorem ipsum dolor sit amet",
    loadout: {
      chest: null,
      legs: null,
      feet: null,
      other: null
    }
  };
}

function getCustomizable(uid, slot) {
  if (slot === '#chest-select') {
    return [
      {graphic: `new fabric.Path('M 35 160 L 35 90 L 215 90 L 215 160 L 175 160 L 175 240 L 75 240 L 75 160 z', \{fill:'yellow', selectable:false\})`, name: 'Yellow t-shirt'},
      {graphic: `new fabric.Path('M 35 160 L 35 90 L 215 90 L 215 160 L 175 160 L 175 240 L 75 240 L 75 160 z', \{fill:'cyan', selectable:false\})`, name: 'Cyan t-shirt'},
      {graphic: `new fabric.Path('M 35 160 L 35 90 L 215 90 L 215 160 L 175 160 L 175 240 L 75 240 L 75 160 z', \{fill:'magenta', selectable:false\})`, name: 'Magenta t-shirt'}
    ];
  } else if (slot === '#legs-select') {
    return [
      {graphic: `new fabric.Path('M 75 240 L 175 240 L 175 340 L 75 340 z', \{fill:'red', selectable:false\})`, name: 'Red shorts'},
      {graphic: `new fabric.Path('M 75 240 L 175 240 L 175 340 L 75 340 z', \{fill:'green', selectable:false\})`, name: 'Green shorts'},
      {graphic: `new fabric.Path('M 75 240 L 175 240 L 175 340 L 75 340 z', \{fill:'blue', selectable:false\})`, name: 'Blue shorts'}
    ];
  } else if (slot === '#feet-select') {
    return [
      {graphic: `new fabric.Path('M 75 420 L 175 420 L 175 440 L 75 440 z', \{fill:'#E07A5F', selectable:false\})`, name: 'Shoes #1'},
      {graphic: `new fabric.Path('M 75 420 L 175 420 L 175 440 L 75 440 z', \{fill:'#3D405B', selectable:false\})`, name: 'Shoes #2'},
      {graphic: `new fabric.Path('M 75 420 L 175 420 L 175 440 L 75 440 z', \{fill:'#81B29A', selectable:false\})`, name: 'Shoes #3'},
      {graphic: `new fabric.Path('M 75 420 L 175 420 L 175 440 L 75 440 z', \{fill:'#F2CC8F', selectable:false\})`, name: 'Shoes #4'}
    ];
  } else {
    return [{graphic: `null`, name: 'No items'}];
  }
}
