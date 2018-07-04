import React from 'react';

const ExerciseNavLink = (props) => {
  const navClass = props.isActive ? 'btn-primary' : 'btn-light';
  return <button type="button" className={`btn ${navClass} w-100`}>{props.index + 1}</button>; 
}

const ExerciseNav = (props) => {

  return (
    <div className="btn-group d-flex btn-group-sm" role="group" aria-label="...">
      {props.exercises.map((exercise, index) => (
        <ExerciseNavLink key={index} index={index} isActive={index === props.activeIndex} />
      ))}
    </div>
  );
}

export default ExerciseNav;


//    <button type="button" className="btn btn-primary-outline w-100"></button>
//     <button type="button" className="btn btn-primary w-100">Middle</button>
//     <button type="button" className="btn btn-secondary disabled w-100">Right</button>
