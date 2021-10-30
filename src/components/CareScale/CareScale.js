import './styles.css';

function CareScale({ light, carbon }) {
  let lightDemand = '';
  let carbonDemand = '';

  switch (light) {
    case 'faible':
      lightDemand = '💡';
      break;
    case 'moyen':
      lightDemand = '💡💡';
      break;
    case 'élevé':
      lightDemand = '💡💡💡';
      break;

    default:
      lightDemand = 'unknown';
      break;
  }

  switch (carbon) {
    case 'faible':
      carbonDemand = '🌱';
      break;
    case 'moyen':
      carbonDemand = '🌱🌱';
      break;
    case 'élevé':
      carbonDemand = '🌱🌱🌱';
      break;

    default:
      carbonDemand = 'unknown';
      break;
  }

  return (
    <div className="careScale">
      <div>{lightDemand}</div>
      <div>{carbonDemand}</div>
    </div>
  );
}

export default CareScale;
