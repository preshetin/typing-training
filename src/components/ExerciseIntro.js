import React from 'react';
import JumbotronWithEnterKeyAction from './JumbotronWithEnterKeyAction';

const ExerciseIntro = ({ intro_text, onIntroFinish }) => {
      return (
        <JumbotronWithEnterKeyAction title="Intro" text={intro_text} onPrimaryAction={onIntroFinish} />
      );
}

export default ExerciseIntro;
