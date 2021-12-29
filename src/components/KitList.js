// NPM Imports

// My Modules
import Kit from './Kit';

// CSS Imports

function KitList (props) {

  const kits = props.kits;

  return (
    <div className="kit-list">
      {kits.map( (value, index) => (
        <Kit key={value.id} id={value.id} label={value.label_id} tracking={value.shipping_tracking_code} />
      ))}
    </div>
  )
}

export default KitList