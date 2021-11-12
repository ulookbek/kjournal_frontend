import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AssignmentIcon from '@mui/icons-material/Assignment'
import ShareIcon from '@mui/icons-material/Share'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import { Box, Button } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

// @ts-ignore
const useStyles = makeStyles(() => ({
  title: {
    fontSize: '16px',
    fontWeight: '600',
    padding: '0 5px',
  },
  avatar: {
    backgroundColor: 'red',
    margin: '0 5px -5px 0',
    width: 24,
    height: 24,
    display: 'inline-block',
  },
  author: {
    fontSize: '14px',
    fontWeight: '400',
    padding: '0 15px',
  },
  cardHeader: {
    padding: '16px 20px 0 20px',
  },
  createdAt: {
    fontSize: '14px',
    padding: '0 5px',
    color: '#595959',
  },
  subscribeButton: {
    color: '#3766a9',
    textTransform: 'capitalize',
  },
}))

function ArticleCard() {
  const styles = useStyles()

  const avatar = (
    <Avatar className={styles.avatar} variant="rounded">
      <AssignmentIcon />
    </Avatar>
  )

  const subscribeButton = (
    <Button startIcon={<GroupAddIcon />} className={styles.subscribeButton}>
      Подписаться
    </Button>
  )

  return (
    <Card
      sx={{ maxWidth: 640, margin: 'auto auto 20px auto', borderRadius: 2 }}
    >
      <CardHeader
        className={styles.cardHeader}
        action={subscribeButton}
        title={
          <>
            <span>{avatar}</span>
            <span className={styles.title}>Новости</span>
            <span className={styles.author}>Sasha Shambilova</span>
            <span className={styles.createdAt}>6 часов</span>
          </>
        }
      />
      <div style={{ width: '100%', padding: '0 20px' }}>
        <h3 style={{ margin: '5px 0', fontSize: '25px' }}>
          Основателя проекта Gulagu.net Владимира Осечкина повторно объявили в{' '}
        </h3>
      </div>
      <CardMedia
        component="img"
        height="300"
        image="https://webnews.bg/uploads/images/91/6291/536291/768x432.jpg?_=1624519213"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Его обвиняют в мошенничестве, но подробности дела не раскрывают.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
          <div>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </div>
          <div>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </div>
        </Box>
      </CardActions>
    </Card>
  )
}

export default ArticleCard
