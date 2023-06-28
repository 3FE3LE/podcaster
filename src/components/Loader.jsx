import { Grid } from 'react-loader-spinner'

function Loader() {
  return (<Grid
    height="30"
    width="30"
    color="#99f6e4"
    ariaLabel="grid-loading"
    radius="12.5"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
  )
}

export default Loader