import './styles.css';

function CareScale({ light, carbon }) {
  let lightDemand = '';
  let carbonDemand = '';

  switch (light) {
    case 'faible':
      lightDemand = 'π‘';
      break;
    case 'moyen':
      lightDemand = 'π‘π‘';
      break;
    case 'Γ©levΓ©':
      lightDemand = 'π‘π‘π‘';
      break;

    default:
      lightDemand = 'unknown';
      break;
  }

  switch (carbon) {
    case 'faible':
      carbonDemand = 'π±';
      break;
    case 'moyen':
      carbonDemand = 'π±π±';
      break;
    case 'Γ©levΓ©':
      carbonDemand = 'π±π±π±';
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
