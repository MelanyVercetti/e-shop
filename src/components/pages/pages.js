import React from 'react';
import 'pages.css'

const Pages = ({changePage, currentPage, count}) => {

  let pagesList = [];
  const limit = 10;

  const pages = () => {
    const clickPages = page => {
      changePage(limit, page * limit)
    }

    for (let i = 1; i < Math.ceil(count / limit); i++) {
      pagesList.push(
        <li className="pageItem" onClick={() => clickPages(i)} key={i}>
          <a href="#" className="pageLink">{i}</a></li>
      )
    }
    return pagesList
  }

  pages();

  return (
    <ul className="Pages">
      {pagesList}
    </ul>
  );
};

export default Pages;
