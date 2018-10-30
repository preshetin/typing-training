import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () =>
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Клавиатурный тренажер "слепой" печати</h1>
          <p className="lead text-muted">Навык слепой печати вам точно пригодится. Начтите с простого, и через две недели вы перестанете смотреть на клавиатуру</p>
          <p>
            <Link to="/lessons/1" className='btn btn-lg btn-primary my-2'>
              Попробовать бесплатно	
            </Link>
            &nbsp;
            <a href="#" className="btn btn-lg btn-secondary my-2">Купить за 799₽</a>
          </p>
        </div>
      </section>

export default Landing;
