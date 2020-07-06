const INITIAL_STATE = {
  activeLesson: {}, // armazenar as informaçoes da lesson ativas // 
  activeModule: {},// armazenar as informaçoes da lesson ativas //
  modules: [  // retornar como vai inicializar na aplicação //

    {
      id: 1,
      title: "init com react",
      lessons: [
        { id: 1, title: "aula 1" },
        { id: 2, title: "aula 2" }
      ],
    },
  
    {
      id: 2,
      title: "init com react",
      lessons: [
        { id: 3, title: "aula 3" },
        { id: 4, title: "aula 4" }
      ]
    }
  ]
};

export default function course(state = INITIAL_STATE, action ){  // armazena estado e pode manipulalo && actions= acoes para manipular o estado //
  if(action.type === 'TOGGLE-LESSON'){
    return { ...state, activeLesson: action.lesson, activeModule: action.module };// modificando um estado //
  }
  return state; 
}