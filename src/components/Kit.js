// NPM Imports

// CSS Imports
import './Kit.css';

function Kit(props) {
  return (
    <div className="kit">
      <div className="kit-row">
        <div className='kit-title'>Kit Label:</div>
        <div className='kit-data'>{props.label}</div>
      </div>
      <div className="kit-row">
        <div className='kit-title'>Tracking #:</div>
        <div className='kit-data'>
          <a href={`https://www.fedex.com/fedextrack/?tracknumbers=${props.tracking}&cntry_code=us`} target='_blank'>{props.tracking}</a>
        </div>
      </div>
      <div className='kit-row'>
        <div className='kit-title'>ID:</div>
        <div className='kit-data'>{props.id}</div>
      </div>
    </div>
  )
}

export default Kit;