import React from 'react';

const ExerciseNavLink = (props) => {
  let navClass = props.isCompleted ? 'btn-success' : 'btn-light';
  navClass = props.isActive ? 'active ' + navClass : navClass;
  return <button type="button" className={`btn btn-small ${navClass} w-100`}></button>; 
}

const ExerciseNav = (props) => {

  return (
    <div className="btn-group d-flex btn-group-sm" role="group" aria-label="...">
      {props.exercises.map((exercise, index) => (
        <ExerciseNavLink
          key={index}
          index={index}
          isActive={index === props.activeIndex}
          isCompleted={props.isLoggedIn && props.lessonLog.logData.filter(d => d.id === exercise.id).length === 1}
        />
      ))}
    </div>
  );
}

export default ExerciseNav;


//    <button type="button" className="btn btn-primary-outline w-100"></button>
//     <button type="button" className="btn btn-primary w-100">Middle</button>
//     <button type="button" className="btn btn-secondary disabled w-100">Right</button>
