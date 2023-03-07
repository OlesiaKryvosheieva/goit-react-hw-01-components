import PropTypes from 'prop-types'
import css from './Statistics.module.css'

export function Statistics ({title, stats}) {
  return (
  <section className="statistics">
   {title && <h2 className="title">{title}</h2>} 

  <ul className={css.statList}>
    {stats.map (stat => (
        <li className="item"  key={stat.id}>
        <span className="label">{stat.label}</span>
        <span className="percentage">{stat.percentage}</span>
      </li>
    )) }
  </ul>
</section>
); 
};

Statistics.protoTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
      })),
}