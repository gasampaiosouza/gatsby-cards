import React from 'react';

// import arrow_right from '../../public/static/images/arrow-right.svg';
import '../styles/style.scss';

const Card = ({ image, title, description, readTime }) => {
  if (!description) {
    description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum
    aut quis ipsa praesentium unde laboriosam dignissimos perspiciatis
    corrupti debitis ipsum, dolore vel.`;
  }

  return (
    <div className="card">
      <img src={image} alt="icon" className="card__image" />

      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>

      <div className="card--bottom">
        <a href="#" className="card--bottom__link">
          Go to post
          <svg
            className="card--bottom__link-arrow"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="long-arrow-alt-right"
            class="svg-inline--fa fa-long-arrow-alt-right fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="inherit"
              d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"
            ></path>
          </svg>
        </a>

        <span className="card--bottom__read-time">{readTime} minutes read</span>
      </div>
    </div>
  );
};

export default Card;
