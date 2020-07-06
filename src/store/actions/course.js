export default function toggleLesson(module, lesson ){  // declara a lesson e module ativos
  return {
    type: 'TOGGLE-LESSON', //indica qual a ação realizada//
    module, // informçao vindo do store //
    lesson, // informçao vindo do store //
  };
}