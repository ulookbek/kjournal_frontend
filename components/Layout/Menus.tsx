import React, { FunctionComponent } from 'react'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import makeStyles from '@mui/styles/makeStyles'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import EqualizerIcon from '@mui/icons-material/Equalizer'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'

// @ts-ignore
const useStyles = makeStyles(() => ({
  menu: {
    position: 'fixed',
  },
  menuTitle: {
    fontSize: '18px',
    padding: '5px',
  },
  menuWrapper: {
    borderRadius: 6,
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
}))

type MenusProps = {}

export const Menus: FunctionComponent<MenusProps> = (props) => {
  const styles = useStyles()
  return (
    <MenuList className={styles.menu}>
      <MenuItem className={styles.menuWrapper}>
        <ListItemIcon>
          <WhatshotIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap className={styles.menuTitle}>
          Популярное
        </Typography>
      </MenuItem>
      <MenuItem className={styles.menuWrapper}>
        <ListItemIcon>
          <AccessTimeIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap className={styles.menuTitle}>
          Свежее
        </Typography>
      </MenuItem>
      <MenuItem className={styles.menuWrapper}>
        <ListItemIcon>
          <EqualizerIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap className={styles.menuTitle}>
          Рейтинг
        </Typography>
      </MenuItem>
      <MenuItem className={styles.menuWrapper}>
        <ListItemIcon>
          <FormatListBulletedIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="inherit" noWrap className={styles.menuTitle}>
          Подписки
        </Typography>
      </MenuItem>
    </MenuList>
  )
}
export default Menus
