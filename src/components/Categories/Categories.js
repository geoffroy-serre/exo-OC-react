import './styles.css';

function Categories({ categories, setCategoryState }) {
  return (
    <div className="categories">
      <ul className="categories__list">
        <li className="categories__item" key={`all-items`} onClick={() => setCategoryState('all')}>
          Toutes
        </li>
        {categories.map((category, index) => (
          <li className="categories__item" key={`${category}-${index}`} onClick={() => setCategoryState(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
