import React from 'react';
  
import { connect } from 'react-redux'; //compartilha informação para outro componente//
 
import * as CourseActions from '../../store/actions/course'; // (* as pega todas os export e coloca dentro de 1 objeto )

  const Siderbar = ({modules, dispatch})=> ( // pegando os modulos (module) && dispara actions para redux (dispatch)
    <aside>
    {modules.map( module => ( // key é obrigatorio depois do map//
      <div key={module.id}> 
        <strong>{module.title}</strong>

         <ul>
            {module.lessons.map(lesson  => (
             <li key={lesson.id}> 
             {lesson.title}
              <button onClick={()=>dispatch(toggleLesson(module,lesson))}> selecioanar </button>
           </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>

  );

  export default connect(state => ({ modules: state.course.modules }))(Siderbar); 
  // cria funçaõ que recebe o estato e objeto mapeanado quais informaçoes eu quero //