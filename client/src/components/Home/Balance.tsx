import React from 'react'
import getBalance from '../../helpers/balance'
import {Box, Typography} from '@mui/material'
import { UserContext } from '../../context/UserProvider'
function Balance() {
  const [balance, setBalance] = React.useState(0)
  const {user} : any = React.useContext(UserContext)
  React.useEffect(() => {
    getBalance().then(res => setBalance(res))
  },[])
  return (
    <Box>
      <Typography variant="h4" component="h2">
        Bienvenido de nuevo, <Typography variant="h4" component='label' color={"primary.main"}>{user?.username}</Typography>
      </Typography>
      <Typography variant="h5" component="h2">
        Balance: <Typography variant='h5' component='label' color={"primary.main"}>${balance}</Typography>
      </Typography>
      
    </Box>
  )
}

export default Balance