const initialState = {
    page: "main",
    systemcolor: "white",
    color: "#000000",
    subcolor: "white",
    specialRightText: false,
    rightText: {title1: "ADANEDE", title2: "/eɪdəned/", title3: "Noun", text: 'The word is formed by combining terms "ada" and "eden”.  It reflects the idea of exploring and using the resources that are around us at the moment and creating something new out of them, as well as the idea of technology and the pursuit of the ideal place that humanity has dreamed of.'},
    rightLink: {control: false, value: {link: "test.test", name: "test"}},
    animation: false,
    projectsSlider: null
  };

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

export function mainReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PAGE':
      if (action.payload === 'main') {
          window.history.pushState('main', '', '/')
          document.title = 'Adanede'
      }
      else {
        window.history.pushState(action.payload, '', action.payload)
        document.title = titleCase(action.payload)
      }
      return { ...state, page: action.payload };
    case 'SET_SYSTEM_COLOR':
      return { ...state, systemcolor: action.payload };
    case 'SET_SUB_COLOR':
      return { ...state, subcolor: action.payload };
    case 'SET_RIGHT_TEXT':
      return { ...state, rightText: action.payload };
    case 'SET_SPECIAL_RIGHT_TEXT':
      return { ...state, specialRightText: action.payload };
    case 'SET_RIGHT_LINK':
      return { ...state, rightLink: action.payload };
    case 'SET_ANIMATION':
      return { ...state, animation: action.payload };
    case 'SET_PROJECT_SLIDER':
      return { ...state, projectsSlider: action.payload };
    default:
      return state;
  }
}
