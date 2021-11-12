import React, { FunctionComponent } from 'react'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import Menus from '../components/Layout/Menus'
import Comments from '../components/Layout/Comments'

type MainLayoutProps = {
  children: React.ReactNode | React.ReactChildren
  hideMenu?: boolean
  hideComment?: boolean
}

export const MainLayout: FunctionComponent<MainLayoutProps> = ({
  children,
  hideMenu = false,
  hideComment = false,
}) => {
  return (
    <Box p={2}>
      <Grid container spacing={2} justifyContent={'space-evenly'}>
        <Grid item lg={2}>
          {!hideMenu && <Menus />}
        </Grid>
        <Grid item xs>
          {children}
        </Grid>
        <Grid item lg={3}>
          {!hideComment && <Comments />}
        </Grid>
      </Grid>
    </Box>
  )
}
export default MainLayout
